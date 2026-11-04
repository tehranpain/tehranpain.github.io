(function (root) {
  function hasMapLocation(item) {
    return Boolean(item && item.mapVisible !== false && Number.isFinite(item.lat) && Number.isFinite(item.lng)
      && Math.abs(item.lat) <= 90 && Math.abs(item.lng) <= 180);
  }

  function create({ artists, groups, locate, document: suppliedDocument }) {
    const doc = suppliedDocument || root.document;
    const normalize = value => String(value || '').normalize('NFKC').trim().toLowerCase().replace(/\s+/g, ' ');
    const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
    const namesOf = item => [item.name].concat(item.aliases || []).map(normalize);
    function find(name) {
      const key = normalize(name);
      const matches = artists.filter(item => namesOf(item).includes(key));
      return matches.length === 1 ? matches[0] : null;
    }
    function memberLinks(names) {
      return names.map(name => {
        const person = find(name);
        return person
          ? '<button type="button" class="member-profile-link" data-artist-profile="' + escape(person.name) + '">' + escape(name) + '</button>'
          : '<span>' + escape(name) + '</span>';
      }).join(' · ');
    }

    let dialog;
    function element(tag, className, text) {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function open(name) {
      const item = find(name);
      if (!item) return false;
      if (!dialog) {
        dialog = element('dialog', 'artist-profile-dialog');
        dialog.setAttribute('aria-labelledby', 'artist-profile-title');
        dialog.addEventListener('click', event => {
          const rect = dialog.getBoundingClientRect();
          if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right
            || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
        });
        doc.body.appendChild(dialog);
      }
      const close = element('button', 'profile-close', '关闭');
      close.type = 'button';
      close.autofocus = true;
      close.addEventListener('click', () => dialog.close());
      const image = element('img', 'profile-avatar');
      image.src = item.avatar;
      image.alt = item.name;
      image.addEventListener('error', () => { image.hidden = true; });
      const title = element('h2', '', item.name);
      title.id = 'artist-profile-title';
      const header = element('div', 'profile-heading');
      const headingText = element('div');
      const fans = root.FANS_CACHE && root.FANS_CACHE[item.neteaseId] || item.fans;
      headingText.append(title, element('p', 'profile-fans', '网易云粉丝 ' + fans));
      header.append(image, headingText);
      const body = element('div', 'profile-content');
      if (!hasMapLocation(item)) body.append(element('p', 'profile-only-note', '仅收录资料，不在地图显示'));
      if (item.desc && !['自动添加', '网易云自动补全'].includes(item.desc)) body.append(element('p', 'profile-description', item.desc));
      const memberships = groups.filter(group => (group.members || []).some(member => find(member) === item));
      if (memberships.length) {
        body.append(element('h3', '', '所属团体'), element('p', 'profile-groups', memberships.map(group => group.name).join(' · ')));
      }
      const peers = [...new Set((item.collaborators || []).map(peer => typeof peer === 'string' ? peer : peer.name))];
      if (peers.length) {
        body.append(element('h3', '', '合作关系'));
        const list = element('div', 'profile-peer-list');
        peers.forEach(peer => {
          const person = find(peer);
          const node = element(person ? 'button' : 'span', 'profile-peer', peer);
          if (person) {
            node.type = 'button';
            node.addEventListener('click', () => open(person.name));
          }
          list.append(node);
        });
        body.append(list);
      }
      const actions = element('div', 'profile-actions');
      if (hasMapLocation(item)) {
        const button = element('button', 'profile-locate', '在地图查看');
        button.type = 'button';
        button.addEventListener('click', () => { dialog.close(); locate(item.name); });
        actions.append(button);
      }
      if (/^\d+$/.test(String(item.neteaseId))) {
        const link = element('a', 'profile-music-link', '网易云歌手主页');
        link.href = 'https://music.163.com/#/artist?id=' + item.neteaseId;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        actions.append(link);
      }
      dialog.replaceChildren(close, header, body, actions);
      if (!dialog.open) dialog.showModal();
      close.focus();
      return true;
    }
    if (doc) doc.addEventListener('click', event => {
      const trigger = event.target.closest && event.target.closest('[data-artist-profile]');
      if (!trigger) return;
      event.preventDefault();
      event.stopPropagation();
      open(trigger.dataset.artistProfile);
    }, true);
    return { open, find, memberLinks, hasMapLocation };
  }

  const api = { create, hasMapLocation };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RapArtistProfiles = api;
})(typeof window !== 'undefined' ? window : globalThis);
