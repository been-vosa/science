/**
 * VISIT CHANGWON - FOREIGN TOURIST PORTAL DATASET
 * Multi-language dictionaries, attraction data, food guides, and travel resources.
 */

const TRANSLATIONS = {
  en: {
    brand_title: "VISIT CHANGWON",
    brand_subtitle: "Official Tourist Portal for Foreign Travelers",
    nav_home: "Home",
    nav_attractions: "Top Attractions",
    nav_itinerary: "Smart Itinerary",
    nav_map: "Interactive Map",
    nav_food: "Gourmet & Dining",
    nav_survival: "Foreigner Survival Kit",
    nav_saved: "My Saved Places",
    search_placeholder: "Search attractions, food, or districts (e.g. Jinhae, Gamcheon, Hanok)...",
    hero_title: "Discover Changwon: Where Nature, Ocean & History Converge",
    hero_desc: "Explore Korea's premier eco-city, world-famous Jinhae Cherry Blossom festival, vibrant Masan marine promenade, and peaceful Naeseo Gamcheon-ri eco-village.",
    btn_explore: "Explore Top Spots",
    btn_plan: "Generate My Itinerary",
    hero_badge_season: "OFFICIAL CHANGWON TOURISM DIRECTORY 2026",
    
    // Live Weather & Currency Widget
    weather_title: "Changwon Live Weather",
    weather_status: "Sunny & Clear",
    weather_temp: "22°C (71.6°F)",
    weather_tip: "Ideal for walking around Yeojwa Stream & Naeseo Gamcheon Valley!",
    currency_title: "Live Currency Converter",
    currency_amount: "Amount in KRW (₩):",
    
    // Categories
    cat_all: "All Destinations",
    cat_blossom_nature: "Nature & Eco Villages",
    cat_heritage: "History & Heritage",
    cat_marine: "Ocean & Marine Parks",
    cat_art_shopping: "Arts & Shopping",
    cat_food_nightlife: "Gourmet & Dining",

    // Section Titles
    sec_attractions_title: "Must-Visit Attractions in Changwon",
    sec_attractions_sub: "Hand-picked iconic destinations curated for international travelers",
    sec_map_title: "Explore Changwon by District & Map",
    sec_map_sub: "Click on interactive pins to inspect transport & local travel tips",
    sec_itinerary_title: "Smart Itinerary Generator",
    sec_itinerary_sub: "Customized day-by-day travel plans tailored to your duration and preferences",
    sec_food_title: "Local Culinary Secrets of Changwon",
    sec_food_sub: "Taste authentic Masan Agwjjim, Jinhae Cherry Blossom Bread & Fresh Seafood",
    sec_survival_title: "Foreign Tourist Survival Kit",
    sec_survival_sub: "Essential travel guides, transportation tips, and instant taxi helper cards",

    // Buttons & Labels
    btn_taxi_card: "Show to Taxi Driver",
    btn_details: "Learn More",
    btn_save: "Save",
    btn_saved: "Saved",
    btn_view_map: "View on Map",
    label_district: "District",
    label_hours: "Operating Hours",
    label_admission: "Admission",
    label_transport: "How to get there",
    label_taxi_address: "Korean Address (For Taxi)",
    label_taxi_phrase: "Speak / Show to Driver",
    btn_copy: "Copy Address",
    btn_copied: "Copied!",
    btn_tts: "Play Audio",

    // Itinerary Form
    itin_duration: "Trip Duration",
    itin_duration_1: "1 Day Express Tour",
    itin_duration_2: "2 Days Highlights",
    itin_duration_3: "3 Days Full Experience",
    itin_style: "Travel Theme",
    itin_style_nature: "Nature & Photography",
    itin_style_heritage: "Culture & Traditional Heritage",
    itin_style_marine: "Ocean, Food & Leisure",
    itin_generate_btn: "Generate Itinerary",

    // Survival Kit Tabs
    surv_tab_transport: "🚍 Transport & KTX",
    surv_tab_emergency: "🆘 Emergency & 1330 Hotline",
    surv_tab_taxi: "🚕 Taxi Phrasebook",
    surv_tab_wifi: "📶 Free Wi-Fi & SIM Cards",

    // Footer
    footer_tagline: "Your trusted gateway to exploring Gyeongsangnam-do, Republic of Korea.",
    footer_hotline: "Korea Travel Hotline: 1330 (24/7, Multilingual Support)",
    footer_copy: "© 2026 Visit Changwon Foreign Tourist Portal. Built with excellence for global travelers."
  },
  ko: {
    brand_title: "VISIT CHANGWON",
    brand_subtitle: "외국인 관광객을 위한 창원 종합 관광 안내 포털",
    nav_home: "홈",
    nav_attractions: "주요 명소",
    nav_itinerary: "스마트 일정 추천",
    nav_map: "인터랙티브 지도",
    nav_food: "미식 & 맛집",
    nav_survival: "여행자 서바이벌 킷",
    nav_saved: "저장한 명소",
    search_placeholder: "명소, 음식, 구별 검색 (예: 진해, 벚꽃, 창원대의 집)...",
    hero_title: "자연과 바다, 역사가 어우러진 도시 창원",
    hero_desc: "세계적인 진해군항제 벚꽃 축제, 마산 해양 산책로, 그리고 깊은 역사와 첨단 문화가 살아 숨쉬는 창원을 경험해 보세요.",
    btn_explore: "추천 명소 둘러보기",
    btn_plan: "맞춤 여행 일정 만들기",
    hero_badge_season: "🌸 추천 방문 시기: 봄 (진해군항제 벚꽃 시즌)",
    
    weather_title: "오늘의 창원 날씨",
    weather_status: "맑음 & 쾌적함",
    weather_temp: "22°C",
    weather_tip: "여좌천 및 용지호수 산책하기 완벽한 날씨입니다!",
    currency_title: "실시간 환율 계산기",
    currency_amount: "원화 금액 (₩):",

    cat_all: "전체 보기",
    cat_blossom_nature: "🌸 벚꽃 & 자연 생태",
    cat_heritage: "🏯 역사 & 전통 문화",
    cat_marine: "🌊 해양 & 바다",
    cat_art_shopping: "🎨 예술 & 쇼핑",
    cat_food_nightlife: "🍢 미식 & 야경",

    sec_attractions_title: "창원 필수 방문 명소",
    sec_attractions_sub: "외국인 관광객을 위해 엄선된 대표 명소 라이브러리",
    sec_map_title: "지역별 & 지도 기반 탐색",
    sec_map_sub: "지도 상의 핀을 클릭해 이동 방법과 주요 정보를 확인하세요",
    sec_itinerary_title: "AI 스마트 일정 플래너",
    sec_itinerary_sub: "여행 기간과 취향에 맞춘 추천 여행코스",
    sec_food_title: "창원의 대표 로컬 미식",
    sec_food_sub: "마산 아구찜, 진해 벚꽃빵, 싱싱한 마산 어시장 회거리",
    sec_survival_title: "외국인 여행자 서바이벌 킷",
    sec_survival_sub: "교통편, 응급 연락처, 택시 기사님 전달용 한국어 주소 카드",

    btn_taxi_card: "🚕 택시 기사님께 보여주기",
    btn_details: "상세보기",
    btn_save: "저장하기",
    btn_saved: "저장됨",
    btn_view_map: "지도에서 보기",
    label_district: "행정구",
    label_hours: "운영 시간",
    label_admission: "입장료",
    label_transport: "대중교통 안내",
    label_taxi_address: "택시 기사님 전달용 한국어 주소",
    label_taxi_phrase: "기사님께 말하기",
    btn_copy: "주소 복사",
    btn_copied: "복사 완료!",
    btn_tts: "🔊 음성 듣기",

    itin_duration: "여행 기간",
    itin_duration_1: "1일 당일치기 코스",
    itin_duration_2: "2일 대표 하이라이트",
    itin_duration_3: "3일 창원 완전정복",
    itin_style: "여행 테마",
    itin_style_nature: "자연 & 힐링 사진 여행",
    itin_style_heritage: "역사 & 전통문화 체험",
    itin_style_marine: "바다 & 맛집 탐방",
    itin_generate_btn: "✨ 일정 생성하기",

    surv_tab_transport: "🚍 KTX & 시내교통",
    surv_tab_emergency: "🆘 응급안내 & 1330 헬프콜",
    surv_tab_taxi: "🚕 필수 택시 회화",
    surv_tab_wifi: "📶 무료 Wi-Fi & SIM",

    footer_tagline: "대한민국 경상남도 창원시 방문을 진심으로 환영합니다.",
    footer_hotline: "관광통역안내전화: 1330 (24시간, 다국어 지원)",
    footer_copy: "© 2026 Visit Changwon Foreign Tourist Portal."
  },
  ja: {
    brand_title: "VISIT CHANGWON",
    brand_subtitle: "昌原(チャンウォン)外国人観光案内ポータル",
    nav_home: "ホーム",
    nav_attractions: "人気観光地",
    nav_itinerary: "AIコース推薦",
    nav_map: "インタラクティブマップ",
    nav_food: "グルメ＆レストラン",
    nav_survival: "旅行サバイバルガイド",
    nav_saved: "お気に入り",
    search_placeholder: "観光地、グルメ、地区で検索 (例: 鎮海、桜、韓屋)...",
    hero_title: "自然・海・歴史が調和する都市、昌原(チャンウォン)へ",
    hero_desc: "世界的に famous な鎮海軍港祭の桜、馬山(マサン)の美しい海辺のプロムナード、豊かな文化遺産を体験してください。",
    btn_explore: "人気スポットを見る",
    btn_plan: "旅程を作成する",
    hero_badge_season: "🌸 ベストシーズン: 春 (鎮海軍港祭 桜シーズン)",
    
    weather_title: "本日の昌原の天気",
    weather_status: "快晴・快適",
    weather_temp: "22°C",
    weather_tip: "余佐川や龍池湖散策に最適な天気です！",
    currency_title: "為替レート計算機",
    currency_amount: "韓国ウォン金額 (₩):",

    cat_all: "すべて",
    cat_blossom_nature: "🌸 桜＆自然・生態",
    cat_heritage: "🏯 歴史＆伝統文化",
    cat_marine: "🌊 海洋＆ビーチ",
    cat_art_shopping: "🎨 アート＆ショッピング",
    cat_food_nightlife: "🍢 グルメ＆夜景",

    sec_attractions_title: "昌原の必見おすすめ観光地",
    sec_attractions_sub: "外国人旅行者のために厳選された代表スポット",
    sec_map_title: "マップ＆地区別探索",
    sec_map_sub: "マップ上のピンをクリックしてアクセス方法と旅行ヒントを確認",
    sec_itinerary_title: "スマート旅程プランナー",
    sec_itinerary_sub: "旅行日数と好みに合わせたおすすめコース",
    sec_food_title: "昌原の代表ローカルグルメ",
    sec_food_sub: "馬山アンコウ蒸し(アグ찜)、鎮海桜パン、新鮮な魚市場刺身",
    sec_survival_title: "外国人旅行者サバイバルキット",
    sec_survival_sub: "交通ガイド、緊急連絡先、タクシー運転手提示用韓国語カード",

    btn_taxi_card: "🚕 タクシーで見せる",
    btn_details: "詳細を見る",
    btn_save: "保存",
    btn_saved: "保存済み",
    btn_view_map: "地図で見る",
    label_district: "地区",
    label_hours: "営業時間",
    label_admission: "入場料",
    label_transport: "アクセス",
    label_taxi_address: "タクシー用韓国語住所",
    label_taxi_phrase: "運転手への提示文",
    btn_copy: "住所をコピー",
    btn_copied: "コピー完了！",
    btn_tts: "🔊 音声を再生",

    itin_duration: "旅行期間",
    itin_duration_1: "1日日帰りコース",
    itin_duration_2: "2日ハイライトコース",
    itin_duration_3: "3日完全制覇コース",
    itin_style: "旅行テーマ",
    itin_style_nature: "自然＆写真撮影",
    itin_style_heritage: "文化＆伝統体験",
    itin_style_marine: "海＆グルメめぐり",
    itin_generate_btn: "✨ コースを生成",

    surv_tab_transport: "🚍 KTX＆市内交通",
    surv_tab_emergency: "🆘 緊急連絡先＆1330",
    surv_tab_taxi: "🚕 タクシー韓国語会話",
    surv_tab_wifi: "📶 無料Wi-Fi＆SIM",

    footer_tagline: "韓国慶尚南道昌原市へようこそ。",
    footer_hotline: "韓国観光公社ヘルプライン: 1330 (24時間, 多言語対応)",
    footer_copy: "© 2026 Visit Changwon Foreign Tourist Portal."
  },
  zh: {
    brand_title: "VISIT CHANGWON",
    brand_subtitle: "韩国昌原市外国游客综合旅游指南 portal",
    nav_home: "首页",
    nav_attractions: "热门景点",
    nav_itinerary: "智能行程规划",
    nav_map: "互动地图",
    nav_food: "美食与餐厅",
    nav_survival: "游客生存指南",
    nav_saved: "我的收藏",
    search_placeholder: "搜索景点、美食或区域 (如：镇海、樱花、韩屋)...",
    hero_title: "探索昌原：自然、海洋与历史交汇之地",
    hero_desc: "体验闻名世界的镇海军港祭樱花节、马山海滨步道以及丰富的文化遗产。",
    btn_explore: "探索热门景点",
    btn_plan: "生成定制行程",
    hero_badge_season: "🌸 最佳旅行季节：春季 (镇海军港祭樱花季)",
    
    weather_title: "今日昌原天气",
    weather_status: "晴朗舒适",
    weather_temp: "22°C",
    weather_tip: "非常适合在余佐川和龙池湖散步！",
    currency_title: "实时汇率换算",
    currency_amount: "韩元金额 (₩):",

    cat_all: "全部景点",
    cat_blossom_nature: "🌸 樱花与自然",
    cat_heritage: "🏯 历史与文化",
    cat_marine: "🌊 海洋与海滨",
    cat_art_shopping: "🎨 艺术与购物",
    cat_food_nightlife: "🍢 美食与夜生活",

    sec_attractions_title: "昌原必游景点推荐",
    sec_attractions_sub: "为国际游客精心挑选的昌原代表性景点",
    sec_map_title: "按区域与地图探索",
    sec_map_sub: "点击地图上的标记查看交通与游玩提示",
    sec_itinerary_title: "AI 智能行程规划器",
    sec_itinerary_sub: "根据您的停留时间与偏好量身定制推荐路线",
    sec_food_title: "昌原地道美食宝典",
    sec_food_sub: "品尝马山辣炖安康鱼、镇海樱花饼与马山水产市场新鲜海鲜",
    sec_survival_title: "外国游客生存指南",
    sec_survival_sub: "交通指南、紧急求助电话与出租车司机专看韩语卡片",

    btn_taxi_card: "🚕 出示给出租车司机",
    btn_details: "查看详情",
    btn_save: "收藏",
    btn_saved: "已收藏",
    btn_view_map: "在地图中查看",
    label_district: "行政区",
    label_hours: "开放时间",
    label_admission: "门票",
    label_transport: "交通方式",
    label_taxi_address: "出租车韩文地址",
    label_taxi_phrase: "对司机说",
    btn_copy: "复制地址",
    btn_copied: "已复制！",
    btn_tts: "🔊 播放语音",

    itin_duration: "游览天数",
    itin_duration_1: "1日精华游",
    itin_duration_2: "2日经典游",
    itin_duration_3: "3日深度体验游",
    itin_style: "旅行主题",
    itin_style_nature: "自然与摄影",
    itin_style_heritage: "文化与传统",
    itin_style_marine: "海洋与美食",
    itin_generate_btn: "✨ 生成行程",

    surv_tab_transport: "🚍 KTX与市内交通",
    surv_tab_emergency: "🆘 紧急求助与1330热线",
    surv_tab_taxi: "🚕 常用出租车韩语",
    surv_tab_wifi: "📶 免费Wi-Fi与SIM卡",

    footer_tagline: "热忱欢迎您访问韩国庆尚南道昌原市。",
    footer_hotline: "韩国旅游咨询热线：1330 (24小时多语言支持)",
    footer_copy: "© 2026 Visit Changwon Foreign Tourist Portal."
  }
};

