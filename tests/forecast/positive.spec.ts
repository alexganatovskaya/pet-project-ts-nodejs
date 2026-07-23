import { expect } from 'chai';
import { ForecastApi } from '../../src/api/endpoints/forecast.api';

describe('Weather API: Positive Scenarios', () => {
    // Create our weather client
    const weatherApi = new ForecastApi();

    it ('Should return status 200 and the current temperature for Wroclaw', async () =>{
        // 1. Send the request and store the result in the response constant (don't forget await!)
        // Wroclaw coordinates: latitude: 51.10, longitude: 17.03
        const response = await weatherApi.getWeather({latitude: 51.10, longitude: 17.03});
        
        // 2. Verify that the response status is 200
        expect(response.status).to.equal(200);
        
        // 3. Verify that response.data has the 'current_weather' property
        expect(response.data).to.have.property('current_weather');
        
        // 4. Verify that response.data.current_weather has the 'temperature' property
        expect(response.data.current_weather).to.have.property('temperature');
        
        // 5. Verify that this temperature (response.data.current_weather.temperature) is a number
        expect(response.data.current_weather.temperature).to.be.a('number');
    });
});
