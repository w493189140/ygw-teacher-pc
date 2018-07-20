<template>
  <div class="password">
    <div class="item clearfix first">
      <p class="f_left lable"></p>
      <p class="f_right value">当前绑定手机：138*****000</p>
    </div>
    <div class="item clearfix">
      <p class="f_left lable">当前密码 ：</p>
      <p class="f_right value">
        <el-input v-model="input" placeholder="" type="phone" maxlength="20">
        </el-input>
      </p>
    </div>
    <div class="item clearfix">
      <p class="f_left lable">新密码 ：</p>
      <p class="f_right value">
        <el-input v-model="input" placeholder=""></el-input>
      </p>
    </div>
    <div class="item clearfix">
      <p class="f_left lable">再次输入新密码 ：</p>
      <p class="f_right value">
        <el-input v-model="input" placeholder=""></el-input>
      </p>
    </div>
    <div class="btn-group">
      <el-button class="submit" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input:''
      }
    },
    components: {},
    mounted() {

    },
    methods: {
      sendPhone:function() {
        console.log("发送验证码")
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .password{
    .item{
      height: 40px;
      line-height: 40px;
      margin-bottom: 25px;
      font-size: 14px;
      color: rgba(47, 49, 66, 0.56);
      width: 380px;
    }
    .first{
      height: 30px;
      line-height: 30px;
      margin-bottom: 0;
      font-size: 12px;
      color: rgba(47, 49, 66, 0.32);
    }
    .lable{
      width: 120px;
      text-align: right;
    }
    .value{
      width: 260px;
    }
    .phone-btn{
      cursor: pointer;
      color: @color;
      margin-right: 5px;
    }
    .btn-group{
      margin-left: 100px;
      margin-top: 40px;
    }
    .submit{
      width: 260px;
      margin-left: 20px;
    }
  }

</style>
