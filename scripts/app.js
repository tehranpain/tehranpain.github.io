// 页面交互与地图初始化。人物/厂牌数据见 data/artist-data.js。
  // === Leaflet.SmoothWheelZoom 插件（MIT License, mutsuyuki） ===
  L.Map.mergeOptions({ smoothWheelZoom: true, smoothSensitivity: 1 });
  L.Map.SmoothWheelZoom = L.Handler.extend({
    addHooks: function () {
      L.DomEvent.on(this._map._container, 'wheel', this._onWheelScroll, this);
    },
    removeHooks: function () {
      L.DomEvent.off(this._map._container, 'wheel', this._onWheelScroll, this);
    },
    _onWheelScroll: function (e) {
      if (!this._isWheeling) this._onWheelStart(e);
      this._onWheeling(e);
    },
    _onWheelStart: function (e) {
      var map = this._map;
      this._isWheeling = true;
      this._wheelMousePosition = map.mouseEventToContainerPoint(e);
      this._centerPoint = map.getSize()._divideBy(2);
      this._startLatLng = map.containerPointToLatLng(this._centerPoint);
      this._wheelMouseLatLng = map.containerPointToLatLng(this._wheelMousePosition);
      this._startZoom = map.getZoom();
      this._moved = false;
      this._zooming = true;
      map._stop();
      if (map._panAnim) map._panAnim.stop();
      this._goalZoom = map.getZoom();
      this._prevCenter = map.getCenter();
      this._prevZoom = map.getZoom();
      this._zoomAnimationId = requestAnimationFrame(this._updateWheelZoom.bind(this));
    },
    _onWheeling: function (e) {
      var map = this._map;
      this._goalZoom = this._goalZoom + L.DomEvent.getWheelDelta(e) * 0.003 * map.options.smoothSensitivity;
      if (this._goalZoom < map.getMinZoom() || this._goalZoom > map.getMaxZoom()) {
        this._goalZoom = map._limitZoom(this._goalZoom);
      }
      this._wheelMousePosition = map.mouseEventToContainerPoint(e);
      this._wheelMouseLatLng = map.containerPointToLatLng(this._wheelMousePosition);
      clearTimeout(this._timeoutId);
      this._timeoutId = setTimeout(this._onWheelEnd.bind(this), 200);
      L.DomEvent.preventDefault(e);
      L.DomEvent.stopPropagation(e);
    },
    _onWheelEnd: function () {
      this._isWheeling = false;
      cancelAnimationFrame(this._zoomAnimationId);
      this._map._moveEnd(true);
    },
    _updateWheelZoom: function () {
      var map = this._map;
      if (!map.getCenter().equals(this._prevCenter) || map.getZoom() != this._prevZoom) return;
      this._zoom = map.getZoom() + (this._goalZoom - map.getZoom()) * 0.3;
      this._zoom = Math.floor(this._zoom * 100) / 100;
      var delta = this._wheelMousePosition.subtract(this._centerPoint);
      if (delta.x === 0 && delta.y === 0) return;
      this._center = map.unproject(map.project(this._wheelMouseLatLng, this._zoom).subtract(delta), this._zoom);
      if (!this._moved) { map._moveStart(true, false); this._moved = true; }
      map._move(this._center, this._zoom);
      this._prevCenter = map.getCenter();
      this._prevZoom = map.getZoom();
      this._zoomAnimationId = requestAnimationFrame(this._updateWheelZoom.bind(this));
    }
  });
  L.Map.addInitHook('addHandler', 'smoothWheelZoom', L.Map.SmoothWheelZoom);

    document.addEventListener('DOMContentLoaded', function() {
 const RAP_LANDMARKS_ENABLED = document.body.dataset.rapLandmarksEnabled !== 'false';
 const isMobile = window.innerWidth <= 480;
 const map = L.map('map', {
  maxZoom: 12,
  minZoom: 3,
  scrollWheelZoom: false,   // 关闭原生滚轮缩放
  smoothWheelZoom: true,    // 启用平滑缩放
  smoothSensitivity: 2,     // 缩放速度，可按手感调整（推荐 0.8~1.5）
  zoomSnap: 0,              // 允许任意小数 zoom，配合平滑缩放必须设为 0
markerZoomAnimation: false
}).setView([35, 105], isMobile ? 3.5 : 5);
// Leaflet 当前使用高德栅格瓦片；用灰度滤镜做雅士灰风格近似，仅调整底图。
map.getPane('tilePane').style.filter = 'grayscale(0.78) saturate(0.35) brightness(1.02) contrast(0.94)';
window._map = map; // 暗露地图实例，供卡片内关闭按钮使用

// 地图缩小则头像等比缩小；达到8级后保持原尺寸，最小显示直径为24px。
const PROFILE_AVATAR_FULL_ZOOM = 8;
const PROFILE_AVATAR_MIN_SIZE = 24;

function getProfileAvatarScale(zoom, baseSize) {
  const minimum = Math.min(1, PROFILE_AVATAR_MIN_SIZE / baseSize);
  return Math.min(1, Math.max(minimum, Math.pow(2, zoom - PROFILE_AVATAR_FULL_ZOOM)));
}

function updateProfileAvatarScale() {
  const baseSize = window.matchMedia('(max-width: 480px)').matches ? 38 : 60;
  const scale = getProfileAvatarScale(map.getZoom(), baseSize);
  map.getContainer().style.setProperty('--profile-avatar-scale', String(scale));
}

map.on('zoom resize', updateProfileAvatarScale);
updateProfileAvatarScale();



const networkLayer = L.layerGroup().addTo(map);
let networkScene = null;
function clearNetworkScene() {
  if (networkScene) networkScene.clear();
  else networkLayer.clearLayers();
}


      //高德地图瓦片
      L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        subdomains: ['1','2','3','4'],
        attribution: '© 高德地图',
        maxZoom: 18,
        crossOrigin: true
      }).addTo(map);

      // 3. 歌手数据
      const { singers, cities, labels, profiles = [] } = window.RapMapData;

const singersWithType = singers.map(singer => ({
  ...singer,
  type: "singer"
}));

const profilesWithType = profiles.map(person => ({ ...person, type: 'singer' }));
const allData = [...singersWithType, ...profilesWithType, ...labels];
let selectedProfileName = null;
let mobileNavigation = null;

function setSelectedProfileMarker(name = null) {
  selectedProfileName = name;
  map.getPane('markerPane').querySelectorAll('.singer-custom-marker').forEach(element => {
    const selected = name !== null && element.title === name;
    element.classList.toggle('is-profile-selected', selected);
    element.setAttribute('aria-current', String(selected));
  });
}

// Keep the originating list state without coupling profile history to its rendering code.
function captureProfileReturnTarget() {
  const mobilePanel = mobileNavigation && mobileNavigation.isEnabled() && mobileNavigation.isOpen()
    ? mobileNavigation.activePanel() : null;
  const kind = ['rank', 'index'].includes(mobilePanel) ? mobilePanel
    : ['rank', 'index'].find(key => document.getElementById(key + '-panel').classList.contains('show'));
  if (!kind) return null;
  const list = document.getElementById(kind === 'rank' ? 'rank-panel-body' : 'index-list');
  const scrollTop = list.scrollTop;
  const tab = document.querySelector('.' + kind + '-tab.active')?.dataset.tab;
  const month = document.querySelector('.rank-fan-month-tab.active')?.dataset.month;
  return {
    label: kind === 'rank' ? '排行榜' : '索引',
    restore() {
      const mobile = mobileNavigation && mobileNavigation.isEnabled();
      const button = document.getElementById(kind + '-btn');
      if (mobile) mobileNavigation.open(kind);
      else if (!document.getElementById(kind + '-panel').classList.contains('show')) button.click();
      const selectedTab = document.querySelector('.' + kind + '-tab[data-tab="' + tab + '"]');
      if (selectedTab && !selectedTab.classList.contains('active')) selectedTab.click();
      if (kind === 'rank') {
        const selectedMonth = document.querySelector('.rank-fan-month-tab[data-month="' + month + '"]');
        if (selectedMonth && !selectedMonth.classList.contains('active')) selectedMonth.click();
      }
      list.scrollTop = scrollTop;
      if (!mobile) button.focus({ preventScroll: true });
    }
  };
}

function positionDesktopPopover(panel, anchor, { width = 320, alignRight = false } = {}) {
  const rect = anchor.getBoundingClientRect();
  const panelWidth = Math.min(width, window.innerWidth - 24);
  const left = Math.max(12, Math.min(alignRight ? rect.right - panelWidth : rect.left, window.innerWidth - panelWidth - 12));
  const top = rect.bottom + 10;
  panel.style.top = top + 'px';
  panel.style.left = left + 'px';
  panel.style.right = '';
  panel.style.width = panelWidth + 'px';
  panel.style.maxHeight = Math.max(120, Math.min(720, window.innerHeight - top - 36)) + 'px';
}

const profileUI = window.RapArtistProfiles.create({
  artists: [...singersWithType, ...profilesWithType], groups: labels,
  locate: name => locateAndAnimate(name, false),
  network: (name, options) => window.showNetwork(name, options),
  getReturnTarget: captureProfileReturnTarget,
  onClose: () => setSelectedProfileMarker(),
  onOpen: item => {
    if (mobileNavigation) mobileNavigation.close({ immediate: true, restoreFocus: false });
    map.closePopup();
    setSelectedProfileMarker(item.name);
    ['more-options-dropdown', 'rank-panel', 'index-panel'].forEach(id => {
      document.getElementById(id).classList.remove('show');
    });
    ['more-options-btn', 'rank-btn', 'index-btn'].forEach(id => {
      document.getElementById(id).classList.remove('open', 'active');
    });
    document.getElementById('index-btn').setAttribute('aria-expanded', 'false');
    document.getElementById('search-container').classList.remove('mobile-expanded', 'mobile-searching', 'mobile-mode-open');
    document.getElementById('search-suggestions').style.display = 'none';
  }
});

// 粉丝数优先使用 fans-cache.js 里的定期同步结果；没有缓存时保留上方写死的兜底值。
if (window.FANS_CACHE) {
  allData.forEach(item => {
    if (item.neteaseId && window.FANS_CACHE[item.neteaseId]) {
      item.fans = window.FANS_CACHE[item.neteaseId];
    }
  });
}


// 定义特殊分类名单
const specialCategories = {
  "new_rap25": ["SHarK", "邓典果DDG", "Top Barry", "Rapeter","泰格西","Vinz-T","翁杰Winjay","KITO","DOMMIU","马赫mood","Yosko","BlackTheDevil","阿达娃"], 
"new_rap24": ["JinJiBeWater-隼", "新秀", "Athree", "辉子","AA","贰万","Nxmad诺曼德","God Øne","JarStick","罗言","MC脏脏","C2C"],
"ronghe25": ["艾志恒Asen", "万妮达Vinida Weng", "GAI周延", "C-BLOCK","华云龙KLE","陈一豪Clear","SHarK","Rapeter","亚细亚旷世奇才","ljz329","揽佬SKAI ISYOURGOD","泰格西","Top Barry","邓典果DDG","Ranzer","盛宇D-SHINE","功夫胖KUNGFU-PEN","王以太","黄之仪Kyra Zilver","BrAnTB白景屹","asak藏羚羊"],

"wangyi25": ["艾志恒Asen", "夏之禹", "华云龙KLE", "GAI周延","谢帝","陈一豪Clear","王齐铭WatchMe","张方钊","C-BLOCK","施鑫文月","马赫mood","Vansdaddy","王以太","马思唯","二流","李佳隆","陈娴静","africakid","李欣颖","ProN4c","杨和苏KeyNG","JinJiBeWater-隼","ljz329","Rapeter"],
"hanson": ["africakid", "R!R!Riot", "nato", "艾志恒Asen","Alyway","CashTrippy","贾真Jahgen","Arthurnevawakes","THOME","YTH Chopie","马思唯","Akemen杀","FENDIGHEE RICCH","TOYOKI","离合","YOUNG13DBABY","KITO","罗言","KnowKnow","Melo","李佳隆","谢帝","MULA SAKEE","SASIOVERLXRD","Capper","mac ova seas","Chalky Wong","BombWayne"],
"bb": ["Top Barry", "TINY7", "连麻Swimming", "Vansdaddy","罗言","张方钊","mac ova seas","BOBBYNOPEACE","王以太","加木","JinJiBeWater-隼","CashTrippy","TizzyT","康熙","Rapeter","THOME","LSGCsikoriot","Lil Asian","KnowKnow","吕富贵","李文","Melo","卡力老虎","功夫胖KUNGFU-PEN","KIV","华云龙KLE","沧桑Cang333","Nxmad诺曼德","翁杰Winjay","Monovisa","李大奔BENZO","李欣颖","Dove鸽子","GALI","yilun!","黄格雷","李佳隆","Uzzy","八口8uck","小酷Coola","PearBae小梨","杨和苏KeyNG","Yee","KITO","叶轩池","Athree","三火flame","OuttaWave","黄之仪Kyra Zilver","gs.l","揽佬SKAI ISYOURGOD"],
"ybm": ["马思唯", "NINEONE#乃万", "CREAM D", "弹壳Danko","法老","高天佐","KnowKnow","艾志恒Asen","Kc","Mc光光","李大奔BENZO","JD","VaVa娃娃","宝石Gem","俞天时","Top Barry","Rapeter","ljz329","满舒克","MC HotDog热狗","黄旭","PSY.P","Melo","KnowKnow","CashTrippy","GALI","BrAnTB白景屹","UDIGG","万妮达Vinida Weng","3Bangz","Wiz-H张子豪","Mengzi","邓典果DDG","李尔新","KKECHO","Sleepy Cat","Ty.","谢帝","Saber梁维嘉","Jony J","V.O.B","AJ赖煜哲","Capper","那吾克热-NW","功夫胖KUNGFU-PEN","刘炫廷","杨和苏KeyNG"],
"mai": ["艾志恒Asen", "夏之禹", "华云龙KLE", "GAI周延","谢帝","陈一豪Clear","王齐铭WatchMe","张方钊","C-BLOCK","施鑫文月","马赫mood","Vansdaddy","王以太","马思唯","二流","李佳隆","陈娴静","africakid","李欣颖","ProN4c","杨和苏KeyNG","JinJiBeWater-隼","ljz329","Rapeter"],


  };




    // ---------- 歌手/厂牌标记图层：不聚合，低倍视图逐个显示红点 ----------
    let markerClusterGroup = L.layerGroup();
    map.addLayer(markerClusterGroup);
    
    let searchMarkerMap = new Map(); // key: 小写名称, value: marker对象
    let searchNameList = []; // { raw, lower, type }
    

