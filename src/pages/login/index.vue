<template>
  <div class="login-container">
    <div v-if="hasLogin">
      <h1 class="has-logined">您已登陆 无需重复登陆</h1>
      <a class="has-logined" href="/">前往工作台</a>
      <h1 class="has-logined">切换用户</h1>
    </div>
    <el-form
      v-else
      ref="ruleFormRef"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">欢迎登录</h3>
      </div>

      <el-form-item prop="userName" class="login-input-field">
        <span class="svg-container">
          <el-icon><Avatar /></el-icon>
        </span>
        <el-input
          v-model="loginForm.userName"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="off"
        />
      </el-form-item>

      <el-form-item prop="password" class="login-input-field">
        <span class="svg-container">
          <el-icon><Lock /></el-icon>
        </span>
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="密码"
          name="password"
          tabindex="2"
          show-password
          auto-complete="off"
          @keyup.enter.native="handleLogin(ruleFormRef)"
        />
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        class="login-btn"
        @click.native.prevent="handleLogin(ruleFormRef)"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { Avatar, Lock } from "@element-plus/icons-vue";
import { useLoginStore } from "@/stores/login";
import { getToken } from "@/utils/auth";

const hasLogin = ref(getToken());
const router = useRouter();
const loginStore = useLoginStore();
const ruleFormRef = ref();
const loginForm = reactive({
  userName: "admin",
  password: "admin",
});

const validateUserName = (rule, value, callback) => {
  if (!value) {
    callback(new Error("账号不能为空"));
  } else {
    callback();
  }
};

const validatePassword = (rule, value, callback) => {
  if (!value) {
    callback(new Error("密码不能为空"));
  } else {
    callback();
  }
};

const state = reactive({
  redirect: undefined,
});

const loginRules = reactive({
  userName: [{ validator: validateUserName, trigger: "blur", required: false }],
  password: [{ validator: validatePassword, trigger: "blur", required: false }],
});

const handleLogin = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      loginStore.login(loginForm).then((res) => {
        if (res.status === "success") {
          router.push({ path: state.redirect || "/" });
        }
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
// watch: {
//   $route: {
//     handler: function (route) {
//       this.redirect = route.query && route.query.redirect;
//     },
//     immediate: true,
//   },
// },
</script>

<style>
.login-input-field .el-input__wrapper {
  width: 100%;
  background: transparent;
  box-shadow: none;
  padding: 0;
}

.el-form-item.is-error {
  box-shadow: 0 0 0 1px var(--el-color-danger) inset;
}

.el-form-item.is-error .el-input__wrapper {
  box-shadow: none;
}

.login-input-field .el-input__wrapper input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #fff;
  height: 47px;
  caret-color: #fff;
}
</style>

<style scoped>
.login-container {
  --bg: #283443;
  min-height: 100%;
  width: 100%;
  background-color: var(--bg);
  overflow: hidden;
}

.has-logined {
  color: #fff;
  text-align: center;
  margin-top: 20px;
}

.el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}

.login-input-field input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #fff;
  height: 47px;
  caret-color: #fff;
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

.title {
  --light_gray: #fff;
  font-size: 26px;
  color: var(--light_gray);
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}

.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
  box-sizing: border-box;
  font-size: 16px;
}
.login-btn {
  width: 100%;
  margin-bottom: 30px;
  height: 40px;
}
</style>
