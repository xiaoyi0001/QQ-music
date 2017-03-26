webpackJsonp([0,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_IndexPage_IndexPage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_IndexPage_IndexPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_IndexPage_IndexPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_ToplistPage_ToplistPage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_ToplistPage_ToplistPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_ToplistPage_ToplistPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_SearchPage_SearchPage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_SearchPage_SearchPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_SearchPage_SearchPage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_PlaySongPage_PlaySongPage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_PlaySongPage_PlaySongPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_PlaySongPage_PlaySongPage__);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/recom',
    name: 'recom',
    component: __WEBPACK_IMPORTED_MODULE_2_components_IndexPage_IndexPage___default.a
  }, {
    path: '/toplist',
    name: 'toplist',
    component: __WEBPACK_IMPORTED_MODULE_3_components_ToplistPage_ToplistPage___default.a
  }, {
    path: '/playsong',
    name: 'playsong',
    component: __WEBPACK_IMPORTED_MODULE_5_components_PlaySongPage_PlaySongPage___default.a
  }, {
    path: '/search',
    name: 'search',
    component: __WEBPACK_IMPORTED_MODULE_4_components_SearchPage_SearchPage___default.a
  }, {
    path: '*',
    redirect: '/recom'
  }]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_js_data__ = __webpack_require__(18);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

let pageData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__common_js_data__["a" /* getPageData */])();

const state = {
  pageData
};

const mutations = {};
/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: state,
  mutations: mutations
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  "data-v-4d12011c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'swiper-slide',
  ready() {
    this.update();
  },
  mounted() {
    this.update();
  },
  updated() {
    this.update();
  },
  attached() {
    this.update();
  },
  methods: {
    update() {
      if (this.$parent && this.$parent.swiper) {
        this.$parent.swiper.update(true);
        if (this.$parent.options.loop) {
          this.$parent.swiper.destroyLoop();
          this.$parent.swiper.createLoop();
        }
      }
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

var browser = typeof window !== 'undefined';
if (browser) {
  window.Swiper = __webpack_require__(2);
  __webpack_require__(21);
}
/* harmony default export */ __webpack_exports__["default"] = {
  name: 'swiper',
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: 3500
        };
      }
    }
  },
  ready() {
    if (!this.swiper && browser) {
      this.swiper = new Swiper(this.$el, this.options);
    }
  },
  mounted() {
    var self = this;
    var mount = function () {
      if (!self.swiper && browser) {
        delete self.options.notNextTick;
        self.swiper = new Swiper(self.$el, self.options);
      }
    };
    this.options.notNextTick ? mount() : this.$nextTick(mount);
  },
  updated() {
    this.swiper.update();
  },
  beforeDestroy() {
    if (!!this.swiper) {
      this.swiper.destroy();
      delete this.swiper;
    }
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common_js_utils__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    name: 'app',
    data() {
        return {};
    },

    computed: {
        routeListdata() {
            return this.$store.state.pageData.routeListData;
        }
    },
    created() {
        this.$nextTick(() => {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_js_utils__["a" /* setHtmlSize */])();
        });
    },
    methods: {
        changeState(item) {
            this.$store.state.pageData.routeListData.forEach(row => {
                row.isActive = false;
            });
            item.isActive = true;
        },
        _changeState(routename) {
            this.$store.state.pageData.routeListData.forEach(row => {
                if (row.route == routename) {
                    row.isActive = true;
                } else {
                    row.isActive = false;
                }
            });
            if (routename == 'recom') {
                this.$store.state.pageData.routeListData[0]['isActive'] = true;
            }
        },
        changeNavStatusByRoute() {
            if (this.$route.name == 'recom') {
                this._changeState('recom');
            } else if (this.$route.name == 'toplist') {
                this._changeState("toplist");
            } else if (this.$route.name == 'search') {
                this._changeState("search");
            }
        }
    },
    mounted() {
        window.onresize = () => {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_common_js_utils__["a" /* setHtmlSize */])();
        };
        this.$nextTick(() => {
            this.changeNavStatusByRoute();
        });
        this.$watch(function () {
            return this.$store.state.pageData.bindPlayActionBoolean;
        }, function (d) {
            this.$router.replace({
                name: 'playsong'
            });
            this.$store.state.pageData.bindPlayActionBoolean;
        });
    }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_awesome_swiper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_awesome_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_awesome_swiper__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  name: 'indexPage',
  props: {},
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 3000
      },
      swiperListImgUrl: this.$store.state.pageData.swiperListImgUrl,
      radioListData: this.$store.state.pageData.radioListData,
      hotSongListData: this.$store.state.pageData.hotSongListData
    };
  },
  methods: {
    playSong(item) {
      this.$store.state.pageData.bindPlayActionBoolean = true;
    }
  },
  components: {
    swiper: __WEBPACK_IMPORTED_MODULE_0_vue_awesome_swiper__["swiper"],
    swiperSlide: __WEBPACK_IMPORTED_MODULE_0_vue_awesome_swiper__["swiperSlide"]
  }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const h1 = 42;
