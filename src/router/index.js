import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import Category from "../views/Category.vue";
import User from "../views/User.vue";
import Detail from "../views/Detail.vue";
import Product from "../views/Product.vue"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      index: 1
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product-list" */ '../views/Product.vue'),
    meta: {
      index: 1
    }
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

// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('token');
//   console.log(token);
//   if (token) {
//     next();
//   } else {
//     //没有登录，去跳转登录页
//     if (to.path === "/Login" || to.path === "/Register") {
//       next();
//     } else {
//       next({
//         path: "/Login",
//       });
//     }
//   }
// });

export default router;
