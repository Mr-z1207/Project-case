import Vue from 'vue'
import App from './App.vue'

//引入公共css
import './assets/css/common.css'

//引入store
import store from './store'

//引入路由对象
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
