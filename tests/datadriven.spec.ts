import { expect } from 'chai';
import { GeocodingApi } from '../src/api/endpoints/geocoding.api';
import { TEST_DATA } from '../src/config/testData';

describe('Data-Driven Testing: Geocoding API', () => {
    const geocodingAPI = new GeocodingApi();
	
	TEST_DATA.citiesToTest.forEach((city) => {
		it(`Should successfully find coordinates for ${city}`, async () => {
			const response = await geocodingAPI.geoCoordinates({name:city});
			
			expect(response.status).to.equal(200);
			
			expect(response.data.results.length).to.be.greaterThan(0);
			
			expect(response.data.results[0].name).to.equal(city);
			
		});
	});
	
});