<template>
  <div class="page-product">
    <el-row class="m-crumbs">
        <crumb />
    </el-row>
    <el-row>
        <el-col :span="19">
            <el-row><categroy /></el-row>
            <el-row>
              <product-list />
            </el-row>
        </el-col>
        <el-col :span="5" style="padding-left: 10px">
          <el-row><Mmap /></el-row>
            <el-row>
              <guess-you-like-it />
            </el-row>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import crumb from './components/crumb.vue'
import categroy from './components/categroy.vue'
import productList from './components/productList.vue'
import guessYouLikeIt from './components/guessYouLikeIt.vue'
import Mmap from './components/map.vue'
export default {
  name: 'searchProduc', // 搜索商品后-跳转的主页面
  components: {
    crumb,
    categroy,
    productList,
    guessYouLikeIt,
    Mmap
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/products/index.scss'
</style>
