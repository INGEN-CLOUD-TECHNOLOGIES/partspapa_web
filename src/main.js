import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/utils/index.css'
import loader from "vue-ui-preloader";
import FAIcon from "@/utils/fonts/fontawesome-icons.js"
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.config.productionTip = false
Vue.use(loader)
Vue.component('font-awesome-icon', FAIcon)
Vue.component('file-upload', require('@yazan.alnughnugh/file-upload').default);

new Vue({
  router,
  loader:loader,
  store,
  // scroll to top on route change
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html

  beforeRouteEnter(to, from, next) {
    if (to.matched.some((record) => record.meta.requiresLogin)) {
      if (!store.getters.loggedIn) {
        next({ name: "Signin" });
      } else {
        next();      
        // Scroll page to top on every route change
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }
    } else {
      next();
    }
  },
  render: h => h(App)
}).$mount('#app')
