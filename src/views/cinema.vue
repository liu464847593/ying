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
                <p class="description">{{item.addr}}</p>
                <p class="info">{{item.min_price}}</p>
                <div class="rates">{{item.rates}}分</div>
                <div class="status">{{item.distance}}</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader, ButtonTab, ButtonTabItem, Swiper, SwiperItem, Scroller } from 'vux'

  export default {
    components: {
      XHeader,
      ButtonTab,
      ButtonTabItem,
      Swiper,
      SwiperItem,
      Scroller
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

<style>

</style>
