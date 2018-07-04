<template>
  <div class="container w">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <!--<div class="swiper-scrollbar"></div>-->
    </div>
    <div class="content clearfix">
      <div class="main f_left">
        zuo
      </div>
      <div class="news f_right">
        <h3 class="title">
          最新公告
        </h3>
        <ul>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li>34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  mounted(){
    this.initSweiper()
  },
  components:{

  },
  methods: {
    initSweiper:function () {
      this.mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .swiper-container {
    width:100%;
    height: 400px;
  }
  .swiper-slide{
    text-align: center;
    font-size: 50px;
    line-height: 400px;
    &:nth-child(2n){
      background-color: #eee;
    }
    &:nth-child(2n+1){
      background-color: #0ee;
    }
  }
  .main{
    width: 880px;
    height: 900px;
    background-color: #0f0;
  }
  .news{
    width: 280px;
    border: 1px solid #dfdfdf;
    padding: 10px;
    li{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
