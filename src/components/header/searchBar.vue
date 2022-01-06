<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
            alt="美团"
          />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="请输入内容"
            @focus="focus"
            @blur="blur"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{ name: 'goods', params: { name: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Top-searchArea", //顶部-搜索区域
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: ["全部分类", "美食", "外卖", "酒店HOT", "民宿", "猫眼电影"],
      searchList: ["丽人", "美发", "医学美容", "结婚", "婚纱摄影", "婚宴"],
    };
  },
  computed: {
    isHotPlace: function () {
      // 热门搜索框显示: 取决于 是聚焦 否输入内容
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function () {
      // 内容框显示: 取决于 是聚焦 否输入内容
      return this.isFocus && this.searchWord;
    },
  },
  methods: {
    // #元素聚焦时触发
    focus() {
      this.isFocus = true;
    },
    // #元素失去焦点时触发
    blur() {
      let self = this;
      setTimeout(() => {
        self.isFocus = false;
      }, 200);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>