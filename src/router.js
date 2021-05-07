import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import NotFound from '@/views/NotFound'
import CoinDetail from '@/views/CoinDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail,
    },
  ],
})
