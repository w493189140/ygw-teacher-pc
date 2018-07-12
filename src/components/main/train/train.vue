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
       <li style="padding-left: 0" :class="{'active': navName=='公共课程'}" @click="changeNavData('公共课程')"><span>公共课程</span></li>
       <li :class="{'active': navName=='老师培训'}" @click="changeNavData('老师培训')"><span>老师培训</span></li>
       <li :class="{'active': navName=='导师培训'}" @click="changeNavData('导师培训')"><span>导师培训</span></li>
       <li :class="{'active': navName=='咨询师培训'}" @click="changeNavData('咨询师培训')"><span>咨询师培训</span></li>
       <li :class="{'active': navName=='校长培训'}" @click="changeNavData('校长培训')"><span>校长培训</span></li>
       <li :class="{'active': navName=='前台培训'}" @click="changeNavData('前台培训')"><span>前台培训</span></li>
     </ul>
    </div>
    <div class="clearfix main">
      <v-video-list class="video-list" v-for="(item,index) in videoList" :data="item" :key="index"></v-video-list>
    </div>
    <div class="load-more" v-if="loadMoreBtn">点击加载更多</div>
  </div>
</template>

<script>
import videoList from '@/components/base/video-list'
export default {
  data() {
    return {
      navName: '公共课程',
      videoList:[1,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
    height: 74px;
    border-bottom: 1px solid #e7e7e7;
    li{
      height: 74px;
      float: left;
      padding: 20px 10px 0;
      cursor: pointer;
      span{
        border-radius: 2px;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        width: 78px;
        text-align: center;
      }
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
