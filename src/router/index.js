import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/userProduct',
      name: 'userProduct',
      component: () => import('../views/UserProduct.vue')
    }
  ]
})

export default router
