/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 16:46:20
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 16:46:28
 * @FilePath: \video-management\src\config\piniaPersist.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// pinia持久化参数配置
const piniaPersistConfig = (key) => {
	const persist = {
		key,
		storage: window.localStorage
		// storage: window.sessionStorage,
	};
	return persist;
};

export default piniaPersistConfig;
