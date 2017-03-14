<template>
    <div id="app" class="app-wrapper">
        <header class="m-header f-pr">
            <i class="logo f-pa"></i>
            <a href="javascript:void(0)" class="f-ib f-pa download-btn">下载APP</a>
        </header>
        <nav class="m-nav">
            <router-link class="item f-pr f-ib f-tc" v-for="(val, index) in routeListdata"
                         :key="index" :class="{'current': val.isActive}"
                         :to="{path: val.route}">
        <span class="f-ib f-w f-h"
              @click="changeState(val)">
            {{val.name}}
        </span>
            </router-link>
        </nav>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>
    import {setHtmlSize} from 'common/js/utils'

    export default {
        name: 'app',
        data(){
            return {}
        },

        computed: {
            routeListdata() {
                return this.$store.state.pageData.routeListData
            }
        },
        created() {
            this.$nextTick(() => {
                setHtmlSize()
            })
        },
        methods: {
            changeState(item) {
                this.$store.state.pageData.routeListData.forEach((row) => {
                    row.isActive = false;
                });
                item.isActive = true;
            },
            _changeState(routename){
                this.$store.state.pageData.routeListData.forEach((row) => {
                    if (row.route == routename) {
                        row.isActive = true
                    } else {
                        row.isActive = false
                    }
                });
                if (routename == 'recom') {
                    this.$store.state.pageData.routeListData[0]['isActive'] = true
                }
            },
            changeNavStatusByRoute() {
                if (this.$route.name == 'recom') {
                    this._changeState('recom')
                } else if (this.$route.name == 'toplist') {
                    this._changeState("toplist")
                } else if (this.$route.name == 'search') {
                    this._changeState("search")
                }
            }
        },
        mounted() {
            window.onresize = () => {
                setHtmlSize()
            };
            this.$nextTick(() => {
                this.changeNavStatusByRoute()
            });
            this.$watch(function () {
                return this.$store.state.pageData.bindPlayActionBoolean
            }, function (d) {
                this.$router.replace({
                    name: 'playsong'
                });
                this.$store.state.pageData.bindPlayActionBoolean
            })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import 'common/css/computed.styl';

    .app-wrapper
        r1(font-size, 15)
        .m-header
            r1(height, 44)
            background: #31c27c
            .logo
                r2(width, 90, height, 25)
                r2(top, 9, left, 10)
                background: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423) no-repeat
                background-size: cover
                display: block
            .download-btn
                r2(right, 10, top, 8)
                r1(width, 81)
                r2(height, 28, line-height, 28)
                r2(padding-left, 12, padding-rght, 12)
                r1(border-radius, 99)
                background: #149c5a
                color: #fff
        .m-nav
            display: flex
            background: #fff
            r1(height, 40)
            .item
                flex: 1
                r1(line-height, 40)
                color: rgba(0, 0, 0, .6)
                r1(font-size, 16)
                &.current
                    color: #31c27c
                    &:after
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        height: 2px;
                        background: #31c27c;
</style>
