<template>
  <div class="info">
    <div class="item avatar">
      <p class="f_left lable">头像 ：</p>
      <div class="f_right value">
        <div class="img-box head-img">
          <img :src="imgDataUrl?imgDataUrl:avatarDefault" alt="头像">
          <span @click="toggleShow" class="changebtn" >编辑</span>
        </div>
      </div>
      <my-upload field="img"
                 @crop-success="cropSuccess"
                 @crop-upload-success="cropUploadSuccess"
                 @crop-upload-fail="cropUploadFail"
                 v-model="show"
                 :width="300"
                 :height="300"
                 url="/upload"
                 :params="params"
                 :headers="headers"
                 img-format="png">

      </my-upload>

    </div>
    <div class="item clearfix">
      <p class="f_left lable">姓名 ：</p>
      <p class="f_right value">
        <el-input v-model="input" placeholder="" type="phone" maxlength="20">
        </el-input>
      </p>
    </div>
    <div class="item clearfix sex">
      <p class="f_left lable">性别 ：</p>
      <p class="f_right value">
        <el-radio v-model="radio" label="0">男</el-radio>
        <el-radio v-model="radio" label="1">女</el-radio>
      </p>
    </div>
    <div class="item clearfix">
      <p class="f_left lable">邮箱 ：</p>
      <p class="f_right value">
        <el-input v-model="input" placeholder=""></el-input>
      </p>
    </div>
    <div class="item clearfix">
      <p class="f_left lable">出生年月 ：</p>
      <div class="f_right value">
      <div class="block">
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      </div>
    </div>
    <div class="item clearfix item-area">
      <p class="f_left lable">个人描述 ：</p>
      <p class="f_right value">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </p>
    </div>
    <div class="btn-group">
      <el-button class="submit" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
  import 'babel-polyfill'; // es6 shim
  import myUpload from 'vue-image-crop-upload';

  export default {
    data() {
      return {
        show: false,
        params: {
          token: '123456798',
          name: 'avatar'
        },
        headers: {
          smail: '*_~'
        },
        imgDataUrl: '', // the datebase64 url of created image
        avatarDefault:require("@/assets/image/Avatar_Default.png"),
        input:'',
        textarea:'',
        date:'2000-01-01',
        radio:'0'
      }
    },
    components: {
      'my-upload':myUpload
    },
    mounted() {

    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      },
      /**
       * crop success
       *
       * [param] imgDataUrl
       * [param] field
       */
      cropSuccess(imgDataUrl, field){
        console.log('-------- crop success --------');
        this.imgDataUrl = imgDataUrl;
      },
      /**
       * upload success
       *
       * [param] jsonData  server api return data, already json encode
       * [param] field
       */
      cropUploadSuccess(jsonData, field){
        console.log('-------- upload success --------');
        console.log(jsonData);
        console.log('field: ' + field);
      },
      /**
       * upload fail
       *
       * [param] status    server api return error status, like 500
       * [param] field
       */
      cropUploadFail(status, field){
        console.log('-------- upload fail --------');
        console.log(status);
        console.log('field: ' + field);
      },
      sendPhone:function() {
        console.log("发送验证码")
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .info{
    .item{
      height: 40px;
      line-height: 40px;
      margin-bottom: 25px;
      font-size: 14px;
      color: rgba(47, 49, 66, 0.56);
      width: 380px;
    }
    .lable{
      width: 120px;
      text-align: right;
    }
    .value{
      width: 260px;
    }
    .item-area{
      height: 100px;
      width: 680px;
      .value{
        width: 560px;
      }
    }

    .block,.el-date-editor.el-input, .el-date-editor.el-input__inner{
      width: 100%;
      height: 100%;
    }
    .btn-group{
      margin-left: 100px;
      margin-top: 40px;
    }
    .avatar{
      height: 100px;
      .value{
        width: 100px;
        height: 100px;
        border: 1px solid #efefef;
        float: left;
        position: relative;
      }
      .changebtn{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 30px;
        line-height: 30px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0 0 4px 4px;
        font-size: 12px;
        color: rgb(255,255,255);
        cursor: pointer;
        width: 100%;
        text-align: center;
      }
    }
    .sex{
      margin: -10px 0 20px;
      .value{
        padding-left: 20px;
      }
    }
    .submit{
      width: 260px;
      margin-left: 20px;
    }
  }

</style>