cities.forEach(city => {
        searchNameList.push({ raw: city.name, lower: city.name.toLowerCase(), type: 'city', lat: city.lat, lng: city.lng });
      });



    // 优雅脉冲动画函数 (添加临时DOM脉冲)
    function addPulseEffect(latLng) {
      // 将地理坐标转成屏幕像素位置
      const point = map.latLngToContainerPoint(latLng);
      const container = map.getContainer();
      const pulseDiv = document.createElement('div');
      pulseDiv.className = 'pulse-marker';
      pulseDiv.style.left = point.x - 16 + 'px';
      pulseDiv.style.top = point.y - 16 + 'px';
      pulseDiv.style.position = 'absolute';
      container.style.position = 'relative';
      container.appendChild(pulseDiv);
      setTimeout(() => { if(pulseDiv && pulseDiv.remove) pulseDiv.remove(); }, 900);
    }
    
    // Leave space for the non-modal profile card instead of opening a second map popup.
    function smartLocateAndPopup(marker, name, showProfile = true) {
      if (!marker) return false;
      if (showProfile) profileUI.open(name);
      map.closePopup();
      const target = marker.getLatLng();
      const zoom = Math.max(map.getZoom(), 10);
      let center = target;
      const panel = document.getElementById('artist-profile-panel');
      if (panel && !panel.hidden) {
        const bounds = panel.getBoundingClientRect();
        const size = map.getSize();
        const offset = window.innerWidth <= 600
          ? [0, Math.min(bounds.height, size.y * .72) / 2]
          : [-Math.min(bounds.right + 16, size.x * .6) / 2, 0];
        center = map.unproject(map.project(target, zoom).add(offset), zoom);
      }
      map.flyTo(center, zoom, { duration: .9, easeLinearity: .4 });
      showTip('已定位 ' + name, false, 1800);
      return true;
    }

function getProfilePopupOffset(cardWidth) {
  const isMobile = window.matchMedia('(max-width: 480px)').matches;
  if (!cardWidth) return isMobile ? [154, 46] : [208, 55];

  const x = Math.round(cardWidth / 2 + (isMobile ? 22 : 36));
  return [x, isMobile ? 46 : 55];
}

// Hover shows a compact preview; clicking the avatar opens its full profile directly.
function bindProfilePreview(marker, item, options = {}) {
  const preview = profileUI.preview(item);
  marker.bindPopup(preview, { autoPan: false, ...options });
  const popup = marker.getPopup();
  const baseOffset = L.point(popup.options.offset);
  let popupTimeout;
  marker.on('popupopen', () => {
    // Keep both actions reachable at map edges without panning the map on hover.
    popup.options.offset = baseOffset;
    popup.update();
    const bounds = popup.getElement().getBoundingClientRect();
    const viewport = map.getContainer().getBoundingClientRect();
    const dx = Math.max(viewport.left + 16 - bounds.left, Math.min(0, viewport.right - 16 - bounds.right));
    const dy = Math.max(viewport.top + 16 - bounds.top, Math.min(0, viewport.bottom - 16 - bounds.bottom));
    if (dx || dy) {
      popup.options.offset = baseOffset.add([dx, dy]);
      popup.update();
    }
  });
  function closeLater() {
    clearTimeout(popupTimeout);
    popupTimeout = setTimeout(() => marker.closePopup(), 200);
  }
  preview.addEventListener('mouseenter', () => clearTimeout(popupTimeout));
  preview.addEventListener('mouseleave', closeLater);
  marker.on('mouseover', () => {
    if (dotsOnlyMode || profileUI.isOpen()) return;
    clearTimeout(popupTimeout);
    popupTimeout = setTimeout(() => {
      if (!profileUI.isOpen()) marker.openPopup();
    }, 150);
  });
  marker.on('mouseout', closeLater);
  marker.on('click', event => {
    L.DomEvent.stopPropagation(event);
    clearTimeout(popupTimeout);
    if (dotsOnlyMode) { marker.closePopup(); return; }
    profileUI.open(item.name);
  });
  marker.on('popupclose', () => {
    clearTimeout(popupTimeout);
  });
  marker.on('add', () => {
    if (selectedProfileName === item.name) setSelectedProfileMarker(item.name);
  });
  marker.on('remove', () => clearTimeout(popupTimeout));
}


const FAN_THRESHOLD_VALUES = [0, 50000, 200000, 500000, 1000000, 3000000];
const FAN_THRESHOLD_LABELS = ['0（不限）', '5w', '20w', '50w', '100w', '300w+'];
let fanThresholdIndex = 0;
let profileMarkerRefs = [];
let dotsOnlyMode = false;

function createDotsOnlyMarkerIcon(item = null) {
  return L.divIcon({
    className: item && item.type === 'label' ? 'label-dot-marker' : 'singer-dot-marker',
    html: '',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });
}

function setDotsOnlyMode(enabled) {
  dotsOnlyMode = Boolean(enabled);
  const toggle = document.getElementById('dots-only-toggle');
  if (toggle) toggle.checked = dotsOnlyMode;

  if (dotsOnlyMode) {
    map.closePopup();
    profileMarkerRefs.forEach(({ marker }) => marker.closePopup());
    clearNetworkScene();
    const exitNetworkButton = document.getElementById('exit-network-btn');
    if (exitNetworkButton) exitNetworkButton.style.display = 'none';
    if (typeof currentOpenPopupEl !== 'undefined' && currentOpenPopupEl) {
      currentOpenPopupEl.classList.remove('show');
      currentOpenPopupEl = null;
      currentOpenPinned = false;
    }
  }

  updateProfileMarkerDisplay();
  if (typeof landmarkVisible !== 'undefined' && landmarkVisible) renderLandmarksByZoom();
}

document.getElementById('dots-only-toggle')?.addEventListener('change', event => {
  setDotsOnlyMode(event.currentTarget.checked);
});

// 其他地图操作按钮/可点击列表项开始执行前，自动退出全局红点模式。
document.addEventListener('click', event => {
  if (!dotsOnlyMode || event.target.closest('#dots-only-option')) return;
  const action = event.target.closest(
    'button, [role="button"], .leaflet-control-zoom a, .suggestion-item, .rank-row, .index-row, .rank-tab, .index-tab, .rank-fan-month-tab, .mobile-history-item, .city-nav-btn, .mobile-city-btn'
  );
  if (action) setDotsOnlyMode(false);
}, true);

function getActiveMarkerFilterType() {
  const activeButton = document.querySelector('.filter-btn[data-type].active');
  return activeButton ? activeButton.dataset.type : 'all';
}

function updateFanThresholdControl() {
  const value = document.getElementById('fan-threshold-value');
  const slider = document.getElementById('fan-threshold-slider');
  if (value) value.textContent = FAN_THRESHOLD_LABELS[fanThresholdIndex];
  if (slider) {
    slider.setAttribute('aria-valuenow', String(fanThresholdIndex));
    slider.setAttribute('aria-valuetext', FAN_THRESHOLD_LABELS[fanThresholdIndex]);
  }
}

function parseFanThresholdValue(value) {
  const text = String(value || '').trim();
  const number = parseFloat(text);
  if (!Number.isFinite(number)) return 0;
  return text.includes('万') ? number * 10000 : number;
}

const fanThresholdSlider = document.getElementById('fan-threshold-slider');
const fanThresholdThumb = document.getElementById('fan-threshold-thumb');
const fanThresholdFill = document.getElementById('fan-threshold-fill');
let fanSliderPercent = 0;
let fanSliderDragging = false;

function setFanSliderPercent(percent, animate = false) {
  if (!fanThresholdSlider || !fanThresholdThumb || !fanThresholdFill) return;
  fanSliderPercent = Math.max(0, Math.min(1, percent));
  fanThresholdSlider.classList.toggle('is-snapping', animate);
  const thumbRadius = fanThresholdThumb.offsetWidth / 2;
  const trackWidth = Math.max(0, fanThresholdSlider.clientWidth - thumbRadius * 2);
  fanThresholdThumb.style.left = `${thumbRadius + trackWidth * fanSliderPercent}px`;
  fanThresholdFill.style.width = `${fanSliderPercent * 100}%`;
}

function chooseFanThreshold(index, animate = false) {
  fanThresholdIndex = Math.max(0, Math.min(FAN_THRESHOLD_VALUES.length - 1, index));
  updateFanThresholdControl();
  if (animate) setFanSliderPercent(fanThresholdIndex / (FAN_THRESHOLD_VALUES.length - 1), true);
  const activeFilterType = getActiveMarkerFilterType();
  if (activeFilterType !== 'landmark') renderMarkers(activeFilterType);
}

function fanSliderPercentFromPointer(clientX) {
  const rect = fanThresholdSlider.getBoundingClientRect();
  const thumbRadius = fanThresholdThumb.offsetWidth / 2;
  const trackWidth = Math.max(1, rect.width - thumbRadius * 2);
  return Math.max(0, Math.min(1, (clientX - rect.left - thumbRadius) / trackWidth));
}

function updateFanThresholdFromPointer(clientX) {
  setFanSliderPercent(fanSliderPercentFromPointer(clientX));
  const nearestIndex = Math.round(fanSliderPercent * (FAN_THRESHOLD_VALUES.length - 1));
  if (nearestIndex !== fanThresholdIndex) chooseFanThreshold(nearestIndex);
}

if (fanThresholdSlider && fanThresholdThumb && fanThresholdFill) {
  setFanSliderPercent(0);
  fanThresholdSlider.addEventListener('pointerdown', event => {
    if (event.button !== undefined && event.button !== 0) return;
    fanSliderDragging = true;
    fanThresholdSlider.classList.remove('is-snapping');
    fanThresholdSlider.setPointerCapture(event.pointerId);
    updateFanThresholdFromPointer(event.clientX);
    event.preventDefault();
  });

  fanThresholdSlider.addEventListener('pointermove', event => {
    if (fanSliderDragging) updateFanThresholdFromPointer(event.clientX);
  });

  const finishFanSliderDrag = event => {
    if (!fanSliderDragging) return;
    fanSliderDragging = false;
    const nearestIndex = Math.round(fanSliderPercent * (FAN_THRESHOLD_VALUES.length - 1));
    chooseFanThreshold(nearestIndex, true);
    if (fanThresholdSlider.hasPointerCapture(event.pointerId)) {
      fanThresholdSlider.releasePointerCapture(event.pointerId);
    }
    window.setTimeout(() => fanThresholdSlider.classList.remove('is-snapping'), 220);
  };

  fanThresholdSlider.addEventListener('pointerup', finishFanSliderDrag);
  fanThresholdSlider.addEventListener('pointercancel', finishFanSliderDrag);
  fanThresholdSlider.addEventListener('keydown', event => {
    let nextIndex = fanThresholdIndex;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') nextIndex += 1;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') nextIndex -= 1;
    else if (event.key === 'PageUp') nextIndex += 2;
    else if (event.key === 'PageDown') nextIndex -= 2;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = FAN_THRESHOLD_VALUES.length - 1;
    else return;
    event.preventDefault();
    chooseFanThreshold(nextIndex, true);
    window.setTimeout(() => fanThresholdSlider.classList.remove('is-snapping'), 220);
  });

  window.addEventListener('resize', () => {
    setFanSliderPercent(fanThresholdIndex / (FAN_THRESHOLD_VALUES.length - 1));
  });
}

function createProfileMarkerIcon(item, labelCardWidth, showAvatar = !dotsOnlyMode) {
  if (!showAvatar) {
    return L.divIcon({
      className: item.type === 'label' ? 'label-dot-marker' : 'singer-dot-marker',
      html: '',
      iconSize: [12, 12],
      iconAnchor: [6, 6],
      popupAnchor: getProfilePopupOffset(labelCardWidth)
    });
  }

  return L.divIcon({
    className: 'singer-custom-marker',
    html: `
      <div class="singer-marker-container">
        <div class="singer-avatar-main">
          <img src="${item.avatar}">
        </div>
        <div class="singer-marker-tip"></div>
      </div>
    `,
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: getProfilePopupOffset(labelCardWidth)
  });
}

function updateProfileMarkerDisplay() {
  const showAvatar = !dotsOnlyMode;
  profileMarkerRefs.forEach(({ marker, item, labelCardWidth }) => {
    marker.setIcon(createProfileMarkerIcon(item, labelCardWidth, showAvatar));
  });
  setSelectedProfileMarker(selectedProfileName);
}

// 缩放仅更新共享尺寸变量；仅圆点模式切换时才重建标记。

