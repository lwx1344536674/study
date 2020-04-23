// import Vue from 'vue';
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
// // 挂载路由导航守卫
// const routes = new VueRouter(
//   {
//     path: '/',
//     redirect: '/login',
//   },
//   {
//     path: '/login',
//     component: () => import('../components/login/login.vue'),
//   },
//   {
//     path: '/home',
//     component: () => import('../components/home/home.vue'),
//   }
// );
// routes.beforeEach((to, form, next) => {
//
//   if (to.path === '/login') return next();
//   const tokenStr = window.sessionStorage.getItem('token');
//   if (!tokenStr) return next('/login');
//   next();
// });
// export default routes;

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('../components/login/login.vue'),
    },
    {
      path: '/home',
      component: () => import('../components/home/home.vue'),
    },
  ],
});
router.beforeEach((to, form, next) => {
  // to将要访问的路径
  //   // form 从哪个路径跳转而来
  //   // next 表示放行
  //   // next("/路径") 表示强制跳转
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
});

export default router;
