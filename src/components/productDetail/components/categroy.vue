<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <div class="title">
        <span>分类</span>
        <div>全部</div>
      </div>
      <div class="item">
      <div v-for="item in categoryList" :key="item.type"><dd-selector :name="item.title" :list="item.subList" /></div>
      </div>
    </dl>

    <dl class="classic">
      <div class="title">
        <span>区域</span>
        <div>全部</div>
      </div>
      <div class="item">
        <div v-for="item in regionList" :key="item.type"><dd-selector :name="item.title" :list="item.subList" /></div>
      </div>
    </dl>
  </div>
</template>

<script>
import ddSelector from './selector.vue'
import api from '@/api'
export default {
  name: 'searchProduct-categroy', // 搜索商品后-跳转的主页面-分类 / 区域模块
  components: {
    ddSelector
  },
  created () {
    api.getCatgroyList().then(rsp => {
      this.categoryList = rsp.data.data
    })
    api.getRegionList().then(rsp => {
      console.log('区域子类目数据有问题(待完成)', rsp)
    })
  },
  data () {
    return {
      // 分类数据
      categoryList: [],
      // 区域数据
      regionList: []
    }
  }
}
</script>

<style>

</style>
