<template>
  <div class="home">
    <!-- 头部 -->
    <header class="home-header wrap">
      <router-link tag="i" to="./category"
        ><i class="icon iconfont icon-shouye" style="padding-left:10px;"></i
      ></router-link>
      <div class="header-search">
        <span class="app-name">新风商城</span>
        <i class="iconfont icon-search" style="padding-right:4px;"></i>
        <router-link tag="span" class="search-title" to="./product"
          >山河无恙，人间皆安</router-link
        >
      </div>
      <router-link
        class="login"
        tag="span"
        to="./login"
        v-if="!isLogin"
        style="padding-right:10px;"
        >登录</router-link
      >
      <router-link class="login" tag="span" to="./user" v-else>
        <i class="icon iconfont icon-shouye" style="padding-right:10px;"></i>
      </router-link>
    </header>

    <!-- 轮播图 -->
    <div class="swiper-container qwe">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in imgList"
          :key="index"
          :style="{ backgroundImage: 'url(' + item.carouselUrl + ')' }"
          style="width:100%;background-size:cover;"
        ></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination paging" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
import { getItem } from "../utils/storage.js";
import { getHome } from "../service/banner.js";
//局部引入swiper插件
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css"; //引入swiper样式

export default {
  data() {
    return {
      isLogin: false,
      imgList: [
        // "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-mate40.png",
        // "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner2.png",
      ],
    };
  },
  async mounted() {
    const token = getItem("token");
    console.log(token);
    if (token) {
      this.isLogin = true;
    }
    // await this.$axios({
    //   url: "/index-infos",
    //   method:"get"
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const { data } = await getHome();
    console.log(data);
    this.imgList = data.carousels;
    console.log(this.imgList);
  },
  updated() {//swiper初始化放在updated里
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay: true, // 自动播放 3秒
      observer: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss">
.home {
  .home-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    // background: pink;
    line-height: 50px;
    z-index: 6;
    // font-size: 15px;
    // color: #fff;
    // z-index: 10000;
    .nbmenu2 {
      color: blue;
    }
    &.active {
      background: red;
      .nbmenu2 {
        color: #fff;
      }
      .login {
        color: #fff;
      }
    }

    .header-search {
      display: flex;
      width: 73%;
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      color: #232326;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      .app-name {
        padding: 0 10px;
        color: blue;
        font-size: 20px;
        font-weight: bold;
        border-right: 2px solid #666;
      }
      .icon-search {
        padding: 0 10px;
        font-size: 17px;
      }
      .search-title {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }
    .login {
      color: blue;
      line-height: 52px;
      .van-icon-manager-o {
        font-size: 20px;
        vertical-align: -3px;
      }
    }
  }
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
    // margin-top: 50px;
    background: blueviolet;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    width: 100%;
    height: auto;
  }

  .swiper-slide {
    text-align: center;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
}
</style>
