<template>
  <div class="login-wraper">
    <v-header></v-header>
   <div class="login w">
     <img src="./login-art.png" alt="bg">
     <div class="main">
       <h2>登录</h2>
       <p class="des">“温故而知新，可以为师矣。” —— 论语</p>
       <div class="form">
         <el-input class="input" v-model="telNum" type="tel" maxlength="11" placeholder="请输入账号"></el-input>
         <el-input class="input" v-model="passWord" type="password" maxlength="20" placeholder="请输入密码">
           <i  class="el-input__icon el-icon-search"></i>
           <span slot="suffix" class="el-input__icon" @click="toPassWord">忘记密码</span>
         </el-input>
         <p class="clearfix">
           <el-checkbox class="checkbox f_left" v-model="checked">记住密码</el-checkbox>
           <el-button class="f_right login-btn" type="primary" :disabled="true">登录</el-button>
         </p>
       </div>
     </div>
   </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '@/components/main/header/header'
  import footer from '@/components/main/footer/footer'
export default {
  name: 'login',
  data () {
    return {
      checked: true,
      num1: 1,
      telNum:"",
      passWord:""
    }
  },
  components:{
    'v-header':header,
    'v-footer':footer,
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    toPassWord(){
      console.log('跳转忘记密码')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/css/base.less";
  .login{
    padding: 100px 0;
    position: relative;
    padding-bottom: 220px;
    img{
      margin-left: -20px;
    }
    .main{
      position: absolute;
      top: 110px;
      right: 0;
      width: 440px;
      height: 518px;
      opacity: 0.9;
      background: #FFFFFF;
      border: 1px solid #EEEEEE;
      box-shadow: 0 6px 20px 0 rgba(47,49,66,0.16);
      border-radius: 4px;
      font-size: 16px;
      color: rgba(47,49,66,0.32);
      padding: 40px;
      h2{
        font-size: 55px;
        color: #2DCBB5;
        letter-spacing: 0;
        text-shadow: 0 6px 12px rgba(45,203,181,0.16);
        font-weight: 600;
      }
      .des{
        font-size: 16px;
        color: rgba(47,49,66,0.32);
        margin-top: 10px;
      }
      .form{
        padding-top: 60px;
      }
      .input{
        border-radius: 4px;
        margin-bottom: 30px;
        height: 46px;
      }
      .login-btn{
        width: 200px;
        height: 44px;
      }
      .checkbox{
        margin-top: 13px;
      }
    }
    .el-input__icon{
      padding-right: 10px;
      cursor: pointer;
    }
  }
</style>