const ATTRACTIONS = [
  {
    id: "jinhae_yeojwa",
    district: "Jinhae-gu",
    category: "blossom_nature",
    name: {
      en: "Yeojwa Stream & Romance Bridge (Jinhae)",
      ko: "여좌천 로망스다리 (진해)",
      ja: "余佐川(ヨザチョン) ロマンス橋",
      zh: "余佐川罗曼史桥 (镇海)"
    },
    summary: {
      en: "World-renowned cherry blossom tunnel spanning over 1.5km across a serene stream.",
      ko: "1.5km에 달하는 화려한 벚꽃 터널과 밤 야경이 아름다운 세계적 벚꽃 명소.",
      ja: "1.5kmにわたる満開の桜のトンネルと美しい夜景で知られる世界的な桜の名所。",
      zh: "长达1.5公里的粉色樱花隧道，夜间灯光秀尤为迷人。"
    },
    description: {
      en: "Yeojwa Stream is the centerpiece of the annual Jinhae Gunhangje Cherry Blossom Festival, Korea's largest spring festival. Hundreds of weeping cherry trees frame the canal, creating a magical canopy. Illuminated with lanterns and art installations at night.",
      ko: "진해군항제의 메인 명소로, 스트림 양옆으로 만개하는 벚꽃 터널과 은은한 조명이 환상적인 분위기를 연출합니다.",
      ja: "韓国最大の春の祭り「鎮海軍港祭」のメインスポット。小川の両側に咲き誇る桜並木がロマンチックな雰囲気を演出します。",
      zh: "镇海军港祭的核心景点，溪流两旁盛开的樱花构成极具浪漫气息的粉色长廊。"
    },
    image: "images/jinhae_cherry_blossom.png",
    rating: 4.9,
    reviewsCount: 3840,
    koreanAddress: "경상남도 창원시 진해구 여좌동 217",
    taxiPhrase: "기사님, 진해 여좌천 로망스다리로 가주세요.",
    transport: {
      en: "Take Bus #760 or #307 from Changwon Station / Jinhae Intercity Bus Terminal to 'Yeojwa-dong' stop (10-min walk).",
      ko: "창원역 또는 진해시외버스터미널에서 760번 또는 307번 버스 탑승 후 여좌동 하차.",
      ja: "昌原駅または鎮海市外バ스터ミナルから760番・307番バス乗車、「余佐洞」下車。",
      zh: "从昌原站或镇海市外长途客运站乘 760路 或 307路 公交至“余佐洞”站。"
    },
    hours: "Open 24/7 (Best visited mid-March to early April)",
    admission: "Free Access",
    coordinates: [35.1558, 128.6592],
    isMustVisit: true
  },
  {
    id: "jinhae_gyeonghwa",
    district: "Jinhae-gu",
    category: "blossom_nature",
    name: {
      en: "Gyeonghwa Station Cherry Blossom Railway",
      ko: "경화역 벚꽃 길 (진해)",
      ja: "慶和(キョンファ)駅 桜鉄道",
      zh: "庆和站樱花路 (镇海)"
    },
    summary: {
      en: "Iconic disused railway lined with dense cherry blossoms, named one of CNN's 50 Beautiful Places in Korea.",
      ko: "CNN 선정 한국에서 가볼 만한 아름다운 50곳, 800m 벚꽃 기찻길.",
      ja: "CNN選定「韓国で最も美しい50選」に選ばれた800mの桜鉄道敷。",
      zh: "CNN评选韩国50大绝美景点之一，800米长古朴铁路与粉樱重叠。"
    },
    description: {
      en: "Gyeonghwa Station features an 800-meter railway track flanked by hundreds of cherry blossom trees. Visitors can walk along the tracks, take photos with vintage train models, and enjoy falling petal showers.",
      ko: "800m 철길을 따라 벚꽃비가 내리는 장관을 이루는 명소로, 레트로 기차 모형과 함께 인증샷을 찍기 좋습니다.",
      ja: "800mの線路沿いに桜吹雪が舞う絶景スポット。レトロな列車との写真撮影が人気です。",
      zh: "沿800米废弃铁轨漫步，欣赏洒落的樱花雨，并与复古火车拍照留念。"
    },
    image: "images/jinhae_cherry_blossom.png",
    rating: 4.8,
    reviewsCount: 2910,
    koreanAddress: "경상남도 창원시 진해구 경화동 850-3",
    taxiPhrase: "기사님, 진해 경화역 벚꽃길로 가주세요.",
    transport: {
      en: "Bus #307, #309, #315 to 'Gyeonghwa Station' stop.",
      ko: "307, 309, 315번 버스 탑승 후 경화역 정류장 하차.",
      ja: "307、309、315番バス「慶和駅」停留所下車。",
      zh: "乘坐 307、309、315路 公交至“庆和站”下车。"
    },
    hours: "Open 24/7",
    admission: "Free Access",
    coordinates: [35.1432, 128.6755],
    isMustVisit: true
  },
  {
    id: "house_of_changwon",
    district: "Uichang-gu",
    category: "heritage",
    name: {
      en: "House of Changwon (Hanok Village)",
      ko: "창원의 집 (전통 한옥)",
      ja: "昌原(チャンウォン)の家 (伝統韓屋)",
      zh: "昌原之家 (传统韩屋)"
    },
    summary: {
      en: "Authentic Joseon-era traditional Hanok compound surrounded by lush green bamboo groves.",
      ko: "조선시대 선비의 정취가 살아있는 고즈넉한 대나무 숲과 한옥 체험 공간.",
      ja: "朝鮮時代の士大夫の邸宅を復원した静かな竹林と韓屋の伝統文化空間。",
      zh: "朝鲜时代士大夫宅邸，竹林环绕，体验精致传统的韩屋与茶道文化。"
    },
    description: {
      en: "Built over 200 years ago, this beautifully preserved Hanok site includes traditional living quarters, pavilions, watermills, and an interactive Korean Folk Culture Museum. Excellent location for Hanbok photography.",
      ko: "200여 년 전 건축된 조선시대 한옥으로, 안채, 사랑채, 물레방아, 대나무 숲길이 유기적으로 어우러져 한복 사진 촬영에 제격입니다.",
      ja: "200年前に建てられた本物のアノク(韓屋)。静寂な竹林の小道や水車があり、チマチョゴリ(韓服)での写真撮影に最適です。",
      zh: "拥有200年历史的传统韩屋，配有古朴门楼、水车与竹林，非常适合穿韩服拍照。"
    },
    image: "images/house_of_changwon.png",
    rating: 4.7,
    reviewsCount: 1850,
    koreanAddress: "경상남도 창원시 의창구 사림로16번길 25 (창원의 집)",
    taxiPhrase: "기사님, 의창구 사림동 '창원의 집'으로 가주세요.",
    transport: {
      en: "Take Bus #100, #103, #110 to 'Changwon National University Gate' or 'House of Changwon' stop.",
      ko: "100번, 103번, 110번 버스 탑승 후 창원의집 정류장 하차.",
      ja: "100番、103番、110番バス「昌原の家」停留所下車。",
      zh: "乘坐 100路、103路、110路 公交在“昌原之家”站下车。"
    },
    hours: "09:00 - 18:00 (Closed Mondays)",
    admission: "Free Admission",
    coordinates: [35.2447, 128.6942],
    isMustVisit: true
  },
  {
    id: "masan_marine_kwangang",
    district: "Masan-gu",
    category: "marine",
    name: {
      en: "Jeudo Kwangang River Skywalk Bridge",
      ko: "저도 연륙교 (콰이강의 다리 스카이워크)",
      ja: "猪島(猪島)連陸橋 葵江の橋スカイウォーク",
      zh: "猪岛连陆桥 桂河大桥玻璃天空步道"
    },
    summary: {
      en: "Thrilling glass skywalk suspended over the ocean offering sunset ocean views and love padlocks.",
      ko: "투명 유리 바닥 위로 탁 트인 남해 바다가 펼쳐지는 스릴 만점 스카이워크와 석양 명소.",
      ja: "透明なガラス床越しに海を見下ろすスリル満点のススカイウォークと絶景の夕日。",
      zh: "玻璃底桥面横跨蔚蓝大海，可饱览迷人夕阳海景，提供爱情锁墙。"
    },
    description: {
      en: "Nicknamed the 'Bridge over the River Kwai', this famous red pedestrian bridge was transformed into a glass skywalk. Walk 13.5 meters above ocean waves while wearing special shoe covers.",
      ko: "영화 '콰이강의 다리'를 닮아 이름 붙여진 붉은 연륙교로, 바닥 중앙에 강화유리 스카이워크가 설치되어 바다 위를 걷는 기분을 선사합니다.",
      ja: "映画に由来して名付けられた赤い橋。中央部が強化ガラスのスカイウォークになっており、海の上を歩く感覚を味わえます。",
      zh: "因酷似电影《桂河大桥》而得名，红色钢桥中央设有透明玻璃步道，犹如行走在凌空海面上。"
    },
    image: "images/masan_marine_park.png",
    rating: 4.8,
    reviewsCount: 2210,
    koreanAddress: "경상남도 창원시 마산합포구 구산면 해양관광로 1872-60",
    taxiPhrase: "기사님, 마산 구산면 '저도 콰이강의 다리 스카이워크'로 가주세요.",
    transport: {
      en: "Take Bus #63 from Masan Intercity Bus Terminal to 'Jeudo Bridge' terminal stop (approx 45 min).",
      ko: "마산시외버스터미널에서 63번 시내버스 탑승 후 종점 저도 연륙교 하차.",
      ja: "馬山市外バスターミナルから63番バス乗車、終点「猪島連陸橋」下車。",
      zh: "从马山市外长途客运站乘坐 63路 公交至终点站“猪岛连陆桥”。"
    },
    hours: "09:00 - 22:00 (March to October), 09:00 - 21:00 (Winter)",
    admission: "Free Access",
    coordinates: [35.0842, 128.5831],
    isMustVisit: true
  },
  {
    id: "yongji_lake",
    district: "Seongsan-gu",
    category: "blossom_nature",
    name: {
      en: "Yongji Lake Park & Moving Boat Experience",
      ko: "용지호수공원 & 무빙보트",
      ja: "龍池(ヨンジ)湖水公園 ＆ ムービングボート",
      zh: "龙池湖水公园 与 游艇体验"
    },
    summary: {
      en: "Central urban oasis featuring night water music light shows, floating art sculptures, and electric boats.",
      ko: "음악분수와 대형 달모형 포토존, 무빙보트 체험이 가득한 창원 도심 속 랜드마크 공원.",
      ja: "音楽噴水、巨大な月のオブジェ、電動ボート体験が楽しめる昌原中心部のオアシス。",
      zh: "集水舞喷泉、大月亮艺术装置与电动游艇于一体的城市水岸公园。"
    },
    description: {
      en: "Located in the heart of Changwon city center, Yongji Lake is famous for its evening musical fountain show and floating 'Giant Moon' installation. Visitors can rent electric Moving Boats for private picnics on the lake.",
      ko: "도심 한가운데 위치한 3.8km 산책로의 수변 공원으로, 밤마다 펼쳐지는 화려한 음악 분수쇼와 호수 위를 떠다니는 무빙보트 체험이 인기입니다.",
      ja: "市中心部に位置する美しい湖畔公園。夜には音楽と光の噴水ショーが開催され、円形電動ボートのレジャーも大人気です。",
      zh: "坐落于市中心，提供音乐喷泉水秀、大月亮夜景拍照点以及湖上电动小船休闲体验。"
    },
    image: "images/masan_marine_park.png",
    rating: 4.7,
    reviewsCount: 3120,
    koreanAddress: "경상남도 창원시 성산구 용지로 169 (용지호수공원)",
    taxiPhrase: "기사님, 성산구 용지호수공원 음악분수대 쪽으로 가주세요.",
    transport: {
      en: "Take Bus #101, #103, #111 to 'Changwon City Hall' or 'Yongji Lake' stop.",
      ko: "101, 103, 111번 버스 탑승 후 창원시청 또는 용지호수 정류장 하차.",
      ja: "101、103、111番バス「昌原市庁」または「龍池湖」下車。",
      zh: "乘坐 101、103、111路 公交至“昌原市政厅”或“龙池湖”站。"
    },
    hours: "Park open 24 Hours (Fountain Show 19:30, 20:30 seasonally)",
    admission: "Free (Moving boat fee KRW 20,000 per boat for 4 people)",
    coordinates: [35.2285, 128.6811],
    isMustVisit: true
  },
  {
    id: "changdong_art_village",
    district: "Masan-gu",
    category: "art_shopping",
    name: {
      en: "Changdong Art Village & Agora Alley",
      ko: "창동예술촌 & 아고라 골목",
      ja: "倉洞(チャンドン)芸術村 ＆ アゴラ路地",
      zh: "仓洞艺术村 与 艺术巷弄"
    },
    summary: {
      en: "Retro artistic alleyways with craft workshops, art galleries, vintage cafes, and vibrant murals.",
      ko: "마산 구도심의 골목길을 예술가들의 공방, 갤러리, 앤틱 카페로 재생시킨 핫플레이스.",
      ja: "レトロな路地に芸術家の工房、ギャラリー、ヴィンテージカフェが集まるアートの街。",
      zh: "将复古马山旧街巷重构成包含艺术工坊、画廊和怀旧咖啡馆的创意街区。"
    },
    description: {
      en: "Transformed from historic commercial alleys into a bohemian art sanctuary, Changdong Art Village features over 50 artist studios, craft shops (pottery, leather, glass), murals, and historic bakeries like Koryo Dang.",
      ko: "50여 개의 공방과 갤러리가 골목골목 숨어있으며, 7080 감성의 골목벽화와 창원의 오래된 제과점 고려당 등을 함께 즐길 수 있습니다.",
      ja: "50以上の工房やギャラリーが路地に点在。レトロな雰囲気の壁画や歴史ある洋菓子店「高麗堂」を楽しめます。",
      zh: "汇聚了50多家各类工坊与画廊，街巷满是艺术壁画，还可探访历史悠久的高丽堂老字号面包店。"
    },
    image: "images/house_of_changwon.png",
    rating: 4.6,
    reviewsCount: 1420,
    koreanAddress: "경상남도 창원시 마산합포구 창동거리길 24",
    taxiPhrase: "기사님, 마산 창동예술촌 입구로 가주세요.",
    transport: {
      en: "15-min walk from Masan Fish Market or Bus #100, #105 to 'Changdong' stop.",
      ko: "마산어시장에서 도보 15분, 또는 100, 105번 버스 탑승 후 창동 하차.",
      ja: "馬山魚市場から徒歩15分、または100・105番バス「倉洞」下車。",
      zh: "从马山水产市场步行约15分钟，或乘 100、105路 公交在“仓洞”站下车。"
    },
    hours: "Alleys open 24/7 (Workshops usually 10:00 - 19:00)",
    admission: "Free Entry",
    coordinates: [35.2052, 128.5724],
    isMustVisit: false
  },
  {
    id: "junam_reservoir",
    district: "Uichang-gu",
    category: "blossom_nature",
    name: {
      en: "Junam Eco Wetlands & Migratory Bird Sanctuary",
      ko: "주남저수지 생태습지",
      ja: "注南(チュナム)貯水池 渡り鳥飛来地",
      zh: "注南水库 渡鸟生态湿地"
    },
    summary: {
      en: "Premier wetland sanctuary hosting over 100,000 wintering migratory birds with scenic reed trails.",
      ko: "수만 마리의 가창오리와 철새들이 찾아오는 동양 최대 규모의 생태 습지 산책로.",
      ja: "数万羽のトモエガモや渡り鳥が飛来する東洋最大級の自然生態保護湿地。",
      zh: "东亚宏大的候鸟越冬栖息地之一，拥有绝美的大片芦苇荡与步行栈道。"
    },
    description: {
      en: "Junam Reservoir is East Asia's critical migratory bird haven. Features scenic wooden boardwalks, telescopes at the Eco-Center, reed fields, and bicycle trails.",
      ko: "가창오리의 군무와 고니, 두루미 등 희귀 철새를 관찰할 수 있는 람사르 생태 습지로, 갈대밭 탐방로를 따라 걷기 좋습니다.",
      ja: "渡り鳥の壮大な群舞や白鳥を観察できる湿地。かやの群生地の遊歩道はハイキングに人気です。",
      zh: "可观赏成千上万候鸟的起飞壮观场景，漫步于芦苇步道，感受大自然的宁静与生机。"
    },
    image: "images/jinhae_cherry_blossom.png",
    rating: 4.8,
    reviewsCount: 1680,
    koreanAddress: "경상남도 창원시 의창구 동읍 주남로101번길 26 (주남저수지)",
    taxiPhrase: "기사님, 의창구 동읍 주남저수지 람사르문화관으로 가주세요.",
    transport: {
      en: "Take Bus #40, #41, #42 from Changwon Station to 'Junam Reservoir' terminal stop.",
      ko: "창원역에서 40, 41, 42번 버스 탑승 후 주남저수지 하차.",
      ja: "昌原駅から40、41、42番バス乗車、「注南貯水池」下車。",
      zh: "从昌原站乘 40、41、42路 公交直达“注南水库”下车。"
    },
    hours: "09:30 - 17:30 (Eco Center), Wetlands trail open sunrise to sunset",
    admission: "Free Admission",
    coordinates: [35.3121, 128.6789],
    isMustVisit: false
  },
  {
    id: "masan_robot_land",
    district: "Masan-gu",
    category: "art_shopping",
    name: {
      en: "Masan Robot Land Theme Park",
      ko: "마산 로봇랜드 테마파크",
      ja: "馬山(マサン)ロボットランド",
      zh: "马山机器人主题乐园"
    },
    summary: {
      en: "Futuristic theme park combining high-speed rollercoasters, AI robot exhibits, and coastal views.",
      ko: "세계 최초 로봇 테마파크로, 짜릿한 놀이기구와 최첨단 AI 로봇 체험관이 융합된 곳.",
      ja: "世界初のロボットテーマパーク。絶叫アトラクションと先端AIロボットの体験館が融合。",
      zh: "全球首个以机器人为主题的大型乐园，兼具刺激的过山车与前沿AI机器人展馆。"
    },
    description: {
      en: "Spread over a vast coastal landscape, Robot Land features 22 thrilling rides (including the Thunderbolt coaster with a vertical drop) and 11 futuristic robot experience pavilions suitable for families and thrill-seekers.",
      ko: "수직 하강 스릴을 자랑하는 쾌속 코스터와 11개 로봇 체험관에서 미래 기술을 만끽할 수 있는 창원의 대표 테마파크입니다.",
      ja: "垂直落下ローラーコースターを含む22のアトラクションと、最先端技術を体験できる11のロボット館を完備。",
      zh: "拥有垂直俯冲过山车等22项游乐设施，以及11个充满未来科技感的机器人展馆。"
    },
    image: "images/masan_marine_park.png",
    rating: 4.6,
    reviewsCount: 1940,
    koreanAddress: "경상남도 창원시 마산합포구 구산면 로봇랜드로 250",
    taxiPhrase: "기사님, 마산 구산면 로봇랜드 정문으로 가주세요.",
    transport: {
      en: "Shuttle bus or Bus #64 from Masan Intercity Bus Terminal directly to 'Robot Land' entrance.",
      ko: "마산시외버스터미널에서 64번 버스 탑승 후 로봇랜드 정문 하차.",
      ja: "馬山市外バスターミナルから64番バス「ロボットランド正門」下車。",
      zh: "从马山市外长途客运站乘 64路 公交直达“机器人乐园正门”。"
    },
    hours: "10:00 - 18:00 (Weekdays), 10:00 - 19:30 (Weekends & Holidays)",
    admission: "Adult KRW 35,000 (Discount available online)",
    coordinates: [35.0754, 128.5672],
    isMustVisit: false
  },
  {
    id: "naeseo_gamcheon",
    district: "Masan-gu",
    category: "blossom_nature",
    name: {
      en: "Gamcheon-ri Eco Village & Valley (Naeseo)",
      ko: "내서 감천리 마을 & 계곡",
      ja: "内西(ネソ) 甘泉里(カムチョンリ) 村＆渓谷",
      zh: "内西甘泉里 生态村与溪谷"
    },
    summary: {
      en: "Peaceful countryside sanctuary surrounded by clear mountain streams, stone walls, and green walking trails.",
      ko: "무학산 아래 맑은 계곡물과 돌담길, 청정 자연 정취가 흐르는 내서읍의 힐링 마을.",
      ja: "舞鶴山の麓、澄んだ渓谷と石垣の小道が広がる静寂な自然癒しの村。",
      zh: "舞鹤山脚下，清澈溪流与石墙步道交织的静谧乡村生态秘境。"
    },
    description: {
      en: "Gamcheon-ri in Naeseo-eup is a hidden natural sanctuary in Changwon. Famous for its crystal-clear valley streams flowing down from Muhak Mountain, peaceful walking paths along traditional stone walls, and serene rural hospitality away from urban busyness.",
      ko: "창원시 마산회원구 내서읍에 위치한 감천리는 무학산의 깨끗한 감천계곡과 정겨운 돌담길, 청정한 시골 풍경을 자랑하는 대표적인 힐링 마을입니다. 한적한 시골 산책과 자연 휴양에 완벽한 명소입니다.",
      ja: "昌原市内西邑にある甘泉里は、舞鶴山から流れる清らかな渓谷水と伝統的な石垣の道、美しい田園風景が広がる癒しの村です。のんびりとした散策に最適です。",
      zh: "位于昌原市内西邑的甘泉里坐拥舞鹤山流淌而下的山泉溪谷与朴素石墙小道，是感受韩国原始乡村自然美景与放松身心的理想胜地。"
    },
    image: "images/gamcheon_ri_village.png",
    rating: 4.8,
    reviewsCount: 950,
    koreanAddress: "경상남도 창원시 마산회원구 내서읍 감천리 (감천계곡)",
    taxiPhrase: "기사님, 마산 내서읍 감천리 감천계곡 입구로 가주세요.",
    transport: {
      en: "Take Bus #111, #113, or #257 from Masan Station / Intercity Terminal to 'Naeseo Gamcheon' stop.",
      ko: "마산역 또는 시외버스터미널에서 111, 113, 257번 버스 탑승 후 내서 감천 마을 하차.",
      ja: "馬山駅または市外バスターミナルから111・113・257番バス「内西甘泉」下車。",
      zh: "从马山站或市外客运站乘坐 111、113、257路 公交在“内西甘泉”站下车。"
    },
    hours: "Open 24/7 (Best visited in Summer for valley streams & Autumn for mountain views)",
    admission: "Free Access",
    coordinates: [35.2155, 128.5120],
    isMustVisit: true
  },
  {
    id: "changwon_nc_park",
    district: "Masan-gu",
    category: "art_shopping",
    name: {
      en: "Changwon NC Park (NC Dinos Ballpark)",
      ko: "창원 NC 파크 야구장 (NC 다이노스 홈구장)",
      ja: "昌原(チャンウォン) NCパーク (NCダイノス球場)",
      zh: "昌原 NC Park 棒球场 (NC Dinos 主场)"
    },
    summary: {
      en: "State-of-the-art major league style baseball stadium featuring passionate K-Baseball cheering, craft beer & local food.",
      ko: "메이저리그급 최첨단 시설과 열정적인 K-야구 응원 문화, 치맥 및 미식을 즐기는 대표 야구장.",
      ja: "メジャーリーグ級の最新設備と熱狂的な韓国プロ野球応援文化、チ맥(チキン＆ビール)を楽しむボールパーク。",
      zh: "具备大联盟级别的现代棒球场，可现场切身体验热情的韩国K-棒球加油文化与炸鸡啤酒大餐。"
    },
    description: {
      en: "Opened in 2019, Changwon NC Park is considered one of Asia's finest baseball venues. Home to the NC Dinos, it offers barrier-free 360-degree concourses, commercial team shops, craft breweries, gourmet food stalls, and an electrifying cheering atmosphere.",
      ko: "2019년 개장한 메이저리그급 관람 친화형 야구장으로, 360도 전구장 관람 복도와 NC 다이노스 굿즈샵, 수제맥주, 치킨 등 K-야구 고유의 응원 문화와 맛집을 만끽할 수 있는 창원의 열정적인 랜드마크입니다.",
      ja: "2019年に開場したメジャーリーグ級の最新球場。360度回廊型のコンコースや公式グッズショップ、チキンやビールを楽しみながら熱狂的なプロ野球応援を体験できます。",
      zh: "2019年落成的亚洲先进棒球场之一，拥360度全景看台、官方周边商店及丰富的美食摊位，呈现震撼的热血K-棒球助威盛况。"
    },
    image: "images/changwon_nc_park.png",
    rating: 4.9,
    reviewsCount: 4120,
    koreanAddress: "경상남도 창원시 마산회원구 삼호로 63 (창원 NC파크)",
    taxiPhrase: "기사님, 마산 양덕동 창원 NC파크 야구장 정문으로 가주세요.",
    transport: {
      en: "Take Bus #100, #101, #108, #162 from Masan KTX Station (approx. 10 min).",
      ko: "마산 KTX역에서 100번, 101번, 108번, 162번 버스 탑승 후 창원NC파크 하차 (약 10분).",
      ja: "馬山KTX駅から100・101・108・162番バス「昌原NCパーク」下車(約10分)。",
      zh: "从马산 KTX站乘 100、101、108、162路 公交至“昌原 NC Park”站下车 (约10分钟)。"
    },
    hours: "Game days: Gates open 2 hours before match; Team Shop 11:00 - 21:00",
    admission: "Ticket prices KRW 11,000 - 35,000",
    coordinates: [35.2225, 128.5822],
    isMustVisit: true
  }
];

