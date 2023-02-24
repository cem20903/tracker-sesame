<template>
  <div class="bg-grey-light flex justify-around items-center w-[408px] p-[8px] rounded-[12px]">
    <p class="text-grey-dark text-small">{{ timeFormated }}</p>
    <Button type="primary" :onClick="clickOnClockIn">Entrar</Button>
    <p class="text-grey-light-1">|</p>
    <img src="../assets/avatar.png">
    <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
    <img src="../assets/chevron-left.svg" >
  </div>
</template>

<script>

import { mapState } from 'vuex'
import Button from './Button.vue'
import { clockIn } from '../services/API'


export default {
  name: 'Tracker-Offline',
  components: {
    Button
  },
  methods: {
    async clickOnClockIn () {  
      await clockIn({ employeeId: 'b99a6cd9-3a3d-4635-9eea-e089c90ac45a'}) 
    }
  },
  computed: {
    ...mapState(['worker', 'timeWorker']),
    timeFormated () {
      const { hours, minutes, seconds } = this.timeWorker
      return `${hours}:${minutes}:${seconds}`
    }
  },
}
</script>
