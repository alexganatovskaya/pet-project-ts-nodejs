import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class BaseClient {
  // protected means this client will be visible to child classes (for example, ForecastApi)
  protected client: AxiosInstance;

  constructor() {
    // In the constructor, we initialize Axios with base settings
    this.client = axios.create({
      baseURL: 'https://api.open-meteo.com', // So we do not have to repeat this URL in every request
      timeout: 10000,                        // Wait for a response for up to 10 seconds
    });

    // Call interceptor setup
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // 1. REQUEST interceptor
    this.client.interceptors.request.use((config) => {
      console.log(`\n🚀 [REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
      return config;
    });

    // 2. RESPONSE interceptor
    this.client.interceptors.response.use(
      (response) => {
        console.log(`✅ [RESPONSE] Status: ${response.status}`);
        return response;
      },
      (error) => {
        console.log(`❌ [RESPONSE ERROR] Status: ${error.response?.status || 'Unknown'}`);
        return Promise.reject(error); // We must return the error so the test can catch it
      }
    );
  }

  // Our helper GET method
  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }
}