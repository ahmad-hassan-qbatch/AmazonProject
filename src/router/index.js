import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "/src/views/DashboardView.vue";
import Login from "/src/views/LoginPage.vue";
import Results from "/src/views/ResultsView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      authRequired: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      authRequired: false,
    },
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
    meta: {
      authRequired: false,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
