import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "";
const TIME_OUT = 8000;

class LQYRequest {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 全局请求拦截器
    this.instance.interceptors.request.use((config) => {

        return config;
    });

    // 全局响应拦截器
    this.instance.interceptors.response.use((res) => {
        return res;
    });
  }

  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      // 开始发起网络请求
      this.instance
        .request<T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  }

  get(url: string, params?: any) {
    return this.request({ url, params, method: "GET"});
  }
}

export default new LQYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
