import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/index.vue'
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
        path: '/index/ScriptSetup',
        name: 'ScriptSetup',
        component: () => import('../views/pages/ApisGet/ScriptSetup.vue')
      },
      {
        path: '/index/RouterVuex',
        name: 'RouterVuex',
        component: () => import('../views/pages/ApisGet/RouterVuex.vue')
      },
      {
        path: '/index/pinia',
        name: 'Pinia',
        component: () => import('../views/pages/Pinia/index.vue')
      },
      {
        path: '/index/httpTest',
        name: 'httpTest',
        component: () => import('../views/pages/httpTest/index.vue')
      },
      {
        path: '/index/Reptile',
        name: 'Reptile',
        component: () => import('../views/pages/Reptile/index.vue')
      },
      // {
      //   path: '/done',
      //   name: 'done',
      //   component: () => import('../components/Done.vue')
      // }
    ]
  },
  // 全局配置404页面
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/pages/404.vue')
  }

]

// 工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes,
  linkExactActiveClass: 'active', // 选中样式
  // 记录页面位置 之前写法 x,y 变为 top left
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(savedPosition)
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { top: 400 }
  //   }
  // }
})

export default router
