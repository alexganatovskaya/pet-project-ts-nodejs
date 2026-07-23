import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class BaseClient {
  // protected означает, что этот клиент будет виден в классах-наследниках (например, ForecastApi)
  protected client: AxiosInstance;

  constructor() {
    // В конструкторе мы инициализируем Axios с базовыми настройками
    this.client = axios.create({
      baseURL: 'https://api.open-meteo.com', // Чтобы не писать этот URL в каждом запросе
      timeout: 10000,                        // Ждать ответ максимум 10 секунд
    });

    // Вызываем логирование
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // 1. Перехватчик ЗАПРОСА
    this.client.interceptors.request.use((config) => {
      console.log(`\n🚀 [REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
      return config;
    });

    // 2. Перехватчик ОТВЕТА
    this.client.interceptors.response.use(
      (response) => {
        console.log(`✅ [RESPONSE] Status: ${response.status}`);
        return response;
      },
      (error) => {
        console.log(`❌ [RESPONSE ERROR] Status: ${error.response?.status || 'Unknown'}`);
        return Promise.reject(error); // Обязательно возвращаем ошибку, чтобы тест мог её поймать
      }
    );
  }

  // Наш вспомогательный метод GET
  protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }
}