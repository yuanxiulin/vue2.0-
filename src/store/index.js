import Vue from "vue";
import Vuex from "vuex";
import {setItem,getItem}from '../utils/storage.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // token存储在vuex,若无法取到则为空
      tokenInfo:getItem("token")||{}
  },
  mutations: {

    loginToken(state,tokenObj){
      state.tokenInfo = tokenObj
      console.log(state.tokenInfo)
      // 因为刷新会丢失所以进行持久化 调用storage文件里方法
      setItem('token', tokenObj)
      console.log(tokenObj)
    }
  
  },
  actions: {},
  modules: {},
});
