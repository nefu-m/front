import Vue from 'vue'
import App from './App.vue'
import store from '../../plugins/store'
import '../../plugins/element.js'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.use(iview)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
