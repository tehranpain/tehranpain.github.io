(function (root) {
  function hasMapLocation(item) {
    return Boolean(item && !item.profileDisabled && item.mapVisible !== false && Number.isFinite(item.lat) && Number.isFinite(item.lng)
      && Math.abs(item.lat) <= 90 && Math.abs(item.lng) <= 180);
  }

  function create({ artists, groups, locate, network, showMemberDistribution, onOpen, onClose, getReturnTarget, details,
    albums = {}, albumDetailsUrl, detailsUrl = './data/artist-details.js', document: suppliedDocument }) {
    const doc = suppliedDocument || root.document;
    const normalize = value => String(value || '').normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
    const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const namesOf = item => [item.name].concat(item.aliases || []).map(normalize);
    const all = artists.concat(groups);
    const allNames = indexNames(all);
    const artistNames = indexNames(artists.filter(item => !item.profileDisabled));
    const peopleById = new Map(all.filter(item => item.neteaseId && !item.profileDisabled)
      .map(item => [String(item.neteaseId), item]));
    let panel, scroller, content, closeButton, backButton, returnFocus, selected, revision = 0;
    let history = [];
    let snapshot = details || root.RapArtistDetails;
    let detailsRequest;
    let activeAlbum, albumDetailsRequest;

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
        const person = find(name);
        return person && !person.profileDisabled
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
      const cover = className === 'profile-cover-avatar';
      let placeholder, spinner, loadingText;
      if (cover) {
        placeholder = element('span', 'profile-cover-loading');
        placeholder.setAttribute('role', 'status');
        spinner = element('span', 'profile-cover-spinner');
        spinner.setAttribute('aria-hidden', 'true');
        spinner.hidden = true;
        loadingText = element('span', 'profile-cover-loading-text', '暂无头像');
        placeholder.append(spinner, loadingText);
        frame.setAttribute('aria-busy', 'false');
      } else {
        placeholder = element('span', 'profile-avatar-fallback', Array.from(item.name || '?')[0]);
        placeholder.setAttribute('aria-hidden', 'true');
      }
      frame.append(placeholder);
      if (typeof item.avatar === 'string' && /^(https?:\/\/|\.?\.?\/|assets\/)/.test(item.avatar)) {
        const image = element('img');
        image.alt = item.name;
        image.decoding = 'async';
        if (lazy) image.loading = 'lazy';
        else image.fetchPriority = 'high';
        let settle;
        if (cover) {
          let settled = false;
          image.hidden = true;
          spinner.hidden = false;
          loadingText.textContent = '正在加载头像';
          frame.classList.add('is-loading');
          frame.setAttribute('aria-busy', 'true');
          // Keep each request scoped to its own frame when profiles are switched quickly.
          settle = loaded => {
            if (settled) return;
            settled = true;
            image.hidden = !loaded;
            placeholder.hidden = loaded;
            spinner.hidden = true;
            frame.classList.remove('is-loading');
            frame.setAttribute('aria-busy', 'false');
            if (!loaded) loadingText.textContent = '头像暂不可用';
          };
          image.addEventListener('load', () => settle(image.naturalWidth > 0), { once: true });
          image.addEventListener('error', () => settle(false), { once: true });
        } else image.addEventListener('error', () => { image.hidden = true; });
        let source = item.avatar;
        if (imageSize && /^https?:\/\/p\d+\.music\.126\.net\//.test(source)) {
          source = /([?&])param=\d+y\d+/.test(source)
            ? source.replace(/([?&])param=\d+y\d+/, '$1param=' + imageSize + 'y' + imageSize)
            : source + (source.includes('?') ? '&' : '?') + 'param=' + imageSize + 'y' + imageSize;
        }
        image.src = source;
        frame.append(image);
        if (cover && image.complete) settle(image.naturalWidth > 0);
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
    function albumCover(album, size) {
      const frame = element('span', 'profile-album-cover');
      frame.setAttribute('aria-hidden', 'true');
      if (!/^https:\/\/p\d+\.music\.126\.net\//.test(album.cover || '')) return frame;
      const image = element('img');
      image.alt = '';
      image.width = image.height = size;
      image.loading = size > 300 ? 'eager' : 'lazy';
      image.decoding = 'async';
      image.addEventListener('error', () => { image.hidden = true; }, { once: true });
      const source = new URL(album.cover);
      source.searchParams.set('param', size + 'y' + size);
      image.src = source.href;
      frame.append(image);
      return frame;
    }
    function loadAlbumDetails() {
      if (root.RapAlbumDetails || !albumDetailsUrl) return Promise.resolve(root.RapAlbumDetails);
      if (!albumDetailsRequest) {
        albumDetailsRequest = new Promise(resolve => {
          const script = element('script');
          script.src = albumDetailsUrl;
          script.onload = () => resolve(root.RapAlbumDetails);
          script.onerror = () => { script.remove(); resolve(null); };
          doc.body.append(script);
        }).then(value => { if (!value) albumDetailsRequest = null; return value; });
      }
      return albumDetailsRequest;
    }
    function albumMetricIcon(iconPath) {
      const svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
      Object.entries({ width:18, height:18, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor',
        'stroke-width':1.8, 'stroke-linejoin':'round', 'stroke-linecap':'round', 'aria-hidden':'true' })
        .forEach(([key,value]) => svg.setAttribute(key,value));
      path.setAttribute('d', iconPath);
      svg.append(path);
      return svg;
    }
    function albumStat(className, label, iconPath) {
      const badge = element('span', 'profile-album-stat ' + className);
      const count = element('span', '', '—');
      count.setAttribute('aria-hidden', 'true');
      badge.setAttribute('role', 'img');
      badge.setAttribute('aria-label', label + '暂不可用');
      badge.title = label;
      badge.append(albumMetricIcon(iconPath), count);
      return {
        badge,
        show(value, captured) {
          if (!Number.isSafeInteger(value) || value < 0) return;
          count.textContent = new Intl.NumberFormat('zh-CN').format(value);
          badge.setAttribute('aria-label', label + ' ' + count.textContent);
          badge.title = '网易云' + label + (captured ? '，采集于 ' + captured : '');
        }
      };
    }
    function albumLink(className, text, id) {
      const link = musicLink(className, text, 'album', id);
      link.href = 'https://music.163.com/album?id=' + id;
      return link;
    }
    function albumIntro(description, id) {
      if (typeof description !== 'string' || !description.trim()) return null;
      const intro = section('专辑介绍');
      const text = element('p', 'profile-biography profile-album-intro-copy is-collapsed', description);
      text.id = 'profile-album-intro-' + id;
      const toggle = button('profile-biography-toggle profile-album-intro-toggle', '展开', () => {
        const expanded = toggle.getAttribute('aria-expanded') !== 'true';
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.textContent = expanded ? '收起' : '展开';
        text.classList.toggle('is-collapsed', !expanded);
        updateScrollbar();
      });
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', text.id);
      toggle.hidden = true;
      intro.append(text, toggle);
      return intro;
    }
    function updateAlbumIntroToggle() {
      const toggle = content.querySelector('.profile-album-intro-toggle');
      if (!toggle || toggle.getAttribute('aria-expanded') === 'true') return;
      const text = toggle.previousElementSibling;
      const hidden = text.scrollHeight <= text.clientHeight + 1;
      if (toggle.hidden !== hidden) toggle.hidden = hidden;
    }
    function albumPeople(title, ids, people, emptyText) {
      const block = section(title);
      const list = element('div', 'profile-album-people');
      for (const key of ids || []) {
        const person = people[key];
        if (!person) continue;
        const local = peopleById.get(key);
        const row = local ? button('profile-album-person', undefined, () => open(local.name, { remember:true }))
          : /^\d+$/.test(key) ? musicLink('profile-album-person', undefined, 'artist', key)
          : element('div', 'profile-album-person is-static');
        row.append(avatar({ name:person.name, avatar:local?.avatar || person.avatar }, 'profile-person-avatar', true, 130),
          element('span', 'profile-person-name', person.name));
        list.append(row);
      }
      if (list.children.length) block.append(list);
      else if (emptyText) block.append(element('p', 'profile-empty', emptyText));
      else return null;
      return block;
    }
    function albumTracks(tracks) {
      if (!tracks?.length) return null;
      const block = section('曲目列表');
      const list = element('ol', 'profile-album-tracks');
      for (const title of tracks) list.append(element('li', 'profile-album-track', title));
      block.append(list);
      return block;
    }
    function openAlbum(release, { remember = true, fromHistory = false, viewState } = {}) {
      const id = String(release?.albumId ?? release?.id ?? '');
      if (!/^\d+$/.test(id)) return false;
      const entry = { id, title:release.title || '', cover:release.cover || release.image };
      ensurePanel();
      const wasOpen = isOpen();
      if (!fromHistory && wasOpen && activeAlbum?.id === id) return true;
      beginView({ wasOpen, remember, fromHistory });
      selected = null;
      activeAlbum = entry;
      const currentRevision = ++revision;
      panel.dataset.profileType = 'album';
      delete panel.dataset.profileName;
      panel.dataset.albumId = id;
      const hero = element('div', 'profile-album-hero');
      const image = albumCover(entry, 300);
      const copy = element('div', 'profile-album-identity');
      const title = element('h2', 'profile-album-title', entry.title || '专辑');
      title.id = 'artist-profile-title';
      const date = element('time', 'profile-album-date');
      date.hidden = true;
      copy.append(title, date);
      hero.append(image, copy);
      const actions = element('div', 'profile-album-actions');
      const saves = albumStat('profile-album-saves', '收藏量', 'M6 4h12v16l-6-4-6 4z');
      const shares = albumStat('profile-album-shares', '转发量', 'M14 4l6 6-6 6v-4h-2c-4 0-6 2-8 6 0-7 3-10 8-10h2z');
      actions.append(saves.badge, shares.badge, albumLink('profile-album-listen', '去收听', id));
      const body = element('div', 'profile-album-body');
      content.replaceChildren(hero, actions, body);
      panel.hidden = false;
      updateBackButton();
      if (onOpen) onOpen(null);
      if (!fromHistory) (backButton.hidden ? closeButton : backButton).focus({ preventScroll:true });
      function show(snapshot) {
        if (revision !== currentRevision || !isOpen()) return;
        const data = snapshot?.albums?.[id];
        if (!data) {
          body.replaceChildren(element('p', 'profile-empty profile-album-message', '暂未获取到专辑详情，可前往网易云查看。'));
          updateScrollbar();
          return;
        }
        title.textContent = entry.title = data.title;
        if (data.cover && data.cover !== entry.cover) hero.replaceChild(albumCover(data, 300), image);
        if (data.date) {
          date.dateTime = date.textContent = data.date;
          date.hidden = false;
        }
        saves.show(data.saves, snapshot.captured);
        shares.show(data.shares, snapshot.captured);
        const sections = [albumIntro(data.description, id),
          albumPeople('创作者', data.creators, snapshot.people, '暂无可核实的创作者署名。'),
          albumPeople('合作歌手', data.collaborators, snapshot.people),
          albumTracks(data.tracks)];
        body.replaceChildren(...sections.filter(Boolean));
        updateAlbumIntroToggle();
        if (viewState) restoreView(viewState);
        updateScrollbar();
      }
      restoreView();
      if (root.RapAlbumDetails) show(root.RapAlbumDetails);
      else {
        const loading = element('p', 'profile-empty profile-album-message', '正在加载专辑详情…');
        loading.setAttribute('role', 'status');
        body.append(loading);
        loadAlbumDetails().then(show);
      }
      updateScrollbar();
      return true;
    }
    function renderAlbums(item) {
      const entries = albums[String(item.neteaseId)];
      if (!Array.isArray(entries) || !entries.length) return;
      const albumSection = section('代表专辑');
      const grid = element('div', 'profile-album-grid');
      for (const album of entries.slice(0, 3)) {
        const card = button('profile-album-card', undefined, () => openAlbum(album));
        card.dataset.openAlbumId = album.id;
        card.title = album.title;
        card.append(albumCover(album, 300), element('span', 'profile-album-name', album.title));
        grid.append(card);
      }
      albumSection.append(grid);
      content.append(albumSection);
    }
    function personLink(person, displayName, className) {
      const clickable = person && !person.profileDisabled;
      const node = clickable
        ? button(className, undefined, () => open(person.name, { remember: true }))
        : element('div', className + (person ? ' is-static' : ' is-unresolved'));
      node.append(avatar(person || { name: displayName }, 'profile-person-avatar', true), element('span', 'profile-person-name', displayName));
      const status = person ? person.roleLabel : '待建资料';
      if (status) node.append(element('span', 'profile-person-status', status));
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
    function setupScrollbar() {
      const view = doc.defaultView || root;
      const track = element('div', 'profile-scrollbar');
      const thumb = element('div', 'profile-scrollbar-thumb');
      thumb.tabIndex = 0;
      Object.entries({ role: 'scrollbar', 'aria-label': '滚动资料卡', 'aria-controls': scroller.id,
        'aria-orientation': 'vertical', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': '0' })
        .forEach(([key, value]) => thumb.setAttribute(key, value));
      track.hidden = true;
      track.append(thumb);
      panel.append(track);
      let timer, frame, drag;
      const reveal = () => {
        track.classList.add('is-active');
        view.clearTimeout(timer);
        timer = view.setTimeout(() => track.classList.remove('is-active'), 900);
      };
      function metrics() {
        const height = track.clientHeight;
        const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
        const thumbHeight = Math.min(height, Math.max(32, height * scroller.clientHeight / Math.max(1, scroller.scrollHeight)));
        return { max, thumbHeight, travel: Math.max(0, height - thumbHeight) };
      }
      function update() {
        frame = null;
        if (!panel.hidden) updateAlbumIntroToggle();
        track.hidden = panel.hidden || scroller.scrollHeight <= scroller.clientHeight + 1;
        if (track.hidden) return;
        const { max, thumbHeight, travel } = metrics();
        const progress = max ? Math.min(1, Math.max(0, scroller.scrollTop / max)) : 0;
        thumb.style.height = thumbHeight + 'px';
        thumb.style.transform = 'translateY(' + progress * travel + 'px)';
        thumb.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
      }
      const schedule = () => {
        if (frame == null) frame = view.requestAnimationFrame(update);
      };
      scroller.addEventListener('scroll', () => { schedule(); reveal(); }, { passive: true });
      // Content resizing covers lazy images, loaded metadata, and biography expansion.
      if (view.ResizeObserver) {
        const observer = new view.ResizeObserver(schedule);
        observer.observe(scroller);
        observer.observe(content);
      }
      view.addEventListener('resize', schedule);
      track.addEventListener('wheel', event => {
        event.preventDefault();
        event.stopPropagation();
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? scroller.clientHeight : 1;
        scroller.scrollTop += event.deltaY * unit;
        schedule();
        reveal();
      }, { passive: false });
      track.addEventListener('pointerdown', event => {
        if (event.button !== 0) return;
        event.preventDefault();
        thumb.focus({ preventScroll: true });
        const { max, thumbHeight, travel } = metrics();
        if (!travel) return;
        if (event.target !== thumb) {
          const position = event.clientY - track.getBoundingClientRect().top - thumbHeight / 2;
          scroller.scrollTop = Math.min(1, Math.max(0, position / travel)) * max;
        }
        drag = { pointer: event.pointerId, y: event.clientY, top: scroller.scrollTop };
        track.setPointerCapture(event.pointerId);
        track.classList.add('is-dragging');
        reveal();
        schedule();
      });
      track.addEventListener('pointermove', event => {
        if (!drag || drag.pointer !== event.pointerId) return;
        const { max, travel } = metrics();
        if (travel) scroller.scrollTop = drag.top + (event.clientY - drag.y) * max / travel;
      });
      const endDrag = () => { drag = null; track.classList.remove('is-dragging'); };
      track.addEventListener('lostpointercapture', endDrag);
      track.addEventListener('pointerup', event => {
        if (!drag || drag.pointer !== event.pointerId) return;
        track.releasePointerCapture(event.pointerId);
        endDrag();
        reveal();
      });
      track.addEventListener('pointercancel', endDrag);
      thumb.addEventListener('keydown', event => {
        const next = { ArrowDown: scroller.scrollTop + 40, ArrowUp: scroller.scrollTop - 40,
          PageDown: scroller.scrollTop + scroller.clientHeight, PageUp: scroller.scrollTop - scroller.clientHeight,
          Home: 0, End: scroller.scrollHeight }[event.key];
        if (next === undefined) return;
        event.preventDefault();
        scroller.scrollTop = next;
        schedule();
        reveal();
      });
      return schedule;
    }
    let updateScrollbar;
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
      scroller.id = 'artist-profile-scroll';
      scroller.tabIndex = 0;
      scroller.setAttribute('role', 'region');
      scroller.setAttribute('aria-label', '资料卡内容');
      content = element('div', 'profile-content');
      scroller.append(content);
      panel.append(toolbar, scroller);
      doc.body.appendChild(panel);
      updateScrollbar = setupScrollbar();
    }
    function close({ restoreFocus = true } = {}) {
      if (!panel || panel.hidden) return;
      panel.hidden = true;
      selected = null;
      activeAlbum = null;
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
      const label = '返回' + (previous?.name || previous?.album?.title || previous?.target?.label || '上一页');
      backButton.title = label;
      backButton.setAttribute('aria-label', label);
    }
    function captureView() {
      return { scrollTop: scroller.scrollTop || 0,
        expanded: scroller.querySelector('.profile-biography-toggle')?.getAttribute('aria-expanded') === 'true',
        albumFocus: doc.activeElement?.dataset?.openAlbumId };
    }
    function restoreView(state) {
      if (!state) { scroller.scrollTop = 0; return; }
      const toggle = scroller.querySelector('.profile-biography-toggle');
      if (state.expanded && toggle && toggle.getAttribute('aria-expanded') !== 'true') toggle.click();
      scroller.scrollTop = state.scrollTop;
    }
    function beginView({ wasOpen, remember, fromHistory }) {
      if (!fromHistory) {
        if (remember && wasOpen && (selected || activeAlbum)) {
          history.push({ name: selected?.name, album: activeAlbum, state: captureView() });
        } else {
          history = [];
          const target = getReturnTarget && getReturnTarget();
          if (target && typeof target.restore === 'function') history.push({ target });
        }
      }
      if (!wasOpen) {
        const opener = doc.activeElement;
        // Leaflet pans to focused markers, even with preventScroll.
        returnFocus = opener?.closest('.leaflet-marker-icon')?.closest('.leaflet-container') || opener;
      }
    }
    function back() {
      const previous = history.pop();
      if (!previous) return false;
      if (previous.target) {
        close({ restoreFocus: false });
        previous.target.restore();
      } else if (previous.album) {
        openAlbum(previous.album, { fromHistory:true, viewState:previous.state });
        (backButton.hidden ? closeButton : backButton).focus({ preventScroll:true });
      } else {
        open(previous.name, { fromHistory: true, viewState: previous.state });
        const trigger = [...scroller.querySelectorAll('[data-open-album-id]')]
          .find(node => node.dataset.openAlbumId === previous.state?.albumFocus);
        (trigger || (backButton.hidden ? closeButton : backButton)).focus({ preventScroll:true });
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
      songsSection.replaceChildren(element('h3', 'profile-section-title', '热门作品'));
      bioSection.replaceChildren(element('h3', 'profile-section-title', '艺人简介'));
      const entry = source && source.byArtist && source.byArtist[String(item.neteaseId)];
      const songs = entry && Array.isArray(entry.songs)
        ? entry.songs.filter(song => /^\d+$/.test(String(song.id)) && typeof song.name === 'string').slice(0, 3) : [];
      const list = element('ul', 'profile-song-list');
      songs.forEach(song => {
        const row = element('li', 'profile-song');
        const cover = element('span', 'profile-song-cover');
        const source = (root.RapSongCovers || {})[String(song.id)];
        if (source && /^https?:\/\//.test(source)) {
          const image = element('img');
          image.alt = '';
          image.loading = 'lazy';
          image.decoding = 'async';
          image.src = source + (source.includes('?') ? '&' : '?') + 'param=100y100';
          image.addEventListener('error', () => { image.hidden = true; });
          cover.append(image);
        }
        const copy = element('div', 'profile-song-copy');
        copy.append(element('span', 'profile-song-name', song.name), element('span', 'profile-song-artists', song.artists || item.name));
        copy.firstElementChild.title = song.name;
        copy.lastElementChild.title = song.artists || item.name;
        const link = musicLink('profile-song-open', '', 'song', String(song.id));
        link.setAttribute('aria-label', '在网易云打开歌曲：' + song.name);
        link.title = '在网易云打开';
        row.append(cover, copy, link);
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
          const toggle = button('profile-biography-toggle', '展开', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            text.textContent = expanded ? characters.slice(0, 180).join('') + '…' : biography;
            toggle.textContent = expanded ? '展开' : '收起';
            toggle.setAttribute('aria-expanded', String(!expanded));
          });
          toggle.setAttribute('aria-expanded', 'false');
          bioSection.append(toggle);
        }
      } else bioSection.append(element('p', 'profile-empty', '暂未获取到公开的艺人简介。'));
    }
    function open(name, { remember = false, fromHistory = false, viewState } = {}) {
      const item = find(name);
      if (!item || item.profileDisabled) return false;
      ensurePanel();
      const wasOpen = isOpen();
      if (remember && wasOpen && selected === item) return true;
      beginView({ wasOpen, remember, fromHistory });
      activeAlbum = null;
      delete panel.dataset.albumId;
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
      content.replaceChildren(hero);

      let songsSection, bioSection;
      if (!group) {
        songsSection = section('热门作品');
        bioSection = section('艺人简介');
        if (snapshot || root.RapArtistDetails) renderMusic(item, songsSection, bioSection, snapshot || root.RapArtistDetails);
        else {
          bioSection.append(element('p', 'profile-empty', '正在加载艺人简介…'));
          songsSection.append(element('p', 'profile-empty', '正在加载作品资料…'));
        }
        content.append(bioSection, songsSection);
        renderAlbums(item);
      }
      if (group) {
        const roster = section('团体成员', members.length);
        const resolved = members.map(name => ({ name, person: find(name) }));
        if (showMemberDistribution) {
          const mapped = [...new Set(resolved.map(({ person }) => person).filter(hasMapLocation))];
          const action = button('profile-member-map', '查看成员分布', () => showMemberDistribution(item, mapped));
          action.disabled = !mapped.length;
          if (action.disabled) action.title = '暂无可定位的成员';
          const header = element('div', 'profile-roster-heading');
          header.append(roster.firstElementChild, action);
          roster.append(header);
        }
        const grid = element('div', 'profile-members');
        // Some roster entries, such as Round_2, are subgroups rather than solo artists.
        resolved.forEach(({ person, name }) => grid.append(personLink(person, name, 'profile-member')));
        if (members.length) roster.append(grid);
        else roster.append(element('p', 'profile-empty', '暂未收录成员资料。'));
        content.append(roster);
      } else {
        const memberships = groups.filter(group => memberNames(group).some(member => findArtist(member) === item));
        if (memberships.length) {
          const membershipsSection = section('所属团体');
          const links = element('div', 'profile-relations');
          memberships.forEach(group => links.append(personLink(group, group.name, 'profile-relation')));
          membershipsSection.append(links);
          content.append(membershipsSection);
        }
      }
      const peers = [...new Set((item.collaborators || []).map(peer => typeof peer === 'string' ? peer : peer.name).filter(Boolean))];
      if (peers.length) {
        const collaborators = section('合作关系', peers.length);
        const list = element('div', 'profile-collaborators');
        peers.forEach(peer => list.append(personLink(find(peer), peer, 'profile-collaborator')));
        collaborators.append(list);
        content.append(collaborators);
      }
      panel.hidden = false;
      updateBackButton();
      restoreView(viewState);
      updateScrollbar();
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
        if (event.key === 'Escape' && !event.defaultPrevented && isOpen()) {
          event.preventDefault();
          if (!activeAlbum || !back()) close();
        }
      });
    }
    return { open, openAlbum, close, back, isOpen, find, memberLinks, hasMapLocation, preview };
  }

  const api = { create, hasMapLocation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapArtistProfiles = api;
})(typeof window !== 'undefined' ? window : globalThis);
