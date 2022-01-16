<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuList"
        :key="index"
        @mouseenter="menuEnter(item)"
      >
        <i :class="item.type"></i>{{ item.name }}<span class="arrow"></span>
      </dd>
    </dl>
    <div
      v-if="curDetail"
      class="detail"
      @mouseenter="detailEnter"
      @mouseleave="detailLeave"
    >
      <template v-for="(item, index) in curDetail.items">
        <h4 :key="index">{{ item.title }}</h4>
        <router-link
          to="/"
          v-for="(v, i) in item.items"
          :key="v + '_' + i"
          >{{ v }}</router-link
        >
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'main-left-menu', // 中间左侧菜单区域
  data () {
    return {
      curDetail: null,
      menuList: []
    }
  },
  created () {
    api.getMenuList().then(rsp => {
      this.menuList = rsp.data.data
    })
  },
  methods: {
    // 鼠标移入菜单显示二级栏
    menuEnter (item) {
      this.curDetail = item
    },
    // 鼠标移出菜单消失二级栏
    menuLeave () {
      let self = this
      this.timer = setTimeout(function () {
        self.curDetail = null
      }, 200)
    },
    // 鼠标移到二级栏保持显示
    detailEnter () {
      // console.log('1')
      clearTimeout(this.timer)
    },
    // 鼠标移出二级栏消失
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>

<style lang="scss">
// 38:00
@import "@/assets/css/index/index.scss";
</style>
