/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 14:59:16
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 14:59:41
 * @FilePath: \video-management\src\stores\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      device: "desktop",
      sideBar: {
        opened: Cookies.get("sidebarStatus")
          ? !!+Cookies.get("sidebarStatus")
          : true,
        withoutAnimation: false,
      },
    };
  },
  actions: {
    // 窗口大小切换 -> 设备切换
    toggleDevice(payload) {
      this.device = payload;
    },
    // 关闭侧边栏
    closeSideBar(payload) {
      Cookies.set("sidebarStatus", 0);
      this.sideBar.opened = false;
      this.sideBar.withoutAnimation = payload.withoutAnimation;
    },
    // 切换侧边栏
    toggleSideBar() {
      this.sideBar.opened = !this.sideBar.opened;
      this.sideBar.withoutAnimation = false;
      if (this.sideBar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
    },
  },
});
