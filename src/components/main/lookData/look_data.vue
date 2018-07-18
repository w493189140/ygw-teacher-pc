<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/train' }">参考资料</el-breadcrumb-item>
        <el-breadcrumb-item>{{navName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav">
      <ul class="clearfix">
        <li :class="{'active': navName=='公开课'}" @click="changeNavData('公开课')"><span>公开课</span></li>
        <li style="padding-left: 0" :class="{'active': navName=='讲座访谈'}" @click="changeNavData('讲座访谈')"><span>讲座访谈</span></li>
        <li :class="{'active': navName=='1.0版'}" @click="changeNavData('1.0版')"><span>1.0版</span></li>
        <li :class="{'active': navName=='2.0版'}" @click="changeNavData('2.0版')"><span>2.0版</span></li>
      </ul>
    </div>
    <div class="clearfix main">
      <v-video-list class="video-list" @click.native="toChapter" v-for="(item,index) in videoList" :data="item" :key="index"></v-video-list>
    </div>
    <div class="load-more" v-if="loadMoreBtn">点击加载更多</div>
  </div>
</template>

<script>
  import videoList from '@/components/base/video-list'
  export default {
    data() {
      return {
        navName: '公开课',
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

      },
      toChapter:function () {
        this.$router.push('/trainChapter')
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
