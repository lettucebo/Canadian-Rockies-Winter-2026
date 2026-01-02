export type CardType = 'attraction' | 'restaurant' | 'transport' | 'accommodation' | 'alternative';

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
  alternatives?: ItineraryCard[];
}

export const itineraryData: DayItinerary[] = [
  {
    day: 1,
    date: '2026-01-03',
    title: 'Lake Louise → Banff租車 → Abraham Lake → Nordegg → Kamloops',
    location: { name: 'Abraham Lake', lat: 52.1667, lon: -116.5333 },
    cards: [
      {
        id: 'd1-transport-1',
        type: 'transport',
        title: '早晨交通：Lake Louise → Banff 租車',
        time: '08:48 - 10:30',
        description: '上午8:48搭Roam Transit從Lake Louise Lakeshore出發，9:42抵達Banff，10:30租車出發。',
        location: { name: 'Banff', lat: 51.1784, lon: -115.5708 }
      },
      {
        id: 'd1-attraction-1',
        type: 'attraction',
        title: 'Abraham Lake 氣泡湖奇景',
        time: '下午 (停留 1.5-2 小時)',
        description: '抵達Abraham Lake，在Windy Point或Preacher\'s Point欣賞世界聞名的冰封氣泡湖。這是一個令人驚嘆的自然現象，湖面下凍結的甲烷氣泡形成獨特的藝術圖案，冬季限定美景。岸邊散步拍照看氣泡湖。',
        photos: [
          'https://assets.iflscience.com/assets/articleNo/68146/aImg/66723/abraham-lake-meta.jpg',
          'https://www.theevolista.com/wp-content/uploads/2020/01/Abraham-Lake-Sunrise-1.jpg',
          'https://i.cbc.ca/ais/1.5425535,1578952168000/full/max/0/default.jpg?im=Crop%2Crect%3D%280%2C0%2C1080%2C836%29%3B',
          'https://davidthompsoncountry.ca/wp-content/uploads/2020/10/abrahma-lake-bubbles-picture-2.jpg',
          'https://ychef.files.bbci.co.uk/1280x720/p05xy7xt.jpg',
          'https://www.vmcdn.ca/f/files/greatwest/images/cool-winter-guide/2022-2023/2022-23-articles/03-abraham-1.jpg;w=960'
        ],
        location: { name: 'Abraham Lake', lat: 52.1667, lon: -116.5333 },
        highlights: [
          { text: '1月初氣泡層數可能少，但雪景仍美', type: 'important' }
        ]
      },
      {
        id: 'd1-attraction-2',
        type: 'attraction',
        title: 'Nordegg 可愛雪鎮休息',
        time: '下午約1小時抵達 (停留 45-90 分鐘)',
        description: '在古樸的Nordegg小鎮稍作休息，喝杯熱巧克力暖身，在這個歷史悠久的礦業小鎮散步拍照，感受寧靜的冬日氛圍。',
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
        title: 'Kamloops 浪漫晚餐',
        time: '晚上',
        description: `抵達Kamloops後，享用浪漫晚餐。精選餐廳：

• Brownstone Restaurant - 壁爐燭光浪漫氛圍，季節特色菜搭配本地佳釀
• The Noble Pig Brewhouse - 工藝啤酒配精選小菜`,
        photos: [
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3230953084494217985',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=979251397569859'
        ],
        location: { name: 'Kamloops Downtown', lat: 50.6745, lon: -120.3273 }
      },
      {
        id: 'd1-accommodation-1',
        type: 'accommodation',
        title: 'Accent Inn Kamloops',
        description: '入住Accent Inn Kamloops，乾淨舒適有kitchenette。',
        photos: [
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/88/d5/8d/exterior.jpg?w=700&h=-1&s=1'
        ],
        location: { name: 'Accent Inn Kamloops', lat: 50.6745, lon: -120.3273 },
        highlights: [
          { text: '已確認預訂', type: 'important' }
        ]
      }
    ],
    alternatives: [
      {
        id: 'd1-alt-1',
        type: 'alternative',
        title: 'Crescent Falls',
        description: '近Nordegg，冬季凍瀑布短步道散步拍照。',
        photos: [
          'https://live.staticflickr.com/65535/49425583681_c7d7c03b51_b.jpg'
        ],
        location: { name: 'Crescent Falls', lat: 52.3167, lon: -116.2167 }
      },
      {
        id: 'd1-alt-2',
        type: 'alternative',
        title: 'Siffleur Falls',
        description: 'Nordegg附近雪地看凍瀑。',
        location: { name: 'Siffleur Falls', lat: 52.0333, lon: -116.2667 }
      },
      {
        id: 'd1-alt-3',
        type: 'alternative',
        title: 'Cline River Canyon',
        description: '近Abraham Lake，雪地峽谷輕鬆散步。',
        location: { name: 'Cline River Canyon', lat: 52.1333, lon: -116.4833 }
      }
    ]
  },
  {
    day: 2,
    date: '2026-01-04',
    title: 'Kamloops → Kelowna（Little Straw Vineyards Icewine品酒 + 湖邊浪漫）',
    location: { name: 'Little Straw Vineyards', lat: 49.8881, lon: -119.4960 },
    cards: [
      {
        id: 'd2-transport-1',
        type: 'transport',
        title: 'Kamloops → Kelowna',
        time: '上午 (約2小時車程)',
        description: '早晨從Kamloops出發，沿景觀公路前往Kelowna，約2小時抵達。',
        location: { name: 'Kelowna', lat: 49.8881, lon: -119.4960 }
      },
      {
        id: 'd2-attraction-1',
        type: 'attraction',
        title: 'Little Straw Vineyards Icewine品酒',
        time: '下午 1:30 PM',
        description: `**重要預約**：Reservation #5393（已預訂！）

家庭隱藏版酒莊，獨特Auxerrois Icewine + 雪園壁爐溫馨試飲。體驗精緻的冰酒品鑑，了解冰酒釀造工藝，在壁爐旁享受浪漫時光。`,
        photos: [
          'https://littlestrawvineyards.ca/wp-content/uploads/2020/01/Little-Straw-Vineyards-Winter-scaled.jpg',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3f/e0/5d/caption.jpg?w=1200&h=-1&s=1'
        ],
        location: { name: 'Little Straw Vineyards', lat: 49.8881, lon: -119.4960 },
        highlights: [
          { text: 'Reservation #5393 已預訂', type: 'important' },
          { text: '獨特Auxerrois Icewine', type: 'food' }
        ]
      },
      {
        id: 'd2-attraction-2',
        type: 'attraction',
        title: 'Okanagan Lake 凍湖散步',
        time: '下午/晚上',
        description: '沿Okanagan Lake凍湖散步，雪景湖光療癒，手牽手約會。享受湖畔寧靜的冬日氛圍，拍照留念。',
        photos: [
          'https://www.vmcdn.ca/f/files/okanagan/images/travel/okanagan-lake-kelowna-winter.jpg',
          'https://www.explorekelowna.com/sites/default/files/styles/listing_slideshow/public/listing_images/38983/Winter%20in%20Kelowna.jpg?itok=8QK7qL2Y'
        ],
        location: { name: 'Okanagan Lake', lat: 49.8659, lon: -119.4944 }
      },
      {
        id: 'd2-restaurant-1',
        type: 'restaurant',
        title: '湖畔餐廳或輕食',
        time: '晚餐',
        description: '在Kelowna湖畔餐廳享用晚餐或輕食，欣賞湖景夜色。',
        location: { name: 'Kelowna Waterfront', lat: 49.8881, lon: -119.4960 }
      },
      {
        id: 'd2-accommodation-1',
        type: 'accommodation',
        title: 'Accent Inn Kelowna',
        description: '入住Accent Inn Kelowna，位置方便近酒莊。',
        photos: [
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/8d/4e/97/accent-inns-kelowna.jpg?w=700&h=-1&s=1'
        ],
        location: { name: 'Accent Inn Kelowna', lat: 49.8881, lon: -119.4960 },
        highlights: [
          { text: '已確認預訂', type: 'important' }
        ]
      }
    ],
    alternatives: [
      {
        id: 'd2-alt-1',
        type: 'alternative',
        title: 'Kasugai Gardens',
        description: 'Kelowna市區日式雪園，寧靜散步拍照。',
        photos: [
          'https://www.tourismkelowna.com/wp-content/uploads/2020/11/Kasugai-Gardens-scaled.jpg'
        ],
        location: { name: 'Kasugai Gardens', lat: 49.8824, lon: -119.4850 }
      },
      {
        id: 'd2-alt-2',
        type: 'alternative',
        title: 'Myra Canyon或Knox Mountain',
        description: '輕鬆冬季步道，湖景雪山view。',
        location: { name: 'Knox Mountain', lat: 49.9167, lon: -119.4833 }
      },
      {
        id: 'd2-alt-3',
        type: 'alternative',
        title: 'Kelowna市區室內',
        description: '逛本地咖啡廳或藝術空間（如果想暖和放鬆）。',
        location: { name: 'Kelowna Downtown', lat: 49.8881, lon: -119.4960 }
      }
    ]
  },
  {
    day: 3,
    date: '2026-01-05',
    title: 'Kelowna（續Icewine或放鬆） → Halcyon Hot Springs',
    location: { name: 'Halcyon Hot Springs', lat: 50.5667, lon: -117.8333 },
    cards: [
      {
        id: 'd3-attraction-1',
        type: 'attraction',
        title: '自由續Icewine或放鬆',
        time: '上午',
        description: '上午自由活動，可重溫Little Straw Vineyards買伴手禮或在Kelowna輕鬆放鬆。',
        location: { name: 'Kelowna', lat: 49.8881, lon: -119.4960 }
      },
      {
        id: 'd3-transport-1',
        type: 'transport',
        title: 'Kelowna → Halcyon Hot Springs',
        time: '下午早點出發 (約 3.5 小時)',
        description: '下午早點出發前往Halcyon Hot Springs，約3.5小時車程，途中可在Revelstoke短暫停留。',
        location: { name: 'Revelstoke', lat: 50.9981, lon: -118.1957 }
      },
      {
        id: 'd3-attraction-2',
        type: 'attraction',
        title: 'Halcyon Hot Springs 多溫礦泉池',
        time: '晚上抵達泡湯',
        description: '在Upper Arrow Lake湖畔享受天然溫泉。多個溫度不同的礦泉池（熱池40-42°C），在雪花飄落中泡湯，欣賞壯麗的雪山與湖景。夜泡雪山星空，可加情侶SPA。',
        photos: [
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3779623234900762872',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2621065741267267',
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3779623234900768700',
          'https://www.backcountryskiingcanada.com/web/default/files/pages-image/Halcyon/halcyon-hot-springs-backcountry-skiing.jpg',
          'https://halcyon-hotsprings.com/wp-content/uploads/2018/11/Halcyon-Hot-Springs-Pools.jpg'
        ],
        location: { name: 'Halcyon Hot Springs', lat: 50.5667, lon: -117.8333 },
        highlights: [
          { text: '可加情侶SPA', type: 'important' }
        ]
      },
      {
        id: 'd3-restaurant-1',
        type: 'restaurant',
        title: '度假村湖景餐廳',
        time: '晚上',
        description: '在Halcyon度假村的湖景餐廳享用晚餐，新鮮的當地食材配上精選佳釀，窗外是雪山倒映在湖面的絕美景致。',
        location: { name: 'Halcyon Hot Springs Resort', lat: 50.5667, lon: -117.8333 }
      },
      {
        id: 'd3-accommodation-1',
        type: 'accommodation',
        title: 'Halcyon Hot Springs 湖景小屋',
        description: '入住度假村湖景小屋，高級浪漫夜。房間可直接欣賞Arrow Lake與周圍雪山美景。',
        photos: [
          'https://halcyon-hotsprings.com/wp-content/uploads/2018/11/Lakeview-Chalet.jpg',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/9c/5a/3d/halcyon-hot-springs.jpg?w=700&h=-1&s=1'
        ],
        location: { name: 'Halcyon Hot Springs Resort', lat: 50.5667, lon: -117.8333 },
        highlights: [
          { text: '高級浪漫夜', type: 'important' }
        ]
      }
    ],
    alternatives: [
      {
        id: 'd3-alt-1',
        type: 'alternative',
        title: 'Kelowna市區SPA',
        description: '例如Beyond Wrapture，情侶按摩放鬆。',
        location: { name: 'Beyond Wrapture', lat: 49.8881, lon: -119.4960 }
      },
      {
        id: 'd3-alt-2',
        type: 'alternative',
        title: 'Revelstoke途中短停',
        description: '逛市區雪景或喝咖啡。',
        location: { name: 'Revelstoke', lat: 50.9981, lon: -118.1957 }
      },
      {
        id: 'd3-alt-3',
        type: 'alternative',
        title: 'Nakusp Hot Springs',
        description: '近Halcyon，另一個溫泉選擇。',
        location: { name: 'Nakusp Hot Springs', lat: 50.2333, lon: -117.8000 }
      }
    ]
  },
  {
    day: 4,
    date: '2026-01-06',
    title: 'Halcyon → Banff還車',
    location: { name: 'Emerald Lake', lat: 51.4433, lon: -116.5308 },
    cards: [
      {
        id: 'd4-attraction-1',
        type: 'attraction',
        title: '晨泡溫泉 + 早餐看雪景',
        time: '上午/中午',
        description: '在Halcyon享受最後的晨間溫泉，伴著朝陽映照在雪山上的金色光芒。在度假村餐廳享用豐盛早餐看雪景後，放鬆到下午出發。',
        photos: [
          'https://halcyon-hotsprings.com/wp-content/uploads/2018/11/Halcyon-Hot-Springs-Pools.jpg'
        ],
        location: { name: 'Halcyon Hot Springs', lat: 50.5667, lon: -117.8333 }
      },
      {
        id: 'd4-transport-1',
        type: 'transport',
        title: 'Halcyon → Banff 還車',
        time: '下午出發 (約 5-6 小時)',
        description: '下午出發返回Banff還車，結束這趟難忘的冬季洛磯山脈之旅。途中短停Emerald Lake凍湖散步。',
        location: { name: 'Banff', lat: 51.1784, lon: -115.5708 }
      },
      {
        id: 'd4-attraction-2',
        type: 'attraction',
        title: 'Emerald Lake 凍湖散步',
        time: '途中短停',
        description: '途中在Emerald Lake（Yoho National Park）短暫停留，在結冰的翡翠色湖面上散步拍照，必停浪漫點，為旅程畫下完美句點。',
        photos: [
          'https://i.redd.it/sqpz012je1ga1.jpg',
          'https://604now.com/wp-content/uploads/2017/11/emeraldlake.jpg',
          'https://i.ytimg.com/vi/I3U0PxmWdjc/maxresdefault.jpg',
          'https://www.banfflakelouise.com/sites/default/files/styles/landscape_large/public/emerald-lake-winter_0.jpg?itok=9Zq2xZ1K'
        ],
        location: { name: 'Emerald Lake', lat: 51.4433, lon: -116.5308 }
      }
    ],
    alternatives: [
      {
        id: 'd4-alt-1',
        type: 'alternative',
        title: 'Natural Bridge',
        description: '近Emerald Lake，冬季冰河景觀路邊短停。',
        location: { name: 'Natural Bridge', lat: 51.4167, lon: -116.5333 }
      },
      {
        id: 'd4-alt-2',
        type: 'alternative',
        title: 'Golden小鎮',
        description: '途中休息，喝熱飲或逛可愛市區。',
        location: { name: 'Golden', lat: 51.2981, lon: -116.9634 }
      }
    ]
  }
];

