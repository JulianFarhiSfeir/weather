(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["src_app_views_current-conditions_current-conditions_component_ts"],{

/***/ 2624:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/condition-card/condition-card.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConditionCardComponent: () => (/* binding */ ConditionCardComponent)
/* harmony export */ });
/* harmony import */ var _condition_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./condition-card.component.html?ngResource */ 8360);
/* harmony import */ var _condition_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./condition-card.component.css?ngResource */ 311);
/* harmony import */ var _condition_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_condition_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ConditionCardComponent = (_class = class ConditionCardComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.clickEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  click() {
    this.clickEventEmitter.emit(this.condition.zipCode);
    this.showForecast(this.condition.zipCode);
  }
  // todo
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
}, _class.propDecorators = {
  condition: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  clickEventEmitter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
  }],
  click: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
    args: ['click']
  }]
}, _class);
ConditionCardComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-condition-card',
  template: _condition_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgOptimizedImage, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
  styles: [(_condition_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ConditionCardComponent);


/***/ }),

/***/ 277:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/condition-card/condition-card.component.typings.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Condition: () => (/* binding */ Condition)
/* harmony export */ });
class Condition {
  constructor({
    zipCode,
    name,
    main,
    temp,
    icon
  }) {
    this.zipCode = zipCode;
    this.name = name;
    this.main = main;
    this.temp = temp;
    this.icon = icon;
  }
}

/***/ }),

/***/ 328:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 8602);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 1245);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_panel_tab_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-panel/tab-panel.component */ 8450);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1062);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let TabsComponent = (_class = class TabsComponent {
  constructor() {
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DestroyRef);
    this.currentTabIndex = 0;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  closeTab(index, tab) {
    this.close.emit(index);
    tab.closed = true;
    this.currentTabIndex = Math.max(index - 1, 0);
    if (!tab.selected) {
      return;
    }
    this.tabs[this.currentTabIndex].selected = true;
  }
  updateTabs() {
    if (this.tabPanels?.length === 0) {
      return;
    }
    this.tabs = this.tabPanels.toArray();
    if (this.tabs.every(tab => !tab.selected)) {
      this.tabs[this.currentTabIndex].selected = true;
    }
  }
  ngAfterContentInit() {
    this.tabPanels.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.updateTabs()), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.takeUntilDestroyed)(this.destroyRef)).subscribe();
  }
  showTabPanel(event, tab) {
    event.preventDefault();
    this.show(tab);
  }
  show(tab) {
    this.tabPanels.forEach((tabPanel, index) => {
      if (tabPanel === tab) {
        tabPanel.selected = true;
        this.currentTabIndex = index;
        return;
      }
      tabPanel.selected = false;
    });
  }
}, _class.propDecorators = {
  tabPanels: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
    args: [_tab_panel_tab_panel_component__WEBPACK_IMPORTED_MODULE_2__.TabPanelComponent]
  }],
  close: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
}, _class);
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tabs',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_tab_panel_tab_panel_component__WEBPACK_IMPORTED_MODULE_2__.TabPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 2197:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/zipcode-entry/zipcode-entry-validators.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryValidatorsService: () => (/* binding */ ZipcodeEntryValidatorsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/location.service */ 7364);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ZipcodeEntryValidatorsService = class ZipcodeEntryValidatorsService {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_core_location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService);
  }
  alreadyExist() {
    return control => {
      const hasZipcode = this.locationService.has(control.value);
      if (hasZipcode) {
        return {
          alreadyExist: 'The zip code entry already exist'
        };
      }
      return null;
    };
  }
  length(length) {
    return control => {
      const valueLength = control?.value?.length;
      if (control.dirty && valueLength > 0 && valueLength !== length) {
        return {
          length: 'The zip code must be contains 5 characters'
        };
      }
      return null;
    };
  }
  required() {
    return control => {
      if (control.dirty && !control?.value) {
        return {
          required: 'The zip code field has to be filled'
        };
      }
      return null;
    };
  }
};
ZipcodeEntryValidatorsService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ZipcodeEntryValidatorsService);


/***/ }),

/***/ 4288:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/zipcode-entry/zipcode-entry.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 8017);
/* harmony import */ var _zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry.component.css?ngResource */ 2110);
/* harmony import */ var _zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _zipcode_entry_validators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zipcode-entry-validators.service */ 2197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_form_errors_message_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/form-errors-message.pipe */ 4594);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ZipcodeEntryComponent = (_class = class ZipcodeEntryComponent {
  constructor(validators) {
    this.validators = validators;
    this.addLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [this.validators.alreadyExist(), this.validators.length(5), this.validators.required()])
    });
  }
  submit() {
    const zipCode = this.form.value.zipCode;
    this.addLocation.emit(zipCode);
    this.form.reset();
  }
}, _class.ctorParameters = () => [{
  type: _zipcode_entry_validators_service__WEBPACK_IMPORTED_MODULE_2__.ZipcodeEntryValidatorsService
}], _class.propDecorators = {
  addLocation: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
}, _class);
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _pipes_form_errors_message_pipe__WEBPACK_IMPORTED_MODULE_3__.FormErrorsMessagePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
  providers: [_zipcode_entry_validators_service__WEBPACK_IMPORTED_MODULE_2__.ZipcodeEntryValidatorsService],
  styles: [(_zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ZipcodeEntryComponent);


/***/ }),

