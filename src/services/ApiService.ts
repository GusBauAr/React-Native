import type { AxiosRequestConfig } from "axios";
import AxiosBase from "./axios/AxiosBase";

const ApiService = {
  fetchDataWithAxios<Response = unknown, Request = Record<string, unknown>>(
    param: AxiosRequestConfig<Request>,
  ) {
    return AxiosBase(param).then((res) => res.data as Response);
  },
};

export default ApiService;
