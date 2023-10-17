import {Forecast} from "../../shared/components/forecasts-list/forecast-list.typings";

export interface Forecasts {
	cityName: string;
	forecasts: Forecast[];
}