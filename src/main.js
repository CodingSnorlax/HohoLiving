import { createApp } from 'vue'
import 'bootstrap' // 載入 bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.scss' // bootstrap icon
import axios from 'axios' // vue axios
import VueAxios from 'vue-axios' // vue axios

// 載入驗證套件
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
// 套用所有規則
import AllRules from '@vee-validate/rules'
// 多國語系 i18n
import { localize, setLocale } from '@vee-validate/i18n'
// 繁中
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// vue loading 套件
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App.vue'
import router from './router'

// 載入自訂的 filters
import { date, currency } from '../src/methods/filters'

// veevalidate rules
Object.keys(AllRules).forEach((rule) => {
  if (rule !== 'default') {
    defineRule(rule, AllRules[rule])
  }
})

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})

// 設定預設語系
setLocale('zh_TW')

const app = createApp(App)
// 載入自訂義 filters
app.config.globalProperties.$filters = {
  date,
  currency
}
app.use(VueAxios, axios)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('VueLoading', VueLoading)
app.use(router).mount('#app')
