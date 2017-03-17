<template>
  <tabbar>
    <tabbar-item selected link="/">
      <img slot="icon" src="../assets/img/movie.png" >
      <img slot="icon-active" src="../assets/img/movie_blue.png">
      <span slot="label">电影</span>
    </tabbar-item>
    <tabbar-item link="/Cinema">
      <img slot="icon" src="../assets/img/cinema.png">
      <span slot="label">影院</span>
    </tabbar-item>
    <tabbar-item selected link="/Find">
      <img slot="icon" src="../assets/img/find.png">
      <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item link="/Mine">
      <img slot="icon" src="../assets/img/mine.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script type="text/ecmascript-6">
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>

</style>
