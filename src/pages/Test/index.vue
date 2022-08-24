<script setup>
import { ITEM_RENDER_EVT } from "element-plus/es/components/virtual-list/src/defaults";
import { forEach } from "lodash";
import { ref, reactive, computed, watch, toRefs, onMounted } from "vue";
import PageLayout from "../../components/pageLayout/index.vue";

// defineProps({
//   msg: String,
// });

const count = ref(0);
//约定：state=1的时候，是OK。其他都为2；
//约定：type =0 未选择 ；type=1 info;  type =2 warn; type =3 dengerous; type =4 fital;
//约定：isvalid =1 有效，0为无效。
// 相当于数据库的值
const staticData = [
  {
    id: 1,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 1,
    type: 1,
    isvalid: 1,
  },
  {
    id: 2,
    title: "fill",
    date: "2022-04-01",
    describe: "this is a book",
    state: 1,
    type: 1,
    isvalid: 1,
  },
  {
    id: 3,
    title: "fill",
    date: "2022-05-01",
    describe: "this is a book",
    state: 1,
    type: 1,
    isvalid: 1,
  },
  {
    id: 4,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 2,
    type: 2,
    isvalid: 1,
  },
  {
    id: 5,
    title: "fill",
    date: "2022-06-01",
    describe: "this is a book",
    state: 2,
    type: 1,
    isvalid: 1,
  },
  {
    id: 6,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 1,
    type: 1,
    isvalid: 1,
  },
  {
    id: 7,
    title: "fill",
    date: "2022-06-01",
    describe: "this is a book",
    state: 2,
    type: 1,
    isvalid: 1,
  },
  {
    id: 8,
    title: "fill",
    date: "2022-06-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 9,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 2,
    type: 2,
    isvalid: 1,
  },
  {
    id: 10,
    title: "fill",
    date: "2022-04-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 11,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 12,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 13,
    title: "fill",
    date: "2022-07-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 14,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 15,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 2,
    type: 2,
    isvalid: 1,
  },
  {
    id: 16,
    title: "fill",
    date: "2022-04-01",
    describe: "this is a book",
    state: 2,
    type: 2,
    isvalid: 1,
  },
  {
    id: 17,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 18,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 1,
    type: 2,
    isvalid: 1,
  },
  {
    id: 19,
    title: "fill",
    date: "2022-05-01",
    describe: "this is a book",
    state: 2,
    type: 3,
    isvalid: 1,
  },
  {
    id: 20,
    title: "fill",
    date: "2022-10-01",
    describe: "this is a book",
    state: 2,
    type: 3,
    isvalid: 1,
  },
  {
    id: 21,
    title: "fill",
    date: "2022-06-01",
    describe: "this is a book",
    state: 1,
    type: 4,
    isvalid: 1,
  },
];

const options = [
  {
    value: 1,
    label: "info",
  },
  {
    value: 2,
    label: "warn",
  },
  {
    value: 3,
    label: "dengerous",
  },
  {
    value: 4,
    label: "fital",
  },
];
const state = reactive({
  listData: staticData,
  pageSize: 5,
  currentPage: 1,
  checked: false,
  type_select: "",
  date_time_select: [
    // new Date(2022, 01, 01, 01, 10),
    // new Date(2022, 01, 01, 10, 10),
  ],
  total: staticData.length,
});
const pageSizes = [5, 10, 15, 20];
const obj = { ...toRefs(state) };
const {
  listData,
  pageSize,
  currentPage,
  checked,
  type_select,
  date_time_select,
  total,
} = obj;

const arr2 = ref([]);

// 第一步操作 点击按钮查询
const handelSearch = async () => {
  currentPage.value = 1;

  // getData().then(res => {
  //   console.log(res)
  // })
  const queryParams = {
    checked: checked.value,
    type_select: type_select.value,
  };
  const [list, listTotal] = await getData(queryParams);
  arr2.value = list;
  total.value = listTotal;
};

// 第二部 调用后端接口过滤
// 过滤器 根据条件过滤的一个方法
const getData = (params) => {
  console.log("调用后端getData接口");
  const { checked, type_select } = params;
  const data = listData.value.filter((item) => item.isvalid == 1);
  return new Promise((resolve) => {
    if (!checked && !type_select) {
      setTimeout(() => {
        resolve([data, data.length]);
      }, 1000);
    } else {
      //否则，就是有筛选条件，那就遍历呗
      const result = data
        .filter((item) => {
          return checked ? item.state === 1 : item;
        })
        .filter((res) => {
          return type_select ? res.type === type_select : res;
        });
    }
  });
};

