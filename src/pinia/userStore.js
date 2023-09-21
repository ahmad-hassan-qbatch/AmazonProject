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

  const isAuthenticated = () => {
    return Cookies.get("accessToken") !== undefined;
  };

  const getAccessToken = () => {
    return Cookies.get("accessToken");
  };
  const getUserId = () => {
    return JSON.parse(Cookies.get("userData")).id;
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
          Cookies.set("userData", JSON.stringify(response.data.user));
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
    Cookies.remove("accessToken");
    Cookies.remove("userData");
    toast.success("Logged Out");
    router.push("/login");
  };

  return {
    user,
    loading,
    isAuthenticated,
    getUserId,
    logout,
    login,
    getAccessToken,
  };
});
