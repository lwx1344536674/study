import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font_icon/iconfont.css';
import store from './store';
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
