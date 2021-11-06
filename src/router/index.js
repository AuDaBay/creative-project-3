import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import Dates from '../views/Dates.vue'
import PostGrad from '../views/PostGrad.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
  },
  {
    path: '/dates',
    name: 'Dates',
    component: Dates,
  },
  {
    path: '/postgrad',
    name: 'PostGrad',
    component: PostGrad,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
