import { createRouter, createWebHistory } from 'vue-router'

const stepCount = 6

const steps = Array.from({ length: stepCount }, (_, i) => {
  const n = i + 1
  return {
    path: `/${n}`,
    name: `step${n}`,
    component: () => import(`@/views/Step${n}View.vue`),
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/1',
    },
    ...steps,
  ],
})

export default router
