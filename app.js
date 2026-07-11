const companies = [
  {id:1,name:'中国核工业集团',alias:'中核集团',industry:'军工与航天',job:'https://www.zhipin.com/web/geek/jobs?query=中核集团&city=100010000',home:'https://www.cnnc.com.cn/',type:'boss',note:'官方招聘站存在访问限制，主入口改为BOSS实时岗位搜索'},
  {id:2,name:'中国航天科技集团',alias:'航天科技',industry:'军工与航天',job:'https://www.spacetalent.com.cn/',home:'https://www.spacechina.com/',type:'direct'},
  {id:3,name:'中国航天科工集团',alias:'航天科工',industry:'军工与航天',job:'https://casic.zhiye.com/',home:'https://www.casic.cn/',type:'direct'},
  {id:4,name:'中国航空工业集团',alias:'航空工业',industry:'军工与航天',job:'https://www.avic.com/',home:'https://www.avic.com/',type:'fallback',note:'集团岗位由各成员单位分别发布，请从官网招聘公告进入'},
  {id:5,name:'中国船舶集团',alias:'中国船舶',industry:'军工与航天',job:'https://cssc.zhiye.com/',home:'https://www.cssc.net.cn/',type:'direct'},
  {id:6,name:'中国兵器工业集团',alias:'兵器工业集团',industry:'军工与航天',job:'https://www.zhipin.com/web/geek/jobs?query=兵器工业集团&city=100010000',home:'https://www.norincogroup.com.cn/',type:'boss',note:'兵器人才网连接不稳定，主入口改为BOSS实时岗位搜索'},
  {id:7,name:'中国兵器装备集团',alias:'兵装集团',industry:'军工与航天',job:'https://csgc.zhiye.com/',home:'https://www.csgc.com.cn/',type:'direct'},
  {id:8,name:'中国电子科技集团',alias:'中国电科',industry:'军工与航天',job:'https://cetc.zhiye.com/',home:'https://www.cetc.com.cn/',type:'direct'},
  {id:9,name:'中国航空发动机集团',alias:'中国航发',industry:'军工与航天',job:'https://aecc.zhiye.com/',home:'https://www.aecc.cn/',type:'direct'},
  {id:10,name:'中国融通资产管理集团',alias:'中国融通',industry:'综合与投资',job:'https://www.crtamg.com.cn/rlzy/',home:'https://www.crtamg.com.cn/',type:'section'},
  {id:11,name:'中国石油天然气集团',alias:'中国石油',industry:'能源与电力',job:'https://www.zhipin.com/web/geek/jobs?query=中国石油&city=100010000',home:'https://www.cnpc.com.cn/',type:'boss',note:'官方招聘平台启用访问校验，主入口改为BOSS实时岗位搜索'},
  {id:12,name:'中国石油化工集团',alias:'中国石化',industry:'能源与电力',job:'https://job.sinopec.com/',home:'https://www.sinopecgroup.com/',type:'direct'},
  {id:13,name:'中国海洋石油集团',alias:'中国海油',industry:'能源与电力',job:'https://cnooc.zhaopin.com/',home:'https://www.cnooc.com.cn/',type:'direct'},
  {id:14,name:'国家石油天然气管网集团',alias:'国家管网',industry:'能源与电力',job:'https://pipechina.hotjob.cn/',home:'https://www.pipechina.com.cn/',type:'direct'},
  {id:15,name:'国家电网有限公司',alias:'国家电网',industry:'能源与电力',job:'https://www.zhipin.com/web/geek/jobs?query=国家电网&city=100010000',home:'https://www.sgcc.com.cn/',type:'boss',note:'官方招聘平台启用访问校验，主入口改为BOSS实时岗位搜索'},
  {id:16,name:'中国南方电网',alias:'南方电网',industry:'能源与电力',job:'https://zhaopin.csg.cn/',home:'https://www.csg.cn/',type:'direct'},
  {id:17,name:'中国华能集团',alias:'中国华能',industry:'能源与电力',job:'https://zhaopin.chng.com.cn/',home:'https://www.chng.com.cn/',type:'direct'},
  {id:18,name:'中国大唐集团',alias:'中国大唐',industry:'能源与电力',job:'https://zhaopin.china-cdt.com/zpgg_index.html',home:'https://www.china-cdt.com/',type:'direct'},
  {id:19,name:'中国华电集团',alias:'中国华电',industry:'能源与电力',job:'https://rencaishichang.chd.com.cn/',home:'https://www.chd.com.cn/',type:'direct'},
  {id:20,name:'国家电力投资集团',alias:'国家电投',industry:'能源与电力',job:'https://spic2026.iguopin.com/',home:'https://www.spic.com.cn/',type:'direct',note:'国聘网2026招聘专题'},
  {id:21,name:'中国长江三峡集团',alias:'三峡集团',industry:'能源与电力',job:'https://www.ctg.com.cn/',home:'https://www.ctg.com.cn/',type:'section',note:'官网首页进入人才招聘栏目'},
  {id:22,name:'国家能源投资集团',alias:'国家能源集团',industry:'能源与电力',job:'https://zhaopin.chnenergy.com.cn/',home:'https://www.chnenergy.com.cn/',type:'direct'},
  {id:23,name:'中国电信集团',alias:'中国电信',industry:'通信与信息',job:'https://campus.51job.com/chinatelecom/about.html',home:'https://www.chinatelecom.com.cn/',type:'direct',note:'2026春招官方合作专题'},
  {id:24,name:'中国联合网络通信集团',alias:'中国联通',industry:'通信与信息',job:'https://www.chinaunicom.com.cn/46/menu01/528/column06',home:'https://www.chinaunicom.com.cn/',type:'section'},
  {id:25,name:'中国移动通信集团',alias:'中国移动',industry:'通信与信息',job:'https://campus.51job.com/m/zgydyw/index.html',home:'https://www.chinamobileltd.com/',type:'direct',note:'2026春招官方合作专题'},
  {id:26,name:'中国卫星网络集团',alias:'中国星网',industry:'通信与信息',job:'https://www.chinasatnet.com/',home:'https://www.chinasatnet.com/',type:'fallback',note:'暂未发现稳定的独立招聘站，请从集团官网公告进入'},
  {id:27,name:'中国电子信息产业集团',alias:'中国电子',industry:'通信与信息',job:'https://campus.cec.com.cn/',home:'https://www.cec.com.cn/',type:'direct'},
  {id:28,name:'中国第一汽车集团',alias:'中国一汽',industry:'汽车与装备',job:'https://www.zhipin.com/web/geek/jobs?query=中国一汽&city=100010000',home:'https://www.faw.com.cn/',type:'boss',note:'原智联专题返回403，主入口改为BOSS实时岗位搜索'},
  {id:29,name:'东风汽车集团',alias:'东风汽车',industry:'汽车与装备',job:'https://dfmc.zhiye.com/',home:'https://www.dfmc.com.cn/',type:'direct'},
  {id:30,name:'中国一重集团',alias:'中国一重',industry:'汽车与装备',job:'https://campus.51job.com/cfhi2026/about.html',home:'https://www.cfhi.com/',type:'direct',note:'当前入口为2026届校园招聘专题'},
  {id:31,name:'中国机械工业集团',alias:'国机集团',industry:'汽车与装备',job:'https://sinomach.zhiye.com/',home:'https://www.sinomach.com.cn/',type:'direct'},
  {id:32,name:'哈尔滨电气集团',alias:'哈电集团',industry:'汽车与装备',job:'https://www.harbin-electric.com/',home:'https://www.harbin-electric.com/',type:'section',note:'官网首页提供校园招聘与社会招聘入口'},
  {id:33,name:'中国东方电气集团',alias:'东方电气',industry:'汽车与装备',job:'https://dongfang.zhiye.com/',home:'https://www.dongfang.com/',type:'direct'},
  {id:34,name:'鞍钢集团',alias:'鞍钢',industry:'矿产与材料',job:'https://ansteel.zhiye.com/',home:'https://www.ansteel.cn/',type:'direct'},
  {id:35,name:'中国宝武钢铁集团',alias:'中国宝武',industry:'矿产与材料',job:'https://baowu.zhiye.com/',home:'https://www.baowugroup.com/',type:'direct'},
  {id:36,name:'中国矿产资源集团',alias:'中国矿产',industry:'矿产与材料',job:'https://campus.51job.com/cmr/',home:'https://www.cmrg.com.cn/',type:'direct'},
  {id:37,name:'中国铝业集团',alias:'中铝集团',industry:'矿产与材料',job:'https://chinalco.zhiye.com/',home:'https://www.chinalco.com.cn/',type:'direct'},
  {id:38,name:'中国远洋海运集团',alias:'中远海运',industry:'交通与航空',job:'https://www.coscoshipping.com/',home:'https://www.coscoshipping.com/',type:'fallback',note:'集团招聘按批次从官网公告进入'},
  {id:39,name:'中国航空集团',alias:'中航集团',industry:'交通与航空',job:'https://zhaopin.airchina.com.cn/',home:'https://www.airchinagroup.com/',type:'direct'},
  {id:40,name:'中国东方航空集团',alias:'中国东航',industry:'交通与航空',job:'https://job.ceair.com/',home:'https://www.ceairgroup.com/',type:'direct'},
  {id:41,name:'中国南方航空集团',alias:'中国南航',industry:'交通与航空',job:'https://job.csair.com/',home:'https://www.csairgroup.cn/',type:'direct'},
  {id:42,name:'中国中化控股',alias:'中国中化',industry:'综合与投资',job:'https://sinochem.hotjob.cn/',home:'https://www.sinochem.com/',type:'direct'},
  {id:43,name:'中粮集团',alias:'中粮',industry:'农业与食品',job:'https://cofco.zhiye.com/',home:'https://www.cofco.com/',type:'direct'},
  {id:44,name:'中国五矿集团',alias:'中国五矿',industry:'矿产与材料',job:'https://minmetals.hotjob.cn/',home:'https://www.minmetals.com.cn/',type:'direct'},
  {id:45,name:'中国通用技术集团',alias:'通用技术集团',industry:'综合与投资',job:'https://genertec.zhiye.com/',home:'https://www.genertec.com.cn/',type:'direct'},
  {id:46,name:'中国建筑集团',alias:'中国建筑',industry:'建筑与工程',job:'https://cscec.zhiye.com/',home:'https://www.cscec.com/',type:'direct'},
  {id:47,name:'中国储备粮管理集团',alias:'中储粮集团',industry:'农业与食品',job:'https://sinograin.iguopin.com/',home:'https://www.sinograin.com.cn/',type:'direct'},
  {id:48,name:'中国南水北调集团',alias:'南水北调集团',industry:'建筑与工程',job:'https://www.zhipin.com/web/geek/jobs?query=南水北调集团&city=100010000',home:'https://www.csnwd.com.cn/',type:'boss',note:'集团官网长期超时，主入口改为BOSS实时岗位搜索'},
  {id:49,name:'国家开发投资集团',alias:'国投集团',industry:'综合与投资',job:'https://sdic.zhiye.com/',home:'https://www.sdic.com.cn/',type:'direct'},
  {id:50,name:'招商局集团',alias:'招商局',industry:'综合与投资',job:'https://cmhk.zhiye.com/',home:'https://www.cmhk.com/',type:'direct'},
  {id:51,name:'华润集团',alias:'华润',industry:'综合与投资',job:'https://crc.wintalent.cn/',home:'https://www.crc.com.hk/',type:'direct'},
  {id:52,name:'中国旅游集团',alias:'中国旅游集团／港中旅',industry:'文旅与服务',job:'https://ctg.zhiye.com/',home:'https://www.ctg.cn/',type:'direct'},
  {id:53,name:'中国商用飞机',alias:'中国商飞',industry:'交通与航空',job:'https://comac.zhiye.com/',home:'https://www.comac.cc/',type:'direct'},
  {id:54,name:'中国节能环保集团',alias:'中国节能',industry:'环保与咨询',job:'https://cecep.zhiye.com/',home:'https://www.cecep.cn/',type:'direct'},
  {id:55,name:'中国国际工程咨询',alias:'中咨公司',industry:'环保与咨询',job:'https://www.ciecc.com.cn/col/col1601/index.html',home:'https://www.ciecc.com.cn/',type:'section'},
  {id:56,name:'中国诚通控股集团',alias:'中国诚通',industry:'综合与投资',job:'https://cctgroup.zhiye.com/',home:'https://www.cctgroup.com.cn/',type:'direct'},
  {id:57,name:'中国中煤能源集团',alias:'中煤集团',industry:'能源与电力',job:'https://chinacoal.zhiye.com/',home:'https://www.chinacoal.com/',type:'direct'},
  {id:58,name:'中国煤炭科工集团',alias:'中国煤科',industry:'科研与技术',job:'https://ccteg.zhiye.com/',home:'https://www.ccteg.cn/',type:'direct'},
  {id:59,name:'中国机械科学研究总院集团',alias:'中国机械总院',industry:'科研与技术',job:'https://www.cam.com.cn/channels/172.html',home:'https://www.cam.com.cn/',type:'section'},
  {id:60,name:'中国钢研科技集团',alias:'中国钢研',industry:'科研与技术',job:'https://cisri.zhiye.com/',home:'https://www.cisri.com.cn/',type:'direct'},
  {id:61,name:'中国化学工程集团',alias:'中国化学',industry:'建筑与工程',job:'https://cncec.zhiye.com/',home:'https://www.cncec.cn/',type:'direct'},
  {id:62,name:'中国盐业集团',alias:'中盐集团',industry:'农业与食品',job:'http://www.chinasalt.com.cn/',home:'http://www.chinasalt.com.cn/',type:'section',note:'官网HTTPS证书异常，已切换至可访问的HTTP入口'},
  {id:63,name:'中国建材集团',alias:'中国建材',industry:'矿产与材料',job:'https://cnbm.zhiye.com/',home:'https://www.cnbm.com.cn/',type:'direct'},
  {id:64,name:'中国有色矿业集团',alias:'中国有色集团',industry:'矿产与材料',job:'https://cnmc.zhiye.com/',home:'https://www.cnmc.com.cn/',type:'direct'},
  {id:65,name:'中国稀土集团',alias:'中国稀土',industry:'矿产与材料',job:'https://www.regcc.cn/zgxtjt/zpdt/list.shtml',home:'https://www.regcc.cn/',type:'section'},
  {id:66,name:'中国有研科技集团',alias:'中国有研',industry:'科研与技术',job:'https://grinm.zhiye.com/',home:'https://www.grinm.com/',type:'direct'},
  {id:67,name:'矿冶科技集团',alias:'矿冶集团',industry:'科研与技术',job:'https://bgrimm.zhiye.com/',home:'https://www.bgrimm.com/',type:'direct'},
  {id:68,name:'中国国际技术智力合作集团',alias:'中智集团',industry:'文旅与服务',job:'https://ciic.zhiye.com/',home:'https://www.ciicsh.com/',type:'direct'},
  {id:69,name:'中国建筑科学研究院',alias:'中国建研院',industry:'科研与技术',job:'https://cabr.zhiye.com/',home:'https://www.cabr.com.cn/',type:'direct'},
  {id:70,name:'中国中车集团',alias:'中国中车',industry:'轨道与基建',job:'https://crrc.zhiye.com/',home:'https://www.crrcgc.cc/',type:'direct'},
  {id:71,name:'中国铁路通信信号集团',alias:'中国通号',industry:'轨道与基建',job:'https://crsc.zhiye.com/',home:'https://www.crsc.cn/',type:'direct'},
  {id:72,name:'中国铁路工程集团',alias:'中国中铁',industry:'轨道与基建',job:'https://crec.zhiye.com/',home:'https://www.crecg.com/',type:'direct'},
  {id:73,name:'中国铁道建筑集团',alias:'中国铁建',industry:'轨道与基建',job:'https://crcc.zhiye.com/',home:'https://www.crcc.cn/',type:'direct'},
  {id:74,name:'中国交通建设集团',alias:'中国交建',industry:'轨道与基建',job:'https://cccc.zhiye.com/',home:'https://www.ccccltd.cn/',type:'direct'},
  {id:75,name:'中国信息通信科技集团',alias:'中国信科',industry:'通信与信息',job:'https://cict.zhiye.com/',home:'https://www.cict.com/',type:'direct'},
  {id:76,name:'中国农业发展集团',alias:'中国农发集团',industry:'农业与食品',job:'https://www.zhipin.com/web/geek/jobs?query=中国农发集团&city=100010000',home:'https://www.cnadc.com.cn/',type:'boss',note:'集团官网启用访问限制，主入口改为BOSS实时岗位搜索'},
  {id:77,name:'中国林业集团',alias:'中林集团',industry:'农业与食品',job:'https://www.cfgc.cn/',home:'https://www.cfgc.cn/',type:'section',note:'新版官网首页可查看招聘公告'},
  {id:78,name:'中国医药集团',alias:'国药集团',industry:'医药与健康',job:'https://sinopharm.zhiye.com/',home:'https://www.sinopharm.com/',type:'direct'},
  {id:79,name:'中国保利集团',alias:'保利集团',industry:'综合与投资',job:'https://poly.zhiye.com/',home:'https://www.poly.com.cn/',type:'direct'},
  {id:80,name:'中国建设科技',alias:'中国建科',industry:'建筑与工程',job:'https://www.cctc.cn/rczp/rlzy/xyzp/index.shtml',home:'https://www.cctc.cn/',type:'section'},
  {id:81,name:'中国冶金地质总局',alias:'冶金地质总局',industry:'地质与资源',job:'https://www.cmgb.com.cn/content/2025/11-03/1020258.html',home:'https://www.cmgb.com.cn/',type:'section',note:'当前入口为2026年校园招聘公告'},
  {id:82,name:'中国煤炭地质总局',alias:'煤炭地质总局',industry:'地质与资源',job:'https://www.ccgc.cn/?mod=zhaopin',home:'https://www.ccgc.cn/',type:'section'},
  {id:83,name:'新兴际华集团',alias:'新兴际华',industry:'汽车与装备',job:'https://xinxing.zhiye.com/',home:'https://www.xxcig.com/',type:'direct'},
  {id:84,name:'中国民航信息集团',alias:'中国航信',industry:'交通与航空',job:'https://travelsky.zhiye.com/',home:'https://www.travelsky.cn/',type:'direct'},
  {id:85,name:'中国航空油料集团',alias:'中国航油',industry:'交通与航空',job:'https://cnaf.zhiye.com/',home:'https://www.cnaf.com/',type:'direct'},
  {id:86,name:'中国航空器材集团',alias:'中国航材',industry:'交通与航空',job:'https://cas.zhiye.com/',home:'https://www.casc.com.cn/',type:'direct'},
  {id:87,name:'中国电力建设集团',alias:'中国电建',industry:'建筑与工程',job:'https://zhaopin.powerchina.cn/',home:'https://www.powerchina.cn/',type:'direct'},
  {id:88,name:'中国能源建设集团',alias:'中国能建',industry:'建筑与工程',job:'https://zhaopin.ceec.net.cn/',home:'https://www.ceec.net.cn/',type:'direct'},
  {id:89,name:'中国安能建设集团',alias:'中国安能',industry:'建筑与工程',job:'https://www.china-an.cn/',home:'https://www.china-an.cn/',type:'fallback',note:'招聘公告由集团及所属单位官网分批发布'},
  {id:90,name:'中国黄金集团',alias:'中国黄金',industry:'矿产与材料',job:'https://chinagoldgroup.zhiye.com/',home:'https://www.chinagoldgroup.com/',type:'direct'},
  {id:91,name:'中国广核集团',alias:'中广核',industry:'能源与电力',job:'https://job.cgnpc.com.cn/',home:'https://www.cgnpc.com.cn/',type:'direct'},
  {id:92,name:'中国华录集团',alias:'华录集团',industry:'通信与信息',job:'https://cetc.zhiye.com/',home:'https://www.hualu.com.cn/',type:'notice',note:'2023年并入中国电科，现从中国电科招聘渠道查看'},
  {id:93,name:'华侨城集团',alias:'华侨城',industry:'文旅与服务',job:'https://octgroup.zhiye.com/',home:'https://www.chinaoct.com/',type:'direct'},
  {id:94,name:'南光集团',alias:'南光（集团）',industry:'综合与投资',job:'https://jyzx.swpu.edu.cn/detail/online?id=3458851&menu_id=',home:'https://www.namkwong.com.mo/',type:'section',note:'当前入口为2026年校园招聘公告'},
  {id:95,name:'中国电气装备集团',alias:'中国电气装备',industry:'汽车与装备',job:'https://www.cee-group.cn/xxgk/jrwm.htm',home:'https://www.cee-group.cn/index.htm',type:'section'},
  {id:96,name:'中国物流集团',alias:'中国物流',industry:'交通与航空',job:'https://www.chinalogisticsgroup.com.cn/zh-cn/join/hotjob.shtml',home:'https://www.chinalogisticsgroup.com.cn/zh-cn/',type:'section'},
  {id:97,name:'中国国新控股',alias:'中国国新',industry:'综合与投资',job:'https://crhc.zhiye.com/',home:'https://www.crhc.cn/',type:'direct'},
  {id:98,name:'中国检验认证集团',alias:'中国中检',industry:'文旅与服务',job:'https://ccic.zhiye.com/',home:'https://www.ccic.com/',type:'direct'}
];

