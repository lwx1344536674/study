import Vue from 'vue'
import App from './App.vue'
import router from './router/route'
import ElementUI, { Message } from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font_icon/iconfont.css'
import store from './store'

Vue.prototype.$http = axios

axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

axios.interceptors.request.use((config) => {
  console.log(config)

  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.use(ElementUI)
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
