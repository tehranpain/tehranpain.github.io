(function (root) {
  // Verified NetEase releases from the curated October 2026 shortlist, newest first.
  const albums = {
    "2514": [
      {"id":"2628001","title":"你所不知道的杜振熙之内部整修","cover":"https://p1.music.126.net/BwvvtmT3pC5GbkE3T_l87w==/109951168001990864.jpg","format":"专辑"},
      {"id":"7542","title":"月光","cover":"https://p1.music.126.net/cB5Cs8PPPkYbj4vwaaWcWw==/109951168001993115.jpg","format":"专辑"},
      {"id":"7547","title":"收敛水","cover":"https://p1.music.126.net/YuS3GrLcE7PIi_3s-62ZQA==/109951168001997012.jpg","format":"专辑"}
    ],
    "865007": [
      {"id":"406521987","title":"年轻人的一生","cover":"https://p2.music.126.net/FEc7v3I3YXHMDu31NJwuLg==/109951174185039781.jpg","format":"专辑"},
      {"id":"149257265","title":"退潮","cover":"https://p2.music.126.net/cK3Rm-WaJwNw9pOWg7DX-A==/109951167750223899.jpg","format":"专辑"},
      {"id":"73471599","title":"生于未来","cover":"https://p1.music.126.net/wTO7xsKa9YbeZGtgMzDZGw==/109951163807651102.jpg","format":"专辑"}
    ],
    "1132392": [
      {"id":"287788505","title":"乐透人生GT：即刻入戏","cover":"https://p1.music.126.net/3uKds-MLvxluxZ9K01xWkw==/109951172126526200.jpg","format":"专辑"},
      {"id":"169119649","title":"狗咬狗","cover":"https://p1.music.126.net/XFseMW0n_7aWQdzlJwXfNg==/109951168721928914.jpg","format":"专辑"},
      {"id":"85991061","title":"黑马王子","cover":"https://p1.music.126.net/G3CaguyN68IKKDrFuNeCQA==/109951170289918247.jpg","format":"专辑"}
    ],
    "1198123": [
      {"id":"272767388","title":"不息","cover":"https://p2.music.126.net/MpgnIMwqDC3IWgGBfOnxIQ==/109951171077297566.jpg","format":"专辑"},
      {"id":"166450015","title":"迄今为止的生命里","cover":"https://p1.music.126.net/yfPmJYEpSgEMG_y5u0MtIA==/109951168649207060.jpg","format":"EP"},
      {"id":"84778889","title":"初","cover":"https://p1.music.126.net/tXYeuzm_JSQFcDI8l_RESA==/109951164608085811.jpg","format":"专辑"}
    ],
    "1204010": [
      {"id":"353177269","title":"流行","cover":"https://p2.music.126.net/_unjrno3g2ojZ4I6m4MAnQ==/109951172383235131.jpg","format":"专辑"},
      {"id":"195987761","title":"Vanity Fair","cover":"https://p2.music.126.net/ABq_jZDJDcTY-vIHoe6hUQ==/109951169770889971.jpg","format":"专辑"},
      {"id":"179191784","title":"做旧","cover":"https://p2.music.126.net/YK-yJzfyYUWPhdm0HLMNrQ==/109951170726033538.jpg","format":"EP"}
    ],
    "12001060": [
      {"id":"253196324","title":"七号种子","cover":"https://p2.music.126.net/S4D8zjl6Cw_sz69uy5SDCw==/109951170216008167.jpg","format":"专辑"},
      {"id":"151292121","title":"ONE LIFE ONLY","cover":"https://p2.music.126.net/8X-lNSZPweAS0O9Y4Y3oZg==/109951167870567595.jpg","format":"专辑"},
      {"id":"125147281","title":"云泥之别 Truth Of The Clay","cover":"https://p1.music.126.net/VhK6m3xD4s00hRIaUVbSoA==/109951172945925165.jpg","format":"专辑"}
    ],
    "12064019": [
      {"id":"404975764","title":"斩鸭线","cover":"https://p1.music.126.net/Eafh2qRUgw2IXXOVD4B9LQ==/109951174139932904.jpg","format":"专辑"},
      {"id":"195875404","title":"邻家小丈夫","cover":"https://p1.music.126.net/Dg4tY7L441GZfYqqvWvPUw==/109951169590445432.jpg","format":"专辑"},
      {"id":"156434952","title":"真假美猴王","cover":"https://p1.music.126.net/ZNxEPHvOXusFZeFQhQ8DPg==/109951168141966141.jpg","format":"EP"}
    ],
    "12110173": [
      {"id":"408811475","title":"SAYLESS MIXTAPE VOL.1","cover":"https://p1.music.126.net/RcX7rPxi9gtMbrAOR4hZlw==/109951174255162100.jpg","format":"Mixtape"},
      {"id":"272168612","title":"KILL THOME II","cover":"https://p1.music.126.net/Kox5oyoKrOm77_Rx4TW2yg==/109951170989107954.jpg","format":"专辑"},
      {"id":"157935600","title":"CASANOVA","cover":"https://p1.music.126.net/IuyhHbgZVnFHLjknh3JriQ==/109951168223326749.jpg","format":"专辑"}
    ],
    "12127362": [
      {"id":"190896190","title":"STRIPELIFE","cover":"https://p2.music.126.net/m2SepxStqvbSJ0d09dM6Fw==/109951170315759635.jpg","format":"专辑"},
      {"id":"140566771","title":"亚特兰蒂斯","cover":"https://p1.music.126.net/rSR0ULNIdMOGb3hxW_vahA==/109951167061630513.jpg","format":"专辑"}
    ],
    "12193174": [
      {"id":"352728713","title":"槍火天使 Gun-fire Angel","cover":"https://p2.music.126.net/ZLunCTp4RRnu7N8lGVw4Fw==/109951172372358346.jpg","format":"专辑"},
      {"id":"160890405","title":"Uniconfication","cover":"https://p2.music.126.net/cGTKkFl5qcXIDYPo7PrmDA==/109951168431655039.jpg","format":"专辑"},
      {"id":"138207036","title":"剑，蔷薇 SwordandRose.","cover":"https://p1.music.126.net/3CIzjJXMMTUYhl0PClJbCw==/109951167087479203.jpg","format":"专辑"}
    ],
    "12198387": [
      {"id":"287974232","title":"在雨后醒来","cover":"https://p1.music.126.net/niUkuo5bIZ3AbJ-BAYF3CQ==/109951172135987504.jpg","format":"专辑"},
      {"id":"198470550","title":"Life After Small Town","cover":"https://p2.music.126.net/VmFpmDv5TJwfKeKgHBdiZA==/109951169700047695.jpg","format":"专辑"},
      {"id":"154372290","title":"NESA","cover":"https://p2.music.126.net/GUP8z0TeN4r7OJuQFYVI9g==/109951168028888869.jpg","format":"专辑"}
    ],
    "12205952": [
      {"id":"400112541","title":"商业与玩法","cover":"https://p1.music.126.net/rt6_mInoqx0iqImk9qng2w==/109951173986994634.jpg","format":"专辑"},
      {"id":"267784482","title":"幽默与笑话","cover":"https://p2.music.126.net/A_Wr1zYxHAU9bFt5wL6u6Q==/109951173753553418.jpg","format":"专辑"}
    ],
    "12236125": [
      {"id":"240032220","title":"Love Me Later","cover":"https://p1.music.126.net/IzzMwCpA4MAdKqmoOI3FYQ==/109951169712367983.jpg","format":"专辑"},
      {"id":"132874562","title":"幸存者的负罪感","cover":"https://p2.music.126.net/yWV3b1I7vwMv53NL-QwBqw==/109951170141514361.jpg","format":"专辑"},
      {"id":"82266485","title":"演.说.家","cover":"https://p2.music.126.net/oiKUza9l47MBECzyrOYbBg==/109951169775167207.jpg","format":"专辑"}
    ],
    "12256230": [
      {"id":"393372073","title":"无情的帅哥","cover":"https://p1.music.126.net/o5Fiq5auFeQAsx8Jygo2nw==/109951173778000491.jpg","format":"EP"},
      {"id":"370666291","title":"活在未来","cover":"https://p2.music.126.net/3zJisl2v3zfxBx774M5kpQ==/109951173038827730.jpg","format":"专辑"},
      {"id":"355999482","title":"MY STAR, MY START! (我的星星，我的开始)","cover":"https://p2.music.126.net/i8CCOBVS9maVkeortQrgMw==/109951172485868672.jpg","format":"专辑"}
    ],
    "12277473": [
      {"id":"381164186","title":"MODEL","cover":"https://p2.music.126.net/iCPBbnxFQeh0Kp1546ybJg==/109951173367360719.jpg","format":"专辑"},
      {"id":"164085583","title":"IDOL","cover":"https://p1.music.126.net/OEpGbug0mUmvZ98OyPihcA==/109951172952607296.jpg","format":"专辑"},
      {"id":"131544557","title":"百万甜心MONEY HONEY","cover":"https://p2.music.126.net/rX_HgJsy3bNUaiVGJ9TVtw==/109951172945923195.jpg","format":"专辑"}
    ],
    "12287129": [
      {"id":"351997056","title":"20世纪的少年","cover":"https://p2.music.126.net/70zBr-OG1zBYdCyIKy3mfg==/109951172346120778.jpg","format":"EP"}
    ],
    "12320060": [
      {"id":"289139414","title":"生活麻辣烫","cover":"https://p2.music.126.net/JZQhKhRMxBM1BG1G18rAUA==/109951172178072640.jpg","format":"专辑"},
      {"id":"178227623","title":"夜郎溪","cover":"https://p1.music.126.net/4BGdOYP4mAIXK04AK5nykw==/109951169026687874.jpg","format":"专辑"},
      {"id":"165080233","title":"RUN MY CITY","cover":"https://p1.music.126.net/WcO_AzhAx6xDAJz0E6ndTA==/109951168593168903.jpg","format":"专辑"}
    ],
    "12529780": [
      {"id":"159622248","title":"雪季日记（Snow Season）","cover":"https://p2.music.126.net/ftuopqWumWi3-LiCiBh9yQ==/109951168292939168.jpg","format":"EP"},
      {"id":"136293754","title":"L.M.A","cover":"https://p1.music.126.net/VdCAQcm9LkVypVyFbMjY6w==/109951166634844942.jpg","format":"专辑"}
    ],
    "12563131": [
      {"id":"263242113","title":"IMGOOD别担心我","cover":"https://p2.music.126.net/QpNRZsfMP5J4tOlziA8Pnw==/109951170504642760.jpg","format":"专辑"},
      {"id":"174245605","title":"DirtyGOOD 装乖","cover":"https://p2.music.126.net/-RYv_KQ7OjQYENoqhoXDmg==/109951168899147692.jpg","format":"专辑"}
    ],
    "12570417": [
      {"id":"383219639","title":"number one boy","cover":"https://p1.music.126.net/H7TAAbdRmAMk1AgULB6VMg==/109951173444575289.jpg","format":"专辑"},
      {"id":"276060612","title":"UMBROSKII 2","cover":"https://p1.music.126.net/UJx8PApZoCc6RrJMJyavww==/109951171350341675.jpg","format":"专辑"},
      {"id":"193296448","title":"UMBROSKII","cover":"https://p1.music.126.net/TDkQT39KaAbbAT09AoSWZQ==/109951169525357300.jpg","format":"专辑"}
    ],
    "12788674": [
      {"id":"274706820","title":"G-BLOCK Mixtape","cover":"https://p1.music.126.net/_aAi9WloeOAgOx96pmwIZQ==/109951171415121736.jpg","format":"Mixtape"},
      {"id":"172054725","title":"回到2000","cover":"https://p1.music.126.net/Z-p5v52fbVIG0BE7ZsYC8g==/109951168834821680.jpg","format":"专辑"},
      {"id":"96057849","title":"街区故事","cover":"https://p2.music.126.net/4pb6Z041lTpUjTs3tE8bOA==/109951167893582411.jpg","format":"专辑"}
    ],
    "13451886": [
      {"id":"393319937","title":"自在极意","cover":"https://p1.music.126.net/dXahlfWPPIITmiwoJerqYQ==/109951173776391099.jpg","format":"专辑"},
      {"id":"257212319","title":"纯白小背心","cover":"https://p1.music.126.net/tcCyYr4RRQ_sCHoWYanBaA==/109951170277055284.jpg","format":"专辑"},
      {"id":"156434952","title":"真假美猴王","cover":"https://p1.music.126.net/ZNxEPHvOXusFZeFQhQ8DPg==/109951168141966141.jpg","format":"EP"}
    ],
    "13899303": [
      {"id":"263103981","title":"旷野","cover":"https://p1.music.126.net/VHBtksGThfdIUwRhuLv4Ow==/109951170522384543.jpg","format":"专辑"},
      {"id":"192835932","title":"理想国","cover":"https://p2.music.126.net/R6VNYf6ZxEDu8qTOW-hg_A==/109951169691560915.jpg","format":"专辑"},
      {"id":"96777500","title":"辩护人","cover":"https://p1.music.126.net/wcv6LZGSC7igCo2E0ER7fg==/109951165391735573.jpg","format":"专辑"}
    ],
    "14117457": [
      {"id":"388196110","title":"赫鬼","cover":"https://p2.music.126.net/MEx8J6j2mntRha2stE7xlA==/109951173603999384.jpg","format":"专辑"},
      {"id":"139836920","title":"成嶋亮","cover":"https://p2.music.126.net/cabX9QFRIZa2dHJny-qTpg==/109951167009569183.jpg","format":"专辑"},
      {"id":"98339170","title":"冰冷热带鱼","cover":"https://p1.music.126.net/mygs0AbhztpEaNXU3HdCGg==/109951165474171544.jpg","format":"专辑"}
    ],
    "14925064": [
      {"id":"353050240","title":"永玄大典","cover":"https://p2.music.126.net/al4K6nbMR_6w0y7_wFCtsQ==/109951172380277828.jpg","format":"专辑"},
      {"id":"244462268","title":"SAINT JUICE","cover":"https://p2.music.126.net/WHCeMGqvpJ8aPYGPlQaKfA==/109951169873482088.jpg","format":"专辑"},
      {"id":"98912120","title":"7 7 7 WAR BABII","cover":"https://p2.music.126.net/D6iWL6fKCvBEtT3_jW0iGQ==/109951165512089391.jpg","format":"专辑"}
    ],
    "15194340": [
      {"id":"397430271","title":"蛋专","cover":"https://p2.music.126.net/zHRzldNmi5I8_2O9m1wBPw==/109951173951926165.jpg","format":"专辑"},
      {"id":"283080124","title":"钱专","cover":"https://p2.music.126.net/qHTjyT3VTl0tZyWnq9VaSA==/109951173955320630.jpg","format":"专辑"},
      {"id":"163040720","title":"哥们废了","cover":"https://p2.music.126.net/NNM3fa9IYdVEUX-eCjxZHw==/109951169927701708.jpg","format":"专辑"}
    ],
    "28869014": [
      {"id":"273223135","title":"Dior的人上岸","cover":"https://p2.music.126.net/5NxIXhfCmi-b8VRx3MUz-g==/109951171032960298.jpg","format":"专辑"},
      {"id":"159837788","title":"Go Flex上岸","cover":"https://p2.music.126.net/wvPlgGneuj7FZUVJsEMN9w==/109951168299540013.jpg","format":"专辑"}
    ],
    "30704161": [
      {"id":"378439209","title":"Rebuild","cover":"https://p1.music.126.net/7OPRoqlntrxzaTw2oXeloA==/109951173283851286.jpg","format":"专辑"},
      {"id":"175686385","title":"MOSLOS","cover":"https://p2.music.126.net/nmOWPii-tnHeLzMjhbqaxA==/109951168945233919.jpg","format":"专辑"},
      {"id":"88186995","title":"Born 2 Be","cover":"https://p1.music.126.net/6MR8pawUv3JLVLV_kJ8FEQ==/109951164917272861.jpg","format":"专辑"}
    ],
    "31309410": [
      {"id":"385730092","title":"Chapter.1: XMAS","cover":"https://p2.music.126.net/uqm9ZAoZsO5U2Wll3twzZw==/109951173521086388.jpg","format":"专辑"},
      {"id":"254185888","title":"红雨（RED RAIN）","cover":"https://p2.music.126.net/uHuGQHz1w1aZGjbiEc264Q==/109951170165581032.jpg","format":"专辑"}
    ],
    "31561897": [
      {"id":"245144455","title":"敏感小孩","cover":"https://p2.music.126.net/jzNlgKd59nIT-ZpomMvtqw==/109951174102598717.jpg","format":"专辑"},
      {"id":"145165772","title":"平行世界","cover":"https://p2.music.126.net/YXIXOPtZ36UhcX9imhO06A==/109951168699156338.jpg","format":"专辑"}
    ],
    "32501012": [
      {"id":"287283081","title":"潮","cover":"https://p2.music.126.net/6yVg7Gi5v0QIAQB17yJ99A==/109951172149127305.jpg","format":"专辑"},
      {"id":"273804115","title":"diǎo","cover":"https://p1.music.126.net/-aBVIrkAHxLys7_HmgsifQ==/109951171020763056.jpg","format":"专辑"},
      {"id":"79705552","title":"Memory Loading","cover":"https://p2.music.126.net/CBbgiBy3opc5M4lQ_pUDhQ==/109951164141085092.jpg","format":"专辑"}
    ],
    "32719707": [
      {"id":"378165478","title":"拯旧2012","cover":"https://p1.music.126.net/NiSyI1BS_S5LQeN5bmACOQ==/109951173276207554.jpg","format":"专辑"},
      {"id":"136199709","title":"蓝血","cover":"https://p1.music.126.net/qGMi3l1lFi3ZhuQAvEDGXA==/109951166627503364.jpg","format":"EP"}
    ],
    "33863232": [
      {"id":"284460666","title":"EXIT","cover":"https://p1.music.126.net/cN0SvEUBFCh90RIrDHqVNA==/109951171993910496.jpg","format":"专辑"},
      {"id":"195957843","title":"我的雷雨季电台","cover":"https://p2.music.126.net/1N-DtWOD-xqS6G3jeiDTug==/109951169591804419.jpg","format":"专辑"},
      {"id":"140087138","title":"When the world is came，take it！","cover":"https://p2.music.126.net/G-inyKjA-jO5MuOuV3g7Pg==/109951167027986653.jpg","format":"专辑"}
    ],
    "33937972": [
      {"id":"372704382","title":"RACER","cover":"https://p2.music.126.net/Vw_iEU-Ps90-xpxNgkuqWA==/109951174189300090.jpg","format":"专辑"},
      {"id":"266596790","title":"万古","cover":"https://p1.music.126.net/bnlU1kCImWOvUkRH-ijDHA==/109951170644659962.jpg","format":"专辑"},
      {"id":"154635117","title":"Nafia Fever","cover":"https://p2.music.126.net/ANbr6CwQQhVscHWj3dH22A==/109951168047398001.jpg","format":"专辑"}
    ],
    "34146331": [
      {"id":"381180805","title":"逃跑计划","cover":"https://p1.music.126.net/0maPGmKe0yBEv55hiG9mng==/109951173454325122.jpg","format":"专辑"},
      {"id":"279063054","title":"BOYS2","cover":"https://p2.music.126.net/-shN0w3WMPzKARFlwgLcxQ==/109951171495788210.jpg","format":"专辑"}
    ],
    "34364251": [
      {"id":"400217283","title":"Zhuang Zhuang Mixtape","cover":"https://p1.music.126.net/otvHRQAwYz2iJ2TPknuOPw==/109951173990128668.jpg","format":"Mixtape"},
      {"id":"252286614","title":"王中王","cover":"https://p1.music.126.net/QnQmVpkz6RHd6mdB0PsisA==/109951170682532652.jpg","format":"专辑"}
    ],
    "35009085": [
      {"id":"351117737","title":"都市醉漢","cover":"https://p2.music.126.net/5an8DUwXGbDb0lWUdTl3ug==/109951172314748758.jpg","format":"专辑"},
      {"id":"198572467","title":"牛窝坑之子","cover":"https://p2.music.126.net/YBZo2_Q0lfEBT3VpAFUifA==/109951169660676418.jpg","format":"专辑"},
      {"id":"142302499","title":"VEN10","cover":"https://p2.music.126.net/E4Eer0JkYZtzHFNmeZfOGA==/109951168440171994.jpg","format":"专辑"}
    ],
    "35169519": [
      {"id":"386090593","title":"in 55!w !","cover":"https://p1.music.126.net/QSFPwZDRU3bie-_1n51M8A==/109951173530345510.jpg","format":"专辑"},
      {"id":"253498129","title":"IT'S T.A.C.O","cover":"https://p2.music.126.net/nWrEFqAj6w-HSdv1R9brLw==/109951170147372253.jpg","format":"EP"}
    ],
    "35884195": [
      {"id":"356803156","title":"城乡","cover":"https://p2.music.126.net/IxJOeieiGAcgbXotKdEk7w==/109951172521778392.jpg","format":"专辑"},
      {"id":"247120411","title":"莆田才子","cover":"https://p1.music.126.net/quYbskDqRirX3-wqgRLk7A==/109951169934912352.jpg","format":"专辑"}
    ],
    "35954968": [
      {"id":"385529963","title":"AKUMA","cover":"https://p2.music.126.net/gtNTNHd0ILKkBoiCUqwYMg==/109951173515551847.jpg","format":"EP"},
      {"id":"247707508","title":"悲伤骑士异闻录","cover":"https://p2.music.126.net/aoe18IP0LSIM_Q6vUOzjSg==/109951169974200450.jpg","format":"专辑"}
    ],
    "37056973": [
      {"id":"390797168","title":"莲華","cover":"https://p2.music.126.net/yGULj_TeBtqGgfwe4UukEg==/109951173696189647.jpg","format":"专辑"},
      {"id":"260742433","title":"Woo Tape","cover":"https://p2.music.126.net/2nMJW6LIC-DM-yd1q87qAg==/109951170421088708.jpg","format":"专辑"}
    ],
    "37125681": [
      {"id":"389463819","title":"Ain’t Enough","cover":"https://p1.music.126.net/hgkEcEydIA6SjM6fiTDM6g==/109951173652197760.jpg","format":"专辑"},
      {"id":"366806175","title":"Jason","cover":"https://p2.music.126.net/qG0b-Rv_Q23JfXtMjDrI6Q==/109951172904197168.jpg","format":"EP"},
      {"id":"275696516","title":"Broken Vows 3","cover":"https://p2.music.126.net/W4Db9MhOyDE5YZv8ciJMWQ==/109951171331163097.jpg","format":"专辑"}
    ],
    "46356020": [
      {"id":"400112541","title":"商业与玩法","cover":"https://p1.music.126.net/rt6_mInoqx0iqImk9qng2w==/109951173986994634.jpg","format":"专辑"},
      {"id":"267784482","title":"幽默与笑话","cover":"https://p2.music.126.net/A_Wr1zYxHAU9bFt5wL6u6Q==/109951173753553418.jpg","format":"专辑"},
      {"id":"251011194","title":"蓝图4","cover":"https://p2.music.126.net/8HY5HY_bVsiWWMFxZqLG7Q==/109951170050817922.jpg","format":"专辑"}
    ],
    "48277407": [
      {"id":"397597058","title":"罪冕","cover":"https://p1.music.126.net/vdo6DnHm12P0fm6CAbcNsQ==/109951173920123200.jpg","format":"EP"},
      {"id":"274537222","title":"Lost City失落城","cover":"https://p1.music.126.net/bWPm7fvLuwiNPSDqi-uxqQ==/109951171280488543.jpg","format":"专辑"},
      {"id":"156129365","title":"花与蛇","cover":"https://p2.music.126.net/ZT24w0ptAI2sqpj3wxkQGQ==/109951168126592947.jpg","format":"专辑"}
    ],
    "49141872": [
      {"id":"272388013","title":"不停的","cover":"https://p2.music.126.net/cgXXV8PHNJKEWPUvwcs7Pg==/109951170999966930.jpg","format":"专辑"},
      {"id":"239889231","title":"How I Shine","cover":"https://p2.music.126.net/XQgLpatV-LFMdx55WuV8bA==/109951169706853419.jpg","format":"专辑"}
    ],
    "49320722": [
      {"id":"285568440","title":"嵌入生长","cover":"https://p2.music.126.net/pbhqhLU2ErvDZciRXW4oEQ==/109951172032139695.jpg","format":"专辑"},
      {"id":"245657305","title":"羲和","cover":"https://p2.music.126.net/Oj0cQs1T0Nm9Pgqx0t8Geg==/109951169892332661.jpg","format":"EP"}
    ],
    "55275689": [
      {"id":"352920414","title":"B♥D","cover":"https://p1.music.126.net/ECcIgLf9jtnd9FAk7NKb0w==/109951172377998494.jpg","format":"专辑"}
    ],
    "94753015": [
      {"id":"356577250","title":"21's Tears","cover":"https://p2.music.126.net/hhTkVzq463yyxN1Au_xHVw==/109951172516247404.jpg","format":"专辑"},
      {"id":"258874224","title":"S.I.T.L","cover":"https://p2.music.126.net/uEVv5f4HgUQH2UYH__lEOQ==/109951170354208723.jpg","format":"专辑"}
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = albums;
  else root.RapArtistAlbums = albums;
})(typeof window !== 'undefined' ? window : globalThis);
