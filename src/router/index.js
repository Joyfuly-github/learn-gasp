import DefaultView from '@/views/DefaultView.vue'
import PinView from '@/views/PinView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/default',
    },
    {
      path: '/default',
      name: 'default',
      component: DefaultView,
    },
    {
      path: '/pin',
      name: 'pin',
      component: PinView,
    },
  ],
})

export default router
