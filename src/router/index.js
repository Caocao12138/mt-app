import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default'
import Blank from '@/layout/blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    }, {
      path: '/blank',
      name: 'Blank',
      component: Blank
    }
  ]
})
