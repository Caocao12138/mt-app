<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5"> <left-menu /> </el-col>
      <el-col :span="19"><right-main-life /></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">猫眼电影</el-col>
    </el-row>
  </div>
</template>

<script>
import leftMenu from "./components/menu.vue";
import rightMainLife from "./components/life.vue";
export default {
  name: "main-container", // 中间区域
  components: {
    leftMenu,
    rightMainLife,
  },
};
</script>

<style>
</style>