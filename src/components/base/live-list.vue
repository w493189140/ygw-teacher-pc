<template>
    <div class="list">
      <div class="img-box">
        <img src="../../assets/image/video-bg.jpg" alt="封面">
        <div class="img-mask iconfont icon_play">
        </div>
        <span class="state">正在直播</span>
      </div>
      <div class="info">
        <h3>我是标题表肯定撒发货我是标题表肯定撒发货我是标题表肯定撒发货我是标题表肯定撒发货</h3>
        <div class="teacher clearfix">
          <div class="f_left clearfix">
            <span class="head-img img-box f_left"><img :src="avatarDefault" alt="头像"></span>
            <span class="name f_left">葫芦娃</span>
          </div>
          <div class="f_right number">142 人正在观看</div>
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
  .icon_play:before {
    content: '\e75c'
  }
  .list{
    width: 280px;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    cursor: pointer;
  }
  .list:hover {
    box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1);
  }
  .list:hover .img-mask{
    opacity: 1;
  }
  .img-box{
    width: 280px;
    height: 160px;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
    .img-mask{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.3);
      opacity: 0;
      transition: all .5s;
    }
    .icon_play{
      font-size: 70px;
      color: rgba(255,255,255,0.8);
      text-align: center;
      line-height: 160px;
    }
    .state{
      position: absolute;
      bottom: 8px;
      right: 8px;
      width: 64px;
      height:26px;
      border-radius: 3px;
      line-height: 26px;
      color: #fff;
      text-align: center;
      background-color: rgba(251, 78, 82, 0.9);
    }
  }
  .info{
    height: 107px;
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
    }
    .number{
      color: #FB4E52;
      line-height: 30px;
    }

  }
</style>
