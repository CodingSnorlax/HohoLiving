import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/IndexView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'customerService',
        name: 'customerService',
        component: () => import('../views/front/CustomerService.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/front/OrderView.vue')
      },
      {
        path: 'checkorder/:orderId',
        name: 'checkorder',
        component: () => import('../views/front/CheckorderView.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/front/CheckoutView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/admin/DashboardView.vue'),
    children: [
      {
        path: 'adminProducts',
        component: () => import('../views/admin/AdminProducts.vue')
      },
      {
        path: 'adminOrders',
        component: () => import('../views/admin/AdminOrders.vue')
      },
      {
        path: 'adminCoupons',
        component: () => import('../views/admin/AdminCoupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  // 切換頁面時滾至頂部
  scrollBehavior () {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
