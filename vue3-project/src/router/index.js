/*
 * @Author: your name
 * @Date: 2021-08-14 12:14:14
 * @LastEditTime: 2021-08-15 17:40:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue3-project\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import(/* webpackChunkName: "index" */ '../views/ref.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import(/* webpackChunkName: "index" */ '../views/slot.vue')
  },
  {
    path: '/responsive',
    name: 'responsive',
    component: () => import(/* webpackChunkName: "index" */ '../views/responsive.vue')
  },
  {
    path: '/compositionApi',
    name: 'compositionApi',
    component: () => import(/* webpackChunkName: "index" */ '../views/compositionApi.vue')
  },
  {
    path: '/setUp',
    name: 'setUp',
    component: () => import(/* webpackChunkName: "index" */ '../views/setUp.vue')
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: () => import(/* webpackChunkName: "index" */ '../views/lifeCycle.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import(/* webpackChunkName: "index" */ '../views/computed.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "index" */ '../views/watch.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
