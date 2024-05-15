import { createRouter, createWebHistory } from 'vue-router';

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
      path: '/userProductInfo/:id',
      name: 'userProductInfo',
      component: () => import('../views/UserProductInfo.vue'),
      props: (route) => {
        return {
          id: route.params.id
        };
      }
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
      path: '/userOrder',
      name: 'userOrder',
      component: () => import('../views/UserOrder.vue'),
    },
    {
      path: '/userPayment/:id',
      name: 'userPayment',
      component: () => import('../views/UserPayment.vue'),
      props: (route) => {
        return {
          id: route.params.id,
        };
      }
      
    },
    {
      path: '/userOrderResult',
      name: 'userOrderResult',
      component: () => import('../views/UserOrderResult.vue'),
      
    },
    {
      path: '/userBlog',
      name: 'userBlog',
      component: () => import('../views/UserBlog.vue'),
    },
    {
      path: '/userArticle/:id',
      name: 'userArticle',
      component: () => import('../views/UserArticle.vue'),
      props: (route) => {
        return {
          id: route.params.id,
        };
      }
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
      path: '/adminCoupon',
      name: 'adminCoupon',
      component: () => import('../views/AdminCoupon.vue')
    },
    {
      path: '/adminBlog',
      name: 'adminBlog',
      component: () => import('../views/AdminBlog.vue')
    },
    {
      path: '/adviseArticle/:id',
      name: 'adviseArticle',
      component: () => import('../views/AdviseArticle.vue'),
      props: (route) => {
        return {
          id: route.params.id,
        };
      }
    },
    {
      path: '/newArticle',
      name: 'newArticle',
      component: () => import('../views/NewArticle.vue')
    },
  ]
});

export default router;