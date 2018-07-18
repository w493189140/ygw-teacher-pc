<template>
  <div class="list">
    <div class="img-box">
      <div class="iconfont icon_file_word">
      </div>
    </div>
    <div class="detail">
      <h3>我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货</h3>
      <div class="teacher clearfix">
        <div class="f_left clearfix">
          <span class="head-img img-box f_left"><img :src="avatarDefault" alt="头像"></span>
          <span class="name f_left">葫芦娃</span>
        </div>
        <div class="f_right number">2017-06-06 20:00</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        avatarDefault:require("@/assets/image/Avatar_Default.png"),
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/base";
  .icon_file_word:before {
    content: '\e784'
  }
  .icon_file_pdf:before {
    content: '\e783'
  }
  .icon_file_ppt:before {
    content: '\e782'
  }
  .list {
    width: 280px;
    /*height: 226px;*/
    cursor: pointer;
    transition: all 0.3s;
    background: #F9F9F9;
    border-radius: 2px;
    overflow: hidden;
  }
  .list:hover {
    box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1);
  }
  .img-box {
    width: 100%;
    height: 158px;
    position: relative;
    overflow: hidden;
    background-color: #2599ff;
    .iconfont {
      font-size: 78px;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      line-height: 160px;
    }
  }

  .detail{
    height: 105px;
    background: #F9F9F9;
    padding: 15px;
    h3{
      .twoline;
      font-size: 14px;
      color: #2F3142;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .head-img{
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
    }
    .name{
      color: #2F3142;
      line-height: 30px;
      margin-left: 8px;
      font-size: 12px;
    }
    .number{
      /*color: #FB4E52;*/
      line-height: 30px;
      font-size: 12px;
    }

  }
</style>
