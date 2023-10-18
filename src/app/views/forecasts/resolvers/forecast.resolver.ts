import {ActivatedRouteSnapshot, ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {WeatherApiService} from "../../../core/api/weather-api.service";
import {map} from "rxjs/operators";
import {WeatherManagerService} from "../../../core/weather-manager.service";
import {Forecast} from "../../../shared/components/forecasts-list/forecast-list.typings";
import {Forecasts} from "../forecasts.typings";
import {ExternalForecast} from "../../../core/api/weather-api.typings";

export const forecastResolver: ResolveFn<Forecasts> = (route: ActivatedRouteSnapshot) => {
	const weatherApiService: WeatherApiService = inject(WeatherApiService);
	const weatherManagerService: WeatherManagerService = inject(WeatherManagerService);
	const zipcode: string = route.paramMap.get('zipcode');
	if (!zipcode) {
		return undefined;
	}
	return weatherApiService.getForecast(zipcode)
		.pipe(
			map((forecast: ExternalForecast) => {
				const forecasts: Forecast[] = forecast.list.map((condition) =>
					new Forecast({
						main: condition.weather[0].main,
						temp: {
							min: condition.temp.min,
							max: condition.temp.max,
						},
						date: new Date(condition.dt * 1000),
						icon: weatherManagerService.getWeatherIcon(condition.weather[0].id)
					})
				)
				return new Forecasts({
					cityName: forecast.city.name,
					forecasts,
				})
			})
		)
};
