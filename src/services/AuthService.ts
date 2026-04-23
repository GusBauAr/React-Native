import endpointConfig from "@/src/configs/endpoint.config";
import ApiService from "@/src/services/ApiService";

export type SignUpCredential = {
  name: string;
  email: string;
  password: string;
};

export type SignInCredential = {
  email: string;
  password: string;
};

export async function apiSignIn(data: SignInCredential) {
  return ApiService.fetchDataWithAxios({
    url: endpointConfig.signIn,
    method: "post",
    data,
  });
}

export async function apiSignUp(data: SignUpCredential) {
  return ApiService.fetchDataWithAxios({
    url: endpointConfig.signUp,
    method: "post",
    data,
  });
}

export async function apiSignOut(userId: number) {
  return ApiService.fetchDataWithAxios({
    url: endpointConfig.signOut,
    method: "post",
    data: { userId },
  });
}
