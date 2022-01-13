<template>
  <div class="guess">
    <div class="title">猜你喜欢</div>
    <div class="content" v-for="(item, index) in guessData" :key="index">
      <img :src="item.imgSrc" alt="">
      <div class="merchant">{{item.merchant}}</div>
      <p>
        <el-rate  v-model="item.scoreValue" disabled>
        </el-rate>
        <span>{{item.comments}}个评价</span>
      </p>
      <div class="position">{{item.position}}</div>
      <div class="price">
        <span>¥</span>
        <span class="priceNum">{{item.price}}</span>
        <span>起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchProduc-gusssYouLikeIt', // 搜索商品后-跳转的主页面-猜我喜欢 父级: productDetail / components /index.vue
  data () {
    return {
      guessData: [{
        // type: 'life',
        imgSrc: 'https://p1.meituan.net/biztone/102024596_1614741543903.jpeg@190w_106h_1e_1c',
        merchant: 'coao初妆美甲美睫(SOHO尚都店)',
        scoreValue: 3.5,
        comments: '189',
        position: '长清大学城 4 - 4 - 1',
        price: '68.0'
      },
      {
        // type: 'life',
        imgSrc: 'https://p1.meituan.net/dpmerchantpic/7d14ceef2e3e2e32bd19c9ac1b80cd6e453412.jpg@220w_125h_1e_1c',
        merchant: 'coao初妆美甲美睫(SOHO尚都店)',
        scoreValue: 3.5,
        comments: '189',
        position: '长清大学城 4 - 4 - 1',
        price: '68.0'
      },
      {
        // type: 'life',
        imgSrc: 'https://p0.meituan.net/msmerchant/a15b1e24ed8b36ebefde1c925ed6c875117239.jpg@220w_125h_1e_1c',
        merchant: 'coao初妆美甲美睫(SOHO尚都店)',
        scoreValue: 3.5,
        comments: '189',
        position: '长清大学城 4 - 4 - 1',
        price: '68.0'
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
