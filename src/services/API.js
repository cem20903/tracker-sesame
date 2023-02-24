import http from './http'

async function getCurrentStatus () {
  return http.get().then(res => res)
}

async function clockIn (params) {
  return http.post('/clock-in', params)
}

async function clockOut (params) {
  return http.post('/clock-out', params)
}

export { getCurrentStatus, clockIn, clockOut }
