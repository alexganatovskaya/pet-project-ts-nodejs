// Import the 'expect' function from the 'chai' assertion library to perform validations (assertions)
import { expect } from 'chai';
// Import the 'ForecastApi' class from our custom endpoint file to make API calls
import { ForecastApi } from '../../src/api/endpoints/forecast.api';

// 'describe' creates a test suite (a logical group of tests) named 'Weather API: Negative scenarios'
describe('API Weather: Negative scenarios', () => {
    
    // Create a new instance (object) of the ForecastApi class to use its methods (like getWeather)
    const weatherAPI = new ForecastApi();

    // 'it' creates a specific test case. 'async' is used because we will wait for a network request inside
    it('Should return 400 error for invalid latitude (latitude > 90)', async () => {
        
        // 'try' block contains the code that we expect to throw an error (the "glass" we want to break)
        try {

            // 1. Act: TRY to send a GET request with an invalid latitude value (100)
            // 'await' pauses the execution until the server responds
            await weatherAPI.getWeather({ 
                latitude: 100,  
                longitude: 17.03 
            });

            // If the code reaches this line, Axios did NOT throw an error.
            // This means the server incorrectly returned a 200 OK status for invalid data!
            // We artificially fail the test here because the expected error didn't happen.
            expect.fail('The request should have failed with an error, but it succeeded!');

            // 'catch' block captures the error thrown by the 'try' block. 'any' disables strict type checking here.
        } catch (error: any) {
            
            // 2. Assert: CATCH the error and verify its contents
            // Verify that the HTTP status code of the error response is exactly 400 (Bad Request)
            expect(error.response.status).to.equal(400);

            // Verify that the 'error' property in the response body is strictly equal to boolean 'true'
            expect(error.response.data.error).to.equal(true);

            // Verify that the response body object contains a property named 'reason'
            expect(error.response.data).to.have.property('reason');

        }
        
        

    });
});