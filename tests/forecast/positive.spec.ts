import { expect } from 'chai';
import { ForecastApi } from '../../src/api/endpoints/forecast.api';

describe('API Погоды: Позитивные сценарии', () => {
    // Создаем наш клиент погоды
    const weatherApi = new ForecastApi();

    it ('Должен возвращать статус 200 и текущую температуру для Вроцлава', async () =>{
        // 1. Отправь запрос и сохрани результат в константу response (не забудь await!)
        // Координаты Вроцлава: latitude: 51.10, longitude: 17.03
        const response = await weatherApi.getWeather({latitude: 51.10, longitude: 17.03});
        
        // 2. Проверь, что статус ответа равен 200
        expect(response.status).to.equal(200);
        
        // 3. Проверь, что в response.data есть свойство 'current_weather'
        expect(response.data).to.have.property('current_weather');
        
        // 4. Проверь, что внутри response.data.current_weather есть свойство 'temperature'
        expect(response.data.current_weather).to.have.property('temperature');
        
        // 5. Проверь, что эта температура (response.data.current_weather.temperature) — это число ('number')
        expect(response.data.current_weather.temperature).to.be.a('number');
    });
});
