<template>
  <div>
    <x-header :left-options="{showBack: false}"><a slot="left">深圳</a></x-header>
    <button-tab>
      <button-tab-item selected @click.native="hot_show()">热映</button-tab-item>
      <button-tab-item @click.native="upcoming_show()">待映</button-tab-item>
    </button-tab>
    <div class="hot_wrapper" v-if="hotShow">
      <swiper :aspect-ratio="320/720" style="width:100%" auto loop :interval=2000 dots-position="center">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in banner_list" :key="index">
          <img :src="item.android">
        </swiper-item>
      </swiper>
      <div class="moives_wrapper">
        <ul>
          <li v-for="(item, index) in playing_list" class="movies_list">
            <ul>
              <li class="movies_box">
                <div class="icon">
                  <img :src="item.cover" width="60" height="80">
                </div>
                <div class="content">
                  <h2 class="name">{{item.title}}</h2>
                  <p class="description">{{item.short_intro}}</p>
                  <p class="info">{{item.show_info}}</p>
                  <div class="rates">{{item.rates}}分</div>
                  <div class="status">{{item.sale_status}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="hot_wrapper upcoming_list" v-if="!hotShow">
      <swiper :aspect-ratio="320/720" style="width:100%" auto loop :interval=2000 dots-position="center">
        <swiper-item class="swiper-demo-img" v-for="(item, index) in banner_list" :key="index">
          <img :src="item.android">
        </swiper-item>
      </swiper>
      <div class="moives_wrapper">
        <ul>
          <li v-for="(item, index) in playing_list" class="movies_list">
            <h2>{{item.name}}</h2>
            <ul>
              <li class="movies_box" v-for="(item, index) in item.list">
                <div class="icon">
                  <img :src="item.cover" width="60" height="80">
                </div>
                <div class="content">
                  <h2 class="name">{{item.title}}</h2>
                  <p class="description">{{item.short_intro}}</p>
                  <p class="info">{{item.show_info}}上映</p>
                  <div class="rates">{{item.wish_count}}人想看</div>
                  <div class="status">{{item.sale_status == 0 ? '想看' : '预售'}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader, ButtonTab, ButtonTabItem, Swiper, SwiperItem } from 'vux'

  export default {
    components: {
      XHeader,
      ButtonTab,
      ButtonTabItem,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        banner_list: [],
        playing_list: [],
        hotShow: true
      }
    },
    methods: {
      hot_show () {
        this.hotShow = true
        var _this = this
        this.$http.get('/api/playing').then(function (res) {
          _this.playing_list = res.data.data.data.list
        })
      },
      upcoming_show () {
        var _this = this
        this.hotShow = false
        this.$http.get('/api/upcoming').then(function (res) {
          _this.playing_list = res.data.data.data.groups
        })
        this.$http.get('/api/banner').then(function (res) {
          _this.banner_list = res.data.data.data.list
        })
      }
    },
    created () {
      var _this = this
      this.$http.get('/api/banner').then(function (res) {
        _this.banner_list = res.data.data.data.list
      })
      this.$http.get('/api/playing').then(function (res) {
        _this.playing_list = res.data.data.data.list
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .vux-button-group{
    width: 100px;
    position: absolute;
    margin-left: -50px;
    left: 50%;
    top: 7px;
  }
  div.vux-button-group>a.vux-button-group-current{
    background: #fff!important;
    color: #35495e!important;
    border-color: #35495e!important;
  }
  a.vux-button-tab-item{
    background: #253546!important;
    border-color: #253546!important;
  }
  .swiper-demo-img img {
    width: 100%;
    height: 180px;
  }
  .vux-icon-dot.active{
    background: #35495e!important;
  }
  .moives_wrapper{
      position: absolute;
      top: 206px;
      bottom: 53px;
      width: 100%;
      overflow-y: scroll;
      .movies_list{
          margin: 18px 0 18px 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(7,17,27,0.1);
          .movies_box{
              display: flex;
              position: relative;
              .icon{
                  margin-right: 10px;
              }
              .description,.info{
                  font-size: 10px;
                  color: #93999f;
              }
              .description{
                  margin-bottom: 5px;
              }
              .rates{
                  position: absolute;
                  right: 18px;
                  top: 0;
                  color: #ffa115;
              }
              .status{
                  font-size: 14px;
                  height: 14px;
                  line-height: 14px;
                  padding: 2px 5px 2px 5px;
                  border: 1px solid deepskyblue ;
                  color: deepskyblue ;
                  position: absolute;
                  right: 18px;
                  bottom: 0;
              }
              h2.name{
                  height: 14px;
                  line-height: 14px;
                  font-size: 14px;
                  margin: 2px 0 8px 0;
              }
          }
      }
  }

  .upcoming_list {
    .movies_list {
      margin: 0;
      padding-bottom: 0;
      & > h2 {
        height: 18px;
        line-height: 18px;
        font-size: 14px;
        text-indent: 18px;
        background: #93999f;
      }
      .movies_box{
        margin: 9px 18px 18px 18px;
        padding-bottom: 18px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        .status{
          bottom: 18px;
        }
      }
    }
  }
</style>
