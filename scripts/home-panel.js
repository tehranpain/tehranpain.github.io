(function (root) {
  function safeImage(value) {
    return typeof value === 'string' && /^(https?:\/\/|\.?\.?\/|\/|assets\/)/.test(value) && !value.startsWith('//') ? value : '';
  }
  function normalizeRelease(value) {
    const title = typeof value?.title === 'string' ? value.title.trim() : '';
    const headline = typeof value?.headline === 'string' ? value.headline.trim() : '';
    if (!value || !['album', 'single'].includes(value.type) || typeof value.artist !== 'string'
      || !value.artist.trim() || (!title && !headline)) return null;
    const item = { type: value.type, artist: value.artist.trim(), title, headline,
      artistLabel: typeof value.artistLabel === 'string' && value.artistLabel.trim() ? value.artistLabel.trim() : value.artist.trim(),
      image: safeImage(value.image), format: ['Mixtape', 'EP'].includes(value.format) ? value.format : '专辑' };
    item.artists = [...new Set([item.artist].concat(Array.isArray(value.artists) ? value.artists : [])
      .filter(name => typeof name === 'string' && name.trim()).map(name => name.trim()))];
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
    const dotsHost = doc.getElementById('home-carousel-dots');
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
    let items = [], slides = [], dots = [], index = 0, collapsed = false, timer;
    let hovered = false, focused = false, paused = false, drag;
    let moving = false, shiftedIndex = null, shiftedBy = 0, settleTimer, swipeTimer, suppressSwipeClick = false;

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
        else image.fetchPriority = 'high';
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
    function finishMotion() {
      win.clearTimeout(settleTimer);
      moving = false;
      if (shiftedIndex === null) return;
      // Reuse the real edge slide for a one-step wrap, then rebase without cloned links or duplicate IDs.
      slidesHost.classList.add('is-resetting');
      slides[shiftedIndex].style.transform = '';
      shiftedIndex = null; shiftedBy = 0;
      slidesHost.style.transform = 'translate3d(' + (-index * 100) + '%, 0, 0)';
      void slidesHost.offsetWidth;
      slidesHost.classList.remove('is-resetting');
    }
    function select(value, announce = false, animate = true) {
      if (!items.length) return;
      const wasMoving = moving;
      const target = (value + items.length) % items.length;
      if (animate && target === index) { schedule(); return; }
      const instant = !animate || reduced.matches;
      if (instant) finishMotion();
      else if (!wasMoving && (value < 0 || value >= items.length)) {
        shiftedIndex = value < 0 ? items.length - 1 : 0;
        shiftedBy = value < 0 ? -items.length : items.length;
        slides[shiftedIndex].style.transform = 'translateX(' + (shiftedBy * 100) + '%)';
      }
      index = (value + items.length) % items.length;
      slidesHost.classList.toggle('is-resetting', instant);
      const position = index + (index === shiftedIndex ? shiftedBy : 0);
      slidesHost.style.transform = 'translate3d(' + (-position * 100) + '%, 0, 0)';
      win.clearTimeout(settleTimer);
      moving = !instant;
      if (moving) settleTimer = win.setTimeout(finishMotion, 540);
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
        slide.inert = i !== index;
        slide.setAttribute('aria-hidden', String(i !== index));
        if (i === index) {
          const image = slide.querySelector('.home-release-image img');
          if (image) { image.loading = 'eager'; image.fetchPriority = 'high'; }
        }
      });
      dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)));
      // Reset only when replacing the release list; normal navigation keeps its sliding transition.
      if (instant) { void slidesHost.offsetWidth; slidesHost.classList.remove('is-resetting'); }
      carousel.dataset.index = String(index);
      status.textContent = '';
      if (announce) announcement.textContent = (index + 1) + ' / ' + items.length + '，' + titleOf(items[index]);
      schedule();
    }
    function titleOf(item) {
      return item.headline || item.artistLabel + (item.type === 'single' ? '新歌' : '新' + item.format) + '《' + item.title + '》';
    }
    function renderRelease(item, i) {
      const slide = element('article', 'home-release-slide');
      slide.id = 'home-release-slide-' + i;
      slide.classList.toggle('is-single', item.type === 'single');
      slide.setAttribute('role', 'group'); slide.setAttribute('aria-roledescription', '幻灯片');
      slide.setAttribute('aria-label', (i + 1) + '：' + titleOf(item));
      const open = element(item.type === 'single' && (item.songId || item.albumId) ? 'a' : 'button', 'home-release-open');
      if (open.tagName.toLowerCase() === 'a') {
        // Never guess a song ID from an album ID. The supplied release page is a temporary fallback.
        open.href = 'https://music.163.com/#/' + (item.songId ? 'song?id=' + item.songId : 'album?id=' + item.albumId);
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
      const cover = artwork(item, 'home-release-image', i !== 0);
      if (!item.image) cover.append(element('span', 'home-release-image-pending', '封面待补充'));
      const copy = element('span', 'home-release-copy');
      copy.append(element('span', 'home-release-type', item.type === 'single' ? '最新单曲' : '最新' + item.format), title);
      open.append(cover, element('span', 'home-release-shade'), copy);
      slide.append(open);
      if (item.type === 'single') {
        const artists = element('div', 'home-release-artists');
        item.artists.forEach(name => {
          const person = findArtist && findArtist(name);
          const label = name === item.artist ? item.artistLabel : name;
          const artist = element('button', 'home-release-artist'); artist.type = 'button';
          artist.disabled = !person;
          artist.setAttribute('aria-label', person ? '查看' + label + '的资料' : '暂未收录' + label + '的资料');
          const avatar = artwork(person || {}, 'home-release-artist-avatar', true);
          avatar.prepend(element('span', '', Array.from(label)[0]));
          artist.append(avatar, element('span', 'home-release-artist-name', label), element('span', 'home-release-artist-arrow', '>'));
          artist.addEventListener('click', event => {
            event.stopPropagation();
            if (person && onArtist) onArtist(person.name);
          });
          artists.append(artist);
        });
        // Only singles retain artist shortcuts, separate from the work link.
        slide.append(artists);
      }
      return slide;
    }
    function setReleases(values) {
      finishMotion();
      items = Array.isArray(values) ? values.map(normalizeRelease).filter(Boolean) : [];
      slidesHost.replaceChildren(); slides = items.map(renderRelease);
      dotsHost.replaceChildren();
      dots = items.map((item, i) => {
        const dot = element('button', 'home-carousel-dot');
        dot.type = 'button';
        dot.setAttribute('aria-label', '切换到第' + (i + 1) + '张：' + titleOf(item));
        dot.setAttribute('aria-controls', 'home-release-slide-' + i);
        dot.addEventListener('click', () => select(i, true));
        dotsHost.append(dot);
        return dot;
      });
      carousel.classList.toggle('has-multiple', items.length > 1);
      controls.hidden = items.length < 2;
      status.textContent = '';
      announcement.textContent = '';
      if (!items.length) {
        const empty = element('div', 'home-release-empty');
        const art = element('span', 'home-empty-record'); art.setAttribute('aria-hidden', 'true');
        empty.append(element('span', 'home-empty-kicker', '专辑 / Mixtape / 单曲'),
          element('h2', 'home-empty-title', '新作推荐'), art,
          element('p', 'home-empty-note', '等待添加封面与作品信息'));
        slidesHost.classList.add('is-resetting');
        slidesHost.style.transform = 'translate3d(0, 0, 0)';
        slidesHost.append(empty);
        void slidesHost.offsetWidth;
        slidesHost.classList.remove('is-resetting');
        index = 0; carousel.dataset.index = '0'; schedule();
      } else { slidesHost.append(...slides); select(0, false, false); }
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
      dots[index].focus({ preventScroll: true });
    });
    listen(carousel, 'pointerdown', event => {
      suppressSwipeClick = false; win.clearTimeout(swipeTimer);
      if (event.pointerType !== 'touch' || event.target.closest('#home-carousel-controls')) return;
      drag = { x: event.clientX, y: event.clientY };
    });
    listen(carousel, 'pointerup', event => {
      if (!drag) return;
      const x = event.clientX - drag.x, y = event.clientY - drag.y;
      drag = null;
      if (items.length > 1 && Math.abs(x) > 45 && Math.abs(x) > Math.abs(y) * 1.5) {
        suppressSwipeClick = true;
        swipeTimer = win.setTimeout(() => { suppressSwipeClick = false; }, 400);
        select(index + (x < 0 ? 1 : -1), true);
      }
    });
    listen(carousel, 'pointercancel', () => { drag = null; });
    listen(carousel, 'click', event => {
      if (suppressSwipeClick) { event.preventDefault(); event.stopPropagation(); suppressSwipeClick = false; }
    }, true);
    listen(slidesHost, 'transitionend', event => {
      if (event.target === slidesHost && event.propertyName === 'transform') finishMotion();
    });
    listen(doc, 'visibilitychange', schedule);
    listen(reduced, 'change', () => { finishMotion(); schedule(); });
    const observer = new win.MutationObserver(() => {
      cover('rank', doc.getElementById('rank-panel').classList.contains('show'));
      cover('mobile', doc.getElementById('mobile-control-dialog').hasAttribute('open'));
    });
    observer.observe(doc.getElementById('rank-panel'), { attributes: true, attributeFilter: ['class'] });
    observer.observe(doc.getElementById('mobile-control-dialog'), { attributes: true, attributeFilter: ['open'] });
    setReleases(releases); sync();
    return { setReleases, cover, expand, showFilters, announce: text => { status.textContent = text; },
      destroy() { win.clearTimeout(timer); win.clearTimeout(swipeTimer); finishMotion(); observer.disconnect(); cleanups.forEach(cleanup => cleanup()); } };
  }
  const api = { create, normalizeRelease };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapMapHome = api;
})(typeof window !== 'undefined' ? window : globalThis);
