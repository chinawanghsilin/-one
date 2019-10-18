import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import './style/index.less'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios' // 引入axios

// 注册全局
import layoutAside from '../../components/Home/layout-aside'
import layoutHeader from '../../components/Home/layout-header'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

export default {
  install (Vue) {
    Vue.component('layout-header', layoutHeader)
    Vue.component('layout-aside', layoutAside)
  }
}

Vue.prototype.$axios = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
