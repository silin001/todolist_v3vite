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
        path: '/index/ScriptSetup',
        name: 'ScriptSetup',
        component: () => import('../views/pages/ApisGet/ScriptSetup.vue')
      },
      {
        path: '/index/RouterVuex',
        name: 'RouterVuex',
        component: () => import('../views/pages/ApisGet/RouterVuex.vue')
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
  history: createWebHashHistory(), // 模式
  routes,
  linkExactActiveClass: 'active' // 选中样式
})

export default router
