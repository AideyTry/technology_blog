// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import { getStore } from '@/utils/store'
let headersContent = getStore('headersContent')
Vue.config.productionTip = false
let service = axios.create({
  headers: {
    'Content-Type': headersContent
  }
})
Vue.prototype.$http = service

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
