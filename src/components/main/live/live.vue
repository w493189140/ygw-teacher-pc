<template>
  <div class="container">
   <div class="video-box">
     <div class="video">
       <div  class="prism-player" id="J_prismPlayer"></div>
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
    <div class="reply">
        <div class="news">
          <img src="@/assets/image/video-bg.jpg" alt="">
        </div>
        <h3 class="number">有370人正在和你一起学</h3>
    </div>

  </div>
</template>

<script>

  export default {
    data(){
      return{
        avatarDefault:require("@/assets/image/Avatar_Default.png"),
      }
    },
    components:{
    },
    mounted(){
      var player = new Aliplayer({
          id: "J_prismPlayer",
          autoplay: false,
          isLive:false,
          playsinline:true,
          width:"100%",
          height:"100%",
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
  .container{
    width: 100%;
    height: 100%;
    position: absolute;
    min-width: 1180px;
    min-height: 600px;
    overflow: auto;
  }
  .video-box{
    height: 100%;
    margin-right: 460px;
    background-color: #2e2e36;
    position: relative;
    .video-detail{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 15px;
      height: 130px;
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
    .video{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 130px;
      margin: auto;
      background-color: #fff;
    }
  }

  .reply{
    position: absolute;
    top: 0;
    right: 0;
    width: 460px;
    height: 100%;
    background-color: #fff;
    .news{
      width: 100%;
      height: 270px;
      overflow:hidden ;
      img{
        width: 100%;
      }
    }
    .number{
      height: 50px;
      line-height: 50px;
      width: 100%;
      font-size: 18px;
      color: #2F3142;
      padding: 0 15px;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
    }
  }


</style>
