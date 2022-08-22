/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 10:27:48
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-22 16:20:54
 * @FilePath: \video-management\src\router\routerData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

        const data = [
            { icon: "home-filled", title: "首页", path: "/home" },
            { icon: "Management", title: "视频管理", path: "/test" },
            { icon: "Setting", title: "系统设置", path: "/setting" },
            {
              icon: "warning-filled",
              title: "错误页面",
              path: "/error",
              children: [
                { path: "/404", title: "404页面", icon: "menu" },
              ],
            },
          ];
          
          export default data;
          