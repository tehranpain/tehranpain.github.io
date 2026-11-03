// 人物、厂牌与城市基础数据。编辑名单时优先修改本文件。
window.RapMapData = (() => {
const singers = [
  {
    name: "Gokevin",
    fans: "1.5万",
    lat: 22.71, lng: 113.83,
    avatar: "https://p1.music.126.net/gDxx-VONscVTgA61KkPmyw==/109951174171267831.jpg?param=130y130",
    neteaseId: "52405426"
  },
  {
    name: "春",
    fans: "4.7万",
    lat: 30.73, lng: 103.89,
    avatar: "https://p1.music.126.net/3LH_n2xALrBEEg6Noi7bvQ==/109951173273173275.jpg?param=130y130",
    neteaseId: "55460322"
  },
  {
    name: "Keyso寿君超",
    fans: "5.5万",
    lat: 31.29, lng: 121.32,
    avatar: "https://p1.music.126.net/zJAjfMmTNUIbIJDfNtAPgg==/109951164971053446.jpg?param=130y130",
    neteaseId: "5106"
  },
  {
    name: "土人儿TRE",
    fans: "4.6万",
    lat: 31.23, lng: 121.66,
    avatar: "https://p1.music.126.net/ixk8BuCAiaLN7AYL11GFhg==/109951172618059225.jpg?param=130y130",
    neteaseId: "12789336"
  },
  {
    name: "孤矢",
    fans: "5.8万",
    lat: 31.05, lng: 121.63,
    avatar: "https://p1.music.126.net/Me3V4acjUEEkZ-Qn1rTmPQ==/109951163781457774.jpg?param=130y130",
    neteaseId: "1194094"
  },
  {
    name: "颠倒",
    fans: "1.4万",
    lat: 31.28, lng: 121.58,
    avatar: "https://p1.music.126.net/4Am0awciw5man9OtOzEOuw==/109951164284454747.jpg?param=130y130",
    neteaseId: "13035389"
  },
  {
    name: "西凹木",
    fans: "5991",
    lat: 31.34, lng: 121.36,
    avatar: "https://p1.music.126.net/RMz09IIkpzT4AI2AjVuefw==/109951168504701541.jpg?param=130y130",
    neteaseId: "30207603"
  },
  {
    name: "DENZEL丹澤",
    fans: "6591",
    lat: 31.33, lng: 121.54,
    avatar: "https://p1.music.126.net/PHcqx-PP-CJWEoq-PdX-3g==/109951168728737599.jpg?param=130y130",
    neteaseId: "12065150"
  },
  {
    name: "叶尔林",
    fans: "1.9万",
    lat: 43.97, lng: 87.54,
    avatar: "https://p1.music.126.net/OZKAVjGrmVTK8K0n6oKr0w==/109951166094223674.jpg?param=130y130",
    neteaseId: "12284097"
  },
  {
    name: "kxpl",
    fans: "1.6万",
    lat: 43.78, lng: 81.67,
    avatar: "https://p1.music.126.net/9GePD-lBFYNkgVZAZ5f1Eg==/109951172710210349.jpg?param=130y130",
    neteaseId: "54125917",
    aliases: ["CSMNY"]
  },
  {
    name: "Hayrul海力",
    fans: "待补充",
    lat: 44.11, lng: 81.30,
    avatar: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='130' height='130' viewBox='0 0 130 130'%3E%3Crect width='130' height='130' rx='65' fill='%23ededed'/%3E%3Ccircle cx='65' cy='46' r='22' fill='%23999999'/%3E%3Cpath d='M23 121a42 42 0 0 1 84 0' fill='%23999999'/%3E%3C/svg%3E",
    neteaseId: ""
  },
        // 你的歌手数据保持不变...
       {
          name: "GAI周延",
          fans: "238万",
          lat: 29.55, lng: 106.54,
          avatar: "https://p2.music.126.net/FA_h3CQsm5iMK7QNjg7aYw==/109951173098623122.jpg?param=130y130",
          neteaseId: "1211046",
          desc:"「中国有嘻哈」冠军",
collaborators: [
    { name: "布瑞吉Bridge"},{ name: "雾都L4WUDU"},{ name: "Toryondacloud"},{ name: "盛宇D-SHINE"},{ name: "艾热AIR"},{ name: "Ranzer"},{ name: "功夫胖KUNGFU-PEN"},{ name: "Vava娃娃"},{ name: "FOX胡天渝"},{ name: "威尔Will.T"},{ name: "昊昊HOHO"},{ name: "史宗伦Xyber"},{ name: "早安"},{ name: "谢帝"},{ name: "KEY.L刘聪"}
  ]

        },
        {
  name: "马思唯",
  fans: "411.5万",
  lat: 30.80, lng: 103.89,
  avatar: "https://p1.music.126.net/WDPjjeAunxIC8DVGWjG6Lw==/109951170646736523.jpg?param=130y130",
  neteaseId: "1132392",
collaborators: [
    { name: "邓典果DDG"},{ name: "Ty."},{ name: "FENDIGHEE RICH"},{ name: "YOUNG13DBABY"},{ name: "TSP安琪"},{ name: "KnowKnow"},{ name: "PSY.P"},{ name: "Melo"},{ name: "谢帝"},{ name: "李尔新"},{ name: "AnsrJ"},{ name: "Mengzi"},{ name: "王以太"},{ name: "Sleepy Cat"},{ name: "P.O.E"},{ name: "罗言"},{ name: "地磁卡"},{ name: "Bohan 冷博涵"},{ name: "NINEONE#乃万"},{ name: "阿达娃"},{ name: "THOME"},{ name: "GALI"},{ name: "MC HotDog热狗"},{ name: "ljz329"},{ name: "CashTrippy"},{ name: "YTH Chopie"},{ name: "TizzyT"},{ name: "斑比Bambii"}
  ]

},
{
  name: "Vansdaddy",
  fans: "25.7万",
  lat: 31.10, lng: 105.10,
  avatar: "https://p1.music.126.net/LMx08IlqLlQKlGpgJNG8uA==/109951173999539116.jpg?param=130y130",
  neteaseId: "35009085",
collaborators: [
    { name: "KITO"},{ name: "mac ova seas"},{ name: "王以太"},{ name: "OuttaWave"},{ name: "Lil Asian"},{ name: "李文"},{ name: "黄之仪Kyra Zilver"},{ name: "THOME"},{ name: "张方钊"},{ name: "卡力老虎"},{ name: "DOMMIU"},{ name: "BOBBYNOPEACE"},{ name: "Tlatre特雷西"},{ name: "Monovisa"},{ name: "Uzzy"},{ name: "揽佬SKAI ISYOURGOD"},{ name: "叶轩池"},{ name: "Lil Asian"},{ name: "李大奔BENZO"}
  ]

},
{
  name: "王以太",
  fans: "179.5万",
  lat: 30.66, lng: 104.08,
  avatar: "https://p2.music.126.net/pc3F98VkKXATBlFsq6tFJQ==/109951169748487115.jpg?param=130y130",
  neteaseId: "12236125"

},
{
  name: "叶轩池",
  fans: "1.0万",
  lat: 31.50, lng: 104.68,
  avatar: "https://p2.music.126.net/aCsJGTmvI1pz14d-Xs9BZw==/109951173439210907.jpg?param=130y130",
  neteaseId: "34639852"
},
{
  name: "ayin印",
  fans: "1.0万",
  lat: 43.89, lng: 125.44,
  avatar: "https://p1.music.126.net/L5L4zD8rVMXVKmZvuG5HTg==/109951173659681536.jpg?param=130y130",
  neteaseId: "12924606"
},
{
  name: "地磁卡",
  fans: "3.2万",
  lat: 24.92, lng: 102.75,
  avatar: "https://p2.music.126.net/JWK4JL3y_PRmn8ctpeTD9g==/109951171994023443.jpg?param=130y130",
  neteaseId: "28072811"
},

{
  name: "P.O.E",
  fans: "5.4万",
  lat: 31.85, lng: 117.16,
  avatar: "https://p2.music.126.net/H6GoOzigSmpv5ayOiD35IQ==/109951165124470261.jpg?param=130y130",
  neteaseId: "12633236"
},
{
  name: "TINY7",
  fans: "30.8万",
  lat: 28.29, lng: 112.87,
  avatar: "https://p2.music.126.net/4PcNXxTQ_oZqnGGjpLSXWw==/109951170475139062.jpg?param=130y130",
  neteaseId: "33204812"
},{
  name: "gs.l",
  fans: "6.9万",
  lat: 28.14, lng: 113.11,
  avatar: "https://p1.music.126.net/9Sm19T7ChTBTc-Qo4KCRQQ==/109951174059415072.jpg?param=130y130",
  neteaseId: "27869677"
},
{
  name: "连麻Swimming",
  fans: "86.5万",
  lat: 30.64, lng: 104.05,
  avatar: "https://p2.music.126.net/m09Iq7mS9luDeIM0DIi02A==/109951174017359706.jpg?param=130y130",
  neteaseId: "12064019",
collaborators: [
    { name: "JinJiBeWater-隼"},{ name: "RICHNNOMADIC"},{ name: "邓典果DDG"},{ name: "刀脚"},{ name: "kkluv"},{ name: "CashTrippy"},{ name: "斑比Bambii"},{ name: "那奇沃夫"},{ name: "ICE杨长青"},{ name: "刀脚"},{ name: "布瑞吉Bridge"},{ name: "Player J"},{ name: "JarStick"},{ name: "阿牛"},{ name: "狂兆北"},{ name: "小安迪LilAndyKillThemAll"},{ name: "八口8uck"},{ name: "希介"},{ name: "AnsrJ"},{ name: "盛宇D-SHINE"},{ name: "步步高先生"}
  ]

},

{
  name: "云别",
  fans: "2.0万",
  lat: 28.21, lng: 113.04,
  avatar: "https://p2.music.126.net/YT1n12JiIzi7SflXpOggwg==/109951167200251502.jpg?param=130y130",
  neteaseId: "1205071"
},

{
  name: "JinJiBeWater-隼",
  fans: "60.3万",
  lat: 30.60, lng: 104.07,
  avatar: "https://p1.music.126.net/q7Jmhg4MCi0kU9xKggh7fQ==/109951173992818158.jpg?param=130y130",
  neteaseId: "13451886",
desc:"「新说唱2024」冠军"

},
        {
  name: "Moseee",
  fans: "3.4万",
  lat: 28.31, lng: 102.41,
  avatar: "https://p2.music.126.net/zqPaM4QT5zreu1MDhVE20w==/109951171333476852.jpg?param=130y130",
  neteaseId: "12536560"
},
{
  name: "王齐铭WatchMe",
  fans: "54.5万",
  lat: 29.03, lng: 106.65,
  avatar: "https://p1.music.126.net/2NkqRM-esPbSjYR0freJYg==/109951172165801367.jpg?param=130y130",
  neteaseId: "12320060",
desc:"「中国新说唱2020」亚军",
collaborators: [
    { name: "LSGCsikoriot"},{ name: "朴鲨VPS"},{ name: "刀脚"},{ name: "OneOne"},{ name: "布瑞吉Bridge"},{ name: "盛宇D-SHINE"},{ name: "功夫胖KUNGFU-PEN"},{ name: "REGI陈彦希"},{ name: "Gosh Music"},{ name: "邓典果DDG"},{ name: "雾都L4WUDU"},{ name: "mac ova seas"},{ name: "CashTrippy"},{ name: "建坤YOUNG"},{ name: "Echo"},{ name: "ICE杨长青"},{ name: "艾热AIR"},{ name: "谢帝"},{ name: "Akemen杀"},{ name: "V.O.B"},{ name: "Toryondacloud"},{ name: "威尔Will.T"},{ name: "王嗣尧TURBO"},{ name: "希介"},{ name: "Rich4ever"},{ name: "小青龙"},{ name: "满舒克"},{ name: "VaVa娃娃"},{ name: "GAI周延"}
  ]

},
{
  name: "布瑞吉Bridge",
  fans: "53.3万",
  lat: 29.53, lng: 106.45,
  avatar: "https://p2.music.126.net/KPJZ0WHpo_Gd9UF_5y5WPg==/109951173020565474.jpg?param=130y130",
  neteaseId: "12493701"
},
{
  name: "OneOne",
  fans: "13.9万",
  lat: 29.84, lng: 106.07,
  avatar: "https://p2.music.126.net/8-TosHmJCJOGrL4plEu6XA==/109951169496788289.jpg?param=130y130",
  neteaseId: "37052069"
},
{
  name: "雾都L4WUDU",
  fans: "17.5万",
  lat: 29.51, lng: 106.51,
  avatar: "https://p1.music.126.net/aHW4oJkgxKkHQ4-7CR0vcg==/109951166009026727.jpg?param=130y130",
  neteaseId: "12488150"
},
{
  name: "李佳隆",
  fans: "74.4万",
  lat: 30.82, lng: 106.10,
  avatar: "https://p2.music.126.net/iL3ixGJzdWAHLC-nDFkO-w==/109951173493358674.jpg?param=130y130",
  neteaseId: "12079219",
desc:"「中国新说唱2020」冠军"

},
{
  name: "史宗伦Xyber",
  fans: "1.2万",
  lat: 40.01, lng: 116.34,
  avatar: "https://p2.music.126.net/bDg4vuOkRYgrWz-bw3xZTg==/109951173190575706.jpg?param=130y130",
  neteaseId: "34464647"

},

{
  name: "AR刘夫阳",
  fans: "37.2万",
  lat: 22.99, lng: 113.29,
  avatar: "https://p1.music.126.net/bgGGRnbZ1pj0AD640qRgog==/109951165525342459.jpg?param=130y130",
  neteaseId: "12002184"
},
{
  name: "绵阳STAR",
  fans: "5.9万",
  lat: 31.51, lng: 104.73,
  avatar: "https://p1.music.126.net/a5vFzWtsfYRJC3qJ5HOSrw==/109951172961854880.jpg?param=130y130",
  neteaseId: "49800238"
},

{
  name: "沧桑Cang333",
  fans: "27.2万",
  lat: 23.50, lng: 116.62,
  avatar: "https://p2.music.126.net/BrccP5C5jef1lJ-kNqqbqg==/109951172533132128.jpg?param=130y130",
  neteaseId: "37058226"
},
{
  name: "极品贵公子",
  fans: "9.9万",
  lat: 25.97, lng: 119.38,
  avatar: "https://p1.music.126.net/0ulhlQhO44wQB4Vg8Zcg1Q==/109951172481109650.jpg?param=130y130",
  neteaseId: "32719707"
},
{
  name: "Ash-1",
  fans: "5.2万",
  lat: 30.66, lng: 104.19,
  avatar: "https://p2.music.126.net/JdzKZLUiIe9bGzYaKRtxtQ==/109951169996481374.jpg?param=130y130",
  neteaseId: "12328044"
},
{
  name: "Bsh-1",
  fans: "5.6万",
  lat: 28.73, lng: 105.07,
  avatar: "https://p1.music.126.net/sXcbN0IF900_3DOtSzdnAw==/109951174108348710.jpg?param=130y130",
  neteaseId: "59801596"
},
{
  name: "康熙",
  fans: "27.7万",
  lat: 37.81, lng: 112.58,
  avatar: "https://p1.music.126.net/dqN2jBLTvuKPAvPLDQyl4A==/109951172649188330.jpg?param=130y130",
  neteaseId: "12875936"
},
{
  name: "FOX胡天渝",
  fans: "129.7万",
  lat: 43.94, lng: 81.27,
  avatar: "https://p2.music.126.net/Mt8uh6qbwM_mfCzZZEJ9WQ==/109951173554856317.jpg?param=130y130",
  neteaseId: "1199064"
},
{
  name: "谟西Mercy",
  fans: "20.7万",
  lat: 34.27	, lng: 108.95,
  avatar: "https://p2.music.126.net/ccYHzSzddwHInJNYxyNLxg==/109951167851433396.jpg?param=130y130",
  neteaseId: "12200580"
},
{
  name: "Athree",
  fans: "33.5万",
  lat: 44.85, lng: 82.05,
  avatar: "https://p2.music.126.net/4_QmFLuuquf4bHK5JC7XRA==/109951172702859432.jpg?param=130y130",
  neteaseId: "1087200",
desc:"「新说唱2024」季军"
},
{
  name: "TangoZ",
  fans: "18.3万",
  lat: 30.27, lng: 120.21,
  avatar: "https://p2.music.126.net/S7_edj51AQi2ASvHCQjERA==/109951163090374861.jpg?param=130y130",
  neteaseId: "12967449"
},
{
  name: "Lambert凌杰",
  fans: "76.2万",
  lat: 31.98, lng: 120.90,
  avatar: "https://p1.music.126.net/OKoz5LBY1s4EC3dHFM2hUg==/109951167383272603.jpg?param=130y130",
  neteaseId: "12260203"
},
{
  name: "Landuo懒惰",
  fans: "5.3万",
  lat: 39.82, lng: 116.41,
  avatar: "https://p1.music.126.net/FwboPcpgt3bUgFt4NpEL-A==/109951170036233244.jpg?param=130y130",
  neteaseId: "12554787",
desc:"「说唱新世代」冠军"

},
{
  name: "斯威特MCSWEET",
  fans: "20.4万",
  lat: 39.95, lng: 116.53,
  avatar: "https://p2.music.126.net/k34HCoMq2Al0BzSaLynZjA==/109951163872002736.jpg?param=130y130",
  neteaseId: "12198789"
},
{
  name: "陈近南",
  fans: "20.4万",
  lat: 43.84, lng: 126.56,
  avatar: "https://p2.music.126.net/e9JkW1FkyamYJ6olp_CEtg==/109951168710717496.jpg?param=130y130",
  neteaseId: "12292307"
},
{
  name: "圣代",
  fans: "21.0万",
  lat: 34.25, lng: 117.23,
  avatar: "https://p2.music.126.net/rVxT0Yb2fT91ZGn7bgB_-w==/109951171946917379.jpg?param=130y130",
  neteaseId: "12564922"
},
        {
  name: "贾真Jahgen",
  fans: "3.8万",
  lat: 31.37, lng: 120.97,
  avatar: "https://p1.music.126.net/eovd5P1oOiUTqTP30ERLPA==/109951174061354222.jpg?param=130y130",
  neteaseId: "55315624"
},
{
  name: "Alyway",
  fans: "4.9万",
  lat:43.95 , lng:81.9 ,
  avatar: "https://p1.music.126.net/pBkBrm_uAfFWPajuss2wWw==/109951174090934546.jpg?param=130y130",
  neteaseId: "52891211"
},
{
  name: "迪诺哥",
  fans: "4.1万",
  lat: 44.30, lng: 86.05,
  avatar: "https://p1.music.126.net/QFiggc2dGSIHmrGg_gO6WA==/109951172150946312.jpg?param=130y130",
  neteaseId: "53597603"
},
{
  name: "skiboyvv",
  fans: "3.4万",
  lat:38.49 , lng:106.23 ,
  avatar: "https://p1.music.126.net/PkHabhdc8DTG5MNnk2YeNg==/109951173531184468.jpg?param=130y130",
  neteaseId: "34146331"
},
{
  name: "Adam Ocean",
  fans: "3.1万",
  lat: 30.76, lng: 104.14,
  avatar: "https://p2.music.126.net/9IYJj2JfE-7eB-b7jifMpQ==/109951172195290873.jpg?param=130y130",
  neteaseId: "50973279"
},
{
  name: "DD Ma Shawty",
  fans: "4.6万",
  lat: 31.75, lng:117.20 ,
  avatar: "https://p2.music.126.net/rgB254GED00pwR4vk4_Psg==/109951173970655484.jpg?param=130y130",
  neteaseId: "94753015"
},
{
  name: "jackzebra",
  fans: "4.3万",
  lat:31.18 , lng: 121.61,
  avatar: "https://p2.music.126.net/7vl_QO121gaeMAja-Y2CCg==/109951173362347543.jpg?param=130y130",
  neteaseId: "34364251"
},
{
  name: "SEBii",
  fans: "3.8万",
  lat: 31.06, lng:121.43 ,
  avatar: "https://p1.music.126.net/4g4e4vfoI6iqq9C8YJhLlw==/109951170980610044.jpg?param=130y130",
  neteaseId: "32055655"
},
{
  name: "北星tec9",
  fans: "3.5万",
  lat:30.79 , lng:104.12 ,
  avatar: "https://p2.music.126.net/40N_HpijmYqp5iil1wHqPw==/109951173652058183.jpg?param=130y130",
  neteaseId: "99895165"
},
{
  name: "DiorGoFlex",
  fans: "3.8万",
  lat: 31.47, lng: 104.68,
  avatar: "https://p2.music.126.net/ZpzlvD9ffMjH1s5m6T5T-w==/109951168975273804.jpg?param=130y130",
  neteaseId: "28869014"
},
{
  name: "REGI陈彦希",
  fans: "3.4万",
  lat: 29.60, lng: 106.49,
  avatar: "https://p1.music.126.net/pblzVK6uCs0Nea1BS6_sqQ==/109951174102354610.jpg?param=130y130",
  neteaseId: "14713124"
},
        {
  name: "Gummy B",
  fans: "1.2万",
  lat: 25.09, lng: 121.48,
  avatar: "https://p1.music.126.net/5rrs9GVDAuqSQn3s3w7FUQ==/109951172144211466.jpg?param=130y130",
  neteaseId: "35772719"
},
{
  name: "OuttaWave",
  fans: "3.1万",
  lat:45.73 , lng:126.59 ,
  avatar: "https://p1.music.126.net/TAJqdTIl6U6GRfJYvl-zXA==/109951172915496437.jpg?param=130y130",
  neteaseId: "53483506"
},
{
  name: "艾洛樱Aluvin",
  fans: "3.2万",
  lat:45.13 , lng:124.82 ,
  avatar: "https://p2.music.126.net/umS5UJWPTzWbdWu0iH2dyA==/109951172511780655.jpg?param=130y130",
  neteaseId: "53100043"
},
{
  name: "Rich4ever",
  fans: "3.3万",
  lat:29.70 , lng:107.39 ,
  avatar: "https://p1.music.126.net/SuNkp14QBUPpsDPNCxbUNg==/109951173955859647.jpg?param=130y130",
  neteaseId: "47603179"
},
{
  name: "弗洛·文尔",
  fans: "3.0万",
  lat:29.63 , lng:106.58 ,
  avatar: "https://p1.music.126.net/iT3v4uabu_w_56wydPKhpA==/109951173792694044.jpg?param=130y130",
  neteaseId: "48982684"
},
{
  name: "诺米么Lodmemo",
  fans: "51.4万",
  lat:28.33 , lng:103.13 ,
  avatar: "https://p1.music.126.net/nIRGubjaaxDZAafVmueOfA==/109951173215589970.jpg?param=130y130",
  neteaseId: "37343937"
},
{
  name: "88LIEN",
  fans: "4.6万",
  lat:22.71 , lng:114.02 ,
  avatar: "https://p2.music.126.net/BRxQfc9NEQrBXThUb3Yq8A==/109951172078296263.jpg?param=130y130",
  neteaseId: "12351258"
},
{
  name: "Chalky Wong",
  fans: "1.8万",
  lat:22.63 , lng:113.82 ,
  avatar: "https://p2.music.126.net/OO3mGWNd_cFLC4jjGpHEfA==/109951173625968316.jpg?param=130y130",
  neteaseId: "12704500"
},
{
  name: "PearBae小梨",
  fans: "4.0万",
  lat:46.59 , lng:125.12 ,
  avatar: "https://p2.music.126.net/-KybQK14Grvidrv7_LA3Dw==/109951173565699456.jpg?param=130y130",
  neteaseId: "32934943"
},
{
  name: "DANNY K",
  fans: "2.6万",
  lat:32.50 , lng:80.11 ,
  avatar: "https://p1.music.126.net/S7AcoltT1w2c5Dm5KHPJwA==/109951172929764320.jpg?param=130y130",
  neteaseId: "13200392"
},
{
  name: "FEEEleven",
  fans: "4.9万",
  lat:47.85 , lng:88.14 ,
  avatar: "https://p2.music.126.net/xvfnuL9KMeoDLoy_WsVHAg==/109951170751312289.jpg?param=130y130",
  neteaseId: "13701382"
},
{
  name: "EINK",
  fans: "6.5万",
  lat:43.77 , lng:87.48 ,
  avatar: "https://p2.music.126.net/8mJ1dyHXWfbKVqSTZHJAjQ==/109951169206226919.jpg?param=130y130",
  neteaseId: "12905307"
},

{
  name: "1CEKary艾斯凯瑞",
  fans: "3.7万",
  lat:23.47 , lng:116.77 ,
  avatar: "https://p1.music.126.net/QLdG1UlZp-UJ_ZgyGIYEtg==/109951173354476396.jpg?param=130y130",
  neteaseId: "35954968"
},
{
  name: "MacDiego迪椰果",
  fans: "1.3万",
  lat: 45.58, lng: 84.89,
  avatar: "https://p2.music.126.net/Jjyk5onG7V_TD8gJmntmdQ==/109951174093288541.jpg?param=130y130",
  neteaseId: "51498764"
},
{
  name: "赛文凯",
  fans: "2.6万",
  lat: 31.35, lng: 118.43,
  avatar: "https://p2.music.126.net/I9_irr69nKCvjYfuR3UxRw==/109951172104612287.jpg?param=130y130",
  neteaseId: "34794119"
},
{
  name: "Starling8",
  fans: "13.5万",
  lat: 28.45, lng: 117.95,
  avatar: "https://p2.music.126.net/9vSS6aKv4tkdoCj5pEHG1A==/109951171490232518.jpg?param=130y130",
  neteaseId: "36772893"
},

{
  name: "揽小",
  fans: "1.1万",
  lat: 23.02, lng: 113.75,
  avatar: "https://p1.music.126.net/iNYpLMswZBSoq-2UImIFgA==/109951173949455257.jpg?param=130y130",
  neteaseId: "97659298"
},
{
  name: "李棒棒Muti",
  fans: "16.4万",
  lat: 39.23, lng: 117.15,
  avatar: "https://p2.music.126.net/h7IS0jczNFHGTJIKMq3gVg==/109951162975661893.jpg?param=130y130",
  neteaseId: "12027194"
},
{
  name: "王波",
  fans: "1.9万",
  lat: 39.79, lng: 116.55,
  avatar: "https://p1.music.126.net/QyAEuSzTV9AtIKo8ZDutxQ==/109951167893536897.jpg?param=130y130",
  neteaseId: "5610"
},

{
  name: "凶狠凯蒂",
  fans: "3.1万",
  lat: 31.99, lng: 120.28,
  avatar: "https://p1.music.126.net/ZLAPfRFsulBEgqJvK9btBA==/109951168506785477.jpg?param=130y130",
  neteaseId: "51638660"
},
{
  name: "德吉老爷",
  fans: "10.4万",
  lat: 33.00, lng: 97.01,
  avatar: "https://p1.music.126.net/aNE2WkXgbG_V5WtZKuwbxw==/109951168959525376.jpg?param=130y130",
  neteaseId: "30129493"
},

{
  name: "TrickYzb",
  fans: "1.1万",
  lat: 27.09, lng: 114.97,
  avatar: "https://p1.music.126.net/JgCxtEKo2-JBrqIlRpWRAg==/109951172677658420.jpg?param=130y130",
  neteaseId: "32139022"
},
{
  name: "龙井说唱 孙旭",
  fans: "3.0万",
  lat: 39.77, lng: 116.34,
  avatar: "https://p1.music.126.net/Dq9NOicyfqCuf4SgPz8ICQ==/109951163380782241.jpg?param=130y130",
  neteaseId: "27726025"
},

{
  name: "瘦恒SoulHan",
  fans: "4.2万",
  lat: 23.18, lng: 113.38,
  avatar: "https://p2.music.126.net/752X9y3UnwXHvf3ZAIZA6A==/109951168989162396.jpg?param=130y130",
  neteaseId: "12003187"
},
{
  name: "无限火力",
  fans: "1.7万",
  lat: 22.82, lng: 108.31,
  avatar: "https://p2.music.126.net/lMktnlvIuaqgQWE2ypNcag==/109951164904023421.jpg?param=130y130",
  neteaseId: "29032310"
},

{
  name: "YTH Chopie",
  fans: "5.7万",
  lat: 29.65, lng: 91.16,
  avatar: "https://p2.music.126.net/gqzpSXcWVv9z2YcdbLRpQQ==/109951170220754669.jpg?param=130y130",
  neteaseId: "37343079"
},

{
  name: "Cloud9",
  fans: "7.1万",
  lat: 30.52, lng: 114.34,
  avatar: "https://p2.music.126.net/QGFQ9q9hKQMDAxIBflmG_A==/109951171354221372.jpg?param=130y130",
  neteaseId: "36927272"
},
{
  name: "海洋Bo",
  fans: "99.7万",
  lat: 36.67, lng: 117.00,
  avatar: "https://p1.music.126.net/YXC1dKYtoYeNODtOVtI0Vw==/109951169955219117.jpg?param=130y130",
  neteaseId: "36985903"
},
{
  name: "钟欣cent3e",
  fans: "15.6万",
  lat: 29.62, lng: 103.73,
  avatar: "https://p2.music.126.net/HywZ2BUHJBNgj2qqBJ8FDg==/109951170095669420.jpg?param=130y130",
  neteaseId: "12663194"
},
{
  name: "MULA SAKEE",
  fans: "45.3万",
  lat: 30.53, lng: 105.60,
  avatar: "https://p1.music.126.net/_a8e2BhWCxV7kYaUBU_l2Q==/109951173489955335.jpg?param=130y130",
  neteaseId: "14925064",
collaborators: [
    { name: "TOYOKI"},{ name: "KIV"},{ name: "THOME"},{ name: "PSY.P"},{ name: "KenRobb"},{ name: "kkluv"},{ name: "UDIGG"},{ name: "KnowKnow"},{ name: "离合"},{ name: "APMOZART"},{ name: "谢帝"},{ name: "CashTTrippy"},{ name: "Melo"}
  ]

},

{
  name: "Subs张毅成",
  fans: "18.8万",
  lat: 31.81, lng: 119.97,
  avatar: "https://p1.music.126.net/l0CCpYZXpYiOwBa9jTUBlA==/109951169473968766.jpg?param=130y130",
  neteaseId: "13027202",
desc:"「说唱新世代」亚军"

},
{
  name: "沙一汀EL",
  fans: "221.2万",
  lat: 39.60, lng: 109.79,
  avatar: "https://p1.music.126.net/uoZCzadyd_0_TACb5gClRQ==/109951169875390584.jpg?param=130y130",
  neteaseId: "31561897",
desc:"「说唱新世代」季军"

},
{
  name: "JD",
  fans: "11.9万",
  lat: 31.56, lng: 120.33,
  avatar: "https://p1.music.126.net/QAu1omQuvdEt5tLnWFJz8A==/109951168708024807.jpg?param=130y130",
  neteaseId: "13113369",
desc:"「说唱听我的第一季」冠军"

},

{
  name: "Ayo97",
  fans: "24.5万",
  lat: 19.99, lng: 110.30,
  avatar: "https://p2.music.126.net/tloAotE7NBVSvW6yg9Y1Kw==/109951164019356153.jpg?param=130y130",
  neteaseId: "12287118"
},
{
  name: "小青龙",
  fans: "19.9万",
  lat: 27.49, lng: 103.77,
  avatar: "https://p2.music.126.net/XC4DE8jwBdxyfXnHuiNzjQ==/109951165774669611.jpg?param=130y130",
  neteaseId: "12199576"
},
{
  name: "Haysen郑景曦",
  fans: "19.9万",
  lat: 22.37, lng: 114.12,
  avatar: "https://p1.music.126.net/LNRgZ3JYeGKWjXkCsEIINw==/109951173457964945.jpg?param=130y130",
  neteaseId: "33436148"
},

        {
  name: "艾里克",
  fans: "3.6万",
  lat: 42.90, lng: 129.50,
  avatar: "https://p1.music.126.net/oomLpWUf8QkzTw4sBRjl_g==/109951173819229323.jpg?param=130y130",
  neteaseId: "28182632"
},
        {
  name: "曲甲",
  fans: "34.7万",
  lat: 30.05, lng: 101.96,
  avatar: "https://p1.music.126.net/U9smRrb0E8mQ5_ngsk1JGQ==/109951173415689963.jpg?param=130y130",
  neteaseId: "31062035"
},
        
{
  name: "FENDIGHEE RICCH",
  fans: "2.9万",
  lat: 30.71, lng: 103.93,
  avatar: "https://p2.music.126.net/dZ4aieOzY-I8ydmFIuEOKA==/109951172673546624.jpg?param=130y130",
  neteaseId: "12022040"
},
{
  name: "TSP安琪",
  fans: "1.8万",
  lat: 30.73, lng: 104.22,
  avatar: "https://p1.music.126.net/IY9b3763lJErFQS1AIOLLQ==/109951169975105172.jpg?param=130y130",
  neteaseId: "12078093"
},
{
  name: "UPNEVERDOWN",
  fans: "2.5万",
  lat: 28.31, lng: 113.01,
  avatar: "https://p1.music.126.net/7mSni58uNoCnAJzHa6bh6w==/109951168265422315.jpg?param=130y130",
  neteaseId: "30003901"
},

{
  name: "卦者灵风",
  fans: "104.9万",
  lat: 37.54, lng: 121.40,
  avatar: "https://p2.music.126.net/vvVUTwieeDftSTQLyDCTFQ==/109951173622826811.jpg?param=130y130",
  neteaseId: "12498266"
},

{
  name: "王澳楠EVE",
  fans: "19.3万",
  lat: 22.63, lng: 114.03,
  avatar: "https://p2.music.126.net/MoadrKYa0_jdnXe_3oNbOg==/109951167171028086.jpg?param=130y130",
  neteaseId: "12968787"
},

{
  name: "新秀",
  fans: "33.5万",
  lat: 25.60, lng: 100.22,
  avatar: "https://p2.music.126.net/NOjxF7SX_S-gBfyOgtcCBQ==/109951169761411398.jpg?param=130y130",
  neteaseId: "12357157",
desc:"「新说唱2024」亚军"

},
        {
  name: "BroFA",
  fans: "2.4万",
  lat:30.81 , lng:108.38 ,
  avatar: "https://p1.music.126.net/uHtlo11ABdzaoSgw0N3S7Q==/109951173762386540.jpg?param=130y130",
  neteaseId: "12466885"
},

{
  name: "杨布拉德",
  fans: "21.6万",
  lat: 39.90, lng: 116.50,
  avatar: "https://p2.music.126.net/Wq22qIX8hJDHe1we6Q_VGA==/109951173996681483.jpg?param=130y130",
  neteaseId: "12923031"
},
{
  name: "Jony J",
  fans: "368.5万",
  lat: 26.05, lng: 119.24,
  avatar: "https://p2.music.126.net/W1LehYLdq0UjvZ2rl3Wk0Q==/1383185640161008.jpg?param=130y130",
  neteaseId: "784257"
},
{
  name: "无敌男孩",
  fans: "0.7万",
  lat: 36.10, lng: 111.50,
  avatar: "https://p1.music.126.net/rXoEDKNML876C-yfymv9ZQ==/109951173998942096.jpg?param=130y130",
  neteaseId: "30544665"
},
{
  name: "Maikon Flocka Flame",
  fans: "4.6万",
  lat: 29.57, lng: 106.46,
  avatar: "https://p2.music.126.net/zzCwuP4o3keI8c10qWd8Dw==/109951170607700392.jpg?param=130y130",
  neteaseId: "12051031"
},
{
  name: "Yaka",
  fans: "5.1万",
  lat:31.04 , lng: 121.52,
  avatar: "https://p1.music.126.net/YE7dTegxQlBYHl_bSQpuiw==/109951172280042261.jpg?param=130y130",
  neteaseId: "32992079"
},
{
  name: "XMASwu(吴骜)",
  fans: "76.3万",
  lat:31.01 , lng: 118.74,
  avatar: "https://p2.music.126.net/sXmkItrAPnmUhffo8k2-gg==/109951173623316431.jpg?param=130y130",
  neteaseId: "31309410"
},
{
  name: "Sleepy Cat",
  fans: "4.9万",
  lat:30.80 , lng: 104.00,
  avatar: "https://p2.music.126.net/QU0Q55iLPtDbeudUJKg34w==/109951166683576260.jpg?param=130y130",
  neteaseId: "13796823"
},
{
  name: "Spylent",
  fans: "115.7万",
  lat:38.92 , lng: 121.59,
  avatar: "https://p1.music.126.net/JrffoAOTiQqOrOkjKQA-dg==/109951164612126790.jpg?param=130y130",
  neteaseId: "34055135"
},
{
  name: "CHILLSENONE",
  fans: "1.9万",
  lat:28.27 , lng: 113.13,
  avatar: "https://p2.music.126.net/o9NTejv1zL_cSrsQUJ_x3g==/109951173919608835.jpg?param=130y130",
  neteaseId: "36456805"
},
{
  name: "朝三",
  fans: "2.3万",
  lat:34.25 , lng: 109.09,
  avatar: "https://p1.music.126.net/t4knNMzIWr9KS_upmt-i2w==/109951170325356589.jpg?param=130y130",
  neteaseId: "47694967"
},

{
  name: "KAFE-HU咖啡胡",
  fans: "33.7万",
  lat: 31.66, lng: 104.70,
  avatar: "https://p2.music.126.net/P35k5rL2dX-DACMVbObTtg==/109951173846497266.jpg?param=130y130",
  neteaseId: "12024274"
},

{
  name: "李外LilWine",
  fans: "2.7万",
  lat: 29.49, lng: 106.56,
  avatar: "https://p1.music.126.net/OAB9zs7SpdhBvJbx5bgVMg==/109951172592999956.jpg?param=130y130",
  neteaseId: "49745789"
},
{
  name: "斑比Bambii",
  fans: "11.2万",
  lat: 30.56, lng: 104.14,
  avatar: "https://p1.music.126.net/cUHS3RKse9s6sGDaqy4ERw==/109951171022834572.jpg?param=130y130",
  neteaseId: "32712412"
},

        {
  name: "Young Cash Jason",
  fans: "4.3万",
  lat: 43.84, lng: 87.68,
  avatar: "https://p2.music.126.net/AKTs3vgQSjamix1J09AD1Q==/109951173651478233.jpg?param=130y130",
  neteaseId: "37125681"
},
{
  name: "满舒克",
  fans: "141.8万",
  lat: 25.50, lng: 103.80,
  avatar: "https://p2.music.126.net/ZY6pRcKLqzMNbGTrbWb_6Q==/109951167525919164.jpg?param=130y130",
  neteaseId: "188141"
},
{
  name: "柴行敏",
  fans: "9.8万",
  lat: 34.74, lng: 113.73,
  avatar: "https://p2.music.126.net/G-daWh5q4xIN5ZR9uz4SYg==/109951170951468699.jpg?param=130y130",
  neteaseId: "55701379"
},
{
  name: "KnowKnow",
  fans: "114.9万",
  lat: 32.05, lng: 118.78,
  avatar: "https://p1.music.126.net/EI-opdeBAR11phjG14fwbg==/109951172883193186.jpg?param=130y130",
  neteaseId: "27868624",
collaborators: [
    { name: "PSY.P"},{ name: "Melo"},{ name: "Ty."},{ name: "李尔新"},{ name: "Mengzi"},{ name: "王以太"},{ name: "Sleepy Cat"},{ name: "邓典果DDG"},{ name: "AnsrJ"},{ name: "MC HotDog热狗"},{ name: "THOME"},{ name: "BranTB白景屹"},{ name: "GAI周延"},{ name: "那奇沃夫"},{ name: "TSP安琪"},{ name: "艾志恒Asen"},{ name: "APMOZART"},{ name: "早安"},{ name: "AR刘夫阳"},{ name: "艾热AIR"},{ name: "yilun!"},{ name: "国蛋"},{ name: "弹壳Danko"},{ name: "MULA SAKEE"},{ name: "Capper"}  ]
},
{
  name: "国蛋",
  fans: "12.5万",
  lat: 23.16, lng: 120.18,
  avatar: "https://p2.music.126.net/60Tv_CEHz4kQZvfmAnoI8g==/109951168311076026.jpg?param=130y130",
  neteaseId: "2947"
},
{
  name: "陈娴静",
  fans: "24.2万",
  lat: 25.06, lng: 121.53,
  avatar: "https://p2.music.126.net/ma6prd2ux0SAoR1S9M6x4w==/109951170542429056.jpg?param=130y130",
  neteaseId: "34876884"
},

{
  name: "Ty.",
  fans: "74.8万",
  lat: 30.68, lng: 104.06,
  avatar: "https://p1.music.126.net/bQkoAJSN2mkUmDZDejF_Tg==/109951167060520225.jpg?param=130y130",
  neteaseId: "1086078"
},
{
  name: "delphia!",
  fans: "5.1万",
  lat: 22.55, lng: 114.05,
  avatar: "https://p2.music.126.net/lUZvby1uIMdP5AwpK3_lPQ==/109951172621130052.jpg?param=130y130",
  neteaseId: "13296078"
},

{
  name: "等一下就回家",
  fans: "45.3万",
  lat: 30.68, lng: 104.11,
  avatar: "https://p2.music.126.net/0RlaR-BpqnwJh7YJLYysTw==/109951173572504553.jpg?param=130y130",
  neteaseId: "13027753",
  desc:"「少年说唱企划」亚军"
},
{
  name: "刘悦spam-生番",
  fans: "14.5万",
  lat: 39.96, lng: 116.26,
  avatar: "https://p1.music.126.net/dDYxkxN9isY8p7kme2kJHw==/109951165928249224.jpg?param=130y130",
  neteaseId: "12283512"
},
{
  name: "asak藏羚羊",
  fans: "3.5万",
  lat: 35.31, lng: 113.92,
  avatar: "https://p1.music.126.net/aGimla-tt4XPSgBgGHXK-Q==/109951174038673103.jpg?param=130y130",
  neteaseId: "37126261"
},
{
  name: "林渝植Anoryz",
  fans: "8.4万",
  lat: 23.40, lng: 116.59,
  avatar: "https://p2.music.126.net/FC6Au2YWWcdOtkLPEqKPHg==/109951172514631713.jpg?param=130y130",
  neteaseId: "12258204"
},
{
  name: "昊昊HOHO",
  fans: "1.9万",
  lat: 29.45, lng: 106.47,
  avatar: "https://p1.music.126.net/Ywz7TkauPBFsJ-A5pUW8LQ==/109951165389873188.jpg?param=130y130",
  neteaseId: "12184254"
},
{
  name: "希介",
  fans: "1.8万",
  lat: 29.48, lng: 106.47,
  avatar: "https://p2.music.126.net/5KSKBUeQvsEH_6l9zCP6Kg==/109951173776740250.jpg?param=130y130",
  neteaseId: "12111129"
},

{
  name: "巴顿",
  fans: "18.6万",
  lat: 31.14, lng: 97.18,
  avatar: "https://p1.music.126.net/KFLwbD2pEmToumro02wQXg==/109951171993928047.jpg?param=130y130",
  neteaseId: "1078363"
},
{
  name: "儿几",
  fans: "1.0万",
  lat: 43.91, lng: 87.41,
  avatar: "https://p1.music.126.net/g-Qrh8QOKOHWFpRQeXD9bA==/109951171287420237.jpg?param=130y130",
  neteaseId: "12111238"
},

{
  name: "lil MILK",
  fans: "19.3万",
  lat: 39.83, lng: 116.26,
  avatar: "https://p2.music.126.net/7JwJPmk0TMI2dBHhL7RkVQ==/109951166311873088.jpg?param=130y130",
  neteaseId: "33762221",
desc:"「少年说唱企划」季军"

},
{
  name: "施鑫文月",
  fans: "10万",
  lat: 30.64, lng: 104.21,
  avatar: "https://p2.music.126.net/JpAoXIJzSoysCSx292ajFQ==/109951168382936506.jpg?param=130y130",
  neteaseId: "12565467"
},

{
  name: "Saber梁维嘉",
  fans: "9.9万",
  lat: 39.94, lng: 116.35,
  avatar: "https://p2.music.126.net/76OFF1vh7dTDEwO_hAWu8g==/109951163302893776.jpg?param=130y130",
  neteaseId: "12140048"
},
{
  name: "秃子2z",
  fans: "6.1万",
  lat: 40.01, lng: 116.47,
  avatar: "https://p2.music.126.net/-MSd8AnbpaTV2YGcG9bdHg==/109951170326192120.jpg?param=130y130",
  neteaseId: "12351071"
},{
  name: "黄云龙",
  fans: "2.5万",
  lat: 27.33, lng: 103.71,
  avatar: "https://p1.music.126.net/I30TrEOgmBsJiiZfls1nrg==/109951172013228959.jpg?param=130y130",
  neteaseId: "52807903"
},
{
  name: "夏之禹",
  fans: "25.5万",
  lat: 32.38, lng: 105.64,
  avatar: "https://p1.music.126.net/FlUzcyr0r08BkU7RXib7EA==/109951168604876072.jpg?param=130y130",
  neteaseId: "12206205"
},
{
  name: "Billionhappy",
  fans: "6.2万",
  lat: 32.64, lng: 117.01,
  avatar: "https://p1.music.126.net/ZvDg-bazTDpuXy5WWj9RUg==/109951169700242006.jpg?param=130y130",
  neteaseId: "32501012"
},

{
  name: "PSY.P",
  fans: "55.9万",
  lat: 30.70, lng: 104.04,
  avatar: "https://p1.music.126.net/n8mwO118TxzqsXG88ZtiTQ==/109951173712104888.jpg?param=130y130",
  neteaseId: "29303235"
},
{
  name: "Tlatre特雷西",
  fans: "14.9万",
  lat: 30.680, lng: 121.02,
  avatar: "https://p2.music.126.net/8CS4NFyBP_qvWK7cEh7JSQ==/109951173308393777.jpg?param=130y130",
  neteaseId: "34326822"
},
{
  name: "BOBBYNOPEACE",
  fans: "41.3万",
  lat: 30.59, lng: 104.16,
  avatar: "https://p1.music.126.net/yA8Yg7smOSUbPL68lqzMuQ==/109951173913716164.jpg?param=130y130",
  neteaseId: "48277407",
collaborators: [
    { name: "LSGCsikoriot"},{ name: "JinJiBeWater-隼"},{ name: "Rapeter"},{ name: "Uzzy"},{ name: "Dove鸽子"},{ name: "Lil Asian"},{ name: "迪诺哥"},{ name: "SABER徐天知"},{ name: "极品贵公子"},{ name: "CashTrippy"},{ name: "加木"},{ name: "八口8uck"},{ name: "康熙"},{ name: "杨和苏KeyNG"},{ name: "PearBae小梨"},{ name: "APMOZART"},{ name: "斑比Bambii"},{ name: "KenRobb"},{ name: "吕富贵"},{ name: "KKECHO"},{ name: "刀脚"},{ name: "Mengzi"},{ name: "黄云龙"},{ name: "88LIEN"},{ name: "KITO"},{ name: "Vansdaddy"},{ name: "贾真Jahgen"},{ name: "李欣颖"}  ]
},

{
  name: "MC脏脏",
  fans: "1.2万",
  lat: 24.86, lng: 102.82,
  avatar: "https://p1.music.126.net/7NAlTdcvzLZamRdKXUtmLw==/109951170550684183.jpg?param=130y130",
  neteaseId: "54318093"
},
{
  name: "God Øne",
  fans: "1.5万",
  lat: 22.68, lng: 120.51,
  avatar: "https://p2.music.126.net/sGX2h24ZFGCHWgSgqAOMpQ==/109951169909932760.jpg?param=130y130",
  neteaseId: "55228369"
},

{
  name: "AA",
  fans: "5.0万",
  lat: 30.50, lng: 114.13,
  avatar: "https://p1.music.126.net/6a_RkWcoHBJLQajxTd1Juw==/109951171877337331.jpg?param=130y130",
  neteaseId: "36519554"
},

{
  name: "宋岳庭",
  fans: "43.5万",
  lat: 25.00, lng: 121.49,
  avatar: "https://p1.music.126.net/kP7P7RA9NDcAYddZbDr9ng==/153931627905278.jpg?param=130y130",
  neteaseId: "4936"
},

{
  name: "直火帮Feezy",
  fans: "10.4万",
  lat: 31.20, lng: 121.37,
  avatar: "https://p2.music.126.net/eTt1JTRoGECxJr5q1HOILQ==/109951172145007455.jpg?param=130y130",
  neteaseId: "30000024"
},

{
  name: "谢帝",
  fans: "91.4万",
  lat: 30.72, lng: 104.06,
  avatar: "https://p1.music.126.net/ETplhG5gXynEQoLQkRhHXg==/109951171813624638.jpg?param=130y130",
  neteaseId: "847107",
collaborators: [
    { name: "GAI周延"},{ name: "ljz329"},{ name: "建坤YOUNG"},{ name: "王以太"},{ name: "KnowKnow"},{ name: "Melo"},{ name: "李尔新"},{ name: "Mengzi"},{ name: "Sleepy Cat"},{ name: "PSY.P"},{ name: "Rich4ever"},{ name: "诺米么Lodmemo"},{ name: "AnsrJ"},{ name: "AR刘夫阳"},{ name: "华云龙KLE"},{ name: "OneOne"},{ name: "艾志恒Asen"},{ name: "SASIOVERLXRD"},{ name: "雾都L4WUDU"},{ name: "连麻Swimming"},{ name: "APMOZART"},{ name: "邓典果DDG"},{ name: "Ty."},{ name: "刀脚"},{ name: "王齐铭WatchMe"},{ name: "弗洛·文尔"},{ name: "迪诺哥"},{ name: "Player J"},{ name: "步步高先生"},{ name: "阿牛"},{ name: "Akemen杀"},{ name: "斑比Bambii"}  ]
},
{
  name: "周乘羽",
  fans: "5.5万",
  lat: 29.86, lng: 121.59,
  avatar: "https://p1.music.126.net/7HYUGjbQHQ__tzjh352bCg==/109951170063220002.jpg?param=130y130",
  neteaseId: "46356020",
aliases: ["Jesse Margiela", "杰西马吉拉"]
},
{
  name: "SABER徐天知",
  fans: "4.8万",
  lat: 34.61, lng: 112.45,
  avatar: "https://p1.music.126.net/BH58VS8EKrQ6D47spptGEA==/109951170700254792.jpg?param=130y130",
  neteaseId: "50040751"
},
{
  name: "吕富贵",
  fans: "4.5万",
  lat: 31.43, lng: 104.73,
  avatar: "https://p1.music.126.net/H8nPm8xrQQ3zNdE6WZZZnQ==/109951172555394362.jpg?param=130y130",
  neteaseId: "30285305"
},
{
  name: "二流",
  fans: "0.8万",
  lat: 30.77, lng: 103.94,
  avatar: "https://p2.music.126.net/spdBm4Bsv3144mup8zrqiA==/109951172898228353.jpg?param=130y130",
  neteaseId: "46314082"
},
{
  name: "ProN4c",
  fans: "1.8万",
  lat: 30.68, lng: 104.21,
  avatar: "https://p1.music.126.net/Hc3fYdvoYhuTIO1_LgDXZQ==/109951172007588964.jpg?param=130y130",
  neteaseId: "13520444"
},
{
  name: "3Bangz",
  fans: "12.4万",
  lat: 23.24, lng: 113.25,
  avatar: "https://p2.music.126.net/ceoGOKZxh96n7T6lsXBCZQ==/109951173791561078.jpg?param=130y130",
  neteaseId: "977173"
},
{
  name: "李欣颖",
  fans: "1.0万",
  lat: 30.76, lng: 104.20,
  avatar: "https://p1.music.126.net/ig_MnqtHXcPD3x7rLUNgxA==/109951174102094118.jpg?param=130y130",
  neteaseId: "28863649"
},
{
  name: "ANGPANG",
  fans: "1.3万",
  lat: 33.64, lng: 116.97,
  avatar: "https://p1.music.126.net/v2LDHWs0WBJNl5SU6-qsyw==/109951168900449476.jpg?param=130y130",
  neteaseId: "48045772"
},
{
  name: "八口8uck",
  fans: "7.9万",
  lat: 24.51, lng: 118.13,
  avatar: "https://p1.music.126.net/6CztYWPnruiLGtQGwPb-OA==/109951169865386487.jpg?param=130y130",
  neteaseId: "14807229"
},
{
  name: "C2C",
  fans: "1.2万",
  lat: 34.22, lng: 109.05,
  avatar: "https://p1.music.126.net/zItP-jkZK7mlsb_CY3DV7Q==/109951163045525486.jpg?param=130y130",
  neteaseId: "12765265"
},

{
  name: "阿拉梅",
  fans: "5.7万",
  lat: 30.69, lng: 103.91,
  avatar: "https://p1.music.126.net/Wjd5-_iiRyyMUzKudBWKcw==/109951167433663315.jpg?param=130y130",
  neteaseId: "12606255"
},
{
  name: "BABYKUSH",
  fans: "2.7万",
  lat: 39.74, lng: 76.20,
  avatar: "https://p2.music.126.net/ChBt0SAvzNn2s6KGaRKm-A==/109951171376911035.jpg?param=130y130",
  neteaseId: "12360120"
},
{
  name: "梁淞Tsong",
  fans: "16.9万",
  lat: 30.66, lng: 114.28,
  avatar: "https://p1.music.126.net/ftGaIJgyBrGMI9G6kZ6uxQ==/109951163335350546.jpg?param=130y130",
  neteaseId: "12134076"
},

{
  name: "Arthurnevawakes",
  fans: "3.2万",
  lat: 22.61, lng: 113.91,
  avatar: "https://p1.music.126.net/Qi81IQBtiNuFVcbWW-uURA==/109951173191900809.jpg?param=130y130",
  neteaseId: "49439822"
},

{
  name: "邓典果DDG",
  fans: "38.9万",
  lat: 30.59, lng: 104.00,
  avatar: "https://p1.music.126.net/GLgV_NbKYJ8fLOUr39Cicg==/109951168477255172.jpg?param=130y130",
  neteaseId: "12965215",
desc:"「新说唱2025」亚军"
},
{
  name: "建坤YOUNG",
  fans: "43.8万",
  lat: 30.75, lng: 104.08,
  avatar: "https://p1.music.126.net/VPx1l33WDisBeejsJSYlGg==/109951172355839879.jpg?param=130y130",
  neteaseId: "12037117"
},
{
  name: "KenRobb",
  fans: "22.5万",
  lat: 30.69, lng: 104.15,
  avatar: "https://p2.music.126.net/c5uvnFo5PW7r3QSPkeXx1g==/109951172355663423.jpg?param=130y130",
  neteaseId: "12529780",
  collaborators: [
    { name: "张方钊"},{ name: "Uzzy"},{ name: "APMOZART"},{ name: "Ash-1"},{ name: "BOBBYNOPEACE"},{ name: "mac ova seas"},{ name: "MULA SAKEE"},{ name: "Lil Asian"},{ name: "GALI"},{ name: "Toryondacloud"},{ name: "LSGCsikoriot"},{ name: "88LIEN"},{ name: "狂兆北"},{ name: "CashTrippy"}
  ]
},
{
  name: "CashTrippy",
  fans: "38.6万",
  lat: 26.87, lng: 100.23,
  avatar: "https://p1.music.126.net/kL7d-0ehorNXgSa8tznQGg==/109951172338582374.jpg?param=130y130",
  neteaseId: "33937972"
},
 {
  name: "华云龙KLE",
  fans: "18.2万",
  lat: 34.78, lng: 117.29,
  avatar: "https://p1.music.126.net/uud8eP712UuyHhDR3HtGYg==/109951172821942552.jpg?param=130y130",
  neteaseId: "33435403"
},
 {
  name: "BlackTheDevil",
  fans: "4.2万",
  lat: 32.16, lng: 118.73,
  avatar: "https://p2.music.126.net/2fBrRCjXBSrhPPeLVPV1tA==/109951171895299197.jpg?param=130y130",
  neteaseId: "32977298"
},
{
  name: "SeanT肖恩恩",
  fans: "8.7万",
  lat: 39.99, lng: 116.23,
  avatar: "https://p1.music.126.net/DTyGsuHmAt6Fv9qLHwjkRw==/109951167147955622.jpg?param=130y130",
  neteaseId: "12071015"
},
{
  name: "徐真真",
  fans: "16.7万",
  lat: 23.05, lng: 113.33,
  avatar: "https://p1.music.126.net/nxBYkCbe5FKouFFrCkynNA==/109951172726895102.jpg?param=130y130",
  neteaseId: "12094099"
},
{
  name: "Monovisa",
  fans: "0.9万",
  lat: 30.62, lng: 103.96,
  avatar: "https://p2.music.126.net/L2p4AWJwMpDuSCqhhq5ThA==/109951169291733089.jpg?param=130y130",
  neteaseId: "32436403"
},
{
  name: "黄建威",
  fans: "1.4万",
  lat: 23.01, lng: 114.41,
  avatar: "https://p2.music.126.net/Hb8WcnnZAS3stgRppfXRkA==/109951170130265514.jpg?param=130y130",
  neteaseId: "12329255"
},
{
  name: "离合",
  fans: "1.9万",
  lat: 22.67, lng: 114.11,
  avatar: "https://p1.music.126.net/nlvjRerJJlji7P1dDYgYkw==/109951169922880587.jpg?param=130y130",
  neteaseId: "34319290"
},
{
  name: "俞天时",
  fans: "18.8万",
  lat: 41.81, lng: 123.52,
  avatar: "https://p2.music.126.net/IMTBUcK6KCym_v5064W4hg==/109951173955478411.jpg?param=130y130",
  neteaseId: "12124013"
},

{
  name: "GALI",
  fans: "120.8万",
  lat: 31.23, lng: 121.49,
  avatar: "https://p2.music.126.net/YSda_aNO30ZGCsxoTgch8Q==/109951169463813274.jpg?param=130y130",
  neteaseId: "12127362",
desc:"「中国新说唱2020」季军",
collaborators: [
    { name: "Sean T肖恩恩"},{ name: "mac ova seas"},{ name: "李大奔BENZO"},{ name: "KenRobb"},{ name: "李佳隆"},{ name: "ICE杨长青"},{ name: "俞天时"},{ name: "BroFA"},{ name: "黄之仪Kyra Zilver"},{ name: "王以太"},{ name: "VaVa娃娃"},{ name: "V.O.B"},{ name: "KnowKnow"},{ name: "BrAnTB白景屹"},{ name: "刘炫廷"},{ name: "Capper"},{ name: "Rapeter"},{ name: "MC HotDog热狗"},{ name: "CHOCKEY有三"},{ name: "满舒克"},{ name: "谟西Mercy"},{ name: "LEGGO"},{ name: "三火flame"},{ name: "TizzyT"},{ name: "Tlatre特雷西"},{ name: "Nxmad诺曼德"},{ name: "离合"},{ name: "黄建威"},{ name: "Cee"},{ name: "艾志恒Asen"},{ name: "万妮达Vinida Weng"},{ name: "派克特"}
  ]

},
{
  name: "盛宇D-SHINE",
  fans: "81.5万",
  lat:28.17 , lng: 113.02,
  avatar: "https://p1.music.126.net/SUz_YVh0pA9wWmM1CXgdqg==/109951170040821218.jpg?param=130y130",
  neteaseId: "12605500",
desc:"「中国新说唱2019」季军"

},
{
  name: "泰格西",
  fans: "33.9万",
  lat:28.20 , lng: 112.97,
  avatar: "https://p2.music.126.net/xRGFy4uFy3c0ivSZWcJo7A==/109951173375707378.jpg?param=130y130",
  neteaseId: "52410166"
},
{
  name: "Capper",
  fans: "194.9万",
  lat:34.29 , lng: 108.85,
  avatar: "https://p2.music.126.net/jO2Eb9wSdS6hbc2UQK1Y8w==/109951172402665734.jpg?param=130y130",
  neteaseId: "12193174",
desc:"「少年说唱企划」冠军",
collaborators: [
    { name: "yilun!"},{ name: "CashTrippy"},{ name: "罗言"},{ name: "LEGGO"},{ name: "kkluv"},{ name: "TOYOKI"},{ name: "刘炫廷"},{ name: "GALI"},{ name: "TizzyT"},{ name: "YOUNG13DBABY"},{ name: "mac ova seas"},{ name: "MC HotDog热狗"},{ name: "万妮达Vinida Weng"},{ name: "PearBae小梨"},{ name: "lil MILK"},{ name: "满舒克"},{ name: "黄之仪Kyra Zilver"},{ name: "Melo"},{ name: "李大奔BENZO"},{ name: "SASIOVERLXRD"},{ name: "马思唯"},{ name: "盛宇D-SHINE"},{ name: "NINEONE#乃万"},{ name: "CREAM D"},{ name: "Billionhappy"},{ name: "离合"},{ name: "雾都L4WUDU"},{ name: "新秀"},{ name: "斑比Bambii"},{ name: "AThree"},{ name: "李佳隆"}
  ]


},
{
  name: "加木",
  fans: "130.4万",
  lat:31.23 , lng: 121.58,
  avatar: "https://p2.music.126.net/L0tacglZLODHeLoXFs2TWg==/109951172029543102.jpg?param=130y130",
  neteaseId: "49320722"
},
{
  name: "Swang多雷",
  fans: "21万",
  lat:43.85 , lng: 81.48,
  avatar: "https://p2.music.126.net/6cDjo0jA1ykZec05i5Vmpg==/109951171006459004.jpg?param=130y130",
  neteaseId: "12276665"
},
{
  name: "Louis 1520",
  fans: "3.9万",
  lat:34.35 , lng: 107.23,
  avatar: "https://p1.music.126.net/LjNKBfhC9lgK-YxICpnWaw==/109951174083307673.jpg?param=130y130",
  neteaseId: "27866110"
},
{
  name: "红手指",
  fans: "8.3万",
  lat:26.58 , lng: 106.72,
  avatar: "https://p2.music.126.net/in7q2VLKLUX7tmgQLDa6IA==/109951168677635056.jpg?param=130y130",
  neteaseId: "57187017"
},

{
  name: "MISTERK",
  fans: "24.6万",
  lat:39.86 , lng: 116.48,
  avatar: "https://p2.music.126.net/iO9_nkWMDVbqUfEy2-LcNw==/109951173777113938.jpg?param=130y130",
  neteaseId: "12256230"
},
{
  name: "河北吴孟达",
  fans: "9.5万",
  lat:37.98 , lng: 114.52,
  avatar: "https://p1.music.126.net/8PK5wiTX1_fq3FpinOxY9A==/109951172912077612.jpg?param=130y130",
  neteaseId: "12874853"
},
{
  name: "Yosko",
  fans: "1.8万",
  lat:38.11 , lng: 114.51,
  avatar: "https://p2.music.126.net/UwGkagnlITeDSIHp2-Rm5g==/109951169506709305.jpg?param=130y130",
  neteaseId: "12472471"
},
{
  name: "Kc",
  fans: "52.2万",
  lat:23.05 , lng: 113.41,
  avatar: "https://p2.music.126.net/qTZ4pVGRaExUPzCzyajAVA==/109951165837860957.jpg?param=130y130",
  neteaseId: "12193780",
 desc:"「说唱听我的第一季」亚军"

},
{
  name: "陆政廷Lil Jet",
  fans: "50.4万",
  lat:22.54 , lng: 113.92,
  avatar: "https://p1.music.126.net/tNdm9jZBtTHU-e0GMfwMhA==/109951169878856049.jpg?param=130y130",
  neteaseId: "12079066"
},
{
  name: "Akemen杀",
  fans: "5.2万",
  lat:26.41 , lng: 106.26,
  avatar: "https://p1.music.126.net/qR_NN4qSC3oU47nuGHm2mw==/109951173684109398.jpg?param=130y130",
  neteaseId: "46549449",
aliases: ["阿卡门"]
},
{
  name: "Uzzy",
  fans: "8.1万",
  lat:30.65 , lng: 107.76,
  avatar: "https://p1.music.126.net/S8wLPRtqkCKHKxCaFiuuHQ==/109951172563300735.jpg?param=130y130",
  neteaseId: "46921476"
},
{
  name: "DOMMIU",
  fans: "6.1万",
  lat:44.03 , lng: 125.02,
  avatar: "https://p2.music.126.net/uKg_WWTrAN3V-d2_xeQC1g==/109951174024423331.jpg?param=130y130",
  neteaseId: "62183661"
},

{
  name: "Buzzy",
  fans: "28.8万",
  lat:36.10 , lng: 120.38,
  avatar: "https://p1.music.126.net/9qyHwucenC3kPA8o6nDDaA==/109951172516510534.jpg?param=130y130",
  neteaseId: "12094558"
},
{
  name: "JarStick",
  fans: "16.6万",
  lat:30.66 , lng: 103.99,
  avatar: "https://p2.music.126.net/7cnJuPIYV1IWb9Jy0745Sw==/109951172356221390.jpg?param=130y130",
  neteaseId: "12092433"
},
{
  name: "FAMAS法玛斯",
  fans: "2.2万",
  lat:28.69 , lng: 115.89,
  avatar: "https://p2.music.126.net/lXuHzoraBlgrhY1nE5w3mw==/109951173254113891.jpg?param=130y130",
  neteaseId: "33910499"
},
{
  name: "nato",
  fans: "4.0万",
  lat:23.17 , lng: 113.31,
  avatar: "https://p1.music.126.net/vnWqVohptls5sF84G13NHQ==/109951171976776171.jpg?param=130y130",
  neteaseId: "55832201"
},

{
  name: "小精灵",
  fans: "52.9万",
  lat:30.75 , lng: 120.73,
  avatar: "https://p2.music.126.net/B3m-yvuVF_fXd9pS7VgUhQ==/109951164018724146.jpg?param=130y130",
  neteaseId: "12287129"
},
{
  name: "AnsrJ",
  fans: "23.9万",
  lat:30.58 , lng: 103.92,
  avatar: "https://p2.music.126.net/CFsa1E0KH2hv5MuQbun08A==/109951173200100403.jpg?param=130y130",
  neteaseId: "12288442"
},
{
  name: "卡力老虎",
  fans: "6.3万",
  lat:34.14 , lng: 108.92,
  avatar: "https://p2.music.126.net/etnJ3zmTQB4ajXNc_TgSaw==/109951173998104388.jpg?param=130y130",
  neteaseId: "12205952"
},
{
  name: "CREAM D",
  fans: "10.9万",
  lat:34.35 , lng: 108.94,
  avatar: "https://p1.music.126.net/FqRK5XNtIGzmi9fRpYjbFQ==/109951172185260359.jpg?param=130y130",
  neteaseId: "12193309"
},
{
  name: "TOYOKI",
  fans: "18.2万",
  lat:27.93 , lng: 102.21,
  avatar: "https://p2.music.126.net/wSEEW8kQ3j-c2N_U1ycfWQ==/109951173850256268.jpg?param=130y130",
  neteaseId: "12730273"
},
{
  name: "黄格雷",
  fans: "6.1万",
  lat:30.94 , lng: 118.70,
  avatar: "https://p1.music.126.net/BuhPveiHYex_X-92KcRhDg==/109951173813718836.jpg?param=130y130",
  neteaseId: "14116746"
},
{
  name: "BrAnTB白景屹",
  fans: "41.4万",
  lat:34.21 , lng: 108.82,
  avatar: "https://p2.music.126.net/Sr317x_cuFvlnyxajtjQ8Q==/109951169464498126.jpg?param=130y130",
  neteaseId: "12523451"
},
{
  name: "血男孩",
  fans: "5.4万",
  lat:39.87 , lng: 116.56,
  avatar: "https://p1.music.126.net/uHx37JX36NkXQj_rn6Xm3Q==/109951169516847974.jpg?param=130y130",
  neteaseId: "2103"
},
{
  name: "狂兆北",
  fans: "4.9万",
  lat:27.83 , lng: 99.71,
  avatar: "https://p1.music.126.net/YYl49Bg94sxfuqw4NQAL6w==/109951169379701293.jpg?param=130y130",
  neteaseId: "30223665"
},
{
  name: "兔男",
  fans: "2.4万",
  lat:34.14 , lng: 109.02,
  avatar: "https://p1.music.126.net/6Sej3edwLbn9EW4M9THK_A==/109951174093362685.jpg?param=130y130",
  neteaseId: "47372005"
},

{
  name: "孙八一",
  fans: "4.8万",
  lat:26.58 , lng: 107.97,
  avatar: "https://p2.music.126.net/o60GF39yMNCTmpKC8T-iHg==/109951166868548284.jpg?param=130y130",
  neteaseId: "1089111"
},
{
  name: "鬼卞",
  fans: "4.8万",
  lat:29.56 , lng: 106.60,
  avatar: "https://p2.music.126.net/b11OM83SPjsTn3jQgkKjCg==/109951171467213194.jpg?param=130y130",
  neteaseId: "1008034"
},

{
  name: "Lil Asian",
  fans: "13万",
  lat:29.52 , lng: 106.60,
  avatar: "https://p2.music.126.net/X7u05eURHRUPDJ9Osf2TRQ==/109951172325962977.jpg?param=130y130",
  neteaseId: "49406467"
},
{
  name: "Bohan 冷博涵",
  fans: "4.6万",
  lat:30.71 , lng: 111.30,
  avatar: "https://p1.music.126.net/rNyc0OCu-drjLfw4ncCwNA==/109951170513627798.jpg?param=130y130",
  neteaseId: "12059049"
},

{
  name: "吉他张",
  fans: "6.1万",
  lat:37.45 , lng: 116.35,
  avatar: "https://p2.music.126.net/ZjYV7eDNdai9QHQ96vq0aA==/109951172729872445.jpg?param=130y130",
  neteaseId: "30443363"
},
{
  name: "李文",
  fans: "5.2万",
  lat:31.40 , lng: 104.79,
  avatar: "https://p2.music.126.net/7fycpDNdEe7Pjyvdm0NTYg==/109951168843714017.jpg?param=130y130",
  neteaseId: "34279756"
},
        {
  name: "13FlowMic",
  fans: "3.6万",
  lat:27.84 , lng: 102.21,
  avatar: "https://p1.music.126.net/-hVKkWvonoPkeaojhYXnfg==/109951173937965907.jpg?param=130y130",
  neteaseId: "12923277"
},
        {
  name: "Toryondacloud",
  fans: "3.5万",
  lat:26.66 , lng: 102.25,
  avatar: "https://p1.music.126.net/NT7pHW8G1yZSJoeH6112xA==/109951173240063707.jpg?param=130y130",
  neteaseId: "12870490"
},
{
  name: "KITO",
  fans: "13.5万",
  lat:31.47 , lng: 104.75,
  avatar: "https://p1.music.126.net/66XI1TM1aefpFFupQQc3_A==/109951173146628871.jpg?param=130y130",
  neteaseId: "32931336"
},
{
  name: "Wings",
  fans: "13.4万",
  lat:32.27 , lng: 100.98,
  avatar: "https://p1.music.126.net/TktecPBK4WNO5fGE2OnPSA==/109951170076389893.jpg?param=130y130",
  neteaseId: "27872031"
},
{
  name: "NINEONE#乃万",
  fans: "247.5万",
  lat:34.29 , lng: 109.04,
  avatar: "https://p2.music.126.net/jaBqPYvEMARlH3PBAbvZsg==/109951173942734030.jpg?param=130y130",
  neteaseId: "12276375"
},
{
  name: "蛋堡",
  fans: "104.2万",
  lat:23.00 , lng: 120.21,
  avatar: "https://p2.music.126.net/7hJaoKjkzsPzKz5vK4qW9g==/109951169249111436.jpg?param=130y130",
  neteaseId: "2514"
},
{
  name: "派克特",
  fans: "37.2万",
  lat:34.22 , lng: 108.95,
  avatar: "https://p1.music.126.net/SxsbX2OTJ4k5-7LJAdgbjg==/109951168995763263.jpg?param=130y130",
  neteaseId: "12119618"
},
{
  name: "Echo",
  fans: "9.1万",
  lat:36.60 , lng: 109.49,
  avatar: "https://p1.music.126.net/Iy0WBV2lZlMKDcFAvxbNsA==/109951172996098806.jpg?param=130y130",
  neteaseId: "15200313"
},
{
  name: "辉子",
  fans: "24.9万",
  lat:39.97 , lng: 116.41,
  avatar: "https://p2.music.126.net/wjAD9cFytJCMlG5ldaNDZQ==/109951173446419658.jpg?param=130y130",
  neteaseId: "12371082"
},
{
  name: "V.O.B",
  fans: "8.9万",
  lat:39.10 , lng: 117.23,
  avatar: "https://p2.music.126.net/55oxw3F_yj5U1QP2UVfziA==/109951163094545924.jpg?param=130y130",
  neteaseId: "13005039"
},
{
  name: "MC HotDog热狗",
  fans: "64.5万",
  lat:25.04 , lng: 121.49,
  avatar: "https://p2.music.126.net/5ViEXoj1xti2RzahxIMzZQ==/109951169161434274.jpg?param=130y130",
  neteaseId: "4479"
},
{
  name: "瘦子E.SO",
  fans: "43.1万",
  lat:25.05 , lng: 121.57,
  avatar: "https://p2.music.126.net/H0MlYW2rj5B7hlZBFwGalA==/109951166783173717.jpg?param=130y130",
  neteaseId: "33012152"
},
{
  name: "万妮达Vinida Weng",
  fans: "146.6万",
  lat:26.07 , lng: 119.32,
  avatar: "https://p2.music.126.net/M-KcLOHL-qdjzYG7GtR8cw==/109951173127548962.jpg?param=130y130",
  neteaseId: "12001060"
},
{
  name: "李大奔BENZO",
  fans: "42.7万",
  lat:30.34 , lng: 112.23,
  avatar: "https://p2.music.126.net/U1mSNBdqoM_x9oTDUBwt4Q==/109951173293970640.jpg?param=130y130",
  neteaseId: "12277473",
desc:"「中国新说唱2020」季军"

},
{
  name: "功夫胖KUNGFU-PEN",
  fans: "57.3万",
  lat:28.26 , lng: 113.04,
  avatar: "https://p2.music.126.net/ANXf31eNT7NTmY4_OWesxQ==/109951172802605277.jpg?param=130y130",
  neteaseId: "12453329"
},
{
  name: "姜云升",
  fans: "371.9万",
  lat:25.03 , lng: 102.71,
  avatar: "https://p2.music.126.net/VOXA9iqlExh6hruuPamo0Q==/109951166533103808.jpg?param=130y130",
  neteaseId: "1198123"
},
{
  name: "翁杰Winjay",
  fans: "18.2万",
  lat:25.44 , lng: 119.02,
  avatar: "https://p2.music.126.net/rtP5KlpX97D16QROC9WYng==/109951172549373407.jpg?param=130y130",
  neteaseId: "35884195"
},
{
  name: "kkluv",
  fans: "96.5万",
  lat:41.73 , lng: 86.17,
  avatar: "https://p1.music.126.net/krPkb_D4b63eIP5kbj6lqQ==/109951172293193743.jpg?param=130y130",
  neteaseId: "28642672"
},
{
  name: "那奇沃夫",
  fans: "95万",
  lat:43.79 , lng: 87.61,
  avatar: "https://p2.music.126.net/LN0eotZ7ipuD6SR48oAVEw==/109951173887092682.jpg?param=130y130",
  neteaseId: "12570417"
},
{
  name: "艾热AIR",
  fans: "125.5万",
  lat:39.46 , lng: 76.01,
  avatar: "https://p1.music.126.net/tvy9BeZWZhqKfYKLHsSf-w==/109951172651091852.jpg?param=130y130",
  neteaseId: "1203045",
desc:"「中国新说唱2018」冠军"
},
{
  name: "SHarK",
  fans: "38万",
  lat:43.86 , lng: 87.57,
  avatar: "https://p1.music.126.net/_SbAJ1mLT0b92eRtxP1s5Q==/109951168822352373.jpg?param=130y130",
  neteaseId: "12853605",
desc:"「新说唱2025」冠军"
},
{
  name: "艾福杰尼",
  fans: "73万",
  lat:41.82 , lng: 86.12,
  avatar: "https://p2.music.126.net/sRT4-AH1RpaeGxBI8G_8_g==/109951169446600145.jpg?param=130y130",
  neteaseId: "12127564",
desc:"「中国有嘻哈」季军"
},
{
  name: "黄旭",
  fans: "41.2万",
  lat:41.17 , lng: 80.26,
  avatar: "https://p2.music.126.net/383YzBgZQe471G_xKouzCg==/109951173489860340.jpg?param=130y130",
  neteaseId: "12065096",
desc:"「中国新说唱2018」亚军"

},
{
  name: "KIV",
  fans: "16.6万",
  lat:22.27 , lng: 113.55,
  avatar: "https://p1.music.126.net/L2IegKgopP9WLDpepkHQqA==/109951170020234818.jpg?param=130y130",
  neteaseId: "12529648"
},
{
  name: "肯迪仔",
  fans: "3.7万",
  lat:24.97 , lng: 102.67,
  avatar: "https://p1.music.126.net/uUoqZ82-GKcgPqJpqhiIrQ==/109951169247070191.jpg?param=130y130",
  neteaseId: "32743623"
},

{
  name: "SASIOVERLXRD",
  fans: "71.8万",
  lat:27.88 , lng: 102.31,
  avatar: "https://p1.music.126.net/VSWNU8cLz6arkK6L2Dh3HA==/109951173348504450.jpg?param=130y130",
  neteaseId: "14117457",
collaborators: [
    { name: "连麻Swimming"},{ name: "JinJiBeWater-隼"},{ name: "RICHNOMADIC"},{ name: "CashTrippy"},{ name: "雾都L4WUDU"},{ name: "ayin印"},{ name: "刀脚"},{ name: "迪诺哥"},{ name: "Akemen杀"},{ name: "斑比Bambii"},{ name: "mac ova seas"},{ name: "kkluv"},{ name: "那奇沃夫"},{ name: "艾志恒Asen"},{ name: "APMOZART"},{ name: "张方钊"},{ name: "河北吴孟达"},{ name: "贾真Jahgen"},{ name: "BOBBYNOPEACE"},{ name: "Louis 1520"},{ name: "ICE杨长青"},{ name: "Rich4ever"},{ name: "KITO"},{ name: "LSGCsikoriot"},{ name: "瘦恒SoulHan"},{ name: "MISTERK"},{ name: "MULA SAKEE"}  ]
},
{
  name: "RICHNOMADIC",
  fans: "37.9万",
  lat:34.98 , lng: 102.91,
  avatar: "https://p2.music.126.net/jU3qDkxdBLcgtClW26Rk4w==/109951174001499667.jpg?param=130y130",
  neteaseId: "33165901"
},
{
  name: "龙崎",
  fans: "10.2万",
  lat:24.94 , lng: 102.84,
  avatar: "https://p1.music.126.net/wMusoXUuwLNJ0ISSVrEH-w==/109951167724346762.jpg?param=130y130",
  neteaseId: "1185047"
},
{
  name: "徐骁宇DEAN K",
  fans: "3.2万",
  lat:46.64 , lng: 126.98,
  avatar: "https://p2.music.126.net/WO7POFB9QSeBYxJCi9u-Cg==/109951171451553390.jpg?param=130y130",
  neteaseId: "31366729"
},
{
  name: "小安迪LilAndyKillThemAll",
  fans: "8.9万",
  lat:31.92 , lng: 117.29,
  avatar: "https://p1.music.126.net/zBohDeP6IJNK7ANkJTXe5A==/109951173619830342.jpg?param=130y130",
  neteaseId: "12099063"
},
{
  name: "法老",
  fans: "507.3万",
  lat:30.51 , lng: 120.68,
  avatar: "https://p1.music.126.net/mXAWgUNp5pLAzmphYvBrzQ==/109951170711607308.jpg?param=130y130",
  neteaseId: "865007",
collaborators: [
    { name: "阿达娃"},{ name: "KKECHO"},{ name: "小精灵"},{ name: "王以太"},{ name: "MC HotDog热狗"},{ name: "肯迪仔"},{ name: "邓典果DDG"},{ name: "万妮达Vinida Weng"},{ name: "龙崎"},{ name: "陆政廷Lil Jet"},{ name: "杨和苏KeyNG"},{ name: "KnowKnow"},{ name: "徐骁宇DEAN K"},{ name: "JarStick"},{ name: "李毅杰PISSY"},{ name: "Buzzy"},{ name: "DANNY K"},{ name: "EINK"},{ name: "FEEEleven"},{ name: "Spylent"},{ name: "Mc光光"},{ name: "艾热AIR"},{ name: "NINEONE#乃万"},{ name: "派克特"},{ name: "姜云升"},{ name: "小安迪"},{ name: "侃迪Kandi"},{ name: "Wiz-H张子豪"},{ name: "高天佐"},{ name: "Saber梁维嘉"},{ name: "鬼卞"},{ name: "巴顿"},{ name: "AA"},{ name: "Ice Paper"}
  ]

},
{
  name: "罗言",
  fans: "131.5万",
  lat:30.95 , lng: 118.77,
  avatar: "https://p1.music.126.net/ZrO8gJjxSmlmadJeRiqOPw==/109951172417958240.jpg?param=130y130",
  neteaseId: "33863232",
collaborators: [
    { name: "Uzzy"},{ name: "吕富贵"},{ name: "LSGCsikoriot"},{ name: "KnowKnow"},{ name: "SASIOVERLXRD"},{ name: "THOME"},{ name: "斑比Bambii"},{ name: "Melo"},{ name: "GALI"},{ name: "kkluv"},{ name: "PSY.P"},{ name: "Ty."},{ name: "Capper"},{ name: "TizzyT"},{ name: "BOBBYNOPEACE"},{ name: "JinJiBeWater-隼"},{ name: "AThree"},{ name: "KIV"}
  ]

},
{
  name: "ljz329",
  fans: "134.6万",
  lat:36.05 , lng: 103.85,
  avatar: "https://p2.music.126.net/2HWBehaTrcYUZAByJh-mDg==/109951170681263534.jpg?param=130y130",
  neteaseId: "51957057",
aliases: ["贝贝"]
},
{
  name: "无脸男葫芦",
  fans: "7.6万",
  lat:31.17 , lng: 121.46,
  avatar: "https://p1.music.126.net/5Pcm7CikUeevd-oeQluC9g==/109951169788623409.jpg?param=130y130",
  neteaseId: "47920714"
},

{
  name: "Mosedontbesilly",
  fans: "3.3万",
  lat:39.94 , lng: 116.45,
  avatar: "https://p2.music.126.net/ZjzmesdzVCgHAAO-B889qA==/109951174011178256.jpg?param=130y130",
  neteaseId: "35233973"
},

{
  name: "Top Barry",
  fans: "73万",
  lat:22.14 , lng: 113.53,
  avatar: "https://p2.music.126.net/fvKBiGSsbxmgCK0GBog0qA==/109951171380523664.jpg?param=130y130",
  neteaseId: "49141872",
desc:"「新说唱2025」季军",
collaborators: [
    { name: "Melo"},{ name: "Rapeter"},{ name: "黄旭"},{ name: "李大奔BENZO"},{ name: "APMOZART"},{ name: "刀脚"},{ name: "李佳隆"},{ name: "Yosko"},{ name: "Dove鸽子"},{ name: "沧桑Cang333"},{ name: "三火flame"},{ name: "Akemen杀"},{ name: "李尔新"},{ name: "PSY.P"},{ name: "谟西Mercy"},{ name: "UPNEVERDOWN"},{ name: "功夫胖KUNGFU-PEN"},{ name: "艾洛樱Aluvin"},{ name: "Mosedontbesilly"},{ name: "Tlatre特雷西"},{ name: "无脸男葫芦"}  ]
},
{
  name: "Rapeter",
  fans: "94.3万",
  lat:34.60 , lng: 119.18,
  avatar: "https://p2.music.126.net/-14yOGYmESuvaPbXGintKg==/109951170489763444.jpg?param=130y130",
  neteaseId: "12563131",
collaborators: [
    { name: "SHarK"},{ name: "侃迪kandi"},{ name: "小酷Coola"},{ name: "KITO"},{ name: "杨和苏KeyNG"},{ name: "加木"},{ name: "AA"},{ name: "Mc光光"},{ name: "BOBBYNOPEACE"},{ name: "Athree"},{ name: "V.O.B"}  ]
},

{
  name: "小酷Coola",
  fans: "16.1万",
  lat:31.24, lng: 121.25,
  avatar: "https://p1.music.126.net/V9-YRdlI23N05AOg3iwL7g==/109951167834430513.jpg?param=130y130",
  neteaseId: "12781308"
},
{
  name: "黄之仪Kyra Zilver",
  fans: "21.4万",
  lat:28.22 , lng: 112.90,
  avatar: "https://p1.music.126.net/F6ajarwLHHycrW-1JPlcTw==/109951173848404704.jpg?param=130y130",
  neteaseId: "14018235"
},
{
  name: "TizzyT",
  fans: "146.6万",
  lat:23.66 , lng: 116.64,
  avatar: "https://p1.music.126.net/Vbo8K447I5LLvH9VpdTfww==/109951166527176990.jpg?param=130y130",
  neteaseId: "1204010"
},
{
  name: "KEY.L刘聪",
  fans: "175.7万",
  lat:26.89 , lng: 112.57,
  avatar: "https://p2.music.126.net/l9wMo8vk2k3gOaN1zA3yLQ==/109951169838626318.jpg?param=130y130",
  neteaseId: "12788674"
},
{
  name: "西奥Sio",
  fans: "27.3万",
  lat:28.27 , lng: 112.95,
  avatar: "https://p1.music.126.net/vtAUZdKjRkWWwDgSzSLoLg==/109951172184985568.jpg?param=130y130",
  neteaseId: "1124093"
},
{
  name: "Yee",
  fans: "35.9万",
  lat:28.12 , lng: 112.97,
  avatar: "https://p1.music.126.net/M9S2kc_qzOV5wrUS147l3A==/109951170351901193.jpg?param=130y130",
  neteaseId: "1050364"
},
{
  name: "路铭Dualkiller",
  fans: "1.4万",
  lat:35.15 , lng: 113.27,
  avatar: "https://p1.music.126.net/a2dJsHLducDl4D0Pj98Xgg==/109951172183859376.jpg?param=130y130",
  neteaseId: "55227607"
},

{
  name: "YOUNGLEGO",
  fans: "3.0万",
  lat:34.77 , lng: 113.51,
  avatar: "https://p2.music.126.net/bpLWKr1_s4xOPbYsijms6Q==/109951173259953685.jpg?param=130y130",
  neteaseId: "12968978"
},
{
  name: "4Crz",
  fans: "1.5万",
  lat:28.01 , lng: 120.69,
  avatar: "https://p1.music.126.net/KnPFmxBJC_m-8Miyvd1pMg==/109951170531442352.jpg?param=130y130",
  neteaseId: "48716075"
},

{
  name: "张方钊",
  fans: "70.4万",
  lat:35.23 , lng: 113.24,
  avatar: "https://p2.music.126.net/ZENpbkoMj3xHYV6bdmQgvQ==/109951173955160849.jpg?param=130y130",
  neteaseId: "15194340",
aliases: ["河南说唱之神"],
collaborators: [
    { name: "KenRobb"},{ name: "河北吴孟达"},{ name: "沙一汀EL"},{ name: "大D(DLyn)"},{ name: "Louis 1520"},{ name: "功夫胖KUNGFU-PEN"},{ name: "LSGCsikoriot"},{ name: "吕富贵"},{ name: "Vansdaddy"},{ name: "血男孩"},{ name: "陆政廷Lil Jet"},{ name: "Ash-1"},{ name: "陈一豪Clear"},{ name: "周乘羽"},{ name: "卡力老虎"},{ name: "连麻Swimming"},{ name: "FEEEleven"},{ name: "MISTERK"},{ name: "狂兆北"},{ name: "YOUNGLEGO"},{ name: "黄格雷"}
  ]

},
{
  name: "FAC-D12",
  fans: "15.8万",
  lat:40.00 , lng: 116.31,
  avatar: "https://p1.music.126.net/asMnnEfpHtAsPfpO6iyGgQ==/109951167535654794.jpg?param=130y130",
  neteaseId: "29939584"
},
{
  name: "九维",
  fans: "9.6万",
  lat:39.86 , lng: 116.37,
  avatar: "https://p1.music.126.net/z_Szseyygn-4sB39tdZBYg==/109951168865533356.jpg?param=130y130",
  neteaseId: "13449058"
},
{
  name: "马赫mood",
  fans: "18.4万",
  lat:43.92 , lng: 87.64,
  avatar: "https://p2.music.126.net/MCbhLo3_BbuPyJV157tELg==/109951170501527607.jpg?param=130y130",
  neteaseId: "13699781"
},
{
  name: "那吾克热-NW",
  fans: "48.9万",
  lat:43.85 , lng: 87.47,
  avatar: "https://p1.music.126.net/-ryEwzRd91j2r4klXxLEkg==/109951163755423571.jpg?param=130y130",
  neteaseId: "12514278",
desc:"「中国新说唱2018」亚军"

},
{
  name: "Cee",
  fans: "9.4万",
  lat:31.29 , lng: 121.51,
  avatar: "https://p1.music.126.net/v34s-BAFAA3WU9F9YblAJw==/109951165846853790.jpg?param=130y130",
  neteaseId: "31055"
},
{
  name: "宝石Gem",
  fans: "101.8万",
  lat:43.80 , lng: 125.30,
  avatar: "https://p2.music.126.net/cuxYBa8_n97yinJI22Sd4A==/109951172840033492.jpg?param=130y130",
  neteaseId: "12084497"
},
{
  name: "杨和苏KeyNG",
  fans: "188.6万",
  lat:30.53 , lng: 104.06,
  avatar: "https://p2.music.126.net/-Xy6jVswqXtI5h7duPNSHw==/109951171453051553.jpg?param=130y130",
  neteaseId: "13899303",
desc:"「中国新说唱2019」冠军"

},
{
  name: "李毅杰PISSY",
  fans: "22.8万",
  lat:30.56 , lng: 104.00,
  avatar: "https://p2.music.126.net/ysSqPk16ehTfhJzjKLQP4A==/109951173983541082.jpg?param=130y130",
  neteaseId: "12851112"
},
{
  name: "VaVa娃娃",
  fans: "47.3万",
  lat:30.01 , lng: 103.05,
  avatar: "https://p1.music.126.net/g20EFwiE3BAywiC2eoElew==/109951173013619572.jpg?param=130y130",
  neteaseId: "1038099"
},
{
  name: "KKECHO",
  fans: "68.4万",
  lat:29.56 , lng: 103.76,
  avatar: "https://p1.music.126.net/pIC1Cp5E1ID1JkQK67QV3w==/109951173832803271.jpg?param=130y130",
  neteaseId: "50275485"
},
{
  name: "YOUNG13DBABY",
  fans: "15.8万",
  lat:34.00 , lng: 102.07,
  avatar: "https://p1.music.126.net/jq8Q4ANwLZDiFfQWUjG_EQ==/109951169764760151.jpg?param=130y130",
  neteaseId: "12195296"
},
{
  name: "Vinz-T",
  fans: "29.3万",
  lat:21.87 , lng: 111.97,
  avatar: "https://p1.music.126.net/ZSJe4ayYhXH5a72RFkHOnQ==/109951169914672045.jpg?param=130y130",
  neteaseId: "12371041"
},
{
  name: "Udigg",
  fans: "7.1万",
  lat:29.31 , lng: 120.07,
  avatar: "https://p1.music.126.net/AMqDMQwQfUkNxHTaxhSw-Q==/109951173193465884.jpg?param=130y130",
  neteaseId: "12328955"
},
{
  name: "Ice Paper",
  fans: "142.3万",
  lat:33.59 , lng: 119.07,
  avatar: "https://p2.music.126.net/fzWDTckJqRqApWSYxUzKzA==/109951171972222899.jpg?param=130y130",
  neteaseId: "12121264"
},
{
  name: "ICE杨长青",
  fans: "67万",
  lat:26.58 , lng: 101.73,
  avatar: "https://p1.music.126.net/Tx6VGc24U9T_7zF18iM-Tw==/109951173585573440.jpg?param=130y130",
  neteaseId: "13145283",
desc:"「中国新说唱2018」季军"

},
{
  name: "Dove鸽子",
  fans: "11.9万",
  lat:22.32 , lng: 114.17,
  avatar: "https://p1.music.126.net/fsiwSMlx0qQSGRotCvoPsg==/109951169953838295.jpg?param=130y130",
  neteaseId: "33072389"
},
{
  name: "Nxmad诺曼德",
  fans: "12万",
  lat:31.14 , lng: 121.37,
  avatar: "https://p2.music.126.net/yEWHkJ6YlF-YoUJrqsyfhw==/109951170702569040.jpg?param=130y130",
  neteaseId: "12484112"
},
{
  name: "三火flame",
  fans: "20.6万",
  lat:39.85 , lng: 116.13,
  avatar: "https://p1.music.126.net/8s7WIo21RcRsSKH6i-IfGw==/109951165896616063.jpg?param=130y130",
  neteaseId: "36458527"
},
{
  name: "Wiz-H张子豪",
  fans: "89.7万",
  lat:41.80 , lng: 123.38,
  avatar: "https://p2.music.126.net/6NW4JkNt9b73P2nZkkg9kA==/109951172528960503.jpg?param=130y130",
  neteaseId: "13112601"
},
{
  name: "贰万",
  fans: "15.9万",
  lat:31.92 , lng: 118.83,
  avatar: "https://p2.music.126.net/_KQCrXsw10VXClSU4xJMBw==/109951165909439596.jpg?param=130y130",
  neteaseId: "47607639"
},
{
  name: "高天佐",
  fans: "31.2万",
  lat:32.01 , lng: 118.70,
  avatar: "https://p2.music.126.net/y-3qwEWtftd17tbfZiAUWA==/109951170513898827.jpg?param=130y130",
  neteaseId: "12236269",
  desc:"「说唱听我的第一季」亚军"

},
{
  name: "Mc光光",
  fans: "36.1万",
  lat:32.11 , lng: 118.75,
  avatar: "https://p2.music.126.net/Ea8tEJTJlzBGllUF1nlEtw==/109951162834005503.jpg?param=130y130",
  neteaseId: "187903"
},
{
  name: "威尔Will.T",
  fans: "10.3万",
  lat:30.46 , lng: 106.64,
  avatar: "https://p2.music.126.net/ZdUveKZYx-PxuG3tj2OmjA==/109951169600104722.jpg?param=130y130",
  neteaseId: "12126217"
},
{
  name: "亚细亚旷世奇才",
  fans: "30.7万",
  lat:43.96 , lng: 125.32,
  avatar: "https://p1.music.126.net/EAEY23oC3P1KmDHS_ECLbQ==/109951170940380855.jpg?param=130y130",
  neteaseId: "51497522"
},
{
  name: "LEGGO",
  fans: "7.6万",
  lat:30.26 , lng: 120.30,
  avatar: "https://p2.music.126.net/LX_A8Kvvwy1_GICjbG4DXA==/109951172150251056.jpg?param=130y130",
  neteaseId: "12293217"
},
{
  name: "Player J",
  fans: "0.8万",
  lat:23.10 , lng: 113.36,
  avatar: "https://p2.music.126.net/6XygMcwRUQrf_0-uKvduCg==/109951173011924323.jpg?param=130y130",
  neteaseId: "57561642"
},
{
  name: "步步高先生",
  fans: "1.1万",
  lat:23.10 , lng: 113.30,
  avatar: "https://p1.music.126.net/Ykp3wxYxHV2ZmSJby_5_qg==/109951172938105420.jpg?param=130y130",
  neteaseId: "54954390"
},{
  name: "阿牛",
  fans: "0.5万",
  lat:23.16 , lng: 113.24,
  avatar: "https://p1.music.126.net/vrUY3hL-qxt_xeVzvj0YdQ==/109951171961809450.jpg?param=130y130",
  neteaseId: "49771435"
},
{
  name: "侃迪Kandi",
  fans: "12.2万",
  lat:31.84 , lng: 117.29,
  avatar: "https://p2.music.126.net/yShaTSqYDvOqyWwF2c7cVQ==/109951171877291682.jpg?param=130y130",
  neteaseId: "29265708"
},
{
  name: "R!R!Riot",
  fans: "5.5万",
  lat:25.00, lng: 121.59,
  avatar: "https://p2.music.126.net/uiTqDBpy8hd2QEz_FcAlmw==/109951168832195379.jpg?param=130y130",
  neteaseId: "56724807"
},
{
  name: "Melo",
  fans: "29.5万",
  lat:30.71 , lng: 104.13,
  avatar: "https://p2.music.126.net/XWX1ZKCTVt9y9mkoBwQMhg==/109951173446925721.jpg?param=130y130",
  neteaseId: "29304235"
},
{
  name: "李尔新",
  fans: "16.6万",
  lat:30.65 , lng: 103.94,
  avatar: "https://p2.music.126.net/ZAsJPxAv4axhbWVkj4UEZA==/109951171722169442.jpg?param=130y130",
  neteaseId: "12039173"
},
{
  name: "CHOCKEY有三",
  fans: "4.3万",
  lat:23.26 , lng: 116.68,
  avatar: "https://p1.music.126.net/wic01Qk53uv6TYywU1NsUg==/109951172953743936.jpg?param=130y130",
  neteaseId: "36109845"
},
{
  name: "Crazy C",
  fans: "3.5万",
  lat:27.57 , lng: 120.54,
  avatar: "https://p1.music.126.net/v5ENjSqHil_iWtIst9zbxw==/109951167709697382.jpg?param=130y130",
  neteaseId: "53463620"
},
{
  name: "yilun!",
  fans: "6.1万",
  lat:30.18 , lng: 120.27,
  avatar: "https://p1.music.126.net/BsIYswd_JqloWu8i7z2ErQ==/109951173544091416.jpg?param=130y130",
  neteaseId: "34288614"
},

{
  name: "王嗣尧TURBO",
  fans: "2.0万",
  lat:29.63 , lng: 106.54,
  avatar: "https://p1.music.126.net/KSBCC4hnFq0am6Y8x0WXgg==/109951169564693521.jpg?param=130y130",
  neteaseId: "12499279"
},
{
  name: "HEAT J",
  fans: "3.2万",
  lat:23.30 , lng: 116.15,
  avatar: "https://p1.music.126.net/DNgZ0F94-v9PZWpa7lhDKg==/109951173475045178.jpg?param=130y130",
  neteaseId: "12085631"
},

{
  name: "AJ赖煜哲",
  fans: "6.9万",
  lat:25.03 , lng: 121.39,
  avatar: "https://p2.music.126.net/B_4lRyt-ffhkLngQZ6gebw==/109951169764739902.jpg?param=130y130",
  neteaseId: "31287479",
desc:"「说唱听我的第二季」季军"

},

{
  name: "大D(DLyn)",
  fans: "12.3万",
  lat:22.98 , lng: 114.72,
  avatar: "https://p1.music.126.net/_TYZTsB3MTgrsQMW04QQCQ==/109951169533774856.jpg?param=130y130",
  neteaseId: "12114249"
},
{
  name: "早安",
  fans: "51万",
  lat:32.12 , lng: 118.82,
  avatar: "https://p2.music.126.net/1FjjEMiQ3z2rlnA6-zHLbQ==/109951169230628256.jpg?param=130y130",
  neteaseId: "47192128",
desc:"「说唱听我的第二季」冠军"

},
{
  name: "Ranzer",
  fans: "5.1万",
  lat:28.15 , lng: 112.89,
  avatar: "https://p2.music.126.net/IKtEViHktQIcB13r6dZZ8w==/109951173523293928.jpg?param=130y130",
  neteaseId: "12319437"
},

{
  name: "Mengzi",
  fans: "14.8万",
  lat:30.72 , lng: 103.99,
  avatar: "https://p1.music.126.net/aaqvlDgKID6Nh1VdeDD5-Q==/109951164054171642.jpg?param=130y130",
  neteaseId: "31917276"
},
{
  name: "LSGCsikoriot",
  fans: "13.5万",
  lat:30.66 , lng: 104.12,
  avatar: "https://p2.music.126.net/gubm-zDHSIj4aZJwdqiNcQ==/109951171443067525.jpg?param=130y130",
  neteaseId: "33097968",
aliases: ["四口"],
},
{
  name: "陈一豪Clear",
  fans: "21.6万",
  lat:28.21 , lng: 113.11,
  avatar: "https://p1.music.126.net/P9I3MUMnR0RzIIZM_b3z7Q==/109951173535912472.jpg?param=130y130",
  neteaseId: "32893629"
},
{
  name: "弹壳Danko",
  fans: "57.7万",
  lat:23.37 , lng: 116.72,
  avatar: "https://p2.music.126.net/Gc4qmlH3l2olNuPH9xtwHA==/109951173028746722.jpg?param=130y130",
  neteaseId: "35784564"
},
{
  name: "揽佬SKAI ISYOURGOD",
  fans: "39万",
  lat: 23.11, lng: 114.42,
  avatar: "https://p2.music.126.net/4OCeH50gC3F91BJeixEocg==/109951168913424214.jpg?param=130y130",
  neteaseId: "31055231"
},
{
  name: "africakid",
  fans: "8.1万",
  lat: 31.74, lng: 104.72,
  avatar: "https://p2.music.126.net/0z0QmsHXpkVdYOsoqd_sEQ==/109951173480066482.jpg?param=130y130",
  neteaseId: "37409740"
},
{
  name: "DAI",
  fans: "0.6万",
  lat: 30.79, lng: 104.17,
  avatar: "https://p1.music.126.net/7CeVfhvR7LRh56wPwQRvnA==/109951168571555137.jpg?param=130y130",
  neteaseId: "33984254"
},

{
  name: "阿达娃",
  fans: "20万",
  lat: 30.79, lng: 104.07,
  avatar: "https://p2.music.126.net/QiKQ2vy1NM5JPJJ6ZPY7zg==/109951170151716789.jpg?param=130y130",
  neteaseId: "32959015"
},

{
  name: "刀脚",
  fans: "28.2万",
  lat: 26.24, lng: 105.84,
  avatar: "https://p2.music.126.net/1boUUGnDBkl8vc1Vk54Ohw==/109951173569640287.jpg?param=130y130",
  neteaseId: "54247662"
},
{
  name: "THOME",
  fans: "82.4万",
  lat: 30.42, lng: 104.53,
  avatar: "https://p2.music.126.net/rIr78XiLso-Dlz00JjcLxw==/109951170999422334.jpg?param=130y130",
  neteaseId: "12110173",
  collaborators: [
    { name: "艾志恒Asen"},{ name: "KIV"},{ name: "mac ova seas"},{ name: "MULA SAKEE"},{ name: "DIGI GHETTO"},{ name: "黄格雷"},{ name: "kkluv"},{ name: "贾真Jahgen"},{ name: "TOYOKI"},{ name: "KnowKnow"},{ name: "马思唯"},{ name: "BombWayne"},{ name: "africakid"},{ name: "罗言"},{ name: "Vansdaddy"},{ name: "Alyway"},{ name: "Ty."},{ name: "OuttaWave"},{ name: "Nxmad诺曼德"},{ name: "PSY.P"},{ name: "UDIGG"},{ name: "希介"},{ name: "BOBBYNOPEACE"},{ name: "离合"},{ name: "CashTrippy"},{ name: "APMOZART"},{ name: "LSGCsikoriot"}
  ]
},
{
  name: "mac ova seas",
  fans: "68.4万",
  lat: 31.78, lng: 104.74,
  avatar:"https://p1.music.126.net/0VgIdaOVWbyPo_-0i-1hpw==/109951168559129539.jpg?param=130y130",
  neteaseId: "30704161",
collaborators: [
    { name: "KenRobb"},{ name: "KIV"},{ name: "罗言"},{ name: "THOME"},{ name: "MULA SAKEE"},{ name: "TOYOKI"},{ name: "CashTrippy"},{ name: "Capper"},{ name: "UDIGG"},{ name: "李大奔BENZO"},{ name: "李佳隆"},{ name: "加木"},{ name: "王齐铭WatchMe"},{ name: "Ty."},{ name: "YOUNG13DBABY"},{ name: "BrAnTB白景屹"},{ name: "Toryondacloud"},{ name: "连麻Swimming"},{ name: "斑比Bambii"},{ name: "SASIOVERLXRD"},{ name: "那奇沃夫"},{ name: "kkluv"},{ name: "刀脚"},{ name: "V.O.B"},{ name: "雾都L4WUDU"},{ name: "李尔新"},{ name: "PSY.P"}
  ]

},
{
  name: "APMOZART",
  fans: "18.5万",
  lat: 30.97, lng: 104.28,
  avatar:"https://p2.music.126.net/_CHuFsMoIs71yRFI9OAiWw==/109951174066537676.jpg?param=130y130",
  neteaseId: "48045511"
},

        {
          name: "艾志恒Asen",
          fans: "135.8万",
          lat: 29.67, lng: 109.14,
          avatar: "https://p2.music.126.net/alpJxinPEXCuYkeEMnCDWA==/109951172058047957.jpg?param=130y130",
          neteaseId: "12198387",
collaborators: [
    { name: "马思唯"},{ name: "王以太"},{ name: "罗言"},{ name: "李佳隆"},{ name: "王嗣尧TURBO"},{ name: "mac ova seas"},{ name: "王以太"},{ name: "TOYOKI"},{ name: "MULA SAKEE"},{ name: "Maikon Flocka Flame"},{ name: "GALI"},{ name: "连麻Swimming"},{ name: "谢帝"},{ name: "建坤YOUNG"},{ name: "DAI"},{ name: "THOME"},{ name: "Vansdaddy"},{ name: "KIV"}
  ]
        },
{
  name: "PONYGO小马",
  fans: "2.4万",
  lat: 35.40, lng: 116.60,
  avatar: "https://p1.music.126.net/kku7rOiskUGssoFeQNaB6Q==/109951168136235811.jpg?param=130y130",
  neteaseId: "28416123"
},
{
  name: "BombWayne",
  fans: "1.5万",
  lat: 31.30, lng: 120.63,
  avatar: "https://p2.music.126.net/p4LQWNHCjqImDH2hwR-71Q==/109951173855326139.jpg?param=130y130",
  neteaseId: "31559757"
},
{
  name: "朴鲨VPS",
  fans: "1.5万",
  lat: 29.46, lng: 106.59,
  avatar: "https://p2.music.126.net/N-lHGkGTajpN6JvqxEer9g==/109951169799693786.jpg?param=130y130",
  neteaseId: "12481977"
},
{
  name: "萨萨",
  fans: "2.1万",
  lat: 36.13, lng: 103.81,
  avatar: "https://p1.music.126.net/r3QM1VQlcAHXnrd6wjNxxQ==/109951169660247204.jpg?param=130y130",
  neteaseId: "13861106",
}
,
{
  name: "弹片Blaze4",
  fans: "1.4万",
  lat: 36.050000, lng: 103.780000,
  avatar: "https://p2.music.126.net/MCS9P3RR84aZ-KBBO4LD0w==/109951172655158702.jpg?param=130y130",
  neteaseId: "13417028"
}
,
{
  name: "Three thousand***",
  fans: "3.6万",
  lat: 27.710000, lng: 106.930000,
  avatar: "https://p2.music.126.net/m1N9okLtVVTudMS1H3anNw==/109951173746631357.jpg?param=130y130",
  neteaseId: "34597980"
}
,
{
  name: "九莲",
  fans: "1.6万",
  lat: 41.670000, lng: 123.430000,
  avatar: "https://p2.music.126.net/y_nFacCULRCi-vbJv5kspA==/109951173224330171.jpg?param=130y130",
  neteaseId: "52118688"
}
,
{
  name: "Taco",
  fans: "6.3万",
  lat: 39.91, lng: 116.18,
  avatar: "https://p1.music.126.net/PAakJBorDcnPOWTpYrnK1Q==/109951173723058816.jpg?param=130y130",
  neteaseId: "35169519",
  desc: "Human Register 主理人"
},
{
  name: "Hidoyard",
  fans: "1.7万",
  lat: 30.63, lng: 103.91,
  avatar: "https://p2.music.126.net/2LI0SGNsJTc9aoX2OpjS_A==/109951168848232510.jpg?param=130y130",
  neteaseId: "37056973",
  desc: "成都说唱歌手"
},
{
  name: "IsolYves",
  fans: "2.1万",
  lat: 22.67, lng: 113.93,
  avatar: "https://p1.music.126.net/ZLFwQcDSqnDEVP_t0tpH_A==/109951172484910760.jpg?param=130y130",
  neteaseId: "100009583",
  desc: "来自深圳，现居纽约"
},
{
  name: "菲尼克斯",
  fans: "1.3万",
  lat: 30.82, lng: 104.08,
  avatar: "https://p1.music.126.net/G4NUwr6njPit_bhKfSmx8Q==/109951174013880176.jpg?param=130y130",
  neteaseId: "100342687"
},
{
  name: "邛州小子",
  fans: "2.0万",
  lat: 30.41, lng: 103.47,
  avatar: "https://p1.music.126.net/897RxG5R4sKCriLZ5eGfpw==/109951172665165130.jpg?param=130y130",
  neteaseId: "51320957",
  aliases: ["罗子棠", "Tomkokk"]
},
{
  name: "Yoyi",
  fans: "3.7万",
  lat: 23.24, lng: 113.33,
  avatar: "https://p2.music.126.net/xBz3pWTAKhLP104mdrMq8w==/109951173902559474.jpg?param=130y130",
  neteaseId: "55275689"
},
{
  name: "5IVE5IVE",
  fans: "2.4万",
  lat: 22.36, lng: 114.22,
  avatar: "https://p1.music.126.net/-VyfZATiDY4ilKWto1B7bA==/109951166159201053.jpg?param=130y130",
  neteaseId: "13907021"
},
{
  name: "脸是熊",
  fans: "6811",
  lat: 22.63, lng: 114.23,
  avatar: "https://p2.music.126.net/hAzaDlSL3VkwYs9LHqFT1w==/109951173167121474.jpg?param=130y130",
  neteaseId: "33275309",
  aliases: ["臉是熊", "MTUT", "Michael", "熊老师"]
},
{
  name: "Aracelavery",
  fans: "2.9万",
  lat: 29.56, lng: 106.65,
  avatar: "https://p2.music.126.net/tkddmVaO7Cn2uliWpv2T-g==/109951173307680288.jpg?param=130y130",
  neteaseId: "62099750",
  aliases: ["yuli"]
},
{
  name: "Losty",
  fans: "暂无数据",
  lat: 25.09, lng: 121.57,
  avatar: "https://p1.music.126.net/24IfMHsunoE-OGJtY3T6wg==/109951172460129276.jpg?param=130y130",
  neteaseId: "14642818"
},
{
  name: "Lind",
  fans: "暂无数据",
  lat: 40.04, lng: 116.27,
  avatar: "https://p1.music.126.net/4VbFjrI7SbFZUcWlFnIitA==/109951166932845512.jpg?param=130y130",
  neteaseId: "50711969",
  desc: "北京唱作人"
},
{
  name: "61H",
  fans: "暂无数据",
  lat: 37.64, lng: 121.11,
  avatar: "https://p1.music.126.net/2W9ID-UcqPGitLUVMfaTsQ==/109951166174212415.jpg?param=130y130",
  neteaseId: "36399677",
  desc: "山东烟台说唱音乐人"
},
{
  name: "lov3chanel",
  fans: "暂无数据",
  lat: 31.07, lng: 121.32,
  avatar: "https://p1.music.126.net/Q9r5xiSg7NzbQvif8wySjw==/109951166348543009.jpg?param=130y130",
  neteaseId: "34390291"
},
{
  name: "MoFly",
  fans: "暂无数据",
  lat: 23.02, lng: 113.12,
  avatar: "https://p1.music.126.net/_tO04oxx_6k3cPVPtdR6iQ==/109951165885970438.jpg?param=130y130",
  neteaseId: "47471965",
  aliases: ["Mofly", "贺奕明"]
},
{
  name: "雪花绮罗愛",
  fans: "暂无数据",
  lat: 23.07, lng: 114.31,
  avatar: "https://p1.music.126.net/xsxrF-TLCIkD69bPMJTk2A==/109951170043782048.jpg?param=130y130",
  neteaseId: "35425790",
  aliases: ["雪花绮罗爱", "雪花綺羅愛", "YOKII"]
},
{
  name: "User116",
  fans: "暂无数据",
  lat: 31.33, lng: 121.45,
  avatar: "https://p1.music.126.net/WQo4BrOD3Fu_oAfyIsRi9g==/109951173821545633.jpg?param=130y130",
  neteaseId: "59135028"
}
      ];


// 在双向补全前，先标记原始数据中明确有 collaborators 的歌手
singers.forEach(singer => {
  if (singer.collaborators && singer.collaborators.length > 0) {
    singer._hasOriginalCollaborators = true;
  }
});

// 自动补全双向合作关系
(function autoCompleteConnections() {
  singers.forEach(singer => {
    if (singer.collaborators) {
      singer.collaborators.forEach(collab => {
        // 找到对方的歌手对象
        const partner = singers.find(s => s.name === collab.name);
        if (partner) {
          // 如果对方没有 collaborators 字段，先初始化它
          if (!partner.collaborators) {
            partner.collaborators = [];
          }
          // 检查对方的名单里是否已经有了自己
          const alreadyLinked = partner.collaborators.some(c => c.name === singer.name);
          // 如果没有，就自动补上去
          if (!alreadyLinked) {
            partner.collaborators.push({ name: singer.name });
          }
        }
      });
    }
  });
})();



const cities = [
        { name: "成都", lat: 30.65, lng: 104.06 }, { name: "重庆", lat: 29.53, lng: 106.50 },
        { name: "北京", lat: 39.90, lng: 116.40 }, { name: "上海", lat: 31.23, lng: 121.47 },
        { name: "广州", lat: 23.12, lng: 113.26 }, { name: "长沙", lat: 28.22, lng: 112.93 },
        { name: "西安", lat: 34.34, lng: 108.93 }, { name: "南京", lat: 32.06, lng: 118.79 },
        { name: "新疆", lat: 43.82, lng: 87.61 }, { name: "乌鲁木齐", lat: 43.82, lng: 87.61 },
        { name: "深圳", lat: 22.54, lng: 114.05 }, { name: "杭州", lat: 30.27, lng: 120.15 },
        { name: "台北", lat: 25.03, lng: 121.56 }, { name: "武汉", lat: 30.59, lng: 114.30 },
        { name: "哈尔滨", lat: 45.80, lng: 126.53 }, { name: "福州", lat: 26.07, lng: 119.30 },
        { name: "郑州", lat: 34.74, lng: 113.62 }, { name: "昆明", lat: 25.04, lng: 102.71 }
      ];






      // 4. 厂牌数据
      const labels = [
  {
    name: "1SHOT",
    fans: "团体",
    lat: 31.12, lng: 121.66,
    avatar: "https://p1.music.126.net/XAWTPQVVGAa8t_uj0t8Ckw==/109951170374141020.jpg?param=180y180",
    neteaseId: "",
    type: "label",
    // 成员来源：网易云《1SHOT CYPHER 2024》，歌曲ID 2157638955。
    members: ["Cee", "Keyso寿君超", "小酷Coola", "土人儿TRE", "孤矢", "颠倒", "西凹木", "DENZEL丹澤", "DonDream"]
  },
  {
    name: "Virtual Adam",
    fans: "团体",
    lat: 22.68, lng: 114.20,
    avatar: "./assets/labels/virtual-adam.jpg",
    neteaseId: "",
    type: "label",
    members: ["delphia!", "Wade Warhol", "lov3chanel", "tonymvn!a", "ANT NIRVANA", "JNOLAZY", "ANE"]
  },
        {
    name: "成都集团",
    fans: "团体", // 厂牌无粉丝数，用标识替代
    lat: 30.62, lng: 104.12, // 团体地理坐标（比如成都）
    avatar: "https://p1.music.126.net/jLLS_h9IbrQhHt-Pk2VCxA==/109951164947982934.jpg?param=130y130", // 团体logo链接
    neteaseId: "35005076", // 团体无网易云ID则留空
    type: "label", // 标记为团体类型
members: ["谢帝","Ty.","Mengzi","王以太","马思唯", "KnowKnow", "Melo", "Psy.P", "邓典果DDG","AnsrJ","李尔新","SleepyCat"]
  },
 {
    name: "Free-Out",
    fans: "团体",
    lat: 32.06, lng: 118.65, // 重庆坐标
    avatar: "https://p1.music.126.net/eRA3G0rIhTzB_Hitvan0Ow==/109951169201083437.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["MC光光", "Trouble.Z", "Round-2", "Ice Paper", "Kc","Lil Howcy","Big Year","BustaZun","Joannne"]
  },
{
    name: "404 RAPPER(红花会)",
    fans: "团体",
    lat: 34.32, lng: 109.00, // 重庆坐标
    avatar: "https://p1.music.126.net/-OPbbZN4XTKpvg-jvwttfw==/109951164076924582.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["ljz329", "弹壳Danko", "AZ阿之", "", "毕冉","DP"]
  },
 {
    name: "Gosh Music",
    fans: "团体",
    lat: 29.55, lng: 106.51, // 重庆坐标
    avatar: "https://p2.music.126.net/_Mv6nmc8S6O5mPZxnJrRGQ==/109951163104160083.jpg?param=130y130",
    neteaseId: "12072073",
    type: "label",
members: ["GAI周延","Toryondacloud","雾都L4WUDU","王嗣尧TURBO","布瑞吉Bridge", "Pop J", "REGI陈彦希", "OG ROLLY", "希介","小艾EYE"]
  },
 {
    name: "觀山水",
    fans: "团体",
    lat: 29.59, lng: 106.55, // 重庆坐标
    avatar: "https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_8bcedf726d6ab5686046074d2308eb7e~c5_300x300.jpeg?from=2956013662",
    neteaseId: "",
    type: "label",
members: ["OneOne","burning在飞","川渝之子BigSkies","阿波罗","海娃", "Big Light", "nocry", "REVO", "YU","CVN源仔"]
  },
{
    name: "2727",
    fans: "团体",
    lat: 31.10, lng: 121.58, // 重庆坐标
    avatar: "https://p1.music.126.net/sv15Ht_46qotsbPU5zEIGg==/109951169200216608.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["鼠尾草","Buzzy","DANNY K","EINK","FEEELEVEN", "JYnostop", "周夏影"]
  },
{
    name: "马王HorseKing",
    fans: "团体",
    lat: 44.05, lng: 81.52,
    avatar: "https://p2.music.126.net/JKmU1RdARAU010AhSUWKfQ==/109951168652576426.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["叶尔林", "kxpl", "Hayrul海力", "Swang多雷", "刘炫廷"]
  },

        {
  name: "DARK9COMMUNITY 暗夜社区",
  fans: "团体",
  lat: 22.60, lng: 114.12,
  avatar: "https://p1.music.126.net/5erInoTwe_J-k_I3zkhkmA==/109951170536212253.jpg?param=130y130",
  neteaseId: "",
type: "label",
members: ["FANVY", "5IVE5IVE", "88LIEN","Arthurnevawakes","Chalky Wong","Crazy Omega"]
},

{
    name: "永力兄弟会",
    fans: "团体",
    lat: 29.52, lng: 106.54, // 重庆坐标
    avatar: "https://p1.music.126.net/6XvHmFJOl2wx_HHZYdPrHg==/109951163182548906.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["Toryondacloud","希介","Lil Chucky","G Sauce","刘嘉一", "Icy White", "TivaAaa", "Raelion", "kill bad feelings","LitXu力旭","Yaokai","YUNG NEO","#cmt"]
  },

{
    name: "DIGI GHETTO",
    fans: "团体",
    lat: 30.62, lng: 104.07, // 重庆坐标
    avatar: "https://p2.music.126.net/4e4PZYbNakiSBkuKdOvw7A==/109951166769142486.jpg?param=130y130",
    neteaseId: "33693423",
    type: "label",
members: ["mac ova seas", "艾志恒Asen", "TOYOKI", "MULA SAKEE", "KIV","THOME"]
  },
{
    name: "BornLegendMusic",
    fans: "团体",
    lat: 30.69, lng: 103.96, // 重庆坐标
    avatar: "https://p1.music.126.net/dXaSTLr7gtTAm9p0Kuakfw==/109951171942752708.jpg?param=180y180",
    neteaseId: "99794118",
    type: "label",
members: ["李佳隆", "等一下就回家", "Sillygami", "ZenithLuvYou", "陈俊岐","Yoanko Futura"]
  },
{
    name: "A Few Good Kids",
    fans: "团体",
    lat: 30.76, lng: 104.01, // 重庆坐标
    avatar: "https://p2.music.126.net/IMdPfEmaNdWZCj4aOuDaqw==/109951166027210198.jpg?param=130y130",
    neteaseId: "48165702",
    type: "label",
members: ["马思唯", "YOUNG13DBABY", "FENDIGHEE RICCH", "CashTrippy", "YTH Chopie","ATM Hasnson","Llil Ken"]
  },
{
    name: "Higher Brothers",
    fans: "团体",
    lat: 30.59, lng: 104.03, // 重庆坐标
    avatar: "https://p1.music.126.net/U9_yVbWosdU9hd2PluL7mQ==/109951164269437732.jpg?param=130y130",
    neteaseId: "12002201",
    type: "label",
members: ["马思唯", "KnowKnow", "PSY.P", "Melo"]
  },

{
    name: "AsianAstar",
    fans: "团体",
    lat: 30.72, lng: 104.17, // 重庆坐标
    avatar: "https://p1.music.126.net/DBa9Ou51RnMQEKHUGsn4Bw==/109951167529645441.jpg?param=200y200",
    neteaseId: "",
    type: "label",
members: ["罗言", "LSGCsikoriot", "Uzzy", "吕富贵", "BOBBYNOPEACE","黄云龙"]
  },
{
    name: "APEX",
    fans: "团体",
    lat: 30.28, lng: 120.12, // 重庆坐标
    avatar: "https://p1.music.126.net/bc4bF5Dg3eBkNcCyXD689g==/109951165057276292.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["LEGGO", "黄之仪Kyra Zilver", "4D"]
  },
{
    name: "Y.H.L",
    fans: "团体",
    lat: 23.11, lng: 113.43, // 重庆坐标
    avatar: "http://p1.music.126.net/DCWJtz1jhkA3R1Yt2nMf2w==/109951172008304215.jpg?param=177y177",
    neteaseId: "",
    type: "label",
members: ["Player J", "步步高先生", "阿牛"]
  },
{
    name: "滇声气",
    fans: "团体",
    lat: 24.99, lng: 102.79, // 重庆坐标
    avatar: "https://p1.music.126.net/5dEUmKOrBn-yKEnKuwrCnA==/109951168762553034.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["D-roc", "大晖", "MC脏脏","卓卓","7'angelo陶英杰"]
  },

{
  name: "龍胆紫/PurpleSoul",
  fans: "团体",
  lat: 39.90, lng: 116.26,
  avatar: "https://p2.music.126.net/yPtHFPYrG3OBnFUI9qgSJA==/109951167535658905.jpg?param=130y130",
  neteaseId: "",
type: "label",
members: ["FAC-D12", "JahjahWay", "SouthSideSamurai"]
},
{
  name: "广顺",
  fans: "团体",
  lat: 40.04, lng: 116.39,
  avatar: "https://p1.music.126.net/dZ4kTHq_wdwqILE10EByTA==/109951171449717955.jpg?param=200y200",
  neteaseId: "",
type: "label",
members: ["辉子", "秃子2z", "金剑GOLDENSWORD","赵山河"]
},
{
  name: "龙井说唱",
  fans: "团体",
  lat: 39.77, lng: 116.45,
  avatar: "https://p2.music.126.net/anpTIBDMSvMVgEX2qaquBQ==/177021372091849.jpg?param=130y130",
  neteaseId: "",
type: "label",
members: ["孙骁","孙旭","奕文","益含"]
},

{
  name: "丹镇北京",
  fans: "团体",
  lat: 39.89, lng: 116.43,
  avatar: "https://p2.music.126.net/-22Jtm-ZLLcuBSXWKFX42g==/109951163297130138.jpg?param=130y130",
  neteaseId: "",
type: "label",
members: ["刘悦spam-生番", "黄硕N-Bomb", "张千C.Jam","Saber梁维嘉","Stinging Ray","Mido美朵","中俄艾迪AIDI RUSCHINO","DJ Quaver","斯威特MCSWEET"]
},
{
  name: "直火帮 Straight Fire Gang",
  fans: "团体",
  lat: 31.13, lng: 121.51,
  avatar: "https://p1.music.126.net/yAuwlHfV9CRDOrMhanna4Q==/109951170529567546.jpg?param=130y130",
  neteaseId: "",
type: "label",
members: ["直火帮Feezy","谢子通","直火帮Chuck Zigga Jiang"]
},
{
    name: "C-BLOCK",
    fans: "团体",
    lat: 28.13, lng: 113.05, // 重庆坐标
    avatar: "https://p1.music.126.net/N0QdcHmHuEiiu4kkmCflsA==/109951164217358679.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["盛宇D-SHINE", "KEY.L刘聪", "功夫胖KUNGFU-PEN"]
  },

{
    name: "活死人",
    fans: "团体",
    lat: 31.27, lng: 121.40, // 重庆坐标
    avatar: "https://p1.music.126.net/n7fkKOT96Sw64XCMXCO2yg==/109951162816427244.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["法老", "龙崎", "小精灵", "杨和苏KeyNG", "JarStick","李毅杰PISSY","隆历奇","鹤仙问鹿仙","杨秋儒"]
  },
{
    name: "WOLF GANG",
    fans: "团体",
    lat: 43.92, lng: 87.53, // 重庆坐标
    avatar: "http://p2.music.126.net/TDkQT39KaAbbAT09AoSWZQ==/109951169525357300.jpg?param=120y120",
    neteaseId: "",
    type: "label",
members: ["那奇沃夫", "kkluv", "Prodby玉", "Laser 3", "帕特龙"]
  },
{
    name: "Wave Gang",
    fans: "团体",
    lat: 29.45, lng: 106.53, // 重庆坐标
    avatar: "https://p1.music.126.net/5ITVYShs3ugKNzvz8YaMPw==/109951166117792039.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["WILDIN", "BIG Shivy", "弗洛·文尔", "LEON LEE","Maikon Flocka Flame","Aye叶师傅","The 100","Kravn","马金在潇洒","岸林","Sealikethis","YBlanket","李外LilWine"]
  },

{
    name: "五人组",
    fans: "团体",
    lat: 30.63, lng: 104.00, // 重庆坐标
    avatar: "https://p1.music.126.net/K-NTUezcTAWp_WFplWIfdg==/109951171911437913.jpg?param=200y200",
    neteaseId: "",
    type: "label",
members: ["SASIOVERLXRD", "RICHNOMADIC", "连麻Swimming", "JinJiBeWater-隼"]
  },
{
    name: "CandyShop",
    fans: "团体",
    lat: 30.57, lng: 104.07, // 重庆坐标
    avatar: "https://p1.music.126.net/pv_lEi71QotuScCgA84eFw==/109951169771636485.jpg?param=200y200",
    neteaseId: "",
    type: "label",
members: ["Vansdaddy", "Kito", "Monovisa", "李文","叶轩池"]
  },
{
    name: "WASTED CLUB",
    fans: "团体",
    lat: 34.71, lng: 113.63, // 重庆坐标
    avatar: "https://p2.music.126.net/XE29r0E-P1_wY5TRQcc5NA==/109951168731827120.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["张方钊", "河北吴孟达", "Louis 1520", "卡力鲨鱼","卡力老虎","卡力蛇"]
  },

{
    name: "顽童MJ116",
    fans: "团体",
    lat: 25.02, lng: 121.54, // 重庆坐标
    avatar: "https://p2.music.126.net/qsiisFdPgdIUwioeNEju9g==/109951170726257577.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["瘦子E.SO", "小春Kenzy", "大渊MUTA"]
  },
{
    name: "SFNT",
    fans: "团体",
    lat: 23.07, lng: 113.22, // 重庆坐标
    avatar: "https://p2.music.126.net/XPBiITW7goMb18F1PmGPyg==/109951168500522995.jpg?param=130y130",
    neteaseId: "",
    type: "label",
members: ["TizzyT", "Crazy C", "CHOCKEY有三","HEAT J"]
  },

  {
    name: "NOUS",
    fans: "团体",
    lat: 34.24, lng: 108.91, // 西安坐标
    avatar: "https://p1.music.126.net/NuaOT6u6v2N6OD9zbB6wYg==/109951162800007664.jpg?param=200y200",
    neteaseId: "",
    type: "label",
members: ["派克特(PACT）", "CREAM D", "KIGGA", "张昊","鱼头-killa4nia","SIMBA辛巴","刘柄鑫","GIF7ED","Dirty Twinz","井剑歌","Echo"]
  },
  {
    name: "Human Register",
    fans: "团体",
    lat: 31.16, lng: 121.28,
    avatar: "https://p2.music.126.net/ItuxjP2v-coLKVi_hF_HHg==/109951169962583151.jpg?param=130y130",
    neteaseId: "",
    type: "label",
    members: ["Akiiyaki", "Chinglish", "Hoozie", "Lan", "Mood", "pornstar", "skiboyvv", "Taco", "tree", "DAMNLIFE", "know the vibe", "求索4 (qs4)", "duckroi", "Leadest"]
  }

      ];
  return { singers, cities, labels };
})();
