import { BaseClient } from '../client/baseClient';

export interface ForecastParams {
    latitude: number;
    longitude: number;
}

// Add a response contract
export interface WeatherResponse {
    current_weather: {
        temperature: number;
    }
}

export class ForecastApi extends BaseClient {
    async getWeather(params: ForecastParams) {
        // this.get is a call to the method from your BaseClient
        // We added <WeatherResponse>, so TypeScript now knows the response structure!
        return this.get<WeatherResponse>('/v1/forecast', {
            params: {
                latitude: params.latitude,
                longitude: params.longitude,
                current_weather: true // Request the API to return the current weather
            }
        });
    }
}