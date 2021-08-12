import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/index.vue'
// import Test from '../views/pages/Test/Test.vue'
// import TodoList from '../views/pages/TodoList/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: '/index/TodoList',
        name: 'TodoList',
        component: () => import('../views/pages/TodoList/index.vue')
      },
      {
        path: '/index/Test',
        name: 'Test',
        component: () => import('../views/pages/Test/Test.vue')
      },
      {
        path: '/index/MockTest',
        name: 'MockTest',
        component: () => import('../views/pages/MockTest/MockTest.vue')
      },
      {
        path: '/index/AdminProject',
        name: 'AdminProject',
        component: () => import('../views/pages/AdminProject/AdminProject.vue')
      },

      // {
      //   path: '/done',
      //   name: 'done',
      //   component: () => import('../components/Done.vue')
      // }
    ]
  },
  // admin
  {
    path: '/adminLogin',
    name: 'adminLogin',
    component: () => import('../views/pages/AdminProject/login/login.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
