
import { createStore } from 'vuex'

import calculateDifferenteBetweenTwoDates from '@/utils/calculateDifferenceBetweenTwoDates'
import { getCurrentStatus } from '../services/API'

const store = createStore({
  state () {
    return {
      worker: {
        firstName: null,
        lastName: null,
        id: null,
        workStatus: null
      },
      timeWorker: {
        hours: null,
        minutes: null,
        seconds: null
      }
    }
  },
  mutations: {
    setDataWorker(state, worker) {
      state.worker = worker
    },
    setDifferenceTimes(state, timeWorker) {
      state.timeWorker = timeWorker
    }
  },
  actions: {
    async getWorkerInfo ({ commit }) {
    const response = await getCurrentStatus()

    const { workEntryIn, workEntryOut } = response.data.data[0]
    const { firstName, lastName, id, workStatus } = response.data.data[0].employee
    
    const timeWorker = calculateDifferenteBetweenTwoDates(new Date(workEntryIn.date), new Date(workEntryOut.date))
    console.log(workStatus, response.data.data[response.data.data.length - 1], 'INFO DEL USER')
    commit('setDataWorker', { firstName, lastName, id, workStatus })
    commit('setDifferenceTimes', timeWorker)
  
  }
}
})


export default store
