<template>
  <div class="container">
    登陆页
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      checked: true,
      num1: 1
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/css/base.less";
</style>
