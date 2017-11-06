import Vue from 'vue'
import App from './app/App'
import router from './router'
import VueResource from 'vue-resource'


Vue.config.productionTip = false
Vue.use(VueResource)


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
