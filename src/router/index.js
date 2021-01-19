import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Login",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    //这个就是错误路由匹配， vue规定这个必须放在最下面，它必须将上面的路由全找一遍，找不到才用当前这个
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  console.log(token);
  if (token) {
    next();
  } else {
    //没有登录，去跳转登录页
    if (to.path === "/Login" || to.path === "/Register") {
      next();
    } else {
      next({
        path: "/Login",
      });
    }
  }
});

export default router;
