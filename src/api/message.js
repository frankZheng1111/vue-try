'use strict'

import axios from 'axios'
import humps from 'humps'

const $axios = async function(options) {
  return humps.camelizeKeys(await axios(humps.depascalizeKeys(options)))
}

export function getMessageCount(accessToken) {
  return $axios({
    method: 'get',
    url: '/message/count',
    params: {
      accesstoken: accessToken
    }
  })
}

