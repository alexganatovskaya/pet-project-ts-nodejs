import { ForecastApi } from './src/api/endpoints/forecast.api';

async function checkWeather() {
    // 1. Создаем экземпляр твоего класса
    const weatherApi = new ForecastApi();

    try {
        console.log('Отправляем запрос к Open-Meteo...');
        
        // 2. Вызываем твой метод getWeather и передаем координаты Вроцлава
        const response = await weatherApi.getWeather({ 
            latitude: 51.10, 
            longitude: 17.03 
        });

        // 3. Выводим то, что вернул сервер
        console.log('\nТекущая температура во Вроцлаве:');
        console.log(response.data.current_weather.temperature + ' °C');

    } catch (error) {
        console.log('Ой, что-то пошло не так:', error);
    }
}

// Запускаем функцию
checkWeather();