import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ExternalCurrentCondition, ExternalForecast} from './weather-api.typings';
import {environment} from "../../../environments/environment";

@Injectable({
	providedIn: 'root',
})
export class WeatherApiService {
	private static URL: string = environment.weatherApiBaseUrl;

	constructor(private http: HttpClient) {
	}

	public getConditionByZipCode(zipcode: string): Observable<ExternalCurrentCondition> {
		const params: HttpParams = new HttpParams({
			fromObject: {
				zip: `${zipcode},us`,
				units: 'imperial'
			}
		})
		return this.http.get<ExternalCurrentCondition>(`${WeatherApiService.URL}/weather`, {params})
	}

	public getForecast(zipcode: string): Observable<ExternalForecast> {
		const params: HttpParams = new HttpParams({
			fromObject: {
				zip: `${zipcode},us`,
				units: 'imperial',
				cnt: 5
			}
		})
		return this.http.get<ExternalForecast>(`${WeatherApiService.URL}/forecast/daily`, {params});
	}
}
