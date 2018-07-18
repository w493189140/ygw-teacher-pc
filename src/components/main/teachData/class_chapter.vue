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
      <h3 class="title">六年二班</h3>
        <p class="des" id="des">
          <span v-if="desMore">{{newDesText}}</span>
          <span v-else>{{desText}}</span>
          <span v-if="showMore">
             <span @click="toggleText" v-if="desMore" class="maincolor">[查看更多]</span>
             <span @click="toggleText" v-else class="maincolor">[收起内容]</span>
          </span>
        </p>
      <div class="chapter clearfix">
        <v-class-list class="item" @click.native="toChapterDatail" v-for="(item ,index) in dataList" :key="index" :data="item"></v-class-list>
      </div>
    </div>
  </div>
</template>

<script>
  import classList from '@/components/base/class-list'
  export default {
    data(){
      return{
        desText:'班级介绍：在生命中，最了一起。是源于对知识的渴求，是生于对梦想的憧儿，共同沐浴在雪堰中心小学的我们走到了一芽儿，共同沐浴在雪堰中心小学的我们走到了一起。是源于对知识的渴求，是生于对梦想的憧憬，41张笑脚印记录下我们的点点进步',
        desMore:true,
        showMore:false,
        newDesText:'',
        dataList:[0,0,0,0,0,0,0,0,0,0,0]
      }
    },
    components:{
        'v-class-list':classList
    },
    mounted(){
      this._initDes()
    },
    methods:{
      toggleText:function () {
        this.desMore = !this.desMore
      },
      _initDes:function(){
        let newDesText = this.desText
        if(newDesText.length>180){
          this.showMore = true
          newDesText = newDesText.substring(0,180)
        }
        this.newDesText = newDesText
      },
      toChapterDatail:function () {
        // this.$router.push('/trainChapterDatail')
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
    .des{
      font-size: 14px;
      color: rgba(47,49,66,0.56);
      line-height: 21px;
      transition: all 0.5s;
      .maincolor{
        margin-right: 5px;
        cursor: pointer;
      }
    }
    .chapter{
      margin-top: 24px;
      padding: 24px 0;
      border-top: 1px solid #e7e7e7;
      .item{
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
