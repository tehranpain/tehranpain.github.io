// 人物、厂牌与城市基础数据。编辑名单时优先修改本文件。
window.RapMapData = (() => {
const singers = [
  {
    name: "Lu1",
    aliases: ["路壹", "Lu1路壹"],
    fans: "13.3万",
    lat: 30.99, lng: 121.36,
    avatar: "https://p1.music.126.net/yYvj9G0p7LwAIgpwU2wCYg==/109951168917009533.jpg?param=130y130",
    neteaseId: "4037"
  },
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
    fans: "13.6万",
    lat: 44.11, lng: 81.30,
    avatar: "https://p1.music.126.net/V6ricHe_82ZLYy_8smTyNQ==/109951173041217064.jpg?param=130y130",
    neteaseId: "12148091"
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
  fans: "75.3万",
  lat: 31.98, lng: 120.90,
  avatar: "https://p1.music.126.net/jKNKPRUkxpWiXmm40wxMTQ==/109951171295629808.jpg?param=130y130",
  neteaseId: "31668975"
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
  aliases: ["FEEELEVEN"],
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
  lat: 26.43, lng: 111.61,
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
  aliases: ["Psy.P"],
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
  aliases: ["Kito"],
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
  aliases: ["派克特(PACT）"],
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
  aliases: ["鼠尾草"],
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
  lat: 29.05, lng: 111.68,
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
  aliases: ["Trouble.Z"],
  name: "高天佐",
  fans: "31.2万",
  lat:32.01 , lng: 118.70,
  avatar: "https://p2.music.126.net/y-3qwEWtftd17tbfZiAUWA==/109951170513898827.jpg?param=130y130",
  neteaseId: "12236269",
  desc:"「说唱听我的第一季」亚军"

},
{
  aliases: ["MC光光"],
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
  fans: "1.4万",
  lat: 40.04, lng: 116.27,
  avatar: "https://p1.music.126.net/4VbFjrI7SbFZUcWlFnIitA==/109951166932845512.jpg?param=130y130",
  neteaseId: "50711969",
  desc: "北京唱作人"
},
{
  name: "61H",
  fans: "9203",
  lat: 37.64, lng: 121.11,
  avatar: "https://p1.music.126.net/2W9ID-UcqPGitLUVMfaTsQ==/109951166174212415.jpg?param=130y130",
  neteaseId: "36399677",
  desc: "山东烟台说唱音乐人"
},
{
  name: "lov3chanel",
  fans: "8329",
  lat: 31.07, lng: 121.32,
  avatar: "https://p1.music.126.net/Q9r5xiSg7NzbQvif8wySjw==/109951166348543009.jpg?param=130y130",
  neteaseId: "34390291"
},
{
  name: "MoFly",
  fans: "2.9万",
  lat: 23.02, lng: 113.12,
  avatar: "https://p1.music.126.net/_tO04oxx_6k3cPVPtdR6iQ==/109951165885970438.jpg?param=130y130",
  neteaseId: "47471965",
  aliases: ["Mofly", "贺奕明"]
},
{
  name: "雪花绮罗愛",
  fans: "1.1万",
  lat: 23.07, lng: 114.31,
  avatar: "https://p1.music.126.net/xsxrF-TLCIkD69bPMJTk2A==/109951170043782048.jpg?param=130y130",
  neteaseId: "35425790",
  aliases: ["雪花绮罗爱", "雪花綺羅愛", "YOKII"]
},
{
  name: "User116",
  fans: "3.1万",
  lat: 31.33, lng: 121.45,
  avatar: "https://p1.music.126.net/WQo4BrOD3Fu_oAfyIsRi9g==/109951173821545633.jpg?param=130y130",
  neteaseId: "59135028"
}
      ];


// Confirmed group members. Coordinates are supplied by the user; profile-only entries never become map points.
const collectedMembers20261105 = [
  {
    "name": "刘炫廷",
    "aliases": [
      "LAST KING"
    ],
    "neteaseId": "12157298",
    "fans": "23.7万",
    "fanCount": 237029,
    "avatar": "https://p1.music.126.net/QV0m88znchhwEPRiAIe4Xw==/109951173972906698.jpg?param=130y130",
    "lat": 41.77,
    "lng": 86.16,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "法老"
      },
      {
        "name": "黄旭"
      },
      {
        "name": "盛宇D-SHINE"
      },
      {
        "name": "雾都L4WUDU"
      },
      {
        "name": "新秀"
      },
      {
        "name": "杨和苏KeyNG"
      },
      {
        "name": "叶尔林"
      },
      {
        "name": "钟欣cent3e"
      },
      {
        "name": "Capper"
      },
      {
        "name": "CHOCKEY有三"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "FOX胡天渝"
      },
      {
        "name": "GALI"
      },
      {
        "name": "Hayrul海力"
      },
      {
        "name": "ICE杨长青"
      },
      {
        "name": "KEY.L刘聪"
      },
      {
        "name": "kxpl"
      },
      {
        "name": "MC HotDog热狗"
      },
      {
        "name": "NINEONE#乃万"
      },
      {
        "name": "Swang多雷"
      },
      {
        "name": "TizzyT"
      },
      {
        "name": "XMASwu(吴骜)"
      }
    ]
  },
  {
    "name": "隆历奇",
    "aliases": [],
    "neteaseId": "12065015",
    "fans": "16.7万",
    "fanCount": 167290,
    "avatar": "https://p1.music.126.net/6LMxYMm0NtTKG4tuBU4pVA==/109951168203000632.jpg?param=130y130",
    "lat": 39.15,
    "lng": 117.09,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "阿拉梅"
      },
      {
        "name": "法老"
      },
      {
        "name": "侃迪Kandi"
      },
      {
        "name": "李毅杰PISSY"
      },
      {
        "name": "龙崎"
      },
      {
        "name": "马赫mood"
      },
      {
        "name": "小精灵"
      },
      {
        "name": "杨和苏KeyNG"
      },
      {
        "name": "杨秋儒"
      },
      {
        "name": "叶尔林"
      },
      {
        "name": "AA"
      },
      {
        "name": "AJ赖煜哲"
      },
      {
        "name": "Buzzy"
      },
      {
        "name": "FEEEleven"
      },
      {
        "name": "FOX胡天渝"
      },
      {
        "name": "Hayrul海力"
      },
      {
        "name": "JarStick"
      },
      {
        "name": "Swang多雷"
      },
      {
        "name": "Wiz-H张子豪"
      }
    ]
  },
  {
    "name": "杨秋儒",
    "aliases": [],
    "neteaseId": "30395569",
    "fans": "11.0万",
    "fanCount": 109513,
    "avatar": "https://p1.music.126.net/CWHwao96_ZSNuU2qU_JeLw==/109951168915251633.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "阿达娃"
      },
      {
        "name": "法老"
      },
      {
        "name": "侃迪Kandi"
      },
      {
        "name": "李毅杰PISSY"
      },
      {
        "name": "隆历奇"
      },
      {
        "name": "小精灵"
      },
      {
        "name": "杨和苏KeyNG"
      },
      {
        "name": "Buzzy"
      },
      {
        "name": "DANNY K"
      },
      {
        "name": "JarStick"
      }
    ]
  },
  {
    "name": "谢子通",
    "aliases": [
      "直火帮XZT"
    ],
    "neteaseId": "15200968",
    "fans": "10.6万",
    "fanCount": 106116,
    "avatar": "https://p1.music.126.net/hupeO9c-RpeE-mtHcP7OkQ==/109951172381324147.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "陆政廷Lil Jet"
      },
      {
        "name": "王嗣尧TURBO"
      },
      {
        "name": "小安迪LilAndyKillThemAll"
      },
      {
        "name": "小酷Coola"
      },
      {
        "name": "直火帮Chuck Zigga Jiang"
      },
      {
        "name": "直火帮Feezy"
      },
      {
        "name": "Athree"
      },
      {
        "name": "Rapeter"
      },
      {
        "name": "TangoZ"
      },
      {
        "name": "Yee"
      }
    ]
  },
  {
    "name": "SIMBA辛巴",
    "aliases": [
      "SIIVIBA"
    ],
    "neteaseId": "12085585",
    "fans": "9.3万",
    "fanCount": 93131,
    "avatar": "https://p1.music.126.net/8iXS2Y503F8-7EjS3NkzoQ==/109951170613042384.jpg?param=130y130",
    "lat": 34.35,
    "lng": 108.83,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "贰万"
      },
      {
        "name": "高天佐"
      },
      {
        "name": "鬼卞"
      },
      {
        "name": "国蛋"
      },
      {
        "name": "辉子"
      },
      {
        "name": "梁淞Tsong"
      },
      {
        "name": "林渝植Anoryz"
      },
      {
        "name": "刘柄鑫"
      },
      {
        "name": "派克特"
      },
      {
        "name": "萨萨"
      },
      {
        "name": "瘦恒SoulHan"
      },
      {
        "name": "王以太"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "俞天时"
      },
      {
        "name": "张昊"
      },
      {
        "name": "直火帮Feezy"
      },
      {
        "name": "BrAnTB白景屹"
      },
      {
        "name": "Capper"
      },
      {
        "name": "Cee"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "DANNY K"
      },
      {
        "name": "Dirty Twinz"
      },
      {
        "name": "Echo"
      },
      {
        "name": "GIF7ED"
      },
      {
        "name": "JarStick"
      },
      {
        "name": "KEY.L刘聪"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "NINEONE#乃万"
      },
      {
        "name": "SeanT肖恩恩"
      }
    ]
  },
  {
    "name": "Lil Howcy",
    "aliases": [
      "冷俊儒"
    ],
    "neteaseId": "1209050",
    "fans": "8.8万",
    "fanCount": 88210,
    "avatar": "https://p1.music.126.net/jpQNzBhbdZGkCzfHgi0iiQ==/109951174000031845.jpg?param=130y130",
    "lat": 32.14,
    "lng": 118.64,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "八口8uck"
      },
      {
        "name": "斑比Bambii"
      },
      {
        "name": "大D(DLyn)"
      },
      {
        "name": "贰万"
      },
      {
        "name": "高天佐"
      },
      {
        "name": "侃迪Kandi"
      },
      {
        "name": "连麻Swimming"
      },
      {
        "name": "梁淞Tsong"
      },
      {
        "name": "小安迪LilAndyKillThemAll"
      },
      {
        "name": "小精灵"
      },
      {
        "name": "徐真真"
      },
      {
        "name": "早安"
      },
      {
        "name": "BustaZun"
      },
      {
        "name": "Ice Paper"
      },
      {
        "name": "JarStick"
      },
      {
        "name": "Kc"
      },
      {
        "name": "KnowKnow"
      },
      {
        "name": "lil MILK"
      },
      {
        "name": "Mc光光"
      },
      {
        "name": "Saber梁维嘉"
      }
    ]
  },
  {
    "name": "鱼头_killa4nia",
    "aliases": [
      "鱼头-killa4nia"
    ],
    "neteaseId": "12158158",
    "fans": "8.7万",
    "fanCount": 87343,
    "avatar": "https://p1.music.126.net/cTkPGlwsNKo1K1Z-l8paJA==/109951162806632235.jpg?param=130y130",
    "lat": 34.36,
    "lng": 109.07,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "阿拉梅"
      },
      {
        "name": "艾福杰尼"
      },
      {
        "name": "艾里克"
      },
      {
        "name": "艾热AIR"
      },
      {
        "name": "朝三"
      },
      {
        "name": "儿几"
      },
      {
        "name": "贰万"
      },
      {
        "name": "法老"
      },
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "黄旭"
      },
      {
        "name": "刘柄鑫"
      },
      {
        "name": "派克特"
      },
      {
        "name": "盛宇D-SHINE"
      },
      {
        "name": "王波"
      },
      {
        "name": "杨布拉德"
      },
      {
        "name": "张昊"
      },
      {
        "name": "中俄艾迪AIDI RUSCHINO"
      },
      {
        "name": "AA"
      },
      {
        "name": "AR刘夫阳"
      },
      {
        "name": "Athree"
      },
      {
        "name": "C2C"
      },
      {
        "name": "Capper"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "DANNY K"
      },
      {
        "name": "Dirty Twinz"
      },
      {
        "name": "Echo"
      },
      {
        "name": "GIF7ED"
      },
      {
        "name": "Ice Paper"
      },
      {
        "name": "Keyso寿君超"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "NINEONE#乃万"
      },
      {
        "name": "Saber梁维嘉"
      },
      {
        "name": "SIMBA辛巴"
      }
    ]
  },
  {
    "name": "Prodby玉",
    "aliases": [],
    "neteaseId": "12085424",
    "fans": "8.0万",
    "fanCount": 79699,
    "avatar": "https://p1.music.126.net/O6DMaLGzGHkcQ98QLpKsUQ==/109951169472001986.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "那奇沃夫"
      },
      {
        "name": "帕特龙"
      },
      {
        "name": "杨布拉德"
      },
      {
        "name": "Athree"
      },
      {
        "name": "kkluv"
      }
    ]
  },
  {
    "name": "黄硕N-Bomb",
    "aliases": [],
    "neteaseId": "12092260",
    "fans": "5.9万",
    "fanCount": 59144,
    "avatar": "https://p1.music.126.net/QISFE0jKpVDZmnEjF1CTUw==/109951173485717676.jpg?param=130y130",
    "lat": 39.77,
    "lng": 116.2,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "儿几"
      },
      {
        "name": "贰万"
      },
      {
        "name": "法老"
      },
      {
        "name": "金剑GOLDENSWORD"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "派克特"
      },
      {
        "name": "斯威特MCSWEET"
      },
      {
        "name": "秃子2z"
      },
      {
        "name": "王波"
      },
      {
        "name": "徐骁宇DEAN K"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "张千C.Jam"
      },
      {
        "name": "中俄艾迪AIDI RUSCHINO"
      },
      {
        "name": "AR刘夫阳"
      },
      {
        "name": "DJ Quaver"
      },
      {
        "name": "Keyso寿君超"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "Mido美朵"
      },
      {
        "name": "P.O.E"
      },
      {
        "name": "Saber梁维嘉"
      },
      {
        "name": "Stinging Ray"
      },
      {
        "name": "TangoZ"
      }
    ]
  },
  {
    "name": "Dirty Twinz",
    "aliases": [],
    "neteaseId": "1139001",
    "fans": "3.8万",
    "fanCount": 37922,
    "avatar": "https://p1.music.126.net/IjmPN-M_Mj8XHF1AoO4nAQ==/109951163067642594.jpg?param=130y130",
    "lat": 34.25,
    "lng": 108.75,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "贰万"
      },
      {
        "name": "刘柄鑫"
      },
      {
        "name": "派克特"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "早安"
      },
      {
        "name": "张昊"
      },
      {
        "name": "Athree"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "Echo"
      },
      {
        "name": "GIF7ED"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "NINEONE#乃万"
      },
      {
        "name": "SIMBA辛巴"
      }
    ]
  },
  {
    "name": "刘柄鑫",
    "aliases": [],
    "neteaseId": "1063109",
    "fans": "3.7万",
    "fanCount": 37355,
    "avatar": "https://p1.music.126.net/0SV7mbiZdwKYQtmfuaq3gQ==/109951163063766216.jpg?param=130y130",
    "lat": 34.17,
    "lng": 108.97,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "等一下就回家"
      },
      {
        "name": "贰万"
      },
      {
        "name": "姜云升"
      },
      {
        "name": "谟西Mercy"
      },
      {
        "name": "派克特"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "俞天时"
      },
      {
        "name": "张昊"
      },
      {
        "name": "Capper"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "Dirty Twinz"
      },
      {
        "name": "Echo"
      },
      {
        "name": "GIF7ED"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "NINEONE#乃万"
      },
      {
        "name": "SIMBA辛巴"
      }
    ]
  },
  {
    "name": "KIGGA",
    "aliases": [],
    "neteaseId": "1153020",
    "fans": "3.7万",
    "fanCount": 37241,
    "avatar": "https://p1.music.126.net/TeUaUDPJbxLm_R0LpVFi2g==/109951166435569368.jpg?param=130y130",
    "lat": 49.58,
    "lng": 117.48,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "阿拉梅"
      },
      {
        "name": "艾里克"
      },
      {
        "name": "艾热AIR"
      },
      {
        "name": "朝三"
      },
      {
        "name": "贰万"
      },
      {
        "name": "法老"
      },
      {
        "name": "功夫胖KUNGFU-PEN"
      },
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "黄旭"
      },
      {
        "name": "刘柄鑫"
      },
      {
        "name": "派克特"
      },
      {
        "name": "王波"
      },
      {
        "name": "西奥Sio"
      },
      {
        "name": "杨布拉德"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "张昊"
      },
      {
        "name": "中俄艾迪AIDI RUSCHINO"
      },
      {
        "name": "AA"
      },
      {
        "name": "AR刘夫阳"
      },
      {
        "name": "Athree"
      },
      {
        "name": "C2C"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "DANNY K"
      },
      {
        "name": "Dirty Twinz"
      },
      {
        "name": "Echo"
      },
      {
        "name": "GALI"
      },
      {
        "name": "GIF7ED"
      },
      {
        "name": "Ice Paper"
      },
      {
        "name": "JD"
      },
      {
        "name": "Jony J"
      },
      {
        "name": "KAFE-HU咖啡胡"
      },
      {
        "name": "KEY.L刘聪"
      },
      {
        "name": "Keyso寿君超"
      },
      {
        "name": "MC脏脏"
      },
      {
        "name": "NINEONE#乃万"
      },
      {
        "name": "Saber梁维嘉"
      },
      {
        "name": "SIMBA辛巴"
      }
    ]
  },
  {
    "name": "帕特龙",
    "aliases": [],
    "neteaseId": "34514656",
    "fans": "3.6万",
    "fanCount": 36113,
    "avatar": "https://p1.music.126.net/7sYRWsn8kYqU02TGiabz0g==/109951172839532347.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "法老"
      },
      {
        "name": "那奇沃夫"
      },
      {
        "name": "BABYKUSH"
      },
      {
        "name": "kkluv"
      },
      {
        "name": "Laser3"
      },
      {
        "name": "Prodby玉"
      }
    ]
  },
  {
    "name": "鹤仙问鹿仙",
    "aliases": [],
    "neteaseId": "12078198",
    "fans": "3.5万",
    "fanCount": 35375,
    "avatar": "https://p1.music.126.net/AkhItd6_jZtft4HcNk8MnA==/109951165826348119.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "法老"
      },
      {
        "name": "鬼卞"
      },
      {
        "name": "李毅杰PISSY"
      },
      {
        "name": "陆政廷Lil Jet"
      },
      {
        "name": "小精灵"
      },
      {
        "name": "云别"
      },
      {
        "name": "Buzzy"
      },
      {
        "name": "Yee"
      }
    ]
  },
  {
    "name": "AZ啊之",
    "aliases": [
      "AZ阿之"
    ],
    "neteaseId": "35946228",
    "fans": "3.3万",
    "fanCount": 32687,
    "avatar": "https://p1.music.126.net/rOdkPMJtv-WrJB4jCYeq1A==/109951167254059738.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "弹壳Danko"
      },
      {
        "name": "法老"
      },
      {
        "name": "高天佐"
      },
      {
        "name": "俞天时"
      },
      {
        "name": "Athree"
      },
      {
        "name": "ljz329"
      },
      {
        "name": "Mc光光"
      }
    ]
  },
  {
    "name": "直火帮Chuck Zigga Jiang",
    "aliases": [],
    "neteaseId": "31865263",
    "fans": "2.9万",
    "fanCount": 28711,
    "avatar": "https://p1.music.126.net/i4sL2X7jKii-swMCSoeREA==/109951170527608549.jpg?param=130y130",
    "lat": 31.1,
    "lng": 121.23,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "龙崎"
      },
      {
        "name": "陆政廷Lil Jet"
      },
      {
        "name": "施鑫文月"
      },
      {
        "name": "谢子通"
      },
      {
        "name": "直火帮Feezy"
      },
      {
        "name": "AA"
      },
      {
        "name": "Spylent"
      }
    ]
  },
  {
    "name": "周夏影",
    "aliases": [
      "Sino"
    ],
    "neteaseId": "12702147",
    "fans": "2.2万",
    "fanCount": 21566,
    "avatar": "https://p1.music.126.net/UwjYsn5LD771uf7wxQtFxg==/109951172023013925.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "法老"
      },
      {
        "name": "陆政廷Lil Jet"
      },
      {
        "name": "Buzzy"
      },
      {
        "name": "DANNY K"
      },
      {
        "name": "EINK"
      },
      {
        "name": "FEEEleven"
      },
      {
        "name": "JYnostop"
      }
    ]
  },
  {
    "name": "BustaZun",
    "aliases": [],
    "neteaseId": "12287768",
    "fans": "2.1万",
    "fanCount": 21027,
    "avatar": "https://p1.music.126.net/0RIVr-hpar1EjqUEGQTqSA==/109951172617567449.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "贰万"
      },
      {
        "name": "高天佐"
      },
      {
        "name": "侃迪Kandi"
      },
      {
        "name": "秃子2z"
      },
      {
        "name": "早安"
      },
      {
        "name": "Ice Paper"
      },
      {
        "name": "Kc"
      },
      {
        "name": "Lil Howcy"
      },
      {
        "name": "Mc光光"
      }
    ]
  },
  {
    "name": "Yoanko Futura",
    "aliases": [],
    "neteaseId": "34634523",
    "fans": "1.8万",
    "fanCount": 17626,
    "avatar": "https://p1.music.126.net/kudM0KBDRfvATc1Sjal2IQ==/109951173817848931.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "陈俊岐"
      },
      {
        "name": "等一下就回家"
      },
      {
        "name": "鬼卞"
      },
      {
        "name": "李佳隆"
      },
      {
        "name": "LEGGO"
      },
      {
        "name": "Sillygami"
      }
    ]
  },
  {
    "name": "张千C.Jam",
    "aliases": [],
    "neteaseId": "12286477",
    "fans": "1.5万",
    "fanCount": 14759,
    "avatar": "https://p1.music.126.net/w5ujyaHf5pHPW3GWcmu8iA==/109951168476110587.jpg?param=130y130",
    "lat": 40,
    "lng": 116.55,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "辉子"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "瘦恒SoulHan"
      },
      {
        "name": "斯威特MCSWEET"
      },
      {
        "name": "中俄艾迪AIDI RUSCHINO"
      },
      {
        "name": "AR刘夫阳"
      },
      {
        "name": "Buzzy"
      },
      {
        "name": "Cee"
      },
      {
        "name": "DJ Quaver"
      },
      {
        "name": "Mido美朵"
      },
      {
        "name": "Saber梁维嘉"
      },
      {
        "name": "Stinging Ray"
      },
      {
        "name": "V.O.B"
      }
    ]
  },
  {
    "name": "JYnostop",
    "aliases": [
      "街道的王子"
    ],
    "neteaseId": "12966930",
    "fans": "1.4万",
    "fanCount": 14435,
    "avatar": "https://p1.music.126.net/_oTEOJ44HSTRJ8KqWVyepw==/109951172645828853.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "法老"
      },
      {
        "name": "杨和苏KeyNG"
      },
      {
        "name": "周夏影"
      },
      {
        "name": "Buzzy"
      },
      {
        "name": "DANNY K"
      },
      {
        "name": "EINK"
      },
      {
        "name": "FEEEleven"
      }
    ]
  },
  {
    "name": "FANVY",
    "aliases": [],
    "neteaseId": "12466528",
    "fans": "1.4万",
    "fanCount": 14161,
    "avatar": "https://p1.music.126.net/c3T6OGweDsSU_Fqk-hejbg==/109951166785972339.jpg?param=130y130",
    "lat": 22.59,
    "lng": 113.97,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "5IVE5IVE"
      },
      {
        "name": "88LIEN"
      },
      {
        "name": "八口8uck"
      },
      {
        "name": "雾都L4WUDU"
      },
      {
        "name": "ANGPANG"
      },
      {
        "name": "Arthurnevawakes"
      },
      {
        "name": "Billionhappy"
      },
      {
        "name": "CashTrippy"
      },
      {
        "name": "Chalky Wong"
      },
      {
        "name": "Dove鸽子"
      },
      {
        "name": "FENDIGHEE RICCH"
      },
      {
        "name": "HEAT J"
      },
      {
        "name": "YOUNG13DBABY"
      }
    ]
  },
  {
    "name": "Chinglish",
    "aliases": [],
    "neteaseId": "35950965",
    "fans": "1.3万",
    "fanCount": 13380,
    "avatar": "https://p1.music.126.net/5etm8HBeOZXCq_WAF9SLQg==/109951170187207509.jpg?param=130y130",
    "lat": 34.78,
    "lng": 119.27,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "Hoozie"
      },
      {
        "name": "Lan"
      },
      {
        "name": "skiboyvv"
      },
      {
        "name": "Taco"
      }
    ]
  },
  {
    "name": "赵山河",
    "aliases": [],
    "neteaseId": "12329522",
    "fans": "1.3万",
    "fanCount": 13320,
    "avatar": "https://p1.music.126.net/gvB-V7VgRBd8YrDPwbWfnw==/109951170435065334.jpg?param=130y130",
    "lat": 40.06,
    "lng": 116.48,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "辉子"
      },
      {
        "name": "金剑GOLDENSWORD"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "秃子2z"
      }
    ]
  },
  {
    "name": "卡力鲨鱼",
    "aliases": [],
    "neteaseId": "12215165",
    "fans": "1.2万",
    "fanCount": 12436,
    "avatar": "https://p1.music.126.net/iHxHSw0ELeYQF6tL5yvGZw==/109951173961577850.jpg?param=130y130",
    "lat": 34.19,
    "lng": 108.89,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "河北吴孟达"
      },
      {
        "name": "卡力老虎"
      },
      {
        "name": "卡力蛇"
      },
      {
        "name": "连麻Swimming"
      },
      {
        "name": "张方钊"
      },
      {
        "name": "Louis 1520"
      },
      {
        "name": "MISTERK"
      }
    ]
  },
  {
    "name": "张昊",
    "aliases": [
      "Utopia"
    ],
    "neteaseId": "12173444",
    "fans": "1.2万",
    "fanCount": 12049,
    "avatar": "https://p1.music.126.net/1IAmzX9MjcIBok62NMcoCA==/109951170182497360.jpg?param=130y130",
    "lat": 34.9,
    "lng": 108.95,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "贰万"
      },
      {
        "name": "刘柄鑫"
      },
      {
        "name": "派克特"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "Dirty Twinz"
      },
      {
        "name": "Echo"
      },
      {
        "name": "GIF7ED"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "NINEONE#乃万"
      },
      {
        "name": "SIMBA辛巴"
      }
    ]
  },
  {
    "name": "Lan",
    "aliases": [],
    "neteaseId": "35022427",
    "fans": "1.1万",
    "fanCount": 10666,
    "avatar": "https://p1.music.126.net/aj4u8qT3fAAFD7CM5igGoQ==/109951172808346550.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "5IVE5IVE"
      },
      {
        "name": "Alyway"
      },
      {
        "name": "Arthurnevawakes"
      },
      {
        "name": "Chalky Wong"
      },
      {
        "name": "Chinglish"
      },
      {
        "name": "delphia!"
      },
      {
        "name": "Hoozie"
      },
      {
        "name": "IsolYves"
      },
      {
        "name": "Mood"
      },
      {
        "name": "R!R!Riot"
      },
      {
        "name": "Taco"
      },
      {
        "name": "User116"
      },
      {
        "name": "Yoyi"
      }
    ]
  },
  {
    "name": "卡力蛇",
    "aliases": [],
    "neteaseId": "58030663",
    "fans": "1.0万",
    "fanCount": 10029,
    "avatar": "https://p1.music.126.net/zzvNLy1fH9bxmZ3v62bHcQ==/109951172767587191.jpg?param=130y130",
    "lat": 34.82,
    "lng": 113.64,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "河北吴孟达"
      },
      {
        "name": "卡力老虎"
      },
      {
        "name": "卡力鲨鱼"
      },
      {
        "name": "张方钊"
      },
      {
        "name": "Hidoyard"
      },
      {
        "name": "Louis 1520"
      }
    ]
  },
  {
    "name": "Hoozie",
    "aliases": [],
    "neteaseId": "36233708",
    "fans": "9387",
    "fanCount": 9387,
    "avatar": "https://p1.music.126.net/DmAqjlaXnXtJjM6EUFASzA==/109951172536036881.jpg?param=130y130",
    "lat": 39.94,
    "lng": 116.67,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "5IVE5IVE"
      },
      {
        "name": "africakid"
      },
      {
        "name": "Akiiyaki"
      },
      {
        "name": "Arthurnevawakes"
      },
      {
        "name": "Chinglish"
      },
      {
        "name": "delphia!"
      },
      {
        "name": "IsolYves"
      },
      {
        "name": "Lan"
      },
      {
        "name": "Mood"
      },
      {
        "name": "skiboyvv"
      },
      {
        "name": "Taco"
      }
    ]
  },
  {
    "name": "4D",
    "aliases": [],
    "neteaseId": "12782624",
    "fans": "9213",
    "fanCount": 9213,
    "avatar": "https://p1.music.126.net/VBXFCh5ZBisMz0a10EnLcA==/109951167836955719.jpg?param=130y130",
    "lat": 30.17,
    "lng": 120.18,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "黄之仪Kyra Zilver"
      },
      {
        "name": "李大奔BENZO"
      },
      {
        "name": "Capper"
      },
      {
        "name": "LEGGO"
      }
    ]
  },
  {
    "name": "Sillygami",
    "aliases": [
      "Gami"
    ],
    "neteaseId": "30781063",
    "fans": "8952",
    "fanCount": 8952,
    "avatar": "https://p1.music.126.net/o4mZa0N1L51bPJ7U6lY7gw==/109951173480521981.jpg?param=130y130",
    "lat": 28.32,
    "lng": 113.01,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "陈俊岐"
      },
      {
        "name": "等一下就回家"
      },
      {
        "name": "李佳隆"
      },
      {
        "name": "UPNEVERDOWN"
      },
      {
        "name": "Yoanko Futura"
      }
    ]
  },
  {
    "name": "CVN源仔",
    "aliases": [
      "Sivan Lee "
    ],
    "neteaseId": "46882789",
    "fans": "8383",
    "fanCount": 8383,
    "avatar": "https://p1.music.126.net/NUjd43NMp9EL_WyyEQGPaw==/109951172322189973.jpg?param=130y130",
    "lat": 32.08,
    "lng": 108.04,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "OneOne"
      }
    ]
  },
  {
    "name": "Yaokai",
    "aliases": [],
    "neteaseId": "12318443",
    "fans": "7784",
    "fanCount": 7784,
    "avatar": "https://p1.music.126.net/gVIwev3GNL1OGnC5CsGYMA==/109951173892119221.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "希介"
      },
      {
        "name": "africakid"
      },
      {
        "name": "R!R!Riot"
      },
      {
        "name": "Tlatre特雷西"
      },
      {
        "name": "Toryondacloud"
      }
    ]
  },
  {
    "name": "Laser3",
    "aliases": [
      "Laser 3"
    ],
    "neteaseId": "36336627",
    "fans": "7332",
    "fanCount": 7332,
    "avatar": "https://p1.music.126.net/ipFPTMX13cmOy8Ti8JyXeQ==/109951173172348203.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "那奇沃夫"
      },
      {
        "name": "帕特龙"
      },
      {
        "name": "Athree"
      },
      {
        "name": "kkluv"
      }
    ]
  },
  {
    "name": "kill bad feelings",
    "aliases": [],
    "neteaseId": "33796073",
    "fans": "7249",
    "fanCount": 7249,
    "avatar": "https://p1.music.126.net/Jwbpze3Zvt8TZmMe9Fb3DQ==/109951171271695168.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "八口8uck"
      },
      {
        "name": "布瑞吉Bridge"
      },
      {
        "name": "步步高先生"
      },
      {
        "name": "春"
      },
      {
        "name": "刀脚"
      },
      {
        "name": "贾真Jahgen"
      },
      {
        "name": "刘嘉一"
      },
      {
        "name": "王齐铭WatchMe"
      },
      {
        "name": "雾都L4WUDU"
      },
      {
        "name": "希介"
      },
      {
        "name": "Adam Ocean"
      },
      {
        "name": "Akemen杀"
      },
      {
        "name": "BombWayne"
      },
      {
        "name": "BroFA"
      },
      {
        "name": "DiorGoFlex"
      },
      {
        "name": "Haysen郑景曦"
      },
      {
        "name": "Lil Asian"
      },
      {
        "name": "Raelion"
      },
      {
        "name": "Rich4ever"
      },
      {
        "name": "Toryondacloud"
      }
    ]
  },
  {
    "name": "金剑GOLDENSWORD",
    "aliases": [],
    "neteaseId": "12867397",
    "fans": "6545",
    "fanCount": 6545,
    "avatar": "https://p1.music.126.net/OHoabuyJi4SlQkxUup8PCQ==/109951168716842724.jpg?param=130y130",
    "lat": 40.06,
    "lng": 116.33,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "辉子"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "秃子2z"
      },
      {
        "name": "赵山河"
      },
      {
        "name": "Saber梁维嘉"
      }
    ]
  },
  {
    "name": "DJ Quaver",
    "aliases": [],
    "neteaseId": "12206277",
    "fans": "5652",
    "fanCount": 5652,
    "avatar": "https://p1.music.126.net/6fdrNYrUrxlhqrpNuFC_YQ==/109951166673151884.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "斯威特MCSWEET"
      },
      {
        "name": "张千C.Jam"
      },
      {
        "name": "中俄艾迪AIDI RUSCHINO"
      },
      {
        "name": "Mido美朵"
      },
      {
        "name": "Saber梁维嘉"
      },
      {
        "name": "Stinging Ray"
      }
    ]
  },
  {
    "name": "刘嘉一",
    "aliases": [],
    "neteaseId": "32638512",
    "fans": "5340",
    "fanCount": 5340,
    "avatar": "https://p1.music.126.net/_Vyyh1ItY8ytqpBah8Uagg==/109951172259810539.jpg?param=130y130",
    "lat": 29.49,
    "lng": 106.42,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "王齐铭WatchMe"
      },
      {
        "name": "希介"
      },
      {
        "name": "BombWayne"
      },
      {
        "name": "Gokevin"
      },
      {
        "name": "Icy White"
      },
      {
        "name": "KenRobb"
      },
      {
        "name": "kill bad feelings"
      },
      {
        "name": "nato"
      },
      {
        "name": "THOME"
      },
      {
        "name": "Toryondacloud"
      },
      {
        "name": "Udigg"
      }
    ]
  },
  {
    "name": "tonymvn!a",
    "aliases": [],
    "neteaseId": "49338517",
    "fans": "4883",
    "fanCount": 4883,
    "avatar": "https://p1.music.126.net/i5F_E6yz7QEGs2z0VjuVAQ==/109951169005583626.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "Akiiyaki"
      },
      {
        "name": "delphia!"
      },
      {
        "name": "JNOLAZY"
      },
      {
        "name": "lov3chanel"
      },
      {
        "name": "Taco"
      },
      {
        "name": "Wade Warhol"
      }
    ]
  },
  {
    "name": "The 100",
    "aliases": [
      "一百"
    ],
    "neteaseId": "49091724",
    "fans": "4831",
    "fanCount": 4831,
    "avatar": "https://p1.music.126.net/vzqg0_z_f2fJMybrCZ6eYA==/109951171027137470.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "DD Ma Shawty"
      },
      {
        "name": "KenRobb"
      },
      {
        "name": "LSGCsikoriot"
      },
      {
        "name": "Maikon Flocka Flame"
      }
    ]
  },
  {
    "name": "Stinging Ray",
    "aliases": [],
    "neteaseId": "36455161",
    "fans": "4807",
    "fanCount": 4807,
    "avatar": "https://p1.music.126.net/UQuo7l32l6c8AL-lE89hCg==/109951173498454815.jpg?param=130y130",
    "lat": 39.91,
    "lng": 116.57,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "斯威特MCSWEET"
      },
      {
        "name": "张千C.Jam"
      },
      {
        "name": "中俄艾迪AIDI RUSCHINO"
      },
      {
        "name": "DJ Quaver"
      },
      {
        "name": "Mido美朵"
      },
      {
        "name": "Saber梁维嘉"
      }
    ]
  },
  {
    "name": "Mood",
    "aliases": [
      "Infin1tyMood"
    ],
    "neteaseId": "32720060",
    "fans": "4543",
    "fanCount": 4543,
    "avatar": "https://p1.music.126.net/7LYp2JqO5rk94wHno7nd7A==/109951167814010852.jpg?param=130y130",
    "lat": 23.13,
    "lng": 113.15,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "delphia!"
      },
      {
        "name": "Hoozie"
      },
      {
        "name": "Lan"
      },
      {
        "name": "skiboyvv"
      },
      {
        "name": "Taco"
      }
    ]
  },
  {
    "name": "Raelion",
    "aliases": [
      "瑞麗昂"
    ],
    "neteaseId": "46997329",
    "fans": "4191",
    "fanCount": 4191,
    "avatar": "https://p1.music.126.net/Wqxl0Zfuedm30RacNSfRKw==/109951167876938254.jpg?param=130y130",
    "lat": 29.63,
    "lng": 106.48,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "布瑞吉Bridge"
      },
      {
        "name": "春"
      },
      {
        "name": "迪诺哥"
      },
      {
        "name": "贾真Jahgen"
      },
      {
        "name": "王齐铭WatchMe"
      },
      {
        "name": "王嗣尧TURBO"
      },
      {
        "name": "雾都L4WUDU"
      },
      {
        "name": "Adam Ocean"
      },
      {
        "name": "Akemen杀"
      },
      {
        "name": "DiorGoFlex"
      },
      {
        "name": "Haysen郑景曦"
      },
      {
        "name": "kill bad feelings"
      },
      {
        "name": "Maikon Flocka Flame"
      },
      {
        "name": "OneOne"
      },
      {
        "name": "Rich4ever"
      },
      {
        "name": "Uzzy"
      }
    ]
  },
  {
    "name": "中俄艾迪AIDI RUSCHINO",
    "aliases": [],
    "neteaseId": "12478266",
    "fans": "3979",
    "fanCount": 3979,
    "avatar": "https://p1.music.126.net/GsaUN73Zk6kDzD64uQISzg==/109951172412686742.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "贰万"
      },
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "派克特"
      },
      {
        "name": "斯威特MCSWEET"
      },
      {
        "name": "秃子2z"
      },
      {
        "name": "王波"
      },
      {
        "name": "小安迪LilAndyKillThemAll"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "张千C.Jam"
      },
      {
        "name": "AR刘夫阳"
      },
      {
        "name": "DJ Quaver"
      },
      {
        "name": "Keyso寿君超"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "Mido美朵"
      },
      {
        "name": "Saber梁维嘉"
      },
      {
        "name": "Stinging Ray"
      }
    ]
  },
  {
    "name": "Akiiyaki",
    "aliases": [],
    "neteaseId": "52403907",
    "fans": "3682",
    "fanCount": 3682,
    "avatar": "https://p1.music.126.net/-JRZ4y24rAlgIME7XxzoJA==/109951173163242103.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "DAMNLIFE"
      },
      {
        "name": "delphia!"
      },
      {
        "name": "Hoozie"
      },
      {
        "name": "JNOLAZY"
      },
      {
        "name": "know the vibe"
      },
      {
        "name": "lov3chanel"
      },
      {
        "name": "skiboyvv"
      },
      {
        "name": "Taco"
      },
      {
        "name": "tonymvn!a"
      },
      {
        "name": "Wade Warhol"
      }
    ]
  },
  {
    "name": "陈俊岐",
    "aliases": [
      "Astro"
    ],
    "neteaseId": "32934047",
    "fans": "3460",
    "fanCount": 3460,
    "avatar": "https://p1.music.126.net/3O3xZzzgEijNyg9QLkzGGg==/109951172252290475.jpg?param=130y130",
    "lat": 29.5,
    "lng": 106.64,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "等一下就回家"
      },
      {
        "name": "李佳隆"
      },
      {
        "name": "Sillygami"
      },
      {
        "name": "Yoanko Futura"
      }
    ]
  },
  {
    "name": "OG ROLLY",
    "aliases": [
      "G女乃人妻"
    ],
    "neteaseId": "12493704",
    "fans": "3400",
    "fanCount": 3400,
    "avatar": "https://p1.music.126.net/pDK8-dVbQE2Cp_zjOfxCFQ==/109951173513376450.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "布瑞吉Bridge"
      },
      {
        "name": "吕富贵"
      },
      {
        "name": "王齐铭WatchMe"
      },
      {
        "name": "王嗣尧TURBO"
      },
      {
        "name": "希介"
      },
      {
        "name": "KenRobb"
      },
      {
        "name": "Toryondacloud"
      }
    ]
  },
  {
    "name": "阿波罗",
    "aliases": [
      "菠萝"
    ],
    "neteaseId": "30482627",
    "fans": "2981",
    "fanCount": 2981,
    "avatar": "https://p1.music.126.net/c6Q_WCUBon_muV8EbW3W_Q==/109951174098398357.jpg?param=130y130",
    "lat": 29.61,
    "lng": 106.64,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "海娃"
      },
      {
        "name": "OneOne"
      }
    ]
  },
  {
    "name": "海娃",
    "aliases": [
      "Hiver"
    ],
    "neteaseId": "57782658",
    "fans": "2925",
    "fanCount": 2925,
    "avatar": "https://p1.music.126.net/HE76uGDUl8W7GPJ2qIqRVg==/109951169847063163.jpg?param=130y130",
    "lat": 29.6,
    "lng": 106.44,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "阿波罗"
      },
      {
        "name": "谟西Mercy"
      },
      {
        "name": "OneOne"
      }
    ]
  },
  {
    "name": "Mido美朵",
    "aliases": [],
    "neteaseId": "12476369",
    "fans": "2479",
    "fanCount": 2479,
    "avatar": "https://p1.music.126.net/GxqyGj3s9s2H8rhJQiEpjQ==/109951162954089580.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "儿几"
      },
      {
        "name": "黄硕N-Bomb"
      },
      {
        "name": "刘悦spam-生番"
      },
      {
        "name": "斯威特MCSWEET"
      },
      {
        "name": "张千C.Jam"
      },
      {
        "name": "中俄艾迪AIDI RUSCHINO"
      },
      {
        "name": "DJ Quaver"
      },
      {
        "name": "Saber梁维嘉"
      },
      {
        "name": "Stinging Ray"
      }
    ]
  },
  {
    "name": "Pop J",
    "aliases": [],
    "neteaseId": "50746640",
    "fans": "2404",
    "fanCount": 2404,
    "avatar": "https://p1.music.126.net/FwSeFKXqZUAKygN4wjZTHA==/109951170728949311.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "布瑞吉Bridge"
      },
      {
        "name": "王齐铭WatchMe"
      },
      {
        "name": "王嗣尧TURBO"
      },
      {
        "name": "雾都L4WUDU"
      },
      {
        "name": "希介"
      },
      {
        "name": "REGI陈彦希"
      }
    ]
  },
  {
    "name": "GIF7ED",
    "aliases": [],
    "neteaseId": "12373901",
    "fans": "2290",
    "fanCount": 2290,
    "avatar": "https://p1.music.126.net/ycAT_NQTpCy5P9iY52Tsew==/109951170359826674.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "刘柄鑫"
      },
      {
        "name": "派克特"
      },
      {
        "name": "鱼头_killa4nia"
      },
      {
        "name": "张昊"
      },
      {
        "name": "Capper"
      },
      {
        "name": "CREAM D"
      },
      {
        "name": "Dirty Twinz"
      },
      {
        "name": "KIGGA"
      },
      {
        "name": "SIMBA辛巴"
      }
    ]
  },
  {
    "name": "Wade Warhol",
    "aliases": [],
    "neteaseId": "34663387",
    "fans": "1852",
    "fanCount": 1852,
    "avatar": "https://p1.music.126.net/rTIWAwFtYsK3ZjDyV447qw==/109951170979435540.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "Akiiyaki"
      },
      {
        "name": "delphia!"
      },
      {
        "name": "JNOLAZY"
      },
      {
        "name": "lov3chanel"
      },
      {
        "name": "Taco"
      },
      {
        "name": "tonymvn!a"
      }
    ]
  },
  {
    "name": "DAMNLIFE",
    "aliases": [],
    "neteaseId": "56362111",
    "fans": "1845",
    "fanCount": 1845,
    "avatar": "https://p1.music.126.net/WlXthywIjkn6mOe2KXrY4w==/109951174105138264.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "Akiiyaki"
      },
      {
        "name": "know the vibe"
      },
      {
        "name": "skiboyvv"
      },
      {
        "name": "Taco"
      }
    ]
  },
  {
    "name": "马金在潇洒",
    "aliases": [
      "马金"
    ],
    "neteaseId": "28186183",
    "fans": "1800",
    "fanCount": 1800,
    "avatar": "https://p1.music.126.net/ZeIX8U8QokPxpfnH7McuUw==/109951169811319062.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "李外LilWine"
      },
      {
        "name": "ProN4c"
      },
      {
        "name": "Toryondacloud"
      }
    ]
  },
  {
    "name": "Icy White",
    "aliases": [],
    "neteaseId": "32091544",
    "fans": "1703",
    "fanCount": 1703,
    "avatar": "https://p1.music.126.net/mw7dc4J0ynXVx5M41MkZOw==/109951172485439150.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "布瑞吉Bridge"
      },
      {
        "name": "刘嘉一"
      },
      {
        "name": "Rich4ever"
      },
      {
        "name": "Toryondacloud"
      },
      {
        "name": "TSP安琪"
      },
      {
        "name": "YOUNG13DBABY"
      }
    ]
  },
  {
    "name": "JNOLAZY",
    "aliases": [],
    "neteaseId": "35416621",
    "fans": "1676",
    "fanCount": 1676,
    "avatar": "https://p1.music.126.net/aT4nj0ujwtz3y7QpYzJ6wg==/109951172304114667.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "Adam Ocean"
      },
      {
        "name": "Akiiyaki"
      },
      {
        "name": "delphia!"
      },
      {
        "name": "lov3chanel"
      },
      {
        "name": "skiboyvv"
      },
      {
        "name": "Taco"
      },
      {
        "name": "tonymvn!a"
      },
      {
        "name": "Wade Warhol"
      }
    ]
  },
  {
    "name": "岸林",
    "aliases": [],
    "neteaseId": "12117175",
    "fans": "1662",
    "fanCount": 1662,
    "avatar": "https://p1.music.126.net/-DtFBbv9fgHVVRFdZg_aUQ==/109951169748432624.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "Maikon Flocka Flame"
      },
      {
        "name": "OneOne"
      }
    ]
  },
  {
    "name": "DonDream",
    "aliases": [
      "TangKing",
      "TK"
    ],
    "neteaseId": "35663102",
    "fans": "1659",
    "fanCount": 1659,
    "avatar": "https://p1.music.126.net/006Q_0HDYO3xZ2hlQVsLsA==/109951169005819062.jpg?param=130y130",
    "lat": 31.33,
    "lng": 121.24,
    "mapVisible": true,
    "collaborators": [
      {
        "name": "颠倒"
      },
      {
        "name": "孤矢"
      },
      {
        "name": "土人儿TRE"
      },
      {
        "name": "西凹木"
      },
      {
        "name": "小酷Coola"
      },
      {
        "name": "Cee"
      },
      {
        "name": "DENZEL丹澤"
      },
      {
        "name": "Keyso寿君超"
      }
    ]
  },
  {
    "name": "BIG Shivy",
    "aliases": [],
    "neteaseId": "12491056",
    "fans": "1568",
    "fanCount": 1568,
    "avatar": "https://p1.music.126.net/0WLutQNqowsX2uZhdWyOcA==/109951170612666207.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "艾志恒Asen"
      },
      {
        "name": "李佳隆"
      },
      {
        "name": "Maikon Flocka Flame"
      },
      {
        "name": "OneOne"
      }
    ]
  },
  {
    "name": "Yung Neo",
    "aliases": [
      "YUNG NEO",
      "neO"
    ],
    "neteaseId": "13288489",
    "fans": "1381",
    "fanCount": 1381,
    "avatar": "https://p1.music.126.net/4DBWg8kxvx4gXjNhLN1PlQ==/109951169916123276.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "希介"
      },
      {
        "name": "Taco"
      },
      {
        "name": "Toryondacloud"
      }
    ]
  },
  {
    "name": "know the vibe",
    "aliases": [
      "Human Register"
    ],
    "neteaseId": "48569182",
    "fans": "1002",
    "fanCount": 1002,
    "avatar": "https://p1.music.126.net/8RxMHyk1Q6xXn2Ghwr33dQ==/109951167947072447.jpg?param=130y130",
    "lat": null,
    "lng": null,
    "mapVisible": false,
    "collaborators": [
      {
        "name": "Akiiyaki"
      },
      {
        "name": "DAMNLIFE"
      },
      {
        "name": "skiboyvv"
      }
    ]
  }
];
const profiles = collectedMembers20261105.filter(item => !item.mapVisible);
singers.push(...collectedMembers20261105.filter(item => item.mapVisible));
const relationshipArtists = [...singers, ...profiles];