const FOOD_GUIDE = [
  {
    id: "masan_agwjjim",
    name: {
      en: "Masan Agwjjim (Spicy Braised Anglerfish)",
      ko: "마산 아구찜 (말린 아귀찜)",
      ja: "馬山(マサン) アグ찜 (アンコウの蒸し煮)",
      zh: "马山辣炖安康鱼 (Agwjjim)"
    },
    tag: "Authentic Local Speciality",
    desc: {
      en: "Masan's signature dish made with naturally sun-dried monkfish braised in spicy red pepper paste with soybean sprouts and sea squirts.",
      ko: "해풍에 바짝 말린 아귀를 특제 양념과 콩나물, 미더덕과 함께 화끈하게 찌어낸 마산 대표 향토 음식.",
      ja: "潮風で天日干ししたアンコウを特製コチュジャンとモヤシでピリ辛に蒸し煮した馬山名物名物料理。",
      zh: "采用海风自然晾干的安康鱼，搭配特制辣酱、豆芽与海鞘爆炒焖炖，风味独特。"
    },
    recommendedLoc: "Masan Agwjjim Alley (마산 아구찜 골목)",
    image: "images/house_of_changwon.png"
  },
  {
    id: "jinhae_blossom_bread",
    name: {
      en: "Jinhae Cherry Blossom Bread (Cherry Pastry)",
      ko: "진해 벚꽃빵 (진해제과)",
      ja: "鎮海(ジネ) 桜パン (桜あん入り)",
      zh: "镇海樱花饼 (Jinhae Cherry Blossom Bread)"
    },
    tag: "Must-Try Dessert",
    desc: {
      en: "Delicate flower-shaped pastry filled with real cherry blossom extract and sweet bean paste. Perfect souvenir!",
      ko: "진짜 벚꽃 엑기스가 들어간 분홍빛 앙금이 들어있는 벚꽃 모양의 핑거 푸드 디저트.",
      ja: "本物の桜エキスが入ったピンク色の餡を包んだ可愛い桜型の焼き菓子。お土産に大人気！",
      zh: "造型宛如粉嫩樱花，内馅融入天然樱花提炼精华，甜而不腻，是非常受欢迎的纪念伴手礼。"
    },
    recommendedLoc: "Jinhae Bakery (진해제과 본점)",
    image: "images/jinhae_cherry_blossom.png"
  },
  {
    id: "masan_fish_market",
    name: {
      en: "Masan Fish Market Fresh Sashimi & Seafood",
      ko: "마산어시장 싱싱한 모듬회",
      ja: "馬山(マサン)魚市場 新鮮刺身セット",
      zh: "马山水产市场 现切拼盘刺身"
    },
    tag: "Seafood Feast",
    desc: {
      en: "Over 250 years of history! Pick your live seafood straight from giant saltwater tanks and have it sliced fresh.",
      ko: "250년 역사를 자랑하는 남해안 최대 어시장에서 갓 잡아 올린 신선한 회와 갓 끓여낸 매운탕.",
      ja: "250年の歴史を誇る魚市場。水槽から選んだ新鮮な魚をその場で刺身やアラ鍋にして味わえます。",
      zh: "拥有250多年历史的大型海鲜市场，现场挑选新鲜活鱼切片作刺身，配以鲜美辣鱼汤。"
    },
    recommendedLoc: "Masan Fish Market Sashimi Street (마산어시장 횟집거리)",
    image: "images/masan_marine_park.png"
  }
];

