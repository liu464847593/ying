<template>
  <div>
    <x-header>登录</x-header>
    <tab>
      <tab-item selected>影火虫帐号登录</tab-item>
      <tab-item>手机验证登录</tab-item>
    </tab>
  </div>
</template>

<script>
  import { XHeader, Tab, TabItem } from 'vux'
  export default{
    components: {
      XHeader,
      Tab,
      TabItem
    }
  }
</script>

<style>

</style>
