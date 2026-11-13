(function (root) {
  function hasMapLocation(item) {
    return Boolean(item && item.mapVisible !== false && Number.isFinite(item.lat) && Number.isFinite(item.lng)
      && Math.abs(item.lat) <= 90 && Math.abs(item.lng) <= 180);
  }

  function create({ artists, groups, locate, network, onOpen, onClose, getReturnTarget, details, detailsUrl = './data/artist-details.js', document: suppliedDocument }) {
    const doc = suppliedDocument || root.document;
    const normalize = value => String(value || '').normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
    const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const namesOf = item => [item.name].concat(item.aliases || []).map(normalize);
    const all = artists.concat(groups);
    const allNames = indexNames(all);
    const artistNames = indexNames(artists);
    let panel, scroller, closeButton, backButton, returnFocus, selected, revision = 0;
    let history = [];
    let snapshot = details || root.RapArtistDetails;
    let detailsRequest;

    function indexNames(items) {
      const index = new Map();
      const exactNames = new Set(items.map(item => normalize(item.name)));
      items.forEach(item => {
        const exactName = normalize(item.name);
        namesOf(item).filter(Boolean).forEach(key => {
          if (exactNames.has(key) && key !== exactName) return;
          if (!index.has(key)) index.set(key, item);
          else if (index.get(key) !== item) index.set(key, null);
        });
      });
      return index;
    }
    function find(name) { return allNames.get(normalize(name)) || null; }
    function findArtist(name) { return artistNames.get(normalize(name)) || null; }
    function memberLinks(names) {
      return names.map(name => {
        const person = findArtist(name);
        return person
          ? '<button type="button" class="member-profile-link" data-artist-profile="' + escape(person.name) + '">' + escape(name) + '</button>'
          : '<span>' + escape(name) + '</span>';
      }).join(' · ');
    }
    function element(tag, className, text) {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function button(className, text, action) {
      const node = element('button', className, text);
      node.type = 'button';
      node.addEventListener('click', action);
      return node;
    }
    function musicLink(className, text, kind, id) {
      const node = element('a', className, text);
      node.href = 'https://music.163.com/#/' + kind + '?id=' + id;
      node.target = '_blank';
      node.rel = 'noopener noreferrer';
      return node;
    }
    function avatar(item, className, lazy, imageSize) {
      const frame = element('span', 'profile-avatar-frame ' + className);
      const fallback = element('span', 'profile-avatar-fallback', Array.from(item.name || '?')[0]);
      fallback.setAttribute('aria-hidden', 'true');
      frame.append(fallback);
      if (typeof item.avatar === 'string' && /^(https?:\/\/|\.?\.?\/|assets\/)/.test(item.avatar)) {
        const image = element('img');
        image.alt = item.name;
        image.decoding = 'async';
        if (lazy) image.loading = 'lazy';
        image.addEventListener('error', () => { image.hidden = true; });
        let source = item.avatar;
        if (imageSize && /^https?:\/\/p\d+\.music\.126\.net\//.test(source)) {
          source = /([?&])param=\d+y\d+/.test(source)
            ? source.replace(/([?&])param=\d+y\d+/, '$1param=' + imageSize + 'y' + imageSize)
            : source + (source.includes('?') ? '&' : '?') + 'param=' + imageSize + 'y' + imageSize;
        }
        image.src = source;
        frame.append(image);
      }
      return frame;
    }
    function memberNames(item) {
      return [...new Set((item.members || []).filter(name => typeof name === 'string' && name.trim()))];
    }
    function fans(item) {
      return String((root.FANS_CACHE && root.FANS_CACHE[item.neteaseId]) || item.fans || '待补充');
    }
    function section(title, count) {
      const node = element('section', 'profile-section');
      const heading = element('h3', 'profile-section-title', title);
      if (count !== undefined) heading.append(element('span', 'profile-section-count', String(count)));
      node.append(heading);
      return node;
    }
    function personLink(person, displayName, className) {
      const node = person
        ? button(className, undefined, () => open(person.name, { remember: true }))
        : element('div', className + ' is-unresolved');
      node.append(avatar(person || { name: displayName }, 'profile-person-avatar', true), element('span', 'profile-person-name', displayName));
      if (!person) node.append(element('span', 'profile-person-status', '待建资料'));
      return node;
    }
    function networkIcon() {
      const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const attributes = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'aria-hidden': 'true', focusable: 'false' };
      Object.entries(attributes).forEach(([name, value]) => svg.setAttribute(name, value));
      [
        ['path', { d: 'M8.6 10.5 15.4 6.5M8.6 13.5l6.8 4' }],
        ['circle', { cx: 18, cy: 5, r: 3 }],
        ['circle', { cx: 6, cy: 12, r: 3 }],
        ['circle', { cx: 18, cy: 19, r: 3 }]
      ].forEach(([tag, values]) => {
        const part = doc.createElementNS('http://www.w3.org/2000/svg', tag);
        Object.entries(values).forEach(([name, value]) => part.setAttribute(name, value));
        svg.append(part);
      });
      return svg;
    }
    function ensurePanel() {
      if (panel) return;
      panel = element('aside', 'artist-profile-panel');
      panel.id = 'artist-profile-panel';
      panel.hidden = true;
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-labelledby', 'artist-profile-title');
      const toolbar = element('div', 'profile-toolbar');
      backButton = button('profile-back', undefined, event => { event.stopPropagation(); back(); });
      const arrow = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
      Object.entries({ width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2,
        'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' })
        .forEach(([key, value]) => arrow.setAttribute(key, value));
      const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'm14 6-6 6 6 6'); arrow.append(path); backButton.append(arrow);
      backButton.hidden = true;
      toolbar.append(backButton, element('span', 'profile-toolbar-label', '资料卡片'));
      closeButton = button('profile-close', '×', () => close());
      closeButton.setAttribute('aria-label', '关闭资料卡片');
      toolbar.append(closeButton);
      scroller = element('div', 'profile-scroll');
      panel.append(toolbar, scroller);
      doc.body.appendChild(panel);
    }
    function close({ restoreFocus = true } = {}) {
      if (!panel || panel.hidden) return;
      panel.hidden = true;
      selected = null;
      history = [];
      updateBackButton();
      revision++;
      if (onClose) onClose();
      if (restoreFocus && returnFocus && returnFocus.isConnected !== false && typeof returnFocus.focus === 'function') {
        returnFocus.focus({ preventScroll: true });
      }
    }
    function isOpen() { return Boolean(panel && !panel.hidden); }
    function updateBackButton() {
      const previous = history[history.length - 1];
      backButton.hidden = !previous;
      panel.setAttribute('data-profile-history', String(Boolean(previous)));
      const label = '返回' + (previous?.name || previous?.target?.label || '上一页');
      backButton.title = label;
      backButton.setAttribute('aria-label', label);
    }
    function captureView() {
      return { scrollTop: scroller.scrollTop || 0,
        expanded: scroller.querySelector('.profile-biography-toggle')?.getAttribute('aria-expanded') === 'true' };
    }
    function restoreView(state) {
      if (!state) { scroller.scrollTop = 0; return; }
      const toggle = scroller.querySelector('.profile-biography-toggle');
      if (state.expanded && toggle && toggle.getAttribute('aria-expanded') !== 'true') toggle.click();
      scroller.scrollTop = state.scrollTop;
    }
    function back() {
      const previous = history.pop();
      if (!previous) return false;
      if (previous.target) {
        close({ restoreFocus: false });
        previous.target.restore();
      } else {
        open(previous.name, { fromHistory: true, viewState: previous.state });
        if (backButton.hidden) closeButton.focus({ preventScroll: true });
      }
      return true;
    }

    // Load public metadata only when a singer card is opened, not on every map visit.
    function loadDetails() {
      snapshot = snapshot || root.RapArtistDetails;
      if (snapshot) return Promise.resolve(snapshot);
      if (!detailsUrl) return Promise.resolve(null);
      if (!detailsRequest) {
        detailsRequest = new Promise(resolve => {
          const script = element('script');
          script.src = detailsUrl;
          script.onload = () => { snapshot = root.RapArtistDetails; resolve(snapshot || null); };
          script.onerror = () => resolve(null);
          doc.body.appendChild(script);
        }).then(value => { if (!value) detailsRequest = null; return value; });
      }
      return detailsRequest;
    }
    function renderMusic(item, songsSection, bioSection, source) {
      songsSection.replaceChildren(element('h3', 'profile-section-title', '代表作品'));
      bioSection.replaceChildren(element('h3', 'profile-section-title', '艺人简介'));
      const entry = source && source.byArtist && source.byArtist[String(item.neteaseId)];
      const songs = entry && Array.isArray(entry.songs)
        ? entry.songs.filter(song => /^\d+$/.test(String(song.id)) && typeof song.name === 'string').slice(0, 3) : [];
      const list = element('ol', 'profile-song-list');
      songs.forEach((song, index) => {
        const row = element('li', 'profile-song');
        const copy = element('div', 'profile-song-copy');
        copy.append(element('span', 'profile-song-name', song.name), element('span', 'profile-song-artists', song.artists || item.name));
        const link = musicLink('profile-song-open', '', 'song', String(song.id));
        link.setAttribute('aria-label', '在网易云打开歌曲：' + song.name);
        link.title = '在网易云打开';
        row.append(element('span', 'profile-song-order', String(index + 1)), copy, link);
        list.append(row);
      });
      if (songs.length) {
        songsSection.append(list);
      } else songsSection.append(element('p', 'profile-empty', '暂无可核验的热门歌曲'));
      const biography = entry && typeof entry.biography === 'string' ? entry.biography : '';
      if (biography.trim()) {
        const characters = Array.from(biography);
        const text = element('p', 'profile-biography', characters.length > 180 ? characters.slice(0, 180).join('') + '…' : biography);
        bioSection.append(text);
        if (characters.length > 180) {
          const toggle = button('profile-biography-toggle', '展开完整简介', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            text.textContent = expanded ? characters.slice(0, 180).join('') + '…' : biography;
            toggle.textContent = expanded ? '展开完整简介' : '收起简介';
            toggle.setAttribute('aria-expanded', String(!expanded));
          });
          toggle.setAttribute('aria-expanded', 'false');
          bioSection.append(toggle);
        }
      } else bioSection.append(element('p', 'profile-empty', '暂未获取到公开的艺人简介。'));
    }
    function open(name, { remember = false, fromHistory = false, viewState } = {}) {
      const item = find(name);
      if (!item) return false;
      ensurePanel();
      const wasOpen = isOpen();
      if (remember && wasOpen && selected === item) return true;
      if (!fromHistory) {
        if (remember && wasOpen && selected) history.push({ name: selected.name, state: captureView() });
        else {
          history = [];
          const target = getReturnTarget && getReturnTarget();
          if (target && typeof target.restore === 'function') history.push({ target });
        }
      }
      if (!wasOpen) returnFocus = doc.activeElement;
      selected = item;
      const currentRevision = ++revision;
      const group = item.type === 'label';
      const members = memberNames(item);
      panel.setAttribute('data-profile-name', item.name);
      panel.setAttribute('data-profile-type', group ? 'label' : 'singer');
      const hero = element('section', 'profile-hero profile-hero-cover');
      hero.append(avatar(item, 'profile-cover-avatar', false, 750));
      const identity = element('div', 'profile-hero-identity');
      const title = element('h2', 'profile-title', item.name);
      title.id = 'artist-profile-title';
      title.title = item.name;
      if (group) {
        const heading = element('div', 'profile-group-heading');
        heading.append(title);
        if (hasMapLocation(item) && locate) {
          const location = button('profile-locate', '定位', () => locate(item.name));
          location.setAttribute('aria-label', '在地图上定位' + item.name);
          heading.append(location);
        }
        identity.append(heading);
        if (item.founded) identity.append(element('p', 'profile-founded', '成立于' + item.founded));
      } else {
        identity.append(title);
        const metric = element('div', 'profile-metric', fans(item));
        metric.append(element('span', 'profile-metric-label', '粉丝'));
        identity.append(metric);
      }
      if (item.desc && !['自动添加', '网易云自动补全'].includes(item.desc)) identity.append(element('p', 'profile-description', item.desc));
      hero.append(identity);
      if (!hasMapLocation(item)) hero.append(element('p', 'profile-only-note', '仅收录资料，不在地图显示'));
      const actions = element('div', 'profile-actions');
      if (group) {
        // Group IDs are added only after matching the account's biography or member credits.
        if (/^\d+$/.test(String(item.neteaseId))) actions.append(musicLink('profile-music-link', '查看主页', 'artist', String(item.neteaseId)));
        if (actions.children.length === 1) actions.className += ' is-single-action';
      } else {
        const homepage = /^\d+$/.test(String(item.neteaseId))
          ? musicLink('profile-music-link', '查看主页', 'artist', String(item.neteaseId))
          : button('profile-music-link', '查看主页', () => {});
        if (homepage.tagName.toLowerCase() === 'button') { homepage.disabled = true; homepage.title = '暂未收录网易云主页'; }
        actions.append(homepage);
        const available = Boolean(network && hasMapLocation(item) && (item.collaborators || []).length);
        const relation = button('profile-network', undefined, () => {
          if (available) network(item.name, { keepProfile: true });
        });
        relation.append(networkIcon(), element('span', '', '关系网'));
        relation.disabled = !available;
        if (!available) relation.title = '暂无可定位的合作关系';
        actions.append(relation);
      }
      if (actions.children.length) hero.append(actions);
      scroller.replaceChildren(hero);

      let songsSection, bioSection;
      if (!group) {
        songsSection = section('代表作品');
        bioSection = section('艺人简介');
        if (snapshot || root.RapArtistDetails) renderMusic(item, songsSection, bioSection, snapshot || root.RapArtistDetails);
        else {
          bioSection.append(element('p', 'profile-empty', '正在加载艺人简介…'));
          songsSection.append(element('p', 'profile-empty', '正在加载作品资料…'));
        }
        scroller.append(bioSection, songsSection);
      }
      if (group) {
        const roster = section('团体成员', members.length);
        const grid = element('div', 'profile-members');
        members.forEach(name => grid.append(personLink(findArtist(name), name, 'profile-member')));
        if (members.length) roster.append(grid);
        else roster.append(element('p', 'profile-empty', '暂未收录成员资料。'));
        scroller.append(roster);
      } else {
        const memberships = groups.filter(group => memberNames(group).some(member => findArtist(member) === item));
        if (memberships.length) {
          const membershipsSection = section('所属团体');
          const links = element('div', 'profile-relations');
          memberships.forEach(group => links.append(personLink(group, group.name, 'profile-relation')));
          membershipsSection.append(links);
          scroller.append(membershipsSection);
        }
      }
      const peers = [...new Set((item.collaborators || []).map(peer => typeof peer === 'string' ? peer : peer.name).filter(Boolean))];
      if (peers.length) {
        const collaborators = section('合作关系', peers.length);
        const list = element('div', 'profile-collaborators');
        peers.forEach(peer => list.append(personLink(findArtist(peer), peer, 'profile-collaborator')));
        collaborators.append(list);
        scroller.append(collaborators);
      }
      panel.hidden = false;
      updateBackButton();
      restoreView(viewState);
      if (onOpen) onOpen(item);
      if (!wasOpen) closeButton.focus({ preventScroll: true });
      if (!group && !snapshot) {
        loadDetails().then(source => {
          // A late snapshot must not replace a more recently selected artist or a closed card.
          if (revision === currentRevision && selected === item && isOpen()) {
            renderMusic(item, songsSection, bioSection, source);
            if (viewState) restoreView(viewState);
          }
        });
      }
      return true;
    }
    function preview(item) {
      const node = element('div', 'singer-card profile-preview');
      const body = element('div', 'singer-card-body');
      body.append(element('div', 'singer-card-name', item.name), element('span', 'singer-card-fans', item.type === 'label' ? memberNames(item).length + ' 位成员 · 团体' : '粉丝 ' + fans(item)));
      const actions = element('div', 'singer-card-actions');
      if (network && hasMapLocation(item) && (item.collaborators || []).length) {
        const action = button('singer-card-btn network-icon-btn preview-network-btn', undefined, event => {
          event.stopPropagation();
          close({ restoreFocus: false });
          network(item.name);
        });
        action.title = '查看关系网';
        action.setAttribute('aria-label', '查看' + item.name + '的关系网');
        action.append(networkIcon());
        actions.append(action);
      }
      node.append(body);
      if (actions.children.length) node.append(actions);
      return node;
    }
    if (doc) {
      doc.addEventListener('click', event => {
        const trigger = event.target.closest && event.target.closest('[data-artist-profile]');
        if (!trigger) return;
        event.preventDefault();
        event.stopPropagation();
        open(trigger.dataset.artistProfile, { remember: Boolean(panel && panel.contains(trigger)) });
      }, true);
      doc.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !event.defaultPrevented && isOpen()) { event.preventDefault(); close(); }
      });
    }
    return { open, close, back, isOpen, find, memberLinks, hasMapLocation, preview };
  }

  const api = { create, hasMapLocation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapArtistProfiles = api;
})(typeof window !== 'undefined' ? window : globalThis);
