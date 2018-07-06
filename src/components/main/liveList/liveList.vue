<template>
  <div class="container">
    <v-live-list v-for="(item,index) in liveList" :key="index"></v-live-list>

  </div>
</template>

<script>
  import liveList from '@/components/base/live-list'
  export default {
    data() {
      return {
        navName: '公共课程',
        liveList:[1,2,3,4,5,56,6,6,6,6,6,6,6,],
        lodeMoreBtn:true
      }
    },
    components: {
      'v-live-list': liveList
    },
    mounted(){

    },
    methods: {
      changeNavData: function (mes) {
        this.navName = mes
      },
      loadMoreBtn:function () {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../../assets/css/base.less";
</style>
