<template>
  <div class="list">
    <div class="img-box">
      <div class=" iconfont icon_play">
      </div>
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
  .list:hover {
    box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1);
  }
  .img-box {
    width: 100%;
    height: 158px;
    position: relative;
    overflow: hidden;
    background-color: #020;
    .icon_play {
      font-size: 78px;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      line-height: 160px;
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
