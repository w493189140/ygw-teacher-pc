<template>
  <div class="comment">
    <div class="textarea clearfix">
      <h3>发表评论</h3>
      <el-input
        class=""
        type="textarea"
        :rows="5"
        placeholder="积极友善发言的人，学习都不会差"
        v-model="textarea">
      </el-input>
      <el-button class="submit-btn" type="primary">提交</el-button>
    </div>
    <div class="reply">
      <h3 class="title">全部评论（参与<span class="maincolor">217</span>）</h3>
      <div class="reply-con">
        <div class="reply-list clearfix">
          <div class="head-img f_left img-box">
            <img :src="avatarDefault" alt="头像">
          </div>
          <div class="info f_right">
            <p class="author"><span class="maincolor name">东方不败</span><span class="school"></span></p>
            <p class="reply-text">本课程针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状，基于主讲团队对新进教师教学专业成长应知应会知识点的准确把握，精练介绍如何理解大学的根本任务，大学课堂教学的基本认知和理念，以及当代大学生的人格特征、学习规律等高等教育学、高等教育心理学基本理念和知识，切实帮助新进教师提高教学认知。</p>
            <p class="reply-btn">
              <span class="time">6月28日 09:33</span>
              <span class="dianzan"><span class="heart" :class="{'heartAnimation':dianzanIndex==='1'}" @click="dianzan('1')"></span>点赞</span>
              <span class="iconfont icon_comment" @click="changeIndex('1')">回复</span>
            </p>
            <transition name="mybox">
              <div class="clearfix box" v-if="replyIndex==='1'">
                <el-input
                  class=""
                  type="textarea"
                  :rows="3"
                  placeholder="积极友善发言的人，学习都不会差"
                  v-model="textarea">
                </el-input>
                <el-button class="submit-btn" type="primary">提交</el-button>
              </div>
            </transition>
          </div>
        </div>
        <div class="reply-list clearfix">
          <div class="head-img f_left img-box">
            <img :src="avatarDefault" alt="头像">
          </div>
          <div class="info f_right">
            <p class="author"><span class="maincolor name">东方不败</span><span class="school">我没有忽略我</span></p>
            <p class="reply-text">本课程针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状，基于主讲团队对新进教师教学专业成长应知应会知识点的准确把握，精练介绍如何理解大学的根本任务，大学课堂教学的基本认知和理念，以及当代大学生的人格特征、学习规律等高等教育学、高等教育心理学基本理念和知识，切实帮助新进教师提高教学认知。</p>
            <p class="reply-btn">
              <span class="time">6月28日 09:33</span>
              <span class="dianzan"><span class="heart" :class="{'heartAnimation':dianzanIndex==='2'}" @click="dianzan('2')"></span>点赞</span>
              <span class="iconfont icon_comment"  @click="changeIndex('2')">回复</span>
            </p>
            <transition name="mybox">
              <div class="clearfix box" v-if="replyIndex==='2'">
                <el-input
                  class=""
                  type="textarea"
                  :rows="3"
                  placeholder="积极友善发言的人，学习都不会差"
                  v-model="textarea">
                </el-input>
                <el-button class="submit-btn" disabled="true" type="primary">提交</el-button>
              </div>
            </transition>
          </div>
        </div>
        <div class="reply-list clearfix">
          <div class="head-img f_left img-box">
            <img :src="avatarDefault" alt="头像">
          </div>
          <div class="info f_right">
            <p class="author"><span class="maincolor name">东方不败</span><span class="school"></span></p>
            <p class="reply-text">本课程针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状，基于主讲团队对新进教师教学专业成长应知应会知识点的准确把握，精练介绍如何理解大学的根本任务，大学课堂教学的基本认知和理念，以及当代大学生的人格特征、学习规律等高等教育学、高等教育心理学基本理念和知识，切实帮助新进教师提高教学认知。</p>
            <p class="reply-btn">
              <span class="time">6月28日 09:33</span>
              <span class="dianzan"><span class="heart" :class="{'heartAnimation':dianzanIndex==='3'}" @click="dianzan('3')"></span>点赞</span>
              <span class="iconfont icon_comment"  @click="changeIndex('3')">回复</span>
            </p>
            <transition name="mybox">
            <div class="clearfix box" v-if="replyIndex==='3'">
              <el-input
                class=""
                type="textarea"
                :rows="3"
                placeholder="积极友善发言的人，学习都不会差"
                v-model="textarea">
              </el-input>
              <el-button class="submit-btn" type="primary">提交</el-button>
            </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="load-more">
        加载更多…
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          avatarDefault:require("@/assets/image/Avatar_Default.png"),
          textarea:'',
          replyIndex:'',
          dianzanIndex:'',
          isTrue:false
        }
      },
      components: {},
      mounted() {
      },
      methods: {
        changeIndex(index){
          this.replyIndex = this.replyIndex == index?'':index
        },
        dianzan(index){
          this.dianzanIndex = this.dianzanIndex == index?'':index
        }
      }
    }
