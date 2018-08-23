import Vue from 'vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'

import App from './App.vue'
import routes from './routes'
import dictionary from './dictionary'
import store from './store'

Vue.use(VueRouter)
Vue.use(VeeValidate,{
  dictionary: dictionary
  ,locale: 'th'
})
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
