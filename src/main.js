import "./style.css";

import Antd from "ant-design-vue";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import { useUserStore } from "./pinia/store.js";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Antd);
app.use(router);

const user = useUserStore();

console.log(user);

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (user.isAuthenticted()) {
      next();
    } else {
      next({ name: "Login" });
    }
  }
  next();
});

app.mount("#app");
