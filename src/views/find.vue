<template>
  <div>
    <x-header :left-options="{showBack: false}"><a slot="left">深圳</a></x-header>
    <button-tab>
      <button-tab-item selected>活动</button-tab-item>
      <button-tab-item>影讯</button-tab-item>
    </button-tab>
    <div class="find_wrapper">
      <ul>
        <li v-for="(item, index) in event_list">
          <ul>
            <li class="event_box">
              <div class="icon">
                <img :src="item.android">
                <div class="cat">{{item.cat_title}}</div>
              </div>
              <div class="content">
                <h2 class="m_title">{{item.title}}</h2>
                <p class="s_time">报名时间{{item.start_time}}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

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
        event_list: []
      }
    },
    created () {
      var _this = this
      this.$http.get('/api/event').then(function (res) {
        _this.event_list = res.data.data.data.list
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .find_wrapper{
    position: absolute;
    top: 40px;
    bottom: 53px;
    width: 100%;
    z-index: -11;
    overflow-y: scroll;
    .event_box{
      padding: 18px;
      .icon{
        position: relative;
        margin-bottom: 15px;
        &>img{
          width: 100%;
        }
        .cat{
          font-size: 10px;
          position: absolute;
          bottom: 0;
          left: 0;
          background: deepskyblue;
          color: white;
          padding: 5px;
        }
      }
      .m_title{
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 20px;
      }
      .s_time{
        font-size: 10px;
        color: #93999f;
      }
    }
  }
</style>
