import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About"),
    children: [
      {
        path: "profile",
        component: () => import("../views/test1")
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test1")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
