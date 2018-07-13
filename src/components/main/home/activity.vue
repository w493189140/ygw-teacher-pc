<template>
  <div class="w">
    <v-notice></v-notice>
    <v-reply></v-reply>
  </div>
</template>

<script>
  import notice from '@/components/main/home/notice'
  import reply from '@/components/base/reply'
  export default {
    data() {
      return {
        avatarDefault:require("@/assets/image/Avatar_Default.png"),
        textarea:'',
        replyIndex:'1'
      }
    },
    components: {
      'v-reply':reply,
      'v-notice': notice
    }
  }
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
</style>
