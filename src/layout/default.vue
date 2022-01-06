<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <head-region />
      </el-header>

      <el-main>
        <main-region />
      </el-main>

      <el-footer height="">
        <footer-region />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HeadRegion from "@/components/header";
import mainRegion from "@/components/main";
import footerRegion from "@/components/footer";
export default {
  name: "Default-layout", //默认布局
  components: {
    HeadRegion, // 头部区域组件
    mainRegion, // 中间区域组件
    footerRegion, // 脚部区域组件
  },
};
</script>

<style lang='scss'>
@import "@/assets/css/public/layout.scss";
</style>