<template>
  <div class="container">
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from '@/components/main/header/header'
import footer from '@/components/main/footer/footer'
import sidebar from '@/components/main/sidebar/sidebar'

export default {
  data () {
    return {

    }
  },
  components:{
    'v-header':header,
    'v-footer':footer,
    'v-sidebar':sidebar,
  },
  mounted(){

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  @import "../../assets/css/base.less";
  .container{
    padding-bottom: 100px;
  }
</style>
