import Vue from 'vue'
import Router from 'vue-router'
//主页 版心
import main from '@/components/main/main'
//首页
import home from '@/components/main/home/home'
import activity from '@/components/main/home/activity'
import notice from '@/components/main/home/notice'
//培训
import train from '@/components/main/train/train'
import trainChapter from '@/components/main/train/train_chapter'
import trainChapterDatail from '@/components/main/train/train_chapter_datail'
import trainVideo from '@/components/main/train/train_video'
//播放页
import live from '@/components/main/live/live'
import play from '@/components/main/live/play'
//教学资料
import classData from '@/components/main/teachData/class_data'
import personalData from '@/components/main/teachData/personal_data'
import classChapter from '@/components/main/teachData/class_chapter'
import teachData from '@/components/main/teachData/teacher_data'
import teachChapter from '@/components/main/teachData/teacher_chapter'
import teacherChapterDetail from '@/components/main/teachData/teacher_chapter_detail'
//参考资料
import lookData from '@/components/main/lookData/look_data'
import lookVideo from '@/components/main/lookData/look_video'
import liveMain from '@/components/main/liveMain/live_main'
//个人中心
import personal from '@/components/main/personal/personal'
import myVideo from '@/components/main/personal/my_video'
import myFile from '@/components/main/personal/my_file'
import myContribute from '@/components/main/personal/my_contribute'
import myCollect from '@/components/main/personal/my_collect'
//个人中心 ==>安全模块
import password from '@/components/main/personal/password'
import phone from '@/components/main/personal/phone'
import userHeadimg from '@/components/main/personal/user_headimg'
import userInfo from '@/components/main/personal/user_info'
//上传投稿
import contribute from '@/components/main/contribute/contribute'
import contributeLite from '@/components/main/contribute/contribute_lite'
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
          path: '/personal',
          component: personal,
          meta: {
            title: '个人中心'
          },
          children:[
            {
              path: '/',
              component: myVideo,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'myVideo',
              component: myVideo,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'myFile',
              component: myFile,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'myContribute',
              component: myContribute,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'myCollect',
              component: myCollect,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'password',
              component: password,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'phone',
              component: phone,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'userHeadimg',
              component: userHeadimg,
              meta: {
                title: '个人中心'
              }
            },
            {
              path: 'userInfo',
              component: userInfo,
              meta: {
                title: '个人中心'
              }
            },
          ]
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
          path: '/personalData',
          component: personalData,
          meta: {
            title: '教学资料'
          },
        },
        {
          path: '/classData',
          component: classData,
          meta: {
            title: '教学资料'
          },
        },
        {
          path: '/classChapter',
          component: classChapter,
          meta: {
            title: '教学资料'
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
          path: '/lookVideo',
          component: lookVideo,
          meta: {
            title: '参考资料'
          },
        },

        {
          path: '/contribute',
          component: contribute,
          meta: {
            title: '投稿'
          },
        },
        {
          path: '/contributeLite',
          component: contributeLite,
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
