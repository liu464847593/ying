<template>
  <div>
    <x-header :left-options="{showBack: false}">影院<a slot="left">深圳</a></x-header>
    <swiper :aspect-ratio="320/720" style="width:100%" auto loop :interval=2000 dots-position="center">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in banner_list" :key="index">
        <img :src="item.android">
      </swiper-item>
    </swiper>
    <div class="cinema_wrapper">
      <ul>
        <li v-for="(item, index) in cinema_list" class="cinema_list">
          <ul>
            <li class="movies_box">
              <div class="content">
                <h2 class="name">{{item.name}}</h2>
                <p class="addr">{{item.addr}}</p>
                <div class="seat">座</div>
                <p class="min_price">{{item.min_price}}元起</p>
                <div class="distance">{{item.distance}}</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
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
        cinema_list: []
      }
    },
    methods: {
      onScroll (pos) {
        console.log('on scroll', pos)
        this.scrollTop = pos.top
      }
    },
    created () {
      var _this = this
      this.$http.get('/api/banner').then(function (res) {
        _this.banner_list = res.data.data.data.list
      })
      this.$http.get('/api/cinema').then(function (res) {
        _this.cinema_list = res.data.data.data.list
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
 .cinema_wrapper{
     position: absolute;
     top: 220px;
     bottom: 53px;
     width: 100%;
     overflow-y: scroll;
     .cinema_list{
         margin: 18px 0 18px 18px;
         padding-bottom: 10px;
         border-bottom: 1px solid rgba(7,17,27,0.1);
         .movies_box{
             position: relative;
             .name{
                 height: 14px;
                 line-height: 14px;
                 font-size: 14px;
                 margin: 2px 0 10px 0;
             }
             .addr{
                 font-size: 10px;
                 color: #93999f;
                 margin-bottom: 5px;
             }
             .min_price{
                 display: inline-block;
                 font-size: 10px;
                 color: #93999f;
             }
             .seat{
                 height: 14px;
                 line-height: 14px;
                 font-size: 14px;
                 border: 1px solid deepskyblue ;
                 display: inline-block;
                 padding: 2px;
                 border-radius: 2px;
                 color: deepskyblue;
             }
             .distance{
                 position: absolute;
                 right: 18px;
                 top: 24px;
                 color: #93999f;
             }
         }
     }
 }
</style>
