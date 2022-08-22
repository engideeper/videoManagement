<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 10:41:25
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-22 14:12:39
 * @FilePath: \video-management\src\Layout\Header\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header">
    <div class="header-lf flx-center">
      <CollapseIcon></CollapseIcon>
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="header-ri flx-center">
      <span class="username">Austen</span>
      <Avatar></Avatar> 
    </div>
  </div>
</template>

<script setup>
import CollapseIcon from "./components/CollapseIcon";
import Breadcrumb from "./components/Breadcrumb";
import Avatar from "./components/Avatar";
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