const h2 = 154;
const h3 = 112;
const t = 3000;
/* harmony default export */ __webpack_exports__["default"] = {
    name: 'play',
    props: {},
    data() {
        return {
            screenHeight: screen.height,
            timer: null,
            topDistance: 0,
            startY: 0,
            moveY: 0,
            num: 0,
            computedTime: 0,
            rubTimer: null,
            computedTimer: null,
            lyricHeight: (() => {
                return screen.height - h2 - h3;
            })(),
            restScreenHeight: (() => {
                return screen.height - h2;
            })(),
            swiperOption: {
                direction: 'vertical',
                spaceBetween: true,
                freeMode: true
            }
        };
    },
    computed: {
        lyricAnimate() {
            //                console.log(this.topDistance);
            return {
                '-webkit-transform': `translate3d(0, ${-this.topDistance}px, 0)`,
                'transform': `translate3d(0, -${this.topDistance}px, 0)`
            };
        }
    },
    methods: {
        _startMove() {
            let self = this;
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                self.topDistance += h1;
                self.num++;
            }, t);
        },
        startComputedTime() {
            clearInterval(this.computedTimer);
            this.computedTime = 0;
            this.computedTimer = setInterval(() => {
                this.computedTime++;
            }, 20);
        },
        touchStart(e) {
            this.startY = e.touches[0]['pageY'];
            this.t2 = this.topDistance;
            this.startComputedTime();
            clearInterval(this.timer);
        },
        touchMove(e) {
            this.moveY = e.touches[0]['pageY'];
            let dis = this.moveY - this.startY;
            $('.box-len').css('transition', 'none');
            if (dis < 0) {
                this.topDistance = this.t2 + Math.abs(dis);
            } else {
                this.topDistance = this.t2 - dis;
            }
        },
        touchEnd(e) {
            $('.box-len').css('transition', '.3s all');
            clearInterval(this.computedTimer);
            if (this.topDistance >= $(".box-len").height() - 200) {
                this.topDistance = $(".box-len").height() - 400;
            } else if (this.topDistance < 0) {
                this.topDistance = 0;
            }
            this._startMove();
        }
    },
    mounted() {
        this._startMove();
    },
    components: {}
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 1.使用vue的vue-awesome-swiper组件实现移动端的触摸滑动效果和轮播图效果;
// 2.使用打包工具webpack对模块进行打包,并使用静态服务器插件webpack-dev-server实现热加载和自动刷新;
// 3.使用vue的路由vue-router组件实现点击菜单栏进行单页面跳转;
// 4.当输入框获得焦点时,隐藏热门搜索模块,显示取消按钮;
// 5.当用户输入内容并按下回车时,根据用户输入的内容使用组件vue-resource实现JSONP的跨域请求,
// 并将请求到的数据显示到搜索结果列表;
// 6.当用户输入的内容不为空或空格且按下回车时,使用window.localStorage的setItem方法将用户输入的内容存储到本地;
// 7.当用户点击删除按钮时,清空输入框内容,如果本地有搜索历史记录,使用window.localStorage的getItem方法从本地获取
// 数据并将搜索历史记录显示在输入框下方;
// 8.当用户点击取消按钮时,使用vue动态绑定标签的class属性隐藏搜索记录并显示热门搜索模块;
// 9.在历史记录模块中,当用户点击删除按钮时,页面中删除这条数据并将存储在本地的该条数据删除;
// 10.当用户点击清空搜索记录按钮时,清空页面上的搜索记录列表并将存储在本地的搜索数据删除;
// 11.当用户点击页面上搜索记录的某一条搜索词时,使用vue的数据双向绑定将该搜索词传到输入框中并在下方显示搜索后的结果.

