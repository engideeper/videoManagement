import router from "./index.js";
import { getToken } from "@/utils/auth";
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const token = getToken();
  // 已登录
  if (token) {
    // const hasGetUserInfo = store.getters.name;
    // if (hasGetUserInfo) {
    //   next();
    // } else {
    //   try {
    //     // get user info
    //     await store.dispatch("user/getInfo");

    //     next();
    //   } catch (error) {
    //     // remove token and go to login page to re-login
    //     await store.dispatch("user/resetToken");
    //     Message.error(error || "Has Error");
    //     next(`/login?redirect=${to.path}`);
    //     NProgress.done();
    //   }
    // }
    next();
    // next();
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);

    }
  }
});

// router.afterEach(() => {
//   NProgress.done();
// });
