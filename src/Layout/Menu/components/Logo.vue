<template>
  <div class="logo flx-center">
    <img src="https://vitejs.cn/logo.svg" alt="logo" />
    <!-- <span class="logo">LOGO</span> -->
    <span v-show="!isCollapse">VMS</span>
  </div>
</template>

<script setup>
defineProps({
  isCollapse: {
    type: Boolean,
  },
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
