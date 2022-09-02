import Vue from 'vue'
import VueRouter from 'vue-router'

const Rank30 = () => import('@/views/rank/Rank_30')
const Rank60 = () => import('@/views/rank/Rank_60')
const Rank90 = () => import('@/views/rank/Rank_90')
const Rank120 = () => import('@/views/rank/Rank_120')
const Rank150 = () => import('@/views/rank/Rank_150')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/rank30'
  },
  {
    path: '/rank30',
    component: Rank30
  },
  {
    path: '/rank60',
    component: Rank60
  },
  {
    path: '/rank90',
    component: Rank90
  },
  {
    path: '/rank120',
    component: Rank120
  },
  {
    path: '/rank150',
    component: Rank150
  }

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
