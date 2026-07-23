import { BaseClient } from '../client/baseClient';

export interface ForecastParams {
    latitude: number;
    longitude: number;
}

// Добавляем контракт для ответа
export interface WeatherResponse {
    current_weather: {
        temperature: number;
    }
}

export class ForecastApi extends BaseClient {
    async getWeather(params: ForecastParams) {
        // this.get - это вызов метода из твоего BaseClient
        // Добавили <WeatherResponse>, теперь TypeScript знает структуру ответа!
        return this.get<WeatherResponse>('/v1/forecast', {
            params: {
                latitude: params.latitude,
                longitude: params.longitude,
                current_weather: true // Просим API вернуть текущую погоду
            }
        });
    }
}