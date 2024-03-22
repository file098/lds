// routes.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/project/:id",
    name: "Project",
    component: () => import("./Project.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
