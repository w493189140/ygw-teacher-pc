<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>教学资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <h3 class="title">新进教师教学核心素养——教学认知</h3>
      <p class="des">针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状</p>
      <div class="toll clearfix">
        <router-link tag="span" to="/classData">班级作品册</router-link>
        <router-link tag="span" to="/personalData">学员作品册</router-link>
      </div>
      <div class="detail clearfix">
        <v-teacher-file-list class="item" v-for="(item ,index) in dataList" :key="index" :data="item"></v-teacher-file-list>
      </div>
      <div class="chapter">
        <h3>课程章节</h3>
        <div class="clearfix">
          <v-teacher-chapter-list class="item" @click.native="toChapterDetail" v-for="(item ,index) in dataList1" :key="index" :data="item"></v-teacher-chapter-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import teacherFileList from '@/components/base/teacher-file-list'
  import teacherChapterList from '@/components/base/teacher-chapter-list'
    export default {
      data(){
        return{
          dataList:[0,0,0,0],
          dataList1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        }
      },
      components:{
        'v-teacher-file-list':teacherFileList,
        'v-teacher-chapter-list':teacherChapterList
      },
        mounted() {
        },
        methods: {
          toChapterDetail:function (i) {
            this.$router.push('/teacherChapterDetail')
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
      }
      .toll{
        span{
          width: 138px;
          text-align: center;
          height: 50px;
          line-height: 50px;
          margin: 24px;
          margin-left: 0;
          float: left;
          background: #F9F9F9;
          border: 1px solid #EEEEEE;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
    .detail,.chapter{
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
    .chapter{
      h3{
        font-size: 18px;
        color: #2F3142;
        font-weight: 600;
        line-height: 46px;
      }
    }
</style>
