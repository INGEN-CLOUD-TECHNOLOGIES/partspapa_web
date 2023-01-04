import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Home from '../views/Base/Home.vue'
import Layout from '../views/Base/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresLogin: false,
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresLogin: false,
    }
  },
  {
    path: '/otp',
    name: 'OTP',
    component: () => import('../views/Auth/OTP.vue'),
    meta: {
      requiresLogin: false,
    },
    params: {
      email: null,
    }
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          requiresLogin: false,
        }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          requiresLogin: false,
        }
      },
      {
        path: '/brands',
        name: 'Brands',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Catalogue/Brands.vue'),
        meta: {
          requiresLogin: false,
        }
      },
      {
        path: '/products',
        component: () => import('../views/Products/Products.vue'),
        children: [
          {
            path: '/products',
            name: 'Product-Listing',
            component: () => import('../views/Products/Product-Listing.vue'),
            meta: {
              requiresLogin: false,
            }
          },
          {
            path: '/products/details/:category_slug/:id',
            name: 'ProductDetails',
            component: () => import('../views/Products/Detail.vue'),
            params: {
              id: '',
              category_slug: ''
            },
            meta: {
              requiresLogin: false,
            }
          },
          {
            path: '/products/search',
            name: 'ProductSearch',
            component: () => import('../views/Products/ProductSearch.vue'),
            meta: {
              requiresLogin: false,
            }
          },
          {
            path: '/products/upload',
            name: 'ProductUpload',
            component: () => import('../views/Products/Upload.vue'),
            meta: {
              requiresLogin: true
            }
          }
        ]
      },
      {
        path: '/sellerpage/:id',
        name: 'SellerPage',
        component: () => import('../views/Vendor/Profile.vue'),
        meta: {
          requiresLogin: false,
        }
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
