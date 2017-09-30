'use strict'

import { MessageBox } from 'mint-ui'
import User from '../libs/user'

export async function getCurrentAccessToken() {
  let user = new User()
  if (!user.isLogin) {
    await MessageBox.alert('该操作需要登录', '提示信息')
    return false
  }
  return user.accessToken
}
