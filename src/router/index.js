import Vue from 'vue'
import Router from 'vue-router'
//主页 版心
import main from '@/components/main/main'
import home from '@/components/main/home/home'
import activity from '@/components/main/home/activity'
import notice from '@/components/main/home/notice'
import live from '@/components/main/live/live'
import play from '@/components/main/live/play'
import teachData from '@/components/main/teachData/teacher_data'
import teachChapter from '@/components/main/teachData/teacher_chapter'
import teacherChapterDetail from '@/components/main/teachData/teacher_chapter_detail'
import lookData from '@/components/main/lookData/look_data'
import service from '@/components/main/service/service'
import liveMain from '@/components/main/liveMain/live_main'
import contribute from '@/components/main/contribute/contribute'
import train from '@/components/main/train/train'
import trainChapter from '@/components/main/train/train_chapter'
import trainChapterDatail from '@/components/main/train/train_chapter_datail'
import trainVideo from '@/components/main/train/train_video'

//播放页 全屏
// import play from '@/components/play/play'


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
      meta: {
        title: '首页'
      },
      children:[
        {
          path: '/',
          component: home,
          meta: {
            title: '首页'
          },
        },
        {
          path: '/home',
          component: home,
          meta: {
            title: '首页'
          },
        },
        {
          path: '/activity',
          component: activity,
          meta: {
            title: '首页'
          },
        },
        {
          path: '/notice',
          component: notice,
          meta: {
            title: '首页'
          },
        },
        {
          path: '/train',
          component: train,
          meta: {
            title: '教学培训'
          },
        },
        {
          path: '/trainChapter',
          component: trainChapter,
          meta: {
            title: '教学培训'
          },
        },
        {
          path: '/trainChapterDatail',
          component: trainChapterDatail,
          meta: {
            title: '教学培训'
          },
        },
        {
          path: '/trainVideo',
          component: trainVideo,
          meta: {
            title: '教学培训'
          },
        },
        {
          path: '/liveMain',
          component: liveMain,
          meta: {
            title: '教学直播'
          },
        },
        {
          path: '/teachData',
          component: teachData,
          meta: {
            title: '教学资料'
          },
        },
        {
          path: '/teachChapter',
          component: teachChapter,
          meta: {
            title: '教学资料'
          },
        },
        {
          path: '/teacherChapterDetail',
          component: teacherChapterDetail,
          meta: {
            title: '教学资料'
          },
        },
        {
          path: '/lookData',
          component: lookData,
          meta: {
            title: '参考资料'
          },
        },
        {
          path: '/service',
          component: service,
          meta: {
            title: '服务平台'
          },
        },
        {
          path: '/contribute',
          component: contribute,
          meta: {
            title: '投稿'
          },
        },

      ]
    },
    {
      path: '/live',
      component: live,
      meta: {
        title: '视频直播'
      }
    },
    {
      path: '/play',
      component: play,
      meta: {
        title: '视频回放'
      }
    },
    {
      path: '/play',
      component: play,
      meta: {
        title: '视频点播'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登录'
      },
    },
    {
      path: '*',
      component: error,
      meta: {
        title: '404'
      }
    }
  ]
})