/* harmony default export */ __webpack_exports__["default"] = {
    name: '',
    props: {},
    data() {
        return {
            screenHeight: screen.height + 'px',
            isShowCancleBtn: false,
            isNeedToDel: false,
            isShowList: false,
            isShowHistory: false,
            isShowClear: false,
            searchName: '',
            musicUrl: '',
            seekList: JSON.parse(window.localStorage.getItem('datalist')) || [],
            songList: {},
            keyWordTagData: this.$store.state.pageData.keyWordTagData
        };
    },
    created() {
        var self = this;
        self.$nextTick(function () {
            self.getFocus();
            self.hideBtn();
            self.writingContent();
            self.clearInputValue();
            self.deleteData();
            self.search();
            self.addSearch();
            self.playMusic();
        });
    },
    methods: {
        getFocus() {
            this.isShowCancleBtn = true;
            if (this.searchName == '' && this.isShowList == false) {
                this.isShowHistory = true;
            }

            if (this.seekList.length != 0) {
                this.isShowClear = true;
            }
        },
        hideBtn() {
            this.isShowCancleBtn = false;
            this.isShowList = false;
            console.log(this.searchName);
            this.searchName = '';
            this.isShowHistory = false;
            this.isShowClear = false;
            this.isNeedToDel = false;
        },
        writingContent() {
            if (this.searchName != '') {
                this.isNeedToDel = true;
                this.isShowList = true;
            } else {
                this.isNeedToDel = false;
            }
        },
        clearInputValue() {
            this.searchName = '';
            this.isNeedToDel = false;
            this.isShowList = false;
            this.isShowHistory = true;
            //如果有历史记录,就显示清空按钮
            if (this.seekList.length != 0) {
                this.isShowClear = true;
            }
            //console.log(this.seekList);
        },
        search() {
            console.log('---' + this.searchName + '---');

            if (this.searchName == '' || this.searchName == null || this.searchName.replace(/\s+/g, '') == '') {
                return false;
            }
            if (this.searchName != '' && this.seekList.indexOf(this.searchName) == -1) {
                this.seekList.unshift(this.searchName);
                //保存数据到本地
                window.localStorage.setItem('datalist', JSON.stringify(this.seekList));
            }
            console.log(1);
            this.isShowHistory = false;
            this.isShowClear = false;
            let self = this;
            vm.$http.jsonp('http://soso.music.qq.com/fcgi-bin/fcg_search_xmldata.fcg', {
                params: {
                    source: 0,
                    type: 'qry_song',
                    out: 'json',
                    p: 1,
                    perpage: 20,
                    ie: 'utf-8',
                    w: this.searchName
                }
            }).then(function (data) {
                data.body.list.splice(2, 1);
                self.songList = data.body.list;
            });
        },
        clear() {
            //清空历史记录时,不再显示历史记录和按钮
            this.seekList = [];
            this.isShowHistory = false;
            this.isShowClear = false;
            window.localStorage.setItem('datalist', JSON.stringify(''));
            console.log('数据被清空了');
        },
        deleteData(index) {
            this.seekList.splice(index, 1);
            //保存数据到本地
            window.localStorage.setItem('datalist', JSON.stringify(this.seekList));
            if (this.seekList.length == 0) {
                this.isShowClear = false;
            }
        },
        addSearch(item) {
            this.searchName = item;
            this.search();
            this.isShowList = true;
        },
        playMusic(name) {
            var self = this;
            console.log(name);
            vm.$http.jsonp('http://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg', {
                params: {
                    key: name,
                    g_tk: 5381,
                    loginUin: 0,
                    hostUin: 0,
                    format: 'jsonp',
                    inCharset: 'utf8',
                    outCharset: 'utf-8',
                    notice: 0,
                    platform: 'yqq',
                    needNewCode: 0
                }, jsonp: 'jsonpCallback'
            }).then(response => {
                if (response.data.code === 0) {
                    self.musicUrl = 'http://ws.stream.qqmusic.qq.com/' + response.data.data.song.itemlist[0].id + '.m4a?fromtag=46';
                }
            });
        }

    }

};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: '',
  props: {},
  data() {
    return {
      toplistData: this.$store.state.pageData.toplistData
    };
  },
  methods: {},
  mounted() {}
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageData;
function getPageData() {
  let data = {
    routeListData: [{
      route: 'remon',
      name: '推荐',
      id: 1,
      isActive: true
    }, {
      route: 'toplist',
      name: '排行榜',
      id: 2,
      isActive: false
    }, {
      route: 'search',
      name: '搜索',
      id: 3,
      isActive: false
    }],
    swiperListImgUrl: ['https://y.gtimg.cn/music/photo_new/T003R720x288M000001otcIo36J3Dg.jpg?max_age=2592000&max_age=2592000', 'https://y.gtimg.cn/music/photo_new/T003R720x288M000001eRW8B3zM7ZC.jpg?max_age=2592000&max_age=2592000', 'https://y.gtimg.cn/music/photo_new/T003R720x288M000000KdUD90aVC89.jpg?max_age=2592000&max_age=2592000', 'https://y.gtimg.cn/music/photo_new/T003R720x288M000000EDhgJ2RWmXF.jpg?max_age=2592000&max_age=2592000', 'https://y.gtimg.cn/music/photo_new/T003R720x288M000001ImP933y6YHF.jpg?max_age=2592000&max_age=2592000'],
    radioListData: [{
      id: 1,
      desc: '热歌',
      route: 'playsong',
      params: {
        id: 1
      },
      url: 'https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg?max_age=2592000&max_age=2592000'
    }, {
      id: 2,
      desc: '一人一首招牌歌',
      route: 'plasong',
      params: {
        id: 2
      },
      url: 'https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000&max_age=2592000'
    }],
    hotSongListData: [{
      id: 1,
      desc: '催泪大杀器！盘点演唱会经典万人大合唱',
      audition: 210.4,
      text: 'Harry',
      url: 'https://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1&max_age=2592000'
    }, {
      id: 2,
      desc: '纳尼？这些华语歌手竟然会唱日语歌！',
      audition: 59.6,
      text: '风吹草地',
      url: 'https://p.qpic.cn/music_cover/z8wAFqicQ1qhImeiajkrgiaR4hYM3pzsUULFnicXshFXdw9uGkm261Ex9g/300?n=1&max_age=2592000'
    }, {
      id: 3,
      desc: '精选内地十大民谣歌手代表作',
      audition: 61.8,
      text: '１`s   ヽ',
      url: 'https://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7X66OknPIhic2mKDgicawN4qThIR7yhYY1w/300?n=1&max_age=2592000'
    }, {
      id: 4,
      desc: '2016Billboard嘻哈榜精选',
      audition: 114.5,
      text: '',
      url: 'https://p.qpic.cn/music_cover/tkduvk4dwqBxwzZhsNe0nwkwyiaLHVkxtla7REsX0yNkhibOH3Bdb2og/300?n=1&max_age=2592000'
    }, {
      id: 5,
      desc: '浮光掠影：ACG纯音乐赏析合辑',
      audition: 80.7,
      text: '肥喵',
      url: 'https://p.qpic.cn/music_cover/XMPAjfs5uwGZdWII3osvAvCRyNWx8Pqy5Yice41OCZlBhLtk0p0icNvg/300?n=1&max_age=2592000'
    }, {
      id: 6,
      desc: 'trip-hop单曲大推荐',
      audition: 35.6,
      text: '哑忍',
      url: 'https://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1&max_age=2592000'
    }],
    toplistData: [{
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_200537262.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·流行指数',
      listencount: 2000.0,
      songs: [{
        id: 2,
        songname: '默 (Live)',
        singer: '张杰'
      }, {
        id: 3,
        songname: '月亮粑粑 (Live)',
        singer: '赵雷'
      }, {
        id: 4,
        songname: 'Uptown Funk (Live)',
        singer: '迪玛希Dimash'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_200380820.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·热歌',
      listencount: 1960.0,
      songs: [{
        id: 2,
        songname: '凉凉',
        singer: '杨宗纬/张碧晨'
      }, {
        id: 3,
        songname: '繁花',
        singer: '董贞'
      }, {
        id: 4,
        songname: '刚好遇见你',
        singer: '李玉刚'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_33_300_200537262.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·广汽三菱欧蓝德·歌手',
      listencount: 930.0,
      songs: [{
        id: 2,
        songname: '默 (Live)',
        singer: '张杰'
      }, {
        id: 3,
        songname: '月亮粑粑 (Live)',
        singer: '赵雷'
      }, {
        id: 4,
        songname: '成都',
        singer: '赵雷'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_108986243.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·网络歌曲',
      listencount: 970.0,
      songs: [{
        id: 2,
        songname: '勉为其难',
        singer: '王冕'
      }, {
        id: 3,
        songname: '小拳拳捶你胸口',
        singer: '刘瑞琦'
      }, {
        id: 4,
        songname: '孤单坠爱',
        singer: '庄心妍'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_200621546.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·内地',
      listencount: 589.0,
      songs: [{
        id: 2,
        songname: '繁花',
        singer: '董贞'
      }, {
        id: 3,
        songname: '如果 What if I said',
        singer: '鹿晗'
      }, {
        id: 4,
        songname: '就算没有如果',
        singer: '香香'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_200380820.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·港台',
      listencount: 305.0,
      songs: [{
        id: 2,
        songname: '凉凉',
        singer: '杨宗纬/张碧晨'
      }, {
        id: 3,
        songname: '如果 What if I said',
        singer: '鹿晗'
      }, {
        id: 4,
        songname: '就算没有如果',
        singer: '香香'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_200650888.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·欧美',
      listencount: 940.0,
      songs: [{
        id: 2,
        songname: 'Heavy',
        singer: 'Linkin Park/Kiiara'
      }, {
        id: 3,
        songname: 'Cold',
        singer: 'Maroon 5/Future'
      }, {
        id: 4,
        songname: 'How Would You Feel (Paean)',
        singer: 'Ed Sheeran'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_200673612.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·韩国',
      listencount: 754.0,
      songs: [{
        id: 2,
        songname: '비가와 (Rain) (下雨了)',
        singer: '소유 (昭宥)/백현 (伯贤)'
      }, {
        id: 3,
        songname: 'YESTERDAY',
        singer: 'Block B (블락비)'
      }, {
        id: 4,
        songname: '남녀의 온도차 (Our Story)',
        singer: '황치열 (黄致列)/슬기 (涩琪)'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_200372110.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·日本',
      listencount: 196.0,
      songs: [{
        id: 2,
        songname: 'Listen',
        singer: 'ONE OK ROCK (ワンオクロック)'
      }, {
        id: 3,
        songname: 'Zenzenzense',
        singer: 'RADWIMPS (ラッドウィンプス)'
      }, {
        id: 4,
        songname: '原宿いやほい (原宿IYAHOI)',
        singer: 'きゃりーぱみゅぱみゅ (Kyary Pamyu Pamyu)'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_32_300_200673395.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·音乐人',
      listencount: 196.0,
      songs: [{
        id: 2,
        songname: '权力与荣耀',
        singer: '南征北战'
      }, {
        id: 3,
        songname: '春风十里',
        singer: '鹿先森乐队'
      }, {
        id: 4,
        songname: '这个年纪',
        singer: '齐一'
      }]
    }, {
      id: 1,
      url: 'https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_200732019.jpg?max_age=2592000&max_age=2592000',
      topic: '巅峰榜·K歌金曲',
      listencount: 247.0,
      songs: [{
        id: 2,
        songname: '分手快乐',
        singer: '胡慧'
      }, {
        id: 3,
        songname: '啷个哩个啷',
        singer: '胡赟兆'
      }, {
        id: 4,
        songname: '梦望断',
        singer: '莫婉莹'
      }]
    }],
    keyWordTagData: [{ text: '歌手' }, { text: '三生三世十里桃花 ' }, { text: '皮皮虾我们走' }, { text: '那就这样吧' }, { text: '一人饮酒醉' }, { text: '刚好遇见你' }, { text: 'BIGBANG' }, { text: '告白气球' }, { text: '大话西游' }, { text: 'DJ ' }],
    bindPlayActionBoolean: false
  };
  return data;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setHtmlSize;
/* unused harmony export addTransitionEndEvent */
/* unused harmony export removeTransitionEndEvent */
/**
 * 设置根HTML font-size
 */
function setHtmlSize() {
  let iW = window.innerWidth; // screen.width;
  document.getElementsByTagName("html")[0].style.fontSize = iW / 3.75 + "px";
}

/**
 * 绑定transitionEnd事件
 * @param obj 对象
 * @param callback 会调
 */
function addTransitionEndEvent(obj, callback) {
  obj.addEventListener('webkitTransitionEnd', function () {
    callback && callback();
  }, false);
  obj.addEventListener('transitionEnd', function () {
    callback && callback();
  }, false);
}

/**
 * 移除transitionEnd事件
 * @param obj
 * @param end
 */
function removeTransitionEndEvent(obj, end) {
  obj.removeEventListener('webkitTransitionEnd', end, false);
  obj.removeEventListener('transitionEnd', end, false);
}

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  "data-v-a4f5f34e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  "data-v-34ac3655",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  "data-v-0bca91b5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  "data-v-4f55549b",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search-wrapper",
    style: ({
      'height': _vm.screenHeight
    })
  }, [_c('div', {
    staticClass: "bar"
  }, [_c('div', {
    staticClass: "input-wrapper f-pr"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.search()
      }
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchName),
      expression: "searchName"
    }],
    staticClass: "search-input",
    attrs: {
      "type": "search",
      "name": "",
      "autocomplete": "off",
      "placeholder": "搜索歌曲、歌单、专辑"
    },
    domProps: {
      "value": (_vm.searchName)
    },
    on: {
      "focus": _vm.getFocus,
      "keyup": _vm.writingContent,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "icon icon-search f-pa f-ib"
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isNeedToDel),
      expression: "isNeedToDel"
    }],
    staticClass: "del-btn f-pa f-ib",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clearInputValue($event)
      }
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowCancleBtn),
      expression: "isShowCancleBtn"
    }],
    staticClass: "cancle-btn",
    on: {
      "click": _vm.hideBtn
    }
  }, [_vm._v("取消")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isShowCancleBtn),
      expression: "!isShowCancleBtn"
    }],
    staticClass: "hot-key-wrapper"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v("热门搜索")]), _vm._v(" "), _c('div', {
    staticClass: "tag-w"
  }, _vm._l((_vm.keyWordTagData), function(item, index) {
    return _c('a', {
      staticClass: "tag f-ib",
      class: {
        'hot': index == 0
      },
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v("\n                " + _vm._s(item.text) + "\n            ")])
  }))]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowList),
      expression: "isShowList"
    }],
    staticClass: "list"
  }, _vm._l((_vm.songList), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.playMusic(item.songname.replace(/&lt\;.*?&gt\;/ig, ''))
        }
      }
    }, [_c('i'), _vm._v(" "), _c('h6', {
      domProps: {
        "innerHTML": _vm._s(item.songname.replace(/&lt\;.*?&gt\;/ig, ''))
      }
    }), _vm._v(" "), _c('p', {
      domProps: {
        "innerHTML": _vm._s((item.singername).replace(/[^\u4e00-\u9fa5]/gi, ''))
      }
    })])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowHistory),
      expression: "isShowHistory"
    }],
    staticClass: "history"
  }, [_vm._l((_vm.seekList), function(item, index) {
    return _c('li', [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_c('span', {
      staticClass: "hist"
    }), _vm._v(" "), _c('span', {
      staticClass: "text",
      on: {
        "click": function($event) {
          _vm.addSearch(item)
        }
      }
    }, [_vm._v(_vm._s(item))]), _vm._v(" "), _c('span', {
      staticClass: "fork",
      on: {
        "click": function($event) {
          $event.preventDefault();
          _vm.deleteData(index)
        }
      }
    })])])
  }), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowClear),
      expression: "isShowClear"
    }]
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.clear()
      }
    }
  }, [_vm._v("清除搜索记录")])])], 2), _vm._v(" "), _c('audio', {
    attrs: {
      "id": "audio",
      "src": _vm.musicUrl,
      "controls": "",
      "autoplay": "",
      "loop": ""
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "play-wrapper f-pa f-w",
    style: ({
      'height': _vm.screenHeight
    })
  }, [_c('div', {
    staticClass: "main-box f-pa f-w box-hook",
    style: ({
      'height': _vm.restScreenHeight + 'px'
    })
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "lyric-wrapper f-pr f-w",
    style: ({
      'height': _vm.lyricHeight + 'px'
    })
  }, [_c('div', {
    staticClass: "lyric f-pa f-w"
  }, [_c('div', {
    staticClass: "box f-w f-pr"
  }, [_c('div', {
    staticClass: "box-len f-pa f-w",
    style: (_vm.lyricAnimate),
    on: {
      "touchstart": _vm.touchStart,
      "touchend": _vm.touchEnd,
      "touchmove": _vm.touchMove
    }
  }, _vm._l((100), function(item, index) {
    return _c('div', {
      staticClass: "item"
    }, [_c('p', {
      class: {
        'current': index == _vm.num + 2
      }
    }, [_vm._v("话好像还没说完- " + _vm._s(index + 1))])])
  }))])])])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "bg blur f-pa f-w",
    style: ({
      'height': _vm.screenHeight
    })
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-mask f-pa f-w"
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "song-info f-pr"
  }, [_c('span', {
    staticClass: "singer-pic f-pr"
  }, [_c('img', {
    attrs: {
      "src": "https://y.gtimg.cn/music/photo_new/T002R150x150M000002Jy7u74gU4a8.jpg?max_age=2592000",
      "width": "100%",
      "height": "100%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text f-pr f-h f-w"
  }, [_c('h3', {
    staticClass: "name f-pr f-w"
  }, [_c('span', {
    staticClass: "ellipsis f-ib f-w f-h"
  }, [_vm._v("吻别")])]), _vm._v(" "), _c('p', {
    staticClass: "name song-name f-pa f-w"
  }, [_c('span', {
    staticClass: "ellipsis f-ib f-w f-h"
  }, [_vm._v("王妃")])])]), _vm._v(" "), _c('a', {
    staticClass: "f-ib icon-play f-pa",
    attrs: {
      "href": "javascript:;"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "control f-pa f-w"
  }, [_c('div', {
    staticClass: "opearte-wrapper left f-pa"
  }, [_c('a', {
    staticClass: "f-ib link",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "f-ib"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "opearte-wrapper f-pa right"
  }, [_c('a', {
    staticClass: "f-ib link",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "f-ib"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "btns f-pa f-tc"
  }, [_c('a', {
    staticClass: "download f-ib",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("下载这首歌")])])])
}]}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_vm._t("parallax-bg"), _vm._v(" "), _c('div', {
    staticClass: "swiper-wrapper"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("pagination"), _vm._v(" "), _vm._t("button-prev"), _vm._v(" "), _vm._t("button-next"), _vm._v(" "), _vm._t("scrollbar")], 2)
},staticRenderFns: []}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-slide"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-wrapper",
    attrs: {
      "id": "app"
    }
  }, [_vm._m(0), _vm._v(" "), _c('nav', {
    staticClass: "m-nav"
  }, _vm._l((_vm.routeListdata), function(val, index) {
    return _c('router-link', {
      key: index,
      staticClass: "item f-pr f-ib f-tc",
      class: {
        'current': val.isActive
      },
      attrs: {
        "to": {
          path: val.route
        }
      }
    }, [_c('span', {
      staticClass: "f-ib f-w f-h",
      on: {
        "click": function($event) {
          _vm.changeState(val)
        }
      }
    }, [_vm._v("\n        " + _vm._s(val.name) + "\n    ")])])
  })), _vm._v(" "), _c('keep-alive', [_c('router-view')], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "m-header f-pr"
  }, [_c('i', {
    staticClass: "logo f-pa"
  }), _vm._v(" "), _c('a', {
    staticClass: "f-ib f-pa download-btn",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("下载APP")])])
}]}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-wrapper"
  }, [_c('ul', {
    staticClass: "list"
  }, _vm._l((_vm.toplistData), function(item, index) {
    return _c('li', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "main f-w f-h"
    }, [_c('a', {
      staticClass: "f-pr media",
      attrs: {
        "href": "javascript:;"
      }
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "width": "100%",
        "height": "100%"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "listen-count f-pa"
    }, [_c('i', {
      staticClass: "icon icon-listen f-ib"
    }), _vm._v(_vm._s(item.listencount) + "万")])]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('div', {
      staticClass: "cont f-pr f-w f-h"
    }, [_c('h3', {
      staticClass: "topic ellipsis"
    }, [_vm._v(_vm._s(item.topic))]), _vm._v(" "), _vm._l((item.songs), function(val, k) {
      return _c('p', {
        staticClass: "ellipsis song"
      }, [_vm._v(_vm._s(k + 1)), _c('span', {
        staticClass: "name"
      }, [_vm._v(_vm._s(val.songname))]), _vm._v("- " + _vm._s(val.singer))])
    }), _vm._v(" "), _c('i', {
      staticClass: "arrow f-pa"
    })], 2)])])])
  })), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "list_more f-tc"
  }, [_c('a', {
    staticClass: "f-ib",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("去客户端发现更多好音乐 >")])])
}]}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-page-wrapper"
  }, [_c('section', {
    staticClass: "swiper-wrapper"
  }, [_c('swiper', {
    staticClass: "swiper-component-wrapper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, [_vm._l((_vm.swiperListImgUrl), function(item, index) {
    return _c('swiper-slide', {
      key: index
    }, [_c('img', {
      attrs: {
        "src": item,
        "alt": "",
        "width": "100%",
        "height": "100%"
      }
    })])
  }), _vm._v(" "), _c('div', {
    staticClass: "swiper-pagination",
    slot: "pagination"
  })], 2)], 1), _vm._v(" "), _c('section', {
    staticClass: "box f-w"
  }, [_c('div', {
    staticClass: "radio-wrapper f-w"
  }, [_c('h2', {
    staticClass: "title"
  }, [_vm._v("电台")]), _vm._v(" "), _c('ul', {
    staticClass: "list f-clearfix"
  }, _vm._l((_vm.radioListData), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "item f-ib f-fl",
      on: {
        "click": function($event) {
          _vm.playSong(item)
        }
      }
    }, [_c('a', {
      staticClass: "f-ib f-w f-h link",
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_c('div', {
      staticClass: "media f-pr"
    }, [_c('img', {
      staticClass: "pic f-pa",
      attrs: {
        "src": item.url,
        "width": "100%"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "icon icon_play f-pa"
    })]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('h3', {
      staticClass: "list_tit tit_two_row"
    }, [_vm._v(_vm._s(item.desc))])])])])
  }))])]), _vm._v(" "), _c('section', {
    staticClass: "box f-w"
  }, [_c('div', {
    staticClass: "radio-wrapper f-w"
  }, [_c('h2', {
    staticClass: "title"
  }, [_vm._v("热门歌单")]), _vm._v(" "), _c('ul', {
    staticClass: "list f-clearfix"
  }, _vm._l((_vm.hotSongListData), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "item f-ib f-fl"
    }, [_c('a', {
      staticClass: "f-ib f-w f-h link",
      attrs: {
        "href": "javascript:void(0)"
      }
    }, [_c('div', {
      staticClass: "media f-pr"
    }, [_c('img', {
      staticClass: "pic f-pa",
      attrs: {
        "src": item.url,
        "width": "100%"
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "icon icon_play f-pa"
    }), _vm._v(" "), _c('span', {
      staticClass: "listen-count f-pa f-ib"
    }, [_c('i', {
      staticClass: "icon icon_listen f-ib"
    }), _vm._v("\n                " + _vm._s(item.audition) + "万\n              ")])]), _vm._v(" "), _c('div', {
      staticClass: "info"
    }, [_c('h3', {
      staticClass: "desc ellipsis"
    }, [_vm._v(_vm._s(item.desc))]), _vm._v(" "), _c('p', {
      staticClass: "text"
    }, [_vm._v(_vm._s(item.text))])])])])
  })), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "list_more f-tc"
  }, [_c('a', {
    staticClass: "f-ib",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("去客户端发现更多好音乐 >")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "f-tc"
  }, [_c('div', {
    staticClass: "version_tab f-tc"
  }, [_c('a', {
    attrs: {
      "href": "http://y.qq.com/?ADTAG=myqq&nomobile=1#type=index"
    }
  }, [_vm._v("查看电脑版网页")])]), _vm._v(" "), _c('div', {
    staticClass: "footer_logo f-ib"
  }, [_vm._v("QQ音乐")])])
}]}

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 48 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mint_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mint_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuex_store__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_resource__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_resource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_resource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_css_reset_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_common_css_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_common_css_reset_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






//    import vueForm from 'vue-form';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_vue_resource___default.a);


/* eslint-disable no-new */
window.vm = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_4__vuex_store__["a" /* default */],
  Mint: __WEBPACK_IMPORTED_MODULE_3_mint_ui___default.a,
  vueResource: __WEBPACK_IMPORTED_MODULE_5_vue_resource___default.a,
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ })
],[49]);
//# sourceMappingURL=app.f967816af690a4175254.js.map
