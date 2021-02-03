import axios from 'axios'
export function getHome(params) {
    return axios.get('/index-infos');
  }