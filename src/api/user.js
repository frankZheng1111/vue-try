'use strict'

import axios from 'axios'

export function userLogin(accessToken) {
  return axios({
    method: 'post',
    url: '/accesstoken',
    data: {
      accesstoken: accessToken
    }
  })
}

export function getUserProfile(loginName) {
  return axios({
    method: 'get',
    url: `/user/${loginName}`
  })
}
