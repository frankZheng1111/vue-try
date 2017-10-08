'use strict'

import axios from 'axios'
import humps from 'humps'

const $axios = async function(options) {
  return humps.camelizeKeys(await axios(humps.depascalizeKeys(options)))
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

export function addReply(topicId, content, accessToken, replyId) {
  let body = {
    accesstoken: accessToken,
    content: content
  }
  if (replyId) { body.replyId = replyId }
  return $axios({
    method: 'post',
    url: `/topic/${topicId}/replies`,
    data: body
  })
}
