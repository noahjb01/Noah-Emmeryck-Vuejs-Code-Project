import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/details-artwork/:artworkId',
      name: 'details-artwork',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArtworkDetail.vue'),
    },
    {
      path: '/search/:search',
      name: 'search',
      component: () => import('../views/SearchArtworks.vue'),
    }
  ]
})

export default router
