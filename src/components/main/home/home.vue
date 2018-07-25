<template>
  <div class="home w">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.slide_img" alt="banner">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev">
      </div>
      <div class="swiper-button-next">
      </div>
    </div>
    <div class="content clearfix">
      <div class="main f_left">
        <div v-for="(item,index) in activityList" :key="index" class="main-list" @click="toActivity(item.id)">
          <div class="img-box f_left list-img  wow zoomInUp" v-bind:style="{ backgroundImage: 'url('+item.coverImg+')' }">

          </div>
          <div class="info f_right">
            <h3 class="title  wow fadeInUp">{{item.title}}</h3>
            <p class="des  wow fadeInUp" data-wow-delay="0.4s">{{item.describes}}</p>
            <div class="detail  wow fadeInUp" data-wow-delay="0.8s">
              <span class="head-img img-box">
                <img src="@/assets/image/Avatar_Default.png" alt="头像">
              </span>
              <span class="name line">{{item.author}}</span>
              <span class="line">{{item.createTime|formatDate}}</span>
              <span class="iconfont icon_view">{{item.readCount}}</span>
            </div>
          </div>
        </div>
        <!--<div class="main-list" @click="toActivity(1)">
          <div class="img-box f_left list-img  wow zoomInUp"  v-bind:style="{ backgroundImage: 'url('+testImg3+')' }">

          </div>
          <div class="info f_right">
            <h3 class="title  wow fadeInUp">[新进导师培训]-课堂教学方法与教学能力提升</h3>
            <p class="des  wow fadeInUp" data-wow-delay="0.4s">6月下半月以北上资金为代表的外资流出规模很小，A股下跌是外资小幅流出的原因，而不是结果。当前资本外流压力远小于2015-2016</p>
            <div class="detail  wow fadeInUp" data-wow-delay="0.8s">
              <span class="head-img img-box">
                <img src="@/assets/image/Avatar_Default.png" alt="头像">
              </span>
              <span class="name line">达芬奇</span>
              <span class="line">2018-12-55 22:30</span>
              <span class="iconfont icon_view">54545</span>
            </div>
          </div>
        </div>
        <div class="main-list" @click="toActivity(1)">
          <div class="img-box f_left list-img  wow zoomInUp">
            <img :src="testImg2" alt="">
          </div>
          <div class="info f_right">
            <h3 class="title  wow fadeInUp">[新进导师培训]-课堂教学方法与教学能力提升</h3>
            <p class="des  wow fadeInUp" data-wow-delay="0.4s">6月下半月以北上资金为代表的外资流出规模很小，A股下跌是外资小幅流出的原因，而不是结果。当前资本外流压力远小于2015-2016</p>
            <div class="detail  wow fadeInUp" data-wow-delay="0.8s">
              <span class="head-img img-box">
                <img src="@/assets/image/Avatar_Default.png" alt="头像">
              </span>
              <span class="name line">达芬奇</span>
              <span class="line">2018-12-55 22:30</span>
              <span class="iconfont icon_view">54545</span>
            </div>
          </div>
        </div>
        <div class="main-list" @click="toActivity(1)">
          <div class="img-box f_left list-img  wow zoomInUp">
            <img :src="testImg2" alt="">
          </div>
          <div class="info f_right">
            <h3 class="title  wow fadeInUp">[新进导师培训]-课堂教学方法与教学能力提升</h3>
            <p class="des  wow fadeInUp" data-wow-delay="0.4s">6月下半月以北上资金为代表的外资流出规模很小，A股下跌是外资小幅流出的原因，而不是结果。当前资本外流压力远小于2015-2016</p>
            <div class="detail  wow fadeInUp" data-wow-delay="0.8s">
              <span class="head-img img-box">
                <img src="@/assets/image/Avatar_Default.png" alt="头像">
              </span>
              <span class="name line">达芬奇</span>
              <span class="line">2018-12-55 22:30</span>
              <span class="iconfont icon_view">54545</span>
            </div>
          </div>
        </div>
        <div class="main-list" @click="toActivity(1)">
          <div class="img-box f_left list-img  wow zoomInUp" >
            <img :src="testImg3" alt="">
          </div>
          <div class="info f_right">
            <h3 class="title  wow fadeInUp">[新进导师培训]-课堂教学方法与教学能力提升</h3>
            <p class="des  wow fadeInUp" data-wow-delay="0.4s">6月下半月以北上资金为代表的外资流出规模很小，A股下跌是外资小幅流出的原因，而不是结果。当前资本外流压力远小于2015-2016</p>
            <div class="detail  wow fadeInUp" data-wow-delay="0.8s">
              <span class="head-img img-box">
                <img src="@/assets/image/Avatar_Default.png" alt="头像">
              </span>
              <span class="name line">达芬奇</span>
              <span class="line">2018-12-55 22:30</span>
              <span class="iconfont icon_view">54545</span>
            </div>
          </div>
        </div>
        <div class="main-list"  @click="toActivity(1)">
          <div class="img-box f_left list-img  wow zoomInUp">
            <img src="../../testfile/home_img_cover_04.png" alt="">
          </div>
          <div class="info f_right">
            <h3 class="title  wow fadeInUp">[新进导师培训]-课堂教学方法与教学能力提升</h3>
            <p class="des  wow fadeInUp" data-wow-delay="0.4s">6月下半月以北上资金为代表的外资流出规模很小，A股下跌是外资小幅流出的原因，而不是结果。当前资本外流压力远小于2015-2016</p>
            <div class="detail  wow fadeInUp" data-wow-delay="0.8s">
              <span class="head-img img-box">
                <img src="@/assets/image/Avatar_Default.png" alt="头像">
              </span>
              <span class="name line">达芬奇</span>
              <span class="line">2018-12-55 22:30</span>
              <span class="iconfont icon_view">54545</span>
            </div>
          </div>
        </div>-->
        <div class="load-more" @click="loadMore" v-if="isShowMoreBtn">
          加载更多…
        </div>
        <div class="empty-more" v-if="!isShowMoreBtn">
          暂无更多数据...
        </div>
      </div>
      <div class="news f_right">
        <h3 class="title"><span class="iconfont icon_sound-fill"></span>最新公告</h3>
        <ul class="info">
          <li @click="toNotice(1)">34届（2018年）楚才杯喜报公示</li>
          <li @click="toNotice(2)">阳光喔参与国家《民办教育蓝皮…</li>
          <li @click="toNotice(3)">34打开事件发生可是大家发十大风水大忌疯狂的十六分34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li @click="toNotice(4)">34打开事件发生可是大家发十大风水大忌疯狂的dsdsa十六分</li>
          <li @click="toNotice(5)">34打开事件发生可是大家发sadsa疯狂的十六分</li>
          <li @click="toNotice(6)">34打开事件发生dssdssa大忌疯狂的十六分</li>
          <li @click="toNotice(7)">34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
          <li @click="toNotice(8)">34打开事件发生可是大家发十大风水大忌疯狂的十六分</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
