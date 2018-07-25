
<template>
  <div class="my-file clearfix">
    <v-train-file-list class="list" v-for="(item,index) in dataList" :key="index"></v-train-file-list>
  </div>
</template>

<script>
  import myFileList from '@/components/base/train-file-list'
  export default {
    data() {
      return {
        dataList:[0,0,0,0,0,0,0,0,0]
      }
    },
    components: {
      'v-train-file-list':myFileList
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .my-file{
    .list{
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(3n){
        margin-right: 0;
      }
    }
  }

</style>
