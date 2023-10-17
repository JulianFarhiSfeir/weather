export interface ExternalCurrentCondition {
    coord:      ExternalCoord;
    weather:    ExternalWeather[];
    base:       string;
    main:       ExternalMain;
    visibility: number;
    wind:       ExternalWind;
    clouds:     ExternalClouds;
    dt:         number;
    sys:        ExternalSys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}

export interface ExternalClouds {
    all: number;
}

export interface ExternalCoord {
    lon: number;
    lat: number;
}

export interface ExternalMain {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
}

export interface ExternalSys {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}

export interface ExternalWeather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface ExternalWind {
    speed: number;
    deg:   number;
    gust:  number;
}

export interface ExternalForecast {
    city: ExternalCity;
    cod: string;
    message: number;
    cnt: number;
    list: ExternalList[];
}

export interface ExternalCity {
    id: number;
    name: string;
    coord: ExternalCoord;
    country: string;
    population: number;
    timezone: number;
}

export interface ExternalList {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: ExternalTemp;
    feels_like: ExternalFeelsLike;
    pressure: number;
    humidity: number;
    weather: ExternalWeather[];
    speed: number;
    deg: number;
    gust: number;
    clouds: number;
    pop: number;
    rain?: number;
}

export interface ExternalFeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

export interface ExternalTemp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}