<template>
  <div>
    <x-header :left-options="{showBack: false}"><a slot="left">深圳</a></x-header>
    <button-tab>
      <button-tab-item selected @click.native="active()">活动</button-tab-item>
      <button-tab-item @click.native="news()">影讯</button-tab-item>
    </button-tab>
    <div class="find_wrapper" v-if="findShow">
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

    <div class="news_wrapper" v-if="!findShow">
      <ul>
        <li v-for="(item, index) in news_list">
          <div class="icon">
            <img :src="item.icon">
          </div>
          <p class="title">{{item.title}}</p>
          <ul>
            <li class="news_box" v-for="(item, index) in item.list">

              <!--<div class="icon">-->
                <!--<img :src="item.android">-->
                <!--<div class="cat">{{item.cat_title}}</div>-->
              <!--</div>-->
              <div class="content">
                <img :src="item.cover">
                <p class="n_title">{{item.title}}</p>
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
        event_list: [],
        news_list: [],
        findShow: true
      }
    },
    methods: {
      active () {
        var _this = this
        this.findShow = true
        this.$http.get('/api/event').then(function (res) {
          _this.event_list = res.data.data.data.list
        })
      },
      news () {
        var _this = this
        this.findShow = false
        this.$http.get('/api/article').then(function (res) {
          _this.news_list = res.data.data.data.groups
          console.log(res)
        })
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
  .news_wrapper{
    position: absolute;
    top: 46px;
    bottom: 53px;
    width: 100%;
    z-index: -11;
    overflow-y: scroll;
    overflow-x: hidden;
    & ul>li{
      text-align: center;
      &.img{
        margin: 0 auto;
      }
    }
    .content {
      position: relative;
      &>img {
        width: 100%;
      }
      &>.n_title{
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 100;
        background: rgba(0,0,0,0.5);
        color: white;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
