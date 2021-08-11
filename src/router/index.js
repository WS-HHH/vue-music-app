import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import('@/views/Recommend.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: () => import('@/views/Singer.vue')
  },
  {
    path: '/topList',
    name: 'TopList',
    component: () => import('@/views/TopList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
