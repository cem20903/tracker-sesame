import http from './http'

import { getStatusWorker } from '@/services/factories/factory'

async function getCurrentStatus () {
  return http.get().then(res => {
    return getStatusWorker(res)
  })
}

async function clockIn (params) {
  return http.post('/clock-in', params)
}

async function clockOut (params) {
  return http.post('/clock-out', params)
}

export { getCurrentStatus, clockIn, clockOut }
