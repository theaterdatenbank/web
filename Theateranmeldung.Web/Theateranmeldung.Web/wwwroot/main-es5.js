function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./event-ansicht/event-ansicht.component */
    "./src/app/event-ansicht/event-ansicht.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'my-theaterlist-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-ansicht");
        }
      },
      directives: [_event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_1__["EventAnsichtComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-menu/search-menu.component */
    "./src/app/search-menu/search-menu.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auto-complete/auto-complete.component */
    "./src/app/auto-complete/auto-complete.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./event-ansicht/event-ansicht.component */
    "./src/app/event-ansicht/event-ansicht.component.ts");
    /* harmony import */


    var _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./einzelnes-event/einzelnes-event.component */
    "./src/app/einzelnes-event/einzelnes-event.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_3__["SearchMenuComponent"], _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteComponent"], _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_10__["EventAnsichtComponent"], _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_11__["EinzelnesEventComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_3__["SearchMenuComponent"], _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteComponent"], _event_ansicht_event_ansicht_component__WEBPACK_IMPORTED_MODULE_10__["EventAnsichtComponent"], _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_11__["EinzelnesEventComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auto-complete/auto-complete.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/auto-complete/auto-complete.component.ts ***!
    \**********************************************************/

  /*! exports provided: AutoCompleteComponent */

  /***/
  function srcAppAutoCompleteAutoCompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function () {
      return AutoCompleteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AutoCompleteComponent_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2, " ");
      }
    }

    var AutoCompleteComponent =
    /*#__PURE__*/
    function () {
      function AutoCompleteComponent() {
        _classCallCheck(this, AutoCompleteComponent);

        this.enterPressed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(AutoCompleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.options$ = this.formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(this.mappingFunction)); //ValueChange

          this.formControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroySubject)).subscribe(function (value) {
            return _this.value.emit(value);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroySubject.next();
          this.destroySubject.complete();
        }
      }, {
        key: "onEnter",
        value: function onEnter(value) {
          this.enterPressed.emit(value);
        }
      }]);

      return AutoCompleteComponent;
    }();

    AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) {
      return new (t || AutoCompleteComponent)();
    };

    AutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutoCompleteComponent,
      selectors: [["app-auto-complete"]],
      inputs: {
        label: "label",
        mappingFunction: "mappingFunction",
        placeholder: "placeholder"
      },
      outputs: {
        enterPressed: "enterPressed",
        value: "value"
      },
      decls: 8,
      vars: 7,
      consts: [["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "keydown.enter"], ["autocomplete", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function AutoCompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function AutoCompleteComponent_Template_input_keydown_enter_3_listener($event) {
            return ctx.onEnter($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutoCompleteComponent_mat_option_6_Template, 2, 2, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("formControl", ctx.formControl)("matAutocomplete", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.options$));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG8tY29tcGxldGUvYXV0by1jb21wbGV0ZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-auto-complete",
          templateUrl: "./auto-complete.component.html",
          styleUrls: ["./auto-complete.component.css"]
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["label"]
        }],
        mappingFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mappingFunction"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["placeholder"]
        }],
        enterPressed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["enterPressed"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["value"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/einzelnes-event/Event.ts":
  /*!******************************************!*\
    !*** ./src/app/einzelnes-event/Event.ts ***!
    \******************************************/

  /*! exports provided: Event */

  /***/
  function srcAppEinzelnesEventEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Event", function () {
      return Event;
    });

    var Event = function Event(eventDate, eventName, subTitle, genre, eventText, organistion, timeSpan, thumbnail, streamingLink, longTimeAvailable, availableFrom, availableTil) {
      _classCallCheck(this, Event);

      this.eventDate = eventDate;
      this.eventName = eventName;
      this.subTitle = subTitle;
      this.genre = genre;
      this.eventText = eventText;
      this.organistion = organistion;
      this.timeSpan = timeSpan;
      this.thumbnail = thumbnail;
      this.streamingLink = streamingLink;
      this.longTimeAvailable = longTimeAvailable;
      this.availableFrom = availableFrom;
      this.availableTil = availableTil;
    };
    /***/

  },

  /***/
  "./src/app/einzelnes-event/Organiser.ts":
  /*!**********************************************!*\
    !*** ./src/app/einzelnes-event/Organiser.ts ***!
    \**********************************************/

  /*! exports provided: Organiser */

  /***/
  function srcAppEinzelnesEventOrganiserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Organiser", function () {
      return Organiser;
    });

    var Organiser = function Organiser(name) {
      _classCallCheck(this, Organiser);

      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/einzelnes-event/TimeSpan.ts":
  /*!*********************************************!*\
    !*** ./src/app/einzelnes-event/TimeSpan.ts ***!
    \*********************************************/

  /*! exports provided: TimeSpan */

  /***/
  function srcAppEinzelnesEventTimeSpanTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeSpan", function () {
      return TimeSpan;
    });

    var TimeSpan = function TimeSpan(totalMinutes) {
      _classCallCheck(this, TimeSpan);

      this.totalMinutes = totalMinutes;
    };
    /***/

  },

  /***/
  "./src/app/einzelnes-event/einzelnes-event.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/einzelnes-event/einzelnes-event.component.ts ***!
    \**************************************************************/

  /*! exports provided: EinzelnesEventComponent */

  /***/
  function srcAppEinzelnesEventEinzelnesEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EinzelnesEventComponent", function () {
      return EinzelnesEventComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EinzelnesEventComponent =
    /*#__PURE__*/
    function () {
      function EinzelnesEventComponent() {
        _classCallCheck(this, EinzelnesEventComponent);
      }

      _createClass(EinzelnesEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "bildLink",
        get: function get() {
          return this.dasEvent.thumbnail || 'TODO: Default bild';
        }
      }]);

      return EinzelnesEventComponent;
    }();

    EinzelnesEventComponent.ɵfac = function EinzelnesEventComponent_Factory(t) {
      return new (t || EinzelnesEventComponent)();
    };

    EinzelnesEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EinzelnesEventComponent,
      selectors: [["app-einzelnes-event"]],
      inputs: {
        dasEvent: "dasEvent"
      },
      decls: 16,
      vars: 3,
      consts: [[1, "dasEventContainer"], [1, "itemDate"], [1, "itemDateDay"], [1, "itemDateMonth"], [1, "itemPicture"], ["alt", "vorschau", 3, "src"], [1, "itemEventinfo"], [1, "itemEventinfoMore"], [1, "itemCheckbox"], ["type", "checkbox", "id", "merken", "name", "merken", 3, "value"]],
      template: function EinzelnesEventComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "some text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consetetur sadillllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooollllpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bildLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dasEvent.eventName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.dasEvent.eventName);
        }
      },
      styles: [".dasEventContainer[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding: 5%;\r\n  width: 70%;\r\n  max-height: 10%;\r\n\r\n\r\n}\r\n\r\n  .itemDate[_ngcontent-%COMP%]{\r\n    order: 0;\r\n    background-color: aqua;\r\n    height: 100%;\r\n  }\r\n\r\n  .itemDateDay[_ngcontent-%COMP%]{\r\n\r\n        align-items: center;\r\n        font-size: 200%;\r\n        order: 0;\r\n      }\r\n\r\n  .itemDateMonth[_ngcontent-%COMP%]{\r\n        font-size: medium;\r\n        order: 0;\r\n\r\n      }\r\n\r\n  .itemPicture[_ngcontent-%COMP%]{\r\n  order: 1;\r\n  background-color: yellow;\r\n  }\r\n\r\n  .itemEventinfo[_ngcontent-%COMP%]{\r\n    order: 2;\r\n    background-color: blueviolet;\r\n    float: left;\r\n    overflow: none;\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .EventinfoMore[_ngcontent-%COMP%]{\r\n        color: aqua;\r\n        order: 2;\r\n      }\r\n\r\n  .itemCheckbox[_ngcontent-%COMP%]{\r\n  order: 3;\r\n  align-items: flex-end;\r\n  background-color: green;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWluemVsbmVzLWV2ZW50L2VpbnplbG5lcy1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlOzs7QUFHakI7O0VBRUU7SUFDRSxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFDSTs7UUFFRSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLFFBQVE7TUFDVjs7RUFDQTtRQUNFLGlCQUFpQjtRQUNqQixRQUFROztNQUVWOztFQUVKO0VBQ0EsUUFBUTtFQUNSLHdCQUF3QjtFQUN4Qjs7RUFFQTtJQUNFLFFBQVE7SUFDUiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUNJO1FBQ0UsV0FBVztRQUNYLFFBQVE7TUFDVjs7RUFFSjtFQUNBLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZWluemVsbmVzLWV2ZW50L2VpbnplbG5lcy1ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc0V2ZW50Q29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWF4LWhlaWdodDogMTAlO1xyXG5cclxuXHJcbn1cclxuXHJcbiAgLml0ZW1EYXRle1xyXG4gICAgb3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAgICAgLml0ZW1EYXRlRGF5e1xyXG5cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgICAgICBvcmRlcjogMDtcclxuICAgICAgfVxyXG4gICAgICAuaXRlbURhdGVNb250aHtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBvcmRlcjogMDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgLml0ZW1QaWN0dXJle1xyXG4gIG9yZGVyOiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB9XHJcblxyXG4gIC5pdGVtRXZlbnRpbmZve1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogbm9uZTtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAgICAgLkV2ZW50aW5mb01vcmV7XHJcbiAgICAgICAgY29sb3I6IGFxdWE7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIH1cclxuXHJcbiAgLml0ZW1DaGVja2JveHtcclxuICBvcmRlcjogMztcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EinzelnesEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-einzelnes-event',
          templateUrl: './einzelnes-event.component.html',
          styleUrls: ['./einzelnes-event.component.css']
        }]
      }], function () {
        return [];
      }, {
        dasEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/event-ansicht/event-ansicht.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/event-ansicht/event-ansicht.component.ts ***!
    \**********************************************************/

  /*! exports provided: EventAnsichtComponent */

  /***/
  function srcAppEventAnsichtEventAnsichtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventAnsichtComponent", function () {
      return EventAnsichtComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../einzelnes-event/Event */
    "./src/app/einzelnes-event/Event.ts");
    /* harmony import */


    var _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../einzelnes-event/Organiser */
    "./src/app/einzelnes-event/Organiser.ts");
    /* harmony import */


    var _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../einzelnes-event/TimeSpan */
    "./src/app/einzelnes-event/TimeSpan.ts");
    /* harmony import */


    var _search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../search-menu/search-menu.component */
    "./src/app/search-menu/search-menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../einzelnes-event/einzelnes-event.component */
    "./src/app/einzelnes-event/einzelnes-event.component.ts");

    function EventAnsichtComponent_app_einzelnes_event_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-einzelnes-event", 2);
      }

      if (rf & 2) {
        var einzelnesEvent_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dasEvent", einzelnesEvent_r4);
      }
    }

    var EventAnsichtComponent =
    /*#__PURE__*/
    function () {
      function EventAnsichtComponent() {
        _classCallCheck(this, EventAnsichtComponent);

        this.alleEvents = [new _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__["Event"]('2020-05-01T22:50:00Z', 'AIDA', 'Die Beschreibung von Aida', // tslint:disable-next-line:max-line-length
        'Der Volltext', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', new _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__["Organiser"]('Ein Veranstalter'), new _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__["TimeSpan"](90), undefined, 'https://my.stream', true, '2020-01-01T22:00:00Z', '2021-05-01T22:00:00Z'), new _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__["Event"]('2020-05-14T22:00:00Z', 'Hamlet', 'Sein oder nicht sein', // tslint:disable-next-line:max-line-length
        'Der Volltext von Hamlet', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', new _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__["Organiser"]('Ein anderer Veranstalter'), new _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__["TimeSpan"](65), undefined, 'https://my.other.stream', false, '2020-05-01T22:00:00Z', '2020-05-02T22:00:00Z'), new _einzelnes_event_Event__WEBPACK_IMPORTED_MODULE_1__["Event"]('2020-06-13T22:00:00Z', 'Event3', 'Das Event', // tslint:disable-next-line:max-line-length
        'Was soll ich hier schon groß schreiben?', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', new _einzelnes_event_Organiser__WEBPACK_IMPORTED_MODULE_2__["Organiser"]('Nochmal wer anders'), new _einzelnes_event_TimeSpan__WEBPACK_IMPORTED_MODULE_3__["TimeSpan"](67), undefined, 'https://the.event.stream', true, '2020-03-01T22:00:00Z', '2020-05-01T22:00:00Z')];
      }

      _createClass(EventAnsichtComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateAlleEvents",
        value: function updateAlleEvents($event) {
          this.alleEvents = $event;
        }
      }]);

      return EventAnsichtComponent;
    }();

    EventAnsichtComponent.ɵfac = function EventAnsichtComponent_Factory(t) {
      return new (t || EventAnsichtComponent)();
    };

    EventAnsichtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventAnsichtComponent,
      selectors: [["app-event-ansicht"]],
      decls: 2,
      vars: 1,
      consts: [[3, "gefundeneEvents"], [3, "dasEvent", 4, "ngFor", "ngForOf"], [3, "dasEvent"]],
      template: function EventAnsichtComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gefundeneEvents", function EventAnsichtComponent_Template_app_search_menu_gefundeneEvents_0_listener($event) {
            return ctx.updateAlleEvents($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventAnsichtComponent_app_einzelnes_event_1_Template, 1, 1, "app-einzelnes-event", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alleEvents);
        }
      },
      directives: [_search_menu_search_menu_component__WEBPACK_IMPORTED_MODULE_4__["SearchMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _einzelnes_event_einzelnes_event_component__WEBPACK_IMPORTED_MODULE_6__["EinzelnesEventComponent"]],
      styles: [".event-flex-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.singleEvent[_ngcontent-%COMP%]{\r\n  background-color: #86cfda;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtYW5zaWNodC9ldmVudC1hbnNpY2h0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZXZlbnQtYW5zaWNodC9ldmVudC1hbnNpY2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtZmxleC1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5zaW5nbGVFdmVudHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODZjZmRhO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventAnsichtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-event-ansicht',
          templateUrl: './event-ansicht.component.html',
          styleUrls: ['./event-ansicht.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search-menu/search-menu.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/search-menu/search-menu.component.ts ***!
    \******************************************************/

  /*! exports provided: SearchMenuComponent */

  /***/
  function srcAppSearchMenuSearchMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchMenuComponent", function () {
      return SearchMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/internal-compatibility */
    "./node_modules/rxjs/_esm2015/internal-compatibility/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auto-complete/auto-complete.component */
    "./src/app/auto-complete/auto-complete.component.ts");

    var SearchMenuComponent =
    /*#__PURE__*/
    function () {
      function SearchMenuComponent() {
        _classCallCheck(this, SearchMenuComponent);

        this.gefundeneEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SearchMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "suggestForInput",
        value: function suggestForInput(input) {
          return Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["ajaxGet"])("http://florianscholz.net:5000/api/ajax/genres").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.response;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (genres) {
            return genres.map(function (genre) {
              return genre.description;
            }).filter(function (description) {
              return description.startsWith(input);
            });
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "sucheAlles",
        value: function sucheAlles() {
          var _this2 = this;

          Object(rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_1__["ajaxGet"])("http://florianscholz.net:5000/api/ajax/events_filtered?wanted=".concat(this.willIchValue, "&notwanted=").concat(this.willIchNichtValue)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result.response;
          })).subscribe(function (events) {
            return _this2.gefundeneEvents.emit(events);
          });
        }
      }]);

      return SearchMenuComponent;
    }();

    SearchMenuComponent.ɵfac = function SearchMenuComponent_Factory(t) {
      return new (t || SearchMenuComponent)();
    };

    SearchMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchMenuComponent,
      selectors: [["app-search-menu"]],
      outputs: {
        gefundeneEvents: "gefundeneEvents"
      },
      decls: 5,
      vars: 4,
      consts: [[1, "searchMenu-flex-container"], ["placeholder", "Will ich", 1, "searchMenu-element", "searchMenu-willIch", 3, "label", "mappingFunction", "value", "enterPressed"], ["placeholder", "Will ich nicht", 1, "searchMenu-element", "searchMenu-willIchNicht", 3, "label", "mappingFunction", "value", "enterPressed"], [1, "searchMenu-element", "favouriteCounter"]],
      template: function SearchMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-auto-complete", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function SearchMenuComponent_Template_app_auto_complete_value_1_listener($event) {
            return ctx.willIchValue = $event;
          })("enterPressed", function SearchMenuComponent_Template_app_auto_complete_enterPressed_1_listener() {
            return ctx.sucheAlles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-auto-complete", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function SearchMenuComponent_Template_app_auto_complete_value_2_listener($event) {
            return ctx.willIchNichtValue = $event;
          })("enterPressed", function SearchMenuComponent_Template_app_auto_complete_enterPressed_2_listener() {
            return ctx.sucheAlles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Will ich")("mappingFunction", ctx.suggestForInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Will ich nicht")("mappingFunction", ctx.suggestForInput);
        }
      },
      directives: [_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_3__["AutoCompleteComponent"]],
      styles: [".searchMenu-flex-container[_ngcontent-%COMP%]{\r\n  display:flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n  padding: 5px;\r\n}\r\n\r\n.searchMenu-element[_ngcontent-%COMP%]{\r\n  border-radius: 8px;\r\n  border: 2px solid;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n\r\n}\r\n\r\n.searchMenu-willIch[_ngcontent-%COMP%]{\r\n  border-color: #00b649;\r\n  background: #59c55e;\r\n}\r\n\r\n.searchMenu-willIchNicht[_ngcontent-%COMP%]{\r\n  border-color: #ef0002;\r\n  background: #fb9296;\r\n}\r\n\r\n.favouriteCounter[_ngcontent-%COMP%]{\r\n  border-color: black;\r\n  font-family: Impact;\r\n  font-size: xx-large;\r\n  display: flex;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLW1lbnUvc2VhcmNoLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLW1lbnUvc2VhcmNoLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hNZW51LWZsZXgtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hNZW51LWVsZW1lbnR7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcbn1cclxuLnNlYXJjaE1lbnUtd2lsbEljaHtcclxuICBib3JkZXItY29sb3I6ICMwMGI2NDk7XHJcbiAgYmFja2dyb3VuZDogIzU5YzU1ZTtcclxufVxyXG5cclxuLnNlYXJjaE1lbnUtd2lsbEljaE5pY2h0e1xyXG4gIGJvcmRlci1jb2xvcjogI2VmMDAwMjtcclxuICBiYWNrZ3JvdW5kOiAjZmI5Mjk2O1xyXG59XHJcblxyXG4uZmF2b3VyaXRlQ291bnRlcntcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3Q7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-search-menu",
          templateUrl: "./search-menu.component.html",
          styleUrls: ["./search-menu.component.css"]
        }]
      }], function () {
        return [];
      }, {
        gefundeneEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["gefundeneEvents"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! c:\projects\web\frontend\my-theaterlist-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map