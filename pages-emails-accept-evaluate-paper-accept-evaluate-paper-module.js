(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emails-accept-evaluate-paper-accept-evaluate-paper-module"],{

/***/ "/Hol":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/emails/accept-evaluate-paper/accept-evaluate-paper-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AcceptEvaluatePaperRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptEvaluatePaperRoutingModule", function() { return AcceptEvaluatePaperRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _accept_evaluate_paper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accept-evaluate-paper.component */ "ckRf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _accept_evaluate_paper_component__WEBPACK_IMPORTED_MODULE_1__["AcceptEvaluatePaperComponent"]
    }
];
class AcceptEvaluatePaperRoutingModule {
}
AcceptEvaluatePaperRoutingModule.ɵfac = function AcceptEvaluatePaperRoutingModule_Factory(t) { return new (t || AcceptEvaluatePaperRoutingModule)(); };
AcceptEvaluatePaperRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AcceptEvaluatePaperRoutingModule });
AcceptEvaluatePaperRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AcceptEvaluatePaperRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ckRf":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/emails/accept-evaluate-paper/accept-evaluate-paper.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AcceptEvaluatePaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptEvaluatePaperComponent", function() { return AcceptEvaluatePaperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AcceptEvaluatePaperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Evaluaci\u00F3n de Paper Aceptada!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Encontrar\u00E1s el paper a evaluar en la secci\u00F3n \"Evaluar\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AcceptEvaluatePaperComponent {
    constructor(route, service, toastr) {
        this.route = route;
        this.service = service;
        this.toastr = toastr;
        this.accepted = false;
    }
    ngOnInit() {
        this.token = this.route.snapshot.params.token;
        console.log(this.token);
        this.service.acceptEvaluatePaper('?token=' + this.token).subscribe((res) => this.accept(), (err) => { this.toastr.error('No se pudo aceptar la evaluación del paper.'); });
    }
    accept() {
        this.accepted = true;
        console.log('SI');
    }
}
AcceptEvaluatePaperComponent.ɵfac = function AcceptEvaluatePaperComponent_Factory(t) { return new (t || AcceptEvaluatePaperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AcceptEvaluatePaperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcceptEvaluatePaperComponent, selectors: [["app-accept-evaluate-paper"]], decls: 1, vars: 1, consts: [["class", "container-md card", 4, "ngIf"], [1, "container-md", "card"], [1, "card-body"], [1, "contenidos"], [1, "card-title", "text-center"], [1, "card-text"]], template: function AcceptEvaluatePaperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AcceptEvaluatePaperComponent_div_0_Template, 8, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accepted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 3rem;\n    padding-bottom: 2rem;\n    margin-top: 5rem;\n    margin-bottom: 5rem;\n    background-color: #F4F4F4;\n  }\n  \n  \n  @media (min-width: 768px) {\n    .card[_ngcontent-%COMP%]{\n      max-width: 50%;\n    }\n  \n    .card-body[_ngcontent-%COMP%]{\n      padding: auto;\n    }\n   }\n  \n  \n  .card-title[_ngcontent-%COMP%]{\n    border-top: 1px solid #00609C;\n    border-bottom:  1px solid #00609C;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-weight:300;\n    padding-left: 3rem;\n    padding-right: 3rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    max-width: -webkit-fit-content;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n  }\n  \n  \n  hr[_ngcontent-%COMP%]{\n    border: 1px #00609C solid;\n  }\n  \n  \n  .spaced[_ngcontent-%COMP%]{\n    padding-bottom: 8rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2VwdC1ldmFsdWF0ZS1wYXBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOzs7RUFHQTtJQUNFO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGFBQWE7SUFDZjtHQUNEOzs7RUFFRDtJQUNFLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtFQUN4Qjs7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7OztFQUdBO0lBQ0Usb0JBQW9CO0VBQ3RCIiwiZmlsZSI6ImFjY2VwdC1ldmFsdWF0ZS1wYXBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICB9XG4gIFxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNhcmR7XG4gICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICB9XG4gIFxuICAgIC5jYXJkLWJvZHl7XG4gICAgICBwYWRkaW5nOiBhdXRvO1xuICAgIH1cbiAgIH1cbiAgXG4gIC5jYXJkLXRpdGxle1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA2MDlDO1xuICAgIGJvcmRlci1ib3R0b206ICAxcHggc29saWQgIzAwNjA5QztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG4gIFxuICBocntcbiAgICBib3JkZXI6IDFweCAjMDA2MDlDIHNvbGlkO1xuICB9XG4gIFxuICBcbiAgLnNwYWNlZHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcbiAgfVxuICAiXX0= */"] });


/***/ }),

/***/ "kR1t":
/*!************************************************************************************!*\
  !*** ./src/app/pages/emails/accept-evaluate-paper/accept-evaluate-paper.module.ts ***!
  \************************************************************************************/
/*! exports provided: AcceptEvaluatePaperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptEvaluatePaperModule", function() { return AcceptEvaluatePaperModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _accept_evaluate_paper_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accept-evaluate-paper-routing.module */ "/Hol");
/* harmony import */ var _accept_evaluate_paper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accept-evaluate-paper.component */ "ckRf");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AcceptEvaluatePaperModule {
}
AcceptEvaluatePaperModule.ɵfac = function AcceptEvaluatePaperModule_Factory(t) { return new (t || AcceptEvaluatePaperModule)(); };
AcceptEvaluatePaperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AcceptEvaluatePaperModule });
AcceptEvaluatePaperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _accept_evaluate_paper_routing_module__WEBPACK_IMPORTED_MODULE_1__["AcceptEvaluatePaperRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AcceptEvaluatePaperModule, { declarations: [_accept_evaluate_paper_component__WEBPACK_IMPORTED_MODULE_2__["AcceptEvaluatePaperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _accept_evaluate_paper_routing_module__WEBPACK_IMPORTED_MODULE_1__["AcceptEvaluatePaperRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-emails-accept-evaluate-paper-accept-evaluate-paper-module.js.map