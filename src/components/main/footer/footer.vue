<template>
    <div class="footer">
      <div class="w">
        <img class="f_left logo" src="@/assets/image/logo.png" alt="logo" @click="toHome">
        <div class="f_left main">
          <p>联系方式：54658487489789  |  021544548</p>
          <p>京ICP备13018838-1号|隐私声明|总部地址：北京市海淀区中关村南大街12号阳光培训楼</p>
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
  background-color: #efefef;
  padding-top: 40px;
}
  .main{
    margin-left: 20px;
    line-height: 25px;
  }
</style>
