<template>
  <div class="sidebar">
    <div class="item" @click="contribute">
      <p class="iconfont icon_edit"></p>
      <p class="text">我要<br/>投稿</p>
    </div>
    <div class="item" @click="toTop">
      <p class="iconfont icon_r-arrow-t"></p>
      <p class="text">返回<br/>顶部</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted(){

    },
    methods: {
      toTop(){
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        let step = distance/50;
        (function jump(){
          if(distance > 0){
            distance-=step;
            window.scrollTo(0,distance);
            setTimeout(jump,5)
          }
        })();
      },
      contribute: function () {
        this.$router.push('/contribute')
      },
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .icon_edit:before {
    content: '\e736';
  }
  .icon_r-arrow-t:before {
    content: '\e75d';
  }
  .sidebar {
    position: fixed;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    box-shadow: 0 0 4px 0 rgba(47,49,66,0.08), 0 0 10px 0 rgba(47,49,66,0.08);
    border-radius: 4px;
    width: 60px;
    height: 176px;
    top: 40%;
    right: 50%;
    margin-right: -690px;
    text-align: center;
    padding-top: 5px;
    font-size: 14px;
    color: rgba(47,49,66,0.56);
    .iconfont{
      font-size: 32px;
    }
    .text{
      margin-top: -6px;
    }
    .item{
      padding: 6px 0;
      cursor: pointer;
      &:hover{
        color: @color;
      }
    }
  }
</style>
