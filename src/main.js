import { createApp } from 'vue'
import 'bootstrap' // 載入 bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.scss' // bootstrap icon
import axios from 'axios' // vue axios
import VueAxios from 'vue-axios' // vue axios
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router).mount('#app')
