<template>
  <div class="page-changeCity">
    <el-row><select-province /></el-row>
    <el-row><hot-city :title="hotCityTitleValue" :list="hotCityList" /></el-row>
    <el-row><lately-visit :title="latelyVisitTitleValue" :list='latelyVisitList' /></el-row>
    <el-row><select-letter :title="selectLetterTitleValue" :listAZ="listAZ" /></el-row>
  </div>
</template>

<script>
import latelyVisit from './components/latelyVisit.vue'
import selectProvince from './components/selectProvince.vue'
import selectLetter from './components/selectLetter.vue'
import hotCity from './components/hotCity.vue'
import api from '@/api'
export default {
  name: 'changeCity', // 切换城市页面
  created () {
    // 获取热门城市数据
    api.getHotCity().then(rsp => {
      // console.log(rsp)
      this.hotCityList = rsp.data.data
    })
  },
  data () {
    return {
      hotCityTitleValue: '热门城市:',
      latelyVisitTitleValue: '最近访问:',
      selectLetterTitleValue: '按拼音首字母选择: ',
      // hotCityList: ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈'],
      hotCityList: [],
      latelyVisitList: ['宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈'],
      listAZ: 'ABCDEFGHIJKLMNOPQRSTUVWXZ'.slice('')
    }
  },
  components: {
    latelyVisit,
    selectProvince,
    selectLetter,
    hotCity
  }
}
</script>

<style>

</style>
