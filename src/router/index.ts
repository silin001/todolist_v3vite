import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import index from "../views/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: index,
    redirect: "/TodoList",
    children: [
      {
        path: "/TodoList",
        name: "TodoList",
        component: () => import("../views/pages/TodoList/index.vue"),
      },
      {
        path: "/index/Test",
        name: "Test",
        component: () => import("../views/pages/Test/Test.vue"),
      },
      {
        path: "/index/ScriptSetup",
        name: "ScriptSetup",
        component: () => import("../views/pages/ApisGet/ScriptSetup.vue"),
      },
      {
        path: "/index/RouterVuex",
        name: "RouterVuex",
        component: () => import("../views/pages/ApisGet/RouterVuex.vue"),
      },

      {
        path: "/index/Reptile",
        name: "Reptile",
        component: () => import("../views/pages/Reptile/index.vue"),
      },
    ],
  },
];

// 工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes,
  linkExactActiveClass: "active",
});

export default router;
