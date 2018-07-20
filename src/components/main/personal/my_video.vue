<template>
    <div class="my-video clearfix">
      <v-my-video-list class="list" v-for="(item,index) in dataList" :key="index"></v-my-video-list>
    </div>
</template>

<script>
  import myVideoList from '@/components/base/my-video-list'
  export default {
        data() {
            return {
              dataList:[0,0,0,0,0,0,0,0,0]
            }
        },
        components: {
          'v-my-video-list':myVideoList
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="less">
    @import "../../../assets/css/base.less";
    .my-video{
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
