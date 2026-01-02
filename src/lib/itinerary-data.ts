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
          'https://static.vecteezy.com/system/resources/previews/054/657/791/large_2x/candlelight-romantic-dinner-table-for-two-in-restaurant-photo.jpeg',
          'https://www.newyorkupstate.com/resizer/v2/PRY4RMZU65CANAXR3Z4VE35U2I.jpeg?auth=316fb776cf573bb9220eb401be2ba64cc5d8de2d63025854ec2c1126b6a53a7f&width=800&smart=true&quality=90',
          'https://simonesonsunset.com/wp-content/uploads/2025/05/o-4.jpg',
          'https://www.prestigehotelsandresorts.com/wp-content/uploads/2025/05/Pacific-Inn-Moon-wok-rest-Natalie-Dollman-photographer-1-scaled.jpg',
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3779152175730638812',
          'https://static.wixstatic.com/media/5c7601_38f71f57db0e4ef6bb12b65f0384b42f~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/5c7601_38f71f57db0e4ef6bb12b65f0384b42f~mv2.jpg'
        ],
        location: { name: 'Kamloops Downtown', lat: 50.6745, lon: -120.3273 }
      },
      {
        id: 'd1-accommodation-1',
        type: 'accommodation',
        title: 'Accent Inn Kamloops',
        description: '入住Accent Inn Kamloops，乾淨舒適有kitchenette。',
        photos: [
          'https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/3/0/181/216/531/115-19-0499_O/Accent-Inns-Kamloops-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/9c/23/b7/standard-king-with-sofabed.jpg?w=900&h=500&s=1',
          'https://images.trvl-media.com/lodging/1000000/10000/800/759/3675d7ee.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://images.trvl-media.com/lodging/1000000/10000/800/759/e213b699.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2Fdms%2F53304%2FAMADEUS%2F6c80ae8862f54df49cdd7b8b4e9f82e2.jpeg/e81472cf39ee12fcef74669414cddcdf/512%2C314/6/Accent_Inn_Kamloops-Kamloops-Restaurant-1-53304.jpg',
          'https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2Fdms%2F53304%2FAMADEUS%2F2af1c9cc9bfc43f38f48fd3f87a4ee50.jpeg/c18c7af0a5f1754cbb1910bf0809ff1a/224%2C168/6/Accent_Inn_Kamloops-Kamloops-Restaurant-1-53304.jpg'
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
          'https://images-dh-production-baselayer.dailyhive.com/uploads/2025/12/Shutterstock_2691741087.jpg',
          'https://i.ytimg.com/vi/b9i_PfOnRp0/maxresdefault.jpg',
          'https://images.curiocity.com/uploads/2024/11/Untitled-design-2024-11-21T170031.338-1.jpg',
          'https://nordeggadventures.ca/wp-content/uploads/2018/09/20181230-054-scaled.jpg',
          'https://i.ytimg.com/vi/ImX2Fa0PdMY/maxresdefault.jpg',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10157662753312337'
        ],
        location: { name: 'Crescent Falls', lat: 52.3167, lon: -116.2167 }
      },
      {
        id: 'd1-alt-2',
        type: 'alternative',
        title: 'Siffleur Falls',
        description: 'Nordegg附近雪地看凍瀑。',
        photos: [
          'https://www.vmcdn.ca/f/files/greatwest/images/cool-winter-guide/2022-2023/2022-23-articles/2023/01-3-falls-siffleur.jpg;w=960',
          'https://www.vmcdn.ca/f/files/greatwest/images/cool-winter-guide/2022-2023/2022-23-articles/2023/01-3-falls-elbow.jpg;w=960',
          'https://images.curiocity.com/uploads/2023/11/The-7-1.png',
          'https://girthhitchguiding.ca/wp-content/uploads/2023/01/Winter-Hike-to-Siffleur-Falls-140203-Explore-Nordegg-Abraham-Lake-JP-Fortin-5-767x576.jpg',
          'https://thumbs.dreamstime.com/b/frozen-mountain-waterfall-canadian-rockies-early-springtime-hiking-alberta-rocky-mountains-siffleur-falls-ice-cliffs-213932705.jpg',
          'https://www.todocanada.ca/wp-content/uploads/Winter-Weekend-Getaway-to-Nordegg-Ice-Bubble-Lake-Walks-Frozen-Waterfalls-Cozy-Stays.jpg'
        ],
        location: { name: 'Siffleur Falls', lat: 52.0333, lon: -116.2667 }
      },
      {
        id: 'd1-alt-3',
        type: 'alternative',
        title: 'Cline River Canyon',
        description: '近Abraham Lake，雪地峽谷輕鬆散步。',
        photos: [
          'https://nordeggadventures.ca/wp-content/uploads/2021/03/Icefalls-Winter-Hike-20160208-44070-scaled-1.jpg',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3533775350190598',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3533775286857271',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10223684512044965',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3533775270190606',
          'https://cdn12.picryl.com/photo/2016/12/31/cline-river-canada-water-nature-landscapes-8c94de-1024.jpg'
        ],
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
          'https://wilmingtonncmagazine.com/cdn/Food/desertwine1.jpg',
          'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_534,q_75,w_800/v1/clients/southwestontario/OSCWGA_012_7f5e9927-bf19-417f-b0fa-6b9d8984d83f.jpg',
          'https://images-dh-production-baselayer.dailyhive.com/uploads/2025/12/Shutterstock_2290607051.jpg',
          'https://d20jhx4r9t6zw8.cloudfront.net/2264400_large_dcd40c63.jpg',
          'https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2Farticle%2Fniagara-winter-se093_08rr-2000.jpg&w=1920&q=75',
          'https://d11vyokdyewbcr.cloudfront.net/2264397_large_13d06f7c.jpg',
          'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/fingerlakesvc-redesign/lake_house_canandaigua_exterior_fire_pit_a68635f3-a9f8-4763-afb8-a4dc1655995b.jpg',
          'https://viavinumwinetours.com/wp-content/uploads/2023/02/vino-de-hielo.jpg'
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
          'https://www.shutterstock.com/image-photo/okanagan-lake-landscape-winter-time-260nw-2412791331.jpg',
          'https://imagedelivery.net/rCY_-t_NaBnc_UkEr8yoCA/cb3f3f1e-d2f4-452e-4c0b-a03f15532d00/instory',
          'https://www.shutterstock.com/image-photo/highangle-view-okanagan-lake-munson-260nw-2642273039.jpg',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10154738332611201',
          'https://thumbs.dreamstime.com/b/people-skate-frozen-lake-surrounded-snow-capped-mountains-under-clear-blue-winter-sky-bright-sun-shines-creating-398703968.jpg',
          'https://www.shutterstock.com/image-photo/lake-akan-frozen-winter-260nw-2660109683.jpg'
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
          'https://q-xx.bstatic.com/xdata/images/hotel/max500/567090739.jpg?k=b388a45e07850cfa8eaf1840e3f57ddd315786ad6dfe6f606bcb6d6bf1e71a58&o=',
          'https://pix10.agoda.net/hotelImages/2463897/-1/c67f8e0bde73963fad8771e2bd441595.jpg?ce=0&s=414x232',
          'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/partner-images/97/78/ad1380e4696c65c6659df6347bee3e253024300466015ad96e7adb9f045f.jpeg',
          'https://images.trvl-media.com/lodging/1000000/20000/10300/10255/d3d75899.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://images.trvl-media.com/lodging/1000000/20000/10300/10255/63343f8d.jpg?impolicy=fcrop&w=1200&h=800&quality=medium',
          'https://images.trvl-media.com/lodging/1000000/20000/10300/10255/e2910e91.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill'
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
          'https://imagedelivery.net/rCY_-t_NaBnc_UkEr8yoCA/8249af7e-88ed-425c-cd0f-e3a8f907cb00/public',
          'https://imagedelivery.net/rCY_-t_NaBnc_UkEr8yoCA/b10ab189-9cf1-4a99-9acd-c29c51667b00/instory',
          'http://infotel.ca/news/medialibrary/image/mediaitemid36077-6556.jpg?q=80',
          'https://imagedelivery.net/rCY_-t_NaBnc_UkEr8yoCA/387ef1dd-dabf-4abd-59c3-0bc627c1f400/instory',
          'https://imagedelivery.net/rCY_-t_NaBnc_UkEr8yoCA/b062a1c6-19fb-4666-17cb-e0093763e000/public',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/47/4b/87/kasugai-garden.jpg?w=900&h=500&s=1'
        ],
        location: { name: 'Kasugai Gardens', lat: 49.8824, lon: -119.4850 }
      },
      {
        id: 'd2-alt-2',
        type: 'alternative',
        title: 'Myra Canyon',
        description: '輕鬆冬季步道，湖景雪山view。',
        photos: [
          'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/clients/kelowna/112_3_9759_jpeg_385fff1d-8319-4d25-aa68-5879213e3cbf.jpg',
          'https://explorethemap.com/wp-content/uploads/2019/01/myra-canyon-snowshoe-winter-scaled.jpg',
          'https://imagedelivery.net/TQvnm7oerOgnXiLRz_YKZQ/1c98a7ab-a400-4490-5fb3-a3bbb83c4100/horizontal',
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3790618903886764706',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10166043243225054',
          'https://res.cloudinary.com/spheremedia/image/upload/f_auto/q_auto/w_660,ar_3:2,c_auto/v1705349916/Kelowna/99397_PowerPoint_2400px_im9qzn.avif'
        ],
        location: { name: 'Myra Canyon', lat: 49.8167, lon: -119.3333 }
      },
      {
        id: 'd2-alt-3',
        type: 'alternative',
        title: 'Knox Mountain',
        description: '輕鬆冬季步道，湖景雪山view。',
        photos: [
          'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_900,q_75,w_1200/https://assets.simpleviewcms.com/simpleview/image/upload/v1/clients/kelowna/pincushion1_85be008b-be25-410c-bf50-0ea4e179467d.jpg',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10161292797869461',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10237209622613875',
          'https://hikebiketravel.com/wp-content/uploads/2020/02/Kelowna-2.jpg',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10161292798469461',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=3679591532126822'
        ],
        location: { name: 'Knox Mountain', lat: 49.9167, lon: -119.4833 }
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
          'https://www.discovernelson.com/wp-content/sabai/File/thumbnails/fc4405af66816858f92cbc5213cd6def.jpg',
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3787314954702343823',
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3787314954693930738',
          'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=2992746494995891254',
          'https://images.squarespace-cdn.com/content/v1/5f4032978f7b8279d7fe55f9/e889e5d1-9e63-4f8a-bf09-13f4e7eae43d/HalcyonHotSpringsbc.jpg'
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
          'https://images.trvl-media.com/lodging/16000000/15130000/15120500/15120434/9126ac0b.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://images.trvl-media.com/lodging/16000000/15130000/15120500/15120434/9321e592.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://images.trvl-media.com/lodging/16000000/15130000/15120500/15120434/f3e5b557.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://images.trvl-media.com/lodging/16000000/15130000/15120500/15120434/19719f3c.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://images.trvl-media.com/lodging/16000000/15130000/15120500/15120434/2ea62799.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
          'https://q-xx.bstatic.com/xdata/images/hotel/max500/413656373.jpg?k=5a9f1c042ac28835c1364da211eb98e92f93d5b581542e8bca3663bb7cc465e9&o='
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
        title: 'Beyond Wrapture Day Spa',
        description: 'Kelowna市區SPA，情侶按摩放鬆。',
        photos: [
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/55/54/ce/relax-here.jpg?w=600&h=400&s=1',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/73/e3/ac/relax-with-a-hot-shave.jpg?w=600&h=400&s=1',
          'https://res.cloudinary.com/spheremedia/image/upload/f_auto/q_auto/w_969,ar_3:2,c_auto/v1705351598/Business%20Images/Hyatt%20Place%20Kelowna/hyatt-place-17_hguwzk.avif',
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/73/e3/b1/our-authentic-barber.jpg?w=900&h=500&s=1',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10156885794206341',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=2285379551629800'
        ],
        location: { name: 'Beyond Wrapture', lat: 49.8881, lon: -119.4960 }
      },
      {
        id: 'd3-alt-2',
        type: 'alternative',
        title: 'Revelstoke途中短停',
        description: '逛市區雪景或喝咖啡。',
        photos: [
          'https://a-ca.storyblok.com/f/2000158/1200x800/0f2b4908c9/web_blog-2023-winter-downtown-revelstoke-first-street-night-shot-credit-shoal-raymond-shoal-raw-2.jpg',
          'https://media.istockphoto.com/id/505870321/photo/revelstoke-british-columbia-in-winter.jpg?s=612x612&w=0&k=20&c=T73FwlrRas2ua9aJcXlmTYcdMtg6E8DKh2RKl7UCWA0=',
          'https://www.mountainwatch.com/wp-content/uploads/2021/11/200226_202.jpg',
          'https://seerevelstoke.com/_next/image?url=https%3A%2F%2Fa-ca.storyblok.com%2Ff%2F2000158%2F1200x800%2Fbd3dfd51b5%2Fweb_blog-downtown-winter-credit-instagram-adrift-vision-social-web-only.jpg&w=3840&q=75',
          'https://c8.alamy.com/comp/D1RJ09/snowy-streets-in-revelstoke-in-british-columbia-leading-to-high-mountains-D1RJ09.jpg',
          'https://www.datocms-assets.com/163516/1751444390-fredrikssonm_2.jpg?auto=format&bg=FFFFFF&w=1400'
        ],
        location: { name: 'Revelstoke', lat: 50.9981, lon: -118.1957 }
      },
      {
        id: 'd3-alt-3',
        type: 'alternative',
        title: 'Nakusp Hot Springs',
        description: '近Halcyon，另一個溫泉選擇。',
        photos: [
          'https://britishcolumbia.com/wp-content/uploads/2024/10/d240487e-e678-4559-8219-8afc86107e2c.jpeg',
          'https://images.squarespace-cdn.com/content/v1/54aa965ae4b09569a145713f/1580000877486-YN6UHIGPC3PM6ALHF7OQ/%C2%A9KateePederson-11.jpg',
          'https://www.backcountryskiingcanada.com/web/default/files/pages-image/Nakusp_Hot_Springs/Nakusp-Hot-Springs-3.jpg',
          'https://cdn.ordinary-adventures.com/wp-content/uploads/2022/02/23085945/nakusphotsprings.jpg.webp',
          'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1304187005079233',
          'https://happiestoutdoors.ca/wp-content/uploads/2019/10/radiumhotsprings-1024x684.jpg.webp'
        ],
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
        photos: [
          'https://substackcdn.com/image/fetch/$s_!FRJ-!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe4e522d8-81b4-478c-97e3-778982ad8a0d_4608x3456.jpeg',
          'https://www.tommackie.com/photos/thumbnail/180034-1-xf039.jpg',
          'https://substackcdn.com/image/fetch/$s_!Yl6M!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F944b1356-23a4-4888-a323-d0c2f2d967fb_4608x3456.jpeg',
          'https://substackcdn.com/image/fetch/$s_!FhBU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3c25180b-59c0-42a9-ac9a-a391ea7fb5c2_4032x2268.jpeg',
          'https://wanderwisdom.com/.image/c_fill,g_faces:center/MTk3MTc3MzMwOTMyNjU1MTg3/shutterstock_2265664171.jpg',
          'https://img.freepik.com/premium-photo/frozen-natural-bridge-with-snowy-pine-forest-yoho-national-park_49071-17396.jpg'
        ],
        location: { name: 'Natural Bridge', lat: 51.4167, lon: -116.5333 }
      },
      {
        id: 'd4-alt-2',
        type: 'alternative',
        title: 'Golden小鎮',
        description: '途中休息，喝熱飲或逛可愛市區。',
        photos: [
          'https://uploads-ssl.webflow.com/63cc189cb0c914671014ec55/65b91d175a9f4191a5bd187d_town%20of%20golden-2.jpg',
          'https://www.datocms-assets.com/163516/1751446210-copy-of-credit-dave-best-3-scaled.jpg?auto=format&bg=FFFFFF&w=1400',
          'https://www.theinertia.com/wp-content/uploads/2020/02/Golden-BC-attractions-downtown-04-credit-Best-medium-670x447.jpg',
          'https://ichef.bbci.co.uk/images/ic/480xn/p080dd02.jpg.webp',
          'https://www.inthesnow.com/wp-content/uploads/2024/10/download-36-768x512.jpeg',
          'https://www.golden.ca/sites/default/files/styles/5_3/public/2025-11/482212052_1040422681451781_4484194612171680890_n.jpg?itok=TxyRxHiZ'
        ],
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
