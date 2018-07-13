<template>
  <div class="container w">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>教学</el-breadcrumb-item>
        <el-breadcrumb-item>全部教学</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main">
      <h3 class="title">教师发展与综合素质提升-这里显示活动标题</h3>
        <p class="des" id="des">
          <span v-if="desMore">{{newDesText}}</span>
          <span v-else>{{desText}}</span>
          <span v-if="showMore">
             <span @click="toggleText" v-if="desMore" class="maincolor">[查看更多]</span>
             <span @click="toggleText" v-else class="maincolor">[收起内容]</span>
          </span>
        </p>
      <div class="chapter clearfix">
        <v-trainChapterList class="item" @click.native="toChapterDatail" v-for="(item ,index) in dataList" :key="index" :data="item"></v-trainChapterList>
      </div>
    </div>
  </div>
</template>

<script>
  import trainChapterList from '@/components/base/train-chapter-list'
  export default {
    data(){
      return{
        desText:'唐太宗谓梁公曰:"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。"以铜为镜,可以正衣冠;以古为镜,可以知兴替;以人为镜,可以明得失。”培根在随笔《论求知》中讲到“读史使人明智,读诗使人聪慧,演算使人精密,哲理使人深刻,伦理学使人有修养,逻辑修辞使人善辩。总之,知识能塑造人的性格”。中华历史源远流长，史学家瞿林东教授邀您一起去读史，体会历史中的精神、责任、智慧。',
        desMore:true,
        showMore:false,
        newDesText:'',
        dataList:[0,0,0,0,0,0,0,0,0,0,0]
      }
    },
    components:{
        'v-trainChapterList':trainChapterList
    },
    mounted(){
      this._initDes()
    },
    methods:{
      toggleText:function () {
        this.desMore = !this.desMore
      },
      _initDes:function(){
        let newDesText = this.desText
        if(newDesText.length>180){
          this.showMore = true
          newDesText = newDesText.substring(0,180)
        }
        this.newDesText = newDesText
      },
      toChapterDatail:function () {
        this.$router.push('/trainChapterDatail')
      }

    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .container{
    padding-top: 40px;
  }
  .breadcrumb{
    height: 64px;
    padding-top: 20px;
    border-bottom: 1px solid #e7e7e7;
    font-size: 12px;
  }
  .main{
    .title{
      font-size: 22px;
      color: #2F3142;
      line-height: 76px;
      font-weight: 600;
    }
    .des{
      font-size: 14px;
      color: rgba(47,49,66,0.56);
      line-height: 21px;
      transition: all 0.5s;
      .maincolor{
        margin-right: 5px;
        cursor: pointer;
      }
    }
    .chapter{
      margin-top: 24px;
      padding: 24px 0;
      border-top: 1px solid #e7e7e7;
      .item{
        float: left;
        margin-bottom: 24px;
        margin-right:20px ;
        &:nth-child(4n){
          margin-right:0 ;
        }
      }
    }
  }
</style>
