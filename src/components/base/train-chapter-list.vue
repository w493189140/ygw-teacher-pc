<template>
    <div class="list">
        <h3 class="title">[第1章节]-为未来而教：数字原住民时代的教育新思维和新方法</h3>
        <p class="chapter">
          <span class="num">第1章节</span>
          <span class="sum">共10章节</span>
        </p>
        <div class="teacher clearfix">
          <div class="f_left clearfix">
            <div class="head-img img-box f_left">
              <img :src="avatarDefault">
            </div>
            <span class="name f_left">张家辉</span>
          </div>
          <div class="f_left clearfix">
            <div class="head-img img-box f_left">
              <img :src="avatarDefault">
            </div>
            <span class="name f_left">张家辉</span>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            avatarDefault:require('../../assets/image/Avatar_Default.png')
          }
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/base";
  .list{
    width: 280px;
    height: 148px;
    padding: 16px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    cursor: pointer;
    h3{
      .twoline;
      font-size: 16px;
      color: #2F3142;
      font-weight: 600;
    }
    .chapter{
      font-size: 12px;
      color: rgba(47,49,66,0.56);
      line-height: 16px;
      margin: 16px 0;
      .num{
        padding-right:10px;
        position: relative;
        &:after{
          content: "";
          position: absolute;
          top: 2px;
          right: 0;
          width: 1px;
          height: 10px;
          background-color: rgba(47,49,66,0.4);
        }
      }
      .sum{
        padding-left: 5px;
      }
    }
    .teacher{
      >div{
        margin-right: 15px;
      }
      .head-img{
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
      .name{
        line-height: 25px;
      }
    }

  }

</style>
