(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recover-password-recover-password-module"],{

/***/ "Ald3":
/*!*******************************************************************!*\
  !*** ./src/app/pages/recover-password/recover-password.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecoverPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordModule", function() { return RecoverPasswordModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recover-password-routing.module */ "kD3S");
/* harmony import */ var _recover_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recover-password.component */ "g6oW");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class RecoverPasswordModule {
}
RecoverPasswordModule.ɵfac = function RecoverPasswordModule_Factory(t) { return new (t || RecoverPasswordModule)(); };
RecoverPasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RecoverPasswordModule });
RecoverPasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_1__["RecoverPasswordRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RecoverPasswordModule, { declarations: [_recover_password_component__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _recover_password_routing_module__WEBPACK_IMPORTED_MODULE_1__["RecoverPasswordRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "g6oW":
/*!**********************************************************************!*\
  !*** ./src/app/pages/recover-password/recover-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: RecoverPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordComponent", function() { return RecoverPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_recover_password_form_recover_password_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/recover-password-form/recover-password-form.component */ "48Uo");


class RecoverPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecoverPasswordComponent.ɵfac = function RecoverPasswordComponent_Factory(t) { return new (t || RecoverPasswordComponent)(); };
RecoverPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecoverPasswordComponent, selectors: [["app-recover-password"]], decls: 1, vars: 0, template: function RecoverPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-recover-password-form");
    } }, directives: [_core_components_recover_password_form_recover_password_form_component__WEBPACK_IMPORTED_MODULE_1__["RecoverPasswordFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kD3S":
/*!***************************************************************************!*\
  !*** ./src/app/pages/recover-password/recover-password-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RecoverPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverPasswordRoutingModule", function() { return RecoverPasswordRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recover_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recover-password.component */ "g6oW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _recover_password_component__WEBPACK_IMPORTED_MODULE_1__["RecoverPasswordComponent"]
    }];
class RecoverPasswordRoutingModule {
}
RecoverPasswordRoutingModule.ɵfac = function RecoverPasswordRoutingModule_Factory(t) { return new (t || RecoverPasswordRoutingModule)(); };
RecoverPasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RecoverPasswordRoutingModule });
RecoverPasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RecoverPasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-recover-password-recover-password-module.js.map