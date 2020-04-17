import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import Toast from "./tools/toast"

Vue.config.productionTip = false
Vue.use(function (Vue) {
   Vue.prototype.$api=api
})
Vue.prototype.$Toast=Toast
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
