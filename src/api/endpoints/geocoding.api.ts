import { BaseClient } from "../client/baseClient";

export interface GeocodingParams {
    name: string;
}

export interface GeocodingResponse {
	
	// [] is added at the very end to define an array of objects
	results: { 
	latitude: number; 
	longitude: number 
	}[];
}

export class GeocodingApi extends BaseClient {
	
	// an async method is created for accepting GeocodingParams
	async geoCoordinates(params: GeocodingParams) {
	
		// 1. the full URL should be passed for the geocoding service
        // 2. pass the 'params' object which contains the city name we want to search
		return this.get<GeocodingResponse>('https://geocoding-api.open-meteo.com/v1/search', {
			params: params // send params to the server, we don't map the response here!
		});
	}
}