const PRESET_ITINERARIES = [
  {
    id: "itin_1day",
    duration: 1,
    title: {
      en: "1-Day Jinhae Blossom & Heritage Express",
      ko: "1일 진해 벚꽃 & 한옥 당일치기 코스",
      ja: "1日 鎮海桜＆伝統韓屋エクスプレス",
      zh: "1日 镇海赏樱与传统韩屋快线"
    },
    desc: {
      en: "Ideal for travelers short on time who want to experience Changwon's top highlights: Romance Bridge, Gyeonghwa Railway, and House of Changwon.",
      ko: "여좌천 로망스다리, 경화역 벚꽃길, 창원의 집을 하루 만에 알차게 둘러보는 코스.",
      ja: "余佐川、慶和駅、昌原の家を1日で効率よく巡る王道観光コース。",
      zh: "打卡余佐川罗曼史桥、庆和站与昌原之家，一日高效游览 Changwon 核心名胜。"
    },
    steps: [
      { time: "09:30 AM", place: "Gyeonghwa Station Railway", note: "Morning photo walk along the iconic cherry blossom tracks." },
      { time: "11:30 AM", place: "Yeojwa Stream Romance Bridge", note: "Walk through the blossom tunnel & try Jinhae Blossom Bread." },
      { time: "01:00 PM", place: "Lunch: Jinhae Local Cuisine", note: "Enjoy Korean BBQ or Bibimbap near Jinhae station." },
      { time: "03:00 PM", place: "House of Changwon Hanok", note: "Explore traditional Korean architecture & bamboo trails." },
      { time: "06:30 PM", place: "Yongji Lake Night Fountain", note: "Relax by the lake and watch the evening music water show." }
    ]
  },
  {
    id: "itin_2day",
    duration: 2,
    title: {
      en: "2-Day Coastal Marine & Art Adventure",
      ko: "2일 마산 해양 & 아고라 예술 탐방",
      ja: "2日 馬山海洋＆アートアドベンチャー",
      zh: "2日 马山海滨与艺术巷弄之旅"
    },
    desc: {
      en: "Combines Jinhae's nature with Masan's thrilling ocean glass skywalk, retro art village, and fresh fish market feast.",
      ko: "진해 벚꽃 탐방 후 마산 콰이강의 다리 스카이워크, 창동예술촌, 마산어시장을 즐기는 2일 코스.",
      ja: "鎮海観光に加えて、馬山のスカイウォーク、芸術村、魚市場を堪能する2日間コース。",
      zh: "涵盖镇海风光，第二日沉浸于马山天空步道、仓洞艺术村与鲜美海鲜大餐。"
    },
    steps: [
      { time: "Day 1", place: "Jinhae Highlights & Yongji Lake Park", note: "Explore Yeojwa Stream, Gyeonghwa Station, and Yongji Lake night lights." },
      { time: "Day 2 Morning", place: "Jeudo Kwangang Skywalk Bridge", note: "Walk high over the ocean waves on glass floor." },
      { time: "Day 2 Afternoon", place: "Changdong Art Village", note: "Explore craft galleries, murals, and retro cafes." },
      { time: "Day 2 Evening", place: "Masan Fish Market & Agwjjim Dinner", note: "Feast on fresh sashimi or spicy Masan Agwjjim." }
    ]
  }
];

