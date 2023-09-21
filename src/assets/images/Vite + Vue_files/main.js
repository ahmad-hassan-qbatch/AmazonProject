import "/src/style.css?t=1695130646224";
import "/node_modules/vue-toastification/dist/index.css";

import Antd from "/node_modules/.vite/deps/ant-design-vue.js?v=d4a31cfc";
import App from "/src/App.vue?t=1695130646224";
import Toast from "/node_modules/.vite/deps/vue-toastification.js?v=d4a31cfc";
import { createApp } from "/node_modules/.vite/deps/vue.js?v=d4a31cfc";
import { createPinia } from "/node_modules/.vite/deps/pinia.js?v=d4a31cfc";
import router from "/src/router/index.js?t=1695130646224";
import toast from "/src/utilities/toastMessages.js?t=1695109494981";
import { useUserStore } from "/src/pinia/userStore.js?t=1695130646224";

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
