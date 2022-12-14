import { createRouter, createWebHistory } from "vue-router";
import FileView from "../views/FileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FileView,
    },
    {
      path: "/changes",
      name: "changes",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ChangeView.vue"),
    },
  ],
});

export default router;
