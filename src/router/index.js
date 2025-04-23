import { createRouter, createWebHistory } from 'vue-router'
import { OneBoardView, DashboardView, ProductView, FilmView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OneBoardView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
      params: true,
    },
    {
      path: '/film/:id',
      name: 'film',
      component: FilmView,
      params: true,
    },
  ],
})

export default router
