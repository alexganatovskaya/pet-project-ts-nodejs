import { ForecastApi } from './src/api/endpoints/forecast.api';

async function checkWeather() {
    // 1. Create an instance of your class
    const weatherApi = new ForecastApi();

    try {
        console.log('Sending a request to Open-Meteo...');
        
        // 2. Call your getWeather method and pass Wroclaw coordinates
        const response = await weatherApi.getWeather({ 
            latitude: 51.10, 
            longitude: 17.03 
        });

        // 3. Output what the server returned
        console.log('\nCurrent temperature in Wroclaw:');
        console.log(response.data.current_weather.temperature + ' °C');

    } catch (error) {
        console.log('Oops, something went wrong:', error);
    }
}

// Run the function
checkWeather();