function renderMarkers(filterType = "all") {
  markerClusterGroup.clearLayers();
  searchMarkerMap.clear();
  profileMarkerRefs = [];
  
  // 1. 重置搜索列表，并立即把城市数据重新加进去
  searchNameList = [];
  profilesWithType.forEach(item => {
    searchNameList.push({ raw: item.name, lower: item.name.toLowerCase(), type: 'singer' });
    (item.aliases || []).forEach(alias => searchNameList.push({ raw: item.name, lower: alias.toLowerCase(), type: 'singer', alias }));
  });
  cities.forEach(city => {
    searchNameList.push({ 
      raw: city.name, 
      lower: city.name.toLowerCase(), 
      type: 'city', 
      lat: city.lat, 
      lng: city.lng 
    });
  });
  getAllLandmarkItems().forEach(item => {
    searchNameList.push({
      raw: item.location + ' - ' + (item.song || item.landmarkCategoryLabel || ''),
      lower: (item.location + (item.city || '') + (item.song || '') + (item.artist || '') + (item.lyric || '') + (item.landmarkCategoryLabel || '')).toLowerCase(),
      type: 'landmark',
      landmarkCategory: item.landmarkCategory,
      lat: item.lat,
      lng: item.lng
    });
  });

  // 2. 剩下的歌手/厂牌筛选逻辑保持不变...
  const fanThreshold = FAN_THRESHOLD_VALUES[fanThresholdIndex];
  const filtered = allData.filter(item => {
    if (!profileUI.hasMapLocation(item)) return false;
    let matchesFilter = false;
    if (filterType === "all") {
      matchesFilter = true;
    } else if (filterType === "singer" || filterType === "label") {
      matchesFilter = item.type === filterType;
    } else if (specialCategories[filterType]) {
      matchesFilter = specialCategories[filterType].includes(item.name);
    }
    if (!matchesFilter) return false;
    if (fanThreshold === 0) return true;
    return item.type !== 'label' && parseFanThresholdValue(item.fans) > fanThreshold;
  });
      
      filtered.forEach(item => {
// 找到 renderMarkers 函数里的这段并替换
const labelCardWidth = item.type === "label"
  ? Math.min(520, Math.max(340, item.name.length * 18 + 150))
  : null;
const icon = createProfileMarkerIcon(item, labelCardWidth);
        
        const marker = L.marker([item.lat, item.lng], { icon, title: item.name, alt: item.name + '的资料' });
        profileMarkerRefs.push({ marker, item, labelCardWidth });
        bindProfilePreview(marker, item);

        markerClusterGroup.addLayer(marker);
        
       const lowerKey = item.name.toLowerCase();
    searchMarkerMap.set(lowerKey, { marker, rawName: item.name, type: item.type, latlng: marker.getLatLng() });
    searchNameList.push({ raw: item.name, lower: lowerKey, type: item.type });
// 约第 3824 行
if (item.aliases && item.aliases.length > 0) {
  item.aliases.forEach(alias => {
    searchNameList.push({
      raw: item.name,       // 点击后定位的仍是真实姓名
      lower: alias.toLowerCase(),
      type: item.type,
      alias: alias          // 保留别名，用于备选项展示
    });
  });
}
  });
}



// ===== 双榜切换排行榜 =====
(function initRankPanel() {

  // Monthly counts are separate from the live follower-count leaderboard.
  const fanClubRankings = window.RapFanClubData;

  // ★ 粉丝数量数据（字符串，按从多到少排列）
  const fansCountData = [
{ name: "法老",  val: "507.3万", avatar: "https://p1.music.126.net/mXAWgUNp5pLAzmphYvBrzQ==/109951170711607308.jpg?param=130y130" },
  { name: "马思唯",  val: "411.5万", avatar: "https://p1.music.126.net/WDPjjeAunxIC8DVGWjG6Lw==/109951170646736523.jpg?param=130y130" },
  { name: "姜云升",  val: "371.9万", avatar: "https://p1.music.126.net/VOXA9iqlExh6hruuPamo0Q==/109951166533103808.jpg?param=130y130" },
  { name: "Jony J",  val: "368.5万", avatar: "https://p1.music.126.net/W1LehYLdq0UjvZ2rl3Wk0Q==/1383185640161008.jpg?param=130y130" },
  { name: "NINEONE#乃万",  val: "247.5万", avatar: "https://p2.music.126.net/IOKcH64pITl0kow2gZ0RSQ==/109951171845583865.jpg?param=130y130" },
  { name: "GAI周延",  val: "238万", avatar: "https://p1.music.126.net/iR9WU0iTKx6BiMycNJjIQg==/109951167592056590.jpg?param=130y130" },
  { name: "沙一汀EL",  val: "221.2万", avatar: "https://p2.music.126.net/uoZCzadyd_0_TACb5gClRQ==/109951169875390584.jpg?param=130y130" },
  { name: "Capper",  val: "194.9万", avatar: "https://p2.music.126.net/jO2Eb9wSdS6hbc2UQK1Y8w==/109951172402665734.jpg?param=130y130" },
  { name: "杨和苏KeyNG",  val: "188.6万", avatar: "https://p2.music.126.net/-Xy6jVswqXtI5h7duPNSHw==/109951171453051553.jpg?param=130y130" },
  { name: "王以太",  val: "179.5万", avatar: "https://p1.music.126.net/pc3F98VkKXATBlFsq6tFJQ==/109951169748487115.jpg?param=130y130" },
  { name: "KEY.L刘聪",  val: "175.7万", avatar: "https://p2.music.126.net/l9wMo8vk2k3gOaN1zA3yLQ==/109951169838626318.jpg?param=130y130" },
  { name: "万妮达Vinida Weng",  val: "146.6万", avatar: "https://p2.music.126.net/J8HQhBU2XAN3xNXuwvGCtQ==/109951170131065765.jpg?param=130y130" },
  { name: "TizzyT",  val: "146.6万", avatar: "https://p1.music.126.net/Vbo8K447I5LLvH9VpdTfww==/109951166527176990.jpg?param=130y130" },
  { name: "Ice Paper",  val: "142.3万", avatar: "https://p1.music.126.net/fzWDTckJqRqApWSYxUzKzA==/109951171972222899.jpg?param=130y130" },
  { name: "满舒克",  val: "141.8万", avatar: "https://p2.music.126.net/ZY6pRcKLqzMNbGTrbWb_6Q==/109951167525919164.jpg?param=130y130" },
  { name: "艾志恒Asen",  val: "135.8万", avatar: "https://p1.music.126.net/alpJxinPEXCuYkeEMnCDWA==/109951172058047957.jpg?param=130y130" },
  { name: "ljz329",  val: "134.6万", avatar: "https://p2.music.126.net/2HWBehaTrcYUZAByJh-mDg==/109951170681263534.jpg?param=130y130" },
  { name: "罗言",  val: "131.5万", avatar: "https://p1.music.126.net/ZrO8gJjxSmlmadJeRiqOPw==/109951172417958240.jpg?param=130y130" },
  { name: "加木",  val: "130.4万", avatar: "https://p2.music.126.net/L0tacglZLODHeLoXFs2TWg==/109951172029543102.jpg?param=130y130" },
  { name: "FOX胡天渝",  val: "129.7万", avatar: "https://p1.music.126.net/u3EX7EVjel9Ec0QC2sIhvg==/109951172561820413.jpg?param=130y130" },
  { name: "艾热AIR",  val: "125.5万", avatar: "https://p2.music.126.net/tvy9BeZWZhqKfYKLHsSf-w==/109951172651091852.jpg?param=130y130" },
  { name: "GALI",  val: "120.8万", avatar: "https://p2.music.126.net/YSda_aNO30ZGCsxoTgch8Q==/109951169463813274.jpg?param=130y130" },
  { name: "Spylent",  val: "115.7万", avatar: "https://p2.music.126.net/JrffoAOTiQqOrOkjKQA-dg==/109951164612126790.jpg?param=130y130" },
  { name: "KnowKnow",  val: "114.9万", avatar: "https://p2.music.126.net/EI-opdeBAR11phjG14fwbg==/109951172883193186.jpg?param=130y130" },
  { name: "卦者灵风",  val: "104.9万", avatar: "https://p1.music.126.net/mBgnEujefu514dNL5HxxQg==/109951171814382535.jpg?param=130y130" },
  { name: "蛋堡",  val: "104.2万", avatar: "https://p1.music.126.net/7hJaoKjkzsPzKz5vK4qW9g==/109951169249111436.jpg?param=130y130" },
  { name: "宝石Gem",  val: "101.8万", avatar: "https://p1.music.126.net/cuxYBa8_n97yinJI22Sd4A==/109951172840033492.jpg?param=130y130" },
  { name: "海洋Bo",  val: "99.7万", avatar: "https://p2.music.126.net/YXC1dKYtoYeNODtOVtI0Vw==/109951169955219117.jpg?param=130y130" },
  { name: "kkluv",  val: "96.5万", avatar: "https://p2.music.126.net/krPkb_D4b63eIP5kbj6lqQ==/109951172293193743.jpg?param=130y130" },
  { name: "那奇沃夫",  val: "95万", avatar: "https://p2.music.126.net/jRRnJKg9cNoavwSZNgZe6w==/109951172840846010.jpg?param=130y130" },
  { name: "Rapeter",  val: "94.3万", avatar: "https://p1.music.126.net/-14yOGYmESuvaPbXGintKg==/109951170489763444.jpg?param=130y130" },
  { name: "谢帝",  val: "91.4万", avatar: "https://p2.music.126.net/ETplhG5gXynEQoLQkRhHXg==/109951171813624638.jpg?param=130y130" },
  { name: "Wiz-H张子豪",  val: "89.7万", avatar: "https://p1.music.126.net/6NW4JkNt9b73P2nZkkg9kA==/109951172528960503.jpg?param=130y130" },
  { name: "连麻Swimming",  val: "86.5万", avatar: "https://p2.music.126.net/wI7g6jyH8959a1Q3WTftkw==/109951169607704628.jpg?param=130y130" },
  { name: "THOME",  val: "82.4万", avatar: "https://p1.music.126.net/rIr78XiLso-Dlz00JjcLxw==/109951170999422334.jpg?param=130y130" },
  { name: "盛宇D-SHINE",  val: "81.5万", avatar: "https://p2.music.126.net/SUz_YVh0pA9wWmM1CXgdqg==/109951170040821218.jpg?param=130y130" },
  { name: "XMASwu(吴骜)",  val: "81.5万", avatar: "https://p1.music.126.net/KwzHH0PS0vsiwkyROP3nNg==/109951171807994362.jpg?param=130y130" },
  { name: "Lambert凌杰",  val: "76.2万", avatar: "https://p1.music.126.net/jKNKPRUkxpWiXmm40wxMTQ==/109951171295629808.jpg?param=130y130" },
  { name: "Ty.",  val: "74.8万", avatar: "https://p2.music.126.net/bQkoAJSN2mkUmDZDejF_Tg==/109951167060520225.jpg?param=130y130" },
  { name: "李佳隆",  val: "74.4万", avatar: "https://p2.music.126.net/5ZNAae-eS01zCR4F1Xr5DA==/109951172561473437.jpg?param=130y130" },
  { name: "艾福杰尼",  val: "73万", avatar: "https://p1.music.126.net/sRT4-AH1RpaeGxBI8G_8_g==/109951169446600145.jpg?param=130y130" },
  { name: "Top Barry",  val: "73万", avatar: "https://p1.music.126.net/fvKBiGSsbxmgCK0GBog0qA==/109951171380523664.jpg?param=130y130" },
  { name: "SASIOVERLXRD",  val: "71.8万", avatar: "https://p1.music.126.net/78xGrcvMMxQkc5tJgouEDQ==/109951172070467513.jpg?param=130y130" },
  { name: "张方钊",  val: "70.4万", avatar: "https://p2.music.126.net/V9c13mCQzxj6eBvzUMHqpQ==/109951169860936662.jpg?param=130y130" },
  { name: "KKECHO",  val: "68.4万", avatar: "https://p2.music.126.net/LaYKY3KFwO0JM6dRjVvjXw==/109951172012057555.jpg?param=130y130" },
  { name: "mac ova seas",  val: "68.4万", avatar: "https://p1.music.126.net/0VgIdaOVWbyPo_-0i-1hpw==/109951168559129539.jpg?param=130y130" },
  { name: "ICE杨长青",  val: "67万", avatar: "https://p2.music.126.net/7V-tVve07mAeHhoN6HGhVw==/109951171484108629.jpg?param=130y130" },
  { name: "MC HotDog热狗",  val: "64.5万", avatar: "https://p2.music.126.net/5ViEXoj1xti2RzahxIMzZQ==/109951169161434274.jpg?param=130y130" },
  { name: "JinJiBeWater-隼",  val: "60.3万", avatar: "https://p1.music.126.net/tcCyYr4RRQ_sCHoWYanBaA==/109951170277055284.jpg?param=180y180" },
    // ... 补充你的真实数据
  ];

  function parseFansValue(value) {
    const text = String(value || '').trim();
    const num = parseFloat(text);
    if (!Number.isFinite(num)) return 0;
    return text.includes('万') ? num * 10000 : num;
  }

  function getFansCountData() {
    return fansCountData
      .map(item => {
        const singerData = allData.find(s => s.name === item.name);
        return {
          ...item,
          val: singerData && singerData.fans ? singerData.fans : item.val
        };
      })
      .sort((a, b) => parseFansValue(b.val) - parseFansValue(a.val));
  }

  const fanClubMonthData = fanClubRankings.months;

  function getCurrentFanClubData() {
    return (fanClubMonthData[currentFanMonth] || fanClubMonthData[fanClubRankings.defaultMonth]).entries;
  }

  // 渲染榜单
  function renderList(data) {
    const body = document.getElementById('rank-panel-body');
    body.innerHTML = '';
    data.forEach((d, i) => {
      const rank = i + 1;
      const noClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
      const row = document.createElement('div');
      row.className = 'rank-row';
      // Display names can change without breaking the profile or network destination.
      const singerData = profileUI.find(d.artistName || d.name);
      const targetName = singerData ? singerData.name : (d.artistName || d.name);
      const avatarUrl = d.avatar || (singerData && singerData.avatar) || '';
      const hasNetwork = singerData && singerData._hasOriginalCollaborators;

row.innerHTML = `
  <span class="rank-no ${noClass}">${rank}</span>
  ${avatarUrl ? `<img class="rank-avatar" src="${avatarUrl}" alt="${d.name}">` : ''}
  <span class="rank-name" style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.name}</span>
  <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
    ${hasNetwork ? `
      <button class="rank-network-btn" data-name="${targetName}" title="查看关系网">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      </button>
    ` : ''}
    <span class="rank-val">${d.displayVal ?? (typeof d.val === 'number' ? d.val.toLocaleString() : d.val)}</span>
  </div>
`;

      // 关系网按钮单独处理，阻止事件冒泡到 row
      if (hasNetwork) {
        const networkBtn = row.querySelector('.rank-network-btn');
        networkBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          // 不收起排行榜面板，直接触发关系网（flyTo 已在 showNetwork 内统一处理）
          window.showNetwork(targetName);
        });
      }

      row.addEventListener('click', () => {
        // 点击排行榜歌手定位前，先重置筛选状态为“全部”
        const currentActive = document.querySelector('.filter-btn[data-type].active');
        const isNonAllFilter = currentActive && currentActive.dataset.type !== 'all';
        if (isNonAllFilter) {
          document.querySelectorAll('.filter-btn[data-type]').forEach(b => b.classList.remove('active'));
          const allBtn = document.querySelector('.filter-btn[data-type="all"]');
          if (allBtn) allBtn.classList.add('active');
          updateModeFilterSlider();
          const moreBtn = document.getElementById('more-options-btn');
          if (moreBtn) moreBtn.classList.remove('active');
          renderMarkers('all');
        }
        locateAndAnimate(targetName);
      });
      body.appendChild(row);
    });
  }

  function updateRankPanelSubtitle() {
    const subtitle = document.getElementById('rank-panel-subtitle');
    if (currentTab === 'fan') {
      subtitle.textContent = `点击歌手名可定位到地图 · 乐迷团月榜（${fanClubMonthData[currentFanMonth].label}）`;
    } else {
      subtitle.textContent = '点击歌手名可定位到地图';
    }
  }

  function updateFanMonthBarVisibility() {
    const monthBar = document.getElementById('rank-fan-month-bar');
    monthBar.classList.toggle('hidden', currentTab !== 'fan');
  }

  // 初始显示乐迷团榜
  let currentTab = 'fan';
  let currentFanMonth = fanClubRankings.defaultMonth;
  renderList(getCurrentFanClubData());
  updateRankPanelSubtitle();
  updateFanMonthBarVisibility();

  // 切换标签逻辑
  const tabs   = document.querySelectorAll('.rank-tab');
  const slider = document.getElementById('rank-tab-slider');
  const monthTabs = document.querySelectorAll('.rank-fan-month-tab');
  const monthSlider = document.getElementById('rank-fan-month-slider');
  monthSlider.style.transform = `translateX(${Array.from(monthTabs).findIndex(tab => tab.dataset.month === currentFanMonth) * 100}%)`;

  monthTabs.forEach((tab, idx) => {
    tab.addEventListener('click', function() {
      if (this.dataset.month === currentFanMonth) return;
      currentFanMonth = this.dataset.month;

      monthTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      monthSlider.style.transform = `translateX(${idx * 100}%)`;

      if (currentTab === 'fan') {
        renderList(getCurrentFanClubData());
        updateRankPanelSubtitle();
      }
    });
  });

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', function() {
      if (this.dataset.tab === currentTab) return;
      currentTab = this.dataset.tab;

      // 更新 active 样式
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // 滑块位移：第 0 个 tab 不偏移，第 1 个偏移 100%
      slider.style.transform = idx === 0 ? 'translateX(0)' : 'translateX(100%)';

      // 渲染对应数据
      updateFanMonthBarVisibility();
      updateRankPanelSubtitle();
      renderList(currentTab === 'fan' ? getCurrentFanClubData() : getFansCountData());
    });
  });

  // 排行榜按钮展开/收起
  const rankBtn   = document.getElementById('rank-btn');
  const rankPanel = document.getElementById('rank-panel');

  function positionRankPanel() {
    if (window.innerWidth <= 480) {
      relocateMobilePanels();
      clearPanelInlinePosition(rankPanel);
    } else {
      positionDesktopPopover(rankPanel, rankBtn, { alignRight: true });
    }
  }

  rankBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (window.innerWidth <= 480) openMobileSheet('rank');
    const isOpen = rankPanel.classList.contains('show');
    if (!isOpen || window.innerWidth <= 480) {
document.getElementById('more-options-dropdown').classList.remove('show');
    closeIndexPanel();
      positionRankPanel();
    }
    if (window.innerWidth <= 480) {
      rankPanel.classList.add('show');
      rankBtn.classList.add('open');
    } else {
      rankPanel.classList.toggle('show', !isOpen);
      rankBtn.classList.toggle('open', !isOpen);
    }
  });

  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 480) return;
    if (!rankBtn.contains(e.target) && !rankPanel.contains(e.target)) {
      rankPanel.classList.remove('show');
      rankBtn.classList.remove('open');
    }
  });
})();


