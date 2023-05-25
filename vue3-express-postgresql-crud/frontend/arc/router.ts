import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/parrots",
    name: "parrots",
    component: () => import("./components/ParrotsList.vue"),
  },
  {
    path: "/parrots/:id",
    name: "parrot-details",
    component: () => import("./components/ParrotDetails.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddParrot.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
