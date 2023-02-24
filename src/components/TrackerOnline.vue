<template>
  <div>
  <div class="bg-grey-light flex justify-around items-center w-[596px] p-[8px] rounded-[12px] max-h-[45px]">
    <p class="text-grey-dark text-small">{{ currentTimeWorking }} / 07:00:53</p>
    <Button :onClick="() => {}" type="neutral">Pausar</Button>
    <Button :onClick="clickOnClockOut" type="danger">Salir</Button>
    <p class="text-grey-light-1">|</p>
    <img src="@/assets/avatar.png" class="avatar">
    <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
    <div @mouseover="showMenu = true" @mouseleave="showMenu = false">
    <img src="@/assets/chevron-left.svg" class="icono" >
    <slot v-if="showMenu" />
    </div>
    </div>
  </div>
</template>
<script>

import Button from '@/components/Button.vue'
import { clockOut } from '@/services/API'
import { mapState, mapActions } from 'vuex'
import { formatTime } from '@/utils/dates'

export default {
  name: 'Tracker-Online',
  components: {
    Button
  },
  data () {
    return {
      currentSeconds: 0,
      currentMinutes: 0,
      currentHours: 0,
      showMenu: false
    }
  },
  methods: {
    ...mapActions(['getWorkerInfo']),
    async clickOnClockOut () {
      await clockOut({ employeeId: this.worker.id })
      this.getWorkerInfo()
    },
    startTimer () {
      const { hours, minutes, seconds } = this.timeWorker
      this.currentSeconds =  seconds
      this.currentMinutes = minutes
      this.currentHours = hours
    },
    calculateTime () {
      this.currentSeconds = this.currentSeconds + 1 
  
      const addMinute = this.currentSeconds === 60
      
      if(addMinute) {
        this.currentSeconds = 0
        this.currentMinutes = this.currentMinutes + 1
      }
      
      const addHour = this.currentMinutes === 60
      if(addHour) {
        this.currentMinutes = 0
        this.currentHours = this.currentHours + 1
      }
    }
  },
  computed: {
    ...mapState(['worker', 'timeWorker']),
    currentTimeWorking () {
      const dateFormated = formatTime({ hours: this.currentHours, minutes: this.currentMinutes, seconds: this.currentSeconds})
      return dateFormated
    }
  },
  created() {
    this.startTimer()
    setInterval(this.calculateTime, 1000)
  }
}
</script>