// 2026-11-05: verified same-song artist credits. Full evidence is in the local research report.
const verifiedSongPairs20261105 = [
  ["2103","977173"],
  ["2103","12099063"],
  ["2103","12351258"],
  ["2103","12730273"],
  ["2103","12870490"],
  ["2103","15194340"],
  ["2103","32055655"],
  ["2103","32501012"],
  ["2103","34364251"],
  ["2514","2947"],
  ["2514","4037"],
  ["2514","4479"],
  ["2514","31055"],
  ["2514","33012152"],
  ["2947","12199576"],
  ["2947","13145283"],
  ["2947","13449058"],
  ["2947","27868624"],
  ["2947","35772719"],
  ["4037","31055"],
  ["4037","12206205"],
  ["4037","12565467"],
  ["4037","28072811"],
  ["4479","847107"],
  ["4479","865007"],
  ["4479","1132392"],
  ["4479","1204010"],
  ["4479","1211046"],
  ["4479","12065096"],
  ["4479","12119618"],
  ["4479","12127362"],
  ["4479","12127564"],
  ["4479","12193174"],
  ["4479","12193309"],
  ["4479","12357157"],
  ["4479","12453329"],
  ["4479","12493701"],
  ["4479","12788674"],
  ["4479","13899303"],
  ["4479","27868624"],
  ["4479","32959015"],
  ["4479","54318093"],
  ["5106","5610"],
  ["5106","31055"],
  ["5106","865007"],
  ["5106","1194094"],
  ["5106","12002184"],
  ["5106","12065150"],
  ["5106","12119618"],
  ["5106","12781308"],
  ["5106","12789336"],
  ["5106","12967449"],
  ["5106","13035389"],
  ["5106","30207603"],
  ["5106","47607639"],
  ["5610","12002184"],
  ["5610","12119618"],
  ["5610","47607639"],
  ["31055","784257"],
  ["31055","865007"],
  ["31055","1038099"],
  ["31055","1087200"],
  ["31055","1194094"],
  ["31055","12002184"],
  ["31055","12003187"],
  ["31055","12039173"],
  ["31055","12065096"],
  ["31055","12065150"],
  ["31055","12094558"],
  ["31055","12111238"],
  ["31055","12119618"],
  ["31055","12124013"],
  ["31055","12127362"],
  ["31055","12127564"],
  ["31055","12200580"],
  ["31055","12206205"],
  ["31055","12605500"],
  ["31055","12781308"],
  ["31055","12789336"],
  ["31055","13035389"],
  ["31055","15200313"],
  ["31055","27868624"],
  ["31055","28072811"],
  ["31055","30207603"],
  ["187903","188141"],
  ["187903","847107"],
  ["187903","865007"],
  ["187903","1087200"],
  ["187903","1194094"],
  ["187903","1203045"],
  ["187903","12002184"],
  ["187903","12065096"],
  ["187903","12094099"],
  ["187903","12094558"],
  ["187903","12099063"],
  ["187903","12114249"],
  ["187903","12119618"],
  ["187903","12121264"],
  ["187903","12124013"],
  ["187903","12134076"],
  ["187903","12193780"],
  ["187903","12236269"],
  ["187903","12563131"],
  ["187903","13035389"],
  ["187903","13113369"],
  ["187903","13145283"],
  ["187903","13899303"],
  ["187903","27868624"],
  ["187903","29265708"],
  ["187903","35784564"],
  ["187903","36519554"],
  ["187903","47192128"],
  ["187903","47607639"],
  ["188141","784257"],
  ["188141","1038099"],
  ["188141","1204010"],
  ["188141","12001060"],
  ["188141","12024274"],
  ["188141","12065096"],
  ["188141","12071015"],
  ["188141","12094099"],
  ["188141","12111238"],
  ["188141","12119618"],
  ["188141","12127362"],
  ["188141","12140048"],
  ["188141","12193174"],
  ["188141","12236125"],
  ["188141","12277473"],
  ["188141","12288442"],
  ["188141","12320060"],
  ["188141","12789336"],
  ["188141","13112601"],
  ["188141","14807229"],
  ["188141","27726025"],
  ["188141","31668975"],
  ["188141","33937972"],
  ["188141","36109845"],
  ["784257","1008034"],
  ["784257","1038099"],
  ["784257","1087200"],
  ["784257","1203045"],
  ["784257","1204010"],
  ["784257","12001060"],
  ["784257","12002184"],
  ["784257","12065096"],
  ["784257","12119618"],
  ["784257","12127362"],
  ["784257","12276375"],
  ["784257","12493701"],
  ["784257","12605500"],
  ["784257","12633236"],
  ["847107","865007"],
  ["847107","1038099"],
  ["847107","1086078"],
  ["847107","1132392"],
  ["847107","1203045"],
  ["847107","1211046"],
  ["847107","12002184"],
  ["847107","12024274"],
  ["847107","12037117"],
  ["847107","12039173"],
  ["847107","12064019"],
  ["847107","12065096"],
  ["847107","12092433"],
  ["847107","12119618"],
  ["847107","12127564"],
  ["847107","12198387"],
  ["847107","12236125"],
  ["847107","12288442"],
  ["847107","12320060"],
  ["847107","12360120"],
  ["847107","12453329"],
  ["847107","12488150"],
  ["847107","12493701"],
  ["847107","12523451"],
  ["847107","12570417"],
  ["847107","12605500"],
  ["847107","12788674"],
  ["847107","12965215"],
  ["847107","12968978"],
  ["847107","13005039"],
  ["847107","13145283"],
  ["847107","13417028"],
  ["847107","13796823"],
  ["847107","13899303"],
  ["847107","14117457"],
  ["847107","14925064"],
  ["847107","15200313"],
  ["847107","27868624"],
  ["847107","29303235"],
  ["847107","29304235"],
  ["847107","31055231"],
  ["847107","31917276"],
  ["847107","32712412"],
  ["847107","32893629"],
  ["847107","32931336"],
  ["847107","33435403"],
  ["847107","35784564"],
  ["847107","37052069"],
  ["847107","37343937"],
  ["847107","46549449"],
  ["847107","47192128"],
  ["847107","47603179"],
  ["847107","47607639"],
  ["847107","48045511"],
  ["847107","48277407"],
  ["847107","48982684"],
  ["847107","49771435"],
  ["847107","51957057"],
  ["847107","52118688"],
  ["847107","53597603"],
  ["847107","54247662"],
  ["847107","54954390"],
  ["847107","57561642"],
  ["865007","1008034"],
  ["865007","1087200"],
  ["865007","1185047"],
  ["865007","1198123"],
  ["865007","1199064"],
  ["865007","1203045"],
  ["865007","12001060"],
  ["865007","12002184"],
  ["865007","12003187"],
  ["865007","12079066"],
  ["865007","12092433"],
  ["865007","12094558"],
  ["865007","12099063"],
  ["865007","12119618"],
  ["865007","12121264"],
  ["865007","12124013"],
  ["865007","12140048"],
  ["865007","12236125"],
  ["865007","12236269"],
  ["865007","12276375"],
  ["865007","12287129"],
  ["865007","12288442"],
  ["865007","12488150"],
  ["865007","12493701"],
  ["865007","12606255"],
  ["865007","12765265"],
  ["865007","12788674"],
  ["865007","12851112"],
  ["865007","12905307"],
  ["865007","12965215"],
  ["865007","13112601"],
  ["865007","13145283"],
  ["865007","13200392"],
  ["865007","13899303"],
  ["865007","27868624"],
  ["865007","28182632"],
  ["865007","29265708"],
  ["865007","31366729"],
  ["865007","32743623"],
  ["865007","32959015"],
  ["865007","34055135"],
  ["865007","35784564"],
  ["865007","36519554"],
  ["865007","47192128"],
  ["865007","47694967"],
  ["865007","50275485"],
  ["865007","54318093"],
  ["977173","1086078"],
  ["977173","12039173"],
  ["977173","12094099"],
  ["977173","12965215"],
  ["977173","14807229"],
  ["977173","27726025"],
  ["1008034","1038099"],
  ["1008034","1124093"],
  ["1008034","1205071"],
  ["1008034","12065096"],
  ["1008034","12094558"],
  ["1008034","12140048"],
  ["1008034","12277473"],
  ["1008034","12493701"],
  ["1008034","31366729"],
  ["1038099","1086078"],
  ["1038099","1199064"],
  ["1038099","1203045"],
  ["1038099","1204010"],
  ["1038099","1211046"],
  ["1038099","12001060"],
  ["1038099","12039173"],
  ["1038099","12059049"],
  ["1038099","12065096"],
  ["1038099","12078093"],
  ["1038099","12119618"],
  ["1038099","12124013"],
  ["1038099","12126217"],
  ["1038099","12127362"],
  ["1038099","12127564"],
  ["1038099","12184254"],
  ["1038099","12236125"],
  ["1038099","12277473"],
  ["1038099","12320060"],
  ["1038099","12453329"],
  ["1038099","12488150"],
  ["1038099","12493701"],
  ["1038099","12523451"],
  ["1038099","12605500"],
  ["1038099","12663194"],
  ["1038099","12788674"],
  ["1038099","13145283"],
  ["1038099","13899303"],
  ["1038099","27726025"],
  ["1038099","34464647"],
  ["1038099","47192128"],
  ["1038099","47607639"],
  ["1038099","49320722"],
  ["1038099","57187017"],
  ["1050364","1124093"],
  ["1050364","1205071"],
  ["1050364","12079066"],
  ["1050364","12079219"],
  ["1050364","12319437"],
  ["1050364","12453329"],
  ["1050364","12605500"],
  ["1050364","13113369"],
  ["1050364","14018235"],
  ["1050364","15194340"],
  ["1050364","32893629"],
  ["1050364","33204812"],
  ["1086078","1132392"],
  ["1086078","1198123"],
  ["1086078","12037117"],
  ["1086078","12039173"],
  ["1086078","12110173"],
  ["1086078","12124013"],
  ["1086078","12236125"],
  ["1086078","12276375"],
  ["1086078","12283512"],
  ["1086078","12287129"],
  ["1086078","12288442"],
  ["1086078","12371041"],
  ["1086078","12570417"],
  ["1086078","12730273"],
  ["1086078","12965215"],
  ["1086078","13796823"],
  ["1086078","27868624"],
  ["1086078","29303235"],
  ["1086078","29304235"],
  ["1086078","30704161"],
  ["1086078","31062035"],
  ["1086078","31917276"],
  ["1086078","32712412"],
  ["1086078","32959015"],
  ["1086078","33863232"],
  ["1086078","50275485"],
  ["1087200","1204010"],
  ["1087200","12064019"],
  ["1087200","12065096"],
  ["1087200","12092433"],
  ["1087200","12121264"],
  ["1087200","12124013"],
  ["1087200","12127362"],
  ["1087200","12127564"],
  ["1087200","12148091"],
  ["1087200","12193174"],
  ["1087200","12200580"],
  ["1087200","12236125"],
  ["1087200","12236269"],
  ["1087200","12276375"],
  ["1087200","12371082"],
  ["1087200","12453329"],
  ["1087200","12484112"],
  ["1087200","12493701"],
  ["1087200","12563131"],
  ["1087200","12570417"],
  ["1087200","12789336"],
  ["1087200","12923031"],
  ["1087200","13145283"],
  ["1087200","15200313"],
  ["1087200","28642672"],
  ["1087200","29303235"],
  ["1087200","32931336"],
  ["1087200","33863232"],
  ["1087200","35784564"],
  ["1087200","36458527"],
  ["1087200","47607639"],
  ["1089111","1211046"],
  ["1089111","12065096"],
  ["1089111","12127564"],
  ["1089111","12199576"],
  ["1124093","12024274"],
  ["1124093","12121264"],
  ["1124093","12193174"],
  ["1124093","12193309"],
  ["1124093","12236269"],
  ["1124093","12319437"],
  ["1124093","12357157"],
  ["1124093","12453329"],
  ["1124093","12493701"],
  ["1124093","12605500"],
  ["1124093","12788674"],
  ["1124093","13113369"],
  ["1124093","32893629"],
  ["1132392","1204010"],
  ["1132392","12022040"],
  ["1132392","12039173"],
  ["1132392","12059049"],
  ["1132392","12078093"],
  ["1132392","12110173"],
  ["1132392","12127362"],
  ["1132392","12193174"],
  ["1132392","12195296"],
  ["1132392","12198387"],
  ["1132392","12236125"],
  ["1132392","12276375"],
  ["1132392","12277473"],
  ["1132392","12288442"],
  ["1132392","12633236"],
  ["1132392","12965215"],
  ["1132392","13145283"],
  ["1132392","13796823"],
  ["1132392","27868624"],
  ["1132392","28072811"],
  ["1132392","28642672"],
  ["1132392","29303235"],
  ["1132392","29304235"],
  ["1132392","31917276"],
  ["1132392","32712412"],
  ["1132392","32959015"],
  ["1132392","33863232"],
  ["1132392","33937972"],
  ["1132392","35784564"],
  ["1132392","37343079"],
  ["1132392","48045511"],
  ["1132392","51957057"],
  ["1185047","12079066"],
  ["1185047","12092433"],
  ["1185047","12094558"],
  ["1185047","12099063"],
  ["1185047","12287129"],
  ["1185047","12851112"],
  ["1185047","13200392"],
  ["1185047","13899303"],
  ["1194094","12065150"],
  ["1194094","12121264"],
  ["1194094","12781308"],
  ["1194094","12789336"],
  ["1194094","13035389"],
  ["1194094","30207603"],
  ["1198123","1203045"],
  ["1198123","12037117"],
  ["1198123","12119618"],
  ["1198123","12134076"],
  ["1198123","12148091"],
  ["1198123","12198387"],
  ["1198123","12198789"],
  ["1198123","12200580"],
  ["1198123","12236125"],
  ["1198123","12276375"],
  ["1198123","12276665"],
  ["1198123","12287129"],
  ["1198123","12292307"],
  ["1198123","12351071"],
  ["1198123","12554787"],
  ["1198123","12564922"],
  ["1198123","12570417"],
  ["1198123","12663194"],
  ["1198123","13027202"],
  ["1198123","13112601"],
  ["1198123","29303235"],
  ["1198123","30000024"],
  ["1198123","31561897"],
  ["1198123","32959015"],
  ["1198123","35784564"],
  ["1198123","36109845"],
  ["1199064","1203045"],
  ["1199064","1205071"],
  ["1199064","1211046"],
  ["1199064","12002184"],
  ["1199064","12024274"],
  ["1199064","12065096"],
  ["1199064","12071015"],
  ["1199064","12092433"],
  ["1199064","12121264"],
  ["1199064","12126217"],
  ["1199064","12140048"],
  ["1199064","12148091"],
  ["1199064","12184254"],
  ["1199064","12193174"],
  ["1199064","12193309"],
  ["1199064","12284097"],
  ["1199064","12357157"],
  ["1199064","12371082"],
  ["1199064","12488150"],
  ["1199064","12493701"],
  ["1199064","12498266"],
  ["1199064","12499279"],
  ["1199064","12565467"],
  ["1199064","12605500"],
  ["1199064","12788674"],
  ["1199064","12851112"],
  ["1199064","13899303"],
  ["1199064","32977298"],
  ["1199064","34464647"],
  ["1203045","1211046"],
  ["1203045","12001060"],
  ["1203045","12002184"],
  ["1203045","12039173"],
  ["1203045","12065096"],
  ["1203045","12079219"],
  ["1203045","12084497"],
  ["1203045","12111238"],
  ["1203045","12119618"],
  ["1203045","12124013"],
  ["1203045","12126217"],
  ["1203045","12127362"],
  ["1203045","12184254"],
  ["1203045","12193309"],
  ["1203045","12236125"],
  ["1203045","12276375"],
  ["1203045","12320060"],
  ["1203045","12453329"],
  ["1203045","12493701"],
  ["1203045","12514278"],
  ["1203045","12523451"],
  ["1203045","12605500"],
  ["1203045","12853605"],
  ["1203045","13112601"],
  ["1203045","13145283"],
  ["1203045","13899303"],
  ["1203045","15200313"],
  ["1203045","27868624"],
  ["1203045","34464647"],
  ["1203045","35784564"],
  ["1203045","47192128"],
  ["1203045","47607639"],
  ["1204010","1211046"],
  ["1204010","12001060"],
  ["1204010","12002184"],
  ["1204010","12003187"],
  ["1204010","12024274"],
  ["1204010","12059049"],
  ["1204010","12065096"],
  ["1204010","12079219"],
  ["1204010","12085631"],
  ["1204010","12094099"],
  ["1204010","12111238"],
  ["1204010","12127362"],
  ["1204010","12140048"],
  ["1204010","12193174"],
  ["1204010","12236125"],
  ["1204010","12277473"],
  ["1204010","12293217"],
  ["1204010","12371041"],
  ["1204010","12493701"],
  ["1204010","12523451"],
  ["1204010","12605500"],
  ["1204010","14018235"],
  ["1204010","33762221"],
  ["1204010","33863232"],
  ["1204010","35884195"],
  ["1204010","36109845"],
  ["1204010","57561642"],
  ["1205071","12024274"],
  ["1205071","12039173"],
  ["1205071","12078093"],
  ["1205071","12092433"],
  ["1205071","12094558"],
  ["1205071","12126217"],
  ["1205071","12127362"],
  ["1205071","12140048"],
  ["1205071","12788674"],
  ["1205071","12851112"],
  ["1205071","14018235"],
  ["1205071","33204812"],
  ["1205071","52410166"],
  ["1211046","12065096"],
  ["1211046","12084497"],
  ["1211046","12111129"],
  ["1211046","12126217"],
  ["1211046","12127564"],
  ["1211046","12184254"],
  ["1211046","12236125"],
  ["1211046","12319437"],
  ["1211046","12320060"],
  ["1211046","12453329"],
  ["1211046","12488150"],
  ["1211046","12493701"],
  ["1211046","12605500"],
  ["1211046","12788674"],
  ["1211046","12870490"],
  ["1211046","13027753"],
  ["1211046","13145283"],
  ["1211046","13899303"],
  ["1211046","27868624"],
  ["1211046","29939584"],
  ["1211046","34464647"],
  ["1211046","36927272"],
  ["1211046","47192128"],
  ["1211046","49320722"],
  ["12001060","12065096"],
  ["12001060","12079219"],
  ["12001060","12084497"],
  ["12001060","12127362"],
  ["12001060","12127564"],
  ["12001060","12140048"],
  ["12001060","12193174"],
  ["12001060","12236125"],
  ["12001060","12277473"],
  ["12001060","12287129"],
  ["12001060","12288442"],
  ["12001060","12514278"],
  ["12001060","12605500"],
  ["12001060","12788674"],
  ["12001060","12853605"],
  ["12001060","13145283"],
  ["12001060","13451886"],
  ["12001060","13899303"],
  ["12001060","30704161"],
  ["12001060","31561897"],
  ["12001060","32931336"],
  ["12001060","33436148"],
  ["12001060","33762221"],
  ["12001060","35784564"],
  ["12001060","47192128"],
  ["12002184","12003187"],
  ["12002184","12094099"],
  ["12002184","12094558"],
  ["12002184","12114249"],
  ["12002184","12119618"],
  ["12002184","12121264"],
  ["12002184","12236125"],
  ["12002184","12276375"],
  ["12002184","12529648"],
  ["12002184","12605500"],
  ["12002184","13899303"],
  ["12002184","27868624"],
  ["12002184","31055231"],
  ["12002184","36109845"],
  ["12002184","47607639"],
  ["12002184","49771435"],
  ["12002184","51957057"],
  ["12002184","54954390"],
  ["12002184","57561642"],
  ["12003187","12037117"],
  ["12003187","12059049"],
  ["12003187","12092433"],
  ["12003187","12094099"],
  ["12003187","12094558"],
  ["12003187","12099063"],
  ["12003187","12258204"],
  ["12003187","12529648"],
  ["12003187","12704500"],
  ["12003187","12967449"],
  ["12003187","13005039"],
  ["12003187","14117457"],
  ["12003187","31055231"],
  ["12003187","36109845"],
  ["12003187","49771435"],
  ["12003187","54247662"],
  ["12003187","54954390"],
  ["12003187","57561642"],
  ["12022040","12039173"],
  ["12022040","12078093"],
  ["12022040","12079219"],
  ["12022040","12195296"],
  ["12022040","12523451"],
  ["12022040","12704500"],
  ["12022040","12923277"],
  ["12022040","12965215"],
  ["12022040","14807229"],
  ["12022040","27868624"],
  ["12022040","31559757"],
  ["12022040","33937972"],
  ["12022040","34326822"],
  ["12022040","37343079"],
  ["12022040","46549449"],
  ["12022040","49439822"],
  ["12024274","12065096"],
  ["12024274","12111238"],
  ["12024274","12119618"],
  ["12024274","12127362"],
  ["12024274","12140048"],
  ["12024274","12236125"],
  ["12024274","12277473"],
  ["12024274","12284097"],
  ["12024274","12288442"],
  ["12024274","12319437"],
  ["12024274","12453329"],
  ["12024274","12605500"],
  ["12024274","12788674"],
  ["12024274","12851112"],
  ["12024274","13113369"],
  ["12024274","14018235"],
  ["12024274","28072811"],
  ["12024274","32712412"],
  ["12027194","12134076"],
  ["12027194","12148091"],
  ["12027194","12875936"],
  ["12027194","13701382"],
  ["12027194","28182632"],
  ["12037117","12039173"],
  ["12037117","12198387"],
  ["12037117","12288442"],
  ["12037117","12320060"],
  ["12037117","12488150"],
  ["12037117","12570417"],
  ["12037117","12965215"],
  ["12037117","13796823"],
  ["12037117","13899303"],
  ["12037117","29304235"],
  ["12037117","31917276"],
  ["12037117","32931336"],
  ["12037117","32959015"],
  ["12037117","33984254"],
  ["12037117","47603179"],
  ["12037117","48982684"],
  ["12037117","51957057"],
  ["12037117","54247662"],
  ["12039173","12065096"],
  ["12039173","12078093"],
  ["12039173","12110173"],
  ["12039173","12119618"],
  ["12039173","12124013"],
  ["12039173","12193174"],
  ["12039173","12195296"],
  ["12039173","12200580"],
  ["12039173","12236125"],
  ["12039173","12283512"],
  ["12039173","12288442"],
  ["12039173","12453329"],
  ["12039173","12493701"],
  ["12039173","12523451"],
  ["12039173","12605500"],
  ["12039173","12965215"],
  ["12039173","13145283"],
  ["12039173","13796823"],
  ["12039173","13899303"],
  ["12039173","27868624"],
  ["12039173","29303235"],
  ["12039173","29304235"],
  ["12039173","30704161"],
  ["12039173","31917276"],
  ["12039173","32139022"],
  ["12039173","32959015"],
  ["12039173","47192128"],
  ["12039173","47607639"],
  ["12039173","49141872"],
  ["12051031","12079219"],
  ["12051031","12198387"],
  ["12051031","49406467"],
  ["12051031","49745789"],
  ["12051031","52807903"],
  ["12051031","54247662"],
  ["12059049","12277473"],
  ["12059049","12453329"],
  ["12059049","12923031"],
  ["12059049","29303235"],
  ["12059049","33436148"],
  ["12059049","47603179"],
  ["12064019","12092433"],
  ["12064019","12099063"],
  ["12064019","12111129"],
  ["12064019","12127564"],
  ["12064019","12193780"],
  ["12064019","12198387"],
  ["12064019","12288442"],
  ["12064019","12493701"],
  ["12064019","12570417"],
  ["12064019","12605500"],
  ["12064019","12965215"],
  ["12064019","13145283"],
  ["12064019","13451886"],
  ["12064019","14117457"],
  ["12064019","14807229"],
  ["12064019","15194340"],
  ["12064019","28642672"],
  ["12064019","30223665"],
  ["12064019","30704161"],
  ["12064019","32712412"],
  ["12064019","33165901"],
  ["12064019","33762221"],
  ["12064019","33937972"],
  ["12064019","49771435"],
  ["12064019","54247662"],
  ["12064019","54954390"],
  ["12064019","57561642"],
  ["12065096","12071015"],
  ["12065096","12079219"],
  ["12065096","12099063"],
  ["12065096","12111238"],
  ["12065096","12119618"],
  ["12065096","12121264"],
  ["12065096","12127362"],
  ["12065096","12127564"],
  ["12065096","12140048"],
  ["12065096","12193174"],
  ["12065096","12193309"],
  ["12065096","12200580"],
  ["12065096","12236125"],
  ["12065096","12277473"],
  ["12065096","12319437"],
  ["12065096","12357157"],
  ["12065096","12453329"],
  ["12065096","12488150"],
  ["12065096","12493701"],
  ["12065096","12499279"],
  ["12065096","12514278"],
  ["12065096","12523451"],
  ["12065096","12605500"],
  ["12065096","12788674"],
  ["12065096","12923031"],
  ["12065096","13145283"],
  ["12065096","13899303"],
  ["12065096","14018235"],
  ["12065096","35884195"],
  ["12065096","36109845"],
  ["12065096","37343937"],
  ["12065096","47192128"],
  ["12065096","47607639"],
  ["12065096","49141872"],
  ["12065150","12781308"],
  ["12065150","12789336"],
  ["12065150","13035389"],
  ["12071015","12124013"],
  ["12071015","12127362"],
  ["12071015","12134076"],
  ["12071015","12140048"],
  ["12071015","12193174"],
  ["12071015","12193309"],
  ["12071015","12200580"],
  ["12071015","12277473"],
  ["12071015","12351071"],
  ["12071015","12357157"],
  ["12071015","12488150"],
  ["12071015","12499279"],
  ["12071015","12605500"],
  ["12071015","12788674"],
  ["12071015","13145283"],
  ["12071015","13701382"],
  ["12071015","13899303"],
  ["12071015","14018235"],
  ["12078093","12195296"],
  ["12078093","12276375"],
  ["12078093","14807229"],
  ["12078093","27868624"],
  ["12078093","32931336"],
  ["12079066","12092433"],
  ["12079066","12094558"],
  ["12079066","12258204"],
  ["12079066","15194340"],
  ["12079219","12085631"],
  ["12079219","12110173"],
  ["12079219","12111129"],
  ["12079219","12127362"],
  ["12079219","12193174"],
  ["12079219","12198387"],
  ["12079219","12236125"],
  ["12079219","12258204"],
  ["12079219","12320060"],
  ["12079219","12328955"],
  ["12079219","12453329"],
  ["12079219","12472471"],
  ["12079219","12488150"],
  ["12079219","12493701"],
  ["12079219","12523451"],
  ["12079219","12788674"],
  ["12079219","12965215"],
  ["12079219","13027753"],
  ["12079219","13451886"],
  ["12079219","27868624"],
  ["12079219","29303235"],
  ["12079219","29304235"],
  ["12079219","30704161"],
  ["12079219","31561897"],
  ["12079219","32931336"],
  ["12079219","33012152"],
  ["12079219","33937972"],
  ["12079219","47192128"],
  ["12079219","47603179"],
  ["12079219","49141872"],
  ["12079219","49406467"],
  ["12079219","54247662"],
  ["12084497","12119618"],
  ["12084497","12124013"],
  ["12084497","12127564"],
  ["12084497","12200580"],
  ["12084497","12236125"],
  ["12084497","12276375"],
  ["12084497","12514278"],
  ["12084497","13145283"],
  ["12084497","33012152"],
  ["12084497","35784564"],
  ["12084497","47192128"],
  ["12085631","12094099"],
  ["12085631","12111129"],
  ["12085631","12114249"],
  ["12085631","12124013"],
  ["12085631","12127362"],
  ["12085631","12293217"],
  ["12085631","12329255"],
  ["12085631","13907021"],
  ["12085631","14807229"],
  ["12085631","15194340"],
  ["12085631","29303235"],
  ["12085631","31055231"],
  ["12085631","31559757"],
  ["12085631","32139022"],
  ["12085631","33072389"],
  ["12085631","33204812"],
  ["12085631","36109845"],
  ["12085631","52410166"],
  ["12092433","12094558"],
  ["12092433","12114249"],
  ["12092433","12140048"],
  ["12092433","12148091"],
  ["12092433","12193780"],
  ["12092433","12236269"],
  ["12092433","12287129"],
  ["12092433","12357157"],
  ["12092433","12484112"],
  ["12092433","12565467"],
  ["12092433","12851112"],
  ["12092433","12965215"],
  ["12092433","13145283"],
  ["12092433","13451886"],
  ["12092433","13899303"],
  ["12092433","29265708"],
  ["12092433","32931336"],
  ["12092433","33863232"],
  ["12092433","36519554"],
  ["12092433","47607639"],
  ["12092433","52118688"],
  ["12094099","12124013"],
  ["12094099","28182632"],
  ["12094099","57561642"],
  ["12094558","12099063"],
  ["12094558","12200580"],
  ["12094558","12205952"],
  ["12094558","12276375"],
  ["12094558","12287129"],
  ["12094558","12605500"],
  ["12094558","12851112"],
  ["12094558","12905307"],
  ["12094558","13200392"],
  ["12094558","13701382"],
  ["12094558","13899303"],
  ["12094558","29265708"],
  ["12094558","32959015"],
  ["12094558","36458527"],
  ["12094558","36519554"],
  ["12094558","51498764"],
  ["12099063","12121264"],
  ["12099063","12127564"],
  ["12099063","12236269"],
  ["12099063","12287129"],
  ["12099063","12351071"],
  ["12099063","12564922"],
  ["12099063","13113369"],
  ["12099063","13899303"],
  ["12099063","29265708"],
  ["12099063","33097968"],
  ["12110173","12111129"],
  ["12110173","12198387"],
  ["12110173","12328955"],
  ["12110173","12484112"],
  ["12110173","12529648"],
  ["12110173","12730273"],
  ["12110173","14116746"],
  ["12110173","14925064"],
  ["12110173","27868624"],
  ["12110173","28642672"],
  ["12110173","29303235"],
  ["12110173","30704161"],
  ["12110173","31559757"],
  ["12110173","33097968"],
  ["12110173","33863232"],
  ["12110173","33937972"],
  ["12110173","34319290"],
  ["12110173","35009085"],
  ["12110173","37409740"],
  ["12110173","48045511"],
  ["12110173","48277407"],
  ["12110173","52891211"],
  ["12110173","53483506"],
  ["12110173","55315624"],
  ["12111129","12126217"],
  ["12111129","12134076"],
  ["12111129","12198387"],
  ["12111129","12199576"],
  ["12111129","12205952"],
  ["12111129","12320060"],
  ["12111129","12466885"],
  ["12111129","12481977"],
  ["12111129","12488150"],
  ["12111129","12493701"],
  ["12111129","12499279"],
  ["12111129","12730273"],
  ["12111129","12870490"],
  ["12111129","13005039"],
  ["12111129","14713124"],
  ["12111129","54954390"],
  ["12111129","57561642"],
  ["12111238","12140048"],
  ["12111238","12277473"],
  ["12111238","15200313"],
  ["12114249","12140048"],
  ["12114249","12205952"],
  ["12114249","12329255"],
  ["12114249","12351258"],
  ["12114249","12874853"],
  ["12114249","15194340"],
  ["12114249","27866110"],
  ["12114249","30443363"],
  ["12114249","34326822"],
  ["12114249","35954968"],
  ["12114249","36109845"],
  ["12114249","46356020"],
  ["12114249","47192128"],
  ["12114249","47607639"],
  ["12119618","12124013"],
  ["12119618","12127362"],
  ["12119618","12127564"],
  ["12119618","12193309"],
  ["12119618","12198387"],
  ["12119618","12200580"],
  ["12119618","12236125"],
  ["12119618","12276375"],
  ["12119618","12276665"],
  ["12119618","12453329"],
  ["12119618","12466885"],
  ["12119618","12493701"],
  ["12119618","12514278"],
  ["12119618","12523451"],
  ["12119618","12605500"],
  ["12119618","12730273"],
  ["12119618","12765265"],
  ["12119618","12788674"],
  ["12119618","12853605"],
  ["12119618","12967449"],
  ["12119618","13112601"],
  ["12119618","13145283"],
  ["12119618","15200313"],
  ["12119618","27726025"],
  ["12119618","27868624"],
  ["12119618","32959015"],
  ["12119618","35784564"],
  ["12119618","47192128"],
  ["12119618","47607639"],
  ["12121264","12148091"],
  ["12121264","12193780"],
  ["12121264","12236269"],
  ["12121264","12765265"],
  ["12121264","12853605"],
  ["12121264","13035389"],
  ["12121264","13145283"],
  ["12121264","13451886"],
  ["12121264","13899303"],
  ["12121264","29265708"],
  ["12121264","35784564"],
  ["12121264","36519554"],
  ["12121264","47192128"],
  ["12121264","47607639"],
  ["12121264","49745789"],
  ["12124013","12127362"],
  ["12124013","12193309"],
  ["12124013","12193780"],
  ["12124013","12200580"],
  ["12124013","12236125"],
  ["12124013","12236269"],
  ["12124013","12351071"],
  ["12124013","12605500"],
  ["12124013","13861106"],
  ["12124013","27868624"],
  ["12124013","29303235"],
  ["12124013","35784564"],
  ["12124013","55227607"],
  ["12126217","12134076"],
  ["12126217","12184254"],
  ["12126217","12199576"],
  ["12126217","12320060"],
  ["12126217","12493701"],
  ["12126217","12605500"],
  ["12126217","13005039"],
  ["12126217","34464647"],
  ["12126217","47192128"],
  ["12127362","12140048"],
  ["12127362","12193174"],
  ["12127362","12198387"],
  ["12127362","12200580"],
  ["12127362","12236125"],
  ["12127362","12276375"],
  ["12127362","12276665"],
  ["12127362","12277473"],
  ["12127362","12293217"],
  ["12127362","12329255"],
  ["12127362","12453329"],
  ["12127362","12466885"],
  ["12127362","12484112"],
  ["12127362","12488150"],
  ["12127362","12499279"],
  ["12127362","12514278"],
  ["12127362","12523451"],
  ["12127362","12529780"],
  ["12127362","12563131"],
  ["12127362","13005039"],
  ["12127362","13145283"],
  ["12127362","13861106"],
  ["12127362","14018235"],
  ["12127362","14116746"],
  ["12127362","14713124"],
  ["12127362","14807229"],
  ["12127362","27726025"],
  ["12127362","27868624"],
  ["12127362","28863649"],
  ["12127362","29304235"],
  ["12127362","30704161"],
  ["12127362","32959015"],
  ["12127362","33436148"],
  ["12127362","33863232"],
  ["12127362","34319290"],
  ["12127362","34326822"],
  ["12127362","36109845"],
  ["12127362","36458527"],
  ["12127362","48045511"],
  ["12127362","55227607"],
  ["12127564","12200580"],
  ["12127564","12570417"],
  ["12127564","12605500"],
  ["12127564","12967449"],
  ["12127564","13145283"],
  ["12127564","28642672"],
  ["12127564","36458527"],
  ["12134076","12199576"],
  ["12134076","12320060"],
  ["12134076","13005039"],
  ["12140048","12198789"],
  ["12140048","12236269"],
  ["12140048","12276375"],
  ["12140048","12277473"],
  ["12140048","12283512"],
  ["12140048","12351071"],
  ["12140048","12371082"],
  ["12140048","12851112"],
  ["12140048","12923031"],
  ["12140048","13005039"],
  ["12140048","14018235"],
  ["12140048","15200313"],
  ["12140048","31366729"],
  ["12140048","47607639"],
  ["12148091","12276665"],
  ["12148091","12284097"],
  ["12148091","12287129"],
  ["12148091","12357157"],
  ["12148091","12851112"],
  ["12148091","31668975"],
  ["12148091","47607639"],
  ["12148091","54125917"],
  ["12184254","12481977"],
  ["12184254","12493701"],
  ["12184254","34464647"],
  ["12193174","12193309"],
  ["12193174","12195296"],
  ["12193174","12198387"],
  ["12193174","12276375"],
  ["12193174","12277473"],
  ["12193174","12293217"],
  ["12193174","12328955"],
  ["12193174","12357157"],
  ["12193174","12488150"],
  ["12193174","12523451"],
  ["12193174","12605500"],
  ["12193174","12730273"],
  ["12193174","12788674"],
  ["12193174","13005039"],
  ["12193174","13027753"],
  ["12193174","13145283"],
  ["12193174","13899303"],
  ["12193174","14018235"],
  ["12193174","14117457"],
  ["12193174","27868624"],
  ["12193174","28642672"],
  ["12193174","29304235"],
  ["12193174","30704161"],
  ["12193174","32501012"],
  ["12193174","32712412"],
  ["12193174","32934943"],
  ["12193174","33762221"],
  ["12193174","33863232"],
  ["12193174","33937972"],
  ["12193174","34288614"],
  ["12193174","34319290"],
  ["12193174","52410166"],
  ["12193309","12236125"],
  ["12193309","12276375"],
  ["12193309","12293217"],
  ["12193309","12351071"],
  ["12193309","12357157"],
  ["12193309","12488150"],
  ["12193309","12605500"],
  ["12193309","12788674"],
  ["12193309","13113369"],
  ["12193309","13899303"],
  ["12193309","15200313"],
  ["12193309","29265708"],
  ["12193309","47607639"],
  ["12193780","12236269"],
  ["12193780","12293217"],
  ["12193780","12789336"],
  ["12193780","12851112"],
  ["12193780","13701382"],
  ["12193780","29265708"],
  ["12193780","32712412"],
  ["12193780","33762221"],
  ["12193780","35233973"],
  ["12193780","47192128"],
  ["12193780","47607639"],
  ["12195296","12293217"],
  ["12195296","12360120"],
  ["12195296","12523451"],
  ["12195296","12536560"],
  ["12195296","12965215"],
  ["12195296","13907021"],
  ["12195296","14807229"],
  ["12195296","27868624"],
  ["12195296","27872031"],
  ["12195296","28869014"],
  ["12195296","29265708"],
  ["12195296","29303235"],
  ["12195296","29304235"],
  ["12195296","30129493"],
  ["12195296","30704161"],
  ["12195296","31062035"],
  ["12195296","32959015"],
  ["12195296","33937972"],
  ["12195296","37343079"],
  ["12195296","50275485"],
  ["12195296","52410166"],
  ["12198387","12236125"],
  ["12198387","12277473"],
  ["12198387","12499279"],
  ["12198387","12529648"],
  ["12198387","12570417"],
  ["12198387","12730273"],
  ["12198387","13005039"],
  ["12198387","13145283"],
  ["12198387","14116746"],
  ["12198387","14117457"],
  ["12198387","14925064"],
  ["12198387","27868624"],
  ["12198387","28642672"],
  ["12198387","29303235"],
  ["12198387","29304235"],
  ["12198387","30704161"],
  ["12198387","32712412"],
  ["12198387","33863232"],
  ["12198387","33937972"],
  ["12198387","33984254"],
  ["12198387","35009085"],
  ["12198387","48045511"],
  ["12198387","50275485"],
  ["12198789","12206205"],
  ["12198789","12283512"],
  ["12198789","12292307"],
  ["12198789","12554787"],
  ["12198789","12564922"],
  ["12198789","12967449"],
  ["12198789","13005039"],
  ["12198789","13027202"],
  ["12198789","30000024"],
  ["12198789","31561897"],
  ["12198789","32959015"],
  ["12199576","12320060"],
  ["12199576","12371082"],
  ["12199576","13005039"],
  ["12200580","12351071"],
  ["12200580","12357157"],
  ["12200580","12488150"],
  ["12200580","12605500"],
  ["12200580","12851112"],
  ["12200580","12853605"],
  ["12200580","12965215"],
  ["12200580","13027753"],
  ["12200580","15200313"],
  ["12200580","27868624"],
  ["12200580","30207603"],
  ["12200580","36458527"],
  ["12200580","37052069"],
  ["12200580","49141872"],
  ["12205952","12704500"],
  ["12205952","12874853"],
  ["12205952","15194340"],
  ["12205952","27866110"],
  ["12205952","31055231"],
  ["12205952","34279756"],
  ["12205952","35009085"],
  ["12205952","46356020"],
  ["12205952","49800238"],
  ["12205952","50040751"],
  ["12205952","53597603"],
  ["12205952","55701379"],
  ["12206205","12283512"],
  ["12206205","12565467"],
  ["12206205","12605500"],
  ["12206205","12853605"],
  ["12206205","28072811"],
  ["12206205","54318093"],
  ["12236125","12288442"],
  ["12236125","12514278"],
  ["12236125","12523451"],
  ["12236125","12605500"],
  ["12236125","12965215"],
  ["12236125","13145283"],
  ["12236125","13796823"],
  ["12236125","13899303"],
  ["12236125","27868624"],
  ["12236125","28072811"],
  ["12236125","29303235"],
  ["12236125","29304235"],
  ["12236125","31917276"],
  ["12236125","32893629"],
  ["12236125","32959015"],
  ["12236125","32977298"],
  ["12236125","35009085"],
  ["12236125","47192128"],
  ["12236269","12276375"],
  ["12236269","12789336"],
  ["12236269","12851112"],
  ["12236269","12875936"],
  ["12236269","13145283"],
  ["12236269","27868624"],
  ["12236269","29265708"],
  ["12236269","35784564"],
  ["12236269","36519554"],
  ["12236269","37052069"],
  ["12236269","47192128"],
  ["12236269","47607639"],
  ["12236269","51957057"],
  ["12256230","12874853"],
  ["12256230","12875936"],
  ["12256230","14116746"],
  ["12256230","14117457"],
  ["12256230","14642818"],
  ["12256230","15194340"],
  ["12256230","27866110"],
  ["12256230","32055655"],
  ["12256230","32139022"],
  ["12256230","32719707"],
  ["12256230","35954968"],
  ["12258204","14018235"],
  ["12258204","14807229"],
  ["12258204","35784564"],
  ["12258204","35884195"],
  ["12258204","36109845"],
  ["12276375","12277473"],
  ["12276375","12357157"],
  ["12276375","12605500"],
  ["12276375","13112601"],
  ["12276375","13113369"],
  ["12276375","13145283"],
  ["12276375","13200392"],
  ["12276375","15200313"],
  ["12276375","47192128"],
  ["12276375","47607639"],
  ["12276665","12284097"],
  ["12276665","12453329"],
  ["12276665","12514278"],
  ["12276665","12851112"],
  ["12276665","13145283"],
  ["12276665","27726025"],
  ["12276665","54125917"],
  ["12277473","12284097"],
  ["12277473","12288442"],
  ["12277473","12293217"],
  ["12277473","12328955"],
  ["12277473","12371041"],
  ["12277473","12493701"],
  ["12277473","12523451"],
  ["12277473","12563131"],
  ["12277473","12789336"],
  ["12277473","12853605"],
  ["12277473","14018235"],
  ["12277473","14807229"],
  ["12277473","27868624"],
  ["12277473","29303235"],
  ["12277473","29304235"],
  ["12277473","30704161"],
  ["12277473","31561897"],
  ["12277473","32712412"],
  ["12277473","33435403"],
  ["12277473","33937972"],
  ["12277473","34288614"],
  ["12277473","35009085"],
  ["12277473","36458527"],
  ["12277473","37058226"],
  ["12277473","49141872"],
  ["12283512","12351071"],
  ["12283512","12565467"],
  ["12283512","12967449"],
  ["12284097","12287129"],
  ["12284097","12288442"],
  ["12284097","54125917"],
  ["12287118","12292307"],
  ["12287129","12570417"],
  ["12287129","12851112"],
  ["12287129","12875936"],
  ["12287129","12965215"],
  ["12287129","13899303"],
  ["12287129","32959015"],
  ["12287129","47192128"],
  ["12288442","12328044"],
  ["12288442","12851112"],
  ["12288442","12965215"],
  ["12288442","12967449"],
  ["12288442","13796823"],
  ["12288442","27868624"],
  ["12288442","29303235"],
  ["12288442","29304235"],
  ["12288442","31917276"],
  ["12288442","33436148"],
  ["12288442","50275485"],
  ["12292307","12554787"],
  ["12292307","12564922"],
  ["12292307","13027202"],
  ["12292307","30000024"],
  ["12292307","31561897"],
  ["12292307","32959015"],
  ["12293217","12328955"],
  ["12293217","12967449"],
  ["12293217","14018235"],
  ["12293217","14807229"],
  ["12293217","34288614"],
  ["12293217","36109845"],
  ["12293217","36519554"],
  ["12293217","52410166"],
  ["12319437","12453329"],
  ["12319437","12605500"],
  ["12319437","12870490"],
  ["12319437","14018235"],
  ["12319437","14713124"],
  ["12319437","32893629"],
  ["12319437","47192128"],
  ["12320060","12351258"],
  ["12320060","12453329"],
  ["12320060","12481977"],
  ["12320060","12488150"],
  ["12320060","12493701"],
  ["12320060","12499279"],
  ["12320060","12514278"],
  ["12320060","12605500"],
  ["12320060","12870490"],
  ["12320060","12965215"],
  ["12320060","12968978"],
  ["12320060","13005039"],
  ["12320060","13145283"],
  ["12320060","14713124"],
  ["12320060","15200313"],
  ["12320060","29304235"],
  ["12320060","30704161"],
  ["12320060","33097968"],
  ["12320060","33937972"],
  ["12320060","37052069"],
  ["12320060","46549449"],
  ["12320060","46921476"],
  ["12320060","47603179"],
  ["12320060","52118688"],
  ["12320060","54247662"],
  ["12328044","12328955"],
  ["12328044","12529780"],
  ["12328044","12923277"],
  ["12328044","14116746"],
  ["12328044","15194340"],
  ["12328044","29303235"],
  ["12328044","32712412"],
  ["12328044","35009085"],
  ["12328044","46921476"],
  ["12328044","48277407"],
  ["12328044","49406467"],
  ["12328044","52807903"],
  ["12328955","12529648"],
  ["12328955","12730273"],
  ["12328955","13005039"],
  ["12328955","13451886"],
  ["12328955","14018235"],
  ["12328955","14117457"],
  ["12328955","14925064"],
  ["12328955","27868624"],
  ["12328955","30704161"],
  ["12328955","32719707"],
  ["12328955","33937972"],
  ["12328955","34288614"],
  ["12328955","34319290"],
  ["12328955","37058226"],
  ["12328955","37409740"],
  ["12328955","49141872"],
  ["12328955","49406467"],
  ["12328955","52891211"],
  ["12328955","53483506"],
  ["12328955","55315624"],
  ["12329255","14116746"],
  ["12329255","15194340"],
  ["12329255","27866110"],
  ["12351071","12371082"],
  ["12351071","13113369"],
  ["12351071","29265708"],
  ["12351071","31366729"],
  ["12351258","12488150"],
  ["12351258","12529780"],
  ["12351258","12704500"],
  ["12351258","13907021"],
  ["12351258","15194340"],
  ["12351258","27869677"],
  ["12351258","32501012"],
  ["12351258","34146331"],
  ["12351258","48045772"],
  ["12351258","48277407"],
  ["12351258","49439822"],
  ["12357157","12371082"],
  ["12357157","12484112"],
  ["12357157","12488150"],
  ["12357157","12605500"],
  ["12357157","12788674"],
  ["12357157","13145283"],
  ["12357157","13899303"],
  ["12357157","29304235"],
  ["12357157","32743623"],
  ["12357157","47920714"],
  ["12357157","54318093"],
  ["12360120","13701382"],
  ["12360120","49141872"],
  ["12360120","52410166"],
  ["12371041","12472471"],
  ["12371041","13699781"],
  ["12371041","33937972"],
  ["12371041","35784564"],
  ["12371041","35884195"],
  ["12371041","36109845"],
  ["12371041","51498764"],
  ["12371041","55228369"],
  ["12371082","12523451"],
  ["12371082","12633236"],
  ["12371082","28182632"],
  ["12371082","29265708"],
  ["12371082","36519554"],
  ["12371082","47920714"],
  ["12371082","50275485"],
  ["12371082","54318093"],
  ["12371082","55228369"],
  ["12453329","12493701"],
  ["12453329","12514278"],
  ["12453329","12523451"],
  ["12453329","12563131"],
  ["12453329","12605500"],
  ["12453329","12788674"],
  ["12453329","13005039"],
  ["12453329","13113369"],
  ["12453329","13145283"],
  ["12453329","14018235"],
  ["12453329","15194340"],
  ["12453329","27726025"],
  ["12453329","29939584"],
  ["12453329","30003901"],
  ["12453329","32893629"],
  ["12453329","47192128"],
  ["12453329","47607639"],
  ["12453329","49141872"],
  ["12453329","52410166"],
  ["12466885","12472471"],
  ["12466885","13005039"],
  ["12466885","13701382"],
  ["12466885","13861106"],
  ["12466885","31055231"],
  ["12466885","33435403"],
  ["12466885","37052069"],
  ["12466885","47603179"],
  ["12466885","48982684"],
  ["12466885","52410166"],
  ["12466885","53483506"],
  ["12472471","13005039"],
  ["12472471","28863649"],
  ["12472471","32139022"],
  ["12472471","32959015"],
  ["12472471","32977298"],
  ["12472471","49141872"],
  ["12472471","53483506"],
  ["12481977","12499279"],
  ["12481977","12565467"],
  ["12481977","14713124"],
  ["12481977","33097968"],
  ["12481977","46921476"],
  ["12484112","12923031"],
  ["12484112","32931336"],
  ["12484112","33072389"],
  ["12484112","33097968"],
  ["12484112","33863232"],
  ["12484112","34326822"],
  ["12484112","47607639"],
  ["12488150","12493701"],
  ["12488150","12499279"],
  ["12488150","12529780"],
  ["12488150","12605500"],
  ["12488150","12788674"],
  ["12488150","13899303"],
  ["12488150","14117457"],
  ["12488150","14713124"],
  ["12488150","14807229"],
  ["12488150","14925064"],
  ["12488150","30704161"],
  ["12488150","33097968"],
  ["12488150","37052069"],
  ["12488150","47603179"],
  ["12493701","12499279"],
  ["12493701","12523451"],
  ["12493701","12605500"],
  ["12493701","12788674"],
  ["12493701","12870490"],
  ["12493701","13145283"],
  ["12493701","14018235"],
  ["12493701","14713124"],
  ["12493701","27868624"],
  ["12493701","32959015"],
  ["12493701","34464647"],
  ["12493701","47192128"],
  ["12493701","47603179"],
  ["12493701","47607639"],
  ["12493701","49141872"],
  ["12493701","54247662"],
  ["12493701","57187017"],
  ["12499279","12605500"],
  ["12499279","12788674"],
  ["12499279","12870490"],
  ["12499279","13899303"],
  ["12499279","14713124"],
  ["12514278","12605500"],
  ["12514278","13145283"],
  ["12514278","13899303"],
  ["12514278","27726025"],
  ["12523451","12605500"],
  ["12523451","13145283"],
  ["12523451","14018235"],
  ["12523451","27868624"],
  ["12523451","30704161"],
  ["12523451","35784564"],
  ["12523451","47192128"],
  ["12523451","47607639"],
  ["12523451","48045511"],
  ["12529648","12730273"],
  ["12529648","12965215"],
  ["12529648","13005039"],
  ["12529648","14116746"],
  ["12529648","14807229"],
  ["12529648","14925064"],
  ["12529648","27868624"],
  ["12529648","29303235"],
  ["12529648","30704161"],
  ["12529648","32719707"],
  ["12529648","33436148"],
  ["12529648","33863232"],
  ["12529648","34288614"],
  ["12529648","34319290"],
  ["12529648","36109845"],
  ["12529648","50275485"],
  ["12529648","55315624"],
  ["12529780","12870490"],
  ["12529780","12875936"],
  ["12529780","14925064"],
  ["12529780","15194340"],
  ["12529780","30223665"],
  ["12529780","30443363"],
  ["12529780","30704161"],
  ["12529780","33097968"],
  ["12529780","33937972"],
  ["12529780","34326822"],
  ["12529780","46921476"],
  ["12529780","48045511"],
  ["12529780","48277407"],
  ["12529780","49406467"],
  ["12536560","12606255"],
  ["12536560","12923277"],
  ["12536560","27872031"],
  ["12536560","33165901"],
  ["12536560","33937972"],
  ["12554787","12564922"],
  ["12554787","12570417"],
  ["12554787","13027202"],
  ["12554787","30000024"],
  ["12554787","31561897"],
  ["12554787","32959015"],
  ["12563131","12781308"],
  ["12563131","12853605"],
  ["12563131","12968978"],
  ["12563131","13005039"],
  ["12563131","13145283"],
  ["12563131","13899303"],
  ["12563131","29265708"],
  ["12563131","32931336"],
  ["12563131","32977298"],
  ["12563131","36519554"],
  ["12563131","48277407"],
  ["12563131","49141872"],
  ["12563131","49320722"],
  ["12564922","12968787"],
  ["12564922","13027202"],
  ["12564922","30000024"],
  ["12564922","31561897"],
  ["12564922","32959015"],
  ["12565467","12851112"],
  ["12565467","28072811"],
  ["12565467","30000024"],
  ["12570417","12923031"],
  ["12570417","13145283"],
  ["12570417","13699781"],
  ["12570417","14117457"],
  ["12570417","27868624"],
  ["12570417","28642672"],
  ["12570417","30000024"],
  ["12570417","30704161"],
  ["12570417","32712412"],
  ["12570417","32959015"],
  ["12570417","33937972"],
  ["12570417","35784564"],
  ["12570417","37343079"],
  ["12570417","50275485"],
  ["12570417","51957057"],
  ["12605500","12788674"],
  ["12605500","12967449"],
  ["12605500","13145283"],
  ["12605500","13200392"],
  ["12605500","13899303"],
  ["12605500","27868624"],
  ["12605500","32893629"],
  ["12605500","47192128"],
  ["12605500","47607639"],
  ["12605500","49320722"],
  ["12606255","12765265"],
  ["12606255","13112601"],
  ["12606255","13200392"],
  ["12606255","28182632"],
  ["12606255","30207603"],
  ["12606255","36519554"],
  ["12606255","47694967"],
  ["12633236","15200313"],
  ["12633236","28072811"],
  ["12663194","14807229"],
  ["12663194","29303235"],
  ["12663194","32959015"],
  ["12663194","34464647"],
  ["12704500","13296078"],
  ["12704500","13907021"],
  ["12704500","31055231"],
  ["12704500","32055655"],
  ["12704500","32501012"],
  ["12704500","34364251"],
  ["12704500","37343079"],
  ["12704500","46549449"],
  ["12704500","46921476"],
  ["12704500","48045772"],
  ["12704500","49439822"],
  ["12704500","54954390"],
  ["12704500","56724807"],
  ["12704500","57561642"],
  ["12730273","12875936"],
  ["12730273","14116746"],
  ["12730273","14925064"],
  ["12730273","29303235"],
  ["12730273","30704161"],
  ["12730273","32719707"],
  ["12730273","34288614"],
  ["12765265","13200392"],
  ["12765265","15200313"],
  ["12765265","28182632"],
  ["12765265","36519554"],
  ["12765265","47694967"],
  ["12781308","12789336"],
  ["12781308","12851112"],
  ["12781308","12968978"],
  ["12781308","13035389"],
  ["12781308","13899303"],
  ["12781308","30207603"],
  ["12781308","55227607"],
  ["12788674","13113369"],
  ["12788674","13145283"],
  ["12788674","13899303"],
  ["12788674","14018235"],
  ["12788674","35784564"],
  ["12789336","13035389"],
  ["12789336","30207603"],
  ["12789336","31561897"],
  ["12851112","12965215"],
  ["12851112","13899303"],
  ["12851112","29265708"],
  ["12851112","30207603"],
  ["12851112","36519554"],
  ["12851112","47192128"],
  ["12853605","12923031"],
  ["12853605","13112601"],
  ["12853605","13200392"],
  ["12853605","13451886"],
  ["12853605","13699781"],
  ["12853605","32931336"],
  ["12853605","47192128"],
  ["12853605","49745789"],
  ["12853605","54318093"],
  ["12870490","14117457"],
  ["12870490","14713124"],
  ["12870490","30285305"],
  ["12870490","30704161"],
  ["12870490","33097968"],
  ["12870490","34319290"],
  ["12870490","37052069"],
  ["12870490","37409740"],
  ["12870490","54954390"],
  ["12870490","57561642"],
  ["12874853","13451886"],
  ["12874853","14117457"],
  ["12874853","15194340"],
  ["12874853","27866110"],
  ["12874853","31062035"],
  ["12874853","32139022"],
  ["12874853","32719707"],
  ["12874853","33762221"],
  ["12874853","34326822"],
  ["12874853","35954968"],
  ["12874853","36458527"],
  ["12874853","46356020"],
  ["12874853","47372005"],
  ["12874853","47694967"],
  ["12875936","13027753"],
  ["12875936","14116746"],
  ["12875936","33937972"],
  ["12875936","34288614"],
  ["12875936","34326822"],
  ["12875936","36458527"],
  ["12875936","46921476"],
  ["12875936","48277407"],
  ["12875936","49800238"],
  ["12875936","52405426"],
  ["12875936","53100043"],
  ["12905307","12923031"],
  ["12905307","13200392"],
  ["12905307","13701382"],
  ["12923031","13005039"],
  ["12923031","13200392"],
  ["12923031","13699781"],
  ["12923031","15200313"],
  ["12923031","28642672"],
  ["12923031","29303235"],
  ["12923031","33435403"],
  ["12923277","30003901"],
  ["12923277","31055231"],
  ["12923277","31062035"],
  ["12923277","36772893"],
  ["12923277","37125681"],
  ["12923277","52410166"],
  ["12923277","54318093"],
  ["12924606","14117457"],
  ["12924606","37125681"],
  ["12965215","13112601"],
  ["12965215","13796823"],
  ["12965215","14018235"],
  ["12965215","14807229"],
  ["12965215","27868624"],
  ["12965215","29303235"],
  ["12965215","29304235"],
  ["12965215","31917276"],
  ["12965215","32931336"],
  ["12965215","32977298"],
  ["12965215","33435403"],
  ["12965215","54247662"],
  ["12965215","62183661"],
  ["12967449","13027202"],
  ["12967449","14117457"],
  ["12968978","13005039"],
  ["12968978","15194340"],
  ["12968978","15200313"],
  ["12968978","27866110"],
  ["12968978","29303235"],
  ["12968978","31055231"],
  ["12968978","32139022"],
  ["12968978","33435403"],
  ["12968978","49141872"],
  ["12968978","50040751"],
  ["12968978","51498764"],
  ["12968978","52118688"],
  ["12968978","55701379"],
  ["13005039","13200392"],
  ["13005039","15200313"],
  ["13005039","29303235"],
  ["13005039","29304235"],
  ["13005039","30704161"],
  ["13005039","31055231"],
  ["13005039","32931336"],
  ["13005039","32977298"],
  ["13005039","33097968"],
  ["13005039","33937972"],
  ["13005039","48045511"],
  ["13005039","48277407"],
  ["13005039","49141872"],
  ["13005039","54318093"],
  ["13027202","30000024"],
  ["13027202","31561897"],
  ["13027202","32959015"],
  ["13027753","14018235"],
  ["13027753","14116746"],
  ["13027753","31062035"],
  ["13027753","32893629"],
  ["13027753","32934943"],
  ["13027753","33762221"],
  ["13027753","33937972"],
  ["13027753","35233973"],
  ["13027753","35884195"],
  ["13027753","37058226"],
  ["13027753","49320722"],
  ["13035389","30207603"],
  ["13112601","13701382"],
  ["13112601","30207603"],
  ["13112601","31287479"],
  ["13112601","36519554"],
  ["13113369","29265708"],
  ["13145283","13451886"],
  ["13145283","13899303"],
  ["13145283","14018235"],
  ["13145283","14117457"],
  ["13145283","27726025"],
  ["13145283","29304235"],
  ["13145283","32139022"],
  ["13145283","32934943"],
  ["13145283","35784564"],
  ["13145283","47192128"],
  ["13145283","47607639"],
  ["13145283","49141872"],
  ["13145283","51957057"],
  ["13145283","53483506"],
  ["13200392","13701382"],
  ["13200392","14713124"],
  ["13200392","28182632"],
  ["13200392","31062035"],
  ["13200392","36519554"],
  ["13200392","47694967"],
  ["13296078","32992079"],
  ["13296078","34146331"],
  ["13296078","34390291"],
  ["13296078","35169519"],
  ["13449058","29939584"],
  ["13451886","13899303"],
  ["13451886","14117457"],
  ["13451886","28642672"],
  ["13451886","30223665"],
  ["13451886","32139022"],
  ["13451886","32712412"],
  ["13451886","33165901"],
  ["13451886","33863232"],
  ["13451886","33937972"],
  ["13451886","34326822"],
  ["13451886","48277407"],
  ["13451886","49745789"],
  ["13451886","54247662"],
  ["13520444","47471965"],
  ["13520444","54247662"],
  ["13699781","31561897"],
  ["13699781","32893629"],
  ["13699781","35884195"],
  ["13699781","49320722"],
  ["13701382","13899303"],
  ["13701382","15194340"],
  ["13701382","31062035"],
  ["13701382","31287479"],
  ["13701382","32712412"],
  ["13701382","36519554"],
  ["13701382","37058226"],
  ["13701382","51498764"],
  ["13701382","53483506"],
  ["13796823","27868624"],
  ["13796823","29303235"],
  ["13796823","29304235"],
  ["13796823","31917276"],
  ["13861106","47607639"],
  ["13861106","47920714"],
  ["13899303","27868624"],
  ["13899303","29304235"],
  ["13899303","32934943"],
  ["13899303","47192128"],
  ["13899303","48277407"],
  ["13899303","49745789"],
  ["13899303","54247662"],
  ["13907021","32501012"],
  ["13907021","35169519"],
  ["13907021","49439822"],
  ["13907021","56724807"],
  ["14018235","33762221"],
  ["14018235","33937972"],
  ["14018235","35009085"],
  ["14018235","36519554"],
  ["14018235","37058226"],
  ["14018235","52410166"],
  ["14018235","62183661"],
  ["14116746","15194340"],
  ["14116746","27866110"],
  ["14116746","27868624"],
  ["14116746","28642672"],
  ["14116746","30223665"],
  ["14116746","31559757"],
  ["14116746","33072389"],
  ["14116746","33863232"],
  ["14116746","33937972"],
  ["14116746","34146331"],
  ["14116746","34326822"],
  ["14116746","35009085"],
  ["14116746","35169519"],
  ["14116746","37056973"],
  ["14116746","37409740"],
  ["14116746","46549449"],
  ["14116746","47694967"],
  ["14116746","49320722"],
  ["14116746","52891211"],
  ["14116746","53597603"],
  ["14116746","55315624"],
  ["14117457","14925064"],
  ["14117457","15194340"],
  ["14117457","27866110"],
  ["14117457","28642672"],
  ["14117457","30704161"],
  ["14117457","32139022"],
  ["14117457","32712412"],
  ["14117457","32931336"],
  ["14117457","33097968"],
  ["14117457","33165901"],
  ["14117457","33863232"],
  ["14117457","33937972"],
  ["14117457","34319290"],
  ["14117457","46549449"],
  ["14117457","47603179"],
  ["14117457","48045511"],
  ["14117457","48277407"],
  ["14117457","53597603"],
  ["14117457","54247662"],
  ["14117457","55315624"],
  ["14642818","27866110"],
  ["14642818","35169519"],
  ["14642818","55275689"],
  ["14642818","56724807"],
  ["14807229","27868624"],
  ["14807229","28642672"],
  ["14807229","29303235"],
  ["14807229","29304235"],
  ["14807229","30003901"],
  ["14807229","31055231"],
  ["14807229","31559757"],
  ["14807229","33937972"],
  ["14807229","34288614"],
  ["14807229","34319290"],
  ["14807229","35884195"],
  ["14807229","48277407"],
  ["14807229","49406467"],
  ["14925064","27868624"],
  ["14925064","28642672"],
  ["14925064","29303235"],
  ["14925064","29304235"],
  ["14925064","30704161"],
  ["14925064","33937972"],
  ["14925064","34319290"],
  ["14925064","48045511"],
  ["15194340","27866110"],
  ["15194340","30223665"],
  ["15194340","30285305"],
  ["15194340","31561897"],
  ["15194340","32893629"],
  ["15194340","33097968"],
  ["15194340","34364251"],
  ["15194340","35009085"],
  ["15194340","46356020"],
  ["15194340","55460322"],
  ["15200313","28416123"],
  ["15200313","33435403"],
  ["15200313","35884195"],
  ["15200313","47607639"],
  ["15200313","47694967"],
  ["15200313","52410166"],
  ["27866110","30223665"],
  ["27866110","34390291"],
  ["27866110","35954968"],
  ["27866110","46356020"],
  ["27868624","28863649"],
  ["27868624","29303235"],
  ["27868624","29304235"],
  ["27868624","31917276"],
  ["27868624","32931336"],
  ["27868624","32959015"],
  ["27868624","33072389"],
  ["27868624","33097968"],
  ["27868624","33436148"],
  ["27868624","33863232"],
  ["27868624","34279756"],
  ["27868624","34288614"],
  ["27868624","34319290"],
  ["27868624","35784564"],
  ["27868624","47192128"],
  ["27868624","48045511"],
  ["27868624","50275485"],
  ["27869677","28863649"],
  ["27869677","30003901"],
  ["27869677","32893629"],
  ["27869677","35009085"],
  ["27869677","52410166"],
  ["27872031","33165901"],
  ["27872031","52410166"],
  ["28072811","54318093"],
  ["28182632","36519554"],
  ["28182632","47694967"],
  ["28182632","47920714"],
  ["28416123","30000024"],
  ["28416123","33435403"],
  ["28416123","46356020"],
  ["28416123","47694967"],
  ["28416123","52118688"],
  ["28416123","53100043"],
  ["28642672","30223665"],
  ["28642672","30704161"],
  ["28642672","32712412"],
  ["28642672","33165901"],
  ["28642672","33863232"],
  ["28642672","33937972"],
  ["28642672","37056973"],
  ["28642672","46549449"],
  ["28642672","48045511"],
  ["28642672","50275485"],
  ["28642672","53483506"],
  ["28863649","30285305"],
  ["28863649","35009085"],
  ["28863649","46921476"],
  ["28863649","48277407"],
  ["28863649","49745789"],
  ["28869014","32712412"],
  ["28869014","32743623"],
  ["28869014","32931336"],
  ["28869014","33097968"],
  ["28869014","33435403"],
  ["28869014","33436148"],
  ["28869014","36456805"],
  ["28869014","49141872"],
  ["28869014","49800238"],
  ["28869014","52118688"],
  ["28869014","53100043"],
  ["28869014","55227607"],
  ["29265708","31668975"],
  ["29265708","35784564"],
  ["29265708","36519554"],
  ["29265708","47192128"],
  ["29265708","47607639"],
  ["29303235","29304235"],
  ["29303235","30003901"],
  ["29303235","30704161"],
  ["29303235","31917276"],
  ["29303235","32931336"],
  ["29303235","33097968"],
  ["29303235","33863232"],
  ["29303235","33937972"],
  ["29303235","35784564"],
  ["29303235","48045511"],
  ["29303235","48045772"],
  ["29303235","49141872"],
  ["29303235","49406467"],
  ["29303235","50275485"],
  ["29303235","52891211"],
  ["29303235","55228369"],
  ["29304235","30285305"],
  ["29304235","31917276"],
  ["29304235","32712412"],
  ["29304235","33863232"],
  ["29304235","34326822"],
  ["29304235","35784564"],
  ["29304235","47694967"],
  ["29304235","49141872"],
  ["29304235","50275485"],
  ["29304235","51957057"],
  ["29939584","31055231"],
  ["30000024","31055231"],
  ["30000024","31561897"],
  ["30000024","32959015"],
  ["30000024","49141872"],
  ["30003901","32436403"],
  ["30003901","34319290"],
  ["30003901","49141872"],
  ["30003901","52410166"],
  ["30223665","32712412"],
  ["30223665","37052069"],
  ["30223665","37409740"],
  ["30223665","46549449"],
  ["30223665","50973279"],
  ["30223665","52410166"],
  ["30285305","33097968"],
  ["30285305","33863232"],
  ["30285305","34326822"],
  ["30285305","34639852"],
  ["30285305","35009085"],
  ["30285305","46921476"],
  ["30285305","48277407"],
  ["30285305","49406467"],
  ["30285305","50973279"],
  ["30285305","52807903"],
  ["30443363","35425790"],
  ["30443363","46549449"],
  ["30544665","34288614"],
  ["30544665","34597980"],
  ["30544665","37125681"],
  ["30544665","52807903"],
  ["30544665","53100043"],
  ["30544665","94753015"],
  ["30704161","32712412"],
  ["30704161","33937972"],
  ["30704161","35009085"],
  ["30704161","49320722"],
  ["30704161","54247662"],
  ["30704161","55315624"],
  ["31055231","34319290"],
  ["31055231","35009085"],
  ["31055231","35884195"],
  ["31055231","47603179"],
  ["31055231","48045511"],
  ["31055231","49771435"],
  ["31055231","52410166"],
  ["31055231","54247662"],
  ["31055231","54954390"],
  ["31055231","57561642"],
  ["31062035","32139022"],
  ["31062035","33762221"],
  ["31062035","36772893"],
  ["31062035","37058226"],
  ["31062035","53483506"],
  ["31287479","36519554"],
  ["31559757","33937972"],
  ["31559757","34319290"],
  ["31559757","37343079"],
  ["31559757","37409740"],
  ["31559757","48045511"],
  ["31559757","55832201"],
  ["31559757","56724807"],
  ["31561897","32959015"],
  ["31561897","47192128"],
  ["31668975","32959015"],
  ["31668975","47192128"],
  ["31917276","32959015"],
  ["31917276","48277407"],
  ["32055655","32501012"],
  ["32055655","34364251"],
  ["32055655","56724807"],
  ["32139022","33762221"],
  ["32139022","36772893"],
  ["32139022","52405426"],
  ["32139022","100009583"],
  ["32436403","32931336"],
  ["32436403","33204812"],
  ["32436403","34279756"],
  ["32436403","35009085"],
  ["32436403","52891211"],
  ["32436403","55315624"],
  ["32436403","55832201"],
  ["32501012","32992079"],
  ["32501012","34288614"],
  ["32501012","34364251"],
  ["32501012","35169519"],
  ["32501012","46549449"],
  ["32501012","48045772"],
  ["32501012","49439822"],
  ["32501012","56724807"],
  ["32712412","33863232"],
  ["32712412","33937972"],
  ["32712412","48277407"],
  ["32712412","51957057"],
  ["32719707","34326822"],
  ["32719707","35954968"],
  ["32719707","48277407"],
  ["32719707","48716075"],
  ["32719707","52410166"],
  ["32743623","37052069"],
  ["32893629","33204812"],
  ["32893629","35009085"],
  ["32893629","35233973"],
  ["32893629","35884195"],
  ["32931336","33863232"],
  ["32931336","33937972"],
  ["32931336","34279756"],
  ["32931336","34288614"],
  ["32931336","34319290"],
  ["32931336","34639852"],
  ["32931336","35009085"],
  ["32931336","46356020"],
  ["32931336","47603179"],
  ["32931336","47607639"],
  ["32931336","48045511"],
  ["32931336","48277407"],
  ["32931336","49406467"],
  ["32931336","52891211"],
  ["32931336","54247662"],
  ["32931336","54318093"],
  ["32931336","55228369"],
  ["32931336","55315624"],
  ["32934943","33937972"],
  ["32934943","46356020"],
  ["32934943","48277407"],
  ["32934943","49141872"],
  ["32934943","49320722"],
  ["32934943","49406467"],
  ["32934943","51497522"],
  ["32934943","99895165"],
  ["32959015","32977298"],
  ["32959015","34464647"],
  ["32977298","33097968"],
  ["32977298","35884195"],
  ["32977298","54318093"],
  ["32977298","55228369"],
  ["32992079","34364251"],
  ["33012152","35784564"],
  ["33072389","34319290"],
  ["33072389","35009085"],
  ["33072389","36458527"],
  ["33072389","37058226"],
  ["33072389","47920714"],
  ["33072389","48277407"],
  ["33072389","49141872"],
  ["33072389","52807903"],
  ["33097968","33863232"],
  ["33097968","33937972"],
  ["33097968","34326822"],
  ["33097968","35009085"],
  ["33097968","46921476"],
  ["33097968","48277407"],
  ["33097968","52807903"],
  ["33097968","99895165"],
  ["33165901","33937972"],
  ["33165901","49320722"],
  ["33165901","50275485"],
  ["33204812","34639852"],
  ["33204812","35954968"],
  ["33204812","49141872"],
  ["33435403","35009085"],
  ["33435403","47603179"],
  ["33435403","47607639"],
  ["33435403","52118688"],
  ["33435403","52410166"],
  ["33436148","34319290"],
  ["33436148","49771435"],
  ["33436148","54954390"],
  ["33436148","57561642"],
  ["33762221","36519554"],
  ["33863232","34288614"],
  ["33863232","35954968"],
  ["33863232","46921476"],
  ["33863232","47607639"],
  ["33863232","48277407"],
  ["33863232","52807903"],
  ["33910499","46549449"],
  ["33910499","47603179"],
  ["33910499","49800238"],
  ["33910499","52118688"],
  ["33910499","52410166"],
  ["33910499","53100043"],
  ["33937972","34319290"],
  ["33937972","35884195"],
  ["33937972","37056973"],
  ["33937972","37343079"],
  ["33937972","37409740"],
  ["33937972","48045511"],
  ["33937972","48277407"],
  ["33937972","50275485"],
  ["33937972","52891211"],
  ["33937972","53483506"],
  ["34146331","34364251"],
  ["34146331","35169519"],
  ["34146331","37409740"],
  ["34146331","48045772"],
  ["34279756","34639852"],
  ["34279756","35009085"],
  ["34288614","47603179"],
  ["34288614","48277407"],
  ["34288614","49320722"],
  ["34319290","46549449"],
  ["34319290","47603179"],
  ["34319290","49141872"],
  ["34319290","52807903"],
  ["34319290","54247662"],
  ["34319290","57561642"],
  ["34326822","35009085"],
  ["34326822","35954968"],
  ["34326822","36458527"],
  ["34326822","37052069"],
  ["34326822","49141872"],
  ["34326822","49406467"],
  ["34364251","35169519"],
  ["34364251","49439822"],
  ["34364251","55275689"],
  ["34364251","55460322"],
  ["34364251","59135028"],
  ["34364251","62099750"],
  ["34390291","35169519"],
  ["34390291","56724807"],
  ["34464647","47192128"],
  ["34464647","57187017"],
  ["34597980","36456805"],
  ["34597980","37125681"],
  ["34597980","51497522"],
  ["34597980","94753015"],
  ["34639852","35009085"],
  ["34639852","46921476"],
  ["34876884","35772719"],
  ["35009085","35954968"],
  ["35009085","46356020"],
  ["35009085","46921476"],
  ["35009085","48277407"],
  ["35009085","49406467"],
  ["35009085","53483506"],
  ["35009085","62183661"],
  ["35169519","37409740"],
  ["35169519","48045772"],
  ["35169519","49439822"],
  ["35169519","55275689"],
  ["35169519","56724807"],
  ["35233973","36458527"],
  ["35233973","37052069"],
  ["35233973","49141872"],
  ["35784564","36109845"],
  ["35884195","36109845"],
  ["35884195","49320722"],
  ["35884195","53483506"],
  ["35954968","37058226"],
  ["36456805","49141872"],
  ["36456805","59801596"],
  ["36458527","37058226"],
  ["36458527","48045511"],
  ["36458527","49141872"],
  ["36458527","49320722"],
  ["36458527","49406467"],
  ["36519554","47694967"],
  ["36772893","37058226"],
  ["37052069","37125681"],
  ["37052069","47603179"],
  ["37052069","49745789"],
  ["37052069","52405426"],
  ["37052069","52410166"],
  ["37058226","49141872"],
  ["37058226","49320722"],
  ["37058226","49406467"],
  ["37125681","53597603"],
  ["37125681","94753015"],
  ["37343937","51497522"],
  ["37343937","51638660"],
  ["37409740","46549449"],
  ["37409740","49439822"],
  ["37409740","50973279"],
  ["37409740","52891211"],
  ["37409740","53597603"],
  ["37409740","55315624"],
  ["37409740","55832201"],
  ["37409740","56724807"],
  ["46314082","51497522"],
  ["46356020","46549449"],
  ["46356020","50040751"],
  ["46356020","50973279"],
  ["46549449","48277407"],
  ["46549449","49141872"],
  ["46549449","50973279"],
  ["46549449","52891211"],
  ["46549449","53597603"],
  ["46549449","54247662"],
  ["46549449","55315624"],
  ["46549449","55460322"],
  ["46549449","57561642"],
  ["46921476","48277407"],
  ["46921476","49406467"],
  ["46921476","50973279"],
  ["46921476","52807903"],
  ["46921476","55460322"],
  ["46921476","99895165"],
  ["47192128","47607639"],
  ["47192128","50275485"],
  ["47192128","57187017"],
  ["47372005","50973279"],
  ["47603179","48045511"],
  ["47603179","48277407"],
  ["47603179","52807903"],
  ["47603179","53597603"],
  ["47603179","54247662"],
  ["47694967","55228369"],
  ["47694967","55701379"],
  ["47920714","49141872"],
  ["47920714","54318093"],
  ["48045511","48277407"],
  ["48045511","49141872"],
  ["48045511","49406467"],
  ["48045511","52891211"],
  ["48045511","54247662"],
  ["48277407","49320722"],
  ["48277407","49406467"],
  ["48277407","50040751"],
  ["48277407","50275485"],
  ["48277407","52807903"],
  ["48277407","53597603"],
  ["48277407","54247662"],
  ["48277407","55315624"],
  ["48277407","94753015"],
  ["48277407","99895165"],
  ["48982684","50973279"],
  ["48982684","52410166"],
  ["49141872","49745789"],
  ["49141872","53100043"],
  ["49141872","54247662"],
  ["49141872","55227607"],
  ["49320722","50040751"],
  ["49406467","52410166"],
  ["49406467","53100043"],
  ["49406467","99895165"],
  ["49439822","56724807"],
  ["49745789","52807903"],
  ["49771435","52410166"],
  ["49771435","54954390"],
  ["49800238","55701379"],
  ["49800238","59801596"],
  ["50040751","53483506"],
  ["50711969","55832201"],
  ["50973279","52405426"],
  ["50973279","55315624"],
  ["50973279","55460322"],
  ["50973279","55832201"],
  ["51320957","100342687"],
  ["52410166","54954390"],
  ["52410166","57561642"],
  ["52891211","53597603"],
  ["52891211","55315624"],
  ["53100043","55701379"],
  ["53100043","94753015"],
  ["53483506","62183661"],
  ["53597603","54247662"],
  ["53597603","55315624"],
  ["54954390","57561642"],
  ["55275689","56724807"],
  ["55275689","59135028"],
];
(function mergeVerifiedSongConnections() {
  const byId = new Map(relationshipArtists.filter(item => item.neteaseId).map(item => [String(item.neteaseId), item]));
  const linked = new Map(relationshipArtists.map(item => [item, new Set((item.collaborators || []).map(peer => peer.name))]));
  const byName = new Map(relationshipArtists.map(item => [item.name, item]));
  const memberPairs = collectedMembers20261105.flatMap(item => item.collaborators.map(peer => [
    String(item.neteaseId), String((byName.get(peer.name) || {}).neteaseId || '')
  ]));
  verifiedSongPairs20261105.concat(memberPairs).forEach(([leftId, rightId]) => {
    const left = byId.get(leftId);
    const right = byId.get(rightId);
    if (!left || !right || left === right) return;
    [[left, right], [right, left]].forEach(([artist, peer]) => {
      if (linked.get(artist).has(peer.name)) return;
      if (!artist.collaborators) artist.collaborators = [];
      artist.collaborators.push({ name: peer.name });
      linked.get(artist).add(peer.name);
    });
  });
})();

