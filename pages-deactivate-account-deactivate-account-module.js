(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-deactivate-account-deactivate-account-module"],{

/***/ "25DI":
/*!***********************************************************************!*\
  !*** ./src/app/pages/deactivate-account/deactivate-account.module.ts ***!
  \***********************************************************************/
/*! exports provided: DeactivateAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateAccountModule", function() { return DeactivateAccountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _deactivate_account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deactivate-account-routing.module */ "koDC");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _deactivate_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deactivate-account.component */ "VPCo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class DeactivateAccountModule {
}
DeactivateAccountModule.ɵfac = function DeactivateAccountModule_Factory(t) { return new (t || DeactivateAccountModule)(); };
DeactivateAccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DeactivateAccountModule });
DeactivateAccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _deactivate_account_routing_module__WEBPACK_IMPORTED_MODULE_1__["DeactivateAccountRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DeactivateAccountModule, { declarations: [_deactivate_account_component__WEBPACK_IMPORTED_MODULE_4__["DeactivateAccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _deactivate_account_routing_module__WEBPACK_IMPORTED_MODULE_1__["DeactivateAccountRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "VPCo":
/*!**************************************************************************!*\
  !*** ./src/app/pages/deactivate-account/deactivate-account.component.ts ***!
  \**************************************************************************/
/*! exports provided: DeactivateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateAccountComponent", function() { return DeactivateAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_deactivate_account_form_deactivate_account_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/deactivate-account-form/deactivate-account-form.component */ "K2K7");


class DeactivateAccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeactivateAccountComponent.ɵfac = function DeactivateAccountComponent_Factory(t) { return new (t || DeactivateAccountComponent)(); };
DeactivateAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeactivateAccountComponent, selectors: [["app-deactivate-account"]], decls: 1, vars: 0, template: function DeactivateAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-deactivate-account-form");
    } }, directives: [_core_components_deactivate_account_form_deactivate_account_form_component__WEBPACK_IMPORTED_MODULE_1__["DeactivateAccountFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWFjdGl2YXRlLWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "koDC":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/deactivate-account/deactivate-account-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: DeactivateAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateAccountRoutingModule", function() { return DeactivateAccountRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deactivate_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deactivate-account.component */ "VPCo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _deactivate_account_component__WEBPACK_IMPORTED_MODULE_1__["DeactivateAccountComponent"]
    }];
class DeactivateAccountRoutingModule {
}
DeactivateAccountRoutingModule.ɵfac = function DeactivateAccountRoutingModule_Factory(t) { return new (t || DeactivateAccountRoutingModule)(); };
DeactivateAccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DeactivateAccountRoutingModule });
DeactivateAccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeactivateAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-deactivate-account-deactivate-account-module.js.map