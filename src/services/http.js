

import axios from 'axios'


const API = 'https://api-test.sesametime.com/schedule/v1/work-entries'

const TOKEN = '16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f'


const axiosInsance = axios.create({
  baseURL: API,
  timeout: 2000,
  headers: { Authorization: `Bearer ${TOKEN}` }
});


async function get (url = '') {
  return axiosInsance
  .get(url)
  .then(response => response)  
}

const http = {
  get: get
}


export default http