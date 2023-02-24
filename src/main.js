// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
  }
})

const app = createApp(App)

app.use(store)


app.mount('#app')
