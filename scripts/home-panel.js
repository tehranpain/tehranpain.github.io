(function (root) {
  function safeImage(value) {
    return typeof value === 'string' && /^(https?:\/\/|\.?\.?\/|\/|assets\/)/.test(value) && !value.startsWith('//') ? value : '';
  }
  function normalizeRelease(value) {
    if (!value || !['album', 'single'].includes(value.type) || typeof value.artist !== 'string'
      || !value.artist.trim() || typeof value.title !== 'string' || !value.title.trim()) return null;
    const item = { type: value.type, artist: value.artist.trim(), title: value.title.trim(),
      artistLabel: typeof value.artistLabel === 'string' && value.artistLabel.trim() ? value.artistLabel.trim() : value.artist.trim(),
      image: safeImage(value.image), format: value.format === 'Mixtape' ? 'Mixtape' : '专辑' };
    for (const key of ['songId', 'albumId']) if (/^\d+$/.test(String(value[key] || ''))) item[key] = String(value[key]);
    return item;
  }
  function create({ releases = [], findArtist, onArtist, onAlbum, document: doc = root.document, window: win = root }) {
    const panel = doc.getElementById('map-home-panel');
    const scroller = doc.getElementById('home-panel-scroll');
    const carousel = doc.getElementById('home-release-carousel');
    const slidesHost = doc.getElementById('home-release-slides');
    const restore = doc.getElementById('home-panel-restore');
    const collapse = doc.getElementById('home-panel-collapse');
    const controls = doc.getElementById('home-carousel-controls');
    const counter = doc.getElementById('home-carousel-counter');
    const previous = doc.getElementById('home-carousel-previous');
    const next = doc.getElementById('home-carousel-next');
    const pause = doc.getElementById('home-carousel-pause');
    const status = doc.getElementById('home-release-status');
    const announcement = doc.getElementById('home-carousel-announcement');
    const filterSection = doc.getElementById('home-filter-section');
    const mode = doc.getElementById('mode-filter-tabs');
    const filters = doc.getElementById('more-options-dropdown');
    doc.getElementById('home-mode-slot').append(mode);
    doc.getElementById('home-filter-slot').append(filters);
    const reduced = win.matchMedia('(prefers-reduced-motion: reduce)');
    const covered = new Set();
    const cleanups = [];
    let items = [], slides = [], index = 0, collapsed = false, timer;
    let hovered = false, focused = false, paused = false, drag;

    function listen(target, type, handler, options) {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    }
    function element(tag, className, text) {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function artwork(item, className, lazy) {
      const frame = element('span', className);
      const source = safeImage(item.image || item.avatar);
      if (source) {
        const image = element('img'); image.alt = ''; image.decoding = 'async';
        if (lazy) image.loading = 'lazy';
        image.addEventListener('error', () => { image.hidden = true; });
        image.src = source; frame.append(image);
      }
      return frame;
    }
    function schedule() {
      win.clearTimeout(timer); timer = undefined;
      const playing = items.length > 1 && !collapsed && !covered.size && !paused && !hovered && !focused
        && doc.visibilityState !== 'hidden' && !reduced.matches;
      carousel.dataset.playing = String(playing);
      if (playing) timer = win.setTimeout(() => select(index + 1), 6000);
    }
    function select(value, announce = false) {
      if (!items.length) return;
      index = (value + items.length) % items.length;
      slides.forEach((slide, i) => { slide.hidden = i !== index; });
      counter.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(items.length).padStart(2, '0');
      carousel.dataset.index = String(index);
      status.textContent = '';
      if (announce) announcement.textContent = (index + 1) + ' / ' + items.length + '，' + items[index].title;
      schedule();
    }
    function titleOf(item) {
      return item.artistLabel + (item.type === 'single' ? '新歌' : '新' + item.format) + '《' + item.title + '》';
    }
    function renderRelease(item, i) {
      const slide = element('article', 'home-release-slide');
      slide.setAttribute('role', 'group'); slide.setAttribute('aria-roledescription', '幻灯片');
      slide.setAttribute('aria-label', (i + 1) + '：' + titleOf(item));
      const open = element(item.type === 'single' && item.songId ? 'a' : 'button', 'home-release-open');
      if (open.tagName.toLowerCase() === 'a') {
        open.href = 'https://music.163.com/#/song?id=' + item.songId;
        open.target = '_blank'; open.rel = 'noopener noreferrer';
      } else {
        open.type = 'button';
        open.addEventListener('click', () => {
          if (item.type === 'album') {
            if (onAlbum) onAlbum({ ...item });
            else status.textContent = '专辑详情入口已预留，作品资料将在后续补充。';
          } else status.textContent = '这首歌曲的网易云链接待补充。';
        });
      }
      const title = element('span', 'home-release-title', titleOf(item));
      title.setAttribute('role', 'heading'); title.setAttribute('aria-level', '2');
      open.append(artwork(item, 'home-release-image', i !== 0), element('span', 'home-release-shade'),
        element('span', 'home-release-type', item.type === 'single' ? '最新单曲' : '最新' + item.format),
        title);
      const person = findArtist && findArtist(item.artist);
      const artist = element('button', 'home-release-artist'); artist.type = 'button';
      artist.disabled = !person;
      artist.setAttribute('aria-label', person ? '查看' + item.artistLabel + '的资料' : '暂未收录' + item.artistLabel + '的资料');
      const avatar = artwork(person || {}, 'home-release-artist-avatar');
      avatar.prepend(element('span', '', Array.from(item.artistLabel)[0]));
      artist.append(avatar, element('span', 'home-release-artist-name', item.artistLabel), element('span', 'home-release-artist-arrow', '>'));
      artist.addEventListener('click', event => {
        event.stopPropagation();
        if (person && onArtist) onArtist(person.name);
      });
      // Artist navigation is a sibling of the work link, never a nested link/button.
      slide.append(open, artist);
      return slide;
    }
    function setReleases(values) {
      items = Array.isArray(values) ? values.map(normalizeRelease).filter(Boolean) : [];
      slidesHost.replaceChildren(); slides = items.map(renderRelease);
      carousel.classList.toggle('has-multiple', items.length > 1);
      controls.hidden = items.length < 2;
      counter.hidden = items.length < 2;
      status.textContent = '';
      if (!items.length) {
        const empty = element('div', 'home-release-empty');
        const art = element('span', 'home-empty-record'); art.setAttribute('aria-hidden', 'true');
        empty.append(element('span', 'home-empty-kicker', '专辑 / Mixtape / 单曲'),
          element('h2', 'home-empty-title', '新作推荐'), art,
          element('p', 'home-empty-note', '等待添加封面与作品信息'));
        slidesHost.append(empty); schedule();
      } else { slidesHost.append(...slides); select(0); }
    }
    function sync() {
      const blocked = covered.size > 0;
      panel.hidden = collapsed;
      panel.inert = collapsed || blocked;
      panel.setAttribute('aria-hidden', String(collapsed || blocked));
      panel.classList.toggle('is-covered', blocked);
      restore.hidden = !collapsed || blocked;
      schedule();
    }
    function cover(reason, active) { if (active) covered.add(reason); else covered.delete(reason); sync(); }
    function expand({ focus = true } = {}) {
      collapsed = false; sync();
      if (focus && !covered.size) collapse.focus({ preventScroll: true });
    }
    function showFilters() {
      expand({ focus: false });
      scroller.scrollTo({ top: filterSection.offsetTop, behavior: reduced.matches ? 'instant' : 'smooth' });
      filterSection.focus({ preventScroll: true });
    }
    listen(collapse, 'click', () => { collapsed = true; sync(); restore.focus({ preventScroll: true }); });
    listen(restore, 'click', () => expand());
    listen(previous, 'click', () => select(index - 1, true));
    listen(next, 'click', () => select(index + 1, true));
    listen(pause, 'click', () => {
      paused = !paused; pause.setAttribute('aria-pressed', String(paused));
      pause.setAttribute('aria-label', paused ? '恢复自动轮播' : '暂停自动轮播');
      pause.classList.toggle('is-paused', paused); schedule();
    });
    listen(carousel, 'pointerenter', () => { hovered = true; schedule(); });
    listen(carousel, 'pointerleave', () => { hovered = false; schedule(); });
    listen(carousel, 'focusin', () => { focused = true; schedule(); });
    listen(carousel, 'focusout', event => { if (!carousel.contains(event.relatedTarget)) { focused = false; schedule(); } });
    listen(carousel, 'keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || items.length < 2) return;
      event.preventDefault(); select(index + (event.key === 'ArrowRight' ? 1 : -1), true);
      next.focus({ preventScroll: true });
    });
    listen(carousel, 'pointerdown', event => {
      if (event.pointerType !== 'touch' || event.target.closest('#home-carousel-controls')) return;
      drag = { x: event.clientX, y: event.clientY, moved: false };
    });
    listen(carousel, 'pointerup', event => {
      if (!drag) return;
      const x = event.clientX - drag.x, y = event.clientY - drag.y;
      drag.moved = items.length > 1 && Math.abs(x) > 45 && Math.abs(x) > Math.abs(y) * 1.5;
      if (drag.moved) select(index + (x < 0 ? 1 : -1), true);
    });
    listen(carousel, 'pointercancel', () => { drag = null; });
    listen(carousel, 'click', event => {
      if (drag?.moved) { event.preventDefault(); event.stopPropagation(); drag = null; }
    }, true);
    listen(doc, 'visibilitychange', schedule);
    listen(reduced, 'change', schedule);
    const observer = new win.MutationObserver(() => {
      cover('rank', doc.getElementById('rank-panel').classList.contains('show'));
      cover('mobile', doc.getElementById('mobile-control-dialog').hasAttribute('open'));
    });
    observer.observe(doc.getElementById('rank-panel'), { attributes: true, attributeFilter: ['class'] });
    observer.observe(doc.getElementById('mobile-control-dialog'), { attributes: true, attributeFilter: ['open'] });
    setReleases(releases); sync();
    return { setReleases, cover, expand, showFilters, announce: text => { status.textContent = text; },
      destroy() { win.clearTimeout(timer); observer.disconnect(); cleanups.forEach(cleanup => cleanup()); } };
  }
  const api = { create, normalizeRelease };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapMapHome = api;
})(typeof window !== 'undefined' ? window : globalThis);
