(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-ansicht/event-ansicht.component */ "./src/app/event-ansicht/event-ansicht.component.ts");



class AppComponent {
    constructor() {
        this.title = 'my-theaterlist-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-ansicht");
    } }, directives: [_event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_1__["EventAnsichtComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-menu/search-menu.component */ "./src/app/search-menu/search-menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-complete/auto-complete.component */ "./src/app/auto-complete/auto-complete.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-ansicht/event-ansicht.component */ "./src/app/event-ansicht/event-ansicht.component.ts");
/* harmony import */ var _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./einzelnes-event/einzelnes-event.component */ "./src/app/einzelnes-event/einzelnes-event.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_3__["SearchMenuComponent"],
        _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteComponent"],
        _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_10__["EventAnsichtComponent"],
        _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_11__["EinzelnesEventComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_3__["SearchMenuComponent"],
                    _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteComponent"],
                    _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_10__["EventAnsichtComponent"],
                    _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_11__["EinzelnesEventComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auto-complete/auto-complete.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auto-complete/auto-complete.component.ts ***!
  \**********************************************************/
/*! exports provided: AutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");











function AutoCompleteComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
} }
class AutoCompleteComponent {
    constructor() {
        this.enterPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.options$ = this.formControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(this.mappingFunction));
        // ValueChange
        this.formControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroySubject)).subscribe(value => this.value.emit(value));
    }
    ngOnDestroy() {
        this.destroySubject.next();
        this.destroySubject.complete();
    }
    onEnter(value) {
        this.enterPressed.emit(value);
    }
}
AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) { return new (t || AutoCompleteComponent)(); };
AutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoCompleteComponent, selectors: [["app-auto-complete"]], inputs: { label: "label", mappingFunction: "mappingFunction", placeholder: "placeholder" }, outputs: { enterPressed: "enterPressed", value: "value" }, decls: 8, vars: 7, consts: [["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "keydown.enter"], ["autocomplete", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function AutoCompleteComponent_Template_input_keydown_enter_3_listener($event) { return ctx.onEnter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutoCompleteComponent_mat_option_6_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("formControl", ctx.formControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.options$));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auto-complete',
                templateUrl: './auto-complete.component.html',
                styleUrls: ['./auto-complete.component.css']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mappingFunction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enterPressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/einzelnes-event/Event.ts":
/*!******************************************!*\
  !*** ./src/app/einzelnes-event/Event.ts ***!
  \******************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
class Event {
    constructor(eventDate, eventName, subtitle, genre, eventText, organistion, timeSpan, thumbnail, streamingLink, longTimeAvailable, availableFrom, availableTil) {
        this.eventDate = eventDate;
        this.eventName = eventName;
        this.subtitle = subtitle;
        this.genre = genre;
        this.eventText = eventText;
        this.organistion = organistion;
        this.timeSpan = timeSpan;
        this.thumbnail = thumbnail;
        this.streamingLink = streamingLink;
        this.longTimeAvailable = longTimeAvailable;
        this.availableFrom = availableFrom;
        this.availableTil = availableTil;
    }
}


/***/ }),

/***/ "./src/app/einzelnes-event/Organiser.ts":
/*!**********************************************!*\
  !*** ./src/app/einzelnes-event/Organiser.ts ***!
  \**********************************************/
/*! exports provided: Organiser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organiser", function() { return Organiser; });
class Organiser {
    constructor(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/einzelnes-event/TimeSpan.ts":
/*!*********************************************!*\
  !*** ./src/app/einzelnes-event/TimeSpan.ts ***!
  \*********************************************/
/*! exports provided: TimeSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpan", function() { return TimeSpan; });
class TimeSpan {
    constructor(totalMinutes) {
        this.totalMinutes = totalMinutes;
    }
}


/***/ }),

/***/ "./src/app/einzelnes-event/einzelnes-event.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/einzelnes-event/einzelnes-event.component.ts ***!
  \**************************************************************/
