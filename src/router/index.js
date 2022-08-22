/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 10:34:07
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-22 16:18:43
 * @FilePath: \video-management\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createWebHistory, createRouter } from "vue-router";
import { Layout } from "@/router/constant";

// 导入所有router
const metaRouters = import.meta.globEager("./modules/*.js");
// 处理路由
export const routerArray = Object.keys(metaRouters).map(
  (item) => metaRouters[item].default
);
const history = createWebHistory();

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/pages/home"),
      },
      {
        path: "/workspace",
        name: "workspace",
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "工作台",
          key: "workspace",
        },
        component:() => import("@/pages/workspace"),
      },
      {
        path: "/test",
        component:() => import("@/pages/test"),
        name: "dataManagement",
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "视频管理",
          key: "dataManagement",
        },
      },
      {
        path: "/setting",
        component:() => import("@/pages/setting"),
        name: "setting",
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: "系统设置",
          key: "setting",
        },
      },
    ],
  },
  ...routerArray.flat(Infinity),
  {
    path: "/login",
    name: "login",
    component:() => import("@/pages/login"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({ history, routes });

export default router;
