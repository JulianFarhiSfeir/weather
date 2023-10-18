import {Forecast} from "../../shared/components/forecasts-list/forecast-list.typings";

interface ConstructorParams {
	cityName: string;
	forecasts: Forecast[];
}

export class Forecasts {
	cityName: string;
	forecasts: Forecast[];

	constructor({cityName, forecasts}: ConstructorParams) {
		this.cityName = cityName;
		this.forecasts = forecasts;
	}
}