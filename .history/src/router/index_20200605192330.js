import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navigation from '../views/Navigation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Navigation',
    component: Navigation,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      }
    ]
  },
  {
    path: '/Sign',
    name: 'Sign',
    component: () => import('../views/Sign')
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/Content')
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: () => import('../views/Sidebar')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
