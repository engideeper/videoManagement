/*
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-16 17:32:10
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-22 14:54:17
 * @FilePath: \video-management\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // global css
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/var.scss";`,
      },
    },
  },
  // server config
  server: {
    port: 3000,
    open: false,
    cors: true,
    hmr: true,
    // https: false,
    // 代理跨域（mock 不需要配置，这里只是个事列）
    // proxy: {
    //   "/api": {
    //     // target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0", // fastmock
    //     target: "https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e", // easymock
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, "")
    //   }
    // }
  },
  resolve: {
    extensions: [".vue", ".js", ".less"],
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  // build configure
  build: {
    outDir: "dist",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
