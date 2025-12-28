export type CardType = 'attraction' | 'restaurant' | 'transport' | 'accommodation';

export interface ItineraryCard {
  id: string;
  type: CardType;
  title: string;
  time?: string;
  description: string;
  photos?: string[];
  location?: {
    name: string;
    lat: number;
    lon: number;
  };
  highlights?: {
    text: string;
    type: 'food' | 'menu' | 'important';
  }[];
}

export interface DayItinerary {
  day: number;
  date: string;
  title: string;
  location: {
    name: string;
    lat: number;
    lon: number;
  };
  cards: ItineraryCard[];
}

export const itineraryData: DayItinerary[] = [
  {
    day: 1,
    date: '2026-01-03',
    title: 'Lake Louise → Kamloops',
    location: { name: 'Abraham Lake', lat: 52.1667, lon: -116.5333 },
    cards: [
      {
        id: 'd1-transport-1',
        type: 'transport',
        title: '早晨交通：Lake Louise → Banff 租車',
        time: '08:48 - 10:30',
        description: '上午8:48搭Roam Transit從Lake Louise出發，9:42抵達Banff，10:30租車出發。',
        location: { name: 'Banff', lat: 51.1784, lon: -115.5708 }
      },
      {
        id: 'd1-attraction-1',
        type: 'attraction',
        title: 'Abraham Lake 氣泡湖奇景',
        time: '下午 (停留 1.5-2 小時)',
        description: '抵達Abraham Lake，在Windy Point或Preacher\'s Point欣賞世界聞名的冰封氣泡湖。這是一個令人驚嘆的自然現象，湖面下凍結的甲烷氣泡形成獨特的藝術圖案，冬季限定美景。',
        photos: [
          'https://assets.iflscience.com/assets/articleNo/68146/aImg/66723/abraham-lake-meta.jpg',
          'https://www.theevolista.com/wp-content/uploads/2020/01/Abraham-Lake-Sunrise-1.jpg',
          'https://i.cbc.ca/ais/1.5425535,1578952168000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1080%2C836%29%3B',
          'https://davidthompsoncountry.ca/wp-content/uploads/2020/10/abrahma-lake-bubbles-picture-2.jpg',
          'https://ychef.files.bbci.co.uk/1280x720/p05xy7xt.jpg',
          'https://www.vmcdn.ca/f/files/greatwest/images/cool-winter-guide/2022-2023/2022-23-articles/03-abraham-1.jpg;w=960'
        ],
        location: { name: 'Abraham Lake', lat: 52.1667, lon: -116.5333 }
      },
      {
        id: 'd1-attraction-2',
        type: 'attraction',
        title: 'Nordegg 雪鎮休息',
        time: '下午 (停留 45-90 分鐘)',
        description: '在古樸的Nordegg小鎮稍作休息，喝杯熱巧克力暖身，在這個歷史悠久的礦業小鎮散步，感受寧靜的冬日氛圍。',
        photos: [
          'https://upload.wikimedia.org/wikipedia/commons/c/c2/Nordegg_Alberta_%2810686034463%29.jpg',
          'https://images.curiocity.com/uploads/2025/12/nordeggg.jpg?format=auto&w=980&h=653',
          'https://upload.wikimedia.org/wikipedia/commons/6/6d/Nordegg_Alberta_Ghost_Town_%2833107036101%29.jpg',
          'https://hikebiketravel.com/wp-content/uploads/2021/03/Nordegg-13__rsc.jpg'
        ],
        location: { name: 'Nordegg', lat: 52.4667, lon: -116.0667 }
      },
      {
        id: 'd1-restaurant-1',
        type: 'restaurant',
        title: 'Kamloops 晚餐選擇',
        time: '晚上',
        description: `抵達Kamloops後，享用浪漫晚餐。多家精選餐廳候補中：

• Brownstone Restaurant - 壁爐燭光浪漫氛圍，季節特色菜搭配本地佳釀
• Cordo Resto + Bar - 創意料理配精緻雞尾酒
• The Noble Pig Brewhouse - 工藝啤酒配精選小菜
• ROMEOs Kitchen + Spirits - 義式風味與新鮮海鮮`,
        photos: [
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3230953084494217985',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=979251397569859'
        ],
        location: { name: 'Kamloops Downtown', lat: 50.6745, lon: -120.3273 },
        highlights: [
          { text: '季節菜+本地酒', type: 'food' }
        ]
      }
    ]
  },
  {
    day: 2,
    date: '2026-01-04',
    title: 'Wells Gray 冰瀑探險',
    location: { name: 'Helmcken Falls', lat: 51.9833, lon: -120.0833 },
    cards: [
      {
        id: 'd2-attraction-1',
        type: 'attraction',
        title: 'Helmcken Falls 巨型冰錐',
        time: '上午-下午 (停留 2-3 小時)',
        description: '從Kamloops出發約1小時車程抵達Wells Gray Provincial Park。Helmcken Falls在冬季會形成壯觀的冰錐，高達141米的瀑布在寒冷天氣下創造出令人嘆為觀止的冰雕奇景。同時遊覽Spahats Creek Falls，另一處精緻的冰瀑景觀。',
        photos: [
          'https://wellsgray.ca/wp-content/uploads/2022/04/helmcken-falls-winter_1200.jpg',
          'https://images.curiocity.com/uploads/2021/01/helmcken.png?format=auto&w=1300&h=700',
          'https://c8.alamy.com/comp/2BJGTBC/helmcken-falls-on-the-murtle-river-in-winter-with-the-spectacular-ice-and-snow-cone-at-the-bottom-in-wells-gray-provincial-park-2BJGTBC.jpg',
          'https://earthlymission.com/wp-content/uploads/2023/01/helmcken-falls-canada-amazing-waterfall-1.jpeg'
        ],
        location: { name: 'Helmcken Falls', lat: 51.9833, lon: -120.0833 }
      },
      {
        id: 'd2-restaurant-1',
        type: 'restaurant',
        title: '中午早午餐',
        time: '中午',
        description: `回到Kamloops享用溫馨早午餐：

• Hello Toast - eggs benny + 熱巧克力（強烈推薦）
• Mittz Kitchen - 新鮮沙拉與手工三明治
• Cora Breakfast and Lunch - 以新鮮水果聞名的早午餐`,
        location: { name: 'Kamloops Downtown', lat: 50.6745, lon: -120.3273 },
        highlights: [
          { text: 'eggs benny + 熱巧克力', type: 'food' },
          { text: 'eggs benny', type: 'menu' }
        ]
      },
      {
        id: 'd2-attraction-2',
        type: 'attraction',
        title: 'Sun Peaks 雪村浪漫漫步',
        time: '下午',
        description: '前往Sun Peaks Village，在這個迷人的歐式風格高山村莊中漫步。手牽手逛逛精品小店，在溫馨咖啡館享用熱巧克力，沉浸在白雪皚皚的童話般場景中。',
        photos: [
          'https://www.sunpeaksresort.com/sites/default/files/inline-images/Village_3.jpg',
          'https://www.sunpeaksresort.com/sites/default/files/inline-images/Ski_through_village.jpg',
          'https://www.sunpeaksresort.com/sites/default/files/styles/1536/public/2024-09/230125sunpeaks_grand4351.jpg?itok=J59mtljM'
        ],
        location: { name: 'Sun Peaks Village', lat: 50.8833, lon: -119.8833 }
      },
      {
        id: 'd2-restaurant-2',
        type: 'restaurant',
        title: 'Kamloops 夜晚 Brewery 約會',
        time: '晚上',
        description: '回到Kamloops，可選擇前一晚的餐廳或探索新的brewery，享受工藝啤酒與輕鬆氛圍。',
        location: { name: 'Kamloops Downtown', lat: 50.6745, lon: -120.3273 }
      }
    ]
  },
  {
    day: 3,
    date: '2026-01-05',
    title: 'Halcyon Hot Springs 溫泉度假',
    location: { name: 'Halcyon Hot Springs', lat: 50.5667, lon: -117.8333 },
    cards: [
      {
        id: 'd3-transport-1',
        type: 'transport',
        title: 'Kamloops → Halcyon Hot Springs',
        time: '09:00-10:00 出發 (約 4-5 小時)',
        description: '早晨從Kamloops出發，沿著風景如畫的公路前往Halcyon Hot Springs。途中可在Revelstoke短暫停留。',
        location: { name: 'Revelstoke', lat: 50.9981, lon: -118.1957 }
      },
      {
        id: 'd3-attraction-1',
        type: 'attraction',
        title: 'Halcyon Hot Springs 多溫礦泉池',
        time: '下午 14:00-15:00 抵達',
        description: '在Upper Arrow Lake湖畔享受天然溫泉。多個溫度不同的礦泉池（40-42°C），在雪花飄落中泡湯，欣賞壯麗的雪山與湖景。夜晚泡湯更添浪漫，可額外預約SPA療程。',
        photos: [
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3779623234900762872',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2621065741267267',
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3779623234900768700',
          'https://www.backcountryskiingcanada.com/web/default/files/pages-image/Halcyon/halcyon-hot-springs-backcountry-skiing.jpg'
        ],
        location: { name: 'Halcyon Hot Springs', lat: 50.5667, lon: -117.8333 },
        highlights: [
          { text: '建議預約 SPA', type: 'important' }
        ]
      },
      {
        id: 'd3-restaurant-1',
        type: 'restaurant',
        title: '度假村湖景餐廳',
        time: '晚上',
        description: '在Halcyon度假村的湖景餐廳享用晚餐，新鮮的當地食材配上精選佳釀，窗外是雪山倒映在湖面的絕美景致。',
        location: { name: 'Halcyon Hot Springs Resort', lat: 50.5667, lon: -117.8333 },
        highlights: [
          { text: '新鮮菜+酒', type: 'food' }
        ]
      },
      {
        id: 'd3-accommodation-1',
        type: 'accommodation',
        title: 'Halcyon Hot Springs Resort 湖景小屋',
        description: '入住度假村湖景小屋，這是行程中的奢華一晚，房間可直接欣賞Arrow Lake與周圍雪山美景。',
        location: { name: 'Halcyon Hot Springs Resort', lat: 50.5667, lon: -117.8333 },
        highlights: [
          { text: '已確認預訂', type: 'important' }
        ]
      }
    ]
  },
  {
    day: 4,
    date: '2026-01-06',
    title: '返回 Banff',
    location: { name: 'Emerald Lake', lat: 51.4433, lon: -116.5308 },
    cards: [
      {
        id: 'd4-attraction-1',
        type: 'attraction',
        title: '晨泡溫泉 + 早餐',
        time: '上午/中午',
        description: '在Halcyon享受最後的晨間溫泉，伴著朝陽映照在雪山上的金色光芒。在度假村餐廳享用豐盛早餐後整裝出發。',
        location: { name: 'Halcyon Hot Springs', lat: 50.5667, lon: -117.8333 }
      },
      {
        id: 'd4-transport-1',
        type: 'transport',
        title: 'Halcyon → Banff 還車',
        time: '下午 (約 5-6 小時)',
        description: '下午出發返回Banff還車，結束這趟難忘的冬季洛磯山脈之旅。',
        location: { name: 'Banff', lat: 51.1784, lon: -115.5708 }
      },
      {
        id: 'd4-attraction-2',
        type: 'attraction',
        title: 'Emerald Lake 凍湖散步 (選)',
        time: '途中短停',
        description: '途中可選擇在Emerald Lake短暫停留，在結冰的翡翠色湖面上散步，為旅程畫下完美句點。',
        photos: [
          'https://i.redd.it/sqpz012je1ga1.jpg',
          'https://604now.com/wp-content/uploads/2017/11/emeraldlake.jpg',
          'https://i.ytimg.com/vi/I3U0PxmWdjc/maxresdefault.jpg'
        ],
        location: { name: 'Emerald Lake', lat: 51.4433, lon: -116.5308 }
      }
    ]
  }
];

