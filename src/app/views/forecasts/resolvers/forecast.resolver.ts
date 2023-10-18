import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {WeatherApiService} from "../../../core/api/weather-api.service";
import {map} from "rxjs/operators";
import {WeatherManagerService} from "../../../core/weather-manager.service";
import {Forecast} from "../../../shared/components/forecasts-list/forecast-list.typings";
import {Forecasts} from "../forecasts.typings";

export const forecastResolver: ResolveFn<Forecasts> = (route, state) => {
	const weatherApiService = inject(WeatherApiService);
	const weatherManagerService = inject(WeatherManagerService);
	const zipcode = route.paramMap.get('zipcode');
	if (!zipcode) {
		return undefined;
	}
	return weatherApiService.getForecast(zipcode)
		.pipe(
			map((forecast) => {
				const forecasts = forecast.list.map((condition) =>
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
				return {
					cityName: forecast.city.name,
					forecasts,
				}
			})
		)
};
