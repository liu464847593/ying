<template>
  <div>
    <x-header :left-options="{showBack: false}"><a slot="left">深圳</a></x-header>
    <button-tab>
      <button-tab-item selected>热映</button-tab-item>
      <button-tab-item>待映</button-tab-item>
    </button-tab>
    <swiper loop auto :list="demo07_list" :index="demo07_index" @on-index-change="demo07_onIndexChange"></swiper>
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
    created () {
//        this.$http.post('/banner', {
//        token_id: 152068,
//        token: 'c52231c228e399dd7cddc1f0cc8b721a',
//        sign1: '5350F6F8C25885669BF56A8BC045B1A6',
//        noncestr: '0y3vsu6b',
//        city_id: 2161,
//        app_key: '55ab276836e6a_s'
//      }, (res) => {
//        console.log(res)
//      })
//
//      }
    }
  }
</script>

<style>
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
</style>
