<template>
  <div id="app" class="bg-grey-extra-light h-screen flex items-center justify-center flex-col gap-[20px]">   
  
  
    <TrackerOnline v-if="worker.workStatus === 'online'" />
    <TrackerOffline v-if="worker.workStatus === 'offline'" />
  </div>
</template>

<script>

import TrackerOnline from './components/TrackerOnline.vue'
import TrackerOffline from './components/TrackerOffline.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TrackerOnline,
    TrackerOffline
  },
  methods: {
    ...mapActions(['getWorkerInfo'])
  },
  computed: {
    ...mapState(['worker'])
  },
  created() {
    this.getWorkerInfo()
  }
}
</script>

<style>
</style>