export const accommodations = [
  {
    day: 1,
    location: 'Kamloops',
    status: 'confirmed',
    options: [
      {
        name: 'Accent Inn Kamloops',
        features: '乾淨舒適有kitchenette',
        tier: 'confirmed'
      }
    ]
  },
  {
    day: 2,
    location: 'Kelowna',
    status: 'confirmed',
    options: [
      {
        name: 'Accent Inn Kelowna',
        features: '位置方便近酒莊',
        tier: 'confirmed'
      }
    ]
  },
  {
    day: 3,
    location: 'Halcyon Hot Springs',
    status: 'confirmed',
    options: [
      {
        name: 'Halcyon Hot Springs Resort 湖景小屋',
        features: '高級浪漫夜，湖景房',
        tier: 'luxury'
      }
    ]
  }
];

export const safetyNotes = [
  {
    icon: 'Snowflake',
    title: '冬季輪胎必備',
    content: '攜帶冰爪、熱飲。冬季山路需謹慎駕駛。'
  },
  {
    icon: 'Warning',
    title: '即時路況',
    content: '查511.alberta.ca + DriveBC.ca 了解最新路況與天氣警告。'
  },
  {
    icon: 'Phone',
    title: '緊急電話',
    content: '緊急電話：911、租車公司電話: AVIS Banff。'
  },
  {
    icon: 'Info',
    title: '亞伯拉罕湖提醒',
    content: '氣泡1月初可能層數少，但雪景仍美。'
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