const $ = (selector) => document.querySelector(selector);
const list = $('#companyList');
const searchInput = $('#searchInput');
const industryFilter = $('#industryFilter');
const favoritesFilter = $('#favoritesFilter');
const directFilter = $('#directFilter');
const clearFilters = $('#clearFilters');
const bossSearchForm = $('#bossSearchForm');
const bossCompany = $('#bossCompany');
const bossKeyword = $('#bossKeyword');
const bossCity = $('#bossCity');
const resultCount = $('#resultCount');
const emptyState = $('#emptyState');
const toast = $('#toast');

let favorites = new Set(JSON.parse(localStorage.getItem('yangqi-favorites') || '[]'));
let onlyFavorites = false;
let onlyDirect = false;

const typeText = {
  direct: '独立招聘系统，可直接查看岗位',
  section: '集团官网人才招聘栏目',
  fallback: '集团官网入口',
  boss: '官方站访问受限，已切换至BOSS岗位搜索',
  notice: '企业已重组，转至承接集团渠道'
};

function initialize() {
  [...new Set(companies.map(item => item.industry))].sort((a,b) => a.localeCompare(b, 'zh-CN')).forEach(industry => {
    const option = document.createElement('option');
    option.value = industry;
    option.textContent = industry;
    industryFilter.append(option);
  });
  companies.forEach(item => {
    const option = document.createElement('option');
    option.value = item.alias;
    option.textContent = `${String(item.id).padStart(2, '0')} · ${item.name}`;
    bossCompany.append(option);
  });
  $('#totalCount').textContent = companies.length;
  $('#directCount').textContent = companies.filter(item => item.type === 'direct').length;
  updateFavoriteCount();
  render();
  lucide.createIcons();
}

