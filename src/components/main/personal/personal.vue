<template>
  <div class="container">
    <div class="user-info">
      <div class="w">
        <div class="head-img img-box f_left">
          <img :src="avatarDefault" alt="头像">
        </div>
        <div class="f_left info">
          <p class="name">王八蛋</p>
          <p class="des">中国教育学会“十一·五”课题《就思想，创造快乐》课题组、全国教育科学规划教育部十二·五课题“通过作文教学培养早期创新
            人才的理论与实践研究”课题核心研究成员。</p>
        </div>
      </div>
    </div>
    <div class="breadcrumb w">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/personal' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>{{navList[index-1]}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main clearfix w">
        <div class="f_left nav">
          <el-col >
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              @select="handleSelect"
              background-color="#F9F9F9"
              text-color="#2F3142"
              active-text-color="#2DCBB5">
              <el-menu-item index="1">
                <span slot="title">我上传的视频</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">我上传的文件</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">我的投稿</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">我的收藏</span>
              </el-menu-item>
              <li class="line"></li>
              <el-menu-item index="5">
                <span slot="title">账户安全</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title">修改资料</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title">修改密码</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
        <div class="f_right">

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
          avatarDefault:require("@/assets/image/Avatar_Default.png"),
          navList:['我上传的视频','我上传的文件','我的投稿','我的收藏','账户安全','修改资料','修改密码'],
          index:1
        }
      },
      components:{
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
            this.index = key
          },

        }
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/base.less";

    .user-info{
      width: 100%;
      height: 195px;
      min-width: 1180px;
      background-image: linear-gradient(-178deg, #F9F9F9 0%, #F0F0F0 100%);
      padding-top: 48px;
      .head-img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
      }
      .info{
        width: 940px;
        margin-left: 40px;
        font-size: 16px;
        color: #2F3142;
      }
      .name{
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;
        margin-top: 15px;
      }
    }
    .breadcrumb{
      height: 64px;
      padding-top: 20px;
      border-bottom: 1px solid #e7e7e7;
      font-size: 12px;
    }
    .main{
     padding-top: 25px;
    }
    .nav{
      background: #F9F9F9;
      width: 276px;
      padding: 30px 0 50px;
      .el-menu{
       border-right: 0;
      }
      .el-menu-item, .el-submenu__title {
        height: 44px;
        line-height: 44px;
        padding-left:45px!important;
      }
      .line{
        width: 200px;
        height: 1px;
        background-color: rgba(170, 170, 170, 0.2);
        margin: 20px 0 20px 45px;
      }
    }


</style>
