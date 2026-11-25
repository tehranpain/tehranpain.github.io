(function (root) {
  function afterSwipe(expanded, distance, elapsed) {
    if (Math.abs(distance) < 56 && (Math.abs(distance) < 23 || Math.abs(distance) / Math.max(1, elapsed) < .48)) return null;
    if (distance < 0) return expanded ? null : 'expanded';
    return expanded ? 'peek' : 'closed';
  }

  function create({ panel, scroller, handle, summary, close, window: win = root }) {
    const screen = win.matchMedia('(max-width: 480px)');
    let expanded = false, drag, ignoreClick = false, clickTimer;
    function sync() {
      const enabled = screen.matches;
      if (enabled) panel.dataset.profileSheet = expanded ? 'expanded' : 'peek';
      else delete panel.dataset.profileSheet;
      handle.hidden = !enabled;
      summary.hidden = !enabled || expanded;
      scroller.inert = enabled && !expanded;
      handle.setAttribute('aria-expanded', String(expanded));
      handle.setAttribute('aria-label', expanded ? '收起资料卡' : '展开完整资料');
    }
    function stopDrag() {
      drag = null;
      panel.classList.remove('is-sheet-dragging');
      panel.style.removeProperty('--profile-drag-height');
    }
    function setExpanded(value) {
      const focusHandle = value && summary === panel.ownerDocument?.activeElement;
      stopDrag();
      expanded = Boolean(value);
      sync();
      if (focusHandle) handle.focus({ preventScroll: true });
    }
    function collapseOrClose() { if (expanded) setExpanded(false); else close(); }
    function register(node) {
      node.addEventListener('pointerdown', event => {
        if (!screen.matches || !event.isPrimary || event.button !== 0) return;
        drag = { id:event.pointerId, y:event.clientY, started:Date.now(), height:panel.getBoundingClientRect().height };
        node.setPointerCapture?.(event.pointerId);
      });
      node.addEventListener('pointermove', event => {
        if (drag?.id !== event.pointerId) return;
        const distance = event.clientY - drag.y;
        if (Math.abs(distance) < 4 && !panel.classList.contains('is-sheet-dragging')) return;
        panel.classList.add('is-sheet-dragging');
        panel.style.setProperty('--profile-drag-height', Math.max(0, drag.height - distance) + 'px');
      });
      node.addEventListener('pointerup', event => {
        if (drag?.id !== event.pointerId) return;
        const distance = event.clientY - drag.y;
        const next = afterSwipe(expanded, distance, Date.now() - drag.started);
        stopDrag();
        if (Math.abs(distance) > 9) {
          ignoreClick = true;
          win.clearTimeout(clickTimer);
          clickTimer = win.setTimeout(() => { ignoreClick = false; }, 250);
        }
        if (next === 'closed') close();
        else if (next) setExpanded(next === 'expanded');
      });
      node.addEventListener('pointercancel', stopDrag);
      node.addEventListener('lostpointercapture', stopDrag);
      node.addEventListener('click', () => { if (!ignoreClick && screen.matches) setExpanded(!expanded); });
    }
    register(handle);
    register(summary);
    screen.addEventListener('change', () => { stopDrag(); sync(); });
    panel.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !screen.matches) return;
      event.preventDefault();
      collapseOrClose();
    });
    sync();
    return { setExpanded, collapseOrClose, isExpanded: () => expanded, isEnabled: () => screen.matches };
  }

  const api = { create, afterSwipe };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapMobileProfileSheet = api;
})(typeof window !== 'undefined' ? window : globalThis);