function getFilteredCompanies() {
  const term = searchInput.value.trim().toLowerCase();
  const industry = industryFilter.value;
  return companies.filter(item => {
    const text = `${item.name} ${item.alias} ${item.industry}`.toLowerCase();
    return (!term || text.includes(term))
      && (industry === 'all' || item.industry === industry)
      && (!onlyFavorites || favorites.has(item.id))
      && (!onlyDirect || item.type === 'direct');
  });
}

function render() {
  const filtered = getFilteredCompanies();
  list.innerHTML = filtered.map(item => {
    const isFavorite = favorites.has(item.id);
    const label = item.type === 'fallback' ? '进入集团官网' : item.type === 'notice' ? '前往承接渠道' : item.type === 'boss' ? '查看BOSS岗位' : '进入招聘官网';
    return `
      <article class="company-row" data-id="${item.id}">
        <div class="company-index">${String(item.id).padStart(2, '0')}</div>
        <div class="company-name">
          <h3>${item.name}</h3>
          <p>${item.alias}${item.note ? ` · ${item.note}` : ''}</p>
        </div>
        <span class="tag">${item.industry}</span>
        <div class="link-status ${item.type}">
          <span class="status-dot" aria-hidden="true"></span>
          <span>${typeText[item.type]}</span>
        </div>
        <div class="actions">
          <a class="primary-link" href="${item.job}" target="_blank" rel="noopener noreferrer" aria-label="${label}：${item.name}">${label}<i data-lucide="arrow-up-right"></i></a>
          ${item.type === 'boss' ? '' : `<button class="boss-company-button" type="button" data-company="${item.alias}" aria-label="在BOSS直聘搜索${item.name}岗位">BOSS岗位<i data-lucide="search"></i></button>`}
          <a class="icon-button" href="${item.home}" target="_blank" rel="noopener noreferrer" title="集团官网" aria-label="查看${item.name}集团官网"><i data-lucide="building-2"></i></a>
          <button class="icon-button copy-button" type="button" data-url="${item.job}" title="复制招聘链接" aria-label="复制${item.name}招聘链接"><i data-lucide="copy"></i></button>
          <button class="icon-button favorite-button ${isFavorite ? 'active' : ''}" type="button" data-id="${item.id}" title="${isFavorite ? '取消收藏' : '收藏'}" aria-label="${isFavorite ? '取消收藏' : '收藏'}${item.name}"><i data-lucide="star" ${isFavorite ? 'fill="currentColor"' : ''}></i></button>
        </div>
      </article>`;
  }).join('');
  resultCount.textContent = filtered.length;
  emptyState.hidden = filtered.length > 0;
  lucide.createIcons();
}

