/* eslint-disable no-unused-vars */
<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="cityDomClick">
    <div class="choose" >
      <span>{{ value }}</span>
      <i class="el-icon-caret-right"></i>
      <div :class="{ 'mt-content': true, active: isShowWrapperActive }">
        <h2>{{ title }}</h2>
        <div class="wrapper">
          <div class="col" v-for="(item, index) in twelveArr" :key="index">
            <span :class="{'mt-item': true, 'active': j === value}"  v-for="(j, i) in item" :key="i" @click="changeCityAndProvince(j)">{{j.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selector', // 选择器插件
  data () {
    return {
      'twelveArr': []
    }
  },
  props: ['list', 'title', 'value', 'isShowWrapperActive'], // isShowWrapperActive: 下拉菜单是否显示 默认不显示
  methods: {
    // #点击城市按钮显示下拉菜单
    showWrapper (e) {
      e.stopPropagation()
      this.$emit('change_active', true) // 调用父组件监听的自定义事件并传参
      // console.log(this.list)
      this.twelveArr = this.listSlice(this.list, 10)
    },
    cityDomClick () {
      this.$emit('change_active', false) // 调用父组件监听的自定义事件并传参
    },
    /**
     * 对list 数据进行分割
     * arr 分割的数组
     * sum 数组被分割几个一组
     */
    listSlice (arr, sum) {
      // eslint-disable-next-line
      let newArray = []
      let i = 0
      while (i < arr.length) {
        newArray.push(arr.slice(i, i += sum))
      }
      return newArray
    },
    // #鼠标在点击下拉菜单内的省份文字 或 城市文字 时发生点击事件
    changeCityAndProvince (spanDom) {
      // #用户点击消失下拉菜单(未完成)
      this.$emit('change', spanDom)
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/select.scss";
</style>
