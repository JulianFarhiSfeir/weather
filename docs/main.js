(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = (_class = class AppComponent {
  constructor() {}
}, _class.ctorParameters = () => [], _class);
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_tabs_tab_panel_tab_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/tabs/tab-panel/tab-panel.component */ 8450);
/* harmony import */ var _core_api_weather_api_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/api/weather-api.interceptor */ 2258);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};












let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_1__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
  }), _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgOptimizedImage, _shared_components_tabs_tab_panel_tab_panel_component__WEBPACK_IMPORTED_MODULE_3__.TabPanelComponent],
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    useClass: _core_api_weather_api_interceptor__WEBPACK_IMPORTED_MODULE_4__.WeatherApiInterceptor,
    multi: true
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _views_forecasts_forecast_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/forecasts/forecast.resolver */ 6177);


const appRoutes = [{
  path: '',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_core_fesm2022_rxjs-interop_mjs"), __webpack_require__.e("src_app_views_current-conditions_current-conditions_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/current-conditions/current-conditions.component */ 4431)).then(c => c.CurrentConditionsComponent)
}, {
  path: 'forecast/:zipcode',
  resolve: {
    forecast: _views_forecasts_forecast_resolver__WEBPACK_IMPORTED_MODULE_0__.forecastResolver
  },
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_core_fesm2022_rxjs-interop_mjs"), __webpack_require__.e("src_app_views_forecasts_forecasts_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/forecasts/forecasts.component */ 6672)).then(c => c.ForecastsComponent)
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 2258:
/*!*****************************************************!*\
  !*** ./src/app/core/api/weather-api.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherApiInterceptor: () => (/* binding */ WeatherApiInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let WeatherApiInterceptor = (_class = class WeatherApiInterceptor {
  constructor() {}
  intercept(request, next) {
    if (!request.url.includes(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherApiBaseUrl)) {
      return next.handle(request);
    }
    let params = request.params.set('APPID', _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherApiId);
    const clonedRequest = request.clone({
      params
    });
    return next.handle(clonedRequest);
  }
}, _class.ctorParameters = () => [], _class);
WeatherApiInterceptor = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], WeatherApiInterceptor);


/***/ }),

/***/ 9873:
/*!*************************************************!*\
  !*** ./src/app/core/api/weather-api.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherApiService: () => (/* binding */ WeatherApiService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherApiService_1;



