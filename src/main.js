import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'swiper/css/swiper.min.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
