<template>
    <div class="footer">
      <div class="w">
        <img class="f_left logo" src="@/assets/image/logo_gray.png" alt="logo" @click="toHome">
        <div class="f_left main">
          <p>联系方式：<span>service@ygwo.com</span>　|　<span style="display: inline-block;
    transform: translateY(2px);">021-61550291</span></p>
          <p>
            ©2018 阳光喔教育科技（上海）有限公司 版权所有　|　
            <span>服务协议</span>　|　
            <span>问题反馈</span>　|　
            <span>帮助</span>
            <!--<router-link tag="a" to="/home">服务协议</router-link>　|　-->
            <!--<router-link tag="a" to="/home">问题反馈</router-link>　|　-->
            <!--<router-link tag="a" to="/home">帮助</router-link>-->
          </p>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      data(){
        return{

        }
      },
      methods:{
        toHome:function(){

        },
        toPersonal:function () {

        },
      }
    }
</script>

<style scoped>
@import "../../../assets/css/base.less";
.footer{
  height: 130px;
  background: #FAFAFA;
  padding-top: 45px;
  font-size: 12px;
  color: rgba(0,0,0,0.56);
  letter-spacing: 0;
  line-height: 18px;
}
  .main{
    margin-left: 20px;
    line-height: 25px;
    margin-top: -5px;
  }
</style>
