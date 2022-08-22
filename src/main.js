/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-16 17:32:10
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 15:40:19
 * @FilePath: \video-management\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Index from "./index.vue";
import router from "./router";

import "./router/permission";
import "./index.css";

const app = createApp(Index)

// 注册element Icons组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

// 创建 pinia 并 使用 piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router).use(pinia).mount('#app')