export const accommodations = [
  {
    day: 1,
    location: 'Kamloops',
    status: 'pending',
    options: [
      {
        name: 'Sandman Signature Kamloops Hotel',
        features: '室內池+熱浴缸',
        tier: 'economy'
      },
      {
        name: 'Coast Kamloops Hotel & Conference Centre',
        features: '安靜，有熱浴缸',
        tier: 'economy'
      },
      {
        name: 'Accent Inn Kamloops',
        features: '性價比高',
        tier: 'economy'
      },
      {
        name: 'Scott\'s Inn & Suites',
        features: '房間大',
        tier: 'economy'
      },
      {
        name: 'DoubleTree by Hilton Kamloops',
        features: '中高級選項',
        tier: 'mid-range'
      },
      {
        name: 'Delta Hotels by Marriott Kamloops',
        features: '中高級選項',
        tier: 'mid-range'
      }
    ]
  },
  {
    day: 2,
    location: 'Kamloops',
    status: 'pending',
    note: '同 Day 1 候補選項'
  },
  {
    day: 3,
    location: 'Halcyon Hot Springs',
    status: 'confirmed',
    options: [
      {
        name: 'Halcyon Hot Springs Resort 湖景小屋',
        features: '奢華一晚，湖景房',
        tier: 'luxury'
      }
    ]
  }
];

