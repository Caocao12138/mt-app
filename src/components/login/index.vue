<template>
  <div class="page-login">
      <div class="login-header">
          <a href="https://jn.meituan.com/" class="logo"></a>
      </div>
      <div class="login-panel">
          <div class="banner">
              <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
          </div>
          <div class="form">
            <h4 v-if="error" class="tips">{{error}}</h4>
            <p style="line-height: 22px"><span style="color: #666; font-size: 14px">账号登录</span><span href="#" style="color: #666; font-size: 12px; float: right; cursor: pointer">手机动态码登录<i class="el-icon-mobile-phone" style="font-size: 14px; font-weight: 600; margin-left: 4px"></i></span></p>
            <el-input :class="{'error' : !userName}" prefix-icon='profile' v-model="userName" placeholder="手机号"></el-input>
            <el-input :class="{'error' : !password}" prefix-icon='password' v-model="password" type="password" placeholder="密码"></el-input>
            <p class="foot"><a href="#">忘记密码</a></p>
            <el-button class="btn-login" @click="submitLogin">登录</el-button>
            <p class="reg"><span style="margin-right: 6px">还没有账号?</span><router-link to="register">免费注册</router-link></p>
            <div class="user-agreement-wrap-text" style="display: flex; margin-top: 10px; font-size: 14px">
              <el-checkbox v-model="checked" style="margin-right: 6px; position: relative"><span :class="['userAgreement', {'display': !display}]">请先阅读并勾选用户协议</span></el-checkbox>
              <div class="user-agreement-content user-agreement-common">
              我已阅读并同意<a href="https://rules-center.meituan.com/rules-detail/4" class="j-terms" id="meituanTos" target="_blank">《美团用户协议》</a><a href="https://rules-center.meituan.com/rules-detail/2" class="j-terms" id="meituanTos" target="_blank">《隐私政策》</a>
              ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
              </div>
            </div>
            <div class="oauth-wrapper J-oauth-wrapper">
              <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
              <div class="oauth cf">
                  <span style="cursor: pointer" class="oauth__link oauth__link--qq third-login-btn" data-href="/account/connect/tencent" target="_blank" id="J-third-tencent"></span>
                  <span style="cursor: pointer" class="oauth__link oauth__link--weibo third-login-btn" data-href="/account/connect/sina" target="_blank" id="J-third-sina"></span>
              </div>
              <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
            </div>
          </div>
      </div>
      <footer>
        <ul>
          <li><a href="#">关于美团</a></li>
          <li><a href="#">加入我们</a></li>
          <li><a href="#">商家入驻</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">美团手机版</a></li>
        </ul>
        <p>©2022 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </footer>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'login', // 登录页面
  data () {
    return {
      userName: '',
      password: '',
      checked: false,
      error: '',
      display: false // 决定'请先阅读并勾选用户协议'是否显示 默认不显示
    }
  },
  methods: {
    // #登录按钮点击事件处理
    submitLogin () {
      // 判断是否点了我已阅读隐私政策
      if (!this.checked) {
        this.display = true
      } else {
        if (!this.userName && !this.password) {
          this.error = '请输入账号和密码'
        } else if (!this.userName) {
          this.error = '请输入账号'
        } else if (!this.password) {
          this.error = '请输入密码'
        } else {
          console.log('当前输入账号密码: ' + this.userName, this.password)
          api.login({userName: this.userName, password: this.password}).then(rsp => {
            if (rsp.data.status === 'success') {
              this.$router.push('/index')
            } else {
              this.error = rsp.data.msg
            }
          })
        }
      }
    }
  }
}
</script>

<style lang='scss'>
@import '@/assets/css/login/index.scss';
.el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border-color: #2db3a6;
  background-color: #2db3a6;
}
.el-checkbox__input.is-checked+.el-checkbox__label{
  color: #2db3a6;
}
.el-checkbox__inner:hover{
  border-color: #2db3a6;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #2db3a6;
}

.error{
  input{
    border-color: red;
  }
}

.display{
  display: none;
}
.userAgreement {
  position: absolute;
  top: -32px;
  left: -8px;
  background-color: rgba($color: #000000, $alpha: 0.6);
  padding: 2px 8px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
}
.userAgreement::before {
  content: '';
  width: 0px;
  height: 0px;
  border: 6px solid;
  border-color: rgba($color: #000000, $alpha: 0.6) transparent transparent transparent;
  position: absolute;
  top: 23px;
}

</style>
