<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 17:11:34
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 17:11:43
 * @FilePath: \video-management\src\components\pageLayout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from "vue";

// defineProps({
//   msg: String,
// });

const count = ref(0);
</script>

<template>
  <div class="page-layout-container">
    <div class="page-head-container">
      <slot name="head"></slot>
    </div>
    <div class="page-layout-main">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
</style>
