import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/day-1',
    name: 'day-1',
    component: () => import('../views/day-1/day-1.vue')
  },
  {
    path: '/day-2',
    name: 'day-2',
    component: () => import('../views/day-2/day-2.vue')
  },
  {
    path: '/day-3',
    name: 'day-3',
    component: () => import('../views/day-3/day-3.vue')
  },
  {
    path: '/day-4',
    name: 'day-4',
    component: () => import('../views/day-4/day-4.vue')
  },
  {
    path: '/day-5',
    name: 'day-5',
    component: () => import('../views/day-5/day-5.vue')
  },
  {
    path: '/day-6',
    name: 'day-6',
    component: () => import('../views/day-6/day-6.vue')
  },
  {
    path: '/day-7',
    name: 'day-7',
    component: () => import('../views/day-7/day-7.vue'),
  },
  {
    path: '/day-7/goods/:id',
    name: 'goodsDetail',
    component: () => import('../views/day-7/goodsDetail.vue'),
    meta: {
      title: '商品詳細頁面'
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
