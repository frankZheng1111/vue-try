'use strict'

import axios from 'axios'
// 需要跨域携带cookie时
// axios.defaults.withCredentials = true
axios.defaults.baseURL = API_URL
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


export function getTopics({ page = 1, limit = 30, tab } = {}) {
  let queryParams = {
    page: page,
    limit: limit
  }
  if (tab) { queryParams.tab = tab }
  return axios({
    method: 'get',
    url: '/topics',
    params: queryParams
  })
}
