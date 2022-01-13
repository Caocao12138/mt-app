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
export default {
  name: 'searchProduct-categroy', // 搜索商品后-跳转的主页面-分类 / 区域模块
  components: {
    ddSelector
  },
  data () {
    return {
      // 分类数据
      categoryList: [{
        'title': '美食',
        'type': 'food',
        'subList': [{
          'name': '日本菜',
          'id': 'Japan'
        }]
      }, {
        'title': '酒店住宿',
        'type': 'hotal',
        'subList': [{
          'name': '温泉酒店',
          'id': 'hot_spring'
        }]
      }],
      // 区域数据
      regionList: [{
        'title': '推荐商圈',
        'subList': [{
          'name': '望京',
          'id': 120000
        }, {
          'name': '昌平',
          'id': 12222
        }]
      }]
    }
  }
}
</script>

<style>

</style>
