import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import myheader from './components/Header.vue'
console.log('At main.js,before createApp()')
const app = createApp(App)
app.component('testslot', myheader)
app.mount('#app')

console.log('At main.js,after createApp()')
