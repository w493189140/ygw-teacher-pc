<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/train' }">教学资料</el-breadcrumb-item>
        <el-breadcrumb-item>全部教学</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav">
      <ul class="clearfix">
        <li class="name">类别：</li>
        <li style="padding-left: 0" :class="{'active': navName=='体验课'}" @click="changeNavData('体验课')"><span>体验课</span></li>
        <li :class="{'active': navName=='基础课'}" @click="changeNavData('基础课')"><span>基础课</span></li>
        <li :class="{'active': navName=='专业课'}" @click="changeNavData('专业课')"><span>专业课</span></li>
        <li :class="{'active': navName=='精品课'}" @click="changeNavData('精品课')"><span>精品课</span></li>
      </ul>
      <ul class="clearfix">
        <li class="name">年级：</li>
        <li style="padding-left: 0" :class="{'active': navName=='K1'}" @click="changeNavData('K1')"><span>K1</span></li>
        <li :class="{'active': navName=='K2'}" @click="changeNavData('K2')"><span>K2</span></li>
        <li :class="{'active': navName=='K3'}" @click="changeNavData('K3')"><span>K3</span></li>
        <li :class="{'active': navName=='K4'}" @click="changeNavData('K4')"><span>K4</span></li>
        <li :class="{'active': navName=='K5'}" @click="changeNavData('K5')"><span>K5</span></li>
        <li :class="{'active': navName=='K6'}" @click="changeNavData('K6')"><span>K6</span></li>
        <li :class="{'active': navName=='K7'}" @click="changeNavData('K7')"><span>K7</span></li>
        <li :class="{'active': navName=='K8'}" @click="changeNavData('K8')"><span>K8</span></li>
        <li :class="{'active': navName=='K9'}" @click="changeNavData('K9')"><span>K9</span></li>
        <li :class="{'active': navName=='K10'}" @click="changeNavData('K10')"><span>K10</span></li>
        <li :class="{'active': navName=='K11'}" @click="changeNavData('K11')"><span>K11</span></li>
        <li :class="{'active': navName=='K12'}" @click="changeNavData('K12')"><span>K12</span></li>
      </ul>
      <ul class="clearfix">
        <li class="name">专题：</li>
        <li style="padding-left: 0" :class="{'active': navName=='听读'}" @click="changeNavData('听读')"><span>听读</span></li>
        <li :class="{'active': navName=='思说'}" @click="changeNavData('思说')"><span>思说</span></li>
        <li :class="{'active': navName=='文笔'}" @click="changeNavData('文笔')"><span>文笔</span></li>
        <li :class="{'active': navName=='主题'}" @click="changeNavData('主题')"><span>主题</span></li>
        <li :class="{'active': navName=='中华小作家'}" @click="changeNavData('中华小作家')"><span>中华小作家</span></li>
        <li :class="{'active': navName=='国学研学'}" @click="changeNavData('国学研学')"><span>国学研学</span></li>
        <li :class="{'active': navName=='演讲口才'}" @click="changeNavData('演讲口才')"><span>演讲口才</span></li>
      </ul>
    </div>
    <div class="clearfix main">
      <v-teacher-data-list class="video-list" @click.native="toChapter" v-for="(item,index) in videoList" :data="item" :key="index"></v-teacher-data-list>
    </div>
    <div class="load-more" v-if="loadMoreBtn">点击加载更多</div>
  </div>
</template>

<script>
  import teacherDataList from '@/components/base/teacher-data-list'
  export default {
    data() {
      return {
        navName: '公共课程',
        videoList:[1,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        lodeMoreBtn:true
      }
    },
    components: {
      'v-teacher-data-list': teacherDataList
    },
    mounted(){

    },
    methods: {
      changeNavData: function (mes) {
        this.navName = mes
      },
      loadMoreBtn:function () {

      },
      toChapter:function () {
        this.$router.push('/teachChapter')
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
  .nav{
    height: 150px;
    border-bottom: 1px solid #e7e7e7;
    padding: 16px 0;
    font-size: 14px;
    color: #000;
    li{
      height: 40px;
      float: left;
      padding: 0 10px;
      cursor: pointer;
      span{
        border: 1px solid #fff;
        border-radius: 2px;
        display: inline-block;
        line-height: 24px;
        text-align: center;
        padding: 2px 5px;
      }
    }
    .name{
      cursor: default;
      line-height: 28px;
      color: rgba(0, 0, 0, 0.54);
      padding-left: 0;
    }
    .title{
      padding-left: 0;
      cursor: default;
    }
    li:hover span, .active span{
      background-color: @color ;
      color: @color;
      background: rgba(45,203,181,0.16);
      border: 1px solid #2DCBB5;

    }
  }
  .main{
    margin-bottom: 24px;
    .video-list{
      float: left;
      margin-top: 24px;
      margin-right: 20px;
      &:nth-child(4n){
        margin-right: 0;
      }
    }
  }
</style>
