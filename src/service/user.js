import axios from '../utils/request.js'

export function getUserInfo() {
  return axios.get('/user/info');
}

export function login(params) {
    return axios.post('/user/login', params);
  }
  