import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/utils/index.css'
import loader from "vue-ui-preloader";
import FAIcon from "@/utils/fonts/fontawesome-icons.js"
import VTooltip from 'v-tooltip'
import VueNotification from "@kugatsu/vuenotification";



Vue.use(VueNotification, {
  timer: 10
});
Vue.use(VTooltip)
Vue.config.productionTip = false
Vue.use(loader)
Vue.component('font-awesome-icon', FAIcon)
Vue.component('file-upload', require('@yazan.alnughnugh/file-upload').default);

new Vue({
  router,
  loader:loader,
  store,
  // check router guard

  beforeRouteEnter(to, from, next) {
    // if route require login
    if (to.matched.some(record => record.meta.requiresLogin)) {
      // check if user is authenticated from store
      if (!store.getters.loggedIn) {
        // if not authenticated redirect to login page
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
        this.$notification.error("Please Login to start selling.", { infiniteTimer: false });
      } else {
        // if authenticated continue to route
        next()
      }
    } else {
      // if route does not require login continue to route
      next()
    }
  },

  render: h => h(App)
}).$mount('#app')
