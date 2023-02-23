import http from './http'

async function getCurrentStatus () {
  return http.get().then(res => res)
}

export { getCurrentStatus }
