(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-windows-payment-pending-payment-pending-module"],{

/***/ "0XCX":
/*!************************************************************************************!*\
  !*** ./src/app/pages/payment-windows/payment-pending/payment-pending.component.ts ***!
  \************************************************************************************/
/*! exports provided: PaymentPendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPendingComponent", function() { return PaymentPendingComponent; });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PaymentPendingComponent {
    constructor(route) {
        this.route = route;
        this.token = '';
        this.nombreCongreso = 'DEFAULTNAME';
    }
    ngOnInit() {
        this.token = this.route.snapshot.params.token;
        this.getCongressName();
    }
    getCongressName() {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__["JwtHelperService"]();
        const decodedToken = helper.decodeToken(this.token);
        this.nombreCongreso = decodedToken.nombreCongreso;
    }
}
PaymentPendingComponent.ɵfac = function PaymentPendingComponent_Factory(t) { return new (t || PaymentPendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PaymentPendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentPendingComponent, selectors: [["app-payment-pending"]], decls: 10, vars: 1, consts: [[1, "container-fluid"], [1, "card", "col-md-6", "offset-3"], [1, "card-body", "text-center"], [1, "fas", "fa-info-circle", "fa-7x"], [1, "card-title"], [1, "card-text"]], template: function PaymentPendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Pago pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("El pago de la inscripci\u00F3n al congreso ", ctx.nombreCongreso, " est\u00E1 siendo procesado.");
    } }, styles: ["@media (min-width: 768px) {\n    .container-fluid[_ngcontent-%COMP%]{\n      background-color: #F4F4F4;\n      padding: 5rem;\n    }\n  }\n  \n.card[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 20px;\n}\n  \n.card-title[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n  \n.fa-info-circle[_ngcontent-%COMP%] {\n    color:#00609C;\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtcGVuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7TUFDRSx5QkFBeUI7TUFDekIsYUFBYTtJQUNmO0VBQ0Y7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoicGF5bWVudC1wZW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgICAgIHBhZGRpbmc6IDVyZW07XG4gICAgfVxuICB9XG4gIFxuLmNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZhLWluZm8tY2lyY2xlIHtcbiAgICBjb2xvcjojMDA2MDlDO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "GWRb":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/payment-windows/payment-pending/payment-pending.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PaymentPendingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPendingModule", function() { return PaymentPendingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _payment_pending_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-pending-routing.module */ "qLGr");
/* harmony import */ var _payment_pending_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-pending.component */ "0XCX");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PaymentPendingModule {
}
PaymentPendingModule.ɵfac = function PaymentPendingModule_Factory(t) { return new (t || PaymentPendingModule)(); };
PaymentPendingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PaymentPendingModule });
PaymentPendingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _payment_pending_routing_module__WEBPACK_IMPORTED_MODULE_1__["PaymentPendingRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PaymentPendingModule, { declarations: [_payment_pending_component__WEBPACK_IMPORTED_MODULE_2__["PaymentPendingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _payment_pending_routing_module__WEBPACK_IMPORTED_MODULE_1__["PaymentPendingRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "qLGr":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/payment-windows/payment-pending/payment-pending-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaymentPendingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPendingRoutingModule", function() { return PaymentPendingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment_pending_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-pending.component */ "0XCX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _payment_pending_component__WEBPACK_IMPORTED_MODULE_1__["PaymentPendingComponent"]
    }];
class PaymentPendingRoutingModule {
}
PaymentPendingRoutingModule.ɵfac = function PaymentPendingRoutingModule_Factory(t) { return new (t || PaymentPendingRoutingModule)(); };
PaymentPendingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaymentPendingRoutingModule });
PaymentPendingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentPendingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-payment-windows-payment-pending-payment-pending-module.js.map