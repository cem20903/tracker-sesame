<template>
  <div id="app" class="bg-grey-extra-light h-screen flex items-center justify-center flex-col gap-[20px]">    
    <TrackerOnline />
    <TrackerOffline />
    <!-- <ul class="bg-white text-grey-dark w-[247px]">
        <li class="h-[45px] flex justify-center items-center">Mis cuentas</li>
        <li class="h-[45px] flex justify-center items-center ">Vista Empleado</li>
        <li class="h-[45px] flex justify-center items-center">Mi perfil</li>
        <li class="h-[45px] flex justify-center items-center">Cerrar sesión</li>
    </ul> -->
  </div>
</template>

<script>

import TrackerOnline from './components/TrackerOnline.vue'
import TrackerOffline from './components/TrackerOffline.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TrackerOnline,
    TrackerOffline
  },
  methods: {
    ...mapActions(['getInitialWorkerInfo'])
  },
  created() {
    this.getInitialWorkerInfo()
  }
}
</script>

<style>
</style>
