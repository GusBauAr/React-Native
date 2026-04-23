import appConfig from "@/src/configs/app.config";
import type { AxiosError } from "axios";
import axios from "axios";

const AxiosBase = axios.create({
  timeout: 60000,
  baseURL: appConfig.apiPrefix,
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
AxiosBase.interceptors.request.use(
  (config) => {
    // aquí puedes meter token después
    return config;
  },
  (error) => Promise.reject(error),
);

// RESPONSE INTERCEPTOR
AxiosBase.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log("API ERROR:", error.response?.data);
    return Promise.reject(error);
  },
);

export default AxiosBase;
