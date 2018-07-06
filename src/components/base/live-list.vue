<template>
    <div class="list">
      <div class="img-box">
        <img v-lazy="imgUrl" alt="封面">
        <!--<img src="/static/img/video-bg.09ef916.jpg" alt="封面">-->
        <div class="img-mask iconfont icon-start">
        </div>
        <span class="time">2015-02</span>
      </div>
      <div class="info">
        <h3>我是标题表肯定撒发货我是标题表肯定撒发货我是标题表肯定撒发货我是标题表肯定撒发货</h3>
        <p class="des">描述藐视描述描述束带结发描述描述藐视描述描述束带结发描述描述藐视描述描述束带结发描述描述藐视描述描述束带结发描述</p>
        <p class="time">2018-06-29</p>
      </div>
    </div>
</template>

<script>
  import url from '../../assets/image/video-bg.jpg'
    export default {
        data(){
          return{
            imgUrl:url//require('../../assets/image/video-bg.jpg')
          }
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/base";
  .icon-start:before{content: '\e61a'}
  .list{
    width: 286px;
  }
  .list :hover .img-mask{
    opacity: 1;
  }
  .img-box{
    width: 286px;
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
    .icon-start{
      font-size: 60px;
      color: rgba(255,255,255,0.8);
      text-align: center;
      line-height: 160px;
    }
    .time{
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 80px;
      height: 40px;
      line-height: 40px;
      color: #fff;
      text-align: center;
      background-color: rgba(0,0,0,0.4);
    }
  }
  .info{
    h3{
      .twoline;
      font-size: 16px;
      font-weight: 600;
    }
    .des{
      .oneline;
    }
    .time{

    }
  }
</style>
