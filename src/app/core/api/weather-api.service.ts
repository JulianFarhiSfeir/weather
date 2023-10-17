import {Injectable, Signal, signal} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';
import {ExternalCurrentCondition, ExternalForecast} from './weather-api.typings';
import {ConditionsAndZip} from "../weather-manager.typings";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class WeatherApiService {
	static URL = environment.weatherApiBaseUrl;

	constructor(private http: HttpClient) {
	}

	public getConditionByZipCode(zipcode: string): Observable<ExternalCurrentCondition> {
		// Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
		const params = new HttpParams({
			fromObject: {
				zip: `${zipcode},us`,
				units: 'imperial'
			}
		})
		return this.http.get<ExternalCurrentCondition>(`${WeatherApiService.URL}/weather`, {params})
	}

	public getForecast(zipcode: string): Observable<ExternalForecast> {
		const params = new HttpParams({
			fromObject: {
				zip: `${zipcode},us`,
				units: 'imperial',
				cnt: 5
			}
		})
		// Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
		return this.http.get<ExternalForecast>(`${WeatherApiService.URL}/forecast/daily`, {params});
	}
}
