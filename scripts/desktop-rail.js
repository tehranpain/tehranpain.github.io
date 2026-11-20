(function (root) {
  function create({ homePanel, beforeOpen, onFilter, getNetworkArtists, onNetwork, doc = root.document, win = root }) {
    if (!homePanel || doc.body.dataset.mapLayout !== 'rail') return null;
    const rail = doc.getElementById('desktop-map-rail');
    const buttons = new Map([...rail.querySelectorAll('[data-rail-view]')].map(button => [button.dataset.railView, button]));
    const auxiliary = doc.getElementById('desktop-rail-panel');
    const rank = doc.getElementById('rank-panel');
    const rankButton = doc.getElementById('rank-btn');
    const network = doc.getElementById('desktop-network-content');
    const query = doc.getElementById('desktop-network-search');
    const results = doc.getElementById('desktop-network-results');
    let enabled = false, active = null, networkArtist = null, roster;

    function renderNetwork() {
      roster ??= getNetworkArtists().map(item => ({ ...item,
        search: [item.name, ...(item.aliases || [])].map(name => name.toLowerCase()) }));
      const keyword = query.value.trim().toLowerCase();
      const matches = roster.filter(item => item.search.some(name => name.includes(keyword)));
      if (!keyword && networkArtist) matches.sort((a, b) => Number(b.name === networkArtist) - Number(a.name === networkArtist));
      results.replaceChildren(...matches.slice(0, 24).map(item => {
        const button = doc.createElement('button');
        button.type = 'button';
        button.className = 'desktop-network-row';
        button.dataset.networkArtist = item.name;
        button.setAttribute('aria-pressed', String(item.name === networkArtist));
        const name = doc.createElement('span');
        name.textContent = item.name;
        const count = doc.createElement('small');
        count.textContent = '合作 ' + item.count + ' 人';
        button.append(name, count);
        button.addEventListener('click', () => onNetwork(item.name));
        return button;
      }));
      if (!matches.length) {
        const empty = doc.createElement('p');
        empty.className = 'desktop-network-empty';
        empty.textContent = '没找到可查看关系网的歌手';
        results.append(empty);
      }
    }

    function setNetworkArtist(name) {
      networkArtist = name;
      for (const row of results.querySelectorAll('button')) row.setAttribute('aria-pressed', String(row.dataset.networkArtist === name));
    }

    function render() {
      const home = active === 'recommend' || active === 'filter';
      const heading = buttons.get(active)?.textContent.trim() || '';
      doc.getElementById('desktop-home-title').textContent = heading;
      homePanel.setDesktopView(enabled ? (home ? active : 'closed') : null);
      if (enabled) {
        if (active === 'rank') for (const key of ['top', 'right', 'left', 'width', 'maxHeight']) rank.style[key] = '';
        rank.classList.toggle('show', active === 'rank');
        rankButton.classList.toggle('open', active === 'rank');
      }
      auxiliary.hidden = !enabled || !['network', 'albums', 'settings'].includes(active);
      doc.getElementById('desktop-rail-panel-title').textContent = auxiliary.hidden ? '' : heading;
      network.hidden = active !== 'network';
      for (const [key, button] of buttons) button.setAttribute('aria-expanded', String(key === active));
      if (active === 'filter') win.requestAnimationFrame(onFilter);
      if (active === 'network') renderNetwork();
    }

    function close({ focus = false } = {}) {
      if (!enabled || !active) return;
      const previous = active;
      active = null;
      render();
      if (focus) buttons.get(previous).focus({ preventScroll: true });
    }

    function show(view, { focus = false } = {}) {
      if (!enabled || !buttons.has(view)) return;
      if (active !== view) {
        beforeOpen();
        active = view;
        render();
      }
      if (focus) buttons.get(view).focus({ preventScroll: true });
    }

    function sync() {
      const desktop = win.innerWidth > 480;
      if (desktop === enabled) return;
      if (enabled) close();
      enabled = desktop;
      rail.hidden = !enabled;
      if (enabled) doc.body.dataset.desktopRail = 'true';
      else delete doc.body.dataset.desktopRail;
      render();
    }

    for (const [view, button] of buttons) button.addEventListener('click', () => active === view ? close() : show(view));
    for (const button of doc.querySelectorAll('[data-rail-close]')) button.addEventListener('click', () => close({ focus: true }));
    query.addEventListener('input', renderNetwork);
    query.addEventListener('keydown', event => {
      if (event.key !== 'Enter' || event.isComposing) return;
      results.querySelector('button')?.click();
    });
    doc.addEventListener('keydown', event => {
      if (!event.defaultPrevented && event.key === 'Escape' && enabled && active) {
        event.preventDefault(); close({ focus: true });
      }
    });
    win.addEventListener('resize', sync);
    sync();

    return { close, show, setNetworkArtist, isEnabled: () => enabled, activeView: () => active };
  }
  root.RapDesktopRail = { create };
})(window);
