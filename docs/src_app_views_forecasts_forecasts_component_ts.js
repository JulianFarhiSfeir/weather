(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["src_app_views_forecasts_forecasts_component_ts"],{

/***/ 7441:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/forecasts-list/forecasts-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 7273);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 966);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
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




let ForecastsListComponent = (_class = class ForecastsListComponent {}, _class.propDecorators = {
  forecasts: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
}, _class);
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgOptimizedImage, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  standalone: true,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 6672:
/*!********************************************************!*\
  !*** ./src/app/views/forecasts/forecasts.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsComponent: () => (/* binding */ ForecastsComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts.component.html?ngResource */ 1876);
/* harmony import */ var _forecasts_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts.component.css?ngResource */ 1101);
/* harmony import */ var _forecasts_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/forecasts-list/forecasts-list.component */ 7441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let ForecastsComponent = (_class = class ForecastsComponent {
  constructor(route) {
    this.route = route;
    this.forecastsSignal = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.toSignal)(this.route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data['forecast'])));
  }
}, _class.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}], _class);
ForecastsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-forecasts',
  template: _forecasts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_2__.ForecastsListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [(_forecasts_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsComponent);


/***/ }),

/***/ 966:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/forecasts-list/forecasts-list.component.css?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1101:
/*!********************************************************************!*\
  !*** ./src/app/views/forecasts/forecasts.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/views/forecasts/forecasts.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7273:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"list-group\">\n\t<li *ngFor=\"let forecast of forecasts\"\n\t\tclass=\"list-group-item\">\n\t\t{{ (forecast.date) | date:'EEEE, MMM d'}}:\n\t\t{{forecast.main}}\n\t\t- Min: {{forecast.temp.min | number:'.0-0'}}\n\t\t- Max: {{forecast.temp.max | number:'.0-0'}}\n\n\t\t<img [ngSrc]=\"forecast.icon\"\n\t\t\t alt=\"\"\n\t\t\t width=\"50\"\n\t\t\t height=\"50\"\n\t\t\t class=\"icon\">\n\t</li>\n</ul>\n";

/***/ }),

/***/ 1876:
/*!*********************************************************************!*\
  !*** ./src/app/views/forecasts/forecasts.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"forecastsSignal() as forecasts\">\n\t<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\">5-day forecast for {{forecasts.cityName}}</h3>\n\t\t</div>\n\t\t<app-forecasts-list [forecasts]=\"forecasts.forecasts\"></app-forecasts-list>\n\t</div>\n</div>\n<button class=\"btn btn-success\"\n\t\t[routerLink]=\"'/'\">< Back to main page\n</button>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_forecasts_forecasts_component_ts.js.map