import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/hover',
      name: 'hover',
      component: () => import('../views/HoverView.vue')
    },
    {
      path: '/headerAni',
      name: 'headerAni',
      component: () => import('../views/HeaderAni.vue')
    },
    {
      path: '/refresh',
      name: 'refresh',
      component: () => import('../views/Refresh.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/Comments.vue')
    },
    {
      path: '/reLationEchart',
      name: 'reLationEchart',
      component: () => import('../views/ReLationEchart.vue')
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: () => import('../views/Canvas.vue')
    },
    {
      path: '/testVantSize',
      name: 'testVantSize',
      component: () => import('../views/testVantSize.vue')
    }
  ]
})

export default router
