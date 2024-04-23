import { createRouter, createWebHistory } from 'vue-router';
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
      path: '/userCart',
      name: 'userCart',
      component: () => import('../views/UserCart.vue')
    },
    {
      path: '/userPayment',
      name: 'userPayment',
      component: () => import('../views/UserPayment.vue')
    },
    {
      path: '/blogPage',
      name: 'blogPage',
      component: () => import('../views/BlogPage.vue'),
      child: [
        {
          path: 'dynamicRouter/:id',
          component: () => import('../views/DynamicRouter.vue'),
        },
        {
          path: 'dynamicRouterByProps/:id',
          component: () => import('../views/DynamicRouterByProps.vue'),
          props: (route) => {
            console.log('route:', route);
            return {
              id: '',
            };
          }
        },

      ]
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
      path: '/adminOrders',
      name: 'adminOrders',
      component: () => import('../views/AdminOrders.vue')
    },
    {
      path: '/adminBlog',
      name: 'adminBlog',
      component: () => import('../views/AdminBlog.vue')
    },
    {
      path: '/newArticle',
      name: 'newArticle',
      component: () => import('../views/NewArticle.vue')
    },
    {
      path: '/testUse',
      name: 'testUse',
      component: () => import('../views/TestUse.vue')
    },
  ]
});

export default router;