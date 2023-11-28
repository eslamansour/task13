import Vue from 'vue'
import VueRouter from 'vue-router'

// pages
import NotFound from '../views/NotFound.vue'
import LandingPage from '../views/LandingPage.vue'
import Card from '../views/Card.vue'

import routeAuth from "../utils/RoutingHelper.js"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingPage
  },
  {
    path: '/card',
    name: 'card',
    component: Card
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
