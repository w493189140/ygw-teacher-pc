<template>
  <div class="container">
    <div class="w main">
      <p>404页面</p>
      <span class="to-home" @click="toHome">回到首页</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toHome:function () {
      this.$router.push('/home')
    }
  }
}
</script>


<style scoped lang="less">
  @import "../../assets/css/base.less";
  .main{
    padding: 150px;
  }
  .to-home{
    cursor: pointer;
  }
</style>
