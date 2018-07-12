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
        <h3>全部评论（参与<span class="maincolor">217</span>）</h3>
        <div class="reply-con">
          <div class="reply-list">
            <div class="head-img">
              <img :src="avatarDefault" alt="头像">
            </div>
            <div class="info">
              <p><span class="name">东方不败</span><span>上海大华教育</span></p>
              <p>本课程针对高校新进教师大多对高等教育学、高等教育心理学的基本知识缺乏了解的现状，基于主讲团队对新进教师教学专业成长应知应会知识点的准确把握，精练介绍如何理解大学的根本任务，大学课堂教学的基本认知和理念，以及当代大学生的人格特征、学习规律等高等教育学、高等教育心理学基本理念和知识，切实帮助新进教师提高教学认知。</p>
              <p><span class="time">6月28日 09:33</span><span>点赞</span><span>回复</span></p>
              <div class="clearfix">
                <el-input
                  class=""
                  type="textarea"
                  :rows="2"
                  placeholder="积极友善发言的人，学习都不会差"
                  v-model="textarea">
                </el-input>
                <el-button class="submit-btn" type="primary">提交</el-button>
              </div>
            </div>
          </div>
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
      }
    },
    components: {
      'v-notice': notice
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .comment{
    margin-bottom: 100px;
    .textarea{
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
      margin:20px 0;
    }
  }
</style>
