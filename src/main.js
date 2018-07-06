// 引入
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

// 路由发生变化修改页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


//覆盖样式
import '@/assets/css/cover.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
