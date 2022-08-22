<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-16 17:32:10
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 15:09:16
 * @FilePath: \video-management\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount, watch } from "vue";
import { useAppStore } from "@/stores/app";

const WIDTH = 992; // refer to Bootstrap's responsive design
const appStore = useAppStore();

onMounted(() => {
  console.log("onMountedonMountedonMountedonMounted");
});

const deviceIsMobile = () => {
  const rect = document.body.getBoundingClientRect();
  return rect.width - 1 < WIDTH;
};

const resizeHandler = () => {
  if (!document.hidden) {
    const isMobile = deviceIsMobile();
    console.log('isMobile', isMobile);
    const device = isMobile ? "mobile" : "desktop";
    appStore.toggleDevice(device);
    if (isMobile) {
      appStore.closeSideBar({ withoutAnimation: true });
    }
  }
};

onBeforeMount(() => {
  window.addEventListener("resize", resizeHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler);
});

</script>

<template>
  <router-view></router-view>
</template>

<style></style>
