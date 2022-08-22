/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 15:56:05
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 15:56:26
 * @FilePath: \video-management\src\stores\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { getToken, setToken, removeToken } from "@/utils/auth";

export const useLoginStore = defineStore("loginStore", {
  state: () => {
    return { token: "" };
  },
  actions: {
    login(payload) {
      const { userName, password } = payload;
      return new Promise((resolve, reject) => {
        const token = `Austen-${userName}`;
        this.token = token;
        setToken(token);
        resolve({ status: "success" });
      });
    },
  },
});
