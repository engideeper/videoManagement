<!--
 * @Author: Austen austen.guo@tcsoft.net.cn
 * @Date: 2022-08-17 16:56:57
 * @LastEditors: Austen austen.guo@tcsoft.net.cn
 * @LastEditTime: 2022-08-22 15:11:58
 * @FilePath: \video-management\src\Layout\Header\components\PasswordDialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<el-dialog v-model="dialogVisible" title="2222" width="500px" draggable>
		<span>This is Password</span>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogVisible = false">取消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确认</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script setup>
import { ref } from "vue";
const dialogVisible = ref(false);

// openDialog
const openDialog = () => {
	dialogVisible.value = true;
};

///便于父组件调用子组件
defineExpose({
	openDialog
});
</script>
