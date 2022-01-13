<template>
  <div class="map">
    <img :src="mapPng" alt="">
  </div>
</template>

<script>
import mapPng from '@/assets/img/map.png'
export default {
  name: 'searchProduc-map', // 搜索商品后-跳转的主页面-猜我喜欢 父级: productDetail / components /index.vue
  data () {
    return {
      mapPng
    }
  }
}
</script>

<style lang='scss'>
.map{
  height: 227px + 15px + 2px;
  border-radius: 4px;
  background-color: yellow;
  background-size:cover;
  overflow: hidden;

  img{
    width: 110%;
  }
}
</style>
