import { expect } from 'chai';
import { ForecastApi } from '../src/api/endpoints/forecast.api';
import { GeocodingApi } from '../src/api/endpoints/geocoding.api';

describe ('E2E: Weather by City Name', () => {
    const forecastApi = new ForecastApi();
    const geocodingApi = new GeocodingApi();

    it ('Should successfully get weather for Wroclaw', async () => {
        
        // 2. Act 1: Call Geocoding API to search for 'Wroclaw'
        // Save the result to a variable (e.g., geoResponse)
        const geoResponse = await geocodingApi.geoCoordinates({ name: 'Wroclaw' });

        const latitude = geoResponse.data.results[0].latitude;
        const longitude = geoResponse.data.results[0].longitude;
        
        const weatherResponse = await forecastApi.getWeather({
            latitude: latitude,
            longitude: longitude
        });

        expect(weatherResponse.status).to.equal(200);
        expect(weatherResponse.data).to.have.property('current_weather');

    });
});