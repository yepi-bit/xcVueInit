import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import rem from './utils/rem.ts'

// 2. 引入组件样式
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(PiniaVuePlugin)
new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