// ===== 说唱地标标注功能 =====
// 数据格式说明：
// type: "lyric" = 歌词地标, "culture" = 说唱文化地标（店铺/场所等）
// lyric: 歌词内容（lyric类型）或 描述（culture类型）
// song: 歌曲名（lyric类型）或 场所类型（culture类型，如"饮品店"）
// artist: 艺术家名
// location: 地标名称
// city: 所属城市（"成都"/"杭州"/"长沙"/"重庆"/"上海"）
const { CHANGSHA_CE_CHANGSHA_COVER, rapLandmarks, psyPFoodSpots, rapRelatedVenues } = window.RapLandmarkData;

// 地标图层（独立于歌手聚合图层）
let landmarkLayerGroup = L.layerGroup();
let landmarkVisible = false;
let activeLandmarkTheme = 'landmark';
let activeLandmarkCategory = 'all';
// 低缩放阈值：低于此zoom只显示城市名按钮
const LANDMARK_CITY_ZOOM = 10;
// 高缩放阈值：高于此zoom显示完整PIN+名称
const LANDMARK_PIN_ZOOM = 10;

// 当前展开的弹出卡片（用于点击关闭）
let currentOpenPopupEl = null;
let currentOpenPinned = false;

// 按城市分组的城市中心坐标
const landmarkCityCenters = {
  "成都": { lat: 30.65, lng: 104.06 },
  "杭州": { lat: 30.27, lng: 120.15 },
  "长沙": { lat: 28.22, lng: 112.93 },
  "重庆": { lat: 29.53, lng: 106.50 },
  "上海": { lat: 31.23, lng: 121.47 }
};

const LANDMARK_CATEGORY_META = {
  all: { label: '全部', badge: '全部点位', shortTag: '地标' },
  lyric: { label: '歌词地标', badge: '歌词地标', shortTag: '地标' },
  shop: { label: '店铺', badge: '店铺', shortTag: '店铺' },
  venue: { label: '演出场所', badge: '演出场所', shortTag: '演出场所' }
};

function getAllLandmarkItems() {
  if (!RAP_LANDMARKS_ENABLED) return [];
  return [
    ...rapLandmarks.map(item => ({
      ...item,
      pointType: 'landmark',
      landmarkCategory: 'lyric',
      landmarkCategoryLabel: LANDMARK_CATEGORY_META.lyric.badge
    })),
    ...psyPFoodSpots.map(item => ({
      ...item,
      pointType: 'landmark',
      landmarkCategory: 'shop',
      landmarkCategoryLabel: LANDMARK_CATEGORY_META.shop.badge
    })),
    ...rapRelatedVenues.map(item => ({
      ...item,
      pointType: 'landmark',
      landmarkCategory: 'venue',
      landmarkCategoryLabel: LANDMARK_CATEGORY_META.venue.badge
    }))
  ];
}

function getActiveLandmarkItems() {
  const items = getAllLandmarkItems();
  if (activeLandmarkCategory === 'all') return items;
  return items.filter(item => item.landmarkCategory === activeLandmarkCategory);
}

function getGroupedRapLandmarks(items = rapLandmarks) {
  const grouped = new Map();

  items.forEach(item => {
    const key = `${(item.city || '').trim()}__${(item.location || '').trim()}`.toLowerCase();
    const existing = grouped.get(key);
    if (existing) {
      existing.entries.push(item);
      return;
    }
    grouped.set(key, {
      ...item,
      entries: [item]
    });
  });

  return Array.from(grouped.values());
}

function getActiveLandmarkCityCenters() {
  const activeItems = getActiveLandmarkItems();
  if (!activeItems.length) return activeLandmarkCategory === 'all' ? landmarkCityCenters : {};
  return activeItems.reduce((centers, item) => {
    if (item.city && !centers[item.city]) centers[item.city] = { lat: item.lat, lng: item.lng };
    return centers;
  }, {});
}

function updateLandmarkPanelMode() {
  const title = document.getElementById('landmark-city-panel-title');
  const count = document.getElementById('landmark-city-panel-count');
  if (!title || !count) return;
  const activeItems = getGroupedVisibleLandmarkItems(getActiveLandmarkItems());
  title.textContent = '说唱地标';
  count.textContent = `${activeItems.length}个点位`;
}

function syncLandmarkCategoryTabs() {
  document.querySelectorAll('.landmark-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.landmarkCategory === activeLandmarkCategory);
  });
}

function setActiveLandmarkCategory(category = 'all', rerender = true) {
  activeLandmarkCategory = LANDMARK_CATEGORY_META[category] ? category : 'all';
  syncLandmarkCategoryTabs();
  updateLandmarkPanelMode();
  if (typeof syncMobileControls === 'function') {
    syncMobileControls();
  }
  if (rerender && landmarkVisible) {
    renderLandmarksByZoom();
  }
}

function getGroupedVisibleLandmarkItems(items = getActiveLandmarkItems()) {
  const lyricItems = items.filter(item => item.landmarkCategory === 'lyric');
  const groupedLyrics = getGroupedRapLandmarks(lyricItems).map(item => ({
    ...item,
    pointType: 'landmark',
    landmarkCategory: 'lyric',
    landmarkCategoryLabel: LANDMARK_CATEGORY_META.lyric.badge
  }));
  const otherItems = items.filter(item => item.landmarkCategory !== 'lyric');
  return [...groupedLyrics, ...otherItems];
}

function getLandmarkTitleWidth(title) {
  const minTextWidth = 193;
  const maxTextWidth = Math.max(170, window.innerWidth - 150);
  let measuredWidth = 0;

  if (!getLandmarkTitleWidth.canvas) {
    getLandmarkTitleWidth.canvas = document.createElement('canvas');
  }

  const ctx = getLandmarkTitleWidth.canvas.getContext('2d');
  if (ctx) {
    ctx.font = "800 18px -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', sans-serif";
    measuredWidth = Math.ceil(ctx.measureText(title || '').width) + 2;
  } else {
    measuredWidth = Array.from(title || '').reduce((sum, ch) => sum + (/[A-Za-z0-9 ]/.test(ch) ? 9 : 18), 0) + 2;
  }

  return Math.min(Math.max(measuredWidth, minTextWidth), maxTextWidth);
}

function updateLandmarkMetaScroll(root) {
  const metas = root.querySelectorAll('.lpc-meta');
  metas.forEach(meta => {
    const text = meta.querySelector('.lpc-meta-text');
    if (!text) return;

    meta.classList.remove('is-scrolling');
    meta.style.removeProperty('--lpc-meta-shift');
    meta.style.removeProperty('--lpc-meta-duration');

    const shift = Math.ceil(text.scrollWidth - meta.clientWidth);
    if (shift > 4) {
      meta.style.setProperty('--lpc-meta-shift', `${shift}px`);
      meta.style.setProperty('--lpc-meta-duration', `${Math.max(6, shift / 22 + 4).toFixed(2)}s`);
      meta.classList.add('is-scrolling');
    }
  });
}

function positionLandmarkCityDropdown() {
  const cityDropdown = document.getElementById('landmark-city-dropdown');
  const landmarkBtn = document.querySelector('.filter-btn[data-type="landmark"]');
  if (!cityDropdown || !landmarkBtn) return;

  const rect = landmarkBtn.getBoundingClientRect();
  const margin = 10;
  if (window.innerWidth <= 480) {
    cityDropdown.style.left = '12px';
    cityDropdown.style.top = '62px';
    cityDropdown.style.width = 'calc(100vw - 24px)';
    return;
  }
  const desiredLeft = rect.left + rect.width / 2 - cityDropdown.offsetWidth / 2;
  const maxLeft = window.innerWidth - cityDropdown.offsetWidth - margin;
  cityDropdown.style.left = `${Math.max(margin, Math.min(desiredLeft, maxLeft))}px`;
  cityDropdown.style.top = `${rect.bottom + 8}px`;
}

function openLandmarkCityDropdown() {
  if (!RAP_LANDMARKS_ENABLED) return;
  const cityDropdown = document.getElementById('landmark-city-dropdown');
  if (!cityDropdown) return;
  if (window.innerWidth <= 480) {
    cityDropdown.classList.remove('open');
    return;
  }
  updateLandmarkPanelMode();
  syncLandmarkCategoryTabs();
  cityDropdown.classList.add('open');
  requestAnimationFrame(positionLandmarkCityDropdown);
}

function closeLandmarkCityDropdown() {
  const cityDropdown = document.getElementById('landmark-city-dropdown');
  if (cityDropdown) cityDropdown.classList.remove('open');
}

function clearActiveLandmarkCitySelection() {
  document.querySelectorAll('.city-nav-btn, .mobile-city-btn').forEach(btn => btn.classList.remove('active'));
}

