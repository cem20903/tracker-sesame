<template>
  <div>
  <div class="bg-grey-light flex justify-around items-center w-[596px] p-[8px] rounded-[12px]">
    <p class="text-grey-dark text-small">{{ currentTimeWorking }} / 07:00:53</p>
    <Button :onClick="() => {}" type="neutral">Pausar</Button>
    <Button :onClick="clickOnClockOut" type="danger">Salir</Button>
    <p class="text-grey-light-1">|</p>
    <img src="../assets/avatar.png">
    <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
    <img src="../assets/chevron-left.svg" >
  </div>
  </div>
</template>
<script>

import Button from './Button.vue'
import { clockOut } from '../services/API'
import { mapState } from 'vuex'

export default {
  name: 'Tracker-Online',
  components: {
    Button
  },
  data () {
    return {
      currentSeconds: 0
    }
  },
  methods: {
    async clickOnClockOut () {
      await clockOut({ employeeId: this.worker.id })
    },
  },
  computed: {
    ...mapState(['worker', 'timeWorker']),
    currentTimeWorking () {
      
      const { hours, minutes, seconds } = this.timeWorker
      
      const newCurrentSeconds = seconds + this.currentSeconds
      
    
      return `${hours}:${minutes}:${newCurrentSeconds}`
    }
  },
  created() {
    setInterval(() => {
      this.currentSeconds = this.currentSeconds + 1 
    }, 1000)
  }
}
</script>
