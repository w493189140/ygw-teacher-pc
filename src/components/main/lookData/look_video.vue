<template>
    <div class="">
      <div class="video-box">
        <div class="w">
          <div class="video">
            <div  class="prism-player" id="J_prismPlayer"></div>
          </div>
          <div class="tool">
            <span class="iconfont icon_view">10,834播放次数</span>
            <span class="iconfont icon_thumb">收藏</span>
            <span class="iconfont icon_favorite">点赞</span>
          </div>
          <div class="video-detail">
            <h3>[第1课]-如何提升课堂气氛让老师快速掌握课堂节奏</h3>
            <div class="teacher clearfix">
              <div class="f_left">
                <span class="head-img img-box"><img :src="avatarDefault" alt="头像"></span>
                <span>任我行</span>
              </div>
              <div class="lable f_left">
                <span>不得了的导师</span>
                <span>新进导师</span>
                <span>牛逼的教授</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommend w">
        <h3 class="title">精彩推荐</h3>
        <div class="clearfix">
          <v-look-video-list class="item" v-for="(item,index) in videoList" :key="index"></v-look-video-list>
        </div>
      </div>
    </div>

</template>

<script>
  import lookVideo from '@/components/base/look-video-list'
    export default {
      data(){
        return{
          avatarDefault:require("@/assets/image/Avatar_Default.png"),
          videoList:[1,2,3,4,0,0,0,0,0,0],
        }
      },
      components:{
        'v-look-video-list':lookVideo
      },
      mounted(){
        var player = new Aliplayer({
            id: "J_prismPlayer",
            autoplay: false,
            isLive:false,
            playsinline:true,
            width:"100%",
            height:"488px",
            controlBarVisibility:"always",
            useFlashPrism:false,
            source:"//player.alicdn.com/video/aliyunmedia.mp4",
            cover:"",
            skinLayout:[{"name":"bigPlayButton","align":"blabs","x":30,"y":80},
                {"name":"controlBar","align":"blabs","x":0,"y":0,"children":[{"name":"playButton","align":"tl","x":15,"y":12},
                {"name":"fullScreenButton","align":"tr","x":10,"y":12},
                {"name":"setButton","align":"tr","x":20,"y":25},
                {"name":"timeDisplay","align":"tl","x":10,"y":7},
                {"name":"volume","align":"tr","x":5,"y":10},
                {"name":"setting","align":"tr","x":15,"y":12}]}]
          },function(player){
            // console.log("播放器创建了。");
          }
        );
      }
    }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .icon_view:before{
    content: "\e776";
  }
  .icon_thumb:before{
    content: "\e73d";
  }
  .icon_favorite:before{
    content: "\e76f";
  }
  .video-box{
    width: 100%;
    height: 700px;
    background-color: #2e2e36;
    position: relative;
    z-index: 100;
    padding-top: 45px;
    .tool{
      height: 50px;
      line-height: 50px;
      background: #26262B;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.56);
      vertical-align: middle;
      .iconfont{
        margin-left: 25px;
      }
      .icon_thumb:hover,
      .icon_favorite:hover{
        color: @color;
        cursor: pointer;
      }
      .iconfont:before{
        font-size: 20px;
        vertical-align: middle;
        margin-right: 4px;
      }
    }
  }
  .video-detail{
    padding-top: 8px;
    h3{
      font-size: 24px;
      color: #FFFFFF;
      line-height: 60px;
    }
    .teacher{
      color: rgba(255, 255, 255, 0.57);
      font-size: 12px;
      .head-img{
        width: 24px;
        height: 24px;
        display: inline-block;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 5px;
      }
      .lable{
        margin-top: 2px;
        span{
          margin-left: 15px;
          display: inline-block;
          background: #26262B;
          border-radius: 15px;
          padding: 2px 10px;
        }
      }
    }
  }
  .recommend{
    padding: 25px 0 130px;
    .title{
      line-height: 80px;
      font-size: 22px;
      font-weight: 600;
      color: #2F3142;
    }
    .item{
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(4n){
        margin-right: 0;
      }
    }
  }
</style>
