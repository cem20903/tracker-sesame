
import { createStore } from 'vuex'

import { getCurrentStatus } from '../services/API'

const store = createStore({
  state () {
    return {
      worker: {
        firstName: null,
        lastName: null,
        id: null,
        workStatus: null
      }
    }
  },
  mutations: {
    setDataWorker(state, worker) {
      state.worker = worker

    }
  },
  actions: {
    async getInitialWorkerInfo ({ commit }) {
    const response = await getCurrentStatus()
    
    const { firstName, lastName, id, workStatus} = response.data.data[0].employee
    
    commit('setDataWorker', { firstName, lastName, id, workStatus})
  
  }
}
})


export default store
