import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {WeatherApiService} from "./api/weather-api.service";
import {catchError, tap} from "rxjs/operators";
import {ConditionsAndZip} from "./weather-manager.typings";
import {LocationService} from "./location.service";
import {combineLatest, Observable, of, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {ExternalCurrentCondition} from "./api/weather-api.typings";

@Injectable({
	providedIn: 'root'
})
export class WeatherManagerService {
	private currentConditions: WritableSignal<Partial<ConditionsAndZip>[]> = signal<Partial<ConditionsAndZip>[]>([]);
	private ICON_URL: string = environment.weatherIconUrl;

	constructor(
		private weatherApiService: WeatherApiService,
		private locationService: LocationService,
	) {
		this.conditionsInitialization().subscribe();
	}

	private conditionsInitialization() {
		const conditions$ = this.locationService.getLocations().map((zipcode) => this.weatherApiService.getConditionByZipCode(zipcode)
			.pipe(
				tap(data => this.currentConditions.mutate(conditions => {
					conditions.push({zipcode, data})
				}))
			));
		return combineLatest(conditions$);
	}

	public addCurrentConditions(zipcode: string): Observable<ExternalCurrentCondition> {
		return this.weatherApiService.getConditionByZipCode(zipcode)
			.pipe(
				tap(() => this.locationService.addLocation(zipcode)),
				tap((data: ExternalCurrentCondition) => this.currentConditions.mutate(conditions => {
					conditions.push({zipcode, data})
				})),
				catchError(() => {
					return throwError({
						message: 'Unknown zip code'
					})
				})
			)

	}

	public removeCurrentConditions(zipcode: string): void {
		this.currentConditions.mutate(conditions => {
			for (let i in conditions) {
				if (conditions[i].zipcode == zipcode)
					conditions.splice(+i, 1);
			}
		});
		this.locationService.removeLocation(zipcode);
	}

	public getCurrentConditions(): Signal<Partial<ConditionsAndZip>[]> {
		return this.currentConditions.asReadonly();
	}

	public getWeatherIcon(id: number): string {
		if (id >= 200 && id <= 232)
			return this.ICON_URL + "art_storm.png";
		else if (id >= 501 && id <= 511)
			return this.ICON_URL + "art_rain.png";
		else if (id === 500 || (id >= 520 && id <= 531))
			return this.ICON_URL + "art_light_rain.png";
		else if (id >= 600 && id <= 622)
			return this.ICON_URL + "art_snow.png";
		else if (id >= 801 && id <= 804)
			return this.ICON_URL + "art_clouds.png";
		else if (id === 741 || id === 761)
			return this.ICON_URL + "art_fog.png";
		else
			return this.ICON_URL + "art_clear.png";
	}
}
