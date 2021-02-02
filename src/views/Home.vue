<template>
   <div class="home">
     <!-- 头部 -->
    <header class="home-header wrap">
      <router-link tag="i" to="./category"><i class="icon iconfont icon-shouye" style="padding-left:10px;"></i></router-link>
      <div class="header-search">
        <span class="app-name" >新风商城</span>
        <i class="iconfont icon-search" style="padding-right:4px;"></i>
        <router-link tag="span" class="search-title" to="./product">山河无恙，人间皆安</router-link>
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!isLogin" style="padding-right:10px;">登录</router-link>
      <router-link class="login" tag="span" to="./user" v-else>
        <i class="icon iconfont icon-shouye" style="padding-right:10px;"></i>
  		</router-link>
    </header>

    <!-- 轮播图 -->
    
  </div>
</template>

<script>
import {getItem} from '../utils/storage.js'
  export default {
    data(){
      return{
        isLogin:false
      }
    },
    mounted(){
      const token=getItem('token')
      console.log(token)
      if(token){
        this.isLogin=true;
      }
    }



};
</script>

<style lang="scss">
.home {
    .home-header {
      display:flex;
      width:100%;
      justify-content: space-between;
      position: fixed;
      left: 0;
      top: 0;
      background: pink;
      line-height: 50px;
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
        width:73%;
        line-height: 20px;
        margin: 10px 0;
        padding: 5px 0;
        color: #232326;
        background: rgba(255, 255, 255, .7);
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
  }


</style>
