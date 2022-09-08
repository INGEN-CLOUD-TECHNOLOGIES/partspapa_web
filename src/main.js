import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/utils/index.css'
import loader from "vue-ui-preloader";

Vue.config.productionTip = false
Vue.use(loader)

new Vue({
  router,
  loader:loader,
  store,
  // scroll to top on route change
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html

  beforeRouteEnter(to, from, next) {
    if (to.path !== from.path) {
      window.scrollTo(0, 0)
      // refresh page on route change
      location.reload()
    }
    next()
  },
  render: h => h(App)
}).$mount('#app')
