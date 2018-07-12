<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动</el-breadcrumb-item>
        <el-breadcrumb-item>{{navName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <h3 class="title">新进教师教学核心素养培训-这里显示活动标题</h3>
      <div class="detail clearfix">
              <span class="head-img img-box">
                <img src="@/assets/image/Avatar_Default.png" alt="头像">
              </span>
        <span class="name line">达芬奇</span>
        <span class="line">2018-12-55 22:30</span>
      </div>
      <div class="content">
        <p>
          因为你之前的零散需求，有些确实本来就是零散的，比如一些小的改进、bug的处理，但有些是从大的需求里面拆解出来的。
          同样遵序团队的人员发挥的能力一定是要1+1>1的（在这里我没有说>2，因为人员的培养、成长是需要花费精力的），因此安排大的需求给所负责的
        </p>
        <img src="./home_img_banner.png" alt="">
        <p>
          因为你之前的零散需求，有些确实本来就是零散的，比如一些小的改进、bug的处理，但有些是从大的需求里面拆解出来的。
          同样遵序团队的人员发挥的能力一定是要1+1>1的（在这里我没有说>2，因为人员的培养、成长是需要花费精力的），因此安排大的需求给所负责的
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        navName:'',
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .container{
    padding-top: 40px;
  }
  .breadcrumb{
    height: 64px;
    padding-top: 20px;
    border-bottom: 1px solid #e7e7e7;
    font-size: 12px;
  }
  .main{
    .title{
      font-size: 22px;
      color: #2F3142;
      line-height: 76px;
      font-weight: 600;
    }
    .detail{
      span{
        float: left;
        line-height: 29px;
        padding: 0 8px;
        font-size: 12px;
        color: rgba(47,49,66,0.56);
        position: relative;
      }
      .head-img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        padding: 0;
      }
      .line:after{
        content: "";
        width: 1px;
        height: 10px;
        background: #EEEEEE;
        position: absolute;
        right: 0;
        top: 10px;
      }
      .name{
        color: #2F3142;
      }
    }
    .content{
      padding: 60px 0 20px;
      border-bottom:1px solid #e7e7e7;
      font-size: 18px;
      color: #2F3142;
      line-height: 34px;
      img{
        margin: 20px 0;
        max-width: 100% !important;
        height: auto !important;
      }
    }
  }
</style>
