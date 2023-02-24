<template>
  <div class="bg-grey-light flex justify-around items-center w-[408px] p-[8px] rounded-[12px]">
    <p class="text-grey-dark text-small">{{ timeWorkerWithFormat }}</p>
    <Button type="primary" :onClick="clickOnClockIn">Entrar</Button>
    <p class="text-grey-light-1">|</p>
    <img src="../assets/avatar.png">
    <p class="text-medium text-grey-dark">{{ worker.firstName }} {{ worker.lastName }}</p>
    <div @mouseover="showMenu = true" @mouseleave="showMenu = false">
      <img src="../assets/chevron-left.svg" class="icono" >
      <slot v-if="showMenu" />
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import Button from './Button.vue'
import { clockIn } from '../services/API'


export default {
  name: 'Tracker-Offline',
  components: {
    Button
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
   ...mapActions(['getWorkerInfo']),
    async clickOnClockIn () {  
      await clockIn({ employeeId: this.worker.id }) 
      this.getWorkerInfo()
    }
  },
  computed: {
    ...mapState(['worker', 'timeWorkerWithFormat'])
  },
}
</script>
