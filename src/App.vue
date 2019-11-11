<template>
  <div id="app">
    <div class="pageWrapper">
      <router-view></router-view>
      <nav-Footer></nav-Footer>
    </div>
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
    overflow-x: hidden;
    background-color: #fbf9fe;
  }

  .pageWrapper {
    margin: 0 auto;
    max-width: 750px;
    padding-bottom: 53px;
  }
</style>
