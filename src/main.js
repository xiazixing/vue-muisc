import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import Mint from 'mint-ui'
import axios from 'axios'
import './assets/css/neat-min.css'
import './assets/css/style.css'    

    

Vue.config.productionTip = false;

Vue.use(Mint);

//import VueResource from 'vue-resource' //axios 替代
//Vue.use(VueResource); //vue 2.0 已经停止更新

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
//  template: '<App/>',
//  components: { App }
    render:h=>h(App)
})

 