// 创建PIN图标标记（带悬浮/点击展开卡片）
function createLandmarkPin(item) {
  if (dotsOnlyMode) return L.marker([item.lat, item.lng], { icon: createDotsOnlyMarkerIcon() });
  const isLyric = item.landmarkCategory === 'lyric' || !item.landmarkCategory;
  const isShop = item.landmarkCategory === 'shop';
  const isVenue = item.landmarkCategory === 'venue';
  const categoryClass = isLyric ? 'lyric' : (isShop ? 'shop' : 'venue');
  const categoryBadge = item.landmarkCategoryLabel || LANDMARK_CATEGORY_META[item.landmarkCategory || 'all']?.badge || '地标';
  const lyricEntries = isLyric ? (item.entries && item.entries.length ? item.entries : [item]) : [item];
  const titleWidth = isLyric
    ? Math.max(...lyricEntries.map(entry => getLandmarkTitleWidth(entry.lyric || item.location)))
    : getLandmarkTitleWidth(item.location);
  
  // 构建弹出卡片内容
  let popupContent = '';
  if (isLyric) {
    const entriesHtml = lyricEntries.map(entry => {
      const coverHtml = entry.cover
        ? `<img class="lpc-cover-img" src="${entry.cover}" onerror="this.style.display='none';this.parentElement.querySelector('.lpc-cover-default').style.display='flex';" /><div class="lpc-cover-default" style="display:none;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>`
        : `<div class="lpc-cover-default"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>`;
      return `
        <div class="lpc-entry">
          <div class="lpc-player-row">
            <div class="lpc-cover">${coverHtml}</div>
            <div class="lpc-info">
              <div class="lpc-song-title">${entry.lyric}</div>
              <div class="lpc-meta"><span class="lpc-meta-text">${entry.artist}<span style="margin:0 3px;color:#ccc;">·</span>${entry.song}<span class="lpc-explicit-tag">E</span></span></div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    popupContent = `
      <div class="lpc-group-head">
        <div style="display:flex;align-items:center;gap:6px;">
          <div class="lpc-kind-badge ${categoryClass}">${categoryBadge}</div>
          ${lyricEntries.length > 1 ? `<div class="lpc-group-count">${lyricEntries.length}条歌词</div>` : ''}
        </div>
      </div>
      <div class="lpc-entry-list">
        ${entriesHtml}
      </div>
    `;
  } else if (isVenue) {
    const venueCoverHtml = item.cover
      ? `<img class="lpc-cover-img" src="${item.cover}" onerror="this.style.display='none';" />`
      : `<div class="lpc-cover-default"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1"/><path d="M9 13h1"/><path d="M9 17h1"/></svg></div>`;
    popupContent = `
      <div class="lpc-venue-card">
        <div class="lpc-kind-badge venue">${categoryBadge}</div>
        <div class="lpc-venue-photo">${venueCoverHtml}</div>
        <div class="lpc-venue-body">
          <div class="lpc-song-title">${item.location}</div>
          <div class="lpc-venue-address">${item.address || ''}</div>
        </div>
      </div>
    `;
  } else {
    // 文化地标（店铺等）
    const cultureCoverHtml = item.cover
      ? `<img class="lpc-cover-img" src="${item.cover}" onerror="this.style.display='none';" />`
      : `<div class="lpc-cover-default"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>`;
    popupContent = `
      <div class="lpc-group-head">
        <div class="lpc-group-location">${item.location}</div>
        <div class="lpc-kind-badge ${categoryClass}">${categoryBadge}</div>
      </div>
      <div class="lpc-player-row">
        <div class="lpc-cover" style="background:linear-gradient(135deg,#ff8c00 0%,#ffaa44 100%);">${cultureCoverHtml}</div>
        <div class="lpc-info">
          <div class="lpc-song-title">${item.song || item.location}</div>
          <div class="lpc-meta"><span class="lpc-meta-text">${item.artist || item.city || categoryBadge}</span></div>
        </div>
      </div>
      <div class="lpc-shop-block">
        <div class="lpc-shop-tag">${item.city || ''}</div>
        <div class="lpc-shop-desc">${item.lyric || item.address || ''}</div>
      </div>
    `;
  }

  const pinColor = isLyric ? '#e60012' : (isShop ? '#d97904' : '#1766d1');
  
  const icon = L.divIcon({
    className: 'landmark-pin-marker',
    html: `
      <div class="landmark-pin-wrapper" data-id="${item.location}">
        <div class="landmark-pin-icon" style="background:${pinColor};"></div>
        <div class="landmark-pin-label">${item.location}</div>
        <div class="landmark-popup-card" id="lpc-${item.location.replace(/[^a-zA-Z0-9一-龥]/g,'_')}" style="--lpc-title-width:${titleWidth}px;">
          ${popupContent}
        </div>
      </div>
    `,
    iconSize: [120, 28],
    iconAnchor: [10, 28],
    popupAnchor: [50, -32]
  });
  
  const marker = L.marker([item.lat, item.lng], { icon: icon });
  
  // 绑定悬浮和点击事件
  marker.on('add', function() {
    const el = this.getElement();
    if (!el) return;
    const wrapper = el.querySelector('.landmark-pin-wrapper');
    const popup = el.querySelector('.landmark-popup-card');
    if (!wrapper || !popup) return;
    updateLandmarkMetaScroll(popup);
    
    let hoverTimeout;
    let pinned = false;
    
    wrapper.addEventListener('mouseenter', function() {
      clearTimeout(hoverTimeout);
      // 关闭其他非pinned的弹窗
      if (currentOpenPopupEl && currentOpenPopupEl !== popup && !currentOpenPinned) {
        currentOpenPopupEl.classList.remove('show');
        currentOpenPopupEl = null;
      }
      // hover时显示（不设为pinned）
      if (!currentOpenPinned || currentOpenPopupEl === popup) {
        popup.classList.add('show');
        if (!currentOpenPinned) currentOpenPopupEl = popup;
      }
    });
    
    wrapper.addEventListener('mouseleave', function() {
      // 修复：如果不是pinned状态，鼠标离开后自动收起
      if (pinned) return;
      hoverTimeout = setTimeout(() => {
        popup.classList.remove('show');
        if (currentOpenPopupEl === popup) currentOpenPopupEl = null;
      }, 300);
    });
    
    // 鼠标进入弹出卡片时，阻止收起
    popup.addEventListener('mouseenter', function() {
      if (!pinned) clearTimeout(hoverTimeout);
    });
    popup.addEventListener('mouseleave', function() {
      if (!pinned) {
        hoverTimeout = setTimeout(() => {
          popup.classList.remove('show');
          if (currentOpenPopupEl === popup) currentOpenPopupEl = null;
        }, 300);
      }
    });
    
    wrapper.addEventListener('click', function(e) {
      L.DomEvent.stopPropagation(e);
      clearTimeout(hoverTimeout);
      if (!pinned) {
        // 关闭其他pinned弹窗
        if (currentOpenPopupEl && currentOpenPopupEl !== popup) {
          currentOpenPopupEl.classList.remove('show');
          currentOpenPinned = false;
        }
        pinned = true;
        currentOpenPinned = true;
        currentOpenPopupEl = popup;
        popup.classList.add('show');
      } else {
        // 再次点击取消常住
        pinned = false;
        currentOpenPinned = false;
        popup.classList.remove('show');
        currentOpenPopupEl = null;
      }
    });
  });
  
  return marker;
}

// 创建低缩放级别的城市名按钮标记
function createCityNameMarker(cityName, center) {
  if (dotsOnlyMode) {
    return L.marker([center.lat, center.lng], { icon: createDotsOnlyMarkerIcon() });
  }
  const icon = L.divIcon({
    className: 'landmark-pin-marker',
    html: `
      <div class="landmark-pin-wrapper">
        <div class="landmark-pin-label city-only" data-city-name="${cityName}">${cityName}</div>
      </div>
    `,
    iconSize: [60, 24],
    iconAnchor: [30, 12]
  });
  const marker = L.marker([center.lat, center.lng], { icon: icon });
  
  marker.on('add', function() {
    const el = this.getElement();
    if (!el) return;
    const btn = el.querySelector('.city-only');
    if (!btn) return;
    btn.addEventListener('click', function(e) {
      L.DomEvent.stopPropagation(e);
      map.flyTo([center.lat, center.lng], 13, { duration: 1.0, easeLinearity: 0.3 });
    });
  });
  
  return marker;
}

// 根据缩放级别渲染地标
function renderLandmarksByZoom() {
  if (!RAP_LANDMARKS_ENABLED) return;
  if (!landmarkVisible) return;
  const zoom = map.getZoom();
  const activeItems = getGroupedVisibleLandmarkItems(getActiveLandmarkItems());
  landmarkLayerGroup.clearLayers();
  currentOpenPopupEl = null;
  currentOpenPinned = false;
  
  if (zoom < LANDMARK_CITY_ZOOM) {
    Object.entries(getActiveLandmarkCityCenters()).forEach(([cityName, center]) => {
      const marker = createCityNameMarker(cityName, center);
      landmarkLayerGroup.addLayer(marker);
    });
  } else {
    activeItems.forEach(item => {
      const marker = createLandmarkPin(item);
      landmarkLayerGroup.addLayer(marker);
    });
  }
}

function showLandmarks() {
  if (!RAP_LANDMARKS_ENABLED) return;
  activeLandmarkTheme = 'landmark';
  landmarkLayerGroup.clearLayers();
  landmarkVisible = true;
  // 修改7：地标模式解除最大缩放限制
  map.setMaxZoom(20);
  renderLandmarksByZoom();
  map.addLayer(landmarkLayerGroup);
  // 监听缩放事件，动态切换显示模式
  map.on('zoomend', renderLandmarksByZoom);
  // 展开城市快捷列表
  openLandmarkCityDropdown();
}

function hideLandmarks() {
  map.removeLayer(landmarkLayerGroup);
  map.off('zoomend', renderLandmarksByZoom);
  landmarkVisible = false;
  clearActiveLandmarkCitySelection();
  // 恢复普通模式最大缩放限制
  map.setMaxZoom(12);
  // 收起城市快捷列表
  closeLandmarkCityDropdown();
}

function ensureLandmarkMode() {
  if (!RAP_LANDMARKS_ENABLED) return;
  const landmarkBtn = document.querySelector('.filter-btn[data-type="landmark"]');
  document.querySelectorAll(".filter-btn[data-type]").forEach(btn => btn.classList.remove("active"));
  if (landmarkBtn) landmarkBtn.classList.add('active');
  if (typeof updateModeFilterSlider === 'function') {
    updateModeFilterSlider();
  }
  markerClusterGroup.clearLayers();
  if (!landmarkVisible) {
    showLandmarks();
  } else {
    renderLandmarksByZoom();
  }
}

function launchLandmarkExplorer() {
  if (!RAP_LANDMARKS_ENABLED) return;
  if (typeof networkLayer !== 'undefined') {
    clearNetworkScene();
  }
  const exitBtn = document.getElementById('exit-network-btn');
  if (exitBtn) exitBtn.style.display = 'none';

  document.querySelectorAll(".filter-btn[data-type]").forEach(btn => btn.classList.remove("active"));
  activeLandmarkTheme = 'landmark';
  setActiveLandmarkCategory('all', false);
  const landmarkBtn = document.querySelector('.filter-btn[data-type="landmark"]');
  if (landmarkBtn) landmarkBtn.classList.add('active');

  const moreBtn = document.getElementById('more-options-btn');
  const morePanel = document.getElementById('more-options-dropdown');
  if (moreBtn) moreBtn.classList.remove('active');
  if (morePanel) morePanel.classList.remove('show');

  const rankPanel = document.getElementById('rank-panel');
  const rankBtn = document.getElementById('rank-btn');
  const indexPanel = document.getElementById('index-panel');
  const indexBtn = document.getElementById('index-btn');
  if (rankPanel) rankPanel.classList.remove('show');
  if (rankBtn) rankBtn.classList.remove('open');
  if (indexPanel) indexPanel.classList.remove('show');
  if (indexBtn) indexBtn.classList.remove('active');

  markerClusterGroup.clearLayers();
  if (!landmarkVisible) {
    showLandmarks();
  } else {
    renderLandmarksByZoom();
    openLandmarkCityDropdown();
  }

  if (typeof updateModeFilterSlider === 'function') {
    updateModeFilterSlider();
  }
}

function launchFoodExplorer() {
  if (!RAP_LANDMARKS_ENABLED) return;
  launchLandmarkExplorer();
  setActiveLandmarkCategory('shop');
  markerClusterGroup.clearLayers();
  showLandmarks();
  if (typeof updateModeFilterSlider === 'function') {
    updateModeFilterSlider();
  }
}

// 快捷城市按钮逻辑（列表不收起，点击后定位城市）
document.querySelectorAll('.city-nav-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    ensureLandmarkMode();

    if (this.dataset.action === 'free') {
      openLandmarkCityDropdown();
      document.querySelectorAll('.city-nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.mobile-city-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      map.flyTo([35, 105], isMobile ? 4 : 5, { duration: 0.9, easeLinearity: 0.35 });
      return;
    }

    const lat = parseFloat(this.dataset.lat);
    const lng = parseFloat(this.dataset.lng);
    const zoom = parseInt(this.dataset.zoom) || 13;
    map.flyTo([lat, lng], zoom, { duration: 1.0, easeLinearity: 0.3 });
    // 高亮选中城市，列表保持展开
    document.querySelectorAll('.city-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.mobile-city-btn').forEach(b => b.classList.toggle('active', b.dataset.city === this.textContent.trim()));
    this.classList.add('active');
    openLandmarkCityDropdown();
  });
});

document.querySelectorAll('.landmark-category-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    setActiveLandmarkCategory(this.dataset.landmarkCategory || 'all');
    if (!landmarkVisible) {
      const landmarkBtn = document.querySelector('.filter-btn[data-type="landmark"]');
      document.querySelectorAll(".filter-btn[data-type]").forEach(item => item.classList.remove('active'));
      if (landmarkBtn) landmarkBtn.classList.add('active');
      markerClusterGroup.clearLayers();
      showLandmarks();
    }
  });
});

window.addEventListener('resize', positionLandmarkCityDropdown);

// 点击地图空白处关闭所有弹窗
map.on('click', function() {
  closeLandmarkCityDropdown();
  if (currentOpenPopupEl) {
    currentOpenPopupEl.classList.remove('show');
    currentOpenPopupEl = null;
    currentOpenPinned = false;
  }
});


renderMarkers("all");
setActiveLandmarkCategory('all', false);





