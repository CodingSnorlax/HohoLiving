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

import App from './App.vue'
import router from './router'

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
app.use(VueAxios, axios)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router).mount('#app')