/***/ 6025:
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/condition-tab-label.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConditionTabLabelPipe: () => (/* binding */ ConditionTabLabelPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ConditionTabLabelPipe = class ConditionTabLabelPipe {
  transform(condition) {
    return `${condition.name} (${condition.zipCode})`;
  }
};
ConditionTabLabelPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'conditionTabLabel',
  standalone: true
})], ConditionTabLabelPipe);


/***/ }),

/***/ 4594:
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/form-errors-message.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormErrorsMessagePipe: () => (/* binding */ FormErrorsMessagePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FormErrorsMessagePipe = class FormErrorsMessagePipe {
  transform(validationErrors) {
    const errors = Object.values(validationErrors);
    return errors[0];
  }
};
FormErrorsMessagePipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'formErrorsMessage',
  standalone: true
})], FormErrorsMessagePipe);


/***/ }),

/***/ 4431:
/*!**************************************************************************!*\
  !*** ./src/app/views/current-conditions/current-conditions.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 5622);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 1088);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_weather_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/weather-manager.service */ 1746);
/* harmony import */ var _shared_components_condition_card_condition_card_component_typings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/condition-card/condition-card.component.typings */ 277);
/* harmony import */ var _shared_components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/zipcode-entry/zipcode-entry.component */ 4288);
/* harmony import */ var _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/tabs/tabs.component */ 328);
/* harmony import */ var _shared_components_condition_card_condition_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/condition-card/condition-card.component */ 2624);
/* harmony import */ var _shared_components_tabs_tab_panel_tab_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/tabs/tab-panel/tab-panel.component */ 8450);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _shared_pipes_condition_tab_label_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/condition-tab-label.pipe */ 6025);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 5617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9681);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let CurrentConditionsComponent = (_class = class CurrentConditionsComponent {
  constructor(weatherManager) {
    this.weatherManager = weatherManager;
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.signal)('');
    this.currentConditionsByZip = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.computed)(() => {
      const currentConditions = this.weatherManager.getCurrentConditions()();
      return currentConditions.map(currentCondition => new _shared_components_condition_card_condition_card_component_typings__WEBPACK_IMPORTED_MODULE_3__.Condition({
        name: currentCondition.data.name,
        main: currentCondition.data.weather[0].main,
        zipCode: currentCondition.zipcode,
        temp: {
          current: currentCondition.data.main.temp,
          min: currentCondition.data.main.temp_min,
          max: currentCondition.data.main.temp_max
        },
        icon: this.weatherManager.getWeatherIcon(currentCondition.data.weather[0].id)
      }));
    });
  }
  addLocation(zipCode) {
    this.weatherManager.addCurrentConditions(zipCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(error).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.message.set(error.message)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.delay)(3000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.message.set('')));
    })).subscribe();
  }
  removeLocation(index) {
    const condition = this.currentConditionsByZip().find((condition, i) => i === index);
    if (!condition) {
      return;
    }
    this.weatherManager.removeCurrentConditions(condition.zipCode);
  }
}, _class.ctorParameters = () => [{
  type: _core_weather_manager_service__WEBPACK_IMPORTED_MODULE_2__.WeatherManagerService
}], _class);
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_shared_components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_4__.ZipcodeEntryComponent, _shared_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__.TabsComponent, _shared_components_condition_card_condition_card_component__WEBPACK_IMPORTED_MODULE_6__.ConditionCardComponent, _shared_components_tabs_tab_panel_tab_panel_component__WEBPACK_IMPORTED_MODULE_7__.TabPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.JsonPipe, _shared_pipes_condition_tab_label_pipe__WEBPACK_IMPORTED_MODULE_8__.ConditionTabLabelPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf],
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 311:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/condition-card/condition-card.component.css?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
    display: block;
}

.close {
    cursor: pointer;
}

