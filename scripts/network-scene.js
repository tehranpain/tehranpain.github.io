(function (root) {
  function mappedPeers(center, resolve, hasLocation) {
    const seen = new Set([center.name]);
    return (center.collaborators || []).flatMap(relation => {
      const person = resolve(typeof relation === 'string' ? relation : relation && relation.name);
      if (!person || seen.has(person.name) || !hasLocation(person)) return [];
      seen.add(person.name);
      return [person];
    });
  }

  function curvePoints(start, end, project, unproject, index = 0) {
    const a = project(start), b = project(end);
    const dx = b.x - a.x, dy = b.y - a.y;
    const distance = Math.hypot(dx, dy);
    if (distance < .01) return [start, end];
    const bend = Math.min(130, distance * (.13 + index % 3 * .025)) * (index % 2 ? -1 : 1);
    const control = { x: (a.x + b.x) / 2 - dy / distance * bend, y: (a.y + b.y) / 2 + dx / distance * bend };
    return Array.from({ length: 25 }, (_, step) => {
      const t = step / 24, s = 1 - t;
      return unproject({ x: s * s * a.x + 2 * s * t * control.x + t * t * b.x,
        y: s * s * a.y + 2 * s * t * control.y + t * t * b.y });
    });
  }

  // Resolve collisions in screen space; artist coordinates and marker LatLngs stay unchanged.
  function spreadNodes(nodes, bounds) {
    const placed = [];
    return nodes.map((node, index) => {
      if (!index || node.x < bounds.left || node.x > bounds.right || node.y < bounds.top || node.y > bounds.bottom) {
        const unchanged = { ...node, dx: 0, dy: 0 }; placed.push(unchanged); return unchanged;
      }
      let best, found = false;
      const direction = Math.atan2(node.y - nodes[0].y, node.x - nodes[0].x) + index * .7;
      for (let ring = 0; ring <= 10 && !found; ring++) {
        let free;
        for (let step = 0; step < (ring ? 20 : 1); step++) {
          const angle = direction + step * 2.399963;
          const radius = ring * 24;
          const x = Math.max(bounds.left + node.radius, Math.min(bounds.right - node.radius, node.x + Math.cos(angle) * radius));
          const y = Math.max(bounds.top + node.radius, Math.min(bounds.bottom - node.radius, node.y + Math.sin(angle) * radius));
          const overlap = placed.reduce((sum, other) => {
            const circle = Math.max(0, node.radius + other.radius + 9 - Math.hypot(x - other.x, y - other.y)) ** 2;
            const box = other.labelBox;
            const label = box ? Math.max(0, node.radius + 6 - Math.hypot(
              x - Math.max(box.left, Math.min(box.right, x)), y - Math.max(box.top, Math.min(box.bottom, y)))) ** 2 : 0;
            return sum + circle + label;
          }, 0);
          const displacement = (x - node.x) ** 2 + (y - node.y) ** 2;
          const candidate = { ...node, x, y, dx: x - node.x, dy: y - node.y, score: overlap * 100000 + displacement };
          if (!best || candidate.score < best.score) best = candidate;
          if (!overlap && (!free || candidate.score < free.score)) free = candidate;
        }
        if (free) { best = free; found = true; }
      }
      placed.push(best);
      return best;
    });
  }

  function nodeScale(zoom) { return Math.min(1, Math.max(.72, Math.pow(2, zoom - 8))); }

  function create({ map, layer, resolve, hasLocation, bindPreview, exitButton, L = root.L,
    document: doc = root.document, timers = root,
    prefersReducedMotion = () => Boolean(root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches) }) {
    const container = map.getContainer();
    const paneName = 'rap-network-links';
    const pane = map.getPane(paneName) || map.createPane(paneName);
    pane.style.zIndex = '410';
    pane.style.pointerEvents = 'none';
    const renderer = L.svg({ pane: paneName, padding: .4 });
    let active = false, ready = false, revision = 0, pending, onReady, centerName;
    let nodes = [], links = [], guides = [];

    function element(tag, className, text) {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function updateScale() {
      if (active) container.style.setProperty('--network-avatar-scale', String(nodeScale(map.getZoom())));
    }
    function focus(index) {
      if (!active) return;
      container.classList.toggle('network-has-focus', index !== null && index !== 0);
      nodes.forEach((entry, i) => entry.marker.getElement()?.classList.toggle('is-network-focused', i === index));
      links.forEach((entry, i) => entry.paths.forEach(path => path.getElement()?.classList.toggle('is-network-focused', i + 1 === index)));
    }
    function marker(person, center, index) {
      const offset = element('div', 'network-node-offset');
      const frame = element('div', 'singer-marker-container');
      const reveal = element('div', 'network-node-reveal');
      const avatar = element('div', 'singer-avatar-main');
      const fallback = element('span', 'network-avatar-fallback', Array.from(person.name)[0]);
      fallback.setAttribute('aria-hidden', 'true');
      avatar.append(fallback);
      if (typeof person.avatar === 'string' && /^(https?:\/\/|\.?\.?\/|assets\/)/.test(person.avatar)) {
        const image = element('img');
        image.alt = '';
        image.decoding = 'async';
        image.addEventListener('error', () => { image.hidden = true; });
        image.src = person.avatar;
        avatar.append(image);
      }
      reveal.append(avatar, element('span', 'network-node-name', person.name));
      frame.append(reveal); offset.append(frame);
      const size = center ? 64 : 42;
      const item = L.marker([person.lat, person.lng], {
        icon: L.divIcon({ className: 'singer-custom-marker network-node ' + (center ? 'is-network-center' : 'is-network-peer'),
          html: offset, iconSize: [size, size], iconAnchor: [size / 2, size / 2], popupAnchor: [0, -size / 2] }),
        title: person.name, alt: person.name + '的资料', zIndexOffset: center ? 1800 : 100
      }).addTo(layer);
      const delay = center ? 0 : 240 + Math.min(360, index * 13);
      item.getElement().style.setProperty('--network-node-delay', delay + 'ms');
      bindPreview(item, person);
      item.on('mouseover focus', () => focus(index));
      item.on('mouseout blur', () => focus(null));
      item.getElement().addEventListener('focusin', () => focus(index));
      item.getElement().addEventListener('focusout', () => focus(null));
      return { marker: item, person, size };
    }
    function line(className, index) {
      const path = L.polyline([], { pane: paneName, renderer, interactive: false, className,
        color: className.includes('halo') ? '#fff' : '#ce555c', weight: className.includes('halo') ? 5 : 1.6,
        opacity: 1, lineCap: 'round', lineJoin: 'round', smoothFactor: .4 }).addTo(layer);
      const svg = path.getElement();
      svg.setAttribute('pathLength', '1');
      svg.style.setProperty('--network-line-delay', Math.min(360, index * 13) + 'ms');
      return path;
    }
    function cameraPadding() {
      const size = map.getSize();
      let left = size.x <= 600 ? 32 : 92;
      if (size.x > 600) {
        const panel = doc.querySelector('#rank-panel.show, #index-panel.show');
        if (panel) left = Math.min(size.x * .4, Math.max(left, panel.getBoundingClientRect().right + 24));
      }
      return { left, right: size.x <= 600 ? 32 : 92, top: size.x <= 480 ? 70 : 128, bottom: size.x <= 480 ? 160 : 118 };
    }
    function layout() {
      if (!active) return;
      guides.forEach(path => layer.removeLayer(path)); guides = [];
      updateScale();
      const zoom = map.getZoom(), scale = nodeScale(zoom), size = map.getSize(), padding = cameraPadding();
      const anchors = nodes.map((entry, i) => ({
        ...map.latLngToContainerPoint(entry.marker.getLatLng()), radius: entry.size * scale / 2 + (i ? 0 : 18)
      }));
      const labelWidth = Math.min(175, Array.from(centerName).length * 10 + 20) * scale;
      const labelTop = anchors[0].y + (nodes[0].size / 2 + 12) * scale;
      anchors[0].labelBox = { left: anchors[0].x - labelWidth / 2, right: anchors[0].x + labelWidth / 2,
        top: labelTop, bottom: labelTop + 30 * scale };
      const positions = spreadNodes(anchors, { left: padding.left / 2, right: size.x - padding.right / 2, top: padding.top, bottom: size.y - padding.bottom });
      let expanded = 0;
      nodes.forEach((entry, index) => {
        const position = positions[index];
        const node = entry.marker.getElement();
        node.style.setProperty('--network-offset-x', position.dx + 'px');
        node.style.setProperty('--network-offset-y', position.dy + 'px');
        entry.marker.options.icon.options.popupAnchor = [position.dx, position.dy - entry.size * scale / 2 - 8];
        const popup = entry.marker.getPopup?.();
        if (popup && popup.isOpen()) popup.update();
        if (Math.hypot(position.dx, position.dy) > 3) {
          expanded++;
          const anchor = entry.marker.getLatLng();
          const display = map.containerPointToLatLng(L.point(position.x, position.y));
          guides.push(L.polyline([anchor, display], { pane: paneName, renderer, interactive: false, className: 'network-tether',
            color: '#8b9397', weight: 1, opacity: .55, dashArray: '2 5' }).addTo(layer));
          guides.push(L.circleMarker(anchor, { pane: paneName, renderer, interactive: false, className: 'network-geo-anchor',
            radius: 2, stroke: false, fillColor: '#b57f80', fillOpacity: .8 }).addTo(layer));
        }
      });
      const project = value => map.project(value, zoom);
      const unproject = point => map.unproject(L.point(point.x, point.y), zoom);
      const center = nodes[0].marker.getLatLng();
      links.forEach((entry, index) => {
        const target = positions[index + 1];
        const end = map.containerPointToLatLng(L.point(target.x, target.y));
        const curve = curvePoints(center, end, project, unproject, index);
        entry.paths.forEach(path => path.setLatLngs(curve));
      });
      const hint = exitButton.querySelector('.network-dock-hint');
      if (hint) hint.textContent = expanded ? '相邻头像已展开 · 虚线指向实际位置' : '悬停头像，聚焦合作连线';
    }
    function clear() {
      revision++; active = false; ready = false; centerName = null;
      if (onReady) map.off('moveend', onReady);
      onReady = null;
      timers.clearTimeout(pending); pending = null;
      map.stop();
      layer.clearLayers(); nodes = []; links = []; guides = [];
      container.classList.remove('network-view', 'network-is-ready', 'network-has-focus', 'network-is-zooming');
      container.style.removeProperty('--network-avatar-scale');
      exitButton.style.display = 'none';
      exitButton.classList.remove('network-dock');
    }
    function show(center) {
      if (!hasLocation(center)) return false;
      if (active && centerName === center.name) { focus(null); return true; }
      clear(); active = true; centerName = center.name;
      const current = revision;
      const peers = mappedPeers(center, resolve, hasLocation).sort((a, b) =>
        map.distance([center.lat, center.lng], [a.lat, a.lng]) - map.distance([center.lat, center.lng], [b.lat, b.lng]) || a.name.localeCompare(b.name));
      container.classList.add('network-view'); updateScale();
      nodes = [marker(center, true, 0), ...peers.map((person, index) => marker(person, false, index + 1))];
      links = peers.map((person, index) => ({ paths: [line('network-link network-link-halo', index), line('network-link network-link-ink', index)] }));
      const copy = element('span', 'network-dock-copy');
      copy.append(element('span', 'network-dock-title', center.name),
        element('span', 'network-dock-count', peers.length + ' 位地图合作者'), element('span', 'network-dock-hint', '正在展开合作关系'));
      const symbol = element('span', 'network-dock-symbol'); symbol.setAttribute('aria-hidden', 'true');
      const close = element('span', 'network-dock-close', '×'); close.setAttribute('aria-hidden', 'true');
      exitButton.replaceChildren(symbol, copy, close);
      exitButton.setAttribute('aria-label', '退出关系网'); exitButton.title = '退出关系网';
      exitButton.classList.add('network-dock'); exitButton.style.display = 'flex';
      onReady = () => {
        if (!active || revision !== current || ready) return;
        ready = true; map.off('moveend', onReady); onReady = null;
        timers.clearTimeout(pending); pending = null;
        layout(); container.classList.add('network-is-ready');
      };
      const finish = onReady;
      map.on('moveend', finish);
      pending = timers.setTimeout(finish, 1400);
      const padding = cameraPadding();
      const bounds = L.latLngBounds(nodes.map(entry => entry.marker.getLatLng()));
      const options = { paddingTopLeft: [padding.left, padding.top], paddingBottomRight: [padding.right, padding.bottom],
        maxZoom: 7.5, duration: 1.05, easeLinearity: .25, animate: !prefersReducedMotion() };
      if (prefersReducedMotion()) { map.fitBounds(bounds, options); finish(); }
      else map.flyToBounds(bounds, options);
      return true;
    }
    map.on('zoom', updateScale);
    map.on('zoomstart', () => { if (active && ready) container.classList.add('network-is-zooming'); });
    map.on('zoomend resize', () => {
      if (active && ready) { layout(); container.classList.remove('network-is-zooming'); }
    });
    return { show, clear, isActive: () => active };
  }
  const api = { create, mappedPeers, curvePoints, spreadNodes, nodeScale };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapNetworkScene = api;
})(typeof window !== 'undefined' ? window : globalThis);
