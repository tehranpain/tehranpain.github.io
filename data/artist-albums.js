(function (root) {
  // Curated NetEase releases and verified catalog additions; up to three albums per artist.
  const albums = {
    "2103": [
      {"id":"366968700","title":"血斑马","cover":"https://p2.music.126.net/SQ7rZQ7FpQ4N3yy_DwYtWQ==/109951172909148388.jpg","format":"专辑"}
    ],
    "2514": [
      {"id":"2628001","title":"你所不知道的杜振熙之内部整修","cover":"https://p1.music.126.net/BwvvtmT3pC5GbkE3T_l87w==/109951168001990864.jpg","format":"专辑"},
      {"id":"7542","title":"月光","cover":"https://p1.music.126.net/cB5Cs8PPPkYbj4vwaaWcWw==/109951168001993115.jpg","format":"专辑"},
      {"id":"7547","title":"收敛水","cover":"https://p1.music.126.net/YuS3GrLcE7PIi_3s-62ZQA==/109951168001997012.jpg","format":"专辑"}
    ],
    "2947": [
      {"id":"160054875","title":"GDNA","cover":"https://p1.music.126.net/h0vFeJTlzW-zo6AsLmo5Vg==/109951168309419829.jpg","format":"专辑"}
    ],
    "4037": [
      {"id":"174147849","title":"blue","cover":"https://p2.music.126.net/rCq8EJjk4nz5ThR--vcjfw==/109951168896671486.jpg","format":"专辑"}
    ],
    "4479": [
      {"id":"181039124","title":"脏艺术家","cover":"https://p2.music.126.net/TBKCGkT2deMpO8WtE1BM6Q==/109951169159480228.jpg","format":"专辑"},
      {"id":"147150917","title":"姚中二","cover":"https://p2.music.126.net/z-8Yi3OrLXpDFWP4YNQhNQ==/109951167596578985.jpg","format":"专辑"}
    ],
    "187462": [
      {"id":"131283380","title":"心愈频率","cover":"https://p1.music.126.net/El2y4sgi3ahTGvv8Bjg7Mg==/109951166246516056.jpg","format":"专辑"}
    ],
    "784257": [
      {"id":"181642166","title":"24時·Pm","cover":"https://p1.music.126.net/OrzXQYeQQujgtvup9GNH-g==/109951169200632159.jpg","format":"专辑"},
      {"id":"134652275","title":"24時·Am","cover":"https://p1.music.126.net/JMdgOVaMn2myYZy1TIKPNA==/109951169213952419.jpg","format":"专辑"}
    ],
    "847107": [
      {"id":"407630434","title":"蔡镇鸿","cover":"https://p2.music.126.net/mp2dipDN2BIQ9_MQ-HUfXg==/109951174220484984.jpg","format":"专辑"},
      {"id":"280931120","title":"Couple Hunnid All Star Mixtape Vol.1","cover":"https://p2.music.126.net/aZ2PZfKhELIHTVynAvDFVA==/109951171818265854.jpg","format":"Mixtape"},
      {"id":"251138654","title":"闪耀 Stellar Moments","cover":"https://p2.music.126.net/JayqdUfa60m8m1GyhXY18g==/109951170087915291.jpg","format":"专辑"}
    ],
    "865007": [
      {"id":"406521987","title":"年轻人的一生","cover":"https://p2.music.126.net/FEc7v3I3YXHMDu31NJwuLg==/109951174185039781.jpg","format":"专辑"},
      {"id":"149257265","title":"退潮","cover":"https://p2.music.126.net/cK3Rm-WaJwNw9pOWg7DX-A==/109951167750223899.jpg","format":"专辑"},
      {"id":"73471599","title":"生于未来","cover":"https://p1.music.126.net/wTO7xsKa9YbeZGtgMzDZGw==/109951163807651102.jpg","format":"专辑"}
    ],
    "1038099": [
      {"id":"146434266","title":"V解之谜 (Full Version)","cover":"https://p2.music.126.net/b2XUl2tGQKH2TNZ0g7yW9A==/109951167588250467.jpg","format":"专辑"}
    ],
    "1050364": [
      {"id":"259187468","title":"幸福城市里总有人不幸福","cover":"https://p2.music.126.net/xby3wVonBkxk4XXqRqxZtw==/109951170362729020.jpg","format":"专辑"}
    ],
    "1083118": [
      {"id":"275330251","title":"MAGICMAN 2","cover":"https://p2.music.126.net/HBdnyICeh_Qro6n5cxzawg==/109951171315896344.jpg","format":"专辑"},
      {"id":"151293087","title":"MAGIC MAN","cover":"https://p2.music.126.net/sKSiz0v9C4WlNyi3OLyLEg==/109951167859205961.jpg","format":"专辑"},
      {"id":"141208076","title":"LOST & FOUND","cover":"https://p1.music.126.net/YUMGgVuJMW-5mpCxPNi9RQ==/109951167108330074.jpg","format":"专辑"}
    ],
    "1086078": [
      {"id":"124579030","title":"朝九晚五","cover":"https://p1.music.126.net/p3BIcP44Q-dwrpK8huQgpg==/109951165809301019.jpg","format":"专辑"}
    ],
    "1087200": [
      {"id":"150294965","title":"Alpha A","cover":"https://p2.music.126.net/OeiWItd-2mR7WA1aIpr8Kw==/109951167814907717.jpg","format":"专辑"}
    ],
    "1124093": [
      {"id":"189968868","title":"Sio 24","cover":"https://p1.music.126.net/-0KZ-lHqATz-R_LgMmsdxQ==/109951169484139288.jpg","format":"专辑"}
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
    "1211046": [
      {"id":"196241119","title":"底层逻辑","cover":"https://p2.music.126.net/d7iJmjUiLNG2YgyeFKg8og==/109951169597725394.jpg","format":"专辑"},
      {"id":"146024000","title":"杜康","cover":"https://p1.music.126.net/hHP5K6ZpjT4xqUE696QVzQ==/109951167516129418.jpg","format":"专辑"}
    ],
    "12001060": [
      {"id":"253196324","title":"七号种子","cover":"https://p2.music.126.net/S4D8zjl6Cw_sz69uy5SDCw==/109951170216008167.jpg","format":"专辑"},
      {"id":"151292121","title":"ONE LIFE ONLY","cover":"https://p2.music.126.net/8X-lNSZPweAS0O9Y4Y3oZg==/109951167870567595.jpg","format":"专辑"},
      {"id":"125147281","title":"云泥之别 Truth Of The Clay","cover":"https://p1.music.126.net/VhK6m3xD4s00hRIaUVbSoA==/109951172945925165.jpg","format":"专辑"}
    ],
    "12002184": [
      {"id":"136199503","title":"P.M.","cover":"https://p1.music.126.net/eki73GZH2QEmim0uuChGTw==/109951166627440837.jpg","format":"专辑"},
      {"id":"127871856","title":"phone project.","cover":"https://p2.music.126.net/w4J7DEwHBXiHcxAY-f4QmQ==/109951166007166549.jpg","format":"专辑"}
    ],
    "12037117": [
      {"id":"150801324","title":"15","cover":"https://p2.music.126.net/xILUjLNlNRWJNc3F7Ac8iw==/109951167839305892.jpg","format":"专辑"}
    ],
    "12064019": [
      {"id":"404975764","title":"斩鸭线","cover":"https://p1.music.126.net/Eafh2qRUgw2IXXOVD4B9LQ==/109951174139932904.jpg","format":"专辑"},
      {"id":"195875404","title":"邻家小丈夫","cover":"https://p1.music.126.net/Dg4tY7L441GZfYqqvWvPUw==/109951169590445432.jpg","format":"专辑"},
      {"id":"156434952","title":"真假美猴王","cover":"https://p1.music.126.net/ZNxEPHvOXusFZeFQhQ8DPg==/109951168141966141.jpg","format":"EP"}
    ],
    "12079219": [
      {"id":"386844698","title":"也","cover":"https://p1.music.126.net/suJ7HmI2lMJG7m75SDyfJw==/109951173553754501.jpg","format":"专辑"},
      {"id":"262599547","title":"出人头地 2025 Dreams Come True Mixtape","cover":"https://p2.music.126.net/ZuQyG_gReG1FYkl_9kcb6w==/109951170476385118.jpg","format":"Mixtape"},
      {"id":"245049496","title":"GUOXIA","cover":"https://p2.music.126.net/pRNSwlB_DpMC1wy6CTEo9A==/109951169872282587.jpg","format":"专辑"}
    ],
    "12110173": [
      {"id":"408811475","title":"SAYLESS MIXTAPE VOL.1","cover":"https://p1.music.126.net/RcX7rPxi9gtMbrAOR4hZlw==/109951174255162100.jpg","format":"Mixtape"},
      {"id":"272168612","title":"KILL THOME II","cover":"https://p1.music.126.net/Kox5oyoKrOm77_Rx4TW2yg==/109951170989107954.jpg","format":"专辑"},
      {"id":"157935600","title":"CASANOVA","cover":"https://p1.music.126.net/IuyhHbgZVnFHLjknh3JriQ==/109951168223326749.jpg","format":"专辑"}
    ],
    "12119618": [
      {"id":"149251330","title":"W.O.T.W.T MixTape Vol.2","cover":"https://p2.music.126.net/ijW4vtZHbGUV4mNgJQBaqw==/109951171931634761.jpg","format":"Mixtape"}
    ],
    "12121264": [
      {"id":"156221935","title":"水之幻想","cover":"https://p2.music.126.net/kVb7tiamBwEEPzR0SlJb3g==/109951168129270915.jpg","format":"专辑"},
      {"id":"132872359","title":"金陵九歌","cover":"https://p2.music.126.net/yBmzvBxcyD_gk8gV1-Cz8g==/109951170062450440.jpg","format":"专辑"}
    ],
    "12127362": [
      {"id":"190896190","title":"STRIPELIFE","cover":"https://p2.music.126.net/m2SepxStqvbSJ0d09dM6Fw==/109951170315759635.jpg","format":"专辑"},
      {"id":"140566771","title":"亚特兰蒂斯","cover":"https://p1.music.126.net/rSR0ULNIdMOGb3hxW_vahA==/109951167061630513.jpg","format":"专辑"}
    ],
    "12127564": [
      {"id":"151899275","title":"福气庙","cover":"https://p1.music.126.net/Ys5vNDeYfrZpRXInlh3t5g==/109951167893726311.jpg","format":"专辑"}
    ],
    "12158158": [
      {"id":"166301501","title":"West 4K","cover":"https://p2.music.126.net/39QrxmpCi_GhFT1PfmbHKg==/109951168634744380.jpg","format":"专辑"}
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
    "12200580": [
      {"id":"163999779","title":"全职Rapper","cover":"https://p2.music.126.net/1flkEdh8cfG04RILTqGqJw==/109951168557142816.jpg","format":"专辑"},
      {"id":"150639621","title":"异乡人","cover":"https://p2.music.126.net/9yLmrRgyzqyUsmHUDcx6GA==/109951167830753022.jpg","format":"专辑"}
    ],
    "12205952": [
      {"id":"400112541","title":"商业与玩法","cover":"https://p1.music.126.net/rt6_mInoqx0iqImk9qng2w==/109951173986994634.jpg","format":"专辑"},
      {"id":"267784482","title":"幽默与笑话","cover":"https://p2.music.126.net/A_Wr1zYxHAU9bFt5wL6u6Q==/109951173753553418.jpg","format":"专辑"}
    ],
    "12206205": [
      {"id":"283713085","title":"人人都爱嘻哈乐","cover":"https://p2.music.126.net/XNn1BrGbzWw_CBqZ2F-F4A==/109951171967880038.jpg","format":"专辑"},
      {"id":"165321801","title":"Young Fresh Chin II","cover":"https://p2.music.126.net/4kLHoyHAwarws5l7KskELg==/109951168602883583.jpg","format":"专辑"}
    ],
    "12236125": [
      {"id":"240032220","title":"Love Me Later","cover":"https://p1.music.126.net/IzzMwCpA4MAdKqmoOI3FYQ==/109951169712367983.jpg","format":"专辑"},
      {"id":"132874562","title":"幸存者的负罪感","cover":"https://p2.music.126.net/yWV3b1I7vwMv53NL-QwBqw==/109951170141514361.jpg","format":"专辑"},
      {"id":"82266485","title":"演.说.家","cover":"https://p2.music.126.net/oiKUza9l47MBECzyrOYbBg==/109951169775167207.jpg","format":"专辑"}
    ],
    "12236269": [
      {"id":"263620530","title":"鸳鸯锅","cover":"https://p1.music.126.net/Ca6IPFvcPZ7Nkd3fGDoa9A==/109951170504748861.jpg","format":"专辑"}
    ],
    "12256230": [
      {"id":"393372073","title":"无情的帅哥","cover":"https://p1.music.126.net/o5Fiq5auFeQAsx8Jygo2nw==/109951173778000491.jpg","format":"EP"},
      {"id":"370666291","title":"活在未来","cover":"https://p2.music.126.net/3zJisl2v3zfxBx774M5kpQ==/109951173038827730.jpg","format":"专辑"},
      {"id":"355999482","title":"MY STAR, MY START! (我的星星，我的开始)","cover":"https://p2.music.126.net/i8CCOBVS9maVkeortQrgMw==/109951172485868672.jpg","format":"专辑"}
    ],
    "12264643": [
      {"id":"168058572","title":"烂人生","cover":"https://p1.music.126.net/LGR609wnncNA-Mz6J4mjlw==/109951168691064201.jpg","format":"专辑"}
    ],
    "12276375": [
      {"id":"240158613","title":"NARCHIVE","cover":"https://p1.music.126.net/2C0V-1mfF9zuhHBVHPB4Ug==/109951169718431547.jpg","format":"专辑"},
      {"id":"167955530","title":"The Plan","cover":"https://p2.music.126.net/J0hyEtzcyRyVFw_a6D9tKA==/109951168730189090.jpg","format":"专辑"},
      {"id":"131506615","title":"星月物语Zodiac","cover":"https://p2.music.126.net/Ynh2hcZzDhpdDLYwBvs_kw==/109951167077587747.jpg","format":"专辑"}
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
    "12371041": [
      {"id":"252186773","title":"Six+Six Mixtape","cover":"https://p1.music.126.net/1-FG2YMk_HDi8GUuw5vsMw==/109951170091483092.jpg","format":"Mixtape"}
    ],
    "12453329": [
      {"id":"362202999","title":"全家福","cover":"https://p2.music.126.net/HSngyd8I35RMNs3_FaS2-Q==/109951172746863944.jpg","format":"专辑"},
      {"id":"199357827","title":"林童","cover":"https://p2.music.126.net/L7S3SK84VoiXyQAkJPdR5A==/109951169696456799.jpg","format":"专辑"},
      {"id":"137246774","title":"SOUL TONE","cover":"https://p1.music.126.net/rF0YCihqw7Mv4uMOlK-1Rw==/109951166709497600.jpg","format":"专辑"}
    ],
    "12484112": [
      {"id":"182394152","title":"致弥赛亚 ToMessiah","cover":"https://p1.music.126.net/4Vu44vmqqtvRZu_GiQWwQA==/109951169233206101.jpg","format":"专辑"}
    ],
    "12493701": [
      {"id":"369806485","title":"77%","cover":"https://p1.music.126.net/pTvvZU0m6YeUyMyiR1nkYA==/109951173013221241.jpg","format":"专辑"},
      {"id":"271178850","title":"一脉相承Hood & Family","cover":"https://p1.music.126.net/vy21tVbQy1v7daqsVtVjUw==/109951170955172263.jpg","format":"专辑"},
      {"id":"240274929","title":"023%","cover":"https://p2.music.126.net/Xf7g6Q9FUJ0IowHLduGWvg==/109951169721286296.jpg","format":"专辑"}
    ],
    "12529780": [
      {"id":"159622248","title":"雪季日记（Snow Season）","cover":"https://p2.music.126.net/ftuopqWumWi3-LiCiBh9yQ==/109951168292939168.jpg","format":"EP"},
      {"id":"136293754","title":"L.M.A","cover":"https://p1.music.126.net/VdCAQcm9LkVypVyFbMjY6w==/109951166634844942.jpg","format":"专辑"}
    ],
    "12563131": [
      {"id":"263242113","title":"IMGOOD别担心我","cover":"https://p2.music.126.net/QpNRZsfMP5J4tOlziA8Pnw==/109951170504642760.jpg","format":"专辑"},
      {"id":"174245605","title":"DirtyGOOD 装乖","cover":"https://p2.music.126.net/-RYv_KQ7OjQYENoqhoXDmg==/109951168899147692.jpg","format":"专辑"}
    ],
    "12564922": [
      {"id":"254832936","title":"破茧成蝶","cover":"https://p1.music.126.net/o6FigrA92GPFYEz-FFZNvg==/109951170938821427.jpg","format":"专辑"}
    ],
    "12565467": [
      {"id":"263245626","title":"灰太阳","cover":"https://p1.music.126.net/lko5nHWAU_rY8VpuoiFLSA==/109951170495912565.jpg","format":"专辑"},
      {"id":"163927040","title":"巴蜀文艺复兴：第二章","cover":"https://p2.music.126.net/t30p5s1LHDFfqKpsIeyXYg==/109951172815569724.jpg","format":"专辑"},
      {"id":"125696307","title":"巴蜀文艺复兴：第一章","cover":"https://p1.music.126.net/9OmHNQPmyzSN4GQ_8_3m1A==/109951169834376967.jpg","format":"专辑"}
    ],
    "12570417": [
      {"id":"383219639","title":"number one boy","cover":"https://p1.music.126.net/H7TAAbdRmAMk1AgULB6VMg==/109951173444575289.jpg","format":"专辑"},
      {"id":"276060612","title":"UMBROSKII 2","cover":"https://p1.music.126.net/UJx8PApZoCc6RrJMJyavww==/109951171350341675.jpg","format":"专辑"},
      {"id":"193296448","title":"UMBROSKII","cover":"https://p1.music.126.net/TDkQT39KaAbbAT09AoSWZQ==/109951169525357300.jpg","format":"专辑"}
    ],
    "12605500": [
      {"id":"268868478","title":"叁壹","cover":"https://p1.music.126.net/rh5oAjHCpAWgpNRLhJWhew==/109951170717990055.jpg","format":"专辑"}
    ],
    "12788674": [
      {"id":"274706820","title":"G-BLOCK Mixtape","cover":"https://p1.music.126.net/_aAi9WloeOAgOx96pmwIZQ==/109951171415121736.jpg","format":"Mixtape"},
      {"id":"172054725","title":"回到2000","cover":"https://p1.music.126.net/Z-p5v52fbVIG0BE7ZsYC8g==/109951168834821680.jpg","format":"专辑"},
      {"id":"96057849","title":"街区故事","cover":"https://p2.music.126.net/4pb6Z041lTpUjTs3tE8bOA==/109951167893582411.jpg","format":"专辑"}
    ],
    "12853605": [
      {"id":"388197470","title":"让我看到你","cover":"https://p2.music.126.net/gBH1kXgZgHempriqLX84zA==/109951173604035857.jpg","format":"专辑"},
      {"id":"269444749","title":"悲伤角斗士","cover":"https://p1.music.126.net/LetoH4rhKWUYhUsrmdbWdg==/109951170735449476.jpg","format":"专辑"}
    ],
    "12923031": [
      {"id":"377313633","title":"迷失在情绪里","cover":"https://p2.music.126.net/GYrDflEI3TggE8jmgvGiig==/109951173248951522.jpg","format":"专辑"},
      {"id":"259544968","title":"十张","cover":"https://p2.music.126.net/YAKLnmhKe-f7FgYG_g75fw==/109951170374512831.jpg","format":"专辑"},
      {"id":"164470139","title":"GOLDEN·BLOOD（下）","cover":"https://p2.music.126.net/404hASZQG06sYpc5Km_Q7Q==/109951168572201478.jpg","format":"专辑"}
    ],
    "12965215": [
      {"id":"245651893","title":"我陷进去了","cover":"https://p1.music.126.net/W6NOimnziMzImriDb9u2Pg==/109951169892153264.jpg","format":"专辑"},
      {"id":"149613462","title":"年度人物","cover":"https://p2.music.126.net/UtD3jVLjqjkWNg0krkAKxg==/109951167773379640.jpg","format":"专辑"},
      {"id":"123372073","title":"ALL I DO IS DRILLING","cover":"https://p2.music.126.net/O4HLrcylgOtNYUPNVNXGoA==/109951165748385000.jpg","format":"专辑"}
    ],
    "13027753": [
      {"id":"364805162","title":"入门级","cover":"https://p1.music.126.net/XrjsznNhtf73qvksrx-6dg==/109951172841467336.jpg","format":"专辑"}
    ],
    "13145283": [
      {"id":"383211818","title":"长青 (Deluxe)","cover":"https://p1.music.126.net/2PdA8Q8YKtgDK1u5HPL8Sw==/109951173650298667.jpg","format":"专辑"},
      {"id":"262297202","title":"Ansuz","cover":"https://p1.music.126.net/UF9YhjbBbXuLkQBTKqx7ig==/109951170468407705.jpg","format":"专辑"},
      {"id":"145231495","title":"KINGDOM","cover":"https://p2.music.126.net/GgvcPgK4DP7XdvbEPTbkIQ==/109951167441417455.jpg","format":"专辑"}
    ],
    "13296078": [
      {"id":"358943912","title":"Summer","cover":"https://p2.music.126.net/d2KSAiKSeTqN7p4FrXktXw==/109951172617399990.jpg","format":"专辑"},
      {"id":"193857269","title":"City Life Made Me","cover":"https://p1.music.126.net/uTEDfycec2BygDbAMVd4Tw==/109951169537515761.jpg","format":"专辑"}
    ],
    "13451886": [
      {"id":"393319937","title":"自在极意","cover":"https://p1.music.126.net/dXahlfWPPIITmiwoJerqYQ==/109951173776391099.jpg","format":"专辑"},
      {"id":"257212319","title":"纯白小背心","cover":"https://p1.music.126.net/tcCyYr4RRQ_sCHoWYanBaA==/109951170277055284.jpg","format":"专辑"},
      {"id":"156434952","title":"真假美猴王","cover":"https://p1.music.126.net/ZNxEPHvOXusFZeFQhQ8DPg==/109951168141966141.jpg","format":"EP"}
    ],
    "13520444": [
      {"id":"273417535","title":"植物神经紊乱","cover":"https://p1.music.126.net/bCaGy-7Qc2vX-J-AxyefIg==/109951171019793264.jpg","format":"专辑"}
    ],
    "13699781": [
      {"id":"350448003","title":"好运之声","cover":"https://p2.music.126.net/kFPpDgyeV8piewS20vylaw==/109951172375288883.jpg","format":"专辑"},
      {"id":"241974845","title":"热土","cover":"https://p1.music.126.net/4-R0CsYoQdmU42D3jKJizQ==/109951169775031945.jpg","format":"专辑"},
      {"id":"152281827","title":"糟糕的日子里","cover":"https://p2.music.126.net/5ErjBLJU9mWMwHNBQy1m-Q==/109951167911889678.jpg","format":"专辑"}
    ],
    "13899303": [
      {"id":"263103981","title":"旷野","cover":"https://p1.music.126.net/VHBtksGThfdIUwRhuLv4Ow==/109951170522384543.jpg","format":"专辑"},
      {"id":"192835932","title":"理想国","cover":"https://p2.music.126.net/R6VNYf6ZxEDu8qTOW-hg_A==/109951169691560915.jpg","format":"专辑"},
      {"id":"96777500","title":"辩护人","cover":"https://p1.music.126.net/wcv6LZGSC7igCo2E0ER7fg==/109951165391735573.jpg","format":"专辑"}
    ],
    "13911452": [
      {"id":"182915838","title":"THE BREAKING NEWS","cover":"https://p2.music.126.net/PF5S3My-lOyzwCqGGmQIMQ==/109951169253952671.jpg","format":"专辑"}
    ],
    "14018235": [
      {"id":"394446483","title":"冷都女","cover":"https://p1.music.126.net/VbeVVLrJTLvdxVz_QOfa9w==/109951173820542696.jpg","format":"专辑"}
    ],
    "14116746": [
      {"id":"352017935","title":"季节2025","cover":"https://p1.music.126.net/g1dNtU_xWd5nvXBjNpLgKQ==/109951172346576628.jpg","format":"专辑"}
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
    "15200313": [
      {"id":"361147873","title":"县城门面","cover":"https://p2.music.126.net/wJFkHMHNLDzfVvRH4rNmeA==/109951172702334499.jpg","format":"专辑"}
    ],
    "27868624": [
      {"id":"248907748","title":"Mr. Enjoy Da Melody","cover":"https://p2.music.126.net/wWLBZN-s3xsNnNXJ0znn5g==/109951170171748779.jpg","format":"EP"},
      {"id":"251292609","title":"叉燒 GANG","cover":"https://p2.music.126.net/wo0d2GCRMogN6ki98KPSTA==/109951170058246616.jpg","format":"专辑"},
      {"id":"193913084","title":"Msounds (Deluxe)","cover":"https://p1.music.126.net/OXcEWgeqeYI0mBCXYjrThg==/109951169567880287.jpg","format":"专辑"}
    ],
    "28072811": [
      {"id":"256725251","title":"肥瘦音乐：全面体验","cover":"https://p2.music.126.net/xnWKhD-hHW2kTNKBCrolBw==/109951170248969535.jpg","format":"专辑"}
    ],
    "28869014": [
      {"id":"273223135","title":"Dior的人上岸","cover":"https://p2.music.126.net/5NxIXhfCmi-b8VRx3MUz-g==/109951171032960298.jpg","format":"专辑"},
      {"id":"159837788","title":"Go Flex上岸","cover":"https://p2.music.126.net/wvPlgGneuj7FZUVJsEMN9w==/109951168299540013.jpg","format":"专辑"}
    ],
    "29265708": [
      {"id":"281438415","title":"MEN IN BLACK","cover":"https://p2.music.126.net/fYVhrYtDixC2ODPLpNVJZg==/109951171890991405.jpg","format":"专辑"}
    ],
    "29303235": [
      {"id":"149869202","title":"风靡一时","cover":"https://p1.music.126.net/7K2KSqbhE-x86d92ZjcS6Q==/109951167789334209.jpg","format":"专辑"},
      {"id":"129639659","title":"Chengdu Hot","cover":"https://p1.music.126.net/HHbd_barqqHiJs-WifhwOg==/109951170289923169.jpg","format":"专辑"}
    ],
    "29939584": [
      {"id":"174330730","title":"街上的宝剑","cover":"https://p1.music.126.net/PH9W5xv8zyxlWi_OXKiB-Q==/109951168901404991.jpg","format":"专辑"}
    ],
    "30704161": [
      {"id":"378439209","title":"Rebuild","cover":"https://p1.music.126.net/7OPRoqlntrxzaTw2oXeloA==/109951173283851286.jpg","format":"专辑"},
      {"id":"175686385","title":"MOSLOS","cover":"https://p2.music.126.net/nmOWPii-tnHeLzMjhbqaxA==/109951168945233919.jpg","format":"专辑"},
      {"id":"88186995","title":"Born 2 Be","cover":"https://p1.music.126.net/6MR8pawUv3JLVLV_kJ8FEQ==/109951164917272861.jpg","format":"专辑"}
    ],
    "31055231": [
      {"id":"277655709","title":"八方来财之江船入海","cover":"https://p2.music.126.net/soYq6eFpgpl3T7Er_6VvGA==/109951171419955757.jpg","format":"专辑"},
      {"id":"245434399","title":"八方来财","cover":"https://p1.music.126.net/58N079jvKRzZtQDCzAkKxg==/109951169885496931.jpg","format":"专辑"},
      {"id":"174240977","title":"顺风顺水顺财神","cover":"https://p2.music.126.net/wpa-PDDB4hrJZnxW45I-YA==/109951168898992523.jpg","format":"专辑"}
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
    "32893629": [
      {"id":"385731179","title":"也不高尚","cover":"https://p2.music.126.net/6UMBKAJ312V6ck6UWS5_aA==/109951173520650197.jpg","format":"专辑"},
      {"id":"276554774","title":"羞于启齿","cover":"https://p1.music.126.net/POtte5sgkL1WN6S9yap0kQ==/109951171367489486.jpg","format":"专辑"}
    ],
    "32992079": [
      {"id":"350275622","title":"JUNGLE +","cover":"https://p1.music.126.net/xoiQxOI6p4hhaYWylA1JXg==/109951172277948535.jpg","format":"专辑"},
      {"id":"184937854","title":"¡2busy4u! Jungle Rage *LP","cover":"https://p1.music.126.net/tlGHeTMnf6lbeCrZKnPPmQ==/109951169309596952.jpg","format":"专辑"}
    ],
    "33072389": [
      {"id":"198356410","title":"垫底辣妹","cover":"https://p2.music.126.net/PtIoBIMVcA09KgkvBCPhjw==/109951169654594137.jpg","format":"专辑"}
    ],
    "33097968": [
      {"id":"394639312","title":"佛哦佛404","cover":"https://p2.music.126.net/_OJ35GGy3OfvnHnvcmBwGw==/109951173826342124.jpg","format":"专辑"},
      {"id":"155299288","title":"采莲女，李怜彩","cover":"https://p2.music.126.net/PVlr3XGCYzNllaHbrUfR3Q==/109951168079912651.jpg","format":"专辑"}
    ],
    "33165901": [
      {"id":"242821726","title":"藏族小伙子","cover":"https://p2.music.126.net/qlahLqKJ5ljMT6WXE6gc1A==/109951169806047028.jpg","format":"专辑"},
      {"id":"159398740","title":"游牧主义","cover":"https://p2.music.126.net/jM8y_ZWPaXye2O65fNi88A==/109951168289858729.jpg","format":"专辑"},
      {"id":"136747734","title":"DIRTY SNOW","cover":"https://p2.music.126.net/7uDAyCcLQLzIg-kxi7S84w==/109951167325639000.jpg","format":"专辑"}
    ],
    "33435403": [
      {"id":"272444963","title":"龙年","cover":"https://p1.music.126.net/eSoVpvVnsS6TCvDUWZWptQ==/109951171005786628.jpg","format":"专辑"}
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
    "34055135": [
      {"id":"271775310","title":"把他的蜡笔拿走!","cover":"https://p2.music.126.net/MvxDNvvMjMq28NFWeXDwRA==/109951170977738374.jpg","format":"专辑"}
    ],
    "34146331": [
      {"id":"381180805","title":"逃跑计划","cover":"https://p1.music.126.net/0maPGmKe0yBEv55hiG9mng==/109951173454325122.jpg","format":"专辑"},
      {"id":"279063054","title":"BOYS2","cover":"https://p2.music.126.net/-shN0w3WMPzKARFlwgLcxQ==/109951171495788210.jpg","format":"专辑"}
    ],
    "34288614": [
      {"id":"250647743","title":"奇怪小孩","cover":"https://p2.music.126.net/2C0m29jUDaKb_bb2sfBAKQ==/109951170048053486.jpg","format":"专辑"}
    ],
    "34326822": [
      {"id":"251128442","title":"救赎路","cover":"https://p2.music.126.net/uADdZDN5MICcE_dVNJuDQg==/109951170053471196.jpg","format":"专辑"}
    ],
    "34364251": [
      {"id":"400217283","title":"Zhuang Zhuang Mixtape","cover":"https://p1.music.126.net/otvHRQAwYz2iJ2TPknuOPw==/109951173990128668.jpg","format":"Mixtape"},
      {"id":"252286614","title":"王中王","cover":"https://p1.music.126.net/QnQmVpkz6RHd6mdB0PsisA==/109951170682532652.jpg","format":"专辑"}
    ],
    "34876884": [
      {"id":"264726164","title":"如果每天都可以 happy happy 谁想要sad:)) - 一起去度假","cover":"https://p2.music.126.net/SM9I8flDSW7Eps_Z7uvPZg==/109951170540389548.jpg","format":"专辑"},
      {"id":"264725015","title":"如果每天都可以 happy happy 谁想要sad:＊- 合作的秘密","cover":"https://p2.music.126.net/VRBz-rnUQFnco_B2CJld5Q==/109951170540373371.jpg","format":"专辑"}
    ],
    "35009085": [
      {"id":"351117737","title":"都市醉漢","cover":"https://p2.music.126.net/5an8DUwXGbDb0lWUdTl3ug==/109951172314748758.jpg","format":"专辑"},
      {"id":"198572467","title":"牛窝坑之子","cover":"https://p2.music.126.net/YBZo2_Q0lfEBT3VpAFUifA==/109951169660676418.jpg","format":"专辑"},
      {"id":"142302499","title":"VEN10","cover":"https://p2.music.126.net/E4Eer0JkYZtzHFNmeZfOGA==/109951168440171994.jpg","format":"专辑"}
    ],
    "35169519": [
      {"id":"386090593","title":"in 55!w !","cover":"https://p1.music.126.net/QSFPwZDRU3bie-_1n51M8A==/109951173530345510.jpg","format":"专辑"},
      {"id":"272029492","title":"The Forbidden Sound","cover":"https://p2.music.126.net/M9Kxu_9z5MYFUjTqKY1dOg==/109951170985255779.jpg","format":"专辑"},
      {"id":"253498129","title":"IT'S T.A.C.O","cover":"https://p2.music.126.net/nWrEFqAj6w-HSdv1R9brLw==/109951170147372253.jpg","format":"EP"}
    ],
    "35772719": [
      {"id":"286344704","title":"更好","cover":"https://p1.music.126.net/hBfYXsGBIf0JoCn8c61cQQ==/109951172092165022.jpg","format":"专辑"}
    ],
    "35884195": [
      {"id":"356803156","title":"城乡","cover":"https://p2.music.126.net/IxJOeieiGAcgbXotKdEk7w==/109951172521778392.jpg","format":"专辑"},
      {"id":"247120411","title":"莆田才子","cover":"https://p1.music.126.net/quYbskDqRirX3-wqgRLk7A==/109951169934912352.jpg","format":"专辑"}
    ],
    "35954968": [
      {"id":"385529963","title":"AKUMA","cover":"https://p2.music.126.net/gtNTNHd0ILKkBoiCUqwYMg==/109951173515551847.jpg","format":"EP"},
      {"id":"247707508","title":"悲伤骑士异闻录","cover":"https://p2.music.126.net/aoe18IP0LSIM_Q6vUOzjSg==/109951169974200450.jpg","format":"专辑"}
    ],
    "36458527": [
      {"id":"408322398","title":"我看不清","cover":"https://p1.music.126.net/RvJKkFCm7LAve3fL_l-YIQ==/109951174237715977.jpg","format":"EP"}
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
    "37409740": [
      {"id":"285506659","title":"GAMEBOI","cover":"https://p2.music.126.net/razwufN2bH4Ng0Hrrx3Hfg==/109951172030981268.jpg","format":"专辑"},
      {"id":"253212745","title":"AFRICAKID","cover":"https://p1.music.126.net/jQklrtH6VK5afWRy0pE10g==/109951170130659740.jpg","format":"专辑"}
    ],
    "46356020": [
      {"id":"400112541","title":"商业与玩法","cover":"https://p1.music.126.net/rt6_mInoqx0iqImk9qng2w==/109951173986994634.jpg","format":"专辑"},
      {"id":"267784482","title":"幽默与笑话","cover":"https://p2.music.126.net/A_Wr1zYxHAU9bFt5wL6u6Q==/109951173753553418.jpg","format":"专辑"},
      {"id":"251011194","title":"蓝图4","cover":"https://p2.music.126.net/8HY5HY_bVsiWWMFxZqLG7Q==/109951170050817922.jpg","format":"专辑"}
    ],
    "46549449": [
      {"id":"284767566","title":"ART MUSIC(艺术音乐）","cover":"https://p1.music.126.net/KYVU01cq9P4UYXMJ7JnTOg==/109951173753564544.jpg","format":"专辑"}
    ],
    "46921476": [
      {"id":"269197856","title":"exordinary","cover":"https://p1.music.126.net/29KtliGpmk6RnJKX-a4L5w==/109951170728470195.jpg","format":"专辑"}
    ],
    "48045511": [
      {"id":"400117250","title":"APHD","cover":"https://p2.music.126.net/Roaq3pHTZz1hdQIEw8e54Q==/109951173987475873.jpg","format":"专辑"},
      {"id":"348619269","title":"赢家圈子","cover":"https://p2.music.126.net/ioC8htV309JEkJayxwANDA==/109951172214507494.jpg","format":"专辑"},
      {"id":"241957188","title":"Leader Not Follow 2","cover":"https://p2.music.126.net/aDiUvapc5t1cgpq76orxaA==/109951169774528624.jpg","format":"专辑"}
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
    "49406467": [
      {"id":"181892793","title":"Million Chapter","cover":"https://p2.music.126.net/C00xidcOhBYQyQMs-Uxa7w==/109951169215206645.jpg","format":"专辑"}
    ],
    "49439822": [
      {"id":"373795681","title":":)","cover":"https://p2.music.126.net/_NoIDFNvAh4FPlrUpjQRhQ==/109951173146743758.jpg","format":"EP"}
    ],
    "50275485": [
      {"id":"149341557","title":"MOVE IN SILENCE","cover":"https://p1.music.126.net/huYun8jQ5N5wKi2Rsa_YPw==/109951167757521194.jpg","format":"专辑"}
    ],
    "50973279": [
      {"id":"352031956","title":"M.C.S.A.","cover":"https://p2.music.126.net/d7xyxo0Sm8-60SBJBXLSnQ==/109951172346326577.jpg","format":"专辑"}
    ],
    "52410166": [
      {"id":"275450408","title":"Block Core","cover":"https://p2.music.126.net/w6MAd3zX38cPTkB9v9aMZg==/109951171319396818.jpg","format":"EP"}
    ],
    "52891211": [
      {"id":"395935568","title":"Trench Kid","cover":"https://p2.music.126.net/2ZE97oF0DaIqCJpVCbZlIg==/109951173869788169.jpg","format":"专辑"},
      {"id":"348605325","title":"VEmo","cover":"https://p1.music.126.net/ef928ozg-E8Tsuf6O0j7pw==/109951172214067729.jpg","format":"专辑"}
    ],
    "53264415": [
      {"id":"184829989","title":"顽石点头","cover":"https://p2.music.126.net/ui-gN2JPTnBkwqdGY_-b3Q==/109951169302992343.jpg","format":"专辑"}
    ],
    "53483506": [
      {"id":"367604234","title":"南下南下","cover":"https://p2.music.126.net/4gJsoN1WzxkEuFhYvVhcXg==/109951172934130756.jpg","format":"专辑"}
    ],
    "53597603": [
      {"id":"270801595","title":"事闹大了","cover":"https://p2.music.126.net/mPz94aplVAwjNqqSn13rXA==/109951170938602322.jpg","format":"专辑"}
    ],
    "54247662": [
      {"id":"276535367","title":"脚殺传","cover":"https://p2.music.126.net/nvOeEMcz0uY0yb_385-GTg==/109951171366674260.jpg","format":"专辑"},
      {"id":"159781353","title":"大脚颂","cover":"https://p2.music.126.net/tUnQx0DHG9Y1ucJyj2e0GQ==/109951168297232613.jpg","format":"专辑"}
    ],
    "55275689": [
      {"id":"352920414","title":"B♥D","cover":"https://p1.music.126.net/ECcIgLf9jtnd9FAk7NKb0w==/109951172377998494.jpg","format":"专辑"}
    ],
    "55315624": [
      {"id":"266984528","title":"FLXR","cover":"https://p2.music.126.net/XOX3Yip3UVV-rgc0pWVqpg==/109951170647958983.jpg","format":"专辑"}
    ],
    "55460322": [
      {"id":"378701386","title":"娘子","cover":"https://p2.music.126.net/o9dT5xC6a-TmMALv5hZ_Fw==/109951173291012506.jpg","format":"专辑"},
      {"id":"280668813","title":"家.生活.悬崖鹰","cover":"https://p1.music.126.net/5H2UwDsRblhQfISQP7VLXg==/109951171791816663.jpg","format":"专辑"}
    ],
    "55832201": [
      {"id":"372866368","title":"Let The Young Punks Dance","cover":"https://p1.music.126.net/FueqfAZB2H3xreIxXc_F1g==/109951173114663218.jpg","format":"专辑"}
    ],
    "56724807": [
      {"id":"268416826","title":"LVL R","cover":"https://p1.music.126.net/SnKTjvOFWJ5F9gHbaZHRyg==/109951170704252352.jpg","format":"专辑"}
    ],
    "62099750": [
      {"id":"374481275","title":"Controll1001","cover":"https://p2.music.126.net/WaSJNvNbIzVMCshlm1wCtg==/109951173172112261.jpg","format":"专辑"}
    ],
    "94753015": [
      {"id":"356577250","title":"21's Tears","cover":"https://p2.music.126.net/hhTkVzq463yyxN1Au_xHVw==/109951172516247404.jpg","format":"专辑"},
      {"id":"258874224","title":"S.I.T.L","cover":"https://p2.music.126.net/uEVv5f4HgUQH2UYH__lEOQ==/109951170354208723.jpg","format":"专辑"}
    ],
    "99895165": [
      {"id":"367651259","title":"街","cover":"https://p2.music.126.net/JeTZr0uQ6ITnlFFI5P2y6A==/109951172954884108.jpg","format":"专辑"}
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = albums;
  else root.RapArtistAlbums = albums;
})(typeof window !== 'undefined' ? window : globalThis);
