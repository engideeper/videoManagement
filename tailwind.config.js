/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-24 16:18:10
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-24 16:28:20
 * @FilePath: \video-management\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'axtlive': '#f40',
      },
    },
  },
  plugins: [],
}