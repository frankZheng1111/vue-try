'use strict'

import TAB_TEXTS from '../config/tabTexts'
import { TimeUtil } from './utils'

const TAG_COLORS = {
  top: '#f44336',
  ask: '#26a2ff',
  good: '#e67e22',
  share: '#4caf50',
  dev: '#888',
  all: '#888'
}

export default class TopicComputedAttr {
  constructor(topic) {
    this.data = topic
  }

  get createTimeFromNow() {
    let topic = this.data
    return new TimeUtil(topic.create_at).timeFromNow
  }

  get tagText() {
    let topic = this.data
      if (topic.top) { return '置顶' }
    if (topic.good) { return '精华' }
    if (TAB_TEXTS[topic.tab]) { return TAB_TEXTS[topic.tab] }
    return '全部'
  }

  get tagColor() {
    let topic = this.data
      let colorKey = 'all'
      if (topic.top) { return TAG_COLORS.top }
    if (topic.good) { return TAG_COLORS.good }
    if (topic.tab) { return TAG_COLORS[topic.tab] }
    return TAG_COLORS[colorKey]
  }
}
