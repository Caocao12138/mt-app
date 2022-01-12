<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{ 's-nav-active': item.active }"
      >
        {{ item.name }}
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
export default {
  name: 'searchProduc', // 搜索商品后-跳转的主页面-所有商品
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
      productsList: [
        {
          image:
            'https://p0.meituan.net/biztone/e01174f4c53f07eaee5ddb01aa5e35dc497719.jpg@220w_125h_1e_1c',
          title: '济南香远斋烤全羊',
          type: 'food',
          score: 4.5,
          commentNum: 2888,
          comment: [
            {
              username: 'xxxx',
              evalaute: '好吃'
            }
          ],
          tab: ['火锅', '沙河'],
          address: '昌平区小汤山尚信村沿温榆河畔北岸向西3.5公里',
          avgPrice: 164,
          dealItems: [
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 15,
              priceType: '元'
            },
            {
              title: '火鸡宴，建议10-14人使用',
              price: 909,
              counterPrice: 1150,
              saleNum: 15,
              priceType: '元'
            }
          ]
        }
      ]
    }
  },
  components: {
    productListItem
  }
}
</script>

<style>
</style>
