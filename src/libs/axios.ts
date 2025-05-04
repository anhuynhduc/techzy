import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Environment from 'src/utils/environment';
import Storage from 'src/utils/storage';

export class Axios {
  private instance: AxiosInstance;
  endpoint = '';

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: Environment.API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (typeof window !== 'undefined') {
          const token = Storage.getAccessToken();
          if (token) {
            Object.assign(config.headers, {
              Authorization: `Bearer ${token}`,
            });
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 401) {
          const event = new CustomEvent('TOKEN_EXPIRE');
          document.dispatchEvent(event);
        }
        return Promise.reject(error);
      },
    );
  }

  get<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.get(url, config);
  }

  post<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.post(url, data, config);
  }

  put<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data: D,
    config: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.put(url, data, config);
  }

  delete<T = unknown, R = AxiosResponse<T>>(
    url: string,
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.delete(url, config);
  }
}
