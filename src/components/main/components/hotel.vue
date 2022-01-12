<template>
  <div class="m-istyle">
    <dl @mouseover="over" class="nav.istyle">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind == item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData" :key="index" @click="toDetail">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">
              {{ item.sub_title }}
            </div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{
                  item.price
                }}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span> -->
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">抢光了</span>
                </span>
            </div>
            <div class="price-info" v-else>
                <span class="current-price-wrapper">
                    <span class="price-symbol numfont">¥</span>
                    <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                    <span class="units">/{{item.price_info.units}}均</span>
                </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
// import api from '@/api/index.js'
export default {
  name: 'main-container-hotel', // 中间区域-酒店模块
  data () {
    return {
      kind: 'all',
      resultsData: [
        {
          img: 'https://img.meituan.net/phoenix/3006dc06f9b6d61517572d417ffe0ce82837674.jpg@740w_416h_1e_1c',
          title: '公寓民宿 瑞通大厦',
          sub_title: '整套1居室·可住2人 | 佛罗伦萨小镇度假区',
          price: 168,
          address: 'chofdsahkfl'
        }, {
          img: 'https://img.meituan.net/phoenix/5f1aa4dfa6713db82ede485e9ced50382956573.jpg@740w_416h_1e_1c',
          title: '自助密码锁开发区万达精致屋',
          sub_title: '整套1居室·可住2人 | 佛罗伦萨小镇度假区',
          price: 78,
          address: 'chofdsahkfl'
        }, {
          img: 'https://img.meituan.net/phoenix/d39a2c4726b42135afb307005cf7df891495815.jpg@740w_416h_1e_1c',
          title: '【有家•美舍】格林商业广场',
          sub_title: '整套1居室·可住2人 | 佛罗伦萨小镇度假区',
          price: 238,
          address: 'chofdsahkfl'
        }, {
          img: 'https://img.meituan.net/phoenix/fede2c6b974f1bae0893f8d502337ead1676516.jpg@740w_416h_1e_1c',
          title: '自由港公寓欧式一居室',
          sub_title: '整套1居室·可住2人 | 佛罗伦萨小镇度假区',
          price: 128,
          address: 'chofdsahkfl'
        },
        {
          img: 'https://img.meituan.net/phoenix/d8409cdf350838d5f9cdd99653698b293709411.jpg@740w_416h_1e_1c',
          title: '机场大床房！免费接送机场',
          sub_title: '整套1居室·可住2人 | 佛罗伦萨小镇度假区',
          price: 88,
          address: 'chofdsahkfl'
        }, {
          img: 'https://img.meituan.net/phoenix/c2d64170b872abf0ed65ebc140244a55294471.jpg@740w_416h_1e_1c',
          title: '橙子民宿店',
          sub_title: '整套1居室·可住2人 | 佛罗伦萨小镇度假区',
          price: 198,
          address: 'chofdsahkfl'
        }
      ]
    }
  },
  props: ['nav'],
  // created () {
  //   api.resultsByKeywords().then((res) => {
  //     console.log(res)
  //     this.resultsData = res.data.data
  //   })
  // },
  methods: {
    over (e) {
      // console.log(e.target)
      const dom = e.target
      const tagName = dom.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // 动态获取数据  ajax请求
    },
    // #点击打开详情页
    toDetail () {
      this.$router.push('/detail')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
