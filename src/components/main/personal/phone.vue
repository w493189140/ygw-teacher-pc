<template>
    <div class="phone">
      <div class="item clearfix first">
        <p class="f_left lable"></p>
        <p class="f_right value">当前绑定手机：138*****000</p>
      </div>
      <div class="item clearfix">
        <p class="f_left lable">新的手机 ：</p>
        <p class="f_right value">
          <el-input v-model="input" placeholder="请输入手机号" type="phone" maxlength="11">
            <i slot="suffix" class="phone-btn" @click="sendPhone">点击获取</i>
          </el-input>
        </p>
      </div>
      <div class="item clearfix">
        <p class="f_left lable">验证码 ：</p>
        <p class="f_right value">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
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
    .phone{
      .item{
        height: 40px;
        line-height: 40px;
        margin-bottom: 25px;
        font-size: 14px;
        color: rgba(47, 49, 66, 0.56);
        width: 360px;
      }
      .first{
        height: 30px;
        line-height: 30px;
        margin-bottom: 0;
        font-size: 12px;
        color: rgba(47, 49, 66, 0.32);
      }
      .lable{
        width: 100px;
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
      }
    }

</style>
