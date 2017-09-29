'use strict'

import axios from 'axios'
import humps from 'humps'

const $axios = async function(options) {
  return humps.camelizeKeys(await axios(options))
}

export function getTopics({ page = 1, limit = 30, tab } = {}) {
  const VALID_TABS = ['ask', 'share', 'job', 'good', 'dev']
  let queryParams = {
    page: page,
    limit: limit
  }
  if (tab && VALID_TABS.includes(tab)) { queryParams.tab = tab }
  return $axios({
    method: 'get',
    url: '/topics',
    params: queryParams
  })
}

export function getTopicById(id, { accessToken = null } = {}) {
  let queryParams = {}
  if (accessToken) { queryParams.accesstoken = accessToken }
  return $axios({
    method: 'get',
    url: `/topic/${id}`,
    params: queryParams
  })
}

export function collectTopic(topicId, accessToken) {
  let bodyParams = {
    topicId: topicId,
    accesstoken: accessToken
  }
  return $axios({
    method: 'post',
    url: '/topic_collect/collect',
    data: humps.decamelizeKeys(bodyParams)
  })
}

export function deCollectTopic(topicId, accessToken) {
  let bodyParams = {
    topicId: topicId,
    accesstoken: accessToken
  }
  return $axios({
    method: 'post',
    url: '/topic_collect/de_collect',
    data: humps.decamelizeKeys(bodyParams)
  })
}
