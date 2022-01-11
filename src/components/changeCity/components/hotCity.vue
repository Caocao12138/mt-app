<template>
  <div class="m-hcity">
    <dl>
      <dt>{{title}}</dt>
      <dd v-for="(item, index) in list" :key="index">{{item}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'changeCity-hotCity', // 切换城市页面-热门城市
  props: [
    'title',
    'list'
  ]
}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/hot.scss'
</style>
