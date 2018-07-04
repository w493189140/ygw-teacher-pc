import Vue from 'vue'
import Router from 'vue-router'
//主页 版心
import main from '@/components/main/main'
import home from '@/components/main/home/home'
import train from '@/components/main/train/train'
import live from '@/components/main/live/live'
import teachData from '@/components/main/teachData/teachData'
import lookData from '@/components/main/lookData/lookData'
import service from '@/components/main/service/service'
// import home from '@/components/main/home/home'

//播放页 全屏
import play from '@/components/play/play'


//login page
import login from '@/components/login/login'

//error page
import error from '@/components/error/error'

Vue.use(Router)

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: main,
      children:[
        {
          path: '/',
          component: home,
        },
        {
          path: '/home',
          component: home,
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/train',
          component: train
        },
        {
          path: '/teachData',
          component: teachData
        },
        {
          path: '/lookData',
          component: lookData
        },
        {
          path: '/service',
          component: service
        },
      ]
    },
    {
      path: '/live',
      component: live
    },

    {
      path: '*',
      component: error
    }
  ]
})
