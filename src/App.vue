<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
    <!-- 底部栏 -->
    <Navtar v-if="isShow" />
  </div>
</template>
<script>
import Navtar from "./components/Navtar.vue";
export default {
  components: {
    Navtar,
  },
  data(){
    return{
      transitionName: 'slide-left',
      isShow:true,
      showMenuList:['/','/home','/cart','/category','/user']//数组里设置需要导航栏的路由
    }
  },
  watch:{
    $route(to,from){
      
      // console.log(to.meta.index)
      // console.log(from.meta.index)
      //配置是否需要导航栏
      if(this.showMenuList.includes(to.path)){
        this.isShow=true;
      }else{
        this.isShow=false;
      }

      if(to.meta.index>from.meta.index){
        this.transitionName='slide-left'
      }else if(to.meta.index<from.meta.index){
        this.transitionName='slide-right'
      }else{
        this.transitionName=''
      }
    }
  }
};
</script>
<style lang="scss">
#app {
  // width:100%;
  height: 100%;
}
</style>
