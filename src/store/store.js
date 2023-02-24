
import { createStore } from 'vuex'

import { calculateDifferenteBetweenTwoDates, calculateTimeWorkerWithFormat } from '@/utils/calculateDifferenceBetweenTwoDates'
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
      },
      timeWorkerWithFormat: ''
    }
  },
  mutations: {
    setDataWorker(state, worker) {
      state.worker = worker
    },
    setDifferenceTimes(state, timeWorker) {
      state.timeWorker = timeWorker
    },
    setTimeWorkerWithFormat(state, timeWorkerWithFormat) {
      state.timeWorkerWithFormat = timeWorkerWithFormat
    }
  },
  actions: {
    async getWorkerInfo ({ commit }) {
    const response = await getCurrentStatus()

    const { workEntryIn, workEntryOut } = response.data.data[0]
    const { firstName, lastName, id, workStatus } = response.data.data[0].employee
    
    const timeWorker = calculateDifferenteBetweenTwoDates(new Date(workEntryIn.date), new Date(workEntryOut.date))
    const timeWorkerWithFormat = calculateTimeWorkerWithFormat(new Date(workEntryIn.date), new Date(workEntryOut.date))

    commit('setDataWorker', { firstName, lastName, id, workStatus })    
    commit('setDifferenceTimes', timeWorker)
    commit('setTimeWorkerWithFormat', timeWorkerWithFormat)
  
  }
}
})


export default store
