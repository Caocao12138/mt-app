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
  name: 'changeCity-latelyVisit', // 切换城市页面-最近访问
  props: [
    'title',
    'list'
  ]
}
</script>

<style>
</style>
