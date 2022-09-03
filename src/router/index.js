import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Home from '../views/Base/Home.vue'
import Layout from '../views/Base/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      // product pages with children
      {
        path: '/products',
        component: () => import('../views/Products/Products.vue'),
        children: [
          {
            path: '/products',
            name: 'Product-Listing',
            component: () => import('../views/Products/Product-Listing.vue')
          },
          {
            path: '/products/details/:category_slug/:id',
            name: 'ProductDetails',
            component: () => import('../views/Products/Detail.vue'),
            params: {
              id: '',
              category_slug: ''
            }
          }
        ]
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
