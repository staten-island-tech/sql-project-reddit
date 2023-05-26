import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/register.vue')
  },
  {
    name: 'EmailConfirmation',
    path: '/email-confirmation',
    component: () => import('@/pages/EmailConfirmation.vue')
  },
  {
    name: 'Me',
    path: '/me',
    component: () => import('@/pages/Me.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/Login.vue')
  },
  {
    name: 'ForgotPassword',
    path: '/forgotPassword',
    component: () => import('@/pages/ForgotPassword.vue')
  },
  {
    name: 'Logout',
    path: '/logout',
    beforeEnter: () => {
      // do logout here
      return { name: 'Home' }
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
