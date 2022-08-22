<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 16:56:15
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-22 14:51:10
 * @FilePath: \video-management\src\Layout\Header\components\InfoDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<el-dialog v-model="dialogVisible" title="1111" width="500px" draggable>
		<span>This is userInfo</span>
	</el-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogVisible = ref(false);

// openDialog
const openDialog = () => {
	dialogVisible.value = true;
};

defineExpose({
	openDialog
});
</script>
