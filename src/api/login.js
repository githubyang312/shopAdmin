import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: 'api/store.Login/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: 'api/store.Login/getUserInfo',
    method: 'post',
    data: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
