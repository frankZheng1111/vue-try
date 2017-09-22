'use strict'

import { LocalStorage } from './utils'
import * as api from '../api'

export default class User {
  // 若传入参数，则登出当前用户
  //
  constructor(accessToken) {
    if (accessToken) {
      this.logout()
      this.accessToken = accessToken
      LocalStorage.set('accessToken', this.accessToken)
    } else {
      this.accessToken = LocalStorage.get('accessToken')
    }
  }

  async login() {
    if (!this.accessToken) { throw new Error('missing accessToken') }
    try {
      let { data: userBaseInfo } = await api.userLogin(this.accessToken)
      LocalStorage.set('userBaseInfo', JSON.stringify(userBaseInfo))
      return true
    } catch(e) {
      console.log(e)
      return false
    }
  }

  logout() {
    LocalStorage.remove('userBaseInfo')
    LocalStorage.remove('accessToken')
    return true
  }

  get isLogin() {
    let userBaseInfo = this.userBaseInfo
    // 仅return true or false
    return (userBaseInfo && true) || false
  }

  get userBaseInfo() {
    try {
      return JSON.parse(LocalStorage.get('userBaseInfo'))
    } catch(e) {
      return ''
    }
  }

  async getProfile() {
    if (!isLogin) { throw new Error('need login') }
    let { data: { data: userProfile } } = await api.userLogin(this.accessToken)
    return userProfile
  }
}
