import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Draft from "../views/Draft.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/draft",
    name: "Draft",
    component: Draft}
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
