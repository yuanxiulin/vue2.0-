import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import axios from 'axios'
import 'lib-flexible/flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/rem.js' //引入pc适配
import {setItem,getItem}from './utils/storage'
import md5 from 'js-md5';//md5加密
import './assets/font/iconfont.css'//引用iconfont样式
// import 'swiper/dist/css/swiper.min.css';


Vue.use(ElementUI);
Vue.config.productionTip = false 

Vue.prototype.$axios=axios //挂载原型
Vue.prototype.$md5 = md5; //md5加密

// axios.defaults.baseURL="http://59.110.226.77:3000/api/user/" //设置请求不同域名的接口
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//47.99.134.126:28019/api/v1/' : '//47.99.134.126:28019/api/v1/';
axios.defaults.headers.post["Content-Type"] = "application/json";//请求头
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

//请求拦截
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('token')) {
      console.log(sessionStorage.getItem('token'))
      config.headers['token'] = sessionStorage.getItem('token');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

//响应拦截
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    console.log.fail('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    console.log(res)
    if (res.data.message) alert(res.data.message)
    if (res.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }
  return res.data
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
