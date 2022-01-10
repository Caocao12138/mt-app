import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default'
import Blank from '@/layout/blank'
import cityPage from '@/components/changeCity'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: cityPage
    },
    {
      path: '/blank',
      name: 'Blank',
      component: Blank
    }
  ]
})