/*! exports provided: EinzelnesEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EinzelnesEventComponent", function() { return EinzelnesEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EinzelnesEventComponent {
    constructor() {
        this.isInfoMooreHidden = true;
    }
    get bildLink() {
        return this.dasEvent.thumbnail || "TODO: Default bild";
    }
    ngOnInit() {
    }
}
EinzelnesEventComponent.ɵfac = function EinzelnesEventComponent_Factory(t) { return new (t || EinzelnesEventComponent)(); };
EinzelnesEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EinzelnesEventComponent, selectors: [["app-einzelnes-event"]], inputs: { dasEvent: "dasEvent" }, decls: 16, vars: 6, consts: [[1, "dasEventContainer"], [1, "itemDate"], [1, "itemDateDay"], [1, "itemDateMonth"], [1, "itemPicture", 3, "click"], ["alt", "vorschau", 3, "src"], [1, "itemEventinfo", 3, "click"], [1, "itemEventinfoMore", 3, "hidden"], [1, "itemCheckbox"], ["type", "checkbox", "id", "merken", "name", "merken", 3, "value"]], template: function EinzelnesEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EinzelnesEventComponent_Template_div_click_6_listener() { return ctx.isInfoMooreHidden = !ctx.isInfoMooreHidden; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EinzelnesEventComponent_Template_div_click_8_listener() { return ctx.isInfoMooreHidden = !ctx.isInfoMooreHidden; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bildLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dasEvent.eventName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dasEvent.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isInfoMooreHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dasEvent.eventText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.dasEvent.eventName);
    } }, styles: [".dasEventContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding: 5%;\r\n  width: 70%;\r\n  max-height: 10%;\r\n\r\n\r\n}\r\n\r\n.itemDate[_ngcontent-%COMP%] {\r\n  order: 0;\r\n  background-color: aqua;\r\n  height: 100%;\r\n}\r\n\r\n.itemDateDay[_ngcontent-%COMP%] {\r\n\r\n  align-items: center;\r\n  font-size: 300%;\r\n  order: 0;}\r\n\r\n.itemDateMonth[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n  order: 0;\r\n\r\n}\r\n\r\n.itemPicture[_ngcontent-%COMP%] {\r\n  order: 1;\r\n  background-color: yellow;\r\n}\r\n\r\n.itemEventinfo[_ngcontent-%COMP%] {\r\n  order: 2;\r\n  background-color: blueviolet;\r\n  float: left;\r\n  overflow: none;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.itemEventinfoMore[_ngcontent-%COMP%] {\r\n  color: aqua;\r\n  order: 2;\r\n}\r\n\r\n.itemCheckbox[_ngcontent-%COMP%] {\r\n  order: 3;\r\n  align-items: flex-end;\r\n  background-color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWluemVsbmVzLWV2ZW50L2VpbnplbG5lcy1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlOzs7QUFHakI7O0FBRUE7RUFDRSxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFFBQVEsQ0FBQzs7QUFHWDtFQUNFLGlCQUFpQjtFQUNqQixRQUFROztBQUVWOztBQUVBO0VBQ0UsUUFBUTtFQUNSLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFFBQVE7RUFDUiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZWluemVsbmVzLWV2ZW50L2VpbnplbG5lcy1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc0V2ZW50Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiA1JTtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwJTtcclxuXHJcblxyXG59XHJcblxyXG4uaXRlbURhdGUge1xyXG4gIG9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaXRlbURhdGVEYXkge1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzAwJTtcclxuICBvcmRlcjogMDt9XHJcblxyXG5cclxuLml0ZW1EYXRlTW9udGgge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIG9yZGVyOiAwO1xyXG5cclxufVxyXG5cclxuLml0ZW1QaWN0dXJlIHtcclxuICBvcmRlcjogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5pdGVtRXZlbnRpbmZvIHtcclxuICBvcmRlcjogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBub25lO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaXRlbUV2ZW50aW5mb01vcmUge1xyXG4gIGNvbG9yOiBhcXVhO1xyXG4gIG9yZGVyOiAyO1xyXG59XHJcblxyXG4uaXRlbUNoZWNrYm94IHtcclxuICBvcmRlcjogMztcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EinzelnesEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-einzelnes-event",
                templateUrl: "./einzelnes-event.component.html",
                styleUrls: ["./einzelnes-event.component.css"]
            }]
    }], function () { return []; }, { dasEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/event-ansicht/event-ansicht.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/event-ansicht/event-ansicht.component.ts ***!
  \**********************************************************/
