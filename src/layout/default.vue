<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <head-region />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import HeadRegion from "@/components/header";
export default {
  name: "Default-layout", //默认布局
  components: {
    HeadRegion, // 头部区域组件
  },
};
</script>

<style lang="scss">
// @import "@/assets/css/public/layout.scss";
</style>