export const safetyNotes = [
  {
    icon: 'Snowflake',
    title: '冬季駕駛提醒',
    content: '攜帶冰爪、雪鏈。注意路況，冬季山路需謹慎駕駛。'
  },
  {
    icon: 'Warning',
    title: '即時路況',
    content: '出發前查看 DriveBC.ca 了解最新路況與天氣警告。'
  },
  {
    icon: 'ThermometerCold',
    title: '保暖裝備',
    content: '攜帶足夠保暖衣物、防水外套、手套、帽子。氣溫可能低至 -20°C。'
  },
  {
    icon: 'FirstAid',
    title: '緊急準備',
    content: '車內準備毛毯、熱飲、手電筒、急救包等緊急物資。'
  }
];

export const roadConditionSites = [
  {
    name: 'DriveBC',
    url: 'https://drivebc.ca/',
    description: 'BC省官方路況網站，提供即時路況、攝影機、天氣警告',
    coverage: 'BC省全域'
  },
  {
    name: '511 Alberta',
    url: 'https://511.alberta.ca/',
    description: 'Alberta省官方路況網站，涵蓋 Banff、Lake Louise 路段',
    coverage: 'Alberta省全域'
  },
  {
    name: 'Alberta Transportation',
    url: 'https://www.511.alberta.ca/map',
    description: '即時地圖顯示道路狀況、交通事故、道路施工',
    coverage: 'Alberta省'
  },
  {
    name: 'Parks Canada Road Reports',
    url: 'https://www.pc.gc.ca/en/pn-np/ab/banff/visit/conditions',
    description: 'Banff 國家公園內道路狀況與公園通知',
    coverage: 'Banff 國家公園'
  },
  {
    name: 'Environment Canada Weather',
    url: 'https://weather.gc.ca/',
    description: '加拿大氣象局官方天氣預報與警報',
    coverage: '加拿大全國'
  }
];
