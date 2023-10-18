import {ExternalCurrentCondition} from "./api/weather-api.typings";
export interface ConditionsAndZip {
	zipcode: string;
	data: ExternalCurrentCondition;
}