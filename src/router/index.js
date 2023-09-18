import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "/src/views/DashboardView.vue";
import Login from "/src/views/LoginPage.vue";
import ProductDetail from "/src/views/ProductDetails.vue";
import ProductListings from "/src/views/ProductListings.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      authRequired: true,
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
    path: "/products",
    name: "Products",
    component: ProductListings,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetail,
    meta: {
      authRequired: true,
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
