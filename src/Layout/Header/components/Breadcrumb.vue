<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 10:51:43
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-17 10:52:05
 * @FilePath: \video-management\src\Layout\Header\components\Breadcrumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<el-breadcrumb :separator-icon="ArrowRight">
		<transition-group name="breadcrumb" mode="out-in">
			<el-breadcrumb-item :to="{ path: '/' }" key="/home">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="item in matched" :key="item.path" :to="{ path: item.path }">
				{{ item.meta.title }}
			</el-breadcrumb-item>
		</transition-group>
	</el-breadcrumb>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";

const router = useRoute();

const matched = computed(() =>
  router.matched.filter(
    (item) => item.meta && item.meta.title && item.meta.title !== "首页"
  )
);
</script>
