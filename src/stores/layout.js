/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 14:59:53
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 15:00:03
 * @FilePath: \video-management\src\stores\layout.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useLayoutStore = defineStore("layoutStore", {
  state: () => {
    return {
      showMenu: true,
      showHeader: true,
    };
  },
  actions: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleShowHeader() {
      this.showHeader = !this.showHeader;
    }
  },
});
