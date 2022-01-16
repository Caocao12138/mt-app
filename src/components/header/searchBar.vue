<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/">
          <img
            src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png"
            alt="美团"
          />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家和地点"
            @focus="focus"
            @blur="blur"
            @input="inputing"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlaceList" :key="index">
              <router-link :to="{name: 'detail', params: {name: item}}">{{
                item
              }}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link :to="{name: 'detail', params: {name: item}}">{{
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
import api from '@/api'
export default {
  name: 'Top-searchArea', // 顶部-搜索区域
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: []
    }
  },
  created () {
    api.searchHotWords().then(rsp => {
      this.hotPlaceList = rsp.data.data
    })
  },
  computed: {
    isHotPlace: function () {
      // 热门搜索框显示: 取决于 是聚焦 否输入内容
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      // 内容框显示: 取决于 是聚焦 否输入内容
      return this.isFocus && this.searchWord
    }
  },
  methods: {
    // #元素聚焦时触发
    focus () {
      this.isFocus = true
    },
    // #元素失去焦点时触发
    blur () {
      let self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200)
    },
    // 用户输入时动态获取数据
    inputing () {
      console.log(this.searchWord)
      let inputValue = this.searchWord
      api.getSearchList().then(rsp => {
        this.searchList = rsp.data.data.list.filter((item) => {
          return item.indexOf(inputValue) > -1
        })
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
