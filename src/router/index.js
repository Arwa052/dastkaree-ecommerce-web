import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import productlisting from '../views/product-listing.vue'
import Contact from '../views/contact.vue'
import productDetail from '../views/product-detail.vue'
import Ratate from '../views/Ratate.vue'

// product-detail.vue
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/product-listing',
    name: 'productlisting',
    component: productlisting
  },
  {
    path: '/product-detail',
    name: 'productDetail',
    component: productDetail
  },
  {
    path: '/ratate',
    name: 'Ratate',
    component: Ratate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
