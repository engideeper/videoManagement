<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 10:52:33
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 10:52:52
 * @FilePath: \video-management\src\Layout\Header\components\CollapseIcon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-icon class="collapse-icon" @click="handleTrigger">
		<component :is="!sideBar.opened ? 'Expand' : 'Fold'"></component>
	</el-icon>
</template>

<script setup>
import { computed } from "vue";

import { useAppStore } from "@/stores/app";
import { useLayoutStore } from "@/stores/layout";
const appStore = useAppStore();
const layoutStore = useLayoutStore();
const sideBar = computed(() => {
  return appStore.sideBar;
});
const handleTrigger = () => {
  appStore.toggleSideBar();
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
