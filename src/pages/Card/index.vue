<template>
  <div>
    <div class="card-container">
      <div
        class="item-wrapper pt-6"
        @click="dialogVisible = true"
        v-for="(item, index) in list"
        :key="item"
      >
        <div :class="getClass(index)">
          video thumbnail 
          <!-- {{ item+1 }} -->
        </div>
        <div class=" flex-col text-left text_show text-xs">
          <div class="flex leading-tight text-xs justify-between">
            <span class="font-bold">错误代码 DMU0002412</span>   
            <el-button type="success" size="small" >Edit</el-button>
          </div>        
          <div class="flex leading-tight truncate ... text-xs justify-between" >
            <span class="font-bold">标签 DMU|仪器|故障|重置|</span> 
           <el-button id="del_btn" size="small" type="danger" >Delete </el-button>
          </div>
          <!-- <div class="flex leading-tight text-xs">
            <i class="font-bold">上传日期</i> 2022-08-24
          </div> -->
        </div>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="" custom-class="card-dialog">
      <el-image :src="src">
        <template #placeholder>
          <div class="image-slot">Loading<span class="dot">...</span></div>
        </template>
      </el-image>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
const src =
  "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg";
const list = reactive([]);
let dialogVisible = ref(false);

onMounted(() => {
  for (let i = 0; i < 30; i++) {
    list.push(i);
  }
});

const counter = useCounterStore();

const handleAdd = () => {
  // counter.count++;
  counter.increment();
};

const handleMin = () => {
  counter.count--;
};

const getClass = (index) => {
  const classes = ["card-item"];
  const key = Math.random();
  if (key < 0.1) {
    classes.push("item-0");
  } else if (key < 0.25) {
    classes.push("item-1");
  } else if (key < 0.45) {
    classes.push("item-2");
  } else if (key < 0.65) {
    classes.push("item-3");
  } else if (key < 0.85) {
    classes.push("item-4");
  } else if (key < 1) {
    classes.push("item-5");
  }
  return classes;
};

const handleOpenDialog = () => {
  dialogVisible = true;
};
</script>

<style scoped>
.card-container {
  width: 100%;
  background-color: #fff;
  justify-content: space-around;
  display: grid;
  /* grid-gap: 20px 20px; */
  grid-template-columns: repeat(auto-fill, 300px);
}

.item-wrapper {
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
}

.text_show{
  width:260px;
}
.card-item {
  border-radius: 8px;
  width: 260px;
  height: 180px;
  position: relative;
  text-align: center;
  line-height: 150px;
  transition: all 0.1s linear;
  --tw-gradient-to: #06b6d4;
  --tw-gradient-from: #4ade80;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(74 222 128/0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.card-item.item-0 {
  --tw-gradient-to: #db2777;
  --tw-gradient-from: #fb923c;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(251 146 60/0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.card-item.item-1 {
  --tw-gradient-to: #6366f1;
  --tw-gradient-from: #a855f7;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(168 85 247/0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.card-item.item-2 {
  --tw-gradient-to: #0ea5e9;
  --tw-gradient-from: #22d3ee;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(34 211 238/0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.card-item.item-3 {
  --tw-gradient-to: #06b6d4;
  --tw-gradient-from: #4ade80;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(74 222 128/0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.card-item.item-4 {
  --tw-gradient-to: #2563eb;
  --tw-gradient-from: #38bdf8;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(56 189 248/0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.card-item.item-5 {
  --tw-gradient-to: #f43f5e;
  --tw-gradient-from: #ec4899;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgb(236 72 153/0));
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

/* .card-item:hover {
  height: 200px;
  width: 300px;
} */
</style>

<style>
.card-dialog .el-dialog__header {
  padding: 0;
}
</style>
