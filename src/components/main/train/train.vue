<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/train' }">教学培训</el-breadcrumb-item>
        <el-breadcrumb-item>{{navName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav">
     <ul class="clearfix">
       <li class="title">类型：</li>
       <li :class="{'active': navName=='公共课程'}" @click="changeNavData('公共课程')">公共课程</li>
       <li :class="{'active': navName=='老师培训'}" @click="changeNavData('老师培训')">老师培训</li>
       <li :class="{'active': navName=='导师培训'}" @click="changeNavData('导师培训')">导师培训</li>
       <li :class="{'active': navName=='咨询师培训'}" @click="changeNavData('咨询师培训')">咨询师培训</li>
       <li :class="{'active': navName=='校长培训'}" @click="changeNavData('校长培训')">校长培训</li>
       <li :class="{'active': navName=='前台培训'}" @click="changeNavData('前台培训')">前台培训</li>
     </ul>
    </div>
    <div class="clearfix">
      <v-video-list class="video-list" v-for="(item,index) in videoList" :data="item" :key="index"></v-video-list>
    </div>
    <div class="loadmore-btn" v-if="loadMoreBtn">点击加载更多</div>
  </div>
</template>

<script>
import videoList from '@/components/base/video-list'
export default {
  data() {
    return {
      navName: '公共课程',
      videoList:[1,2,3,4],
      lodeMoreBtn:true
    }
  },
  components: {
    'v-video-list': videoList
  },
  mounted(){

  },
  methods: {
    changeNavData: function (mes) {
      this.navName = mes
    },
    loadMoreBtn:function () {

    }
  }
}
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .breadcrumb{
    height: 50px;
    padding-top: 20px;
    border-bottom: 1px solid #e7e7e7;
  }
  .nav{
    li{
      height: 40px;
      line-height: 40px;
      float: left;
      padding: 0 10px;
      cursor: pointer;
    }
    .title{
      padding-left: 0;
      cursor: default;
    }
    li:hover , .active{
      color: @color;
    }
  }
  .video-list{
    float: left;
  }
  .loadmore-btn{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #f7f7f7;
    cursor: pointer;
  }
</style>
