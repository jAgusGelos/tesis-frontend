(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chairs-chairs-module"],{

/***/ "0tE1":
/*!*******************************************************!*\
  !*** ./src/app/pages/chairs/chairs-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChairsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChairsRoutingModule", function() { return ChairsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chairs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chairs.component */ "WpDr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _chairs_component__WEBPACK_IMPORTED_MODULE_1__["ChairsComponent"]
    }
];
class ChairsRoutingModule {
}
ChairsRoutingModule.ɵfac = function ChairsRoutingModule_Factory(t) { return new (t || ChairsRoutingModule)(); };
ChairsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChairsRoutingModule });
ChairsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChairsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "2/aQ":
/*!***********************************************!*\
  !*** ./src/app/pages/chairs/chairs.module.ts ***!
  \***********************************************/
/*! exports provided: ChairsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChairsModule", function() { return ChairsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _chairs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chairs.component */ "WpDr");
/* harmony import */ var _chairs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chairs-routing.module */ "0tE1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ChairsModule {
}
ChairsModule.ɵfac = function ChairsModule_Factory(t) { return new (t || ChairsModule)(); };
ChairsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ChairsModule });
ChairsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _chairs_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChairsRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChairsModule, { declarations: [_chairs_component__WEBPACK_IMPORTED_MODULE_3__["ChairsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _chairs_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChairsRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "WpDr":
/*!**************************************************!*\
  !*** ./src/app/pages/chairs/chairs.component.ts ***!
  \**************************************************/
/*! exports provided: ChairsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChairsComponent", function() { return ChairsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_assign_sec_chairs_form_assign_sec_chairs_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/assign-sec-chairs-form/assign-sec-chairs-form.component */ "r+xM");


class ChairsComponent {
    constructor() { }
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
ChairsComponent.ɵfac = function ChairsComponent_Factory(t) { return new (t || ChairsComponent)(); };
ChairsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChairsComponent, selectors: [["app-chairs"]], decls: 2, vars: 0, consts: [[1, "row", "justify-content-center"]], template: function ChairsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-assign-sec-chairs-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_assign_sec_chairs_form_assign_sec_chairs_form_component__WEBPACK_IMPORTED_MODULE_1__["AssignSecChairsFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFpcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-chairs-chairs-module.js.map