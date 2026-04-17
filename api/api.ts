import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API ERROR:", error.response?.data || error.message);
    if (error.response?.status === 401) {
      console.log("No autorizado");
    }

    return Promise.reject(error);
  },
);

export default api;
