<template>
  <el-row class="m-header-topbar">
    <el-col :span="10">
      <top-bar-left />
    </el-col>
    <el-col :span="14">
      <top-bar-right />
    </el-col>
  </el-row>
</template>

<script>
import topBarLeft from "./topBarLeft.vue";
import topBarRight from "./topBarRight.vue";
export default {
  name: "Top-informationArea", //顶部-信息区域
  components: {
    topBarLeft,
    topBarRight,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>