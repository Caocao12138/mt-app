<template>
  <div class="">
    <span class="name">按省份选择: </span>
    <selector
    @change="clickChangeProvince"
     :list="provinceDataList"
     :title="provinceTitle"
     :value="province"
     :isShowWrapperActive='provinceActive'
     @change_active='changeProvinceActive' />

    <selector
    :disabled='cityDisabled'
    @change="clickChangeCity"
    :list="cityDataList"
    :title="cityTitle"
    :value="city"
    :isShowWrapperActive='cityActive'
    @change_active='changeCityActive' />
    <span>直接搜索: </span>
    <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading"
    >
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import api from '@/api'
import selector from './selector.vue'
export default {
  name: 'changeCity-selectProvince', // 切换城市页面-按省份选择一栏
  created () {
    // 获取城市列表
    api.getCityList().then(rsp => {
      // console.log(rsp.data.data)
      this.cityDataList = rsp.data.data
    })
    // 获取省份列表
    api.getProvinceList().then(rsp => {
      // console.log(rsp.data.data)
      const provinceName = rsp.data.data.map(item => {
        item.name = item.provinceName
        return item.name
      })
      // console.log(provinceName)
      rsp.data.data.provinceName = provinceName
      this.provinceDataList = rsp.data.data
    })
  },
  data () {
    return {
      province: '省份',
      provinceTitle: '省份',
      provinceDataList: [],
      city: '城市',
      cityTitle: '城市',
      // cityList: ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州', '武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州'],
      cityDataList: [],
      // 下拉菜单默认不显示
      provinceActive: false,
      cityActive: false,
      searchList: ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州'],
      searchWord: '',
      loading: false,
      cityDisabled: true // 城市列表默认为不能选中
    }
  },
  components: {
    selector
  },
  methods: {
    // #自定义事件  等待子组件调用该事件
    changeProvinceActive (boolean) {
      this.provinceActive = boolean
      if (boolean) {
        // 如果省份下拉菜单显示 城市下拉菜单不显示
        this.cityActive = false
      }
    },
    // #自定义事件  等待子组件调用该事件
    changeCityActive (boolean) {
      this.cityActive = boolean
      if (boolean) {
        // 如果城市下拉菜单显示 省份下拉菜单不显示
        this.provinceActive = false
      }
    },
    // 直接搜索搜索框 - 远程获取数据
    remoteMethod (searchWordValue) {
      // 请求后端接口
      console.log(searchWordValue)
    },
    clickChangeProvince (val) {
      this.province = val.name
      this.cityDataList = val.cityInfoList // 根据省份更新城市列表数据
      this.cityDisabled = false
      // this.$store.dispatch('setPosition', val)
    },
    clickChangeCity (val) {
      this.city = val.name
      this.$store.dispatch('setPosition', val)
      this.$router.push({name: 'index'})
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>
