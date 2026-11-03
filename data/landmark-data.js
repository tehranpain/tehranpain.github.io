// 歌词地标、店铺和演出场所数据。地图展示逻辑位于 scripts/app.js。
window.RapLandmarkData = (() => {
const CHANGSHA_CE_CHANGSHA_COVER = "http://p2.music.126.net/4yI-ClgZGIGaHisOWwJFXg==/5931865232257374.jpg?param=177y177";
const rapLandmarks = [
{ lat: 30.61, lng: 104.06, type: "lyric",

  location: "芳草地小区", city: "成都",

  lyric: "走切芳草地耍", song: "芳草地", artist: "DIGI GHETTO", cover: "https://p2.music.126.net/12oIz3lftSwVyxvpKWLpPw==/109951167626578292.jpg" },

{ lat: 30.26, lng: 120.15, type: "lyric",

  location: "西湖", city: "杭州",

  lyric: "西湖的水 我的drip", song: "西湖水", artist: "UDIGG/CashTrippy/mac ova seas 李大奔BENZO", cover: "https://p2.music.126.net/msVHuHdVqPNpc30re9KR9g==/109951167223386502.jpg" },

{ lat: 30.68, lng: 104.10, type: "lyric",

  location: "电子科技大学", city: "成都",

  lyric: "电子科大我是研究生", song: "装逼王", artist: "迪诺哥/SASIOVERLXRD", cover: "https://p2.music.126.net/mPz94aplVAwjNqqSn13rXA==/109951170938602322.jpg" },

{ lat: 30.67, lng: 104.10, type: "lyric",

  location: "第五大道", city: "成都",

  lyric: "my gang 聚在第五大道", song: "Cash Money 2", artist: "SASIOVERLXRD/CashTrippy/RICHNOMADIC/JinJiBeWater_隼", cover: "https://p2.music.126.net/mygs0AbhztpEaNXU3HdCGg==/109951165474171544.jpg" },

{ lat: 30.64, lng: 104.09, type: "lyric",

  location: "九眼桥", city: "成都",

  lyric: "我是九眼桥的龙", song: "九眼桥之龙", artist: "Adam Ocean/Jesse Margiela", cover: "https://p2.music.126.net/d7xyxo0Sm8-60SBJBXLSnQ==/109951172346326577.jpg" },

{ lat: 30.62, lng: 104.07, type: "lyric",

  location: "保利中心", city: "成都",

  lyric: "我早就已经走出了保利中心B座", song: "保利中心", artist: "CashTrippy", cover: "https://p2.music.126.net/bnlU1kCImWOvUkRH-ijDHA==/109951170644659962.jpg" },

{ lat: 30.64, lng: 104.11, type: "lyric",

  location: "水碾河南三街", city: "成都",

  lyric: "搬离了南三街 现在很想念水碾河", song: "水碾河南三街", artist: "LSGCsikoriot", cover: "https://p2.music.126.net/PVlr3XGCYzNllaHbrUfR3Q==/109951168079912651.jpg" },

{ lat: 30.6404, lng: 104.0893, type: "lyric",

  location: "九眼桥", city: "成都",

  lyric: "我在新加坡的街上像在九眼桥", song: "DBD Radio Interlude", artist: "马思唯/艾志恒Asen", cover: "https://p1.music.126.net/XFseMW0n_7aWQdzlJwXfNg==/109951168721928914.jpg" },

{ lat: 30.6107, lng: 104.0617, type: "lyric",

  location: "桐梓林欧城", city: "成都",

  lyric: "我说Asen在欧城像O block的Durk", song: "GOAT Right Now", artist: "马思唯/艾志恒Asen", cover: "https://p1.music.126.net/XFseMW0n_7aWQdzlJwXfNg==/109951168721928914.jpg" },

{ lat: 30.5690, lng: 104.0704, type: "lyric",

  location: "成都SKP", city: "成都",

  lyric: "逛趟SKP花了十儿多万", song: "链子在空中甩", artist: "马思唯/艾志恒Asen", cover: "https://p1.music.126.net/XFseMW0n_7aWQdzlJwXfNg==/109951168721928914.jpg" },

{ lat: 30.3011, lng: 104.4483, type: "lyric",

  location: "天府机场", city: "成都",

  lyric: "Maybach truck接我当我降落天府机场", song: "太成都 (Remix)", artist: "马思唯/Sleepy Cat/Mengzi/Ty./谢帝/邓典果DDG/PSY.P/Melo", cover: "https://p1.music.126.net/iN7OUPkcavI2MBSG8pf2jw==/109951170600632372.jpg" },

{ lat: 31.2168, lng: 121.4692, type: "lyric",

  location: "复兴公园", city: "上海",

  lyric: "复兴公园几爷子耍起在", song: "Pop Music", artist: "马思唯", cover: "https://p1.music.126.net/iN7OUPkcavI2MBSG8pf2jw==/109951170600632372.jpg" },

{ lat: 30.3039, lng: 104.4509, type: "lyric",

  location: "天府机场", city: "成都",

  lyric: "双流和天府机场跑了一趟又一趟", song: "黄色迷彩", artist: "马思唯", cover: "https://p1.music.126.net/iN7OUPkcavI2MBSG8pf2jw==/109951170600632372.jpg" },

{ lat: 30.5033, lng: 104.0702, type: "lyric",

  location: "华阳", city: "成都",

  lyric: "我在华阳去找个妹儿去建设路转", song: "太成都 (Remix)", artist: "马思唯/Sleepy Cat/Mengzi/Ty./谢帝/邓典果DDG/PSY.P/Melo", cover: "https://p1.music.126.net/iN7OUPkcavI2MBSG8pf2jw==/109951170600632372.jpg" },

{ lat: 30.6575, lng: 104.0664, type: "lyric",

  location: "天府广场", city: "成都",

  lyric: "天府广场 耍拢外滩", song: "曼巴Flow", artist: "马思唯", cover: "https://p1.music.126.net/3uKds-MLvxluxZ9K01xWkw==/109951172126526200.jpg" },

{ lat: 30.6563, lng: 104.0509, type: "lyric",

  location: "汇厦少城", city: "成都",

  lyric: "住在西边 汇夏少城", song: "东南西北", artist: "KIV/TOYOKI/THOME/mac ova seas/付思遥/DIGI GHETTO", cover: "https://p1.music.126.net/12oIz3lftSwVyxvpKWLpPw==/109951167626578292.jpg" },

{ lat: 30.6539, lng: 104.0820, type: "lyric",

  location: "太古里", city: "成都",

  lyric: "刚下飞机切太古里爽起", song: "太古里", artist: "THOME/艾志恒Asen/MULA SAKEE/KIV/DIGI GHETTO", cover: "https://p1.music.126.net/12oIz3lftSwVyxvpKWLpPw==/109951167626578292.jpg" },

{ lat: 30.6551, lng: 104.0832, type: "lyric",

  location: "太古里", city: "成都",

  lyric: "在太古里有花不完的钱都在裂变", song: "水泊梁山", artist: "mac ova seas/THOME/MULA SAKEE/艾志恒Asen/TOYOKI/KIV/付思遥", cover: "https://p1.music.126.net/12oIz3lftSwVyxvpKWLpPw==/109951167626578292.jpg" },

{ lat: 30.5049, lng: 104.0717, type: "lyric",

  location: "华阳", city: "成都",

  lyric: "他们问到我去哪儿摇下我车窗老子要跑华阳", song: "谭sir", artist: "连麻Swimming", cover: "https://p1.music.126.net/CqjMpOwqN3iR_fTIWiHe7Q==/109951167759577155.jpg" },

{ lat: 30.6817, lng: 104.1270, type: "lyric",

  location: "二仙桥", city: "成都",

  lyric: "成华大道二仙桥他整了一碗猪脚饭", song: "谭sir", artist: "连麻Swimming", cover: "https://p1.music.126.net/CqjMpOwqN3iR_fTIWiHe7Q==/109951167759577155.jpg" },

{ lat: 30.6825, lng: 104.0830, type: "lyric",

  location: "梁家巷", city: "成都",

  lyric: "走梁家巷火三轮转到了桐梓林", song: "北门", artist: "谢帝/弗洛·文尔/GLORY/建坤YOUNG", cover: "https://p2.music.126.net/aZ2PZfKhELIHTVynAvDFVA==/109951171818265854.jpg" },

{ lat: 30.6294, lng: 104.0560, type: "lyric",

  location: "玉林西路", city: "成都",

  lyric: "我在武侯区 坐标玉林西路", song: "武侯区", artist: "邓典果DDG/马思唯", cover: "https://p2.music.126.net/UtD3jVLjqjkWNg0krkAKxg==/109951167773379640.jpg" },

{ lat: 30.6544, lng: 104.0810, type: "lyric",

  location: "太古里", city: "成都",

  lyric: "给你买礼物在太古里", song: "冷战", artist: "TizzyT/万妮达Vinida Weng", cover: "https://p2.music.126.net/YK-yJzfyYUWPhdm0HLMNrQ==/109951170726033538.jpg" },

{ lat: 29.5534, lng: 106.4683, type: "lyric",

  location: "小龙坎", city: "重庆",

  lyric: "小龙坎是我的hood", song: "雾都夜话 (Live)", artist: "雾都L4WUDU", cover: "https://p1.music.126.net/BCzWh-xhpZzmW9hlVBxNgQ==/109951164194335927.jpg" },

{ lat: 29.5542, lng: 106.4602, type: "lyric",

  location: "沙坪坝", city: "重庆",

  lyric: "沙坪坝最早的市中心", song: "雾都夜话 (Live)", artist: "雾都L4WUDU", cover: "https://p1.music.126.net/BCzWh-xhpZzmW9hlVBxNgQ==/109951164194335927.jpg" },

{ lat: 29.5597, lng: 106.5495, type: "lyric",

  location: "学田湾", city: "重庆",

  lyric: "那个时候儿在学田湾儿", song: "G.O.O.D", artist: "布瑞吉Bridge", cover: "https://p1.music.126.net/Xf7g6Q9FUJ0IowHLduGWvg==/109951169721286296.jpg" },

{ lat: 30.209743, lng: 120.174820, type: "lyric",

  location: "复兴大桥", city: "杭州",

  lyric: "We are riding on the复兴大桥", song: "复兴大桥", artist: "APEX/LEGGO/黄之仪Kyra Zilver/4D", cover: "http://p1.music.126.net/DyvvGTdRz87Ei8ljg2sJtA==/109951173203389708.jpg" }
,

{ lat: 29.563258, lng: 106.549093, type: "lyric",

  location: "学田湾正街", city: "重庆",

  lyric: "那个时候儿在学田湾儿兄弟我差点入整", song: "G.O.O.D", artist: "布瑞吉Bridge", cover: "http://p1.music.126.net/Xf7g6Q9FUJ0IowHLduGWvg==/109951169721286296.jpg" }
,

{ lat: 28.175068, lng: 113.234843, type: "lyric",

  location: "黄花机场", city: "长沙",

  lyric: "落地在长沙市黄花机场uknownowwearerunningon thetour", song: "维密秀", artist: "泰格西/Lil Asian/Yung Fazo", cover: "http://p1.music.126.net/O_fyMkWoXlXIqy-hwPKTSw==/109951170155708821.jpg" }
,

{ lat: 28.175068, lng: 113.234843, type: "lyric",

  location: "黄花机场", city: "长沙",

  lyric: "落地在长沙市黄花机场uknownowwearerunningon thetour：城市：长沙", song: "维密秀", artist: "泰格西/Lil Asian/Yung Fazo", cover: "http://p2.music.126.net/O_fyMkWoXlXIqy-hwPKTSw==/109951170155708821.jpg" }
,

{ lat: 28.194912, lng: 112.971985, type: "lyric",

  location: "解放西路", city: "长沙",

  lyric: "泰格西带几个妹坨解放西wegettingpartyall night long", song: "维密秀", artist: "泰格西/Lil Asian/Yung Fazo", cover: "http://p2.music.126.net/O_fyMkWoXlXIqy-hwPKTSw==/109951170155708821.jpg" }
,

{ lat: 30.569000, lng: 104.070400, type: "lyric",

  location: "成都SKP", city: "成都",

  lyric: "amirijean Prada bag我们在SKP", song: "AJ3", artist: "KITO/邓典果DDG", cover: "http://p2.music.126.net/gvzEBuzUOArI26iDWNOCaA==/109951169063966962.jpg" }
,

{ lat: 28.126000, lng: 112.997000, type: "lyric",

  location: "韶山南路", city: "长沙",

  lyric: "哥们住在韶山南路 rap长沙南部", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.149000, lng: 112.955000, type: "lyric",

  location: "猴子石", city: "长沙",

  lyric: "我每次经过猴子石望着那湘江", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.191000, lng: 112.956000, type: "lyric",

  location: "湘江", city: "长沙",

  lyric: "我每次经过猴子石望着那湘江", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.190900, lng: 112.957700, type: "lyric",

  location: "青年毛泽东", city: "长沙",

  lyric: "青年毛泽东屹立在革命的江上", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.188500, lng: 112.936000, type: "lyric",

  location: "岳麓山", city: "长沙",

  lyric: "风吹散岳麓山顶的乌云", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.416000, lng: 113.102000, type: "lyric",

  location: "黑麋峰", city: "长沙",

  lyric: "黑麋峰 压山路 看日出", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.200700, lng: 112.978000, type: "lyric",

  location: "中山亭", city: "长沙",

  lyric: "从中山亭到白沙路", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.179000, lng: 112.982000, type: "lyric",

  location: "白沙路", city: "长沙",

  lyric: "我从中山亭到白沙路", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.194900, lng: 112.972000, type: "lyric",

  location: "解放西", city: "长沙",

  lyric: "解放西那不是我的hood", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.173000, lng: 112.933000, type: "lyric",

  location: "中南大学", city: "长沙",

  lyric: "中南大学开到梅溪湖", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.195000, lng: 112.892000, type: "lyric",

  location: "梅溪湖", city: "长沙",

  lyric: "中南大学开到梅溪湖", song: "长沙HOOD", artist: "KEY.L刘聪", cover: "https://lineimg.omusic.com.tw/img/album/6432618.jpg?v=20221003165301" }
,

{ lat: 28.183000, lng: 112.981500, type: "lyric",

  location: "白沙井", city: "长沙",

  lyric: "你晓得白沙井 白沙烟 白沙酒", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.172700, lng: 113.006700, type: "lyric",

  location: "红花坡", city: "长沙",

  lyric: "不晓得红花坡 黄土岭 黑石渡", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.159500, lng: 112.986000, type: "lyric",

  location: "黄土岭", city: "长沙",

  lyric: "不晓得红花坡 黄土岭 黑石渡", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.228800, lng: 113.022000, type: "lyric",

  location: "黑石渡", city: "长沙",

  lyric: "不晓得红花坡 黄土岭 黑石渡", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.209000, lng: 113.027000, type: "lyric",

  location: "马王堆", city: "长沙",

  lyric: "马王堆的辛追现在住得博物馆里", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.213700, lng: 112.983900, type: "lyric",

  location: "博物馆", city: "长沙",

  lyric: "马王堆的辛追现在住得博物馆里", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.186600, lng: 112.991700, type: "lyric",

  location: "省图书馆", city: "长沙",

  lyric: "省图书馆从周一到周日都是满的", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.190600, lng: 112.975800, type: "lyric",

  location: "走马楼", city: "长沙",

  lyric: "古迹现在只有走马楼和天心阁", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.182900, lng: 112.975600, type: "lyric",

  location: "天心阁", city: "长沙",

  lyric: "古迹现在只有走马楼和天心阁", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.183800, lng: 112.944400, type: "lyric",

  location: "爱晚厅", city: "长沙",

  lyric: "爱晚厅和岳麓书院你要清白", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.184300, lng: 112.944100, type: "lyric",

  location: "岳麓书院", city: "长沙",

  lyric: "爱晚厅和岳麓书院你要清白", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.194400, lng: 112.976600, type: "lyric",

  location: "五一广场", city: "长沙",

  lyric: "嗲嗲60岁还要克五一广场玩板", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.190700, lng: 112.975500, type: "lyric",

  location: "步行街", city: "长沙",

  lyric: "一车过桥步行街", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.193000, lng: 112.970800, type: "lyric",

  location: "药王街", city: "长沙",

  lyric: "药王街的四合一 那硬是要恰热的", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.183800, lng: 112.976000, type: "lyric",

  location: "南门口", city: "长沙",

  lyric: "从南门口走到河边头", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.206700, lng: 112.975200, type: "lyric",

  location: "北正街", city: "长沙",

  lyric: "以前稀烂的北正街早就已经不在", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.171100, lng: 112.993800, type: "lyric",

  location: "东塘", city: "长沙",

  lyric: "从东塘 清水塘到扫把塘", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.208000, lng: 112.984000, type: "lyric",

  location: "清水塘", city: "长沙",

  lyric: "从东塘 清水塘到扫把塘", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.151000, lng: 112.999000, type: "lyric",

  location: "扫把塘", city: "长沙",

  lyric: "从东塘 清水塘到扫把塘", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.180700, lng: 112.998000, type: "lyric",

  location: "长岭", city: "长沙",

  lyric: "还有长岭 窑岭到伍家岭", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.189100, lng: 112.993200, type: "lyric",

  location: "窑岭", city: "长沙",

  lyric: "还有长岭 窑岭到伍家岭", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.226000, lng: 112.987500, type: "lyric",

  location: "伍家岭", city: "长沙",

  lyric: "还有长岭 窑岭到伍家岭", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.190300, lng: 112.975000, type: "lyric",

  location: "杨裕兴", city: "长沙",

  lyric: "四 杨裕兴 火宫殿", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }
,

{ lat: 28.193000, lng: 112.972400, type: "lyric",

  location: "火宫殿", city: "长沙",

  lyric: "四 杨裕兴 火宫殿", song: "长沙策长沙", artist: "C-BLOCK", cover: CHANGSHA_CE_CHANGSHA_COVER }

];

// 店铺（如 livehouse / 夜店 / 探店店铺）
const psyPFoodSpots = [];

// 相关场所（如演艺中心、场馆、街区、文化空间）
const rapRelatedVenues = [

{ lat: 30.706947, lng: 104.104878,

  location: "CH8绿树演艺中心", city: "成都",

  cover: "", lyric: "livehouse", address: "成都", song: "CH8绿树演艺中心", artist: "livehouse" }
,

{ lat: 28.224541, lng: 112.959801,

  location: "达丰空间(保利店)", city: "长沙",

  cover: "https://q3.itc.cn/q_70/images03/20250422/43997dddc165447cbe4c9413bdaefede.png", lyric: "演出场所", address: "湖南省长沙市岳麓区银盆岭街道岳麓大道5号商场5楼", song: "达丰空间(保利店)", artist: "演出场所" }
];
  return { CHANGSHA_CE_CHANGSHA_COVER, rapLandmarks, psyPFoodSpots, rapRelatedVenues };
})();
