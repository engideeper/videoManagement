<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 10:44:21
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-22 16:03:17
 * @FilePath: \video-management\src\Layout\Header\components\Avatar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown trigger="click">
    <div class="avatar">
      <img src="https://file.axtlive.com/files/image/avatar1655188232407.jpg" alt="avatar" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="openPersonal">个人中心</el-dropdown-item>
        <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- infoDialog -->
  <InfoDialog ref="infoRef"></InfoDialog>
  <!-- passwordDialog -->
  <PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script setup>
import { ref } from "vue";
import InfoDialog from "./InfoDialog";
import PasswordDialog from "./PasswordDialog";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { GlobalStore } from "@/stores";

const router = useRouter();
const globalStore = GlobalStore();

// logout
const logout = () => {
  ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    router.push({ name: "login" });
    globalStore.setToken("");
    ElMessage({
      type: "success",
      message: "退出登录成功！",
    });
  });
};

const openPersonal = () => {
  router.push({ path: "/404" });
};

const infoRef = ref(null);
const passwordRef = ref(null);
// openDialog
const openDialog = (refName) => {
  if (refName == "infoRef") return infoRef.value?.openDialog();
  passwordRef.value?.openDialog();
};
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
