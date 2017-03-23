<template>
  <div>
    <x-header>登录</x-header>
    <tab>
      <tab-item selected @click.native="mobile_login()">影火虫帐号登录</tab-item>
      <tab-item @click.native="captcha_login()">手机验证登录</tab-item>
    </tab>
    <div class="mobileShow" v-show="mobileShow">
      <group>
        <x-input is-type=china-mobile placeholder="手机号" type=number>
          <img slot="label" style="padding-right:10px;display:block;" src="../../src/assets/img/mobile.png">
        </x-input>
        <x-input placeholder="密码" type=password>
          <img slot="label" style="padding-right:10px;display:block;" src="../../src/assets/img/password.png">
        </x-input>
      </group>
      <x-button type="primary" style="width:80%; margin-top: 18px">登录</x-button>
    </div>

    <div class="captchaShow" v-show="!mobileShow">
      <group>
        <x-input is-type=china-mobile placeholder="手机号" type=number>
          <img slot="label" style="padding-right:10px;display:block;" src="../../src/assets/img/mobile.png">
        </x-input>
        <x-input placeholder="手机短信中的验证码">
          <img slot="label" style="padding-right:10px;display:block;" src="../../src/assets/img/verification_code.png">
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
      </group>
      <x-button type="primary" style="width:80%; margin-top: 18px">登录</x-button>
    </div>

  </div>
</template>

<script>
  import { XHeader, Tab, TabItem, XInput, Group, XButton } from 'vux'
  export default{
    components: {
      XHeader,
      Tab,
      TabItem,
      XInput,
      Group,
      XButton
    },
    data () {
      return {
        mobileShow: true
      }
    },
    methods: {
      mobile_login () {
        this.mobileShow = true
      },
      captcha_login () {
        this.mobileShow = false
      }
    }
  }
</script>

<style>

</style>
