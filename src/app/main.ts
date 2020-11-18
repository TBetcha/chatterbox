/** @format */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Server from '../Server'

import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

//const socket = new WebSocket('http://localhost:3000')
const socket = new WebSocket('ws://localhost:3000')

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
