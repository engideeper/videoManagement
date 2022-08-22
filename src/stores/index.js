/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 16:43:23
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 16:43:32
 * @FilePath: \video-management\src\stores\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore, createPinia } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalState",
	// state: 返回对象的函数
	state: () => ({
		// token
		token: "",
		// userInfo
		userInfo: "",
		// element组件大小
		assemblySize: "default",
		// language
		language: "",
		// themeConfig
		themeConfig: {
			// 默认 primary 主题颜色
			primary: "#409eff",
			// 是否开启深色模式
			isDark: false
		}
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token) {
			this.token = token;
		},
		// setUserInfo
		setUserInfo(userInfo) {
			this.userInfo = userInfo;
		},
		// setAssemblySizeSize
		setAssemblySizeSize(assemblySize) {
			this.assemblySize = assemblySize;
		},
		// updateLanguage
		updateLanguage(language) {
			this.language = language;
		},
		// setThemeConfig
		setThemeConfig(themeConfig) {
			this.themeConfig = themeConfig;
		}
	},
	persist: piniaPersistConfig("GlobalState")
});
