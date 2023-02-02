import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

// 2. 引入组件样式
import 'vant/lib/index.css';

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
