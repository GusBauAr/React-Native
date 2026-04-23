import appConfig from "@/src/configs/app.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { AxiosError } from "axios";

const unauthorizedCode = [401, 419, 440];

const AxiosResponseIntrceptorErrorCallback = async (error: AxiosError) => {
  const { response } = error;

  if (response && unauthorizedCode.includes(response.status)) {
    console.log("Sesión expirada");

    // eliminar token
    await AsyncStorage.removeItem(appConfig.tokenStorageKey);

    // aquí luego puedes:
    // - navegar a login
    // - limpiar estado global (si usas Zustand o Context)
  }
};

export default AxiosResponseIntrceptorErrorCallback;
