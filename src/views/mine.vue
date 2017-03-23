<template>
  <div>
    <x-header :left-options="{showBack: false}">我的</x-header>
    <group>
      <cell title="立即登录" is-link link="/Login">
        <img src="../assets/img/account.png" width="32" style="display:block;margin-right: 10px" slot="icon">
      </cell>
    </group>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <img src="../assets/img/card.png" width="32">
          <br/>
          观影通
        </div>
        <div class="vux-1px-r">
          <img src="../assets/img/voucher.png" width="32">
          <br/>
          兑换卷
        </div>
        <div class="vux-1px-r">
          <img src="../assets/img/envelope.png" width="32">
          <br/>
          红包
        </div>
      </div>
    </card>
    <group>
      <cell title="我的账户" is-link link="/Login">
        <img src="../assets/img/account_left.png" style="display:block;margin-right: 10px" slot="icon">
      </cell>
      <cell title="我的订单" is-link link="/Login">
        <img src="../assets/img/order.png" style="display:block;margin-right: 10px" slot="icon">
      </cell>
      <cell title="我的评论" is-link link="/Login">
        <img src="../assets/img/comments.png" style="display:block;margin-right: 10px" slot="icon">
      </cell>
    </group>
    <group>
      <cell title="关注的电影" is-link link="/Login">
        <img src="../assets/img/movie_small.png" style="display:block;margin-right: 10px" slot="icon">
      </cell>
      <cell title="参与的活动" is-link link="/Login">
        <img src="../assets/img/CLOCK.png" style="display:block;margin-right: 10px" slot="icon">
      </cell>
      <cell title="绑定社交帐号" is-link link="/Login">
        <img src="../assets/img/heart.png" style="display:block;margin-right: 10px" slot="icon">
        <img src="../assets/img/wechat.png">
        <img src="../assets/img/xinlang.png">
        <img src="../assets/img/qq.png">
      </cell>
    </group>
    <group>
      <cell title="客服电话" is-link @click.native="showTel=true">
        <img src="../assets/img/icon_telephone.png" style="display:block;margin-right: 10px" slot="icon">
        <div slot="value">
          <span style="color: black">400-966-5002</span>
        </div>
      </cell>
    </group>
    <actionsheet v-model="showTel" :menus="menus1" show-cancel></actionsheet>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell, Group, XHeader, Card, Actionsheet } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XHeader,
      Card,
      Actionsheet
    },
    data () {
      return {
        showTel: false,
        menus1: {
          menu1: '400 - 966 - 5002'
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '~vux/src/styles/1px.less';

  .card-demo-flex {
    display: flex;
    &>div{
      flex: 1;
      text-align: center;
      font-size: 12px;
    }
  }

</style>
