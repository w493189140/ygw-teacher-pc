<template>
    <div class="list">
        <h3 class="title">[第1章节]-为未来而教：数字原住民时代的教育新思维和新方法</h3>
        <p class="chapter">
          <span class="num">第1章节</span>
          <span class="sum">共10章节</span>
        </p>
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
    height: 97px;
    padding: 14px 16px;
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
      margin: 10px 0;
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

  }

</style>
