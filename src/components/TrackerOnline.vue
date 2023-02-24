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
      currentSeconds: 0,
      currentMinutes: 0,
      currentHours: 0
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
      
      let formatSeconds
      let formatMinutes
      let formatHours
    
      if(this.currentSeconds < 10) {
        formatSeconds = `0${this.currentSeconds}`
      } else {
        formatSeconds = this.currentSeconds
      }
      
      if(this.currentMinutes < 10) {
        formatMinutes = `0${this.currentMinutes}`
      } else {
        formatMinutes = this.currentMinutes
      }
      
      if(this.currentHours < 10) {
        formatHours = `0${this.currentHours}`
      } else {
        formatHours = this.currentHours
      }
      
      
      return `${formatHours}:${formatMinutes}:${formatSeconds}`
    }
  },
  created() {
  
    const { hours, minutes, seconds } = this.timeWorker
    this.currentSeconds =  seconds
    this.currentMinutes = minutes
    this.currentHours = hours
  
    setInterval(() => {
      this.currentSeconds = this.currentSeconds + 1 
      
      
      if(this.currentSeconds === 60) {
        this.currentSeconds = 0
        this.currentMinutes = this.currentMinutes + 1
      }
      
      if( this.currentMinutes === 60) {
        this.currentMinutes = 0
        this.currentHours = this.currentHours + 1
      }
      
    }, 1000)
  }
}
</script>