// ===== 筛选按钮 + 下方展开列表交互 =====
    const moreOptionsBtn      = document.getElementById('more-options-btn');
    const moreOptionsDropdown = document.getElementById('more-options-dropdown');
    const modeFilterTabs      = document.getElementById('mode-filter-tabs');
    const mobileSheetHandle   = document.getElementById('mobile-sheet-handle');
    const mobileSearchCancel  = document.getElementById('mobile-search-cancel');
    const mobileIndexRow      = document.getElementById('mobile-index-row');
    const mobileHistorySection = document.getElementById('mobile-history-section');
    const mobileHistoryList   = document.getElementById('mobile-history-list');
    const mobileHistoryClear  = document.getElementById('mobile-history-clear');
    const searchContainer     = document.getElementById('search-container');
    const actionGroup         = document.getElementById('action-group');

    function updateModeFilterSlider() {
      if (!modeFilterTabs) return;
      const activeBtn = modeFilterTabs.querySelector('.filter-btn.active');
      if (!activeBtn) {
        modeFilterTabs.classList.add('no-active');
        return;
      }
      modeFilterTabs.classList.remove('no-active');
      const tabsRect = modeFilterTabs.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      modeFilterTabs.style.setProperty('--mode-slider-left', `${btnRect.left - tabsRect.left}px`);
      modeFilterTabs.style.setProperty('--mode-slider-width', `${btnRect.width}px`);
    }

    requestAnimationFrame(updateModeFilterSlider);
    window.addEventListener('resize', () => requestAnimationFrame(updateModeFilterSlider));

    const mobileLayerSwitch = document.getElementById('mobile-layer-switch');
    const mobileLayerBtn = document.getElementById('mobile-layer-btn');
    const mobileLayerLabel = document.getElementById('mobile-layer-label');
    const mobileLayerOptions = document.querySelectorAll('.mobile-layer-option');
    const mobileLandmarkCities = document.getElementById('mobile-landmark-cities');
    const mobileCityCollapse = document.getElementById('mobile-city-collapse');
    const mobileCityButtons = document.querySelectorAll('.mobile-city-btn');
    const mobileLandmarkCategoryButtons = document.querySelectorAll('.mobile-landmark-category-btn');

    function isMobileLayout() {
      return window.innerWidth <= 480;
    }

    function clearPanelInlinePosition(panel) {
      if (!panel) return;
      panel.style.top = '';
      panel.style.left = '';
      panel.style.right = '';
      panel.style.width = '';
      panel.style.maxHeight = '';
    }

    function relocateMobilePanels() {
      if (mobileNavigation && mobileNavigation.isEnabled()) return;
      if (!isMobileLayout() || !searchContainer || !actionGroup) return;
      const rankPanel = document.getElementById('rank-panel');
      const indexPanel = document.getElementById('index-panel');
      [moreOptionsDropdown, rankPanel, indexPanel].forEach(clearPanelInlinePosition);
      if (moreOptionsDropdown.parentElement !== searchContainer) actionGroup.after(moreOptionsDropdown);
      if (rankPanel && rankPanel.parentElement !== searchContainer) actionGroup.after(rankPanel);
      if (indexPanel && indexPanel.parentElement !== searchContainer) {
        (mobileHistorySection || actionGroup).after(indexPanel);
      }
    }

    window.addEventListener('resize', relocateMobilePanels);
    relocateMobilePanels();

    const MOBILE_HISTORY_KEY = 'rapMapMobileSearchHistory';

    function getMobileHistory() {
      try {
        return JSON.parse(localStorage.getItem(MOBILE_HISTORY_KEY) || '[]');
      } catch (e) {
        return [];
      }
    }

    function saveMobileHistory(keyword) {
      if (!keyword || !isMobileLayout()) return;
      const next = [keyword, ...getMobileHistory().filter(item => item !== keyword)].slice(0, 6);
      localStorage.setItem(MOBILE_HISTORY_KEY, JSON.stringify(next));
      renderMobileHistory();
    }

    function renderMobileHistory() {
      if (!mobileHistoryList) return;
      const history = getMobileHistory();
      if (!history.length) {
        mobileHistoryList.innerHTML = '<div class="mobile-history-empty">还没有历史搜索</div>';
        return;
      }
      mobileHistoryList.innerHTML = history.map(item => (
        `<button class="mobile-history-item" type="button" data-keyword="${escapeHtml(item)}">${escapeHtml(item)}</button>`
      )).join('');
    }

    function openMobileSheet(panel = 'filter') {
      if (mobileNavigation && mobileNavigation.isEnabled()) { mobileNavigation.open(panel); return; }
      if (!isMobileLayout() || !searchContainer) return;
      relocateMobilePanels();
      searchContainer.classList.remove('mobile-searching');
      searchContainer.classList.add('mobile-expanded');
      closeMobileLayerMenu();
      if (panel === 'filter') {
        document.getElementById('rank-panel').classList.remove('show');
        document.getElementById('rank-btn').classList.remove('open');
        document.getElementById('index-panel').classList.remove('show');
        document.getElementById('index-btn').classList.remove('active');
        if (!moreOptionsDropdown.classList.contains('show')) openDropdown();
      }
    }

    function closeMobileSheet() {
      if (mobileNavigation && mobileNavigation.isEnabled()) { mobileNavigation.close(); return; }
      if (!searchContainer) return;
      searchContainer.classList.remove('mobile-expanded', 'mobile-searching');
      searchContainer.classList.remove('mobile-mode-open');
      moreOptionsDropdown.classList.remove('show');
      document.getElementById('rank-panel').classList.remove('show');
      document.getElementById('rank-btn').classList.remove('open');
      closeIndexPanel();
    }

    function openMobileSearch() {
      if (mobileNavigation && mobileNavigation.isEnabled()) { mobileNavigation.open('search'); return; }
      if (!isMobileLayout() || !searchContainer) return;
      relocateMobilePanels();
      searchContainer.classList.remove('mobile-expanded');
      searchContainer.classList.add('mobile-searching');
      searchContainer.classList.remove('mobile-mode-open');
      moreOptionsDropdown.classList.remove('show');
      renderMobileHistory();
      openIndexPanel();
    }

    function syncMobileControls() {
      const currentMobileLayerLabel = document.getElementById('mobile-layer-label');
      const currentMobileLayerOptions = document.querySelectorAll('.mobile-layer-option');
      const currentMobileLandmarkCategoryButtons = document.querySelectorAll('.mobile-landmark-category-btn');
      const currentMobileLayerSwitch = document.getElementById('mobile-layer-switch');
      const currentMobileCityCollapse = document.getElementById('mobile-city-collapse');
      if (!currentMobileLayerLabel) return;
      const activeTypeBtn = document.querySelector('.filter-btn[data-type].active');
      const activeType = activeTypeBtn ? activeTypeBtn.dataset.type : 'all';
      const activeLayer = activeType === 'landmark' ? 'landmark' : 'info';
      const labelMap = {
        info: '信息资料',
        landmark: '说唱地标'
      };
      currentMobileLayerLabel.textContent = labelMap[activeLayer];
      currentMobileLayerOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.layer === activeLayer);
      });
      currentMobileLandmarkCategoryButtons.forEach(option => {
        option.classList.toggle('active', option.dataset.landmarkCategory === activeLandmarkCategory);
      });
      if (currentMobileLayerSwitch) {
        const isRapLandmark = activeLayer === 'landmark';
        currentMobileLayerSwitch.classList.toggle('landmark-mode', isRapLandmark);
        if (!isRapLandmark) {
          currentMobileLayerSwitch.classList.remove('landmark-cities-collapsed');
        }
      }
      if (currentMobileCityCollapse) {
        const collapsed = currentMobileLayerSwitch && currentMobileLayerSwitch.classList.contains('landmark-cities-collapsed');
        currentMobileCityCollapse.textContent = collapsed ? '<<' : '>>';
      }
    }

    function closeMobileLayerMenu() {
      const currentMobileLayerSwitch = document.getElementById('mobile-layer-switch');
      const currentMobileLayerBtn = document.getElementById('mobile-layer-btn');
      if (!currentMobileLayerSwitch) return;
      currentMobileLayerSwitch.classList.remove('open');
      if (currentMobileLayerBtn) currentMobileLayerBtn.setAttribute('aria-expanded', 'false');
    }

    if (mobileLayerBtn) {
      mobileLayerBtn.addEventListener('click', function(e) {
        if (!isMobileLayout()) return;
        e.stopPropagation();
        const willOpen = !mobileLayerSwitch.classList.contains('open');
        modeFilterTabs.classList.remove('mobile-open');
        mobileLayerSwitch.classList.toggle('open', willOpen);
        mobileLayerBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    }

    mobileLayerOptions.forEach(option => {
      option.addEventListener('click', function(e) {
        e.stopPropagation();
        const layer = this.dataset.layer;
        closeMobileLayerMenu();
        if (layer === 'info') {
          const allBtn = modeFilterTabs.querySelector('.filter-btn[data-type="all"]');
          if (allBtn && !allBtn.classList.contains('active')) {
            modeFilterTabs.classList.add('mobile-open');
            allBtn.click();
            modeFilterTabs.classList.remove('mobile-open');
          } else {
            hideLandmarks();
            closeLandmarkCityDropdown();
            renderMarkers('all');
          }
          syncMobileControls();
          return;
        }
        const targetBtn = document.querySelector(`.filter-btn[data-type="${layer}"]`);
        if (targetBtn && !targetBtn.classList.contains('active')) {
          targetBtn.click();
        }
        syncMobileControls();
      });
    });

    if (mobileCityCollapse && mobileLayerSwitch) {
      mobileCityCollapse.addEventListener('click', function(e) {
        e.stopPropagation();
        const nextCollapsed = !mobileLayerSwitch.classList.contains('landmark-cities-collapsed');
        mobileLayerSwitch.classList.toggle('landmark-cities-collapsed', nextCollapsed);
        mobileCityCollapse.textContent = nextCollapsed ? '<<' : '>>';
      });
    }

    mobileCityButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const cityName = this.dataset.city;
        if (!cityName) return;
        const sourceBtn = Array.from(document.querySelectorAll('.city-nav-btn')).find(item => item.textContent.trim() === cityName);
        if (sourceBtn) sourceBtn.click();
        mobileCityButtons.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });

    mobileLandmarkCategoryButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        setActiveLandmarkCategory(this.dataset.landmarkCategory || 'all');
        syncMobileControls();
        if (!landmarkVisible) {
          const landmarkBtn = document.querySelector('.filter-btn[data-type="landmark"]');
          if (landmarkBtn && !landmarkBtn.classList.contains('active')) landmarkBtn.click();
        }
      });
    });

    modeFilterTabs.addEventListener('click', function(e) {
      if (mobileNavigation && mobileNavigation.isEnabled()) return;
      if (!isMobileLayout()) return;
      const targetBtn = e.target.closest('.filter-btn[data-type]');
      if (!targetBtn || !modeFilterTabs.contains(targetBtn)) return;

      if (!modeFilterTabs.classList.contains('mobile-open')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        closeMobileLayerMenu();
        modeFilterTabs.classList.add('mobile-open');
        if (searchContainer) searchContainer.classList.add('mobile-mode-open');
        return;
      }

      if (targetBtn.classList.contains('active')) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
      modeFilterTabs.classList.remove('mobile-open');
      if (searchContainer) searchContainer.classList.remove('mobile-mode-open');
    }, true);

    function openDropdown() {
      if (window.innerWidth <= 480) {
        relocateMobilePanels();
        clearPanelInlinePosition(moreOptionsDropdown);
      } else {
        positionDesktopPopover(moreOptionsDropdown, moreOptionsBtn, { alignRight: true });
      }
      moreOptionsDropdown.classList.add('show');
    }
    function closeDropdown() {
      moreOptionsDropdown.classList.remove('show');
    }

moreOptionsBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  if (window.innerWidth <= 480 && !searchContainer.classList.contains('mobile-expanded')) {
    openMobileSheet('filter');
    return;
  }
  if (window.innerWidth <= 480) {
    document.getElementById('rank-panel').classList.remove('show');
    document.getElementById('rank-btn').classList.remove('open');
    closeIndexPanel();
    openDropdown();
    return;
  }
  if (moreOptionsDropdown.classList.contains('show')) {
    closeDropdown();
  } else {
    // 打开筛选前先关闭其他所有面板
    document.getElementById('rank-panel').classList.remove('show');
    document.getElementById('rank-btn').classList.remove('open');
    closeIndexPanel();
    openDropdown();
  }
});


    // 点击搜索框时自动收起列表
    document.getElementById('singer-search').addEventListener('focus', function() {
      closeDropdown();
    });

    // 点击页面其他地方收起列表
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 480) return;
      if (!moreOptionsBtn.contains(e.target) && !moreOptionsDropdown.contains(e.target)) {
        closeDropdown();
      }
    });

    // 所有带 data-type 的筛选按钮（含展开列表内的）
    document.querySelectorAll(".filter-btn[data-type]").forEach(btn => {
      btn.addEventListener("click", function() {
        if (typeof networkLayer !== 'undefined') {
          clearNetworkScene();
        }
        const exitBtn = document.getElementById('exit-network-btn');
        if (exitBtn) exitBtn.style.display = 'none';

       // 判断当前按钮是否已经是激活状态
const isAlreadyActive = this.classList.contains('active');

// 先清除所有按钮的激活状态
document.querySelectorAll(".filter-btn[data-type]").forEach(b => b.classList.remove("active"));

if (isAlreadyActive) {
  // 再次点击已激活项 → 取消筛选，回退到"全部"
  if (this.dataset.type === 'landmark') {
    const cityDropdown = document.getElementById('landmark-city-dropdown');
    const wasOpen = cityDropdown && cityDropdown.classList.contains('open');
    ensureLandmarkMode();
    if (wasOpen) {
      closeLandmarkCityDropdown();
    } else {
      openLandmarkCityDropdown();
    }
    return;
  }
  const allBtn = document.querySelector('.filter-btn[data-type="all"]');
  if (allBtn) allBtn.classList.add('active');
  updateModeFilterSlider();
  moreOptionsBtn.classList.remove('active');
  renderMarkers('all');
  return; // 直接结束，不执行后面的逻辑
}

// 正常激活点击的按钮
this.classList.add("active");
updateModeFilterSlider();


        // 如果点击的是展开列表里的选项，筛选按钮也亮红
        if (this.classList.contains('dropdown-item')) {
          moreOptionsBtn.classList.add('active');
          // 不自动收起，保持展开状态
        } else {
          moreOptionsBtn.classList.remove('active');
        }

        // 处理说唱地标模式
        if (this.dataset.type === 'landmark') {
          const cityDropdown = document.getElementById('landmark-city-dropdown');
          const isOpen = cityDropdown && cityDropdown.classList.contains('open');
          ensureLandmarkMode();
          if (isOpen) {
            closeLandmarkCityDropdown();
          } else {
            openLandmarkCityDropdown();
          }
          return;
        } else {
          hideLandmarks();
        }
        renderMarkers(this.dataset.type);
      });
    });

    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 480) {
        if (mobileLayerSwitch && !mobileLayerSwitch.contains(e.target)) {
          closeMobileLayerMenu();
        }
        if (!modeFilterTabs.contains(e.target)) {
          modeFilterTabs.classList.remove('mobile-open');
          if (searchContainer) searchContainer.classList.remove('mobile-mode-open');
        }
        if (e.target.closest('.filter-btn[data-type]')) {
          requestAnimationFrame(syncMobileControls);
        }
        return;
      }
      if (isMobileLayout() && !modeFilterTabs.contains(e.target)) {
        modeFilterTabs.classList.remove('mobile-open');
      }
      if (mobileLayerSwitch && !mobileLayerSwitch.contains(e.target)) {
        closeMobileLayerMenu();
      }
      if (e.target.closest('.filter-btn[data-type]')) {
        requestAnimationFrame(syncMobileControls);
      }
      const cityDropdown = document.getElementById('landmark-city-dropdown');
      const landmarkBtn = document.querySelector('.filter-btn[data-type="landmark"]');
      const clickedLandmarkPanel = cityDropdown && cityDropdown.contains(e.target);
      const clickedLandmarkButton = landmarkBtn && landmarkBtn.contains(e.target);
      if (cityDropdown && cityDropdown.classList.contains('open') && !clickedLandmarkPanel && !clickedLandmarkButton) {
        closeLandmarkCityDropdown();
      }
    });

    syncMobileControls();

    
    // ----- 搜索 UI 交互 -----
    const searchInput = document.getElementById('singer-search');
    const suggestionsDiv = document.getElementById('search-suggestions');
    const searchTipDiv = document.getElementById('search-tip') || document.createElement('div');
    if (!searchTipDiv.id) {
      searchTipDiv.id = 'search-tip';
      searchTipDiv.setAttribute('role', 'status');
      searchTipDiv.setAttribute('aria-live', 'polite');
      document.body.appendChild(searchTipDiv);
    }
    const searchBtn = document.getElementById('search-btn');

    if (mobileSheetHandle) {
      mobileSheetHandle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!isMobileLayout()) return;
        searchContainer.classList.contains('mobile-expanded') ? closeMobileSheet() : openMobileSheet('filter');
      });
    }

    if (mobileSearchCancel) {
      mobileSearchCancel.addEventListener('click', function(e) {
        e.stopPropagation();
        suggestionsDiv.style.display = 'none';
        searchInput.blur();
        closeMobileSheet();
      });
    }

    if (mobileIndexRow) {
      mobileIndexRow.addEventListener('click', function(e) {
        e.stopPropagation();
        openIndexPanel();
      });
    }

    if (mobileHistoryClear) {
      mobileHistoryClear.addEventListener('click', function(e) {
        e.stopPropagation();
        localStorage.removeItem(MOBILE_HISTORY_KEY);
        renderMobileHistory();
      });
    }

    if (mobileHistoryList) {
      mobileHistoryList.addEventListener('click', function(e) {
        const item = e.target.closest('.mobile-history-item');
        if (!item) return;
        searchInput.value = item.dataset.keyword || '';
        updateClearBtn();
        executeSearch();
      });
    }

    if (searchContainer) {
      let mobileSheetTouchY = null;
      let mobileSheetGestureEnabled = false;
      function shouldHandleMobileSheetSwipe(target) {
        if (!target) return false;
        return !!target.closest(
          '#mobile-sheet-handle, #search-container:not(.mobile-searching)'
        ) && !target.closest(
          '#more-options-dropdown, #rank-panel, #index-panel, #search-suggestions, #mobile-history-section, #search-input-wrap, button, input, textarea, .dropdown-item, .rank-row, .index-row'
        );
      }
      searchContainer.addEventListener('touchstart', function(e) {
        if (!isMobileLayout()) return;
        mobileSheetTouchY = e.touches[0].clientY;
        mobileSheetGestureEnabled = shouldHandleMobileSheetSwipe(e.target);
      }, { passive: true });
      searchContainer.addEventListener('touchend', function(e) {
        if (!isMobileLayout() || mobileSheetTouchY === null) return;
        const deltaY = e.changedTouches[0].clientY - mobileSheetTouchY;
        mobileSheetTouchY = null;
        if (!mobileSheetGestureEnabled) {
          mobileSheetGestureEnabled = false;
          return;
        }
        mobileSheetGestureEnabled = false;
        if (deltaY > 70) {
          searchInput.blur();
          closeMobileSheet();
        } else if (deltaY < -50 && !searchContainer.classList.contains('mobile-searching')) {
          openMobileSheet('filter');
        }
      }, { passive: true });
    }
    
    let tipTimeout = null;
    function showTip(msg, isError = false, duration = 2000) {
      if (tipTimeout) clearTimeout(tipTimeout);
      const tipHost = mobileNavigation && mobileNavigation.isOpen()
        ? document.getElementById('mobile-control-dialog') : document.body;
      tipHost.append(searchTipDiv);
      searchTipDiv.textContent = msg;
      searchTipDiv.style.display = 'block';
      searchTipDiv.style.background = isError ? 'rgba(220,53,69,0.9)' : 'rgba(0,0,0,0.75)';
      searchTipDiv.style.backdropFilter = 'blur(6px)';
      tipTimeout = setTimeout(() => {
        searchTipDiv.style.display = 'none';
      }, duration);
    }
    // 工具函数：HTML 转义，防止 XSS
    function escapeHtml(str) {
      return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }
    // 工具函数：将文本中匹配的关键词片段用红色高亮包裹
    function highlightKeyword(text, keyword) {
      if (!keyword) return escapeHtml(text);
      const escapedText = escapeHtml(text);
      const escapedKw = escapeHtml(keyword);
      const reg = new RegExp(escapedKw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      return escapedText.replace(reg, match => `<mark style="background:transparent;color:#e60012;font-weight:700;">${match}</mark>`);
    }

    function isLandmarkSearchType(type) {
      return type === 'landmark';
    }

    function isSearchItemAllowed(item) {
      const activeThemeBtn = document.querySelector('.filter-btn[data-type="landmark"].active');
      if (!activeThemeBtn) return !isLandmarkSearchType(item.type);
      if (activeThemeBtn.dataset.type === 'landmark') {
        if (!isLandmarkSearchType(item.type)) return false;
        return activeLandmarkCategory === 'all' || item.landmarkCategory === activeLandmarkCategory;
      }
      return true;
    }

    function updateSuggestions(val) {
      if (!val.trim()) {
        suggestionsDiv.style.display = 'none';
        return;
      }
      const lowerVal = val.toLowerCase();
      const matches = searchNameList.filter(item => isSearchItemAllowed(item) && item.lower.includes(lowerVal)).slice(0, 8);
      if (matches.length === 0) {
        suggestionsDiv.style.display = 'none';
        return;
      }
      suggestionsDiv.innerHTML = '';
      matches.forEach(m => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';

        if (m.type === 'city') {
          // 城市类型：名称标红 + 城市角标
          div.classList.add('city-type');
          div.innerHTML = `${highlightKeyword(m.raw, val)} <span class="city-tag">城市</span>`;
        } else if (isLandmarkSearchType(m.type)) {
          const tag = LANDMARK_CATEGORY_META[m.landmarkCategory || 'lyric']?.shortTag || '地标';
          div.innerHTML = `${highlightKeyword(m.raw, val)} <span class="city-tag">${tag}</span>`;
        } else if (m.alias) {
          // 别名命中：展示"真实姓名 • 别名标红"
          div.innerHTML = `${escapeHtml(m.raw)} <span style="color:#aaa;font-size:12px;font-weight:400">• ${highlightKeyword(m.alias, val)}</span>`;
        } else {
          // 普通歌手/厂牌：名称标红
          div.innerHTML = highlightKeyword(m.raw, val);
        }

        div.addEventListener('click', () => {
          searchInput.value = m.raw;
          saveMobileHistory(m.raw);
          suggestionsDiv.style.display = 'none';
          if (m.type === 'city') {
              locateCity(m);
            } else if (isLandmarkSearchType(m.type)) {
              locateMapPoint(m);
            } else {
              locateAndAnimate(m.raw);
            }
        });
        suggestionsDiv.appendChild(div);
      });
      suggestionsDiv.style.display = 'block';
    }
    
function locateCity(cityObj) {
        if (mobileNavigation) mobileNavigation.close({ immediate: true, restoreFocus: false });
        // 飞行到该城市并增加轻微的缩放展示
        map.flyTo([cityObj.lat, cityObj.lng], 10, { duration: 1.2, easeLinearity: 0.3 });
        showTip(`已前往城市：${cityObj.raw}`, false, 2000);
        addPulseEffect([cityObj.lat, cityObj.lng]);
      }

    function locateMapPoint(pointObj) {
      if (!RAP_LANDMARKS_ENABLED) return;
      if (mobileNavigation) mobileNavigation.close({ immediate: true, restoreFocus: false });
      activeLandmarkTheme = 'landmark';
      setActiveLandmarkCategory(pointObj.landmarkCategory || 'all', false);
      document.querySelectorAll(".filter-btn[data-type]").forEach(btn => btn.classList.remove("active"));
      const activeBtn = document.querySelector('.filter-btn[data-type="landmark"]');
      if (activeBtn) activeBtn.classList.add('active');
      if (typeof updateModeFilterSlider === 'function') {
        updateModeFilterSlider();
      }
      if (typeof syncMobileControls === 'function') {
        syncMobileControls();
      }
      markerClusterGroup.clearLayers();
      showLandmarks();
      map.flyTo([pointObj.lat, pointObj.lng], 16, { duration: 1.0, easeLinearity: 0.3 });
      showTip(`已定位：${pointObj.raw}`, false, 1800);
      addPulseEffect([pointObj.lat, pointObj.lng]);
    }



    function locateAndAnimate(name, showProfile = true) {
      const person = profileUI.find(name);
      if (person && !profileUI.hasMapLocation(person)) {
        profileUI.open(person.name);
        return;
      }
      const exitBtn = document.getElementById('exit-network-btn');
      if (networkScene && networkScene.isActive()) {
        exitBtn.style.display = 'none';
        clearNetworkScene();
        document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.type === 'all');
        });
        updateModeFilterSlider();
        renderMarkers('all');
      }
      const lowerName = (person ? person.name : name).toLowerCase();
      let markerObj = searchMarkerMap.get(lowerName);
      if (!markerObj && person && profileUI.hasMapLocation(person)) {
        hideLandmarks();
        document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.type === 'all');
        });
        fanThresholdIndex = 0;
        updateFanThresholdControl();
        setFanSliderPercent(0);
        updateModeFilterSlider();
        syncMobileControls();
        renderMarkers('all');
        markerObj = searchMarkerMap.get(lowerName);
      }
      if (markerObj && markerObj.marker) {
        smartLocateAndPopup(markerObj.marker, markerObj.rawName, showProfile);
      } else {
        showTip('没找到 "' + name + '"，试试其他关键词', true);
      }
    }

    // 搜索执行
   function executeSearch() {
        const keyword = searchInput.value.trim();
        if (!keyword) { showTip('输入歌手、团体或城市名称吧', false, 1200); return; }
        saveMobileHistory(keyword);
      const lowerKw = keyword.toLowerCase();
        const exactMatches = searchNameList.filter(item => isSearchItemAllowed(item) && item.lower === lowerKw);
        const exactMatch = exactMatches.find(item => item.raw.toLowerCase() === lowerKw) || exactMatches[0];
      if (exactMatch) {
          suggestionsDiv.style.display = 'none';
          if (exactMatch.type === 'city') locateCity(exactMatch);
          else if (isLandmarkSearchType(exactMatch.type)) locateMapPoint(exactMatch);
          else locateAndAnimate(exactMatch.raw);
          return;
        }
      const fuzzyMatches = searchNameList.filter(item => isSearchItemAllowed(item) && item.lower.includes(lowerKw));
        if (fuzzyMatches.length > 0) {
          suggestionsDiv.style.display = 'none';
          if (fuzzyMatches[0].type === 'city') locateCity(fuzzyMatches[0]);
          else if (isLandmarkSearchType(fuzzyMatches[0].type)) locateMapPoint(fuzzyMatches[0]);
          else locateAndAnimate(fuzzyMatches[0].raw);
        } else {
          showTip(`暂未收录 "${keyword}"`, true);
        }
      }

    // ===== 搜索框清除按钮逻辑 =====
    const clearBtn = document.getElementById('search-clear-btn');
    function updateClearBtn() {
      clearBtn.style.display = searchInput.value.length > 0 ? 'flex' : 'none';
    }
    clearBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      searchInput.value = '';
      updateClearBtn();
      suggestionsDiv.style.display = 'none';
      searchInput.focus();
    });

    searchInput.addEventListener('input', (e) => {
      updateSuggestions(e.target.value);
      updateClearBtn();
    });
    searchInput.addEventListener('focus', openMobileSearch);
    searchInput.addEventListener('click', openMobileSearch);
    searchBtn.addEventListener('click', executeSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch();
      }
    });
    document.addEventListener('click', (e) => {
      if (mobileNavigation && mobileNavigation.contains(e.target)) return;
      if (!document.getElementById('search-container').contains(e.target)) {
        suggestionsDiv.style.display = 'none';
      }
    });

    // ===== 索引面板逻辑 =====
    const indexBtn   = document.getElementById('index-btn');
    const indexPanel = document.getElementById('index-panel');
    const indexList  = document.getElementById('index-list');
