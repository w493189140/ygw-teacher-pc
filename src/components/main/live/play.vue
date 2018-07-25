<template>
  <div class="container">
    <div class="video-box">
      <div class="video live">
        <div class="prism-player" id="J_prismPlayer"></div>
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
      <div class="wrapper reply-content">
        <ul class="content">
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>若本课程能结合《传记、散文、诗歌文言文、写作复习指导》一起一起一起一起一起一起一起</span>
            </p>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>若本课程能结合《传记、散文、诗歌文言文、写作复习指导》一起一起一起一起一起一起一起</span>
            </p>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>若本课程能结合《传记、散文、诗歌文言文、写作复习指导》一起一起一起一起一起一起一起</span>
            </p>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>若本课程能结合《传记、散文、诗歌文言文、写作复习指导》一起一起一起一起一起一起一起</span>
            </p>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>若本课程能结合《传记、散文、诗歌文言文、写作复习指导》一起一起一起一起一起一起一起</span>
            </p>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>若本课程能结合《传记、散文、诗歌文言文、写作复习指导》一起一起一起一起一起一起一起</span>
            </p>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>若本课程能结合若本课程能结合若本课程能结合若本课程能结合</span>
            </p>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>适合学习成绩在各个层次的学生。</span>
            </p>
          </li>
          <li class="notice clearfix">
            <span class="iconfont icon_sound-fill f_left"></span>
            <span class="f_left text redfont">如班主任电话无法接通请加班主任QQ或点击按钮留言，班主任看到后会及时回复</span>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>适合学习成绩在各个层次的学生。</span>
            </p>
          </li>
          <li class="notice clearfix">
            <span class="iconfont icon_sound-fill f_left"></span>
            <span class="f_left text redfont">如班主任电话无法接通请加班主任QQ或点击按钮留言，班主任看到后会及时回复</span>
          </li>
          <li class="clearfix">
            <span class="f_left img-box head-img"><img :src="avatarDefault" alt="头像"></span>
            <p class="f_left info">
              <span class="name maincolor">任我行：</span>
              <span>适合学习成绩在各个层次的学生。</span>
            </p>
          </li>
        </ul>
      </div>

      <div class="input-box">
        <p class="copyright">©2018 阳光喔教育科技（上海）有限公司 版权所有  |  问题反馈  |  帮助</p>
      </div>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        avatarDefault: require("@/assets/image/Avatar_Default.png"),
        input:''
      }
    },
    components: {},
    mounted() {
      let scroll = new BScroll('.wrapper',{
        scrollY: true,
        click: true,
        scrollbar: {
          fade: false,
          interactive: true,
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      })
     scroll.scrollTo(0,scroll.maxScrollY,0)
      var player = new Aliplayer({
          id: "J_prismPlayer",
          autoplay: false,
          isLive: false,
          playsinline: true,
          width: "100%",
          height: "100%",
          controlBarVisibility: "always",
          useFlashPrism: false,
          source: "//player.alicdn.com/video/aliyunmedia.mp4",
          cover: "",
          skinLayout: [{"name": "bigPlayButton", "align": "blabs", "x": 30, "y": 80},
            {
              "name": "controlBar",
              "align": "blabs",
              "x": 0,
              "y": 0,
              "children": [{"name": "playButton", "align": "tl", "x": 15, "y": 12},
                {"name": "fullScreenButton", "align": "tr", "x": 10, "y": 12},
                {"name": "setButton", "align": "tr", "x": 20, "y": 25},
                {"name": "timeDisplay", "align": "tl", "x": 10, "y": 7},
                {"name": "volume", "align": "tr", "x": 5, "y": 10},
                {"name": "setting", "align": "tr", "x": 15, "y": 12}]
            }]
        }, function (player) {
          // console.log("播放器创建了。");
        }
      );
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .icon_sound-fill:before {
    content: '\e76c';
    font-size: 22px;
  }

  .icon_view:before {
    content: "\e776";
  }
  .icon_thumb:before {
    content: "\e73d";
  }
  .icon_clear:before {
    content: '\e72e';
  }
  .icon_favorite:before {
    content: "\e76f";
  }
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    min-width: 1180px;
    min-height: 600px;
    overflow: auto;
  }
  .video-box {
    height: 100%;
    margin-right: 460px;
    background-color: #2e2e36;
    position: relative;
    .video-detail {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 15px;
      height: 130px;
      h3 {
        font-size: 24px;
        color: #FFFFFF;
        line-height: 60px;
        .oneline;
      }
      .teacher {
        color: rgba(255, 255, 255, 0.57);
        font-size: 12px;
        .head-img {
          width: 24px;
          height: 24px;
          display: inline-block;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 5px;
        }
        .lable {
          margin-top: 2px;
          span {
            margin-left: 15px;
            display: inline-block;
            background: #26262B;
            border-radius: 15px;
            padding: 2px 10px;
          }
        }
      }
    }
    .video {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 130px;
      margin: auto;
      background-color: #fff;
    }
  }
  .reply {
    position: absolute;
    top: 0;
    right: 0;
    width: 460px;
    height: 100%;
    background-color: #fff;
    .news {
      width: 100%;
      height: 270px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .number {
      height: 50px;
      line-height: 50px;
      width: 100%;
      font-size: 18px;
      color: #2F3142;
      padding: 0 15px;
      border-bottom: 1px solid #eee;
      border-top: 1px solid #eee;
    }
    .reply-content {
      overflow: hidden;
      position: absolute;
      top: 320px;
      bottom:50px;
      left: 0;
      right: 0;
      margin: auto;
      padding: 16px;
      background-color: #fafafa;
      color: #2F3142;
      font-size: 12px;
      .content{
        padding-bottom: 10px;
      }
      li {
        margin-bottom: 16px;
      }
      .head-img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
      .info {
        width: 390px;
      }
      .notice{
        background: #F2F5F7;
        border-radius: 4px;
        padding: 10px;
      }
      .icon_sound-fill{
        margin-top: -3px;
        margin-right: 5px;
        color: #FB4E52;
      }
      .redfont{
        color: #FB4E52;
      }
      .text{
        width: 380px;
      }
    }

    .input-box{
      width: 100%;
      height: 50px;
      position: absolute;
      bottom:0;
      left: 0;
      box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.1);
    }


    .copyright{
      line-height: 50px;
      font-size: 12px;
      color: rgba(47,49,66,0.32);
      padding-left: 16px;
    }
  }


</style>
