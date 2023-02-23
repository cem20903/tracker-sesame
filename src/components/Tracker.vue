<template>
  <div class="bg-grey-light flex justify-around items-center min-w-[408px] w-[596px] p-[8px] rounded-[12px]">
    <p class="text-grey-dark text-small">04:01:56</p>
    <template v-if="workStatus === 'online'">
      <Button type="neutral">Pausar</Button>
      <Button type="danger">Salir</Button>
    </template>
    <template v-if="workStatus === 'offline'">
      <Button type="primary">Entrar</Button>
    </template>
    <p class="text-grey-light-1">|</p>
    <img src="../assets/avatar.png">
    <p class="text-medium text-grey-dark">Kelly pierce</p>
    <img src="../assets/chevron-left.svg" >
  </div>
</template>

<script>

import Button from './Button.vue'
import { getCurrentStatus } from '../services/API'

export default {
  name: 'Tracker-Personal',
  components: {
    Button
  },
  data() {
    return {
       workStatus: ''
    }
  },
  async created() {
   const status = await getCurrentStatus()
    this.workStatus = status.data.data[0].employee.workStatus
    
  }
}
</script>


<style scoped>
</style>
