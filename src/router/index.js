import { createRouter, createWebHistory } from 'vue-router'

import home_products from '../views/home_products.vue'
import product_detail from '../views/product_detail.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router