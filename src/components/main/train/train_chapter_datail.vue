<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>教学</el-breadcrumb-item>
        <el-breadcrumb-item>全部教学</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <h3 class="title">教师发展与综合素质提升-这里显示活动标题</h3>
      <div class="content-item">
        <h4>视频文件</h4>
        <div class="video-box clearfix">
          <v-trainVideoList @click.native="toTrainVideo" class="video-list" v-for="(item,index) in dataList" :data="item" :key="index"></v-trainVideoList>
        </div>
      </div>
      <div class="content-item">
        <h4>视频文件</h4>
        <div class="video-box clearfix">
          <v-trainFileList class="video-list" v-for="(item,index) in dataList" :data="item" :key="index"></v-trainFileList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import trainVideoList from '@/components/base/train-video-list'
  import trainFileList from '@/components/base/train-file-list'
  export default {
    data(){
      return{
        dataList:[0,0,0,0,0,0,0,0,0,0,0]
      }
    },
    components:{
        'v-trainVideoList':trainVideoList,
        'v-trainFileList':trainFileList
    },
    mounted(){
    },
    methods:{
      toTrainVideo:function () {
        this.$router.push('/trainVideo')
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
    h4{
      padding-top: 24px;
      font-size: 18px;
      color: #2F3142;
      font-weight: 600;
    }
    .video-box{
      padding-top: 24px;
      .video-list{
        float: left;
        margin-bottom: 24px;
        margin-right:20px ;
        &:nth-child(4n){
          margin-right:0 ;
        }
      }
    }
  }
</style>
