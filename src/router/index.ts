import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import RatingView from '../views/RatingView.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import ProfileView from '../views/ProfileView.vue'
import SignOut from '../views/SignOut.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true || false }
  },
  {
    path: '/game',
    name: 'game',
    component: GameView,
    meta: { requiresAuth: true }
  },
  {
    path: '/rating',
    name: 'rating',
    component: RatingView,
    meta: { requiresAuth: true || false }
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
    meta: { requiresAuth: false }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn,
    meta: { requiresAuth: false }
  },
  {
    path: '/sign-out',
    name: 'sign-out',
    component: SignOut,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
