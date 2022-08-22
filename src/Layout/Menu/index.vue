<template>
  <div
    class="menu"
    :style="{ width: !sideBar.opened ? '65px' : '220px' }"
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="Loading..."
    element-loading-svg-view-box="-10, -10, 50, 50"
    element-loading-background="rgba(122, 122, 122, 0.01)"
  >
    <Logo :isCollapse="!sideBar.opened"></Logo>
    <el-scrollbar>
      <el-menu
        :collapse="!sideBar.opened"
        :default-active="activeMenu"
        :router="true"
        :collapse-transition="false"
        :unique-opened="true"
        background-color="#191a20"
        text-color="#bdbdc0"
        active-text-color="#fff"
      >
        <SubItem :menuList="menuList"></SubItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  Expand,
  Fold,
} from "@element-plus/icons-vue";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import menuList from "@/router/routerData";

import Logo from "./components/Logo.vue";
import SubItem from "./components/SubItem.vue";
// import { MenuStore } from "@/store/modules/menu";
// import { AuthStore } from "@/store/modules/auth";
// import { getMenuList } from "@/api/modules/login";
// import { handleRouter } from "@/utils/util";

import { useAppStore } from "@/stores/app";
import { useLayoutStore } from "@/stores/layout";
const appStore = useAppStore();
const layoutStore = useLayoutStore();
const sideBar = computed(() => {
  return appStore.sideBar;
});



const isCollapse = false;
// const menuList = [];

const loading = ref(false);

const route = useRoute();
// const menuStore = MenuStore();
// const authStore = AuthStore();

// onMounted(async () => {
// 	// 获取菜单列表
// 	loading.value = true;
// 	try {
// 		const res = await getMenuList();
// 		if (!res.data) return;
// 		// 把路由菜单处理成一维数组（存储到 pinia 中）
// 		const dynamicRouter = handleRouter(res.data);
// 		authStore.setAuthRouter(dynamicRouter);
// 		menuStore.setMenuList(res.data);
// 	} finally {
// 		loading.value = false;
// 	}
// });

const activeMenu = computed(() => route.path);
// const isCollapse = computed((): boolean => menuStore.isCollapse);
// const menuList = computed((): Menu.MenuOptions[] => menuStore.menuList);

// aside 自适应
const screenWidth = ref(0);
const screenHeight = ref(0);
//监听窗口大小
const listeningWindow = () => {
  window.onresize = () => {
    return (() => {
      // screenWidth.value = document.body.clientWidth;
      // screenHeight.value = document.body.clientHeight;
      // if (isCollapse.value === false && screenWidth.value < 1200) menuStore.setCollapse();
      // if (isCollapse.value === true && screenWidth.value > 1200) menuStore.setCollapse();
    })();
  };
};
listeningWindow();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
