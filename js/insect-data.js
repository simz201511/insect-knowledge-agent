/**
 * 昆虫知识库 - insect-data.js
 * 30+ 种常见昆虫的详细数据
 */

const INSECT_DATABASE = [
  {
    id: "mosquito",
    name: "蚊子",
    latinName: "Culicidae",
    category: "双翅目",
    emoji: "🦟",
    dangerLevel: 4,
    fearOfHumans: 1,
    identification: {
      size: "3-6mm",
      color: "灰褐色 / 黑色",
      bodyShape: "细长",
      wings: "1对，膜质透明",
      distinctiveFeatures: "细长口器（喙），静止时翅膀叠覆背面，六条细长腿"
    },
    habits: {
      activity: "黄昏至黎明活跃",
      habitat: "积水附近、草丛、室内阴暗处",
      season: "5-10月（夏季高峰）",
      socialBehavior: "独居，群聚叮咬",
      lifespan: "2-4周（雄蚊更短）"
    },
    bites: {
      willBite: "yes",
      biteDescription: "雌蚊用针管状口器刺入皮肤吸血，注入唾液导致瘙痒红肿",
      painLevel: 2,
      biteSymptoms: "叮咬处红肿、瘙痒，数小时至数天消退"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "本身无毒，但唾液可引起过敏反应"
    },
    diet: {
      food: "雄蚊吸食花蜜和植物汁液；雌蚊吸血以获取蛋白质产卵",
      feedingHabits: "雌蚊需吸血才能发育虫卵"
    },
    prevention: "清除积水，使用蚊帐、驱蚊液，穿长袖长裤",
    firstAid: "肥皂水清洗叮咬处，涂抹止痒药膏，避免抓挠防感染",
    funFact: "蚊子是地球上杀死人类最多的动物，每年因蚊媒疾病死亡超70万人",
    keywords: ["蚊子", "蚊", "咬人", "吸血", "飞虫", "小虫", "嗡嗡", "花蚊子", "黑蚊子"]
  },
  {
    id: "honeybee",
    name: "蜜蜂",
    latinName: "Apis mellifera",
    category: "膜翅目",
    emoji: "🐝",
    dangerLevel: 3,
    fearOfHumans: 3,
    identification: {
      size: "12-15mm",
      color: "黄黑相间条纹",
      bodyShape: "椭圆饱满，多毛",
      wings: "2对，膜质透明",
      distinctiveFeatures: "身体覆盖细密绒毛，后足膨大携花粉篮，黄黑条纹明显"
    },
    habits: {
      activity: "白天（晴天活跃）",
      habitat: "蜂巢（树洞、岩缝、人工蜂箱）",
      season: "3-10月（春夏最活跃）",
      socialBehavior: "高度社会化，蜂群分工明确（蜂王、工蜂、雄蜂）",
      lifespan: "工蜂30-60天，蜂王3-5年"
    },
    bites: {
      willBite: "yes",
      biteDescription: "仅受威胁时蜇人，蜇针带倒刺留在皮肤内，蜇后蜜蜂死亡",
      painLevel: 4,
      biteSymptoms: "剧痛红肿，蜇针释放蜂毒，过敏者可能出现休克"
    },
    toxicity: {
      isVenomous: true,
      toxicityLevel: 2,
      toxinDescription: "蜂毒含蜂毒肽、磷脂酶A2，可引起疼痛和炎症，严重过敏可致死"
    },
    diet: {
      food: "花蜜和花粉",
      feedingHabits: "采集花蜜酿蜂蜜储存过冬"
    },
    prevention: "不要拍打在身上停留的蜜蜂，远离蜂巢，穿浅色衣物",
    firstAid: "用信用卡等刮除蜇针（勿挤压），冰敷消肿，过敏者立即就医",
    funFact: "蜜蜂通过'8字舞'向同伴传递蜜源方向和距离，是自然界最精妙的沟通方式之一",
    keywords: ["蜜蜂", "蜂", "蜇人", "黄黑", "采蜜", "嗡嗡", "蜂巢", "工蜂"]
  },
  {
    id: "wasp",
    name: "胡蜂（马蜂）",
    latinName: "Vespidae",
    category: "膜翅目",
    emoji: "🐝",
    dangerLevel: 5,
    fearOfHumans: 1,
    identification: {
      size: "15-25mm（大型胡蜂可达40mm）",
      color: "黄黑相间 / 黑褐色",
      bodyShape: "细长，腰部明显收窄",
      wings: "2对，膜质，休息时纵折",
      distinctiveFeatures: "体表光滑少毛，腰部极细，飞行时腿悬垂下垂"
    },
    habits: {
      activity: "白天",
      habitat: "屋檐下、树上、地下筑巢",
      season: "6-11月（秋季最凶猛）",
      socialBehavior: "群居，护巢意识极强",
      lifespan: "工蜂约3-4周"
    },
    bites: {
      willBite: "yes",
      biteDescription: "可反复蜇刺不亡，蜇针无倒刺，释放大量蜂毒",
      painLevel: 5,
      biteSymptoms: "剧烈灼痛、红肿、水泡，多处蜇伤可致中毒甚至死亡"
    },
    toxicity: {
      isVenomous: true,
      toxicityLevel: 4,
      toxinDescription: "胡蜂毒液含组胺、激肽等，毒性远强于蜜蜂，可致溶血和器官损伤"
    },
    diet: {
      food: "肉食性（捕食其他昆虫、蜘蛛），也食花蜜和成熟水果",
      feedingHabits: "捕食毛虫、苍蝇等喂养幼虫"
    },
    prevention: "远离蜂巢（至少10米），不挥打驱赶，秋李格外警惕",
    firstAid: "冰敷止痛，用醋酸冲洗伤口，密切观察过敏反应，多处蜇伤立即就医",
    funFact: "大虎头蜂（金环胡蜂）体长可达4.5cm，是体型最大的胡蜂，在日本每年致多人死亡",
    keywords: ["胡蜂", "马蜂", "黄蜂", "虎头蜂", "蜇人", "蜂巢", "黄黑", "腰细", "凶猛"]
  },
  {
    id: "cockroach",
    name: "蟑螂",
    latinName: "Blattodea",
    category: "蜚蠊目",
    emoji: "🪳",
    dangerLevel: 2,
    fearOfHumans: 5,
    identification: {
      size: "10-50mm（因种类而异）",
      color: "红棕色 / 黑褐色",
      bodyShape: "椭圆扁平",
      wings: "部分种类有翅（德国小蠊翅发达但不善飞）",
      distinctiveFeatures: "体扁平适合钻缝，长触角，尾须明显，腿部带刺"
    },
    habits: {
      activity: "夜行性（畏光）",
      habitat: "厨房、卫生间、下水道、缝隙、温暖潮湿处",
      season: "全年（室内），夏季更活跃",
      socialBehavior: "群居，分泌聚集信息素",
      lifespan: "6个月-2年"
    },
    bites: {
      willBite: "no",
      biteDescription: "一般不咬人，极端情况下（如严重饥饿）可能啃咬熟睡者的皮肤角质",
      painLevel: 1,
      biteSymptoms: "极罕见，轻微红肿"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "无毒，但携带大量病菌和过敏原"
    },
    diet: {
      food: "杂食——几乎什么都吃：食物残渣、纸张、胶水、皮屑、同类尸体",
      feedingHabits: "喜食含淀粉和糖分的食物"
    },
    prevention: "封堵缝隙，保持干燥清洁，食物密封存放，使用蟑螂药饵",
    firstAid: "被咬（极罕见）后用肥皂水清洗即可",
    funFact: "蟑螂可以一周不死、40分钟不呼吸，即使失去头部也能存活数天",
    keywords: ["蟑螂", "小强", "蟑螂", "褐色", "扁虫", "厨房", "夜里", "飞虫"]
  },
  {
    id: "ant",
    name: "蚂蚁",
    latinName: "Formicidae",
    category: "膜翅目",
    emoji: "🐜",
    dangerLevel: 2,
    fearOfHumans: 3,
    invasive: true,
    invasiveInfo: {
      origin: "红火蚁原产南美洲",
      invadedYear: "2004年入侵中国",
      spreadRange: "已扩散至南方十余省份",
      hazardLevel: "红火蚁为世界百大入侵物种"
    },
    identification: {
      size: "2-15mm（蚁后更大）",
      color: "黑色 / 红棕色 / 黄色",
      bodyShape: "头-胸-腹三段，腰部有1-2个结节",
      wings: "仅繁殖蚁（婚飞蚁）有翅",
      distinctiveFeatures: "触角膝状弯曲，腰部结节明显，群体行动"
    },
    habits: {
      activity: "白天为主",
      habitat: "土壤中、墙缝、树下、室内",
      season: "3-10月活跃",
      socialBehavior: "高度社会化，分工明确（蚁后、工蚁、兵蚁）",
      lifespan: "工蚁1-2年，蚁后可达10-15年"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "部分种类会咬人（如红火蚁、子弹蚁），咬后可能喷射蚁酸",
      painLevel: 3,
      biteSymptoms: "红肿瘙痒，红火蚁叮咬可起脓疱，过敏者可能休克"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "蚁酸（甲酸）有刺激性，红火蚁毒液含生物碱可致严重过敏"
    },
    diet: {
      food: "杂食——糖类、蛋白质（昆虫尸体）、油脂、种子",
      feedingHabits: "工蚁负责觅食，通过信息素标记路径"
    },
    prevention: "封堵入口，清理食物残渣，使用蚂蚁药饵",
    firstAid: "清洗叮咬处，冰敷消肿，涂抹抗组胺药膏",
    funFact: "红火蚁被列为世界百大入侵物种，叮咬如火烧般疼痛，严重可致过敏性休克",
    keywords: ["蚂蚁", "蚁", "红蚁", "黑蚁", "红火蚁", "小虫", "排队", "行军"]
  },
  {
    id: "fly",
    name: "苍蝇",
    latinName: "Musca domestica",
    category: "双翅目",
    emoji: "🪰",
    dangerLevel: 2,
    fearOfHumans: 1,
    identification: {
      size: "5-8mm",
      color: "灰黑色，胸部有4条黑色纵纹",
      bodyShape: "椭圆",
      wings: "1对膜质翅，平衡棒明显",
      distinctiveFeatures: "复眼大而红，口器舔吸式，体表多毛"
    },
    habits: {
      activity: "白天",
      habitat: "垃圾、粪便、食物附近",
      season: "5-10月",
      socialBehavior: "独居但群聚觅食",
      lifespan: "15-30天"
    },
    bites: {
      willBite: "no",
      biteDescription: "家蝇不咬人（口器为舔吸式），但部分蝇类如厩螫蝇会吸血",
      painLevel: 1,
      biteSymptoms: "家蝇不咬人；吸血蝇类叮咬有痛感"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "无毒，但携带大量病原体"
    },
    diet: {
      food: "腐食——腐烂食物、粪便、垃圾、汗液、眼泪",
      feedingHabits: "边吃边吐边排粪，传播疾病"
    },
    prevention: "加装纱窗，垃圾及时处理，食物加盖，使用粘蝇纸",
    firstAid: "一般无需处理（不咬人）",
    funFact: "苍蝇每只脚上都有爪垫和细毛，能在天花板倒挂行走，体毛可携带数百万个细菌",
    keywords: ["苍蝇", "蝇", "飞虫", "垃圾", "嗡嗡", "复眼", "红眼"]
  },
  {
    id: "dragonfly",
    name: "蜻蜓",
    latinName: "Odonata",
    category: "蜻蜓目",
    emoji: "🦗",
    dangerLevel: 1,
    fearOfHumans: 4,
    identification: {
      size: "30-80mm（翅展可达100mm）",
      color: "多种（蓝、红、绿、黄、黑）",
      bodyShape: "细长，四翅展开",
      wings: "2对膜质翅，透明或有色斑",
      distinctiveFeatures: "巨大复眼占头部大部，四翅平展或竖立，飞行能力极强"
    },
    habits: {
      activity: "白天（晴朗天气）",
      habitat: "水域附近（池塘、河流、湿地）",
      season: "5-9月",
      socialBehavior: "独居，有领地意识",
      lifespan: "成虫1-6个月，幼虫（水虿）1-5年"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "大型种类被抓时可能用强大下颚咬人，轻微疼痛",
      painLevel: 1,
      biteSymptoms: "轻微夹痛感，无大碍"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "肉食——捕食蚊虫、苍蝇、蝴蝶等飞行昆虫",
      feedingHabits: "空中捕食大师，捕食率高达95%"
    },
    prevention: "无需预防，蜻蜓对人完全无害且是有益昆虫",
    firstAid: "被咬后无需特殊处理",
    funFact: "蜻蜓是地球上飞行最快的昆虫，时速可达60km/h，可悬停、倒飞、急转",
    keywords: ["蜻蜓", "蜻蛉", "豆娘", "四翅", "大眼", "池塘", "飞虫"]
  },
  {
    id: "mantis",
    name: "螳螂",
    latinName: "Mantodea",
    category: "螳螂目",
    emoji: "🦗",
    dangerLevel: 1,
    fearOfHumans: 3,
    identification: {
      size: "30-80mm（部分种类可达100mm以上）",
      color: "绿色 / 褐色 / 黄白色",
      bodyShape: "细长，三角形头可自由转动",
      wings: "2对（部分雌性翅退化）",
      distinctiveFeatures: "前足特化为捕捉足（镰刀状带刺），三角头，大复眼"
    },
    habits: {
      activity: "白天",
      habitat: "草丛、灌木丛、花丛",
      season: "6-10月",
      socialBehavior: "独居，有同类相食习性",
      lifespan: "6-12个月"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "被抓时可能用前足挥砍或用口器咬人，力度不大",
      painLevel: 2,
      biteSymptoms: "前足刺可划伤皮肤，轻微疼痛和出血"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "纯肉食——捕食蝗虫、蝇类、蝴蝶、蜘蛛、甚至小型蛙类",
      feedingHabits: "伏击型捕食者，前足出击速度仅1/20秒"
    },
    prevention: "无需预防，有益昆虫",
    firstAid: "被抓伤后清洗伤口即可",
    funFact: "雌螳螂交配后常吃掉雄螳螂以补充产卵营养，三角头可180度旋转是唯一能看到身后世界的昆虫",
    keywords: ["螳螂", "刀螂", "绿色虫", "镰刀", "三角头", "大眼"]
  },
  {
    id: "butterfly",
    name: "蝴蝶",
    latinName: "Lepidoptera",
    category: "鳞翅目",
    emoji: "🦋",
    dangerLevel: 1,
    fearOfHumans: 4,
    identification: {
      size: "翅展20-150mm",
      color: "色彩斑斓（蓝、橙、黄、白、黑等）",
      bodyShape: "细长，翅宽大",
      wings: "2对大翅，覆盖鳞片",
      distinctiveFeatures: "翅面色彩鲜艳，触角棒状末端膨大，静止时翅竖立"
    },
    habits: {
      activity: "白天",
      habitat: "花丛、草地、林间",
      season: "3-10月",
      socialBehavior: "独居，部分种类有迁徙习性",
      lifespan: "成虫2-4周，部分越冬种类可达数月"
    },
    bites: {
      willBite: "no",
      biteDescription: "蝴蝶成虫口器为虹吸式，无法咬人",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "成虫无毒；部分种类幼虫（毛虫）体表刚毛可致皮肤过敏"
    },
    diet: {
      food: "花蜜（成虫）；植物叶片（幼虫毛虫）",
      feedingHabits: "用长虹吸式口器吸食花蜜"
    },
    prevention: "无需预防，完全无害",
    firstAid: "无需处理",
    funFact: "斑蝶体内含毒素（来自幼虫取食的马利筋），鲜艳色彩是警告天敌的警戒色",
    keywords: ["蝴蝶", "蝶", "翅膀", "花丛", "彩色", "飞舞"]
  },
  {
    id: "moth",
    name: "飞蛾",
    latinName: "Lepidoptera",
    category: "鳞翅目",
    emoji: "🦋",
    dangerLevel: 2,
    fearOfHumans: 2,
    identification: {
      size: "翅展5-200mm（因种类差异极大）",
      color: "灰褐 / 暗色为主，部分色彩鲜艳",
      bodyShape: "粗壮多毛，翅宽",
      wings: "2对，静止时屋脊状覆盖身体",
      distinctiveFeatures: "触角羽状或丝状，体多毛，趋光性强"
    },
    habits: {
      activity: "夜行性（少数日行）",
      habitat: "广泛——林地、草地、室内",
      season: "5-10月",
      socialBehavior: "独居，通过性信息素求偶",
      lifespan: "1-4周（成虫）"
    },
    bites: {
      willBite: "no",
      biteDescription: "成虫不咬人，口器为虹吸式",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "成虫无毒；部分种类幼虫（如刺蛾毛毛虫）体表毒毛可致严重皮炎"
    },
    diet: {
      food: "花蜜、树汁、腐果汁液（成虫）；植物叶片（幼虫）",
      feedingHabits: "夜间活动，趋光性"
    },
    prevention: "关好纱窗，减少室内灯光，使用驱虫剂",
    firstAid: "成虫无需处理；如被毒蛾幼虫刺伤，用胶带粘除毒毛后清洗涂抹药膏",
    funFact: "飞蛾的羽状触角是自然界最灵敏的化学探测器，雄性天蛾可在数公里外感知雌性信息素",
    keywords: ["飞蛾", "蛾子", "扑火", "趋光", "毛虫", "夜虫", "灰翅膀"]
  },
  {
    id: "tick",
    name: "蜱虫",
    latinName: "Ixodidae",
    category: "蜱螨目",
    emoji: "🦟",
    dangerLevel: 5,
    fearOfHumans: 1,
    identification: {
      size: "未吸血2-10mm，吸血后可达30mm",
      color: "红褐 / 黑褐色，吸血后灰白",
      bodyShape: "卵圆形，背腹扁平，吸血后膨胀如豆",
      wings: "无翅",
      distinctiveFeatures: "无明显头部，口器嵌入皮肤，八条腿（属蛛形纲）"
    },
    habits: {
      activity: "4-10月（春秋高峰）",
      habitat: "草丛、灌木丛、林区，攀附在草叶尖端等待宿主",
      season: "春夏季",
      socialBehavior: "独居",
      lifespan: "数月至数年"
    },
    bites: {
      willBite: "yes",
      biteDescription: "将口器深深刺入皮肤吸血，可附着数天不脱落，无痛感",
      painLevel: 1,
      biteSymptoms: "叮咬处红肿，可能出现游走性红斑（莱姆病标志）"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 2,
      toxinDescription: "无毒液，但唾液含麻醉成分和病原体，可传播莱姆病、森林脑炎、Q热等"
    },
    diet: {
      food: "纯吸血——哺乳动物、鸟类、爬行动物血液",
      feedingHabits: "每个生活阶段需吸血一次才能发育"
    },
    prevention: "野外活动穿长袖长裤扎紧裤脚，使用避蚊胺（DEET），活动后全身检查",
    firstAid: "用尖头镊子贴近皮肤夹住头部缓慢拔出（勿扭转、勿挤压腹部），消毒伤口，观察2周有无发热和红斑",
    funFact: "蜱虫可感知3米外宿主的二氧化碳和体温，在草叶上高举前足等待'搭车'",
    keywords: ["蜱虫", "蜱", "草爬子", "咬人", "吸血", "钻肉", "硬蜱", "软蜱", "八条腿"]
  },
  {
    id: "flea",
    name: "跳蚤",
    latinName: "Siphonaptera",
    category: "蚤目",
    emoji: "🦟",
    dangerLevel: 4,
    fearOfHumans: 1,
    identification: {
      size: "1-4mm",
      color: "深棕 / 红棕色",
      bodyShape: "侧扁，如芝麻粒",
      wings: "无翅",
      distinctiveFeatures: "身体侧扁适合穿行毛发，后足发达善跳跃（可跳30cm高）"
    },
    habits: {
      activity: "全天",
      habitat: "宠物毛发、地毯、缝隙、动物窝巢",
      season: "全年（夏秋季高峰）",
      socialBehavior: "独居",
      lifespan: "2-3个月（不吸血可存活数月）"
    },
    bites: {
      willBite: "yes",
      biteDescription: "跳跃到宿主身上用口器吸血，一次可连咬多处",
      painLevel: 3,
      biteSymptoms: "叮咬处成群或成线排列的红丘疹，剧烈瘙痒，可持续数天"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒，但唾液可致严重过敏，可传播鼠疫、地方性斑疹伤寒"
    },
    diet: {
      food: "纯吸血——猫、狗、人、鼠等哺乳动物血液",
      feedingHabits: "雌雄均吸血，频繁叮咬"
    },
    prevention: "定期给宠物驱虫，清洁地毯和宠物窝，使用跳蚤喷雾",
    firstAid: "肥皂水清洗叮咬处，止痒药膏涂抹，避免抓挠防感染",
    funFact: "跳蚤的跳跃能力如果按比例换算，相当于人类跳过埃菲尔铁塔——是动物界跳跃冠军之一",
    keywords: ["跳蚤", "蚤", "跳虫", "吸血", "咬人", "宠物", "痒", "红疹"]
  },
  {
    id: "bedbug",
    name: "臭虫",
    latinName: "Cimex lectularius",
    category: "半翅目",
    emoji: "🦟",
    dangerLevel: 3,
    fearOfHumans: 1,
    identification: {
      size: "5-7mm（吸血后更圆鼓）",
      color: "红棕色（吸血前浅棕色）",
      bodyShape: "卵圆扁平",
      wings: "退化无翅",
      distinctiveFeatures: "受惊时散发特殊臭味，身体极度扁平可钻入极窄缝隙"
    },
    habits: {
      activity: "夜行性（凌晨3-5点最活跃）",
      habitat: "床架缝隙、床垫、墙纸后、家具裂缝",
      season: "全年（室内）",
      socialBehavior: "群居",
      lifespan: "6-12个月（不吸血可存活数月）"
    },
    bites: {
      willBite: "yes",
      biteDescription: "趁人熟睡时叮咬吸血，一次可在附近连咬多处",
      painLevel: 2,
      biteSymptoms: "咬痕成线或成群排列，红肿瘙痒，部分人反应延迟数天"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒，但唾液含抗凝血成分和过敏原"
    },
    diet: {
      food: "纯吸血——人类血液为主",
      feedingHabits: "每周吸血1-2次，每次5-10分钟"
    },
    prevention: "旅行检查酒店床铺，二手家具仔细检查，封堵墙壁缝隙",
    firstAid: "肥皂水清洗，止痒药膏，严重过敏需就医。需专业消杀清除",
    funFact: "臭虫在1950年代曾近乎灭绝，但因抗药性和旅行增加，近年全球大爆发，被称为'21世纪的害虫复兴'",
    keywords: ["臭虫", "床虱", "吸血", "咬人", "床上", "夜里咬", "红疹", "线状咬痕"]
  },
  {
    id: "centipede",
    name: "蜈蚣",
    latinName: "Chilopoda",
    category: "唇足纲",
    emoji: "🐛",
    dangerLevel: 3,
    fearOfHumans: 4,
    identification: {
      size: "30-200mm（少棘蜈蚣约100mm）",
      color: "红棕 / 黑褐色，足黄色",
      bodyShape: "细长扁平，多体节",
      wings: "无翅",
      distinctiveFeatures: "每体节一对足（21对以上），第一对足特化为毒颚（颚足）"
    },
    habits: {
      activity: "夜行性",
      habitat: "潮湿阴暗处——石下、落叶堆、墙缝、地下室",
      season: "5-10月",
      socialBehavior: "独居",
      lifespan: "3-7年"
    },
    bites: {
      willBite: "yes",
      biteDescription: "受惊或被踩到时用毒颚咬人，注入毒液",
      painLevel: 4,
      biteSymptoms: "剧痛、红肿、淋巴管炎，可能伴恶心头晕，数天消退"
    },
    toxicity: {
      isVenomous: true,
      toxicityLevel: 3,
      toxinDescription: "毒液含组胺、蛋白酶等，可致局部组织损伤和全身反应，儿童症状更重"
    },
    diet: {
      food: "肉食——捕食蚯蚓、蜗牛、蜘蛛、昆虫、小型脊椎动物",
      feedingHabits: "夜出捕食，用毒颚麻痹猎物"
    },
    prevention: "保持环境干燥清洁，封堵缝隙，野外翻石时注意",
    firstAid: "立即用肥皂水冲洗，冰敷止痛，抬高患处，密切观察，儿童或全身症状需就医",
    funFact: "蜈蚣的毒颚其实是由第一对步足特化而成的'颚足'，并非真正的口器",
    keywords: ["蜈蚣", "百足", "多足", "咬人", "有毒", "红棕", "长虫", "毒颚"]
  },
  {
    id: "scorpion",
    name: "蝎子",
    latinName: "Scorpiones",
    category: "蛛形纲",
    emoji: "🦂",
    dangerLevel: 4,
    fearOfHumans: 5,
    identification: {
      size: "30-180mm（因种类而异）",
      color: "黄褐 / 黑褐色",
      bodyShape: "前体椭圆，后体细长分节，末端球状毒囊",
      wings: "无翅",
      distinctiveFeatures: "末端有弯曲尾刺（毒针），前部一对大螯（须肢），八条腿"
    },
    habits: {
      activity: "夜行性",
      habitat: "干燥石下、树皮、墙缝、沙地（少数潮湿环境）",
      season: "5-9月",
      socialBehavior: "独居（母蝎会背幼蝎）",
      lifespan: "2-8年"
    },
    bites: {
      willBite: "yes",
      biteDescription: "被踩到或误碰时用尾刺蜇人",
      painLevel: 5,
      biteSymptoms: "剧烈灼痛、麻木、肿胀，严重者全身中毒症状"
    },
    toxicity: {
      isVenomous: true,
      toxicityLevel: 4,
      toxinDescription: "毒液含神经毒素和心脏毒素，少数种类（如钳蝎）可致命"
    },
    diet: {
      food: "肉食——捕食昆虫、蜘蛛、蜈蚣、小型脊椎动物",
      feedingHabits: "伏击捕食，用螯足抓住猎物后尾刺蜇入"
    },
    prevention: "野外翻石翻木时戴手套，检查鞋子衣物，封堵住宅缝隙",
    firstAid: "冰敷止痛，清洗伤口，保持冷静减少毒液扩散，立即就医（尤其是儿童）",
    funFact: "蝎子在紫外线下会发出荧光蓝色，科学家用紫外灯可以在夜间轻松发现它们",
    keywords: ["蝎子", "蝎", "尾刺", "蜇人", "有毒", "毒针", "螯", "黄褐", "八条腿"]
  },
  {
    id: "spider",
    name: "蜘蛛",
    latinName: "Araneae",
    category: "蛛形纲",
    emoji: "🕷️",
    dangerLevel: 2,
    fearOfHumans: 5,
    identification: {
      size: "2-50mm（腿展可达100mm以上）",
      color: "黑 / 棕 / 灰 / 鲜艳色彩（部分）",
      bodyShape: "头胸部+腹部两段，细腰连接",
      wings: "无翅",
      distinctiveFeatures: "八条腿，纺丝器，多数有8只眼，螯牙含毒腺"
    },
    habits: {
      activity: "多数夜行性",
      habitat: "广泛——室内角落、屋檐、草丛、树间、地下",
      season: "全年（夏秋多见）",
      socialBehavior: "绝大多数独居（少数如社会性蜘蛛群居）",
      lifespan: "1-2年（部分可达20年）"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "绝大多数不咬人，仅受威胁被挤压时才咬，多数蜘蛛螯牙无法刺破人皮",
      painLevel: 2,
      biteSymptoms: "多数如蚊虫叮咬；黑寡妇、棕色遁蛛等可致严重中毒"
    },
    toxicity: {
      isVenomous: true,
      toxicityLevel: 2,
      toxinDescription: "几乎所有蜘蛛都有毒，但绝大多数对人无害；黑寡妇（神经毒）、棕色遁蛛（坏死毒）危险"
    },
    diet: {
      food: "肉食——捕食昆虫、其他蜘蛛、小型节肢动物",
      feedingHabits: "结网捕食或游猎捕食，注入毒液消化猎物后吸食"
    },
    prevention: "不要徒手抓蜘蛛，整理杂物时戴手套，保持室内清洁",
    firstAid: "清洗伤口，冰敷，观察症状；被黑寡妇等毒蛛咬伤需立即就医注射抗毒血清",
    funFact: "蜘蛛丝的强度是同等粗细钢丝的5倍，如果用蛛丝织成铅笔粗的绳索可以拦住一架飞机",
    keywords: ["蜘蛛", "蛛", "结网", "八条腿", "蛛网", "毒", "黑寡妇", "室内", "角落"]
  },
  {
    id: "ladybug",
    name: "瓢虫",
    latinName: "Coccinellidae",
    category: "鞘翅目",
    emoji: "🐞",
    dangerLevel: 1,
    fearOfHumans: 3,
    identification: {
      size: "5-8mm",
      color: "红/橙/黄色带黑点，或黑色带黄点",
      bodyShape: "半球形，如半个圆球",
      wings: "前翅硬化为鞘翅，后翅膜质折叠于下",
      distinctiveFeatures: "半球形身体，鞘翅上斑点数量因种类而异"
    },
    habits: {
      activity: "白天",
      habitat: "花丛、草地、农作物上（有蚜虫处）",
      season: "4-10月",
      socialBehavior: "独居，冬季群聚越冬",
      lifespan: "1-2年"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "极少数情况下可能轻咬人皮肤，几乎无感觉",
      painLevel: 1,
      biteSymptoms: "无或极轻微"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒，但受惊时分泌的黄色液体含生物碱，有异味可致轻微皮肤刺激"
    },
    diet: {
      food: "肉食——蚜虫、介壳虫、粉虱（植食性瓢虫吃真菌孢子）",
      feedingHabits: "一只七星瓢虫日食蚜虫约100只"
    },
    prevention: "无需预防，是重要益虫",
    firstAid: "无需特殊处理",
    funFact: "七星瓢虫的斑点数量不代表年龄，而是种类特征。它们是生物防治的天敌昆虫",
    keywords: ["瓢虫", "花大姐", "七星瓢虫", "红点", "半球", "益虫"]
  },
  {
    id: "cricket",
    name: "蟋蟀",
    latinName: "Gryllidae",
    category: "直翅目",
    emoji: "🦗",
    dangerLevel: 1,
    fearOfHumans: 4,
    identification: {
      size: "15-50mm",
      color: "黑褐 / 黄褐色",
      bodyShape: "扁平粗壮",
      wings: "2对（前翅革质，雄性可摩擦发声）",
      distinctiveFeatures: "雄虫前翅有发音器，尾须长，后足发达善跳跃"
    },
    habits: {
      activity: "夜行性",
      habitat: "草丛、石下、墙缝、田间",
      season: "6-10月",
      socialBehavior: "独居，雄虫鸣叫求偶争地盘",
      lifespan: "2-3个月"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "被抓时可能用大颚咬人，力度不大",
      painLevel: 1,
      biteSymptoms: "轻微夹痛，可能轻微出血"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "杂食——植物茎叶、种子、小型昆虫、腐殖质",
      feedingHabits: "夜间觅食"
    },
    prevention: "无需预防",
    firstAid: "被咬后清洗即可",
    funFact: "蟋蟀鸣叫是雄虫用前翅相互摩擦发声（翅鸣），频率和节奏因求偶、争斗、警告而不同",
    keywords: ["蟋蟀", "蛐蛐", "鸣虫", "叫", "夜间", "黑褐", "跳跃", "促织"]
  },
  {
    id: "locust",
    name: "蝗虫",
    latinName: "Acrididae",
    category: "直翅目",
    emoji: "🦗",
    dangerLevel: 1,
    fearOfHumans: 4,
    identification: {
      size: "30-70mm",
      color: "绿色 / 黄褐 / 灰褐色",
      bodyShape: "粗壮，后足发达",
      wings: "2对（前翅革质，后翅膜质宽大）",
      distinctiveFeatures: "后足极发达善跳跃，大复眼，触角短"
    },
    habits: {
      activity: "白天",
      habitat: "草地、农田、荒地",
      season: "6-10月",
      socialBehavior: "独居或群居（蝗灾时大规模集群迁徙）",
      lifespan: "3-6个月"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "被抓在手中可能用大颚啃咬指尖",
      painLevel: 1,
      biteSymptoms: "轻微疼痛，可能破皮"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "植食——禾本科植物叶片、农作物（水稻、小麦、玉米等）",
      feedingHabits: "大量取食，蝗群日食量惊人"
    },
    prevention: "无需预防",
    firstAid: "被咬后清洗即可",
    funFact: "蝗虫群飞时遮天蔽日，一个大型蝗群可覆盖1000平方公里，包含数百亿只个体",
    keywords: ["蝗虫", "蚂蚱", "蚱蜢", "绿色", "跳跃", "后腿", "农田", "飞虫"]
  },
  {
    id: "cicada",
    name: "蝉",
    latinName: "Cicadidae",
    category: "半翅目",
    emoji: "🦗",
    dangerLevel: 1,
    fearOfHumans: 3,
    identification: {
      size: "30-55mm",
      color: "黑色 / 褐色，部分有绿色斑纹",
      bodyShape: "粗壮，头宽",
      wings: "2对膜质翅，透明或有色彩",
      distinctiveFeatures: "雄虫腹部有发音器（鸣膜），鸣声震耳，复眼突出"
    },
    habits: {
      activity: "白天（鸣叫）",
      habitat: "树上（尤其是阔叶树）",
      season: "6-9月",
      socialBehavior: "独居，雄虫鸣叫求偶",
      lifespan: "成虫2-4周，幼虫地下2-17年"
    },
    bites: {
      willBite: "no",
      biteDescription: "不咬人，口器为刺吸式仅用于吸食树汁",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "植物汁液（成虫刺吸树枝，幼虫吸食根部汁液）",
      feedingHabits: "用刺吸式口器插入植物组织吸食汁液"
    },
    prevention: "无需预防",
    firstAid: "无需处理",
    funFact: "北美的十七年蝉每17年才破土羽化一次，数十亿只同时出现是自然界最壮观的昆虫事件",
    keywords: ["蝉", "知了", "叫", "鸣叫", "树上", "夏天", "黑虫"]
  },
  {
    id: "stinkbug",
    name: "蝽象（放屁虫）",
    latinName: "Pentatomidae",
    category: "半翅目",
    emoji: "🐛",
    dangerLevel: 1,
    fearOfHumans: 3,
    identification: {
      size: "8-15mm",
      color: "绿色 / 褐色 / 黑白相间",
      bodyShape: "盾形，背部隆起",
      wings: "2对（前翅基部革质，端部膜质）",
      distinctiveFeatures: "盾形身体，触角5节，受惊释放臭液"
    },
    habits: {
      activity: "白天",
      habitat: "植物上（花、果、叶）、室内（越冬）",
      season: "5-10月",
      socialBehavior: "独居或聚集越冬",
      lifespan: "约1年"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "部分种类（如荔蝽）受威胁时可刺人，口器刺入皮肤",
      painLevel: 2,
      biteSymptoms: "刺痛、红肿，可持续数小时"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒液，但臭腺分泌的液体含醛类化合物，有强烈刺激性气味"
    },
    diet: {
      food: "植食——吸食植物汁液、果实（部分种类肉食捕食其他昆虫）",
      feedingHabits: "用刺吸式口器吸食植物汁液"
    },
    prevention: "不要徒手抓取，室内越冬虫用纸巾包裹丢弃",
    firstAid: "被刺后用肥皂水清洗，臭液接触皮肤后用水冲洗避免入眼",
    funFact: "蝽象的臭液成分与香菜的特殊气味成分类似——所以讨厌香菜的人可能天生对醛类化合物敏感",
    keywords: ["蝽象", "放屁虫", "臭大姐", "盾形", "绿色虫", "臭味", "蝽"]
  },
  {
    id: "earwig",
    name: "蠼螋",
    latinName: "Dermaptera",
    category: "革翅目",
    emoji: "🐛",
    dangerLevel: 1,
    fearOfHumans: 4,
    identification: {
      size: "8-25mm",
      color: "深棕色 / 黑色",
      bodyShape: "细长扁平",
      wings: "2对（前翅短革质，后翅大膜质折叠）部分无翅",
      distinctiveFeatures: "尾端有一对钳状尾须（尾铗），体扁平"
    },
    habits: {
      activity: "夜行性",
      habitat: "潮湿处——石下、落叶堆、树皮缝、室内角落",
      season: "5-10月",
      socialBehavior: "独居，母虫有护卵护幼习性",
      lifespan: "约1年"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "被严重惊扰时可能用尾铗夹人，力度不大",
      painLevel: 1,
      biteSymptoms: "轻微夹痛，可能留下红印"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "杂食——腐殖质、植物残体、小型昆虫、蚜虫",
      feedingHabits: "夜间觅食"
    },
    prevention: "无需预防，对人无害",
    firstAid: "被夹后无需处理",
    funFact: "蠼螋俗称'夹板虫'，传说会钻入人耳朵的传言完全是无稽之谈——它们对人完全无害",
    keywords: ["蠼螋", "夹板虫", "尾铗", "钳子", "棕色", "扁平", "夜里"]
  },
  {
    id: "horsefly",
    name: "牛虻",
    latinName: "Tabanidae",
    category: "双翅目",
    emoji: "🦟",
    dangerLevel: 3,
    fearOfHumans: 1,
    identification: {
      size: "10-25mm",
      color: "灰褐 / 黑色，部分有彩色斑纹",
      bodyShape: "粗壮，头部大",
      wings: "1对膜质翅",
      distinctiveFeatures: "复眼大而鲜艳（绿色/紫色条纹），口器如刀片，体型粗壮"
    },
    habits: {
      activity: "白天（高温晴天最活跃）",
      habitat: "牧场、草地、水域附近",
      season: "6-9月",
      socialBehavior: "独居",
      lifespan: "2-4周"
    },
    bites: {
      willBite: "yes",
      biteDescription: "雌虻用刀片状口器切割皮肤吸血，伤口流血不止",
      painLevel: 4,
      biteSymptoms: "瞬间剧痛，伤口出血多，红肿数天，可能感染"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒，但唾液含抗凝血成分致伤口持续出血"
    },
    diet: {
      food: "雌虻吸血（牛马等大型哺乳动物及人）；雄虻吸食花蜜",
      feedingHabits: "白天活动，视觉定位猎物"
    },
    prevention: "穿浅色长袖，使用DEET驱虫剂，避开正午高温时段的草地",
    firstAid: "压迫止血，肥皂水清洗，消毒防感染，冰敷消肿",
    funFact: "牛虻的复眼能看到偏振光，帮助它们在广阔环境中定位动物——也使它们成为极难拍打的飞行高手",
    keywords: ["牛虻", "虻", "马虻", "吸血", "咬人", "大苍蝇", "剧痛", "牧场"]
  },
  {
    id: "firefly",
    name: "萤火虫",
    latinName: "Lampyridae",
    category: "鞘翅目",
    emoji: "🦗",
    dangerLevel: 1,
    fearOfHumans: 4,
    identification: {
      size: "5-20mm",
      color: "黑褐色，鞘翅柔软",
      bodyShape: "细长扁平",
      wings: "前翅革质，后翅膜质",
      distinctiveFeatures: "腹部末端有发光器，夜间发出荧光"
    },
    habits: {
      activity: "夜行性",
      habitat: "潮湿草丛、溪流附近、湿地",
      season: "5-8月",
      socialBehavior: "独居，通过闪光求偶",
      lifespan: "成虫1-2周，幼虫1-2年"
    },
    bites: {
      willBite: "no",
      biteDescription: "不咬人",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒，但血液中含有荧光素类物质，对掠食者有警戒作用"
    },
    diet: {
      food: "幼虫肉食（捕食蜗牛、蚯蚓）；成虫部分不进食或食花蜜",
      feedingHabits: "幼虫注射消化液于蜗牛体内吸食"
    },
    prevention: "无需预防",
    firstAid: "无需处理",
    funFact: "萤火虫发光是效率近100%的冷光——几乎不产生热量。不同种类闪光模式不同，是种间识别信号",
    keywords: ["萤火虫", "萤光虫", "发光", "闪光", "夜间", "湿地", "黄绿光"]
  },
  {
    id: "silkworm",
    name: "蚕",
    latinName: "Bombyx mori",
    category: "鳞翅目",
    emoji: "🐛",
    dangerLevel: 1,
    fearOfHumans: 2,
    identification: {
      size: "幼虫30-70mm，成蛾25-30mm",
      color: "幼虫白色/淡黄色；成蛾白色",
      bodyShape: "幼虫圆柱形多体节，成蛾粗壮多毛",
      wings: "成蛾有2对翅但不善飞",
      distinctiveFeatures: "幼虫身体有角，成蛾口器退化不进食"
    },
    habits: {
      activity: "幼虫全天进食，成蛾不活跃",
      habitat: "人工饲养（原产中国）",
      season: "春季（人工控制全年可养）",
      socialBehavior: "群居饲养",
      lifespan: "幼虫30-40天，蛹2周，成蛾1周"
    },
    bites: {
      willBite: "no",
      biteDescription: "不咬人，口器退化无法进食",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "幼虫专食桑叶；成虫不进食",
      feedingHabits: "幼虫日夜不停取食，蜕皮4次后吐丝结茧"
    },
    prevention: "无需预防",
    firstAid: "无需处理",
    funFact: "蚕是完全被人类驯化的昆虫，野外已无自然种群存在。一条蚕一生吐丝可达1000米",
    keywords: ["蚕", "蚕宝宝", "桑叶", "吐丝", "白虫", "丝绸", "毛毛虫"]
  },
  {
    id: "termites",
    name: "白蚁",
    latinName: "Isoptera",
    category: "蜚蠊目",
    emoji: "🐛",
    dangerLevel: 2,
    fearOfHumans: 5,
    identification: {
      size: "3-10mm（蚁后可达20mm）",
      color: "乳白色 / 淡黄色 / 黑色（繁殖蚁）",
      bodyShape: "柔软，与蚂蚁相似但无细腰",
      wings: "繁殖蚁有4翅（等长），工蚁兵蚁无翅",
      distinctiveFeatures: "体色浅淡（故称白蚁），腰不明显（区别蚂蚁），触角串珠状"
    },
    habits: {
      activity: "工蚁全天活动（避光，修筑蚁道）",
      habitat: "地下蚁巢、木材中、墙体内部",
      season: "5-7月繁殖蚁婚飞",
      socialBehavior: "高度社会化（蚁王蚁后、工蚁兵蚁）",
      lifespan: "蚁后可达10-20年"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "兵蚁可能咬人，但极少遇到",
      painLevel: 1,
      biteSymptoms: "轻微疼痛"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "纤维素——木材、纸张、农作物",
      feedingHabits: "肠道共生原虫分解纤维素，蛀食木质结构"
    },
    prevention: "保持木材干燥，地基处理，定期检查木结构",
    firstAid: "被咬后清洗即可",
    funFact: "白蚁不是蚂蚁，与蟑螂亲缘更近。它们的蚁巢通风系统是仿生学经典案例",
    keywords: ["白蚁", "蛀虫", "木头虫", "蚁巢", "婚飞", "白色", "食木"]
  },
  {
    id: "mealworm",
    name: "面包虫",
    latinName: "Tenebrio molitor",
    category: "鞘翅目",
    emoji: "🐛",
    dangerLevel: 1,
    fearOfHumans: 5,
    identification: {
      size: "幼虫20-30mm，成虫12-18mm",
      color: "幼虫黄褐色；成虫黑褐色",
      bodyShape: "幼虫圆柱形多节，成虫椭圆",
      wings: "成虫有鞘翅",
      distinctiveFeatures: "幼虫体表光滑发亮，有多个体节"
    },
    habits: {
      activity: "夜行性",
      habitat: "粮仓、面粉、谷物储存处",
      season: "全年（室内）",
      socialBehavior: "群居",
      lifespan: "幼虫3-4月，成虫2-3月"
    },
    bites: {
      willBite: "no",
      biteDescription: "不咬人",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "谷物、面粉、麸皮、面包碎屑",
      feedingHabits: "在食物中蛀食"
    },
    prevention: "密封储存粮食，保持干燥清洁",
    firstAid: "无需处理",
    funFact: "面包虫是目前最具前景的可食用昆虫之一，富含蛋白质，正成为替代蛋白来源",
    keywords: ["面包虫", "黄粉虫", "谷物虫", "黄色虫", "幼虫", "饲料"]
  },
  {
    id: "beetle",
    name: "甲虫",
    latinName: "Coleoptera",
    category: "鞘翅目",
    emoji: "🐛",
    dangerLevel: 1,
    fearOfHumans: 3,
    identification: {
      size: "2-80mm（因种类差异极大）",
      color: "黑色 / 棕色 / 金属光泽 / 鲜艳色彩",
      bodyShape: "椭圆或长椭圆形，体壁坚硬",
      wings: "前翅硬化为鞘翅，后翅膜质折叠",
      distinctiveFeatures: "鞘翅是最大特征——两片硬壳盖住腹部，体壁坚硬"
    },
    habits: {
      activity: "因种类而异（日行/夜行）",
      habitat: "广泛——土壤、木材、植物、粪便、尸体",
      season: "5-9月",
      socialBehavior: "多数独居（少数如屎壳郎有亚社会性）",
      lifespan: "1-3年"
    },
    bites: {
      willBite: "sometimes",
      biteDescription: "大型种类（如锹甲、天牛）被手抓时可能用大颚咬人",
      painLevel: 2,
      biteSymptoms: "夹痛，可能夹破皮肤出血"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "多数无毒；部分如芫菁含斑蝥素，接触皮肤可致水泡"
    },
    diet: {
      food: "因种类而异——植食、肉食、腐食、粪食",
      feedingHabits: "鞘翅目是动物界最大目，食性极其多样"
    },
    prevention: "徒手抓大型甲虫时注意大颚",
    firstAid: "被咬后清洗伤口止血即可",
    funFact: "甲虫（鞘翅目）是地球上物种最多的昆虫目，已知超过40万种，占所有已知动物的25%",
    keywords: ["甲虫", "鞘翅", "硬壳", "天牛", "锹甲", "独角仙", "黑色", "硬虫"]
  },
  {
    id: "gnat",
    name: "蠓虫",
    latinName: "Ceratopogonidae",
    category: "双翅目",
    emoji: "🦟",
    dangerLevel: 3,
    fearOfHumans: 1,
    identification: {
      size: "1-3mm（极小）",
      color: "黑色 / 灰黑色",
      bodyShape: "细小如尘埃",
      wings: "1对膜质翅",
      distinctiveFeatures: "体型极小，肉眼难以看清细节，叮咬后瘙痒剧烈"
    },
    habits: {
      activity: "黄昏和黎明最活跃",
      habitat: "潮湿草地、水边、树荫下",
      season: "5-10月",
      socialBehavior: "群聚飞舞",
      lifespan: "2-4周"
    },
    bites: {
      willBite: "yes",
      biteDescription: "雌蠓叮咬吸血，切口式叮咬，注入唾液",
      painLevel: 2,
      biteSymptoms: "叮咬处剧烈瘙痒，红丘疹持续数天至一周"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒，但唾液致敏性强，可传播病毒"
    },
    diet: {
      food: "雌蠓吸血；雄蠓吸食花蜜",
      feedingHabits: "成群叮咬"
    },
    prevention: "穿长袖长裤，使用DEET驱虫剂，安装细密纱窗",
    firstAid: "肥皂水清洗，止痒药膏，避免抓挠",
    funFact: "蠓虫虽只有1-3mm，但叮咬的瘙痒程度远超蚊子，被称为'小咬'",
    keywords: ["蠓虫", "小咬", "蠓", "极小", "叮咬", "痒", "飞虫", "黑虫"],
    invasive: false
  },
  {
    id: "red-fire-ant",
    name: "红火蚁",
    latinName: "Solenopsis invicta",
    category: "膜翅目",
    emoji: "🐜",
    dangerLevel: 5,
    fearOfHumans: 1,
    invasive: true,
    invasiveInfo: {
      origin: "南美洲",
      invadedYear: "2004年首次于中国广东省发现",
      spreadRange: "已扩散至广东、广西、福建、湖南、江西、四川、云南等十余省份",
      hazardLevel: "世界百大入侵物种之一"
    },
    identification: {
      size: "2-6mm（蚁后8-10mm）",
      color: "红棕色，腹部颜色较深",
      bodyShape: "与普通蚂蚁相似，头胸腹三段",
      wings: "仅繁殖蚁（婚飞蚁）有翅",
      distinctiveFeatures: "外观与普通蚂蚁极像，但被惊扰后迅速涌出攻击，叮咬如火烧般疼痛，蚁巢为沙堆状隆起"
    },
    habits: {
      activity: "全天（气温20-30°C最活跃）",
      habitat: "草地、农田、路边、公园、住宅周边，筑沙堆状蚁巢",
      season: "3-11月（春秋繁殖高峰）",
      socialBehavior: "高度社会化，多蚁后制，繁殖力极强",
      lifespan: "工蚁30-60天，蚁后可达6-7年"
    },
    bites: {
      willBite: "yes",
      biteDescription: "用大颚咬住皮肤后，以腹部末端毒针连续蜇刺，每次蜇刺都注入毒液",
      painLevel: 4,
      biteSymptoms: "立即产生火烧般剧痛，随后出现脓疱，可持续1-2周；过敏体质者可致休克甚至死亡"
    },
    toxicity: {
      isVenomous: true,
      toxicityLevel: 3,
      toxinDescription: "毒液含生物碱（哌啶类），可致皮肤坏死和过敏反应，严重者可致过敏性休克"
    },
    diet: {
      food: "杂食——昆虫、蚯蚓、小型脊椎动物、植物种子、农作物，甚至电器线路",
      feedingHabits: "群体协作捕食，攻击力强，可围攻杀死比自身大数百倍的动物"
    },
    prevention: "远离沙堆状蚁巢，不要踩踏或踢弄，野外穿长裤闭口鞋，发现蚁巢报告农业部门",
    firstAid: "立即用肥皂水冲洗，冰敷止痛，切勿弄破脓疱防感染；过敏体质者出现胸闷气短立即就医",
    funFact: "红火蚁原产南美洲，2004年入侵中国后以惊人速度扩散。一个蚁巢可有数十万只蚂蚁，多蚁后制使灭杀极困难",
    keywords: ["红火蚁", "入侵", "蚁巢", "叮咬", "火烧", "脓疱", "红蚁", "沙堆", "外来", "入侵物种"]
  },
  {
    id: "fall-webworm",
    name: "美国白蛾",
    latinName: "Hyphantria cunea",
    category: "鳞翅目",
    emoji: "🦋",
    dangerLevel: 2,
    fearOfHumans: 5,
    invasive: true,
    invasiveInfo: {
      origin: "北美洲",
      invadedYear: "1979年首次于中国辽宁省发现",
      spreadRange: "已扩散至辽宁、河北、山东、天津、北京、陕西等省份",
      hazardLevel: "中国重大外来入侵林业害虫"
    },
    identification: {
      size: "翅展25-40mm",
      color: "纯白色（少数前翅有黑褐色斑点）",
      bodyShape: "中等大小蛾类，体密布白色毛",
      wings: "2对白色翅，前翅纯白或有少量斑点",
      distinctiveFeatures: "成虫通体雪白如白蝴蝶，幼虫体背有黑色毛瘤，结大型网幕"
    },
    habits: {
      activity: "成虫夜行性（趋光），幼虫白天群集网幕内取食",
      habitat: "阔叶树林、行道树、果园、苗圃",
      season: "5-10月（一年2-3代）",
      socialBehavior: "幼虫期群居结网，数百只同居一个网幕",
      lifespan: "成虫5-8天，幼虫30-40天"
    },
    bites: {
      willBite: "no",
      biteDescription: "不咬人",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 1,
      toxinDescription: "无毒，但幼虫体毛可致部分人皮肤过敏瘙痒"
    },
    diet: {
      food: "幼虫取食300多种植物叶片——杨树、柳树、法桐、桑树、果树等",
      feedingHabits: "幼虫群集吐丝结网幕，将叶片包入网内取食，可短时间内将整树叶片吃光"
    },
    prevention: "发现网幕及时剪除焚烧，释放周氏啮小蜂进行生物防治",
    firstAid: "接触幼虫后体毛刺痒可用清水冲洗，涂抹止痒药膏",
    funFact: "美国白蛾幼虫的'网幕'可覆盖整棵树，食量惊人——一个世代幼虫可将一株大树的叶片全部吃光",
    keywords: ["美国白蛾", "白蛾", "入侵", "网幕", "白蝴蝶", "毛毛虫", "食叶", "外来", "入侵物种", "林业害虫"]
  },
  {
    id: "silverleaf-whitefly",
    name: "烟粉虱",
    latinName: "Bemisia tabaci",
    category: "半翅目",
    emoji: "🦟",
    dangerLevel: 2,
    fearOfHumans: 1,
    invasive: true,
    invasiveInfo: {
      origin: "全球热带/亚热带地区（B型/Q型为入侵生物型）",
      invadedYear: "1990年代末期在中国大暴发",
      spreadRange: "全国各省均有分布，南方尤为严重",
      hazardLevel: "中国重大外来入侵农业害虫"
    },
    identification: {
      size: "0.8-1.5mm（极小）",
      color: "体淡黄色，翅白色蜡质覆盖",
      bodyShape: "微小如白色粉末",
      wings: "2对白色翅，静止时屋脊状覆盖身体",
      distinctiveFeatures: "体积极小，受惊后群飞如白色烟雾，停栖时翅白色如粉"
    },
    habits: {
      activity: "白天活跃",
      habitat: "蔬菜大棚、棉花田、花卉苗圃——番茄、黄瓜、棉花、花卉等500余种植物",
      season: "全年（温室可繁殖全年，露地4-11月）",
      socialBehavior: "群聚于叶背面",
      lifespan: "2-4周（一代约15-20天）"
    },
    bites: {
      willBite: "no",
      biteDescription: "不咬人，口器仅用于刺吸植物汁液",
      painLevel: 0,
      biteSymptoms: "无"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "完全无毒"
    },
    diet: {
      food: "吸食500余种植物汁液——蔬菜、棉花、花卉、果树等",
      feedingHabits: "刺吸植物韧皮部汁液，同时传播100多种植物病毒，诱发煤污病"
    },
    prevention: "使用防虫网、黄板诱杀、释放丽蚜小蜂生物防治，合理轮作",
    firstAid: "无需处理（不咬人）",
    funFact: "烟粉虱被称为'超级害虫'——它不仅直接吸食植物汁液，还能传播100多种植物病毒，并可对新寄主植物产生适应性，是全球最危险的入侵农业害虫之一",
    keywords: ["烟粉虱", "白粉虱", "入侵", "小飞虫", "白色", "蔬菜", "大棚", "外来", "入侵物种", "农业害虫"]
  },
  {
    id: "german-cockroach",
    name: "德国小蠊",
    latinName: "Blattella germanica",
    category: "蜚蠊目",
    emoji: "🪳",
    dangerLevel: 2,
    fearOfHumans: 5,
    invasive: true,
    invasiveInfo: {
      origin: "非洲东北部",
      invadedYear: "随贸易传入中国，已遍布全国各地",
      spreadRange: "全国各省均有分布，城市室内最常见蟑螂",
      hazardLevel: "城市室内最主要的外来害虫"
    },
    identification: {
      size: "10-15mm（比美洲大蠊小很多）",
      color: "淡黄棕色 / 浅褐色",
      bodyShape: "椭圆扁平",
      wings: "翅发达但不善飞",
      distinctiveFeatures: "前胸背板有两条黑色纵纹（标志性特征），体型小，繁殖速度极快"
    },
    habits: {
      activity: "夜行性（畏光）",
      habitat: "厨房、卫生间、餐厅、食品柜、电器内部缝隙",
      season: "全年（室内恒温繁殖）",
      socialBehavior: "群居，分泌聚集信息素",
      lifespan: "3-6个月"
    },
    bites: {
      willBite: "no",
      biteDescription: "一般不咬人",
      painLevel: 1,
      biteSymptoms: "极罕见，几乎不会咬人"
    },
    toxicity: {
      isVenomous: false,
      toxicityLevel: 0,
      toxinDescription: "无毒，但携带大量病菌、过敏原和寄生虫"
    },
    diet: {
      food: "杂食——食物残渣、油脂、纸张、胶水、肥皂、同类尸体",
      feedingHabits: "偏好含淀粉和糖分的食物，在食物和餐具上爬行传播病原体"
    },
    prevention: "封堵缝隙，保持干燥清洁，食物密封，使用拜耳等专用蟑螂药饵",
    firstAid: "一般无需处理",
    funFact: "德国小蠊是地球上繁殖最快的蟑螂之一——一只雌虫一生可产4-8个卵鞘，每个卵鞘含30-40粒卵，后代呈几何级数增长。对多种杀虫剂已产生抗药性",
    keywords: ["德国小蠊", "小蟑螂", "入侵", "黄色蟑螂", "两条黑纹", "厨房", "外来", "入侵物种"]
  }
];

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = INSECT_DATABASE;
}
