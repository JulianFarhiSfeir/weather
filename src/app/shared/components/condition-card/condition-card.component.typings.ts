interface ConstructorParams {
	zipcode: string;
	name: string;
	main: string;
	temp: { current: number; min: number; max: number };
	icon: string;
}

export class Condition {
	zipcode: string;
	name: string;
	main: string;
	temp: {
		current: number;
		min: number;
		max: number;
	};
	icon: string;

	constructor({zipcode, name, main, temp, icon}: ConstructorParams) {
		this.zipcode = zipcode;
		this.name = name;
		this.main = main;
		this.temp = temp;
		this.icon = icon;
	}
}

