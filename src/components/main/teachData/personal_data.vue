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
        <li class="name">大区：</li>
        <li style="padding-left: 0" :class="{'active': navName=='全部'}" @click="changeNavData('全部')"><span>全部</span></li>
        <li :class="{'active': navName=='华东'}" @click="changeNavData('华东')"><span>华东</span></li>
        <li :class="{'active': navName=='华南'}" @click="changeNavData('华南')"><span>华南</span></li>
        <li :class="{'active': navName=='华西'}" @click="changeNavData('华西')"><span>华西</span></li>
        <li :class="{'active': navName=='华北'}" @click="changeNavData('华北')"><span>华北</span></li>
      </ul>
      <ul class="clearfix">
        <li class="name">城市：</li>
        <li style="padding-left: 0" :class="{'active': navName=='全部'}" @click="changeNavData('全部')"><span>全部</span></li>
        <li :class="{'active': navName=='北京市'}" @click="changeNavData('北京市')"><span>北京市</span></li>
        <li :class="{'active': navName=='上海市'}" @click="changeNavData('上海市')"><span>上海市</span></li>
        <li :class="{'active': navName=='南京市'}" @click="changeNavData('南京市')"><span>南京市</span></li>
        <li :class="{'active': navName=='武汉市'}" @click="changeNavData('武汉市')"><span>武汉市</span></li>

      </ul>
      <ul class="clearfix">
        <li class="name">校区：</li>
        <li style="padding-left: 0" :class="{'active': navName=='全部'}" @click="changeNavData('全部')"><span>全部</span></li>
        <li :class="{'active': navName=='徐汇区'}" @click="changeNavData('徐汇区')"><span>徐汇区</span></li>
        <li :class="{'active': navName=='黄浦区'}" @click="changeNavData('黄浦区')"><span>黄浦区</span></li>
        <li :class="{'active': navName=='静安区'}" @click="changeNavData('静安区')"><span>静安区</span></li>
        <li :class="{'active': navName=='普陀区'}" @click="changeNavData('普陀区')"><span>普陀区</span></li>
        <li :class="{'active': navName=='宝山区'}" @click="changeNavData('宝山区')"><span>宝山区</span></li>
        <li :class="{'active': navName=='嘉定区'}" @click="changeNavData('嘉定区')"><span>嘉定区</span></li>
        <li :class="{'active': navName=='青浦区'}" @click="changeNavData('青浦区')"><span>青浦区</span></li>
        <li :class="{'active': navName=='闵行区'}" @click="changeNavData('闵行区')"><span>闵行区</span></li>
      </ul>
    </div>
    <div class="clearfix main">
      <v-class-list class="video-list" @click.native="toStudentChapter" v-for="(item,index) in videoList" :data="item" :key="index"></v-class-list>
    </div>
    <div class="load-more" v-if="loadMoreBtn">点击加载更多</div>
  </div>
</template>

<script>
  import classList from '@/components/base/class-list'
  export default {
    data() {
      return {
        navName: '公共课程',
        videoList:[1,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        lodeMoreBtn:true
      }
    },
    components: {
      'v-class-list': classList
    },
    mounted(){

    },
    methods: {
      changeNavData: function (mes) {
        this.navName = mes
      },
      loadMoreBtn:function () {

      },
      toStudentChapter:function () {
        this.$router.push('/studentChapter')
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
