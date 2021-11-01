import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "all",
    component: Home,
  },
  {
    path: "/all",
    name: "all",
    component: Home,
  },
  {
    path: "/active",
    name: "active",
    component: Home,
  },
  {
    path: "/done",
    name: "done",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
