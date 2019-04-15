import Vue from 'vue'
import VueRouter from 'vue-router'

import VueSweetAlert from 'vue-sweetalert'

import App from './App.vue'
import router from './router'

Vue.use(VueRouter) 
Vue.use(VueSweetAlert)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