function updateFavoriteCount() { $('#favoriteCount').textContent = favorites.size; }

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function buildBossUrl(company = '', keyword = '', city = '100010000') {
  const query = [company, keyword].filter(Boolean).join(' ');
  const params = new URLSearchParams({ query, city });
  return `https://www.zhipin.com/web/geek/jobs?${params.toString()}`;
}

function openBossSearch(company = '') {
  const url = buildBossUrl(company || bossCompany.value, bossKeyword.value.trim(), bossCity.value);
  window.open(url, '_blank', 'noopener,noreferrer');
}

searchInput.addEventListener('input', render);
industryFilter.addEventListener('change', render);
favoritesFilter.addEventListener('click', () => {
  onlyFavorites = !onlyFavorites;
  favoritesFilter.setAttribute('aria-pressed', String(onlyFavorites));
  render();
});
directFilter.addEventListener('click', () => {
  onlyDirect = !onlyDirect;
  directFilter.setAttribute('aria-pressed', String(onlyDirect));
  render();
});
clearFilters.addEventListener('click', () => {
  searchInput.value = '';
  industryFilter.value = 'all';
  onlyFavorites = false;
  onlyDirect = false;
  favoritesFilter.setAttribute('aria-pressed', 'false');
  directFilter.setAttribute('aria-pressed', 'false');
  render();
});
list.addEventListener('click', async event => {
  const favoriteButton = event.target.closest('.favorite-button');
  const copyButton = event.target.closest('.copy-button');
  const bossButton = event.target.closest('.boss-company-button');
  if (bossButton) openBossSearch(bossButton.dataset.company);
  if (favoriteButton) {
    const id = Number(favoriteButton.dataset.id);
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    localStorage.setItem('yangqi-favorites', JSON.stringify([...favorites]));
    updateFavoriteCount();
    render();
    showToast(favorites.has(id) ? '已加入收藏' : '已取消收藏');
  }
  if (copyButton) {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.url);
      showToast('招聘链接已复制');
    } catch {
      showToast('复制失败，请打开链接后从地址栏复制');
    }
  }
});
bossSearchForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!bossCompany.value && !bossKeyword.value.trim()) {
    bossKeyword.focus();
    showToast('请选择企业或输入岗位关键词');
    return;
  }
  openBossSearch();
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape') {
    searchInput.value = '';
    render();
    searchInput.blur();
  }
});

initialize();
