'use strict'
import moment from 'moment'

export class TimeUtil {
  constructor(timeStr, { momentLocale = 'zh-cn' } = {}) {
    this.time = new Date(timeStr)
    moment.locale(momentLocale)
  }

  formatTime(format = 'YYYY-M-DD HH:mm') {
    return moment(this.time).format(format)
  }

  get timeFromNow() {
    return moment(this.time).fromNow()
  }
}

export class LocalStorage {
  constructor() {}

  static set(key, value) {
    return window.localStorage.setItem(key, value)
  }

  static get(key) {
    return window.localStorage.getItem(key)
  }

  static clear() {
    return window.localStorage.clear()
  }

  static remove(key) {
    return window.localStorage.removeItem(key)
  }
}

