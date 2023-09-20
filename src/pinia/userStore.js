import Cookies from "js-cookie";
import api from "../utilities/api.js";
import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router/index.js";
import toast from "../utilities/toastMessages.js";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const loading = ref(false);

  const isSuccess = (status) => status >= 200 && status <= 299;

  const isAuthenticted = () => {
    return Cookies.get("accessToken") !== undefined;
  };

  const getAccessToken = () => {
    return Cookies.get("accessToken");
  };

  const login = async (username, password) => {
    try {
      loading.value = true;
      const response = await api.post("/user/login", {
        email: username,
        password: password,
      });

      if (isSuccess(response.status)) {
        if (response.data.token) {
          Cookies.set("accessToken", response.data.token);
          user.value = response.data.user;
        }

        toast.success(response.data.message);
        loading.value = false;
        router.push("/");
      }
    } catch (err) {
      toast.error(err.response.data.message);
      loading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    Cookies.remove("accessToken");
    toast.success("Logged Out");
    router.push("/login");
  };

  return {
    user,
    loading,
    isAuthenticted,
    logout,
    login,
    getAccessToken,
  };
});
