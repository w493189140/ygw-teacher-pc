<template>
    <div class="list">
      <div class="img-box">
        <img src="@/assets/image/video-bg.jpg" alt="封面">
        <div class="img-mask iconfont icon_play">
        </div>
      </div>
      <div class="info">
        <h3>我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货我是标题表肯定撒货</h3>
        <p class="des">描述藐视描述描描述描述带结发描述描述藐视描述描描述描述带结发描述描述藐视描述描描述描述带结发描述描述藐视描述描描述描述带结发描述</p>
      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">
  @import "../../assets/css/base";
  .icon_play:before{content: '\e75c'}
  .list{
    width: 280px;
    height: 266px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .list:hover .img-mask{
    opacity: 1;
  }
  .list:hover{
    box-shadow: 0 1px 20px 0px rgba(0,0,0,0.1);
  }
  .img-box{
    width: 100%;
    height: 158px;
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
      font-size: 78px;
      color: rgba(255,255,255,0.8);
      text-align: center;
      line-height: 160px;
    }
  }
  .info{
    background: #F9F9F9;
    padding: 15px;
    height: 108px;
    h3{
      .twoline;
      font-size: 14px;
      color: #2F3142;
      line-height: 18px;
      font-weight: 600;
      height: 38px;
      margin-bottom: 5px;
    }
    .des{
      .twoline;
      font-size: 12px;
      color: rgba(47,49,66,0.56);
      line-height: 16px;
      height:32px;
    }
  }
</style>