// 在双向补全前，先标记原始数据中明确有 collaborators 的歌手
relationshipArtists.forEach(singer => {
  if (singer.collaborators && singer.collaborators.length > 0) {
    singer._hasOriginalCollaborators = true;
  }
});

// 自动补全双向合作关系
(function autoCompleteConnections() {
  relationshipArtists.forEach(singer => {
    if (singer.collaborators) {
      singer.collaborators.forEach(collab => {
        // 找到对方的歌手对象
        const partner = relationshipArtists.find(s => s.name === collab.name);
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
// Resolve verified member aliases to the map names; remove blank placeholders only.
const verifiedMemberNames20261105 = {
  "2727": {
    "FEEELEVEN": "FEEEleven"
  },
  "NOUS": {
    "派克特(PACT）": "派克特",
    "鱼头-killa4nia": "鱼头_killa4nia"
  },
  "404 RAPPER(红花会)": {
    "AZ阿之": "AZ啊之"
  },
  "CandyShop": {
    "Kito": "KITO"
  },
  "WOLF GANG": {
    "Laser 3": "Laser3"
  },
  "Free-Out": {
    "MC光光": "Mc光光",
    "Trouble.Z": "高天佐"
  },
  "成都集团": {
    "Psy.P": "PSY.P"
  },
  "Higher Brothers": {
    "Psy.P": "PSY.P"
  },
  "永力兄弟会": {
    "YUNG NEO": "Yung Neo"
  }
};
labels.forEach(group => {
  const replacements = verifiedMemberNames20261105[group.name] || {};
  group.members = [...new Set((group.members || []).map(name => replacements[name] || name).filter(name => String(name).trim()))];
});

  return { singers, cities, labels, profiles };
})();
