<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <router-link :to="item.url"
          ><img :src="item.imgSrc" alt="" />
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "main-left-life-picture", // 中间轮播图及右侧-轮播图
  data() {
    return {
      imgList: [
        {
          url: "/pic1",
          imgSrc:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          url: "/pic2",
          imgSrc:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
        {
          url: "/pic3",
          imgSrc:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
        {
          url: "/pic4",
          imgSrc:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          url: "/pic5",
          imgSrc:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>