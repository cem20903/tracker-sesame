<template>
  <div id="app" class="bg-grey-extra-light h-screen flex items-center justify-center">    
    <TrackerOnline />
    <TrackerOffline />
  </div>
</template>

<script>
// import Tracker from './components/Tracker.vue'
import TrackerOnline from './components/TrackerOnline.vue'
import TrackerOffline from './components/TrackerOffline.vue'

export default {
  name: 'App',
  components: {
    // Tracker,
    TrackerOnline,
    TrackerOffline
  },
  created() {

  }
}
</script>

<style>
</style>
