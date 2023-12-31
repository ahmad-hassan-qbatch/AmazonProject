import axios from "axios";
import { useUserStore } from "../pinia/userStore.js";

const instance = axios.create({
  baseURL: "http://192.168.2.46:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const user = useUserStore();
    const accessToken = user.getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
