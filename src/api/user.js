'use strict'

import axios from 'axios'
import humps from 'humps'

const $axios = async function(options) {
  return humps.camelizeKeys(await axios(humps.depascalizeKeys(options)))
}

export function userLogin(accessToken) {
  return $axios({
    method: 'post',
    url: '/accesstoken',
    data: {
      accesstoken: accessToken
    }
  })
}

export function getUserProfile(loginName) {
  return $axios({
    method: 'get',
    url: `/user/${loginName}`
  })
}
