<template>
  <div>
    <x-header :left-options="{showBack: false}"><a slot="left">深圳</a></x-header>
    <button-tab>
      <button-tab-item selected>活动</button-tab-item>
      <button-tab-item>影讯</button-tab-item>
    </button-tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader, ButtonTab, ButtonTabItem } from 'vux'

  export default {
    components: {
      XHeader,
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>

</style>
