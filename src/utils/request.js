

import axios from 'axios'
import {getItem}from './storage'
import router from '../router'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1'
// axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = sessionStorage.getItem('token') || ''
console.log(axios.defaults.headers['token'])
axios.defaults.headers.post['Content-Type'] = 'application/json'

// axios.interceptors.request.use(

//   config => {

//     if (localStorage.getItem('Authorization')) {

//       config.headers.Authorization = localStorage.getItem('Authorization');

//     }

//     return config;

//   },

//   error => {

//     return Promise.reject(error);

//   });


axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    console.log('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) console.log(res.data.message)
    if (res.data.resultCode == 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(res.data)
  }

  return res.data
})

export default axios

