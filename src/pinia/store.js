import api from "../utilities/api.js";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const id = ref(null);
  const accessToken = ref(null);

  const isAuthenticted = () => {
    return accessToken.value !== null;
  };

  const removeUserData = () => {
    id.value = null;
    accessToken.value = null;
  };
  const setUserData = ({ id, accessToken }) => {
    id.value = id;
    accessToken.value = accessToken;
  };
  const getAccessToken = () => {
    return accessToken.value;
  };

  const login = async (username, password) => {
    try {
      const response = await api.post("/auth/login", {
        username: username,
        password: password,
      });
      console.log(response.data.token);
      if (response.data.token) {
        setUserData({
          id: response.data.id,
          accessToken: response.data.token,
        });
      }
      return response.data;
    } catch (error) {
      console.log(error, "new");
      Promise.reject(error);
    }
  };

  const logout = () => {
    removeUserData();
  };
  return { id, accessToken, isAuthenticted, logout, login, getAccessToken };
});
