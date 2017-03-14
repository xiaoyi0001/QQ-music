<template>
    <div class="index-page-wrapper">
      <section class="swiper-wrapper">
        <swiper class="swiper-component-wrapper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in swiperListImgUrl" :key="index">
            <img :src="item" alt="" width="100%" height="100%">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </section>
      <section class="box f-w">
        <div class="radio-wrapper f-w">
          <h2 class="title">电台</h2>
          <ul class="list f-clearfix">
            <li class="item f-ib f-fl" v-for="(item, index) in radioListData" :key="index" @click="playSong(item)">
              <a href="javascript:void(0)" class="f-ib f-w f-h link">
                  <div class="media f-pr">
                      <img class="pic f-pa" :src="item.url" width="100%">
                      <span class="icon icon_play f-pa"></span>
                  </div>
                  <div class="info">
                    <h3 class="list_tit tit_two_row">{{item.desc}}</h3>
                  </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="box f-w">
        <div class="radio-wrapper f-w">
          <h2 class="title">热门歌单</h2>
          <ul class="list f-clearfix">
            <li class="item f-ib f-fl" v-for="(item, index) in hotSongListData" :key="index">
              <a href="javascript:void(0)" class="f-ib f-w f-h link">
                <div class="media f-pr">
                  <img class="pic f-pa" :src="item.url" width="100%">
                  <span class="icon icon_play f-pa"></span>
                  <span class="listen-count f-pa f-ib">
                    <i class="icon icon_listen f-ib"></i>
                    {{item.audition}}万
                  </span>
                </div>
                <div class="info">
                  <h3 class="desc ellipsis">{{item.desc}}</h3>
                  <p class="text">{{item.text}}</p>
                </div>
              </a>
            </li>
          </ul>
          <p class="list_more f-tc"><a class="f-ib" href="javascript:;">去客户端发现更多好音乐 &gt;</a></p>
        </div>
      </section>

      <footer class="f-tc">
        <div class="version_tab f-tc">
          <a href="http://y.qq.com/?ADTAG=myqq&amp;nomobile=1#type=index">查看电脑版网页</a>
        </div>
        <div class="footer_logo f-ib">QQ音乐</div>
      </footer>

    </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  export default{
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
      }
    },
    methods: {
      playSong(item) {
         this.$store.state.pageData.bindPlayActionBoolean = true
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  };
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/computed.styl';

  .index-page-wrapper
    r1(font-size, 18)
    .swiper-wrapper
      .swiper-pagination-bullet-active
        background: #fff
    .box
      r1(margin-top, 10)
      .radio-wrapper
        r2(padding-left, 10, padding-right, 10)
        .title
          r1(font-size, 16)
          color: #000
          r1(margin-bottom, 12)
          font-weight: normal
        .list
          .item
            r1(width, 173.5)
            background: #fff
            r1(padding-right, 8)
            r1(margin-bottom, 10)
            overflow: hidden
            &.item:nth-of-type(2n)
              margin-right: 0
            .link
              .media
                r1(margin-bottom, 10)
                &::before
                  content: ""
                  display: block
                  padding-top: 100%
                .pic
                  color: red
                  left: 0
                  top: 0
                .listen-count
                  r2(left, 5, bottom, 7)
                  r1(font-size, 12)
                  color: #fff
                  .icon_listen
                    r2(width, 10, height, 10)
                    background: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/list_sprite.png?max_age=19830212&d=20151105145423) no-repeat
                    background-size: 24px 60px
                    background-position: 0 -50px;
                .icon
                  r2(width, 24, height,24)
                  r2(right,5, bottom, 5)
                  background: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/list_sprite.png?max_age=19830212&d=20151105145423) no-repeat
                  background-size: 24px 60px
              .info
                r2(padding-right, 7, padding-left, 7)
                r1(padding-bottom, 5)
                h3
                  r1(height, 36)
                  r1(line-height, 18)
                  r1(font-size, 14)
                .desc
                  r1(height, 20)
                .text
                  r1(font-size, 12)
                  r2(height, 16, line-height, 16)
        .list_more
          r2(height, 40, line-height, 40)
          a
            r1(font-size, 14)
            color: rgba(0,0,0,.6)
            r2(padding-left, 6, padding-right, 6)
    footer
      r2(padding-top, 15, padding-bottom, 15)
      .version_tab
        r1(margin-bottom, 16)
        a
          position: relative
          display: inline-block
          r2(padding-left, 15, padding-right, 15)
          r1(font-size, 14, line-height, 14)
          r1(height, 14)
          color: #000
      .footer_logo
        r2(width, 82, height, 24)
        r1(margin-bottom, 10)
        background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo_footer.png?max_age=19830212&d=20151105145423)
        background-repeat: no-repeat
        background-size: cover
        text-indent: -9999px
</style>
