<template>
  <div class="login-wraper">
    <v-header></v-header>
   <div class="login w">
     <img src="./login-art.png" alt="bg">
     <div class="main">
       <h2>登录</h2>
       <p class="des">“温故而知新，可以为师矣。” —— 论语</p>
       <div class="form">
         <el-input class="input"
                   v-model="userName"
                   @blur="telBlur"
                   @focus="telFocus"
                   @keyup.enter.native="loginIn"
                   type="tel"
                   maxlength="11"
                   placeholder="请输入账号">
         </el-input>
         <div class="tips">
           <span v-if="telFalse">手机号错误，请重新输入</span>
         </div>
         <el-input class="input"
                   v-model="passWord"
                   @blur="passWordBlur"
                   @focus="passWordFocus"
                   @keyup.enter.native="loginIn"
                   type="password"
                   maxlength="20"
                   placeholder="请输入密码">
           <!--<i  class="el-input__icon el-icon-search"></i>-->
           <!--<span slot="suffix" class="el-input__icon" @click="toPassWord">忘记密码</span>-->
         </el-input>
         <div class="tips">
           <span v-if="passWordFalse">密码错误，请重新输入</span>
         </div>
         <p class="clearfix">
           <el-checkbox class="checkbox f_left" v-model="sel">记住密码</el-checkbox>
           <el-button class="f_right login-btn"
                      type="primary"
                      @click="loginIn"
                      :disabled="!canLogin">
             登录
           </el-button>
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
  data () {
    return {
      userName:'',
      passWord:'',
      sel: true,
      telFalse:false,
      passWordFalse:false
    }
  },
  components:{
    'v-header':header,
    'v-footer':footer,
  },
  mounted(){
    this.getlocaluser();
  },
  computed:{
    canLogin(){
      // console.log(this.userName)
      return  this.isPoneAvailable(this.userName) && this.passWord !== ''
    }
  },
  methods: {
    loginIn() {
      // ajax
      if(this.canLogin){
        this.setlocaluser()
      }else {
        this.$message.error('请输入有效的用户名和密码');
      }
    },
    telBlur(){
      if(!this.isPoneAvailable(this.userName)){
       this.telFalse = true
      }
    },
    telFocus(){
      this.telFalse = false
    },
    passWordBlur(){
      console.log(this.passWord)
      if(this.passWord == ''){
        this.passWordFalse = true
      }
    },
    passWordFocus(){
      this.passWordFalse = false
    },
    // toPassWord(){
    //   console.log('跳转忘记密码')
    // },
    isPoneAvailable(tellNum) {
      let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(tellNum)) {
        return false;
      } else {
        return true;
      }
    },
    getlocaluser(){//获取localstroage存储的用户名密码
      // this.sel=true;
      this.userName = localStorage.getItem("user")
      this.passWord =localStorage.getItem("uer")?this.uncompile(localStorage.getItem("uer")):''
      if(localStorage.getItem("user")&&localStorage.getItem("uer")){
        this.sel=true;
      }
    },
    setlocaluser(){
      if(this.sel){  //设置要记住的账户，密码
        localStorage.setItem("user",this.userName)
        localStorage.setItem("uer",this.compile(this.passWord))
      }else{
        localStorage.removeItem("user");
        localStorage.removeItem("uer");
      }
    },
    compile(code){
        var c=String.fromCharCode(code.charCodeAt(0)+code.length);
        for(var i=1;i<code.length;i++){
          c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
        }
        return (escape(c));
    },
    uncompile(code){
      code=unescape(code);
      var c=String.fromCharCode(code.charCodeAt(0)-code.length);
      for(var i=1;i<code.length;i++){
        c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));
      }
      return c;
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
        /*margin-bottom: 30px;*/
        height: 46px;
      }
      .tips{
        height: 30px;
       font-size: 12px;
        color: red;
        padding-left: 10px;

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
