<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 15:53:41
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 15:55:04
 * @FilePath: \video-management\src\Layout\Menu\components\Subltem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu
      v-if="subItem.children && subItem.children.length > 0"
      :index="subItem.path"
    >
      <template #title>
        <el-icon>
          <component :is="subItem.icon"></component>
        </el-icon>
        <span>{{ subItem.title }}</span>
      </template>
      <SubItem :menuList="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path">
      <el-icon>
        <component :is="subItem.icon"></component>
      </el-icon>
      <template v-if="!subItem.isLink" #title>
        <span>{{ subItem.title }}</span>
      </template>
      <template v-else #title>
        <a class="href" :href="subItem.isLink" target="_blank">{{
          subItem.title
        }}</a>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup>
defineProps({
  menuList: {
    type: Array,
  },
});
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
