<template>
  <div class="list">
    <div class="img-box">
      <img src="@/assets/image/video-bg.jpg" alt="封面">
      <div class="img-mask iconfont icon_play">
      </div>
      <span class="time">26:37</span>
    </div>
    <div class="detail">
      <h3>我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货</h3>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="less">
  @import "../../assets/css/base";

  .icon_play:before {
    content: '\e75c'
  }
  .list {
    width: 280px;
    height: 226px;
    cursor: pointer;
    transition: all 0.3s;
    background: #F9F9F9;
    border-radius: 2px;
    overflow: hidden;
  }

  .list:hover .img-mask {
    opacity: 1;
  }

  .list:hover {
    box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1);
  }

  .img-box {
    width: 100%;
    height: 158px;
    position: relative;
    overflow: hidden;
    .img-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: all .5s;
    }
    .icon_play {
      font-size: 78px;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      line-height: 160px;
    }
    .time{
      position: absolute;
      width: 48px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      right:8px ;
      bottom:8px;
      font-size: 12px;
      color: #FFFFFF;
      background: rgba(47, 49, 66, 0.8);
      border-radius: 2px;
    }
  }
  .detail{
    padding: 15px;
    height: 68px;
    h3 {
      .twoline;
      font-size: 14px;
      color: #2F3142;
      font-weight: 600;
      line-height: 18px;
    }
  }

</style>
