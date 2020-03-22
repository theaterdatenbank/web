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
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-menu/search-menu.component */ "./src/app/search-menu/search-menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auto-complete/auto-complete.component */ "./src/app/auto-complete/auto-complete.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./event-ansicht/event-ansicht.component */ "./src/app/event-ansicht/event-ansicht.component.ts");
/* harmony import */ var _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./einzelnes-event/einzelnes-event.component */ "./src/app/einzelnes-event/einzelnes-event.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _marked_event_counter_marked_event_counter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./marked-event-counter/marked-event-counter.component */ "./src/app/marked-event-counter/marked-event-counter.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_4__["SearchMenuComponent"],
        _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteComponent"],
        _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_11__["EventAnsichtComponent"],
        _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_12__["EinzelnesEventComponent"],
        _marked_event_counter_marked_event_counter_component__WEBPACK_IMPORTED_MODULE_14__["MarkedEventCounterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_4__["SearchMenuComponent"],
                    _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteComponent"],
                    _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_11__["EventAnsichtComponent"],
                    _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_12__["EinzelnesEventComponent"],
                    _marked_event_counter_marked_event_counter_component__WEBPACK_IMPORTED_MODULE_14__["MarkedEventCounterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");



class EinzelnesEventComponent {
    constructor() {
        this.checkedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isInfoMooreHidden = true;
    }
    get bildLink() {
        return this.dasEvent.thumbnail || "TODO: Default bild";
    }
    ngOnInit() {
    }
    checkboxChanged($event) {
        this.checkedEvent.emit($event.source.value);
    }
}
EinzelnesEventComponent.ɵfac = function EinzelnesEventComponent_Factory(t) { return new (t || EinzelnesEventComponent)(); };
EinzelnesEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EinzelnesEventComponent, selectors: [["app-einzelnes-event"]], inputs: { dasEvent: "dasEvent" }, outputs: { checkedEvent: "checkedEvent" }, decls: 16, vars: 6, consts: [[1, "dasEventContainer"], [1, "itemDate"], [1, "itemDateDay"], [1, "itemDateMonth"], [1, "itemPicture", 3, "click"], ["alt", "vorschau", 3, "src"], [1, "itemEventinfo", 3, "click"], [1, "itemEventinfoMore", 3, "hidden"], [1, "itemCheckbox"], [3, "value", "change"]], template: function EinzelnesEventComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EinzelnesEventComponent_Template_mat_checkbox_change_15_listener($event) { return ctx.checkboxChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    } }, directives: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_1__["MatCheckbox"]], styles: [".dasEventContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding: 5%;\r\n  width: 70%;\r\n  max-height: 10%;\r\n\r\n\r\n}\r\n\r\n.itemDate[_ngcontent-%COMP%] {\r\n  order: 0;\r\n  background-color: aqua;\r\n  height: 100%;\r\n}\r\n\r\n.itemDateDay[_ngcontent-%COMP%] {\r\n\r\n  align-items: center;\r\n\r\n  font-size: 300%;\r\n  order: 0;}\r\n\r\n.itemDateMonth[_ngcontent-%COMP%] {\r\n  font-size: medium;\r\n  order: 0;\r\n\r\n}\r\n\r\n.itemPicture[_ngcontent-%COMP%] {\r\n  order: 1;\r\n  background-color: yellow;\r\n}\r\n\r\n.itemEventinfo[_ngcontent-%COMP%] {\r\n  order: 2;\r\n  background-color: blueviolet;\r\n  float: left;\r\n  overflow: none;\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.itemEventinfoMore[_ngcontent-%COMP%] {\r\n  color: aqua;\r\n  order: 2;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.itemCheckbox[_ngcontent-%COMP%] {\r\n  order: 3;\r\n  align-items: flex-end;\r\n  background-color: green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWluemVsbmVzLWV2ZW50L2VpbnplbG5lcy1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlOzs7QUFHakI7O0FBRUE7RUFDRSxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxtQkFBbUI7O0VBRW5CLGVBQWU7RUFDZixRQUFRLENBQUM7O0FBR1g7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTs7QUFFVjs7QUFFQTtFQUNFLFFBQVE7RUFDUix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9laW56ZWxuZXMtZXZlbnQvZWluemVsbmVzLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzRXZlbnRDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWF4LWhlaWdodDogMTAlO1xyXG5cclxuXHJcbn1cclxuXHJcbi5pdGVtRGF0ZSB7XHJcbiAgb3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtRGF0ZURheSB7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMzAwJTtcclxuICBvcmRlcjogMDt9XHJcblxyXG5cclxuLml0ZW1EYXRlTW9udGgge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIG9yZGVyOiAwO1xyXG5cclxufVxyXG5cclxuLml0ZW1QaWN0dXJlIHtcclxuICBvcmRlcjogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbi5pdGVtRXZlbnRpbmZvIHtcclxuICBvcmRlcjogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBub25lO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uaXRlbUV2ZW50aW5mb01vcmUge1xyXG4gIGNvbG9yOiBhcXVhO1xyXG4gIG9yZGVyOiAyO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG5cclxuLml0ZW1DaGVja2JveCB7XHJcbiAgb3JkZXI6IDM7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EinzelnesEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-einzelnes-event",
                templateUrl: "./einzelnes-event.component.html",
                styleUrls: ["./einzelnes-event.component.css"]
            }]
    }], function () { return []; }, { dasEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
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
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-einzelnes-event", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedEvent", function EventAnsichtComponent_app_einzelnes_event_1_Template_app_einzelnes_event_checkedEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.checkProvider($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const einzelnesEvent_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dasEvent", einzelnesEvent_r4);
} }
class EventAnsichtComponent {
    constructor() {
        this.checkedEvents = [];
        this.savedEvents = [];
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
        if (this.savedEvents.length < this.alleEvents.length) {
            this.savedEvents = this.alleEvents;
        }
        this.alleEvents = $event;
    }
    checkProvider($event) {
        let event = this.alleEvents.filter(evt => evt.eventName == $event)[0];
        if (this.checkedEvents.indexOf(event) >= 0) {
            this.checkedEvents = this.checkedEvents.filter(ce => ce.eventName != event.eventName);
            this.eventCounter = this.checkedEvents.length;
        }
        else {
            this.eventCounter = this.checkedEvents.push(event);
        }
    }
    showFavEvents($event) {
        if ($event == "show") {
            if (this.checkedEvents.length == 0) {
                this.updateAlleEvents(this.savedEvents);
            }
            else if (this.checkedEvents.length == this.alleEvents.length) {
                this.updateAlleEvents(this.savedEvents);
            }
            else {
                this.updateAlleEvents(this.checkedEvents);
            }
        }
    }
}
EventAnsichtComponent.ɵfac = function EventAnsichtComponent_Factory(t) { return new (t || EventAnsichtComponent)(); };
EventAnsichtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventAnsichtComponent, selectors: [["app-event-ansicht"]], outputs: { eventCounter: "eventCounter" }, decls: 2, vars: 2, consts: [[3, "count", "gefundeneEvents", "showCheckboxedEvents"], [3, "dasEvent", "checkedEvent", 4, "ngFor", "ngForOf"], [3, "dasEvent", "checkedEvent"]], template: function EventAnsichtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gefundeneEvents", function EventAnsichtComponent_Template_app_search_menu_gefundeneEvents_0_listener($event) { return ctx.updateAlleEvents($event); })("showCheckboxedEvents", function EventAnsichtComponent_Template_app_search_menu_showCheckboxedEvents_0_listener($event) { return ctx.showFavEvents($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventAnsichtComponent_app_einzelnes_event_1_Template, 1, 1, "app-einzelnes-event", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", ctx.eventCounter);
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
    }], function () { return []; }, { eventCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/marked-event-counter/marked-event-counter.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/marked-event-counter/marked-event-counter.component.ts ***!
  \************************************************************************/
/*! exports provided: MarkedEventCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedEventCounterComponent", function() { return MarkedEventCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MarkedEventCounterComponent {
    constructor() {
        this.showSelectedEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.count = 0;
    }
    getSelectedEvents() {
        this.showSelectedEvents.emit("show");
    }
}
MarkedEventCounterComponent.ɵfac = function MarkedEventCounterComponent_Factory(t) { return new (t || MarkedEventCounterComponent)(); };
MarkedEventCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarkedEventCounterComponent, selectors: [["app-marked-event-counter"]], inputs: { count: "count" }, outputs: { showSelectedEvents: "showSelectedEvents" }, decls: 2, vars: 1, consts: [[1, "searchMenu-element", "favouriteCounter", 3, "click"]], template: function MarkedEventCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkedEventCounterComponent_Template_div_click_0_listener() { return ctx.getSelectedEvents(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.count, "\n");
    } }, styles: [".favouriteCounter[_ngcontent-%COMP%]{\r\n  border-color: black;\r\n  font-family: Impact;\r\n  font-size: xx-large;\r\n  display: flex;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2VkLWV2ZW50LWNvdW50ZXIvbWFya2VkLWV2ZW50LWNvdW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYXJrZWQtZXZlbnQtY291bnRlci9tYXJrZWQtZXZlbnQtY291bnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm91cml0ZUNvdW50ZXJ7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogSW1wYWN0O1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkedEventCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-marked-event-counter',
                templateUrl: './marked-event-counter.component.html',
                styleUrls: ['./marked-event-counter.component.css']
            }]
    }], function () { return []; }, { count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["count"]
        }], showSelectedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["showSelectedEvents"]
        }] }); })();


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
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auto-complete/auto-complete.component */ "./src/app/auto-complete/auto-complete.component.ts");
/* harmony import */ var _marked_event_counter_marked_event_counter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../marked-event-counter/marked-event-counter.component */ "./src/app/marked-event-counter/marked-event-counter.component.ts");







