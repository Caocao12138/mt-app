<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo">美团logo</a>
        <div class="login">
          <span style="font-size: 14px; margin-right: 12px">已有美团账号?</span>
          <router-link to="login" style="border-radius: 2px">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form :model="regiseterFrom" status-icon ref="regiseterFrom" label-width="100px" class="demo-regiseterFrom">
      <el-form-item label="手机号" prop="userName">
        <el-input v-model.number="regiseterFrom.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="regiseterFrom.password" autocomplete="off"></el-input>
      </el-form-item>
      <!-- <div class="pw-strength">
        <div :class="[bar, strengthClass]"></div>
        <div class="letter">
          <span>弱</span>
          <span>中</span>
          <span>强</span>
        </div>
      </div> -->
      <el-form-item label="确认密码" prop="rePassword">
        <el-input type="password" v-model="regiseterFrom.rePassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('regiseterFrom')">提交</el-button>
      </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'register', // 注册页面
  data () {
    return {
      // 表单数据
      regiseterFrom: {
        userName: '',
        password: '',
        rePassword: '',
        strengthClass: ''
      }
    }
  },
  methods: {
    // 提交点击事件
    submitForm () {

    }
  }
}
</script>

<style lang='scss'>
@import "@/assets/css/register/index.scss"
</style>
