<template>
  <div>
  <div class="bg-grey-light flex justify-around items-center w-[596px] p-[8px] rounded-[12px]">
    <p class="text-grey-dark text-small">04:01:56 / 07:00:53</p>
    <Button :onClick="() => {}" type="neutral">Pausar</Button>
    <Button :onClick="clickOnClockOut" type="danger">Salir</Button>
    <p class="text-grey-light-1">|</p>
    <img src="../assets/avatar.png">
    <p class="text-medium text-grey-dark">Kelly pierce</p>
    <img src="../assets/chevron-left.svg" >
  </div>

  </div>
</template>

<script>

import Button from './Button.vue'
import { clockOut } from '../services/API'

export default {
  name: 'Tracker-Online',
  components: {
    Button
  },
  data() {
    return {
    }
  },
  methods: {
    async clickOnClockOut () {
      await clockOut({ employeeId: 'b99a6cd9-3a3d-4635-9eea-e089c90ac45a'})
    },

  }
}
</script>


<style scoped>
</style>
