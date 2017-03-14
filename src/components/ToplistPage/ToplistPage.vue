<template>
    <div class="content-wrapper">
      <ul class="list">
        <li class="item" v-for="(item, index) in toplistData">
          <div class="main f-w f-h">
             <a href="javascript:;" class="f-pr media">
               <img :src="item.url" width="100%" height="100%">
               <span class="listen-count f-pa"><i class="icon icon-listen f-ib"></i>{{item.listencount}}万</span>
             </a>
             <div class="info">
                <div class="cont f-pr f-w f-h">
                  <h3 class="topic ellipsis">{{item.topic}}</h3>
                  <p class="ellipsis song" v-for="(val, k) in item.songs">{{k+1}}<span class="name">{{val.songname}}</span>- {{val.singer}}</p>
                  <i class="arrow f-pa"></i>
                </div>
             </div>
          </div>
        </li>
      </ul>
      <p class="list_more f-tc"><a class="f-ib" href="javascript:;">去客户端发现更多好音乐 &gt;</a></p>
    </div>
</template>
<script>
  export default{
    name: '',
    props: {},
    data() {
      return {
          toplistData: this.$store.state.pageData.toplistData
      }
    },
    methods: {

    },
    mounted() {

    }
  };
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/computed.styl';

  .content-wrapper
    r2(margin-top, 10, margin-bottom, 20)
    r2(margin-left, 10, margin-right, 10)
    .list
      .item
        r1(margin-bottom, 10)
        .main
          display: box
          display: -webkit-box
          background: #fff
          .media
            display: block
            r2(width, 100, height, 100)
            .listen-count
              r2(left, 5, bottom, 7)
              r1(line-height, 12)
              color: #fff
              opacity: .6
              r1(font-size, 10)
              z-index: 10
              .icon-listen
                r2(width, 10, height, 10)
                r1(margin-right, 3)
                background: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/list_sprite.png?max_age=19830212&d=20151105145423) no-repeat
                background-size: 24px 60px
                background-position: 0 -50px
          .info
            display: -webkit-box
            display: box
            -webkit-box-flex: 1
            -webkit-box-align: center
            .cont
              r2(padding-left, 10, padding-right, 15)
              r1(height, 100)
              .topic
                r1(font-size, 16)
                color: #000
                r1(margin-bottom, 5)
                font-weight: normal
                r2(height, 24, line-height, 24)
                display: block
              .song
                r1(font-size, 14)
                color: rgba(0,0,0,.5)
                r2(height, 22, line-height,22)
                display: block
                .name
                  color: #000
                  r2(margin-left,8,margin-right, 5)
              .arrow
                r1(right, 10)
                top: 50%
                r2(width, 10, height, 10)
                border-right: 1px solid #b2b2b2
                border-bottom: 1px solid #b2b2b2
                r1(margin-top, -4)
                transform: rotateZ(-45deg)
    .list_more
      r2(height, 40, line-height, 40)
      a
        r1(font-size, 14)
        color: rgba(0,0,0,.6)
        r2(padding-left, 6, padding-right, 6)
</style>
