import Constants from "expo-constants";

export type AppConfig = {
  apiPrefix: string;
  tokenStorageKey: string;
};

const appConfig: AppConfig = {
  apiPrefix: Constants.expoConfig?.extra?.apiUrl || "",
  tokenStorageKey: "access_token",
};

export default appConfig;
