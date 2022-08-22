<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 15:10:37
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 15:10:44
 * @FilePath: \video-management\src\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-config-provider :locale="locale">
    <app />
  </el-config-provider>
</template>

<script setup>
import { computed } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

import App from "./App.vue";


const locale = computed(() => {
  if (window.localStorage.getItem("viteProjectLanguage") === "zh-cn") {
    return zhCn;
  }
  return undefined;
});
</script>
