(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-evaluators-evaluators-module"],{

/***/ "5opG":
/*!**********************************************************!*\
  !*** ./src/app/pages/evaluators/evaluators.component.ts ***!
  \**********************************************************/
/*! exports provided: EvaluatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorsComponent", function() { return EvaluatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_evaluator_list_evaluator_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/evaluator-list/evaluator-list.component */ "4uew");


class EvaluatorsComponent {
    constructor() { }
    ngOnInit() {
    }
}
EvaluatorsComponent.ɵfac = function EvaluatorsComponent_Factory(t) { return new (t || EvaluatorsComponent)(); };
EvaluatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluatorsComponent, selectors: [["app-evaluators"]], decls: 1, vars: 0, template: function EvaluatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-evaluator-list");
    } }, directives: [_core_components_evaluator_list_evaluator_list_component__WEBPACK_IMPORTED_MODULE_1__["EvaluatorListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmFsdWF0b3JzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ITub":
/*!*******************************************************!*\
  !*** ./src/app/pages/evaluators/evaluators.module.ts ***!
  \*******************************************************/
/*! exports provided: EvaluatorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorsModule", function() { return EvaluatorsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evaluators_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluators-routing.module */ "P7Kl");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _evaluators_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evaluators.component */ "5opG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EvaluatorsModule {
}
EvaluatorsModule.ɵfac = function EvaluatorsModule_Factory(t) { return new (t || EvaluatorsModule)(); };
EvaluatorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EvaluatorsModule });
EvaluatorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _evaluators_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluatorsRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EvaluatorsModule, { declarations: [_evaluators_component__WEBPACK_IMPORTED_MODULE_3__["EvaluatorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _evaluators_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluatorsRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] }); })();


/***/ }),

/***/ "P7Kl":
/*!***************************************************************!*\
  !*** ./src/app/pages/evaluators/evaluators-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EvaluatorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorsRoutingModule", function() { return EvaluatorsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evaluators_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluators.component */ "5opG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _evaluators_component__WEBPACK_IMPORTED_MODULE_1__["EvaluatorsComponent"]
    }];
class EvaluatorsRoutingModule {
}
EvaluatorsRoutingModule.ɵfac = function EvaluatorsRoutingModule_Factory(t) { return new (t || EvaluatorsRoutingModule)(); };
EvaluatorsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EvaluatorsRoutingModule });
EvaluatorsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EvaluatorsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-evaluators-evaluators-module.js.map