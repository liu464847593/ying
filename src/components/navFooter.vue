<template>
  <tabbar>
    <tabbar-item selected link="/" @click.native="index=0">
      <img slot="icon" src="../assets/img/movie.png" v-if="index!=0">
      <img slot="icon" src="../assets/img/movie_blue.png" v-if="index==0">
      <span slot="label">电影</span>
    </tabbar-item>
    <tabbar-item link="/Cinema" @click.native="index=1">
      <img slot="icon" src="../assets/img/cinema.png" v-if="index!=1">
      <img slot="icon" src="../assets/img/cinema_blue.png" v-if="index==1">
      <span slot="label">影院</span>
    </tabbar-item>
    <tabbar-item link="/Find" @click.native="index=2">
      <img slot="icon" src="../assets/img/find.png" v-if="index!=2">
      <img slot="icon" src="../assets/img/find_blue.png"  v-if="index==2">
      <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item link="/Mine" @click.native="index=3">
      <img slot="icon" src="../assets/img/mine.png"  v-if="index!=3">
      <img slot="icon" src="../assets/img/mine_blue.png"  v-if="index==3">
      <span slot="label" @click.native="index=1">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script type="text/ecmascript-6">
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    data () {
      return {
        index: 0
      }
    }
  }
</script>

<style>
  .weui-bar__item_on .weui-tabbar__label{
    color: #1296db!important;
  }
</style>
