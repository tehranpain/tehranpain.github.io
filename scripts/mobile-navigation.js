(function (root) {
  const panels = ['search', 'filter', 'rank', 'index'];
  function createState({ activate, show, reveal, conceal, hide, prefersReducedMotion = () => false, timers = root }) {
    let phase = 'closed', active = null, pending, revision = 0;
    function cancel() { revision++; timers.clearTimeout(pending); pending = null; }
    function open(key) {
      if (!panels.includes(key)) return false;
      if (phase === 'open' && active === key) return true;
      const first = phase === 'closed';
      cancel(); phase = 'open'; active = key;
      activate(key);
      if (first) show();
      reveal(key);
      return true;
    }
    function close({ immediate = false, restoreFocus = true } = {}) {
      if (phase === 'closed') return;
      cancel(); phase = 'closing'; conceal();
      const current = revision;
      const finish = () => {
        if (revision !== current || phase !== 'closing') return;
        const previous = active;
        phase = 'closed'; active = null; pending = null;
        hide(previous, { restoreFocus });
      };
      if (immediate || prefersReducedMotion()) finish();
      else pending = timers.setTimeout(finish, 240);
    }
    function toggle(key) { if (phase === 'open' && active === key) close(); else open(key); }
    return { open, close, toggle, isOpen: () => phase !== 'closed', activePanel: () => active };
  }

  function create({ beforeOpen, onActivate, onClose, document: doc = root.document, window: win = root }) {
    const nav = doc.getElementById('mobile-bottom-nav');
    const home = doc.getElementById('mobile-navigation-home');
    const dialog = doc.getElementById('mobile-control-dialog');
    const sheet = dialog.querySelector('.mobile-panel-sheet');
    const header = dialog.querySelector('.mobile-panel-header');
    const closeButton = doc.getElementById('mobile-panel-close');
    const input = doc.getElementById('singer-search');
    const suggestions = doc.getElementById('search-suggestions');
    const title = doc.getElementById('mobile-panel-title');
    const buttons = [...nav.querySelectorAll('[data-mobile-panel]')];
    const views = panels.map(key => doc.getElementById('mobile-view-' + key));
    const labels = { search: '搜索', filter: '筛选', rank: '排行榜', index: '艺人索引' };
    const destinations = {
      'search-input-inner': 'mobile-search-toolbar', 'search-btn': 'mobile-search-toolbar',
      'search-suggestions': 'mobile-search-results', 'mobile-history-section': 'mobile-search-results',
      'mode-filter-tabs': 'mobile-filter-mode', 'more-options-dropdown': 'mobile-filter-options',
      'rank-panel': 'mobile-view-rank', 'index-panel': 'mobile-view-index'
    };
    const portals = Object.entries(destinations).map(([id, target]) => {
      const node = doc.getElementById(id);
      const anchor = doc.createComment('mobile origin: ' + id);
      node.before(anchor);
      return { node, anchor, target: doc.getElementById(target) };
    });
    const reduced = () => win.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let enabled = false, frame, drag;

    function viewport() {
      if (!enabled) return;
      const visual = win.visualViewport;
      dialog.style.setProperty('--mobile-viewport-height', (visual ? visual.height : win.innerHeight) + 'px');
      dialog.style.setProperty('--mobile-viewport-top', (visual ? visual.offsetTop : 0) + 'px');
    }
    function searchStatus() {
      const query = Boolean(input.value.trim());
      dialog.dataset.searchQuery = String(query);
      const empty = doc.getElementById('mobile-search-empty');
      empty.hidden = !query || suggestions.style.display !== 'none';
    }
    function resetDrag() {
      drag = null;
      sheet.classList.remove('is-dragging');
      sheet.style.removeProperty('--mobile-drag-y');
    }
    function focusPanel(key) {
      const target = key === 'search' ? input : closeButton;
      target.focus({ preventScroll: true });
    }
    const state = createState({
      prefersReducedMotion: reduced, timers: win,
      activate(key) {
        if (beforeOpen) beforeOpen();
        if (doc.activeElement === input && key !== 'search') input.blur();
        resetDrag(); sheet.inert = false;
        dialog.dataset.panel = key;
        title.textContent = labels[key];
        nav.style.setProperty('--mobile-nav-index', String(panels.indexOf(key)));
        nav.classList.add('has-active-panel');
        buttons.forEach(button => button.setAttribute('aria-expanded', String(button.dataset.mobilePanel === key)));
        views.forEach((view, index) => { view.hidden = panels[index] !== key; });
        if (onActivate) onActivate(key);
        searchStatus();
      },
      show() {
        dialog.append(nav);
        viewport();
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
        // Establish the initial transform before starting the composited entrance.
        sheet.getBoundingClientRect();
      },
      reveal(key) {
        win.cancelAnimationFrame(frame);
        // Keep keyboard focus within the original tap gesture on mobile Safari.
        focusPanel(key);
        const finish = () => {
          if (!state.isOpen() || state.activePanel() !== key) return;
          dialog.classList.add('is-open');
        };
        if (reduced()) finish(); else frame = win.requestAnimationFrame(finish);
      },
      conceal() {
        win.cancelAnimationFrame(frame);
        input.blur(); drag = null; sheet.classList.remove('is-dragging'); sheet.inert = true;
        dialog.classList.remove('is-open');
      },
      hide(key, { restoreFocus }) {
        if (dialog.open && typeof dialog.close === 'function') dialog.close();
        else dialog.removeAttribute('open');
        home.append(nav);
        nav.classList.remove('has-active-panel');
        buttons.forEach(button => button.setAttribute('aria-expanded', 'false'));
        resetDrag();
        sheet.inert = false;
        if (onClose) onClose();
        if (restoreFocus && enabled) buttons.find(button => button.dataset.mobilePanel === key)?.focus({ preventScroll: true });
      }
    });

    function sync() {
      const mobile = win.innerWidth <= 480;
      if (mobile === enabled) { viewport(); return; }
      if (mobile) {
        enabled = true;
        portals.forEach(({ node, target }) => target.append(node));
        doc.getElementById('search-container').classList.remove('mobile-expanded', 'mobile-searching', 'mobile-mode-open');
        doc.getElementById('mode-filter-tabs').classList.remove('mobile-open');
        doc.body.dataset.mobileNavigation = 'v2';
        viewport();
      } else {
        state.close({ immediate: true, restoreFocus: false });
        enabled = false;
        portals.forEach(({ node, anchor }) => {
          if (['rank-panel', 'index-panel', 'more-options-dropdown'].includes(node.id)) doc.body.append(node);
          else anchor.after(node);
        });
        delete doc.body.dataset.mobileNavigation;
      }
    }
    buttons.forEach(button => button.addEventListener('click', event => {
      event.stopPropagation();
      if (enabled) state.toggle(button.dataset.mobilePanel);
    }));
    closeButton.addEventListener('click', () => state.close());
    dialog.querySelector('.mobile-panel-scrim').addEventListener('click', () => state.close());
    dialog.addEventListener('cancel', event => { event.preventDefault(); state.close(); });
    dialog.addEventListener('close', () => {
      if (state.isOpen()) state.close({ immediate: true });
    });
    dialog.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); state.close(); }
      if (event.key !== 'Tab' || !state.isOpen()) return;
      const items = [...dialog.querySelectorAll('button, input, a[href], [tabindex="0"]')]
        .filter(node => !node.disabled && node.getClientRects().length && !node.closest('[hidden], [inert]'));
      const first = items[0], last = items.at(-1);
      if (event.shiftKey && doc.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && doc.activeElement === last) { event.preventDefault(); first?.focus(); }
    });
    header.addEventListener('pointerdown', event => {
      if (event.target.closest('button') || !state.isOpen()) return;
      drag = { y: event.clientY, time: Date.now(), distance: 0 };
      sheet.classList.add('is-dragging'); header.setPointerCapture?.(event.pointerId);
    });
    header.addEventListener('pointermove', event => {
      if (!drag) return;
      drag.distance = Math.max(0, event.clientY - drag.y);
      sheet.style.setProperty('--mobile-drag-y', Math.min(drag.distance, 350) + 'px');
    });
    function endDrag() {
      if (!drag) return;
      const dismiss = drag.distance > 80 || drag.distance > 24 && drag.distance / Math.max(1, Date.now() - drag.time) > .55;
      if (dismiss) state.close();
      else resetDrag();
    }
    header.addEventListener('pointerup', endDrag);
    header.addEventListener('pointercancel', resetDrag);
    input.addEventListener('input', searchStatus);
    doc.getElementById('search-clear-btn').addEventListener('click', searchStatus);
    win.addEventListener('resize', sync);
    win.visualViewport?.addEventListener('resize', viewport);
    win.visualViewport?.addEventListener('scroll', viewport);
    sync();
    return {
      open: key => enabled ? state.open(key) : false,
      close: options => state.close(options), isEnabled: () => enabled,
      isOpen: state.isOpen, activePanel: state.activePanel,
      contains: node => enabled && dialog.contains(node)
    };
  }
  const api = { create, createState };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapMobileNavigation = api;
})(typeof window !== 'undefined' ? window : globalThis);
