import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'


import '../src/assets/bootstrap/scss/bootstrap.scss';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')