import ajax from '@/utils/fetch.js'
import { WOW } from 'wowjs'
import {formatDate} from "@/assets/js/formatData";

export default {
  data () {
    return {
      // testImg1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531294752984&di=cfa05c9c2caa63d669fa4161f31256ab&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01445c59795648a8012193a3af1a35.jpg',
      // testImg2:'http://attachments.gfan.com/forum/201609/22/234117bss94l4mmm2zz4bw.jpg',
      // testImg3:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531292195523&di=e82acab0ccb7e0708cb17a744c14b87e&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201508%2F28%2F20150828223722_WeZ4z.jpeg',
      // testImg:require('../../testfile/home_img_cover_04.png'),
      wow:{},
      mySwiper:{},
      activityCurrPage:1,
      activityTotalPage:0,
      isShowMoreBtn:true,
      bannerList:[],
      activityList:[],
      newsList:[]
    }
  },
  created(){

  },
  mounted(){
    this.loadBanner()
    this.loadActivity()


  },
  components:{

  },
  filters:{
    formatDate(time){
      let date = new Date(time)
      return formatDate(date,'yyyy-MM-dd hh:ss')
    }
  },
  methods: {
    _initWow(){
      new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
      }).init()
    },
    _initSweiper:function () {
      var _this = this
      this.mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on:{
          click: function(e){
            let realIndex = this.realIndex;
            if(e.path[0].className =='swiper-button-next'||e.path[0].className =='swiper-button-prev'){
              return
            }
             _this.toActivity(realIndex);
          }
        }


      })
    },
    loadBanner:function(){
      var _this = this
      //banner 图
      let bannerParems = {
        pageSize:4,
        currPage:1
      }
      ajax.get(api.banner_home,bannerParems).then((res)=>{
        // console.log(res)
        this.bannerList = res.data.result
        this.$nextTick(()=>{
          _this._initSweiper()
        })
      })
    },
    loadActivity:function(){
      //活动
      var _this = this
      let activityParems = {
        pageSize:'4',
        currPage:this.activityCurrPage
      }
      ajax.get(api.activity_home,activityParems).then((res)=>{
        console.log(res.data.result.results)
        _this.activityTotalPage = res.data.result.totalPage
        if(_this.activityCurrPage<_this.activityTotalPage){
          _this.activityCurrPage++
        }else {
          _this.isShowMoreBtn = false
        }
        this.activityList = this.activityList.concat(res.data.result.results)
        if(_this.activityCurrPage==2){
          this.$nextTick(()=>{
            this._initWow()
           // _this.wow.init()
          })
        }else {
          //_this.wow ={}
        }
      })
    },
    loadNews:function(){

    },
    loadMore:function(){
      this.loadActivity()
    },
    toActivity:function (id) {
      // alert(1)
      console.log(id)
     this.$router.push('/activity')
    },
    toNotice:function (id) {
      console.log(id)
      this.$router.push('/notice')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../../assets/css/base.less";
  .icon_view:before{content: '\e776';font-size: 18px;}
  .icon_sound-fill:before{content: '\e76c';font-size: 22px;}
  .swiper-container {
    margin: 32px 0 60px;
    width:100%;
    height: 300px;

    .swiper-slide{
      border-radius: 4px;
      font-size: 0;
      cursor: pointer;
      &:nth-child(2n){
        background-color: #eee;
      }
      &:nth-child(2n+1){
        background-color: #0ee;
      }
    }
    .swiper-button-prev{
      background: url("./home_Icons_Arrow.Left.png") no-repeat top center;
      background-size: 100% 100%;
      width: 30px;
      height: 70px;
      margin-top: -35px;
      left: 0;
      opacity: 0;
      transition: all 0.5s;

    }
    .swiper-button-next{
      background: url("./home_Icons_Arrow.Right.png") no-repeat top center;
      background-size: 100% 100%;
      width: 30px;
      height: 70px;
      margin-top: -35px;
      right: 0;
      opacity: 0;
      transition: all 0.5s;
    }
    .swiper-button-prev:focus{
      border: 0;
    }
    .swiper-button-next:focus{
      border: 0;
    }
  }
  .swiper-container:hover .swiper-button-prev,
  .swiper-container:hover .swiper-button-next{
    opacity: 1;
  }
  .main{
    width: 876px;
    background-color: #fff;
    transition: all 0.5s;
    .main-list{
      width: 100%;
      height: 190px;
      border: 1px solid #EEEEEE;
      border-radius: 4px;
      padding: 16px;
      margin-bottom: 16px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .main-list:hover{
      box-shadow: 0 1px 20px 0px rgba(0,0,0,0.1);
    }
    .main-list:hover .title{
      color: @color;
    }
    .list-img{
      width: 280px;
      height: 158px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .title{
      transition: all 0.3s;
      font-size: 18px;
      color: #2F3142;
      line-height: 18px;
      font-weight: 600;
      padding-top: 10px;
      .oneline;

    }
    .des{
      font-size: 14px;
      color: rgba(47,49,66,0.56);
      line-height: 20px;
      margin-top: 14px;
      height: 90px;
      .mostline(4);
    }
    .info{
      width: 552px;
    }
    .detail{
      span{
        float: left;
        line-height: 29px;
        padding: 0 8px;
        font-size: 12px;
        color: rgba(47,49,66,0.56);
        position: relative;
      }
      .head-img{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        padding: 0;
      }
      .line:after{
        content: "";
        width: 1px;
        height: 10px;
        background: #EEEEEE;
        position: absolute;
        right: 0;
        top: 10px;
      }
      .name{
        color: #2F3142;
      }
    }

  }
  .news{
    width: 280px;
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    /*padding: 10px;*/
    li{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
      position: relative;
      padding-left: 15px;
      transition: all 0.2s;
      &:before{
        position: absolute;
        content: "";
        width:4px ;
        height: 4px;
        background-color: #2F3142;
        border-radius: 4px;
        top: 50%;
        margin-top: -2px;
        left: 0;
      }
      &:hover{
        color: @color;
      }
      &:hover:before{
        background-color: @color;
      }
    }
    .title{
      height: 48px;
      border-bottom: 1px solid #EEEEEE;
      padding-top: 10px;
      font-size: 18px;
      color: #2F3142;
      font-weight: 600;
      padding: 13px 15px 0;
    }
    .info{
      padding: 8px 16px 16px;
      font-size: 14px;
      color: #2F3142;
      line-height: 30px;
    }

    .icon_sound-fill{
      display: inline-block;
      color: white;
      width: 22px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      background-color: #2DCBB5;
      background-image: linear-gradient(-134deg, #36FFE3 0%, #2DCBB5 100%);
      margin-right: 10px;
    }
  }

</style>
