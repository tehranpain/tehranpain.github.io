(function (root) {
  function hasMapLocation(item) {
    return Boolean(item && item.mapVisible !== false && Number.isFinite(item.lat) && Number.isFinite(item.lng)
      && Math.abs(item.lat) <= 90 && Math.abs(item.lng) <= 180);
  }

  function create({ artists, groups, locate, network, onOpen, onClose, details, detailsUrl = './data/artist-details.js', document: suppliedDocument }) {
    const doc = suppliedDocument || root.document;
    const normalize = value => String(value || '').normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
    const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const namesOf = item => [item.name].concat(item.aliases || []).map(normalize);
    const all = artists.concat(groups);
    const allNames = indexNames(all);
    const artistNames = indexNames(artists);
    let panel, scroller, closeButton, returnFocus, selected, revision = 0;
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
    function avatar(item, className, lazy) {
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
        image.src = item.avatar;
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
        ? button(className, undefined, () => open(person.name))
        : element('div', className + ' is-unresolved');
      node.append(avatar(person || { name: displayName }, 'profile-person-avatar', true), element('span', 'profile-person-name', displayName));
      if (!person) node.append(element('span', 'profile-person-status', '待建资料'));
      return node;
    }
    function ensurePanel() {
      if (panel) return;
      panel = element('aside', 'artist-profile-panel');
      panel.id = 'artist-profile-panel';
      panel.hidden = true;
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-labelledby', 'artist-profile-title');
      const toolbar = element('div', 'profile-toolbar');
      toolbar.append(element('span', 'profile-toolbar-label', '资料卡片'));
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
      revision++;
      if (onClose) onClose();
      if (restoreFocus && returnFocus && returnFocus.isConnected !== false && typeof returnFocus.focus === 'function') {
        returnFocus.focus({ preventScroll: true });
      }
    }
    function isOpen() { return Boolean(panel && !panel.hidden); }

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
      bioSection.replaceChildren(element('h3', 'profile-section-title', '资料信息'));
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
        songsSection.append(list, element('p', 'profile-source', '网易云热门歌曲 · 点击图标打开歌曲页'));
      } else songsSection.append(element('p', 'profile-empty', '暂无可核验的热门歌曲'));
      bioSection.append(element('h4', 'profile-biography-heading', '艺人简介'));
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
        bioSection.append(element('p', 'profile-source', '来源：网易云音乐' + (entry.biographyDate ? ' · ' + entry.biographyDate : '')));
      } else bioSection.append(element('p', 'profile-empty', '暂未获取到公开的艺人简介。'));
    }
    function open(name) {
      const item = find(name);
      if (!item) return false;
      ensurePanel();
      const wasOpen = isOpen();
      if (!wasOpen) returnFocus = doc.activeElement;
      selected = item;
      const currentRevision = ++revision;
      const group = item.type === 'label';
      const members = memberNames(item);
      panel.setAttribute('data-profile-name', item.name);
      panel.setAttribute('data-profile-type', group ? 'label' : 'singer');
      const hero = element('section', 'profile-hero');
      if (group) hero.append(element('p', 'profile-kind', '团体'));
      hero.append(avatar(item, 'profile-hero-avatar'));
      const title = element('h2', 'profile-title', item.name);
      title.id = 'artist-profile-title';
      hero.append(title);
      const metric = element('div', 'profile-metric', group ? String(members.length) : fans(item));
      metric.append(element('span', 'profile-metric-label', group ? '位成员' : '粉丝'));
      hero.append(metric);
      if (item.desc && !['自动添加', '网易云自动补全'].includes(item.desc)) hero.append(element('p', 'profile-description', item.desc));
      if (!hasMapLocation(item)) hero.append(element('p', 'profile-only-note', '仅收录资料，不在地图显示'));
      const actions = element('div', 'profile-actions');
      if (hasMapLocation(item) && locate) actions.append(button('profile-locate', '在地图查看', () => locate(item.name)));
      if (!group && /^\d+$/.test(String(item.neteaseId))) actions.append(musicLink('profile-music-link', '网易云主页', 'artist', String(item.neteaseId)));
      if (network && hasMapLocation(item) && (item.collaborators || []).length) {
        actions.append(button('profile-network', '关系网', () => { close({ restoreFocus: false }); network(item.name); }));
      }
      if (actions.children.length) hero.append(actions);
      scroller.replaceChildren(hero);

      let songsSection, bioSection;
      if (!group) {
        songsSection = section('代表作品');
        bioSection = section('资料信息');
        if (snapshot || root.RapArtistDetails) renderMusic(item, songsSection, bioSection, snapshot || root.RapArtistDetails);
        else songsSection.append(element('p', 'profile-empty', '正在加载作品资料…'));
        scroller.append(songsSection);
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
        const list = element('div', 'profile-relations');
        peers.forEach(peer => list.append(personLink(findArtist(peer), peer, 'profile-relation')));
        collaborators.append(list);
        scroller.append(collaborators);
      }
      if (bioSection) scroller.append(bioSection);
      panel.hidden = false;
      scroller.scrollTop = 0;
      if (onOpen) onOpen(item);
      if (!wasOpen) closeButton.focus({ preventScroll: true });
      if (!group && !snapshot) {
        loadDetails().then(source => {
          // A late snapshot must not replace a more recently selected artist or a closed card.
          if (revision === currentRevision && selected === item && isOpen()) renderMusic(item, songsSection, bioSection, source);
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
        const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const attributes = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'aria-hidden': 'true', focusable: 'false' };
        Object.entries(attributes).forEach(([name, value]) => svg.setAttribute(name, value));
        [
          ['path', { d: 'M8.6 10.5 15.4 6.5M8.6 13.5l6.8 4' }],
          ['circle', { cx: 18, cy: 5, r: 3 }],
          ['circle', { cx: 6, cy: 12, r: 3 }],
          ['circle', { cx: 18, cy: 19, r: 3 }]
        ].forEach(([tag, attributes]) => {
          const part = doc.createElementNS('http://www.w3.org/2000/svg', tag);
          Object.entries(attributes).forEach(([name, value]) => part.setAttribute(name, value));
          svg.append(part);
        });
        action.append(svg);
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
        open(trigger.dataset.artistProfile);
      }, true);
      doc.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !event.defaultPrevented && isOpen()) { event.preventDefault(); close(); }
      });
    }
    return { open, close, isOpen, find, memberLinks, hasMapLocation, preview };
  }

  const api = { create, hasMapLocation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapArtistProfiles = api;
})(typeof window !== 'undefined' ? window : globalThis);
