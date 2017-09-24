'use strict'

import axios from 'axios'

export function getTopics({ page = 1, limit = 30, tab } = {}) {
  const VALID_TABS = ['ask', 'share', 'job', 'good', 'dev']
  let queryParams = {
    page: page,
    limit: limit
  }
  if (tab && VALID_TABS.includes(tab)) { queryParams.tab = tab }
  return axios({
    method: 'get',
    url: '/topics',
    params: queryParams
  })
}

export function getTopicById(id, { accessToken = null } = {}) {
  let queryParams = {}
  if (accessToken) { queryParams.accesstoken = accessToken }
  return axios({
    method: 'get',
    url: `/topic/${id}`,
    params: queryParams
  })
}
