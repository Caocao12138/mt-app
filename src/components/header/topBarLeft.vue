<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location icon" />
      济南
      <router-link class="changeCity" :to="{ name: 'changeCity' }">
        切换城市
      </router-link>
      [
      <a href="">齐河</a>
      <a href="">长清区</a>
      <a href="">禹城</a>
      ]
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
export default {
  name: "Top-informationArea-left", //顶部-信息-左边区域
};
</script>

<style scoped>
.m-geo .position .icon{
  font-size: 14px;
}
</style>