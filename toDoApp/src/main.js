import './assets/main.css'
import baseCard from './components/BaseCard.vue'
import ListModal from './components/ListModal.vue'

import { createApp } from 'vue'
import App from './App.vue'
const app =createApp(App)
app.component('baseCard', baseCard)
app.component('listModal', ListModal)
app.mount('#app')

