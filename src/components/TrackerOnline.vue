<template>
  <div class="bg-grey-light flex justify-around items-center w-[596px] p-[8px] rounded-[12px]">
    <p class="text-grey-dark text-small">04:01:56 / 07:00:53</p>
    <Button type="neutral">Pausar</Button>
    <Button type="danger">Salir</Button>
    <p class="text-grey-light-1">|</p>
    <img src="../assets/avatar.png">
    <p class="text-medium text-grey-dark">Kelly pierce</p>
    <img src="../assets/chevron-left.svg" >
  </div>
</template>

<script>

import Button from './Button.vue'

export default {
  name: 'Tracker-Online',
  components: {
    Button
  },
}
</script>


<style scoped>
</style>