const indexTabSlider = document.getElementById('index-tab-slider');
let   currentIndexTab = 'singer'; // 默认显示歌手
    function buildIndexList(filter) {
      indexList.innerHTML = '';
      const lowerFilter = (filter || '').toLowerCase();

      // ===== 拼音首字母映射表（由 pypinyin 精确生成，可手动覆盖）=====
const pinyinMap = {
  "万妮达Vinida Weng": "W",
  "三火flame": "S",
  "丹镇北京": "D",
  "九维": "J",
  "二流": "E",
  "云别": "Y",
  "五人组": "W",
  "亚细亚旷世奇才": "Y",
  "侃迪Kandi": "K",
  "侃迪kandi": "K",
  "俞天时": "Y",
  "儿几": "E",
  "兔男": "T",
  "八口8uck": "B",
  "凶狠凯蒂": "X",
  "刀脚": "D",
  "刘悦spam-生番": "L",
  "刘炫廷": "L",
  "功夫胖KUNGFU-PEN": "G",
  "加木": "J",
  "北星tec9": "B",
  "华云龙KLE": "H",
  "卡力老虎": "K",
  "卦者灵风": "G",
  "史宗伦Xyber": "S",
  "叶轩池": "Y",
  "吉他张": "J",
  "吕富贵": "L",
  "国蛋": "G",
  "圣代": "S",
  "地磁卡": "D",
  "夏之禹": "X",
  "大D(DLyn)": "D",
  "姜云升": "J",
  "威尔Will.T": "W",
  "孙八一": "S",
  "宋岳庭": "S",
  "宝石Gem": "B",
  "小安迪": "X",
  "小安迪LilAndyKillThemAll": "X",
  "小精灵": "X",
  "小酷Coola": "X",
  "小青龙": "X",
  "巴顿": "B",
  "布瑞吉Bridge": "B",
  "希介": "X",
  "广顺": "G",
  "康熙": "K",
  "建坤YOUNG": "J",
  "弗洛·文尔": "F",
  "张方钊": "Z",
  "弹壳Danko": "D",
  "徐真真": "X",
  "徐骁宇DEAN K": "X",
  "德吉老爷": "D",
  "成都集团": "C",
  "揽佬SKAI ISYOURGOD": "L",
  "揽小": "L",
  "斑比Bambii": "B",
  "斯威特MCSWEET": "S",
  "新秀": "X",
  "施鑫文月": "S",
  "无敌男孩": "W",
  "无脸男葫芦": "W",
  "无限火力": "W",
  "早安": "Z",
  "昊昊HOHO": "H",
  "曲甲": "Q",
  "朝三": "C",
  "李佳隆": "L",
  "李外LilWine": "L",
  "李大奔BENZO": "L",
  "李尔新": "L",
  "李文": "L",
  "李棒棒Muti": "L",
"路铭Dualkiller": "L",
  "李欣颖": "L",
  "李毅杰PISSY": "L",
  "杨和苏KeyNG": "Y",
  "杨布拉德": "Y",
  "极品贵公子": "J",
  "林渝植Anoryz": "L",
  "柴行敏": "C",
  "梁淞Tsong": "L",
  "步步高先生": "B",
  "永力兄弟会": "Y",
  "沙一汀EL": "S",
  "沧桑Cang333": "C",
  "河北吴孟达": "H",
  "法老": "F",
  "泰格西": "T",
  "活死人": "H",
  "派克特": "P",
  "海洋Bo": "H",
  "滇声气": "D",
  "满舒克": "M",
  "狂兆北": "K",
  "王以太": "W",
  "王嗣尧TURBO": "W",
  "王波": "W",
  "王澳楠EVE": "W",
  "王齐铭WatchMe": "W",
  "瘦子E.SO": "S",
  "瘦恒SoulHan": "S",
  "盛宇D-SHINE": "S",
  "直火帮 Straight Fire Gang": "Z",
  "直火帮Feezy": "Z",
  "离合": "L",
  "秃子2z": "T",
  "等一下就回家": "D",
  "红手指": "H",
  "绵阳STAR": "M",
  "罗言": "L",
  "翁杰Winjay": "W",
  "肯迪仔": "K",
  "艾志恒Asen": "A",
  "艾洛樱Aluvin": "A",
  "艾热AIR": "A",
  "艾福杰尼": "A",
  "艾里克": "A",
  "蛋堡": "D",
  "血男孩": "X",
  "西奥Sio": "X",
  "觀山水": "G",
  "诺米么Lodmemo": "N",
  "谟西Mercy": "M",
  "谢帝": "X",
  "贰万": "E",
  "贾真Jahgen": "J",
  "赛文凯": "S",
  "辉子": "H",
  "连麻Swimming": "L",
  "迪诺哥": "D",
  "邓典果DDG": "D",
  "那吾克热-NW": "N",
  "那奇沃夫": "N",
  "钟欣cent3e": "Z",
  "阿拉梅": "A",
  "阿牛": "A",
  "阿达娃": "A",
  "陆政廷Lil Jet": "L",
  "陈一豪Clear": "C",
  "陈娴静": "C",
  "陈近南": "C",
  "雾都L4WUDU": "W",
  "顽童MJ116": "W",
  "马思唯": "M",
  "马王HorseKing": "M",
  "马赫mood": "M",
  "高天佐": "G",
  "鬼卞": "G",
  "黄之仪Kyra Zilver": "H",
  "黄云龙": "H",
  "黄建威": "H",
  "黄旭": "H",
  "黄格雷": "H",
  "龍胆紫/PurpleSoul": "L",
  "龙井说唱": "L",
  "龙井说唱 孙旭": "L",
  "龙崎": "L"
};

function getInitial(name) {
  // 1. 优先使用手动指定的 indexLetter（在数据对象中设置 indexLetter: "L" 即可覆盖）
  // 注意：此处通过 allData 查找对应条目
  const dataItem = allData.find(d => d.name === name);
  if (dataItem && dataItem.indexLetter) {
    return dataItem.indexLetter.toUpperCase();
  }
  
  const ch = name.charAt(0);
  
  // 2. 英文字母开头：直接返回大写字母
  if (/[A-Za-z]/.test(ch)) return ch.toUpperCase();
  
  // 3. 数字或特殊字符开头：归入 #
  if (/[0-9]/.test(ch)) return '#';
  
  // 4. 汉字：查询精确拼音映射表
  if (pinyinMap[name]) return pinyinMap[name];
  
  // 5. 兜底：取首字单独查表
  for (const [n, l] of Object.entries(pinyinMap)) {
    if (n.charAt(0) === ch) return l;
  }
  
  return '#';
}


      function renderGroup(items, groupTitle) {
        if (items.length === 0) return;

        // 按首字母分组
        const groups = {};
        items.forEach(item => {
          const init = getInitial(item.name);
          if (!groups[init]) groups[init] = [];
          groups[init].push(item);
        });



        // 按首字母排序输出
// 找到约第 4126–4135 行，替换为：
const sortedKeys = Object.keys(groups).sort((a, b) => {
  if (a === '#') return 1;   // # 排最后
  if (b === '#') return -1;
  return a.localeCompare(b); // 其余按字母顺序
});


        sortedKeys.forEach(key => {
          // 字母标题行
          const letterHeader = document.createElement('div');
          letterHeader.className = 'index-letter-header';
          letterHeader.textContent = key;
          indexList.appendChild(letterHeader);

          // 该字母下的条目
          groups[key].sort((a, b) => a.name.localeCompare(b.name, 'zh')).forEach(item => {
            const row = document.createElement('div');
            row.className = 'index-row';
            row.innerHTML = `
              <img class="index-avatar" src="${item.avatar}" alt="${item.name}" loading="lazy">
              <span class="index-name">${item.name}</span>
            `;
            row.addEventListener('click', () => {
              locateAndAnimate(item.name);
            });
            indexList.appendChild(row);
          });
        });
      }

      const singers = allData.filter(d => d.type === 'singer');
      const labels  = allData.filter(d => d.type === 'label');

      const filteredSingers = lowerFilter
        ? singers.filter(d => d.name.toLowerCase().includes(lowerFilter))
        : singers;
      const filteredLabels = lowerFilter
        ? labels.filter(d => d.name.toLowerCase().includes(lowerFilter))
        : labels;

      if (currentIndexTab === 'singer') {
  renderGroup(filteredSingers);
} else {
  renderGroup(filteredLabels);
}

    }

    function positionIndexPanel() {
      if (window.innerWidth <= 480) {
        relocateMobilePanels();
        clearPanelInlinePosition(indexPanel);
      } else {
        const anchor = document.getElementById('search-input-inner');
        const width = Math.max(300, Math.min(340, anchor.getBoundingClientRect().width + 54));
        positionDesktopPopover(indexPanel, anchor, { width });
      }
    }
    function openIndexPanel() {
      profileUI.close({ restoreFocus: false });
      document.getElementById('rank-panel').classList.remove('show');
      document.getElementById('rank-btn').classList.remove('open');
      document.getElementById('more-options-dropdown').classList.remove('show');
      positionIndexPanel();
      suggestionsDiv.style.display = 'none';
      currentIndexTab = 'singer';
      indexTabSlider.style.transform = 'translateX(0)';
      document.querySelectorAll('.index-tab').forEach(t => t.classList.remove('active'));
      document.querySelector('.index-tab[data-tab="singer"]').classList.add('active');
      buildIndexList('');
      indexPanel.classList.add('show');
      indexBtn.classList.add('active');
      indexBtn.setAttribute('aria-expanded', 'true');
    }
    function closeIndexPanel() {
      indexPanel.classList.remove('show');
      indexBtn.classList.remove('active');
      indexBtn.setAttribute('aria-expanded', 'false');
    }

    indexBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      indexPanel.classList.contains('show') ? closeIndexPanel() : openIndexPanel();
    });
    window.addEventListener('resize', () => {
      requestAnimationFrame(() => {
        if (window.innerWidth <= 480) return;
        if (indexPanel.classList.contains('show')) positionIndexPanel();
        if (moreOptionsDropdown.classList.contains('show')) positionDesktopPopover(moreOptionsDropdown, moreOptionsBtn, { alignRight: true });
        if (document.getElementById('rank-panel').classList.contains('show')) {
          positionDesktopPopover(document.getElementById('rank-panel'), document.getElementById('rank-btn'), { alignRight: true });
        }
      });
    });
// 索引 tab 切换
document.querySelectorAll('.index-tab').forEach((tab, idx) => {
  tab.addEventListener('click', function() {
    if (this.dataset.tab === currentIndexTab) return;
    currentIndexTab = this.dataset.tab;
    document.querySelectorAll('.index-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    indexTabSlider.style.transform = idx === 0 ? 'translateX(0)' : 'translateX(100%)';
    buildIndexList('');
  });
});


    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 480) return;
      if (!indexBtn.contains(e.target) && !indexPanel.contains(e.target)) {
        closeIndexPanel();
      }
    });


// ===== 关系网模式核心逻辑 =====
    
    networkScene = window.RapNetworkScene.create({
      map, layer: networkLayer, resolve: name => profileUI.find(name),
      hasLocation: profileUI.hasMapLocation, bindPreview: bindProfilePreview,
      exitButton: document.getElementById('exit-network-btn')
    });

   // 触发显示关系网
    window.showNetwork = function(centerName, { keepProfile = false } = {}) {
      const centerSinger = profileUI.find(centerName);
      if (!centerSinger || !centerSinger.collaborators) return;
      if (mobileNavigation) mobileNavigation.close({ immediate: true, restoreFocus: false });
      if (!profileUI.hasMapLocation(centerSinger)) {
        profileUI.open(centerSinger.name);
        return;
      }
      if (!keepProfile) profileUI.close({ restoreFocus: false });
      map.closePopup();
      markerClusterGroup.clearLayers(); 

      // 【修复】：清除所有筛选按钮的激活状态（红底）
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      updateModeFilterSlider();

      networkScene.show(centerSinger);
    };

// 退出关系网的交互
    document.getElementById('exit-network-btn').addEventListener('click', function() {
      // 1. 隐藏退出按钮
      this.style.display = 'none';
      
      // 2. 清空关系网专用的线和点
      clearNetworkScene();
      
      // 2.5 隐藏说唱地标
      if (typeof hideLandmarks === 'function') hideLandmarks();
      // 3. 恢复原始的聚合图层
      let activeBtn = document.querySelector('.filter-btn.active');
      // 【修复】：如果没有任何按钮处于 active 状态（因为进入关系网时被清除了），默认恢复“全部”按钮的高亮
      if (!activeBtn) {
        activeBtn = document.querySelector('.filter-btn[data-type="all"]');
        if (activeBtn) activeBtn.classList.add('active');
        updateModeFilterSlider();
      }
      const activeType = activeBtn ? activeBtn.dataset.type : 'all';
      
      // 重新渲染所有标记
      renderMarkers(activeType);
      
          });

    // Reuse the original controls, so mobile popups and desktop menus share state.
    if (window.RapMobileNavigation) {
      const dismissMobilePanels = () => {
        moreOptionsDropdown.classList.remove('show');
        document.getElementById('rank-panel').classList.remove('show');
        document.getElementById('rank-btn').classList.remove('open');
        closeIndexPanel();
      };
      mobileNavigation = window.RapMobileNavigation.create({
        beforeOpen: () => {
          profileUI.close({ restoreFocus: false });
          map.closePopup();
          closeMobileLayerMenu();
        },
        onActivate: key => {
          searchContainer.classList.remove('mobile-expanded', 'mobile-searching', 'mobile-mode-open');
          modeFilterTabs.classList.remove('mobile-open');
          dismissMobilePanels();
          if (key === 'search') {
            renderMobileHistory();
            updateSuggestions(searchInput.value);
            updateClearBtn();
          } else if (key === 'filter') {
            moreOptionsDropdown.classList.add('show');
            requestAnimationFrame(updateModeFilterSlider);
          } else if (key === 'rank') {
            document.getElementById('rank-panel').classList.add('show');
            document.getElementById('rank-btn').classList.add('open');
          } else if (key === 'index') openIndexPanel();
        },
        onClose: () => {
          dismissMobilePanels();
          suggestionsDiv.style.display = 'none';
          document.body.append(searchTipDiv);
        }
      });
    }
  }); // 对应开头的 DOMContentLoaded 监听
