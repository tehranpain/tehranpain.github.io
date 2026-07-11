(() => {
  const panel = document.querySelector('#boss-search');
  const panelToggle = document.querySelector('#bossPanelToggle');
  if (!panel || !panelToggle) return;

  function setBossPanel(open) {
    panel.classList.toggle('collapsed', !open);
    panelToggle.setAttribute('aria-expanded', String(open));
    panelToggle.setAttribute('aria-label', open ? '收起BOSS岗位搜索' : '展开BOSS岗位搜索');
    panelToggle.title = open ? '收起BOSS岗位搜索' : '展开BOSS岗位搜索';
    panelToggle.innerHTML = `<i data-lucide="${open ? 'panel-right-close' : 'panel-right-open'}"></i>`;
    if (window.lucide) lucide.createIcons();
  }

  panelToggle.addEventListener('click', () => setBossPanel(panel.classList.contains('collapsed')));

})();

