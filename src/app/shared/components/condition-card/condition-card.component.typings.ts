interface ConstructorParams {
    zipCode: string;
    name: string;
    main: string;
    temp: { current: number; min: number; max: number };
    icon: string;
}

export class Condition {
    zipCode: string;
    name: string;
    main: string;
    temp: {
        current: number;
        min: number;
        max: number;
    };
    icon: string;

    constructor({zipCode, name, main, temp, icon}: ConstructorParams) {
        this.zipCode = zipCode;
        this.name = name;
        this.main = main;
        this.temp = temp;
        this.icon = icon;
    }
}

