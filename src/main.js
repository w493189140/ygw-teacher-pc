// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局css
import '@/assets/css/reset.css'
//elemet ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

//覆盖样式
import '@/assets/css/cover.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
