<template>
  <div class="w">
    <v-notice></v-notice>
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
              <p class="author"><span class="maincolor name">东方不败</span><span class="school">上海大华教育</span></p>
              <p class="reply-text">本课程针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状，基于主讲团队对新进教师教学专业成长应知应会知识点的准确把握，精练介绍如何理解大学的根本任务，大学课堂教学的基本认知和理念，以及当代大学生的人格特征、学习规律等高等教育学、高等教育心理学基本理念和知识，切实帮助新进教师提高教学认知。</p>
              <p class="reply-btn">
                <span class="time">6月28日 09:33</span>
                <span class="iconfont icon_thumb">点赞</span>
                <span class="iconfont icon_comment">回复</span>
              </p>
              <div class="clearfix" v-if="replyIndex==='1'">
                <el-input
                  class=""
                  type="textarea"
                  :rows="3"
                  placeholder="积极友善发言的人，学习都不会差"
                  v-model="textarea">
                </el-input>
                <el-button class="submit-btn" type="primary">提交</el-button>
              </div>
            </div>
          </div>
          <div class="reply-list clearfix">
            <div class="head-img f_left img-box">
              <img :src="avatarDefault" alt="头像">
            </div>
            <div class="info f_right">
              <p class="author"><span class="maincolor name">东方不败</span><span class="school">上海大华教育</span></p>
              <p class="reply-text">本课程针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状，基于主讲团队对新进教师教学专业成长应知应会知识点的准确把握，精练介绍如何理解大学的根本任务，大学课堂教学的基本认知和理念，以及当代大学生的人格特征、学习规律等高等教育学、高等教育心理学基本理念和知识，切实帮助新进教师提高教学认知。</p>
              <p class="reply-btn">
                <span class="time">6月28日 09:33</span>
                <span class="iconfont icon_thumb">点赞</span>
                <span class="iconfont icon_comment">回复</span>
              </p>
              <div class="clearfix" v-if="replyIndex==='2'">
                <el-input
                  class=""
                  type="textarea"
                  :rows="3"
                  placeholder="积极友善发言的人，学习都不会差"
                  v-model="textarea">
                </el-input>
                <el-button class="submit-btn" type="primary">提交</el-button>
              </div>
            </div>
          </div>
          <div class="reply-list clearfix">
            <div class="head-img f_left img-box">
              <img :src="avatarDefault" alt="头像">
            </div>
            <div class="info f_right">
              <p class="author"><span class="maincolor name">东方不败</span><span class="school">上海大华教育</span></p>
              <p class="reply-text">本课程针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状，基于主讲团队对新进教师教学专业成长应知应会知识点的准确把握，精练介绍如何理解大学的根本任务，大学课堂教学的基本认知和理念，以及当代大学生的人格特征、学习规律等高等教育学、高等教育心理学基本理念和知识，切实帮助新进教师提高教学认知。</p>
              <p class="reply-btn">
                <span class="time">6月28日 09:33</span>
                <span class="iconfont icon_thumb">点赞</span>
                <span class="iconfont icon_comment">回复</span>
              </p>
              <div class="clearfix" v-if="replyIndex==='3'">
                <el-input
                  class=""
                  type="textarea"
                  :rows="3"
                  placeholder="积极友善发言的人，学习都不会差"
                  v-model="textarea">
                </el-input>
                <el-button class="submit-btn" type="primary">提交</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="load-more">
          加载更多…
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import notice from '@/components/main/home/notice'

  export default {
    data() {
      return {
        avatarDefault:require("@/assets/image/Avatar_Default.png"),
        textarea:'',
        replyIndex:'1'
      }
    },
    components: {
      'v-notice': notice
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
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
        font-size: 18px;
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
</style>
