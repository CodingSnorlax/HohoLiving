import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/IndexView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/customerService',
        name: 'customerService',
        component: () => import('../views/CustomerService.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsView.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/ProductView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
