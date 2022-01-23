<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location icon" />
      {{$store.state.position.name}}
      <router-link class="changeCity" :to="{ name: 'changeCity' }">
        切换城市
      </router-link>
      <span>[
      <router-link style="color: #999" :to="{ name: 'index' }" href="" v-for="(item, index) in nearCity" :key="index">{{item.name}} </router-link>
      ]</span>
    </div>
    <div class="m-user">
      <router-link class="login" :to="{ name: 'login' }">
        立即登录
      </router-link>
      <router-link class="register" :to="{ name: 'register' }">
        注册
      </router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'Top-informationArea-left', // 顶部-信息-左边区域
  data () {
    return {
      nearCity: []
    }
  },
  watch: {
    '$store.state.position': function () {
    }
  },
  created () {
    api.getCurPosition().then(rsp => {
      // console.log(rsp.data.data)
      this.$store.dispatch('setPosition', rsp.data.data)
      this.nearCity = rsp.data.data.nearCity
    })
  }
}
</script>

<style scoped>
.m-geo .position .icon{
  font-size: 14px;
}
</style>
