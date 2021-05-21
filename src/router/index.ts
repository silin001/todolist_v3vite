import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: '/add',
    //     name: 'add',
    //     component: () => import('../components/Add.vue')
    //   },
    //   {
    //     path: '/delete',
    //     name: 'delete',
    //     component: () => import('../components/Delete.vue')
    //   },
    //   {
    //     path: '/done',
    //     name: 'done',
    //     component: () => import('../components/Done.vue')
    //   }
    // ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
