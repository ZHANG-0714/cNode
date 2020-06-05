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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Sign',
    name: 'Sign',
    component: () => import('../views/Sign')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