class SearchMenuComponent {
    constructor() {
        this.gefundeneEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCheckboxedEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    showSelectedEvents($event) {
        this.showCheckboxedEvents.emit($event);
    }
}
SearchMenuComponent.ɵfac = function SearchMenuComponent_Factory(t) { return new (t || SearchMenuComponent)(); };
SearchMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchMenuComponent, selectors: [["app-search-menu"]], inputs: { count: "count" }, outputs: { gefundeneEvents: "gefundeneEvents", showCheckboxedEvents: "showCheckboxedEvents" }, decls: 6, vars: 5, consts: [["fxLayout", "row wrap", "fxLayoutGap", "32px", "fxLayoutAlign", "flex-start", "fxLayout.lt-sm", "column", 1, "searchMenu-flex-container"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)", "fxFlex.lt-sm", "100%", 1, "searchMenu-element", "searchMenu-willIch"], ["placeholder", "Will ich", 3, "label", "mappingFunction", "value", "enterPressed"], ["fxFlex.lt-md", "0 1 calc(50% - 32px)", "fxFlex.lt-sm", "100%", 1, "searchMenu-element", "searchMenu-willIchNicht"], ["placeholder", "Will ich nicht", 3, "label", "mappingFunction", "value", "enterPressed"], [3, "count", "showSelectedEvents"]], template: function SearchMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-auto-complete", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function SearchMenuComponent_Template_app_auto_complete_value_2_listener($event) { return ctx.willIchValue = $event; })("enterPressed", function SearchMenuComponent_Template_app_auto_complete_enterPressed_2_listener() { return ctx.sucheAlles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-auto-complete", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function SearchMenuComponent_Template_app_auto_complete_value_4_listener($event) { return ctx.willIchNichtValue = $event; })("enterPressed", function SearchMenuComponent_Template_app_auto_complete_enterPressed_4_listener() { return ctx.sucheAlles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-marked-event-counter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showSelectedEvents", function SearchMenuComponent_Template_app_marked_event_counter_showSelectedEvents_5_listener($event) { return ctx.showSelectedEvents($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Will ich")("mappingFunction", ctx.suggestForInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Will ich nicht")("mappingFunction", ctx.suggestForInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", ctx.count);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteComponent"], _marked_event_counter_marked_event_counter_component__WEBPACK_IMPORTED_MODULE_5__["MarkedEventCounterComponent"]], styles: [".searchMenu-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n  padding: 5px;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.searchMenu-element[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n  border: 2px solid;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  margin: 5px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\n.searchMenu-willIch[_ngcontent-%COMP%] {\r\n  border-color: #00b649;\r\n  background: #59c55e;\r\n  flex-grow: 1;\r\n  flex-basis: auto;\r\n\r\n}\r\n\r\n\r\n.searchMenu-willIchNicht[_ngcontent-%COMP%] {\r\n  border-color: #ef0002;\r\n  background: #fb9296;\r\n  flex-grow: 1;\r\n  flex-basis: auto;\r\n\r\n}\r\n\r\n\r\n.favouriteCounter[_ngcontent-%COMP%] {\r\n  flex-grow: 0;\r\n  border-color: black;\r\n  font-family: Impact;\r\n  font-size: xx-large;\r\n  display: flex;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLW1lbnUvc2VhcmNoLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjs7QUFFbEI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtbWVudS9zZWFyY2gtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaE1lbnUtZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnNlYXJjaE1lbnUtZWxlbWVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBtYXJnaW46IDVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zZWFyY2hNZW51LXdpbGxJY2gge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYjY0OTtcclxuICBiYWNrZ3JvdW5kOiAjNTljNTVlO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWJhc2lzOiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnNlYXJjaE1lbnUtd2lsbEljaE5pY2h0IHtcclxuICBib3JkZXItY29sb3I6ICNlZjAwMDI7XHJcbiAgYmFja2dyb3VuZDogI2ZiOTI5NjtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxuXHJcbn1cclxuXHJcbi5mYXZvdXJpdGVDb3VudGVyIHtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogSW1wYWN0O1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-menu',
                templateUrl: './search-menu.component.html',
                styleUrls: ['./search-menu.component.css']
            }]
    }], function () { return []; }, { gefundeneEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showCheckboxedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["showCheckboxedEvents"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["count"]
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