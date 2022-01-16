<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key">
        <router-link to="#" style="text-decoration: none" :class="{ 's-nav-active': item.active }">{{ item.name }}</router-link>
      </li>
    </ul>
    <el-row>
      <product-list-item
        v-for="(item, index) in productsList"
        :key="index"
        :meta="item"
      />
    </el-row>
  </div>
</template>

<script>
import productListItem from './productListItem.vue'
import api from '@/api'
export default {
  name: 'searchProduc', // 搜索商品后-跳转的主页面-所有商品
  created () {
    api.getProductsList().then(rsp => {
      // console.log(rsp)
      this.productsList = rsp.data.data
    })
  },
  data () {
    return {
      nav: [
        {
          key: 's-default',
          name: '智能排序',
          active: true
        },
        {
          key: 's-price',
          name: '价格排序',
          active: false
        },
        {
          key: 's-score',
          name: '人气排序',
          active: false
        },
        {
          key: 's-comment',
          name: '评价排序',
          active: false
        }
      ],
      productsList: []
    }
  },
  components: {
    productListItem
  }
}
</script>

<style>
</style>
