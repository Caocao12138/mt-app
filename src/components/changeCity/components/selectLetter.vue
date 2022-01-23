<template>
<div  class="categroy">
  <dl class="m-categroy">
    <dt>{{title}}</dt>
    <dd v-for="(item, index) in listAZ" :key="index">
      <a :href="'#city-'+item">{{item}}</a>
    </dd>
  </dl>
  <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-'+index">
    <dt>{{index}}</dt>
    <dd v-for="city in item" :key="city.id" @click="changeCity(city)"><span>{{city.name}}</span></dd>
  </dl>
    </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'changeCity-selectLetter', // 切换城市页面-按拼音首字母选择
  data (item) {
    return {
      cityGroup: [],
      cityList: []
    }
  },
  props: [
    'listAZ',
    'title'
  ],
  created () {
    api.getCityList().then(rsp => {
      this.cityList = rsp.data.data
      // console.log(this.cityList)
      let obj = {}
      this.cityList.forEach((item) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []// 创建对象属性和属性值类型
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })
      this.cityGroup = obj
    })
  },
  methods: {
    changeCity (toCity) {
      this.$store.dispatch('setPosition', toCity)
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/changecity/categroy.scss';
</style>
