
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
      timeWorkerOffline: null
    }
  },
  mutations: {
    setDataWorker(state, worker) {
      state.worker = worker
    },
    setDifferenceTimes(state, timeWorkerOffline) {
      state.timeWorkerOffline = timeWorkerOffline
    }
  },
  actions: {
    async getInitialWorkerInfo ({ commit }) {
    const response = await getCurrentStatus()

    const { workEntryIn, workEntryOut } = response.data.data[0]
    const { firstName, lastName, id, workStatus } = response.data.data[0].employee
    
    const timeWorkerOffline = calculateDifferenteBetweenTwoDates(new Date(workEntryIn.date), new Date(workEntryOut.date))
    
    commit('setDataWorker', { firstName, lastName, id, workStatus })
    commit('setDifferenceTimes', timeWorkerOffline)
  
  }
}
})


export default store
