<template>
    <div class="feedback mask">
        <div class="content">
          <span @click="busData" class="iconfont icon_failure close-btn"></span>
          <div>
            <h3 class="title">反馈类型</h3>
            <el-select v-model="value" placeholder="请选择" class="select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <h3 class="title">问题描述</h3>
            <el-input class="textarea"
              type="textarea"
              :rows="6"
              placeholder="请输入你遇到的问题详细描述，以便技术人员排查。"
              v-model="textarea">
            </el-input>
            <el-button type="info" class="submit">提交</el-button>
          </div>


        </div>
    </div>
</template>

<script>
  import bus from '@/utils/bus'
    export default {
        data() {
            return {
              options: [{
                value: '选项1',
                label: '教材资料'
              }, {
                value: '选项2',
                label: '你猜猜看'
              }, {
                value: '选项3',
                label: '不知道'
              }, {
                value: '选项4',
                label: '不好玩'
              }, {
                value: '选项5',
                label: '什么玩意'
              }],
              value: '',
              textarea:''
            }
        },
        components: {},
        mounted() {
        },
        methods: {
          busData:function () {
            bus.$emit('closeMask',false)
          }
        }
    }
</script>

<style scoped lang="less">

    @import "../../assets/css/base.less";
    .icon_failure:before{
      content:'\e73a';
      font-size: 30px;
    }
    .mask{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.5);
      z-index: 999;
      .content{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background-color: #fff;
        width: 800px;
        height: 500px;
        padding: 50px;
        box-shadow: 0 2px 10px 0 rgba(47,49,66,0.56), 0 2px 30px 0 rgba(47,49,66,0.56);
        border-radius: 4px;
        overflow: auto;
      }
      .close-btn{
        cursor: pointer;
        position: absolute;
        top: 15px;
        right: 20px;
      }
      .title{
        font-size: 16px;
        color: #2F3142;
        font-weight: 600;
        margin-bottom: 16px;
      }
      .select{
        width: 100%;
        height: 48px;
        margin-bottom: 45px;
       input{
         background-color: #F9F9F9;;
       }
      }
      .textarea{
      }
      .submit{
        width: 160px;
        height: 44px;
        float: right;
        margin-top: 40px;
      }
    }

</style>
