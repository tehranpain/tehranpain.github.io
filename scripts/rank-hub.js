(() => {
  if (document.body.dataset.mapTheme !== 'night' || !window.RapArtistProfiles) return;
  const panel = document.getElementById('rank-panel');
  const list = document.getElementById('rank-panel-body');
  const shell = document.createElement('div');
  const MAX = 50;
  const number = new Intl.NumberFormat('zh-CN');
  const artistData = window.RapMapData || {};
  const knownAlbums = new Map(Object.values(window.RapArtistAlbums || {}).flat().map(entry => [String(entry.id), entry]));
  const artists = new Map();
  for (const item of [...(artistData.singers || []), ...(artistData.profiles || [])]) {
    if (item.profileDisabled) continue;
    if (item.neteaseId && !artists.has(String(item.neteaseId))) artists.set(String(item.neteaseId), item);
  }
  const activity = window.RapFanClubData?.months?.[window.RapFanClubData.defaultMonth];
  const snapshot = window.RapRankSnapshot || {};
  const coverage = snapshot.coverage || {};
  const likeSnapshot = window.RapSongLikeSnapshot || {};
  const source = Object.freeze({
    activity: (activity?.entries || []).map(entry => ({ artist: entry.name, profile: entry.artistName || entry.name, value: entry.val, display: entry.displayVal, cover: entry.avatar })),
    followers: [...artists.values()].flatMap(item => {
      const value = window.FANS_CACHE_COUNTS?.[item.neteaseId] ?? item.fanCount;
      return Number.isFinite(value) && value > 0 ? [{ artist: item.name, value }] : [];
    }).sort((a, b) => b.value - a.value),
    works: snapshot.songCounts || [],
    albums: snapshot.albums || [],
    likes: likeSnapshot.songs || []
  });
  const date = value => value ? new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai', year: 'numeric', month: 'numeric', day: 'numeric'
  }).format(new Date(value)) : '';
  const dateLine = value => value ? '数据更新 ' + date(value) + ' · ' : '';
  const albumsComplete = coverage.catalogues === coverage.targetArtists && coverage.albumCounts === coverage.albumCandidates;
  const keys = [
    ['歌手', [
      { key: 'activity', label: '乐迷团活跃榜', note: (activity?.label || '') + '乐迷团月榜 · 活跃乐迷人数' },
      { key: 'followers', label: '粉丝数量榜', note: dateLine(window.FANS_CACHE_UPDATED_AT) + '网易云艺人粉丝数' },
      { key: 'works', label: '作品数量榜', note: '网易云艺人页歌曲总数' + (coverage.songCountTarget ? ' · 已核实 ' + coverage.songCounts + ' / ' + coverage.songCountTarget + ' 人' : '') }
    ]],
    ['作品', [
      { key: 'albums', label: '专辑收藏榜', work: true,
        note: '收录 ' + source.albums.length + ' 张 · 粉丝超 1 万，收藏不少于 1 万' + (albumsComplete ? '' : ' · 目前仅列已核实记录') },
      { key: 'likes', label: '单曲点赞榜', work: true,
        note: likeSnapshot.candidates
          ? '网易云单曲红心数 · 项目已收录的热门作品，核实 ' + likeSnapshot.verified + ' / ' + likeSnapshot.candidates + ' 首'
          : '按网易云单曲红心数排行，不使用评论或播放量作为替代。' }
    ]]
  ];
  const boards = new Map(keys.flatMap(([, configs]) => configs).map(board => [board.key, board]));
  const overviewButtons = new Map();
  let profile, locate, active = '', overviewScroll = 0;

  function element(tag, className, text) {
    const node = document.createElement(tag);
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
  function icon(direction) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(svg.namespaceURI, 'path');
    path.setAttribute('d', direction === 'left' ? 'm14 6-6 6 6 6' : 'm9 6 6 6-6 6');
    svg.append(path);
    return svg;
  }
  function displayName(row, board) {
    return board.work ? [row.artist, row.title].filter(Boolean).join(' — ') : row.artist;
  }
  function artwork(row, board) {
    const art = element('span', 'rank-hub-art');
    art.setAttribute('aria-hidden', 'true');
    const placeholder = board.work ? '✦' : Array.from(row?.artist || '•')[0];
    art.append(element('span', 'rank-hub-art-glyph', placeholder));
    const source = row?.cover || (board.key === 'albums' ? knownAlbums.get(row?.id)?.cover : null)
      || (!board.work && profile?.find(row?.profile || row?.artist)?.avatar);
    if (typeof source === 'string' && (/^https?:\/\//.test(source) || /^(?:\.\/)?assets\//.test(source))) {
      const img = element('img');
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('error', () => { img.hidden = true; });
      const url = new URL(source.replace(/^http:/i, 'https:'), document.baseURI);
      if (/^p\d+\.music\.126\.net$/i.test(url.hostname)) url.searchParams.set('param', '160y160');
      img.src = url.href;
      art.append(img);
    }
    return art;
  }
  function goHome({ focus = true } = {}) {
    const previous = active;
    active = '';
    shell.replaceChildren();
    for (const [category, items] of keys) {
      const section = element('section', 'rank-hub-section');
      section.append(element('h3', 'rank-hub-category', category));
      for (const board of items) section.append(preview(board));
      shell.append(section);
    }
    list.scrollTop = overviewScroll;
    if (focus) overviewButtons.get(previous)?.focus({ preventScroll: true });
  }
  function preview(board) {
    const rows = source[board.key];
    const card = element('article', 'rank-hub-card');
    const head = element('div', 'rank-hub-card-head');
    const heading = element('h4', 'rank-hub-card-title', board.label);
    const action = button('rank-hub-see', '查看全部', () => showBoard(board.key));
    card.addEventListener('click', event => { if (!action.contains(event.target)) showBoard(board.key); });
    action.setAttribute('aria-label', '查看全部：' + board.label);
    const circle = element('span', 'rank-hub-arrow-circle');
    circle.append(icon('right')); action.append(circle);
    overviewButtons.set(board.key, action);
    head.append(heading, action);
    card.append(head);
    const body = element('div', 'rank-hub-card-body');
    body.append(artwork(rows[0], board));
    if (rows.length) {
      const top = element('ol', 'rank-hub-top-list');
      rows.slice(0, 3).forEach((row, index) => {
        const name = displayName(row, board);
        const item = element('li', 'rank-hub-top-line');
        const place = element('span', 'rank-hub-top-place', String(index + 1));
        place.setAttribute('aria-hidden', 'true');
        const label = element('span', 'rank-hub-ellipsis');
        if (board.work) {
          label.append(element('span', 'rank-hub-work-artist', row.artist + ' — '), row.title);
        } else label.textContent = name;
        label.title = name;
        item.append(place, label);
        top.append(item);
      });
      body.append(top);
    } else body.append(element('p', 'rank-hub-placeholder', board.key === 'likes' ? '暂未取得可核实的单曲点赞数' : '暂无可核实的统计'));
    card.append(body);
    return card;
  }
  function detailRow(row, board, index) {
    const key = String(row.artistId || row.id || row.artist);
    let entry;
    if (!board.work) {
      const person = profile.find(row.profile || row.artist) || artists.get(String(row.artistId));
      if (person) {
        entry = button('rank-hub-result-link', undefined, () => {
          if (profile.open(person.name, { remember: true }) && profile.hasMapLocation(person)) locate?.(person.name);
        });
      }
    } else if (knownAlbums.has(row.id) && board.key === 'albums') {
      entry = button('rank-hub-result-link', undefined, () => profile.openAlbum(knownAlbums.get(row.id)));
    } else if (/^[1-9]\d*$/.test(String(row.id))) {
      entry = element('a', 'rank-hub-result-link');
      entry.href = 'https://music.163.com/#/' + (board.key === 'albums' ? 'album' : 'song') + '?id=' + row.id;
      entry.target = '_blank';
      entry.rel = 'noopener noreferrer';
    }
    entry ??= element('div', 'rank-hub-result-link is-static');
    entry.dataset.rankEntry = key;
    const place = element('span', 'rank-hub-result-place', String(index + 1).padStart(2, '0'));
    const copy = element('span', 'rank-hub-result-copy');
    const name = board.work ? row.title : row.artist;
    const title = element('strong', 'rank-hub-ellipsis', name);
    title.title = name;
    copy.append(title);
    if (board.work) copy.append(element('small', 'rank-hub-ellipsis', [row.artist, row.release].filter(Boolean).join(' · ')));
    const value = element('span', 'rank-hub-result-value', row.display ?? number.format(row.value));
    entry.append(place, artwork(row, board), copy, value);
    const result = element('li', 'rank-hub-result');
    result.append(entry);
    return result;
  }
  function showBoard(key, { focus = true, scroll = 0, entry = '' } = {}) {
    const board = boards.get(key);
    if (!board) return;
    if (!active) overviewScroll = list.scrollTop;
    active = key;
    shell.replaceChildren();
    const back = button('rank-hub-back', '返回排行榜', () => goHome());
    back.prepend(icon('left'));
    const header = element('header', 'rank-hub-list-head');
    const title = element('h3', 'rank-hub-list-title', board.label);
    header.append(back, title, element('p', 'rank-hub-list-note', board.note));
    shell.append(header);
    const rows = source[key].slice(0, MAX);
    if (rows.length) {
      const ordered = element('ol', 'rank-hub-results');
      ordered.setAttribute('aria-label', board.label + '前' + rows.length + '名');
      rows.forEach((row, index) => ordered.append(detailRow(row, board, index)));
      shell.append(ordered);
    } else {
      const message = key === 'likes'
        ? '暂未验证可用的逐曲红心数来源，不用评论数、播放量或热评点赞数代替。'
        : '还没有可核实的记录，空值不会被当成 0 排名。';
      shell.append(element('p', 'rank-hub-empty', message));
    }
    list.scrollTop = scroll;
    const focusTarget = entry && Array.from(shell.querySelectorAll('[data-rank-entry]')).find(node => node.dataset.rankEntry === entry);
    if (focus) (focusTarget || back).focus({ preventScroll: true });
  }
  function openRanking() {
    const mobile = window.matchMedia('(max-width: 480px)').matches;
    const selector = mobile ? '[data-mobile-panel="rank"]' : '[data-rail-view="rank"]';
    if (!panel.classList.contains('show')) document.querySelector(selector)?.click();
  }
  function openAlbumRanking() {
    profile.close({ restoreFocus: false });
    openRanking();
    showBoard('albums');
  }

  const baseCreate = window.RapArtistProfiles.create;
  window.RapArtistProfiles.create = options => {
    locate = options.locate;
    profile = baseCreate({
      ...options,
      onOpenAlbumFavorites: openAlbumRanking,
      getReturnTarget() {
        const target = options.getReturnTarget?.();
        if (!active || !panel.classList.contains('show') || !target) return target;
        const scroll = list.scrollTop;
        const key = active;
        const entry = document.activeElement?.dataset.rankEntry;
        return { ...target, restore() { target.restore(); showBoard(key, { scroll, entry }); } };
      }
    });
    return profile;
  };
  document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => {
    if (!profile) return;
    panel.setAttribute('data-rank-hub', '');
    shell.className = 'rank-hub';
    list.replaceChildren(shell);
    goHome({ focus: false });
    for (const trigger of document.querySelectorAll('[data-rail-view="rank"], [data-mobile-panel="rank"], #rank-btn')) {
      trigger.addEventListener('click', () => {
        if (trigger.getAttribute('aria-expanded') !== 'true') {
          overviewScroll = 0;
          goHome({ focus: false });
        }
      }, true);
    }
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && active && panel.classList.contains('show') && panel.contains(document.activeElement)) {
        event.preventDefault();
        event.stopPropagation();
        goHome();
      }
    }, true);
    if (window.location.hash === '#ranking') openRanking();
  }));
})();
