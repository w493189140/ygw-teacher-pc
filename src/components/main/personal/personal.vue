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
      <div class="clearfix content">
        <div class="f_left">
          <el-col >
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              @select="handleSelect"
              background-color="#F9F9F9"
              text-color="#2F3142"
              active-text-color="#2DCBB5">
              <el-menu-item index="1">
                <span slot="title">知识点目标数据值</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">简案</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">教学ppt</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">演课卡</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">演课ppt</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title">学案</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title">说课ppt</span>
              </el-menu-item>
              <el-menu-item index="8">
                <span slot="title">教材情景剧</span>
              </el-menu-item>
              <el-menu-item index="9">
                <span slot="title">知识点课件</span>
              </el-menu-item>
              <el-menu-item index="10">
                <span slot="title">说课视频</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
        <div class="f_right">
          564654564
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
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },

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
      .content{
        padding-top: 30px;
      }
    }



</style>
