// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './views/movies'
import Cinema from './views/cinema'
import Find from './views/find'
import Mine from './views/mine'
import Login from './components/login'
import { AjaxPlugin } from 'vux'

Vue.use(AjaxPlugin)
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/Cinema',
  component: Cinema
}, {
  path: '/Find',
  component: Find
}, {
  path: '/Mine',
  component: Mine
}, {
  path: '/Login',
  component: Login
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
