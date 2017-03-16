<template>
  <div id="app">
    <router-view></router-view>
    <nav-Footer></nav-Footer>
  </div>
</template>

<script>
  import navFooter from './components/navFooter'
  export default {
    name: 'app',
    components: {
      navFooter
    }
  }
</script>

<style lang="less">
@import '../src/assets/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
