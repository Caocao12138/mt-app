<template>
  <div class="guess">
    <div class="title">猜你喜欢</div>
    <div class="content" v-for="(item, index) in guessData" :key="index">
      <img v-for="v in imgSrc" :key="v.imgid" :src="v.imgOne" alt="">
      <div class="merchant">{{item.title}}</div>
      <p>
        <el-rate  v-model="item.score" disabled>
        </el-rate>
        <span>{{item.commentNum}}个评价</span>
      </p>
      <div class="position">{{item.areaName}}</div>
      <div class="price">
        <span>¥</span>
        <span class="priceNum">{{item.lowPrice}}</span>
        <span>起</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'searchProduc-gusssYouLikeIt', // 搜索商品后-跳转的主页面-猜我喜欢 父级: productDetail / components /index.vue
  created () {
    api.getRecommend().then(rsp => {
      // 处理远程数据score为字符串数据
      for (let i = 0; i < rsp.data.data.length; i++) {
        rsp.data.data[i].score = Number(rsp.data.data[i].score)
      }
      this.guessData = rsp.data.data
    })
  },
  data () {
    return {
      guessData: [],
      imgSrc: [{
        imgOne: 'https://p1.meituan.net/dpmerchantpic/93911da9be03b98da876b388515e9b87977677.jpg@190w_106h_1e_1c',
        imgId: 'one'
      }]
    }
  }
}
</script>

<style lang='scss'>
.guess {
  margin-top: 10px;
  box-sizing: border-box;
  margin-top: 10px;
  background: #FFF;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  padding: 16px;
  .title{
    margin-bottom: 10px;
  }
  .content{
    cursor: pointer;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 2px;
    margin-bottom: 12px;
    img{
      border: 3px solid #e5e5e5;
      width: 100%;
    }
    .el-rate, .el-rate__icon {
      display: inline-block;
      font-size: 2px;
    }
    p{
     height: 20px;
     font-size: 12px;
     span{
       height: 16px;
     }
    }
    .position{
      font-size: 12px;
      color: #999999;
      margin-bottom: 2px;
    }
    .price{
      span{
        font-size: 13px;
        font-weight: bold;
        color: #ff6600;
      }
      .priceNum{
        font-size: 20px;
      }
    }
  }
}
</style>
