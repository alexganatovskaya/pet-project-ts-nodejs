import { expect } from 'chai';
import { ForecastApi } from '../src/api/endpoints/forecast.api';
import { GeocodingApi } from '../src/api/endpoints/geocoding.api';
import { DatabaseClient } from '../src/database/dbClient';

describe('db Testing', () => {
    const forecastApi = new ForecastApi();
    const geocodingApi = new GeocodingApi();
    const dbClient = new DatabaseClient();

    // 1. Create the city variable so TS can see it
    const cityForTest = 'Wroclaw';

    before(async () => {
         await dbClient.connect();
    });

    it('Should fetch weather for Wroclaw and save it to MongoDB', async () => {
        // Get the city coordinates
        const geoResponse = await geocodingApi.geoCoordinates({ name: cityForTest });
        const latitude = geoResponse.data.results[0].latitude;
        const longitude = geoResponse.data.results[0].longitude;
        
        const weatherResponse = await forecastApi.getWeather({latitude, longitude});
        
        // Get the required "table" (collection)
        const collection = dbClient.getCollection('weather_history');

        // Create the object we want to save
        const documentToSave = {
            city: cityForTest,
            temperature: weatherResponse.data.current_weather.temperature,
            date: new Date() // Current time
        };

        // 3. Send it to the database!
        await collection.insertOne(documentToSave);
        console.log('Data is saved successfully into MongoDB!');
    });

    after (async () => {
        await dbClient.disconnect();
    });

});

