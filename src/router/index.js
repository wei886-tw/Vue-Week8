import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/userProduct',
      name: 'userProduct',
      component: () => import('../views/UserProduct.vue'),
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: () => import('../views/AdminLogin.vue')
    },
    {
      path: '/adminProducts',
      name: 'adminProducts',
      component: () => import('../views/AdminProducts.vue')
    },
    {
      path: '/adminCart',
      name: 'adminCart',
      component: () => import('../views/AdminCart.vue')
    },
  ]
})

export default router