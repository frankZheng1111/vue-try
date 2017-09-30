'use strict'

import axios from 'axios'
import humps from 'humps'

const $axios = async function(options) {
  return humps.camelizeKeys(await axios(options))
}

export function upReply(replyId, accessToken) {
  return $axios({
    method: 'post',
    url: `/reply/${replyId}/ups`,
    data: {
      accesstoken: accessToken
    }
  })
}

