<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5"> <left-menu /> </el-col>
      <el-col :span="19"><right-main-life /></el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <hotel :nav="recomment" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import leftMenu from './components/menu.vue'
import rightMainLife from './components/life.vue'
import hotel from './components/hotel.vue'
export default {
  name: 'main-container', // 中间区域
  data () {
    return {
      iStyle: {
        class: 'istyle',
        title: '有格调',
        list: [{
          text: '全部',
          tab: 'all'
        }, {
          text: '约会聚餐',
          tab: 'food'
        }, {
          text: '丽人SPA',
          tab: 'spa'
        }, {
          text: '电影演出',
          tab: 'movie'
        }, {
          text: '品质出游',
          tab: 'travel'
        }]
      },
      recomment: {
        class: 'youhui',
        title: '推荐民宿',
        list: [{
          text: '北京',
          tab: 'all'
        }, {
          text: '济南',
          tab: 'food'
        }, {
          text: '武穴',
          tab: 'xiuxian'
        }]
      }
    }
  },
  components: {
    leftMenu,
    rightMainLife,
    hotel
  }
}
</script>

<style>
</style>
