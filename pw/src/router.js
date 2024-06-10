import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Lista from './views/lista'
import NotFound1, { NotFound } from './views/not-found'
import Home from './views/home'
import Museu from './views/museu'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Lista',
      path: '/lista',
      component: Lista,
    },
    {
      name: 'Not-Found',
      path: '/not-found',
      component: NotFound1,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Museu',
      path: '/museu',
      component: Museu,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
