import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'Home', path: '/', component: HomeView },
    { name: 'About', path: '/about', component: About }
  ]
})

export default router
