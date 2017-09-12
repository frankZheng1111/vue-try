'use strict'
import moment from 'moment'

export class TimeUtil {
  constructor(timeStr, { momentLocale = 'zh-cn' } = {}) {
    this.time = new Date(timeStr)
    moment.locale(momentLocale)
  }

  get timeFromNow() {
    return moment(this.time).fromNow()
  }
}

