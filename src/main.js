import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// createApp(App).mount('#app')

// console.log(vm)

var vm = createApp(App)
vm.mount('#app')

console.log(vm)
