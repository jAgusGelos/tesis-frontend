(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "WPsY":
/*!*************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordRoutingModule", function() { return ChangePasswordRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component */ "ohFK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"]
    }
];
class ChangePasswordRoutingModule {
}
ChangePasswordRoutingModule.ɵfac = function ChangePasswordRoutingModule_Factory(t) { return new (t || ChangePasswordRoutingModule)(); };
ChangePasswordRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChangePasswordRoutingModule });
ChangePasswordRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChangePasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ohFK":
/*!********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/change-password-form/change-password-form.component */ "w76P");


class ChangePasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 1, vars: 0, template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-change-password-form");
    } }, directives: [_core_components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordFormComponent"]], styles: [".card-title[_ngcontent-%COMP%]{\n    font-weight:300;\n  }\n  \n  .card[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 1rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n  \n  .container-fluid[_ngcontent-%COMP%]{\n    background-color: #F4F4F4;\n  \n  }\n  \n  .contenidos[_ngcontent-%COMP%]{\n    padding-bottom: 3rem;\n  }\n  \n  .thead[_ngcontent-%COMP%]{\n    background-color: #C8E5F1;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%]{\n    background-color: #3CAFE0 ;\n    border: none;\n  }\n  \n  .greyned[_ngcontent-%COMP%]{\n    color: grey;\n  }\n  \n  i[_ngcontent-%COMP%]{\n    cursor: pointer;\n  }\n  \n  i[_ngcontent-%COMP%]:hover{\n    color: blue;\n  }\n  \n  .fas[_ngcontent-%COMP%]{\n    font-size: 1.25rem;\n    color: #00609C;\n  }\n  \n  hr[_ngcontent-%COMP%]{\n    border:#00609C solid 1px;\n  }\n  \n  @media (min-width: 768px) {\n    hr[_ngcontent-%COMP%]{\n      margin-left: 25%;\n      margin-right: 25%;\n  \n    }\n  \n    .container-fluid[_ngcontent-%COMP%]{\n      padding: 5rem;\n    }\n  \n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBQ0Y7SUFDSSx5QkFBeUI7O0VBRTNCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUdBO0lBQ0UsMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFHQTtJQUNFO01BQ0UsZ0JBQWdCO01BQ2hCLGlCQUFpQjs7SUFFbkI7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0dBRUQiLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC10aXRsZXtcbiAgICBmb250LXdlaWdodDozMDA7XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbi5jb250YWluZXItZmx1aWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgXG4gIH1cbiAgXG4gIC5jb250ZW5pZG9ze1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICB9XG4gIFxuICAudGhlYWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTVGMTtcbiAgfVxuICBcbiAgXG4gIC5idG4tcHJpbWFyeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0NBRkUwIDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5ncmV5bmVke1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIFxuICBpe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgaTpob3ZlcntcbiAgICBjb2xvcjogYmx1ZTtcbiAgfVxuICBcbiAgLmZhc3tcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgY29sb3I6ICMwMDYwOUM7XG4gIH1cbiAgXG4gIGhye1xuICAgIGJvcmRlcjojMDA2MDlDIHNvbGlkIDFweDtcbiAgfVxuICBcbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGhye1xuICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICBcbiAgICB9XG4gIFxuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICBwYWRkaW5nOiA1cmVtO1xuICAgIH1cbiAgXG4gICB9Il19 */"] });


/***/ }),

/***/ "wdPO":
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password-routing.module */ "WPsY");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.component */ "ohFK");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ChangePasswordModule {
}
ChangePasswordModule.ɵfac = function ChangePasswordModule_Factory(t) { return new (t || ChangePasswordModule)(); };
ChangePasswordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ChangePasswordModule });
ChangePasswordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChangePasswordModule, { declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _change_password_routing_module__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-change-password-change-password-module.js.map