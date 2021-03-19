import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Nominate from '../views/Nominate.vue'
import Books from '../views/Books.vue'
import ToBuy from '../views/ToBuy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nominate',
    name: 'Nominate',
    component: Nominate
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/tobuylist',
    name: 'ToBuyList',
    component: ToBuy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
