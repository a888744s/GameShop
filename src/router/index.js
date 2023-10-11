import { createRouter, createWebHistory } from 'vue-router'

import home_products from '../views/home_products.vue'
import product_detail from '../views/product_detail.vue'
import product_detail2 from '../views/product_detail2.vue'
import product_detail3 from '../views/product_detail3.vue'
import product_detail4 from '../views/product_detail4.vue'
import product_detail5 from '../views/product_detail5.vue'
import product_detail6 from '../views/product_detail6.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import AddToCart from '../views/AddToCart.vue'

const routes = [
  {
    path: '/',
    name: 'home_products',
    component: home_products
  },

  {
    path: '/product_detail',
    name: 'product_detail',
    component: product_detail
  },

  {
    path: '/product_detail2',
    name: 'product_detail2',
    component: product_detail2
  },

  {
    path: '/product_detail3',
    name: 'product_detail3',
    component: product_detail3
  },

  {
    path: '/product_detail4',
    name: 'product_detail4',
    component: product_detail4
  },

  {
    path: '/product_detail5',
    name: 'product_detail5',
    component: product_detail5
  },

  {
    path: '/product_detail6',
    name: 'product_detail6',
    component: product_detail6
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/register',
    name: 'register',
    component: register
  },

  {
    path: '/AddToCart',
    name: 'AddToCart',
    component: AddToCart
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router