const RECOMMENDED_ROUTES = [
  {
    id: "route_baseball_sports",
    type: "야구 & 미식 특화 코스",
    badge: "⚾ [K-스포츠] 창원 NC 파크 & 야구장 직관 코스",
    title: {
      en: "Changwon NC Park Baseball Stadium & Masan Gourmet Tour",
      ko: "창원 NC파크 야구장 직관 & 마산 미식 당일 코스",
      ja: "昌原NCパーク野球観戦＆馬山グルメコース",
      zh: "昌原 NC Park 棒球观赛与马山美食一日游"
    },
    duration: "약 6~8시간 (Game Day Special)",
    transit: "🚄 KTX 마산역 ➔ 🚌 시내버스 100번 (10분) ➔ 🚕 택시 연계",
    stops: [
      { name: "KTX 마산역", icon: "🚄", travelTimeNext: "🚌 10분" },
      { name: "창원 NC파크 야구장", icon: "⚾", travelTimeNext: "🚕 12분" },
      { name: "마산어시장 회거리", icon: "🐟", travelTimeNext: "🚶 도보 8분" },
      { name: "창동예술촌 레트로 카페", icon: "☕", travelTimeNext: "도착" }
    ],
    steps: [
      { time: "14:00 - 15:00", place: "KTX 마산역 도착 & NC파크 이동", desc: "마산역 도착 후 시내버스 100번/108번으로 NC파크 직행 (10분 소요)" },
      { time: "15:00 - 16:30", place: "창원 NC파크 팀스토어 & 360도 투어", desc: "NC 다이노스 유니폼 구매 및 360도 전구장 컨코스 둘러보기" },
      { time: "17:00 - 20:00", place: "NC파크 야구 경기 직관 & 치맥", desc: "열정적인 K-야구 응원가에 맞춰 수제맥주와 치킨 야구장 먹방" },
      { time: "20:30 - 22:00", place: "마산어시장 회거리 / 마산 아구찜", desc: "경기 직후 신선한 모듬회 또는 매콤한 마산 아구찜 야식" }
    ]
  },
  {
    id: "route_blossom_eco",
    type: "자연 생태 코스",
    badge: "🌸 자연 & 내서 감천리 힐링 추천",
    title: {
      en: "Jinhae Blossom & Naeseo Gamcheon-ri Eco Route",
      ko: "진해 벚꽃 & 내서 감천리 생태 힐링 당일 코스",
      ja: "鎮海桜＆内西甘泉里エコヒーリングコース",
      zh: "镇海樱花与内西甘泉里生态治愈一日游"
    },
    duration: "약 7시간 (Approx. 7 Hours)",
    transit: "🚄 KTX 창원역 ➔ 🚌 시내버스 111번/760번",
    stops: [
      { name: "경화역 벚꽃길", icon: "🌸", travelTimeNext: "🚌 12분" },
      { name: "여좌천 로망스다리", icon: "🌉", travelTimeNext: "🚌 20분" },
      { name: "창원의 집 (한옥)", icon: "🏯", travelTimeNext: "🚌 25분" },
      { name: "내서 감천리 계곡", icon: "🏞️", travelTimeNext: "🚕 15분" },
      { name: "용지호수 야경", icon: "🌙", travelTimeNext: "도착" }
    ],
    steps: [
      { time: "09:30 - 11:00", place: "경화역 벚꽃 기찻길", desc: "800m 벚꽃 터널과 레트로 기차 배경 인증샷" },
      { time: "11:30 - 13:00", place: "여좌천 로망스다리 & 진해제과", desc: "벚꽃 터널 산책 및 벚꽃빵 시식" },
      { time: "14:00 - 15:30", place: "창원의 집 (전통 한옥)", desc: "고즈넉한 고택 한옥과 대나무 숲길 체험" },
      { time: "16:00 - 18:00", place: "내서 감천리 생태 마을 & 계곡", desc: "청정 계곡물과 시골 돌담길 힐링 산책" },
      { time: "18:30 - 20:00", place: "용지호수공원 음악분수", desc: "도심 야경과 달모형 포토존 & 수변 산책" }
    ]
  },
  {
    id: "route_marine_art",
    type: "해양 투어 코스",
    badge: "🌊 바다 & 해양 스카이워크",
    title: {
      en: "Masan Ocean Skywalk & Art Village 2-Day Route",
      ko: "마산 콰이강의 다리 & 창동예술촌 1박 2일 코스",
      ja: "馬山スカイウォーク＆倉洞芸術村2日コース",
      zh: "马山天空步道与仓洞艺术村二日游"
    },
    duration: "1박 2일 (2 Days / 1 Night)",
    transit: "🚕 택시 & 🚌 시내버스 63번/64번",
    stops: [
      { name: "마산어시장", icon: "🐟", travelTimeNext: "🚌 35분" },
      { name: "저도 콰이강의 다리", icon: "🌉", travelTimeNext: "🚕 15분" },
      { name: "마산 로봇랜드", icon: "🤖", travelTimeNext: "🚌 30분" },
      { name: "창동예술촌", icon: "🎨", travelTimeNext: "도착" }
    ],
    steps: [
      { time: "DAY 1 오찬", place: "마산어시장 횟집거리", desc: "싱싱한 모듬회와 매운탕 미식" },
      { time: "DAY 1 오후", place: "저도 콰이강의 다리 스카이워크", desc: "바다 위 투명 유리 바닥 걷기" },
      { time: "DAY 2 오전", place: "창동예술촌 & 아고라 골목", desc: "예술 공방, 벽화 골목, 옛 카페 탐방" },
      { time: "DAY 2 오후", place: "마산 로봇랜드 테마파크", desc: "최첨단 AI 로봇 체험관 및 테마파크" }
    ]
  }
];

