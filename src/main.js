import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import Vue3dModel from 'vue-3d-model'
import VueElementLoading from 'vue-element-loading'

import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

import * as actions from './store/index'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Vue3dModel)
Vue.use(VueElementLoading)

Vue.config.productionTip = false

const store = new Vuex.Store({
  actions
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    VueElementLoading,
    Vue3dModel,
    App
  },
  template: '<App/>',
  http: { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
})
