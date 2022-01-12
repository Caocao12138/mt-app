// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'
Vue.use(ElementUI)
Vue.config.productionTip = false

// #注册全局自定义指令
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    // console.log('只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置', el, binding, vnode)
    document.addEventListener('click', binding.value, false) // 参数: (被监听事件字符串形式事件名, 事件监听处理函数,是否捕获)
  },
  inserted () {
    // console.log('被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)')
  },
  update () {
    // console.log('所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 ')
  }
})
/* eslint-disable-next-line */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