let WeatherApiService = WeatherApiService_1 = (_class = class WeatherApiService {
  constructor(http) {
    this.http = http;
  }
  getConditionByZipCode(zipcode) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
      fromObject: {
        zip: `${zipcode},us`,
        units: 'imperial'
      }
    });
    return this.http.get(`${WeatherApiService_1.URL}/weather`, {
      params
    });
  }
  getForecast(zipcode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
      fromObject: {
        zip: `${zipcode},us`,
        units: 'imperial',
        cnt: 5
      }
    });
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherApiService_1.URL}/forecast/daily`, {
      params
    });
  }
}, _class.URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.weatherApiBaseUrl, _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}], _class);
WeatherApiService = WeatherApiService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], WeatherApiService);


/***/ }),

/***/ 7364:
/*!******************************************!*\
  !*** ./src/app/core/location.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let LocationService = (_class = class LocationService {
  constructor() {
    this.LOCATIONS_STORAGE_KEY = 'locations';
    this.locations = new Set();
    let locationsString = localStorage.getItem(this.LOCATIONS_STORAGE_KEY);
    if (locationsString) {
      const locations = JSON.parse(locationsString);
      locations.forEach(location => this.locations.add(location));
    }
  }
  addLocation(zipcode) {
    if (this.locations.has(zipcode)) {
      return;
    }
    this.locations.add(zipcode);
    localStorage.setItem(this.LOCATIONS_STORAGE_KEY, JSON.stringify(Array.from(this.locations)));
  }
  removeLocation(zipcode) {
    if (!this.locations.has(zipcode)) {
      return;
    }
    this.locations.delete(zipcode);
    localStorage.setItem(this.LOCATIONS_STORAGE_KEY, JSON.stringify(Array.from(this.locations)));
  }
  getLocations() {
    return Array.from(this.locations);
  }
  has(zipCode) {
    return this.locations.has(zipCode);
  }
}, _class.ctorParameters = () => [], _class);
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], LocationService);


/***/ }),

/***/ 1746:
/*!*************************************************!*\
  !*** ./src/app/core/weather-manager.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherManagerService: () => (/* binding */ WeatherManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_weather_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/weather-api.service */ 9873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.service */ 7364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3994);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 553);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let WeatherManagerService = (_class = class WeatherManagerService {
  constructor(weatherApiService, locationService) {
    this.weatherApiService = weatherApiService;
    this.locationService = locationService;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.ICON_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.weatherIconUrl;
    this.conditionsInitialization().subscribe();
  }
  conditionsInitialization() {
    const conditions$ = this.locationService.getLocations().map(zipcode => this.weatherApiService.getConditionByZipCode(zipcode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => this.currentConditions.mutate(conditions => {
      conditions.push({
        zipcode,
        data
      });
    }))));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)(conditions$);
  }
  addCurrentConditions(zipcode) {
    return this.weatherApiService.getConditionByZipCode(zipcode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.locationService.addLocation(zipcode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => this.currentConditions.mutate(conditions => {
      conditions.push({
        zipcode,
        data
      });
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)({
        message: 'Unknown zip code'
      });
    }));
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.mutate(conditions => {
      for (let i in conditions) {
        if (conditions[i].zipcode == zipcode) conditions.splice(+i, 1);
      }
    });
    this.locationService.removeLocation(zipcode);
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return this.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return this.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return this.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return this.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return this.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return this.ICON_URL + "art_fog.png";else return this.ICON_URL + "art_clear.png";
  }
}, _class.ctorParameters = () => [{
  type: _api_weather_api_service__WEBPACK_IMPORTED_MODULE_0__.WeatherApiService
}, {
  type: _location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
}], _class);
WeatherManagerService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], WeatherManagerService);


/***/ }),

/***/ 8645:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/forecasts-list/forecast-list.typings.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Forecast: () => (/* binding */ Forecast)
/* harmony export */ });
class Forecast {
  constructor({
    date,
    main,
    temp,
    icon
  }) {
    this.date = date;
    this.main = main;
    this.temp = temp;
    this.icon = icon;
  }
}

/***/ }),

/***/ 8450:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/tabs/tab-panel/tab-panel.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabPanelComponent: () => (/* binding */ TabPanelComponent)
/* harmony export */ });
/* harmony import */ var _tab_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-panel.component.html?ngResource */ 3063);
/* harmony import */ var _tab_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-panel.component.css?ngResource */ 476);
/* harmony import */ var _tab_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabPanelComponent = (_class = class TabPanelComponent {
  constructor() {
    this.selected = false;
    this.closed = false;
  }
}, _class.propDecorators = {
  selected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  header: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
}, _class);
TabPanelComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab-panel',
  template: _tab_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [(_tab_panel_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabPanelComponent);


/***/ }),

/***/ 6177:
/*!******************************************************!*\
  !*** ./src/app/views/forecasts/forecast.resolver.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forecastResolver: () => (/* binding */ forecastResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_api_weather_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/api/weather-api.service */ 9873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var _core_weather_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/weather-manager.service */ 1746);
/* harmony import */ var _shared_components_forecasts_list_forecast_list_typings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/forecasts-list/forecast-list.typings */ 8645);





const forecastResolver = (route, state) => {
  const weatherApiService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_api_weather_api_service__WEBPACK_IMPORTED_MODULE_0__.WeatherApiService);
  const weatherManagerService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_weather_manager_service__WEBPACK_IMPORTED_MODULE_1__.WeatherManagerService);
  const zipCode = route.paramMap.get('zipcode');
  if (!zipCode) {
    return undefined;
  }
  return weatherApiService.getForecast(zipCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(forecast => {
    const forecasts = forecast.list.map(condition => new _shared_components_forecasts_list_forecast_list_typings__WEBPACK_IMPORTED_MODULE_2__.Forecast({
      main: condition.weather[0].main,
      temp: {
        min: condition.temp.min,
        max: condition.temp.max
      },
      date: new Date(condition.dt * 1000),
      icon: weatherManagerService.getWeatherIcon(condition.weather[0].id)
    }));
    return {
      cityName: forecast.city.name,
      forecasts
    };
  }));
};

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  weatherApiBaseUrl: 'http://api.openweathermap.org/data/2.5',
  weatherApiId: '5a4b2d457ecbef9eb2a71e480b947604',
  weatherIconUrl: 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 476:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/tabs/tab-panel/tab-panel.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.content {
    padding: 20px;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/components/tabs/tab-panel/tab-panel.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,4BAA4B;IAC5B,2BAA2B;IAC3B,6BAA6B;AACjC","sourcesContent":[".content {\n    padding: 20px;\n    border-right: 1px solid #ddd;\n    border-left: 1px solid #ddd;\n    border-bottom: 1px solid #ddd;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 3063:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/tabs/tab-panel/tab-panel.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"content\" *ngIf=\"selected\" [hidden]=\"closed\">\n\t<ng-content></ng-content>\n</div>\n\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map