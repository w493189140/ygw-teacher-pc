<template>
  <div class="header">
    <div class="w clearfix">
      <div class="f_left clearfix">
        <img class="f_left logo" src="@/assets/image/logo.png" alt="logo" @click="toHome">
        <ul class="f_left nav clearfix">
          <router-link class="head-nav" tag="li" to="/home">首页</router-link>
          <router-link class="head-nav train" tag="li" to="/train">培训</router-link>
          <router-link class="head-nav" tag="li" to="/liveMain">直播</router-link>
          <!--<li>-->
            <!--<a href="/live" target="_blank">教学直播</a>-->
          <!--</li>-->
          <router-link class="head-nav" tag="li" to="/teachData">教学资料</router-link>
          <router-link class="head-nav" tag="li" to="/lookData">参考资料</router-link>
          <!--<router-link class="head-nav" tag="li" to="/service">教学服务</router-link>-->
          <li>
          <a href="http://101.132.238.30:8080/" target="_blank">教学服务</a>
          </li>
        </ul>
      </div>
      <div class="f_right right-side">
        <el-input class="seach-input" placeholder="搜索关键字" v-model="seachText" @keyup.enter.native="searchAll">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-dropdown>
          <span class="el-dropdown-link user" @click="toPersonal">
            个人中心
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown">
            <el-dropdown-item @click.native="shutDown">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        seachText: "",
        navItem:"1"
      }
    },
    methods:{
      shutDown:function(){
        console.log('tuichu')
      },
      toHome:function(){
        this.$router.push('/home')
      },
      toPersonal:function () {
        this.$router.push('/personal')
        console.log('person')
      },
      searchAll:function (e) {
       console.log(this.seachText)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1999;
    font-size: 16px;
    height: 70px;
    border-bottom: 1px solid #e7e7e7;
    padding-top: 12px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(238,238,238,0.50);
  }
  .logo{
    cursor: pointer;
    margin-right: 60px;
  }
  .nav{
    li{
      float: left;
      /*width: 110px;*/
      padding: 0 20px;
      text-align: center;
      line-height: 46px;
      cursor: pointer;

      &:hover{
        color: @color;
        position: relative;
        &:before{
          content: "";
          position: absolute;
          width: 20px;
          height: 4px;
          background-color: @color;
          border-radius: 2px;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
    }
    .router-link-active{
      color: @color;
      position: relative;
      &:before{
        content: "";
        position: absolute;
        width: 20px;
        height: 4px;
        background-color: @color;
        border-radius: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        box-shadow: 0 2px 7px 0 rgba(45,203,181,0.56);
      }
    }
  }
  .right-side{
    padding-top: 5px;
  }
  .seach-input {
    width: 200px;
    height: 36px;
    margin-right: 20px;
    .el-input__inner{
      height: 35px;
    }
  }
  .user{
    width: 100px;
    height: 35px;
    border: 1px solid #dcdfe6;
    display: block;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    &:hover{
      border: 1px solid #c0c4cc;
    }
  }
  .dropdown{
    padding: 0;
  }
</style>
