<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
  <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
export default {
  name: 'searchProduc-crumb' // 搜索商品后-跳转的主页面-面包屑
}
</script>

<style>
</style>
