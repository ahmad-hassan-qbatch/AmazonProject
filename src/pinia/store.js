import api from "../utilities/api.js";
import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router/index.js";

export const useUserStore = defineStore("user", () => {
  const user = ref({});
  const success = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const isAuthenticted = () => {
    return localStorage.getItem("accessToken") !== null;
  };

  const getAccessToken = () => {
    return localStorage.getItem("accessToken");
  };

  const login = async (username, password) => {
    try {
      loading.value = true;
      const response = await api.post("/auth/login", {
        username: username,
        password: password,
      });

      if (response.data.token) {
        localStorage.setItem("accessToken", response.data.token);
        user.value = response.data;
      }
      success.value = "logged in";
      loading.value = false;

      router.push("/");
    } catch (err) {
      error.value = err;
      loading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem("accessToken");
    success.value = null;
    error.value = null;
    router.push("/login");
  };
  return {
    user,
    success,
    error,
    loading,
    isAuthenticted,
    logout,
    login,
    getAccessToken,
  };
});