/*! exports provided: EventAnsichtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventAnsichtComponent", function() { return EventAnsichtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../einzelnes-event/Event */ "./src/app/einzelnes-event/Event.ts");
/* harmony import */ var _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../einzelnes-event/Organiser */ "./src/app/einzelnes-event/Organiser.ts");
/* harmony import */ var _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../einzelnes-event/TimeSpan */ "./src/app/einzelnes-event/TimeSpan.ts");
/* harmony import */ var _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-menu/search-menu.component */ "./src/app/search-menu/search-menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../einzelnes-event/einzelnes-event.component */ "./src/app/einzelnes-event/einzelnes-event.component.ts");








function EventAnsichtComponent_app_einzelnes_event_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-einzelnes-event", 2);
} if (rf & 2) {
    const einzelnesEvent_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dasEvent", einzelnesEvent_r4);
} }
class EventAnsichtComponent {
    constructor() {
        this.alleEvents = [
            new _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__["Event"]('2020-05-01T22:50:00Z', 'AIDA', 'Die Beschreibung von Aida', 
            // tslint:disable-next-line:max-line-length
            'Der Volltext', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', new _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__["Organiser"]('Ein Veranstalter'), new _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__["TimeSpan"](90), undefined, 'https://my.stream', true, '2020-01-01T22:00:00Z', '2021-05-01T22:00:00Z'),
            new _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__["Event"]('2020-05-14T22:00:00Z', 'Hamlet', 'Sein oder nicht sein', 
            // tslint:disable-next-line:max-line-length
            'Der Volltext von Hamlet', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', new _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__["Organiser"]('Ein anderer Veranstalter'), new _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__["TimeSpan"](65), undefined, 'https://my.other.stream', false, '2020-05-01T22:00:00Z', '2020-05-02T22:00:00Z'),
            new _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__["Event"]('2020-06-13T22:00:00Z', 'Event3', 'Das Event', 
            // tslint:disable-next-line:max-line-length
            'Was soll ich hier schon groß schreiben?', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', new _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__["Organiser"]('Nochmal wer anders'), new _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__["TimeSpan"](67), undefined, 'https://the.event.stream', true, '2020-03-01T22:00:00Z', '2020-05-01T22:00:00Z')
        ];
    }
    ngOnInit() {
    }
    updateAlleEvents($event) {
        this.alleEvents = $event;
    }
}
EventAnsichtComponent.ɵfac = function EventAnsichtComponent_Factory(t) { return new (t || EventAnsichtComponent)(); };
EventAnsichtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventAnsichtComponent, selectors: [["app-event-ansicht"]], decls: 2, vars: 1, consts: [[3, "gefundeneEvents"], [3, "dasEvent", 4, "ngFor", "ngForOf"], [3, "dasEvent"]], template: function EventAnsichtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gefundeneEvents", function EventAnsichtComponent_Template_app_search_menu_gefundeneEvents_0_listener($event) { return ctx.updateAlleEvents($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventAnsichtComponent_app_einzelnes_event_1_Template, 1, 1, "app-einzelnes-event", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alleEvents);
    } }, directives: [_search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_4__["SearchMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_6__["EinzelnesEventComponent"]], styles: [".event-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.singleEvent[_ngcontent-%COMP%] {\r\n  background-color: #86cfda;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtYW5zaWNodC9ldmVudC1hbnNpY2h0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWFuc2ljaHQvZXZlbnQtYW5zaWNodC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaW5nbGVFdmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2Y2ZkYTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventAnsichtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-ansicht',
                templateUrl: './event-ansicht.component.html',
                styleUrls: ['./event-ansicht.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/search-menu/search-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-menu/search-menu.component.ts ***!
  \******************************************************/
/*! exports provided: SearchMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMenuComponent", function() { return SearchMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal-compatibility */ "./node_modules/rxjs/_esm2015/internal-compatibility/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auto-complete/auto-complete.component */ "./src/app/auto-complete/auto-complete.component.ts");





class SearchMenuComponent {
    constructor() {
        this.gefundeneEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.willIchValue = '';
        this.willIchNichtValue = '';
        this.sucheAlles();
    }
    suggestForInput(input) {
        return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["ajaxGet"])('http://florianscholz.net:5000/api/ajax/genres')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => response.response), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(genres => genres.map(genre => genre.description)
            .filter(description => description.startsWith(input))));
    }
    ngOnDestroy() {
    }
    sucheAlles() {
        Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["ajaxGet"])(`http://florianscholz.net:5000/api/ajax/events_filtered?wanted=${this.willIchValue}&notwanted=${this.willIchNichtValue}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.response))
            .subscribe(events => this.gefundeneEvents.emit(events));
    }
}
SearchMenuComponent.ɵfac = function SearchMenuComponent_Factory(t) { return new (t || SearchMenuComponent)(); };
SearchMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchMenuComponent, selectors: [["app-search-menu"]], outputs: { gefundeneEvents: "gefundeneEvents" }, decls: 5, vars: 4, consts: [[1, "searchMenu-flex-container"], ["placeholder", "Will ich", 1, "searchMenu-element", "searchMenu-willIch", 3, "label", "mappingFunction", "value", "enterPressed"], ["placeholder", "Will ich nicht", 1, "searchMenu-element", "searchMenu-willIchNicht", 3, "label", "mappingFunction", "value", "enterPressed"], [1, "searchMenu-element", "favouriteCounter"]], template: function SearchMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-auto-complete", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function SearchMenuComponent_Template_app_auto_complete_value_1_listener($event) { return ctx.willIchValue = $event; })("enterPressed", function SearchMenuComponent_Template_app_auto_complete_enterPressed_1_listener() { return ctx.sucheAlles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-auto-complete", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function SearchMenuComponent_Template_app_auto_complete_value_2_listener($event) { return ctx.willIchNichtValue = $event; })("enterPressed", function SearchMenuComponent_Template_app_auto_complete_enterPressed_2_listener() { return ctx.sucheAlles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Will ich")("mappingFunction", ctx.suggestForInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Will ich nicht")("mappingFunction", ctx.suggestForInput);
    } }, directives: [_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_3__["AutoCompleteComponent"]], styles: [".searchMenu-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n  padding: 5px;\r\n}\r\n\r\n.searchMenu-element[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n  border: 2px solid;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n\r\n}\r\n\r\n.searchMenu-willIch[_ngcontent-%COMP%] {\r\n  border-color: #00b649;\r\n  background: #59c55e;\r\n}\r\n\r\n.searchMenu-willIchNicht[_ngcontent-%COMP%] {\r\n  border-color: #ef0002;\r\n  background: #fb9296;\r\n}\r\n\r\n.favouriteCounter[_ngcontent-%COMP%] {\r\n  border-color: black;\r\n  font-family: Impact;\r\n  font-size: xx-large;\r\n  display: flex;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLW1lbnUvc2VhcmNoLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLW1lbnUvc2VhcmNoLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hNZW51LWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNlYXJjaE1lbnUtZWxlbWVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcbn1cclxuXHJcbi5zZWFyY2hNZW51LXdpbGxJY2gge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYjY0OTtcclxuICBiYWNrZ3JvdW5kOiAjNTljNTVlO1xyXG59XHJcblxyXG4uc2VhcmNoTWVudS13aWxsSWNoTmljaHQge1xyXG4gIGJvcmRlci1jb2xvcjogI2VmMDAwMjtcclxuICBiYWNrZ3JvdW5kOiAjZmI5Mjk2O1xyXG59XHJcblxyXG4uZmF2b3VyaXRlQ291bnRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogSW1wYWN0O1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-menu',
                templateUrl: './search-menu.component.html',
                styleUrls: ['./search-menu.component.css']
            }]
    }], function () { return []; }, { gefundeneEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\projects\web\frontend\my-theaterlist-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map