const SURVIVAL_HELP = {
  emergencyNumbers: [
    { title: "Korea Tourist Helpline (1330)", desc: "24/7 Free interpretation in English, Japanese, Chinese & Russian", phone: "1330" },
    { title: "Police Emergency", desc: "For urgent crime report or loss of belongings", phone: "112" },
    { title: "Medical Emergency / Fire", desc: "Ambulance & hospital dispatch", phone: "119" },
    { title: "Samsung Changwon Hospital (International Clinic)", desc: "English speaking doctors & staff in Changwon", phone: "055-233-2114" }
  ],
  taxiPhrases: [
    { phrase: "안녕하세요! 미터기 켜고 가주세요.", en: "Hello! Please turn on the meter.", pinyin: "An-nyeong-ha-se-yo! Mi-teo-gi kyeo-go ga-ju-se-yo." },
    { phrase: "창원역(KTX)으로 가주세요.", en: "Please take me to Changwon KTX Station.", pinyin: "Chang-won-yeok-eu-ro ga-ju-se-yo." },
    { phrase: "여기서 세워주세요. 감사합니다!", en: "Please stop right here. Thank you!", pinyin: "Yeo-gi-seo se-wo-ju-se-yo. Gam-sa-ham-ni-da!" },
    { phrase: "신용카드로 결제할게요.", en: "I'll pay by credit card.", pinyin: "Sin-yong-ka-deu-ro gyeol-je-hal-ge-yo." }
  ]
};