.flex {
    display: flex;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/shared/components/condition-card/condition-card.component.css"],"names":[],"mappings":"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":[":host {\n    display: block;\n}\n\n.close {\n    cursor: pointer;\n}\n\n.flex {\n    display: flex;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1245:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav-item {
    position: relative;
}

.nav-link {
    padding-right: 23px;
}

.close {
    position: absolute;
    top: 0;
    right: 6px;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/components/tabs/tabs.component.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,UAAU;AACd","sourcesContent":[".nav-item {\n    position: relative;\n}\n\n.nav-link {\n    padding-right: 23px;\n}\n\n.close {\n    position: absolute;\n    top: 0;\n    right: 6px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2110:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/zipcode-entry/zipcode-entry.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.message {
    margin-bottom: 0;
    padding: 5px 0;
    min-height: 30px;
}`, "",{"version":3,"sources":["webpack://./src/app/shared/components/zipcode-entry/zipcode-entry.component.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,gBAAgB;AACpB","sourcesContent":[".message {\n    margin-bottom: 0;\n    padding: 5px 0;\n    min-height: 30px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1088:
/*!**************************************************************************************!*\
  !*** ./src/app/views/current-conditions/current-conditions.component.css?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.no-data {
    display: flex;
    font-size: 20px;
}

.message {
    position: absolute;
    top: 20px;
    width: 250px;
    left: calc(50% - 125px)
}`, "",{"version":3,"sources":["webpack://./src/app/views/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ;AACJ","sourcesContent":[".no-data {\n    display: flex;\n    font-size: 20px;\n}\n\n.message {\n    position: absolute;\n    top: 20px;\n    width: 250px;\n    left: calc(50% - 125px)\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8360:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/condition-card/condition-card.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well flex\">\n\t<div>\n\t\t<h3>{{condition.name}} ({{condition.zipCode}})</h3>\n\t\t<h4>Current conditions: {{condition.main}}</h4>\n\t\t<h4>Temperatures today:</h4>\n\t\t<p>\n\t\t\tCurrent {{condition.temp.current | number:'.0-0'}}\n\t\t\t- Max {{condition.temp.max | number:'.0-0'}}\n\t\t\t- Min {{condition.temp.min | number:'.0-0'}}\n\t\t</p>\n\t\t<p>\n\t\t\t<a [routerLink]=\"['/forecast', condition.zipCode]\">Show 5-day forecast\n\t\t\t\tfor {{condition.name}}</a>\n\t\t</p>\n\t</div>\n\t<div>\n\t\t<img alt=\"Condition icon : {{condition.main | titlecase}}\"\n\t\t\t width=\"200\"\n\t\t\t height=\"200\"\n\t\t\t [ngSrc]=\"condition.icon\">\n\t</div>\n</div>\n";

/***/ }),

/***/ 8602:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"nav nav-tabs\">\n\t<ng-container *ngFor=\"let tab of tabs; let i = index\">\n\t\t<li class=\"nav-item\"\n\t\t\t*ngIf=\"!tab.closed\"\n\t\t\t[hidden]=\"tab.closed\"\n\t\t\t[ngClass]=\"{'active': tab.selected}\">\n\t\t\t<a class=\"nav-link\"\n\t\t\t   href=\"#\"\n\t\t\t   (click)=\"showTabPanel($event, tab)\">\n\t\t\t\t<span>{{ tab.header }}</span>\n\t\t\t</a>\n\t\t\t<span class=\"close\"\n\t\t\t\t  (click)=\"closeTab(i, tab)\">&times;</span>\n\t\t</li>\n\t</ng-container>\n\n</ul>\n\n<ng-content></ng-content>\n";

/***/ }),

/***/ 8017:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n\t<form [formGroup]=\"form\"\n\t\t  novalidate\n\t\t  (ngSubmit)=\"submit()\" [ngClass]=\"{'has-error': form.invalid && form.dirty, 'has-success': form.valid && form.dirty}\">\n\t\t<h2>Enter a zipcode</h2>\n\t\t<label for=\"zipcode\"></label>\n\t\t<input type=\"text\"\n\t\t\t   id=\"zipcode\"\n\t\t\t   formControlName=\"zipCode\"\n\t\t\t   placeholder=\"Zipcode\"\n\t\t\t   class=\"form-control\">\n\t\t<p class=\"message invalid-feedback\">\n\t\t\t<ng-container *ngIf=\"form.controls.zipCode.errors as errors\">\n\t\t\t\t{{ errors | formErrorsMessage}}\n\t\t\t</ng-container>\n\t\t</p>\n\t\t<br>\n\t\t<button type=\"submit\"\n\t\t\t\t[disabled]=\"form.disabled || form.invalid\"\n\t\t\t\tclass=\"btn btn-primary\">\n\t\t\tAdd location\n\t\t</button>\n\t</form>\n</div>\n";

/***/ }),

/***/ 5622:
/*!***************************************************************************************!*\
  !*** ./src/app/views/current-conditions/current-conditions.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n\t<div *ngIf=\"message()\"\n\t\t class=\"alert alert-danger message\">\n\t\t{{message()}}\n\t</div>\n\n\t<app-zipcode-entry (addLocation)=\"addLocation($event)\"></app-zipcode-entry>\n\n\t<ng-container *ngIf=\"currentConditionsByZip() as conditions\">\n\t\t<app-tabs *ngIf=\"conditions?.length else noData\"\n\t\t\t\t  (close)=\"removeLocation($event)\">\n\t\t\t<app-tab-panel *ngFor=\"let condition of conditions; let i = index\"\n\t\t\t\t\t\t   [header]=\"condition | conditionTabLabel\">\n\t\t\t\t<app-condition-card [condition]=\"condition\"></app-condition-card>\n\t\t\t</app-tab-panel>\n\t\t</app-tabs>\n\t</ng-container>\n\n\t<ng-template #noData>\n\t\t<div class=\"alert alert-info\">\n\t\t\tNo conditions loaded, please enter an US zip code\n\t\t</div>\n\t</ng-template>\n</div>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_current-conditions_current-conditions_component_ts.js.map