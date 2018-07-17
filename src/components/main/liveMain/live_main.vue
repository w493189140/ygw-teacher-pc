<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>视频列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="video-list clearfix">
      <v-live-list class="list" v-for="(item,index) in liveList"  @click.native="toPlay(item)" :key="index"></v-live-list>
    </div>
    <div class="load-more">
      加载更多…
    </div>
  </div>
</template>

<script>
  import liveList from '@/components/base/live-list'
  export default {
    data() {
      return {
        navName: '公共课程',
        liveList:[1,2,3,4,5,56,6,6,6,6,6,6,6,],
        lodeMoreBtn:true
      }
    },
    components: {
      'v-live-list': liveList
    },
    mounted(){

    },
    methods: {
      changeNavData: function (mes) {
        this.navName = mes
      },
      loadMoreBtn:function () {

      },
      toPlay:function () {
        this.$router.push('/live')
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
  .video-list{
    padding-top: 30px;
    .list{
      margin-bottom: 24px;
      float: left;
      margin-right: 20px;
      &:nth-child(4n){
        margin-right: 0;
      }
    }
  }
</style>
