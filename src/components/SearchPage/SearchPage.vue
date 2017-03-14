<template>
    <div class="search-wrapper" :style="{'height': screenHeight}">
        <div class="bar">
            <div class="input-wrapper f-pr">
                <form @submit.prevent="search()">
                    <input type="search" @focus="getFocus" v-model="searchName" @keyup="writingContent"
                           class="search-input" name="" autocomplete="off" placeholder="搜索歌曲、歌单、专辑">
                </form>
                <span class="icon icon-search f-pa f-ib"></span>
                <span class="del-btn f-pa f-ib" v-show="isNeedToDel" @click.stop="clearInputValue"></span>
            </div>
            <div class="cancle-btn" v-show="isShowCancleBtn" @click="hideBtn">取消</div>
        </div>
        <div class="hot-key-wrapper" v-show="!isShowCancleBtn">
            <h3 class="title">热门搜索</h3>
            <div class="tag-w">
                <a href="javascript:;" class="tag f-ib" v-for="(item, index) in keyWordTagData"
                   :class="{'hot':index == 0}">
                    {{item.text}}
                </a>
            </div>
        </div>
        <ul class="list" v-show="isShowList">
            <li v-for="item in songList" @click="playMusic(item.songname.replace(/&lt\;.*?&gt\;/ig,''))">
                <i></i>
                <h6 v-html="item.songname.replace(/&lt\;.*?&gt\;/ig,'')">
                </h6>
                <p v-html="(item.singername).replace(/[^\u4e00-\u9fa5]/gi,'')">
                </p>
            </li>
        </ul>
        <div class="history" v-show="isShowHistory">
            <li v-for="(item, index) in seekList">
                <a href="javascript:;" @click="addSearch(item)">
                    <span class="hist"></span>
                    <span class="text">{{item}}</span>
                    <span class="fork" @click.prevent="deleteData(index)"></span>
                </a>
            </li>

            <p v-show="isShowClear">
                <a href="javascript:;" @click.prevent="clear()">清除搜索记录</a>
            </p>
        </div>
        <audio id="audio" :src="musicUrl" controls autoplay loop></audio>
    </div>
</template>
<script>
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

    export default {
        name: '',
        props: {},
        data () {
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
            }
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
            })
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
            search(){
                console.log('---' + this.searchName + '---');

                if (this.searchName == '' || this.searchName == null || (this.searchName).replace(/\s+/g, '') == '') {
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
                })
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
                }).then((response) => {
                    if (response.data.code === 0) {
                        self.musicUrl = 'http://ws.stream.qqmusic.qq.com/'+response.data.data.song.itemlist[0].id+'.m4a?fromtag=46';
                    }
                })
            }

        }

    };

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/css/computed.styl';

    .search-wrapper
        background: #fff
        r1(font-size, 15)
        .bar
            r1(padding, 10)
            background: #f4f4f4
            display: -webkit-box
            display: box
            -webkit-box-orient: horizontal
            -webkit-box-align: center
            box-orient: horizontal
            box-align: center
            .input-wrapper
                background: #fff
                r1(border-radius, 3)
                r2(padding-top, 8, padding-bottom, 8)
                r2(padding-left, 35, padding-right, 12)
                box-flex: 1
                -webkit-box-flex: 1
                .search-input
                    r2(height, 20, line-height, 20)
                    width: 100%
                    color: rgba(0, 0, 0, .3)
                    border: none
                    r1(font-size, 14)
                    -webkit-appearance: textfield
                    appearance: textfield
                .icon-search
                    r2(width, 18, height, 18)
                    r2(left, 10, top, 9)
                    background: url(../../common/images/search.png)
                    background-repeat: no-repeat
                    background-size: cover
                .del-btn
                    r2(width, 18, height, 18)
                    r1(border-radius, 9)
                    r2(top, 9, right, 12)
                    background: #b1b1b1 url(../../common/images/close.png)
                    background-repeat: no-repeat
                    background-size: cover
            .cancle-btn
                r2(height, 36, line-height, 36)
                r1(font-size, 14)
                r2(padding-left, 10, padding-right, 10)
        .hot-key-wrapper
            r2(padding-left, 15, padding-right, 15)
            r2(padding-top, 15, padding-bottom, 10)
            .title
                color: rgba(0, 0, 0, .6)
                r1(margin-bottom, 8)
                font-weight: bold
                r1(font-size, 14)
            .tag-w
                .tag
                    r1(font-size, 14)
                    r2(padding-left, 10, padding-right, 10)
                    r2(margin-right, 14, margin-bottom, 10)
                    r1(border-radius, 99)
                    border: 1px solid rgba(0, 0, 0, .6)
                    word-break: break-all
                    r2(line-height, 36, height, 36)
                .hot
                    color: #fc4524
                    border-color: #fc4524
        .list
            background-color: #fff
            li
                position: relative
                height: 55px
                padding-left: 56px
                overflow: hidden
                i
                    position: absolute
                    top: 18px
                    left: 18px
                    width: 22px
                    height: 20px
                    background-position: 0 0
                    background-image: url(../../assets/m.png)
                    background-repeat: no-repeat
                    background-size: 22px 30px

                &::after
                    content: ""
                    position: absolute
                    height: 1px
                    top: 0
                    left: 0
                    right: 0
                    background: #e5e5e5

                h6
                    margin: 10px 0 4px
                    line-height: 18px
                    font-size: 16px
                    font-weight: normal
                    color: #000
                p
                    font-size: 12px
                    color #868686
        .history

            li
                border-top: 1px solid #ededed
                padding: 0 15px
                a
                    position: relative
                    display: block
                    height: 44px
                    line-height: 44px
                    .hist
                        position: absolute
                        left: 0
                        top: 12px
                        width: 20px
                        height: 20px
                        background-image: url(../../assets/z.png)
                        background-repeat: no-repeat
                        background-size: cover
                        text-indent: -999px
                    .text
                        position: absolute
                        left: 40px
                        right: 50px
                        display: block
                        height: 44px
                        line-height: 44px
                        color: #000
                        font-size: 14px
                        white-space: nowrap
                        overflow: hidden
                        text-overflow: ellipsis
                    .fork
                        position: absolute
                        right: 0
                        top: 12px
                        width: 20px
                        height: 20px
                        &::before
                            width: 17px
                            height: 1px
                            top: 8px
                            position: absolute
                            left: 0;
                            content: ""
                            background: rgba(0, 0, 0, .6)
                            -webkit-transform: rotate(45deg)
                        &::after
                            width: 1px
                            height: 17px
                            left: 8px
                            position: absolute
                            top: 0
                            content: ""
                            background: rgba(0, 0, 0, .6)
                            -webkit-transform: rotate(45deg)

            p
                text-align: center
                height: 44px
                line-height: 44px
                a
                    display: inline-block
                    line-height: 44px
                    color: #47c88a
                    font-size: 12px
    .music
        left: 0.413333rem

</style>
