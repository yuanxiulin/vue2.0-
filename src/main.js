import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/rem.js' //引入pc适配
import {setItem,getItem}from './utils/storage.js'


Vue.use(ElementUI);
Vue.config.productionTip = false 
Vue.prototype.$axios=axios //挂载原型

axios.defaults.baseURL="http://59.110.226.77:3000/api/user/" //设置请求不同域名的接口

axios.defaults.headers.post["Content-Type"] = "application/json";//请求头


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
