interface ConstructorParams {
	date: Date;
	main: string;
	temp: { min: number; max: number };
	icon: string;
}

export class Forecast {
	date: Date;
	main: string;
	temp: {
		min: number;
		max: number;
	};
	icon: string;

	constructor({date, main, temp, icon}: ConstructorParams) {
		this.date = date;
		this.main = main;
		this.temp = temp;
		this.icon = icon;
	}
}