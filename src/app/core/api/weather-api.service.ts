import {Injectable, Signal, signal} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';
import {ExternalCurrentCondition, ExternalForecast} from './weather-api.typings';
import {ConditionsAndZip} from "../weather-manager.typings";
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root',
})
export class WeatherApiService {
	static URL = environment.weatherApiBaseUrl;

	constructor(private http: HttpClient) {
	}

	public getConditionByZipCode(zipcode: string): Observable<ExternalCurrentCondition> {
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
		return this.http.get<ExternalForecast>(`${WeatherApiService.URL}/forecast/daily`, {params});
	}
}
