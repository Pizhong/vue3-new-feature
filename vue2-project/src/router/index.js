/*
 * @Author: your name
 * @Date: 2021-08-14 10:56:55
 * @LastEditTime: 2021-08-14 15:15:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_new_features_demo\vue2-project\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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
]

const router = new VueRouter({
  routes
})

export default router
