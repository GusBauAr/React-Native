import appConfig from "@/src/configs/app.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { InternalAxiosRequestConfig } from "axios";

const TOKEN_KEY = appConfig.tokenStorageKey;

const AxiosRequestIntrceptorConfigCallback = async (
  config: InternalAxiosRequestConfig,
) => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.log("Error leyendo token");
  }

  return config;
};

export default AxiosRequestIntrceptorConfigCallback;
