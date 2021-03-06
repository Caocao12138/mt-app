import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layout/default'
import indexMain from '@/components/main'
import Blank from '@/layout/blank'
import cityPage from '@/components/changeCity'
import detail from '@/components/productDetail'
import Login from '@/components/login'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default,
      redirect: '/index', // 路由匹配到 path: '/', 则重定向至 path: '/index'
      children: [{
        path: '/index',
        name: 'index',
        component: indexMain
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: cityPage
      },
      {
        path: 'detail/:name',
        name: 'detail',
        component: detail
      }]
    },
    {
      path: '/blank',
      name: 'Blank',
      component: Blank,
      children: [
        {path: 'login', name: 'login', component: Login},
        {path: 'register', name: 'register', component: register}
      ]
    }
  ]
})
