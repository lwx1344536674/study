import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI, { Message } from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font_icon/iconfont.css';
import store from './store';
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/';
Vue.prototype.$http = axios;

Vue.use(ElementUI);
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
