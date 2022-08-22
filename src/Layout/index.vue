<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 10:39:37
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-18 15:35:27
 * @FilePath: \video-management\src\Layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-container>
    <el-aside>
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <section class="main-box">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive :include="[]">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
        </section>
      </el-main>
      <el-footer>
        <!-- <Footer></Footer> -->
      </el-footer>
    </el-container>
    <el-backtop target=".el-main" :right="20" :bottom="20" />
  </el-container>
</template>

<script setup>
import Menu from "./Menu";
import Header from "./Header";

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
