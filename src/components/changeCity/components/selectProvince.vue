<template>
  <div class="">
    <span class="name">按省份选择: </span>
    <selector @change="clickChangeProvince" :list="provinceDataList" :title="provinceTitle" :value="province" :isShowWrapperActive='provinceActive' @change_active='changeProvinceActive' />
    <selector @change="clickChangeCity" :list="cityList" :title="cityTitle" :value="city" :isShowWrapperActive='cityActive' @change_active='changeCityActive' />
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
import selector from './selector.vue'
export default {
  name: 'changeCity-selectProvince', // 切换城市页面-按省份选择
  data () {
    return {
      province: '省份',
      provinceTitle: '省份',
      provinceDataList: [
        '山东', '甘肃', '江苏', '北京', '云南', '海南', '浙江', '上海', '天津', '陕西', '新疆', '贵州', '安徽', '澳门', '湖南', '河北', '香港', '辽宁', '四川', '宁夏', '吉林', '福建', '湖北', '广东', '重庆', '山西', '江西', '黑龙江', '青海', '河南', '台湾', '内蒙古', '西藏', '广西'
      ],
      city: '城市',
      cityTitle: '城市',
      cityList: ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州', '武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州'],
      // 下拉菜单默认不显示
      provinceActive: false,
      cityActive: false,
      searchList: ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州'],
      searchWord: '',
      loading: false
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
      this.province = val
    },
    clickChangeCity (val) {
      this.city = val
    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>
