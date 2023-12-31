import "./style.css";
import "vue-toastification/dist/index.css";

import Antd from "ant-design-vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import toast from "./utilities/toastMessages";
import { useUserStore } from "./pinia/userStore";
import vClickOutside from "click-outside-vue3";

const pinia = createPinia();
const app = createApp(App);

app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,

  timeout: 5000,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
});

app.use(pinia);
app.use(Antd);
app.use(router);
app.use(vClickOutside);

const user = useUserStore();

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (user.isAuthenticated()) {
      next();
    } else {
      toast.warning("Please Login To Continue");
      next({ name: "Login" });
    }
    return;
  } else if (to.name === "Login") {
    if (user.isAuthenticated()) {
      next({ name: "Dashboard" });
      return;
    }
    next();
  }
});

app.mount("#app");
