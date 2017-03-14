export function getPageData() {
  let data = {
    routeListData: [
      {
        route: 'remon',
        name: '推荐',
        id: 1,
        isActive: true
      },
      {
        route: 'toplist',
        name: '排行榜',
        id: 2,
        isActive: false
      },
      {
        route: 'search',
        name: '搜索',
        id: 3,
        isActive: false
      }
    ],
    swiperListImgUrl: [
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000001otcIo36J3Dg.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000001eRW8B3zM7ZC.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000000KdUD90aVC89.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000000EDhgJ2RWmXF.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000001ImP933y6YHF.jpg?max_age=2592000&max_age=2592000'
    ],
    radioListData: [
      {
        id: 1,
        desc: '热歌',
        route: 'playsong',
        params: {
          id: 1
        },
        url: 'https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000&max_age=2592000'
      },
      {
        id: 2,
        desc: '一人一首招牌歌',
        route:'plasong',
        params: {
          id: 2
        },
        url: 'https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000&max_age=2592000'
      }
    ],
    hotSongListData: [
      {
        id: 1,
        desc: '催泪大杀器！盘点演唱会经典万人大合唱',
        audition: 210.4,
        text: 'Harry',
        url: 'https://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1&max_age=2592000'
      },
      {
        id: 2,
        desc: '纳尼？这些华语歌手竟然会唱日语歌！',
        audition: 59.6,
        text: '风吹草地',
        url: 'https://p.qpic.cn/music_cover/z8wAFqicQ1qhImeiajkrgiaR4hYM3pzsUULFnicXshFXdw9uGkm261Ex9g/300?n=1&max_age=2592000'
      },
      {
        id: 3,
        desc: '精选内地十大民谣歌手代表作',
        audition: 61.8,
        text: '１`s   ヽ',
        url: 'https://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7X66OknPIhic2mKDgicawN4qThIR7yhYY1w/300?n=1&max_age=2592000'
      },
      {
        id: 4,
        desc: '2016Billboard嘻哈榜精选',
        audition: 114.5,
        text: '',
        url: 'https://p.qpic.cn/music_cover/tkduvk4dwqBxwzZhsNe0nwkwyiaLHVkxtla7REsX0yNkhibOH3Bdb2og/300?n=1&max_age=2592000'
      },
      {
        id: 5,
        desc: '浮光掠影：ACG纯音乐赏析合辑',
        audition: 80.7,
        text: '肥喵',
        url: 'https://p.qpic.cn/music_cover/XMPAjfs5uwGZdWII3osvAvCRyNWx8Pqy5Yice41OCZlBhLtk0p0icNvg/300?n=1&max_age=2592000'
      },
      {
        id: 6,
        desc: 'trip-hop单曲大推荐',
        audition: 35.6,
        text: '哑忍',
        url: 'https://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1&max_age=2592000'
      }
    ],
    toplistData: [
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_200537262.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·流行指数',
        listencount: 2000.0,
        songs: [
          {
            id: 2,
            songname: '默 (Live)',
            singer: '张杰'
          },
          {
            id: 3,
            songname: '月亮粑粑 (Live)',
            singer: '赵雷'
          },
          {
            id: 4,
            songname: 'Uptown Funk (Live)',
            singer: '迪玛希Dimash'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_200380820.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·热歌',
        listencount: 1960.0,
        songs: [
          {
            id: 2,
            songname: '凉凉',
            singer: '杨宗纬/张碧晨'
          },
          {
            id: 3,
            songname: '繁花',
            singer: '董贞'
          },
          {
            id: 4,
            songname: '刚好遇见你',
            singer: '李玉刚'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_33_300_200537262.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·广汽三菱欧蓝德·歌手',
        listencount: 930.0,
        songs: [
          {
            id: 2,
            songname: '默 (Live)',
            singer: '张杰'
          },
          {
            id: 3,
            songname: '月亮粑粑 (Live)',
            singer: '赵雷'
          },
          {
            id: 4,
            songname: '成都',
            singer: '赵雷'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_108986243.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·网络歌曲',
        listencount: 970.0,
        songs: [
          {
            id: 2,
            songname: '勉为其难',
            singer: '王冕'
          },
          {
            id: 3,
            songname: '小拳拳捶你胸口',
            singer: '刘瑞琦'
          },
          {
            id: 4,
            songname: '孤单坠爱',
            singer: '庄心妍'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_200621546.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·内地',
        listencount: 589.0,
        songs: [
          {
            id: 2,
            songname: '繁花',
            singer: '董贞'
          },
          {
            id: 3,
            songname: '如果 What if I said',
            singer: '鹿晗'
          },
          {
            id: 4,
            songname: '就算没有如果',
            singer: '香香'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_200380820.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·港台',
        listencount: 305.0,
        songs: [
          {
            id: 2,
            songname: '凉凉',
            singer: '杨宗纬/张碧晨'
          },
          {
            id: 3,
            songname: '如果 What if I said',
            singer: '鹿晗'
          },
          {
            id: 4,
            songname: '就算没有如果',
            singer: '香香'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_200650888.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·欧美',
        listencount: 940.0,
        songs: [
          {
            id: 2,
            songname: 'Heavy',
            singer: 'Linkin Park/Kiiara'
          },
          {
            id: 3,
            songname: 'Cold',
            singer: 'Maroon 5/Future'
          },
          {
            id: 4,
            songname: 'How Would You Feel (Paean)',
            singer: 'Ed Sheeran'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_200673612.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·韩国',
        listencount: 754.0,
        songs: [
          {
            id: 2,
            songname: '비가와 (Rain) (下雨了)',
            singer: '소유 (昭宥)/백현 (伯贤)'
          },
          {
            id: 3,
            songname: 'YESTERDAY',
            singer: 'Block B (블락비)'
          },
          {
            id: 4,
            songname: '남녀의 온도차 (Our Story)',
            singer: '황치열 (黄致列)/슬기 (涩琪)'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_200372110.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·日本',
        listencount: 196.0,
        songs: [
          {
            id: 2,
            songname: 'Listen',
            singer: 'ONE OK ROCK (ワンオクロック)'
          },
          {
            id: 3,
            songname: 'Zenzenzense',
            singer: 'RADWIMPS (ラッドウィンプス)'
          },
          {
            id: 4,
            songname: '原宿いやほい (原宿IYAHOI)',
            singer: 'きゃりーぱみゅぱみゅ (Kyary Pamyu Pamyu)'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_32_300_200673395.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·音乐人',
        listencount: 196.0,
        songs: [
          {
            id: 2,
            songname: '权力与荣耀',
            singer: '南征北战'
          },
          {
            id: 3,
            songname: '春风十里',
            singer: '鹿先森乐队'
          },
          {
            id: 4,
            songname: '这个年纪',
            singer: '齐一'
          }
        ]
      },
      {
        id: 1,
        url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_200732019.jpg?max_age=2592000&max_age=2592000',
        topic: '巅峰榜·K歌金曲',
        listencount: 247.0,
        songs: [
          {
            id: 2,
            songname: '分手快乐',
            singer: '胡慧'
          },
          {
            id: 3,
            songname: '啷个哩个啷',
            singer: '胡赟兆'
          },
          {
            id: 4,
            songname: '梦望断',
            singer: '莫婉莹'
          }
        ]
      }
    ],
    keyWordTagData: [
      {text: '歌手'},
      {text: '三生三世十里桃花 '},
      {text: '皮皮虾我们走'},
      {text: '那就这样吧'},
      {text: '一人饮酒醉'},
      {text: '刚好遇见你'},
      {text: 'BIGBANG'},
      {text: '告白气球'},
      {text: '大话西游'},
      {text: 'DJ '}
    ],
    bindPlayActionBoolean: false
  }
  return data
}
