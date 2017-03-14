<template>
    <div class="play-wrapper f-pa f-w" :style="{'height': screenHeight}">
        <div class="main-box f-pa f-w box-hook" :style="{'height': restScreenHeight + 'px'}">
            <div class="item">
                <div class="song-info f-pr">
              <span class="singer-pic f-pr">
                <img src="https://y.gtimg.cn/music/photo_new/T002R150x150M000002Jy7u74gU4a8.jpg?max_age=2592000"
                     width="100%" height="100%">
              </span>
                    <div class="text f-pr f-h f-w">
                        <h3 class="name f-pr f-w">
                            <span class="ellipsis f-ib f-w f-h">吻别</span>
                        </h3>
                        <p class="name song-name f-pa f-w">
                            <span class="ellipsis f-ib f-w f-h">王妃</span>
                        </p>
                    </div>
                    <a href="javascript:;" class="f-ib icon-play f-pa"></a>
                </div>
                <div class="lyric-wrapper f-pr f-w" :style="{'height': lyricHeight + 'px'}">
                    <div class="lyric f-pa f-w">
                        <div class="box f-w f-pr">
                            <div class="box-len f-pa f-w" :style="lyricAnimate" @touchstart="touchStart"
                                 @touchend="touchEnd" @touchmove="touchMove">
                                <div class="item" v-for="(item, index) in 100">
                                    <p class="" :class="{'current': index == num+2}">话好像还没说完- {{index + 1}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="control f-pa f-w">
            <div class="opearte-wrapper left f-pa">
                <a href="javascript:;" class="f-ib link"> <i class="f-ib"></i> </a>
            </div>
            <div class="opearte-wrapper f-pa right">
                <a href="javascript:;" class="f-ib link"> <i class="f-ib"></i> </a>
            </div>
            <div class="btns f-pa f-tc">
                <a href="javascript:;" class="download f-ib">下载这首歌</a>
            </div>
        </div>
        <div class="bg blur f-pa f-w" :style="{'height': screenHeight}"></div>
        <div class="bg-mask f-pa f-w"></div>

    </div>
</template>
<script>
    const h1 = 42;
    const h2 = 154;
    const h3 = 112;
    const t = 3000;
    export default{
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
                    return screen.height - h2 - h3
                })(),
                restScreenHeight: (() => {
                    return screen.height - h2
                })(),
                swiperOption: {
                    direction: 'vertical',
                    spaceBetween: true,
                    freeMode: true
                }
            }
        },
        computed: {
            lyricAnimate() {
//                console.log(this.topDistance);
                return {
                    '-webkit-transform': `translate3d(0, ${-this.topDistance}px, 0)`,
                    'transform': `translate3d(0, -${this.topDistance}px, 0)`,
                }
            }
        },
        methods: {
            _startMove() {
                let self = this;
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    self.topDistance += h1;
                    self.num ++;
                }, t)
            },
            startComputedTime() {
                clearInterval(this.computedTimer);
                this.computedTime = 0;
                this.computedTimer = setInterval(() => {
                    this.computedTime++
                }, 20)
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
                    this.topDistance = this.t2 + Math.abs(dis)
                } else {
                    this.topDistance = this.t2 - dis
                }
            },
            touchEnd(e) {
                $('.box-len').css('transition', '.3s all');
                clearInterval(this.computedTimer);
                if (this.topDistance >= $(".box-len").height() - 200) {
                    this.topDistance = $(".box-len").height() - 400
                } else if (this.topDistance < 0) {
                    this.topDistance = 0
                }
                this._startMove();
            },
        },
        mounted() {
            this._startMove()
        },
        components: {}
    };
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/css/computed.styl';

    .play-wrapper
        r2(left, 0, top, 0)
        r1(bottom, 0)
        overflow: hidden
        background: #f2f2f2
        .main-box
            r2(left, 0, top, 0)
            z-index: 4
            .item
                .song-info
                    background: rgba(0, 0, 0, .4)
                    display: flex
                    padding-left: 15px
                    padding-right: 80px
                    padding-top: 15px
                    padding-bottom: 15px
                    .singer-pic
                        width: 80px
                        margin-right: 15px
                        overflow: hidden
                        display: block
                        &::after
                            content: ""
                            display: block
                    .text
                        display: flex
                        -webkit-flex: 1
                        flex: 1
                        overflow: hidden
                        r1(padding-top, 10)
                        r1(height, 80)
                        .name
                            r2(height, 30, line-height, 30)
                            r1(font-size, 18)
                            color: #fff
                            font-weight: normal
                        .song-name
                            r1(font-size, 14)
                            r2(left, 0, top, 40)
                    .icon-play
                        r1(right, 25)
                        top: 50%
                        r2(width, 43, height, 43)
                        r1(margin-top, -22)
                        background: rgba(0, 0, 0, .1)
                        border-radius: 200px
                        background: url(../../common/images/stop.png) no-repeat
                        background-size: cover
                .lyric-wrapper
                    margin-top: 20px
                    .lyric
                        display: flex
                        r2(left, 0, top, 0)
                        r1(bottom, 0)
                        overflow: hidden
                        .box
                            r1(height, 336)
                            overflow: hidden
                            position: relative
                            right: 0
                            r2(padding-left, 10, padding-right, 10)
                            .box-len
                                r1(min-height, 150)
                                overflow: hidden
                                r2(left, 0, top, 0)
                                transition: .2s all ease-out
                                -webkit-transition: .2s all ease-out
                                .item
                                    r2(height, 42, line-height, 42)
                                    p
                                        r2(height, 42, line-height, 42)
                                        overflow: hidden
                                        text-overflow: ellipsis
                                        white-space: nowrap
                                        r1(font-size, 16)
                                        color: rgba(255, 255, 255, .6)
                                        text-align: center
                                        &.current
                                            color: #31c27c;

    .control
        r2(left, 0, bottom, 0)
        z-index: 4
        height: 154px

    .bg
        z-index: 1
        background: url(https://y.gtimg.cn/music/photo_new/T002R150x150M000002Jy7u74gU4a8.jpg?max_age=2592000) no-repeat
        background-size: cover
        r2(left, 0, bottom, 0)
        r1(top, 0)
        background-position: bottom center

    .blur
        filter: blur(15px)
        -webkit-filter: blur(15)
        transform: scale(1.5)
        -webkit-transform: scale(1.5)

    .bg-mask
        r2(left, 0, bottom, 0)
        r1(top, 0)
        background: rgba(0, 0, 0, .6)
        z-index: 2

    .opearte-wrapper
        &.left
            r2(left, 15, top, 0)
            .link
                r2(width, 40, height, 40)
                r1(margin-left, 5)
                i
                    width: 24px
                    height: 18px
                    r1(margin-top, 11)
                    background-image: url(https://y.gtimg.cn/mediastyle/mobile/app/share/img/sprite_play.png?max_age=2592000&d=20151203183007)
                    background-repeat: no-repeat
                    background-size: 40px 350px
                    background-position: 0 -240px
                    r1(margin-left, 8)
        &.right
            r2(right, 15, top, 0)
            .link
                r2(width, 40, height, 40)
                r1(margin-right, 5)
                i
                    width: 25px
                    height: 21px
                    r1(margin-top, 9)
                    background-image: url(https://y.gtimg.cn/mediastyle/mobile/app/share/img/sprite_play.png?max_age=2592000&d=20151203183007)
                    background-repeat: no-repeat
                    background-size: 40px 350px
                    background-position: 0 0
                    r1(margin-left, 8)

    .btns
        bottom: 0
        width: 100%
        height: 65px
        .download
            height: 45px
            line-height: 45px
            position: relative
            r1(font-size, 20)
            background: #31c27c
            text-align: center
            width: 90%
            r1(border-radius, 25.5)
            color: #fff
            &::before
                background-image: url(https://y.gtimg.cn/mediastyle/mobile/app/share/img/sprite_play.png?max_age=2592000&d=20151203183007)
                background-repeat: no-repeat
                background-size: 40px 350px
                background-position: 0 -300px
                content: ""
                position: absolute
                width: 33px
                height: 33px
                left: 6px
                r1(top, 6)
</style>

