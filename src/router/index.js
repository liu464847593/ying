import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/movies'
import Cinema from '../views/cinema'
import Find from '../views/find'
import Mine from '../views/mine'
import Login from '../components/login'
Vue.use(Router)

export default new Router({
  routes: [{
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
})