// 第三部 拿到后端给的数据 前端进行分页过滤
// 前端分页过滤器
const arr = computed(() => {
  const curIdx = (currentPage.value - 1) * pageSize.value;
  return arr2.value.slice(curIdx, curIdx + pageSize.value);
});

//对数据行操作的业务逻辑
const handleDelete = (row_index, row) => {
  const idArr = listData.value.map((item) => item.id);
  const delIdx = idArr.findIndex((item) => item === row.id);
  const tempArr = [listData.value];
  tempArr[delIdx].isvalid = 0;
  listData.value = tempArr;

  //此处的删除，对数据做逻辑删除，不做物理删除。
  //两步操作，把isvalid=0，即可。
  //获取listData中的id作为数组 idArr
  // let idArr = listData.value.map((item) => {
  //   return item.id;
  // });

  // // 获取id为‘row.id’的这组数据在listData的下标值
  // const index = idArr.indexOf(row.id);
  // // 现在可以根据获得的index索引  对原数组进行修改、删除
  // // 在listData中修改这个数据的有效值
  // listData.value[index].isvalid = 0;
  // // console.log(listData[index]);
  // return listData;
};

watch(listData, (newVal, oldVal) => {
    handelSearch();
});

watch(date_time_select, (newValue, oldValue) => {
  // console.log(newValue, oldValue);
});

//弹出层编辑表单
const dialogVisible = ref(false);
//form表单
const form = reactive({
  title: "",
  date: [],
  describe: "",
  state: "",
  type: "",
  isvalid: "",
});
onMounted(() => {
  handelSearch();
});
</script>

<template>
  <page-layout>
    <template #head>
      <div class="head-content">
        <div class="route-map">数据管理</div>
      </div>
    </template>
    <div class="filter-data">
      <div class="date-time">
        <span class="date-span">日期时间选择范围</span>
        <el-date-picker
          v-model="date_time_select"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
      </div>
      <div class="type-filter">
        <span class="type-span">类型选择</span>
        <el-select
          v-model="type_select"
          class="m-2"
          placeholder="请选择类型"
          size="small"
          clearable
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="state-filter">
        <el-checkbox v-model="checked" label="状态OK" size="large" />
      </div>
      <div class="btn-search">
        <el-button type="success" size="default" @click="handelSearch"
          >查询</el-button
        >
      </div>
    </div>
    <div class="info-list">
      <el-table
        ref="multipleTableRef"
        :data="arr"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column property="id" label="id" width="120" />
        <el-table-column property="title" label="title" width="120" />

        <el-table-column property="date" label="date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          property="describe"
          label="describe"
          show-overflow-tooltip
        />
        <el-table-column property="state" label="state" show-overflow-tooltip />
        <el-table-column property="type" label="type" show-overflow-tooltip />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button type="success" size="small" @click="dialogVisible = true"
              >Edit</el-button
            >
            <el-button
              id="del_btn"
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页部分 -->
    <div class="pagination">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :background="true"
        :page-sizes="pageSizes"
        :total="total"
        layout="total, sizes, prev, pager, next, ->, jumper"
      />
    </div>
    <!-- 编辑表单内容 -->
    <el-dialog
      v-model="dialogVisible"
      title="编辑内容"
      width="30%"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="title">
          <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select
            v-model="form.region"
            placeholder="please select your zone"
          >
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-col>
          <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
          </el-col>
          <el-col :span="11">
            <el-time-picker
              v-model="form.date2"
              placeholder="Pick a time"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery">
          <el-switch v-model="form.delivery" />
        </el-form-item>
        <el-form-item label="Activity type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </page-layout>
</template>

<style scoped>
a {
  color: #42b983;
}

.hello {
  color: red;
}

.filter-data {
  widows: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.date-span {
  font-weight: bold;
  margin-right: 20px;
}

.date-time {
  margin-right: 20px;
}

.type-span {
  font-weight: bold;
  margin-right: 20px;
}

.type-filter {
  margin-right: 20px;
}

.state-filter {
  margin-right: 20px;
}
</style>
