<template>
    <div class="contribute w">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我要投稿</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="main">
        <div class="item clearfix">
          <div class="f_left lable">标题 ：</div>
          <div class="f_left value">
            <el-input v-model="input"></el-input>
          </div>
        </div>
        <div class="item clearfix">
          <div class="f_left lable">描述 ：</div>
          <div class="f_left value">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </div>
        </div>
        <div class="item clearfix fullscreen">
          <div class="f_left lable"></div>
         <div class="f_left value">
           <el-button type="info" plain>上传视频</el-button>
           <span class="tip">格式支持:rm rmvb mpeg1-4 mov mtv dat wmv avi 3gp amv dmv flv式，文件小于500M</span>
         </div>
        </div>
        <div class="btn-group">
          <el-button class="submit" type="primary">保存</el-button>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          imgDefault:require("@/assets/image/cover.png"),
          input:'',
          textarea:''
        }
      },
      methods:{

      }
    }
</script>

<style scoped lang="less">
@import "../../../assets/css/base.less";

.contribute{
  padding-top: 40px;
}
.breadcrumb{
  height: 64px;
  padding-top: 20px;
  border-bottom: 1px solid #e7e7e7;
  font-size: 12px;
}

.main {
  padding-top: 50px;
  padding-bottom: 150px;
  .item {
    margin-bottom: 25px;
    font-size: 14px;
    color: rgba(47, 49, 66, 0.56);
    width: 100%;
  }
  .lable {
    height: 40px;
    line-height: 40px;
    width: 100px;
    text-align: right;
  }
  .value {
    width: 460px;
  }
  .cover-img{
    width:140px ;
    height: 80px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    margin-right: 12px;
  }
  .fullscreen{
    .value {
      width: 840px;
    }
  }
  .choice-img{
    margin-top: 40px;
  }
  .phone-btn {
    cursor: pointer;
    color: @color;
    margin-right: 5px;
  }
  .btn-group {
    margin-left: 100px;
    margin-top: 80px;
  }
  .tip{
    margin-left: 15px;
    font-size: 12px;
    color: rgba(47,49,66,0.56);
  }
  .submit{
    width: 260px;
    margin-left:40px;
  }
}
</style>