</script>

<style scoped lang="less">

    @import "../../assets/css/base.less";
    .icon_comment:before{
      content: '\e732';
    }
    .icon_thumb:before{
      content: '\e76f';
    }
    .comment{
      margin-bottom: 100px;
      .textarea{
        margin-bottom: 20px;
        h3{
          font-size: 22px;
          font-weight: 600;
          color: #2F3142;
          line-height: 80px;
          margin-top: 30px;
        }
      }
      .submit-btn{
        float: right;
        margin-top:20px;
        width: 160px;
      }
    }
    .reply{
      .title{
        font-size: 22px;
        font-weight: 600;
        color: #2F3142;
        line-height: 65px;
        border-bottom: 1px solid #eee;
      }
      .reply-list{
        border-bottom: 1px dashed #eee;
        padding: 24px 0;
      }
      .head-img{
        width: 64px;
        height: 64px;
        border-radius:50% ;
      }
      .info{
        width: 1100px;
      }
      .author{
        font-size: 12px;
        color: rgba(47,49,66,0.56);
        line-height: 16px;

        .school{
          display: inline-block;
          background: #f9F9F9;
          border-radius: 10px;
          padding:1px 10px;
          margin-left: 10px;
        }

      }
      .reply-text{
        font-size: 14px;
        color: #2F3142;
        line-height: 18px;
        margin: 15px 0;
      }
      .reply-btn{
        font-size: 12px;
        color: rgba(47,49,66,0.56);
        margin-bottom: 24px;
        .iconfont:before{
          font-size: 19px;
        }
        .iconfont{
          margin-left: 15px;
          cursor: pointer;
        }
        .iconfont:hover{
          color: @color;
        }
      }

    }
   .box{
     height: 136px;
     overflow: hidden;
   }
    .mybox-leave-active,.mybox-enter-active{
      transition: all .4s ease;
    }
    .mybox-leave-active,.mybox-enter{
      height:0px !important;
    }
    .mybox-leave,.mybox-enter-active{
      height: 136px;
    }






    .dianzan{
      width: 60px;
      height: 20px;
      display: inline-block;
      position: relative;
      padding-left: 35px;
      &:hover{
        color: @color;
      }
    }

    .heart {
      background: url(./web_heart_animation.png);
      background-position: left;
      background-repeat: no-repeat;
      height: 60px;
      width: 60px;
      cursor: pointer;
      position: absolute;
      left:-4px;
      top: -21px;
      background-size:2900%;
    }
    .heart:hover, .heart:focus{
      background-position: right;
    }

    @keyframes heartBlast {
      0% {
        background-position: left;
      }
      100% {
        background-position: right;
      }
    }

    .heartAnimation {
      display: inline-block;
      -webkit-animation-name: heartBlast;
      animation-name: heartBlast;
      -webkit-animation-duration: .8s;
      animation-duration: .8s;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
      -webkit-animation-timing-function: steps(28);
      animation-timing-function: steps(28);
      background-position: right;
    }


</style>
