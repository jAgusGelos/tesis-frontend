(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancel-evaluator-cancel-evaluator-module"],{

/***/ "pAsW":
/*!************************************************************************!*\
  !*** ./src/app/pages/cancel-evaluator/cancel-author-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CancelEvaluatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelEvaluatorRoutingModule", function() { return CancelEvaluatorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cancel_evaluator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-evaluator.component */ "y930");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _cancel_evaluator_component__WEBPACK_IMPORTED_MODULE_1__["CancelEvaluatorComponent"]
    }];
class CancelEvaluatorRoutingModule {
}
CancelEvaluatorRoutingModule.ɵfac = function CancelEvaluatorRoutingModule_Factory(t) { return new (t || CancelEvaluatorRoutingModule)(); };
CancelEvaluatorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CancelEvaluatorRoutingModule });
CancelEvaluatorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CancelEvaluatorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "sMNc":
/*!*******************************************************************!*\
  !*** ./src/app/pages/cancel-evaluator/cancel-evaluator.module.ts ***!
  \*******************************************************************/
/*! exports provided: CancelEvaluatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelEvaluatorModule", function() { return CancelEvaluatorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cancel_evaluator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-evaluator.component */ "y930");
/* harmony import */ var _cancel_author_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-author-routing.module */ "pAsW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CancelEvaluatorModule {
}
CancelEvaluatorModule.ɵfac = function CancelEvaluatorModule_Factory(t) { return new (t || CancelEvaluatorModule)(); };
CancelEvaluatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CancelEvaluatorModule });
CancelEvaluatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _cancel_author_routing_module__WEBPACK_IMPORTED_MODULE_2__["CancelEvaluatorRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CancelEvaluatorModule, { declarations: [_cancel_evaluator_component__WEBPACK_IMPORTED_MODULE_1__["CancelEvaluatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _cancel_author_routing_module__WEBPACK_IMPORTED_MODULE_2__["CancelEvaluatorRoutingModule"]] }); })();


/***/ }),

/***/ "y930":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cancel-evaluator/cancel-evaluator.component.ts ***!
  \**********************************************************************/
/*! exports provided: CancelEvaluatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelEvaluatorComponent", function() { return CancelEvaluatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user.service */ "f4AX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CancelEvaluatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Asignaci\u00F3n de Evaluador Rechazada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hemos descartado correctamente tu rol como evaluador.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CancelEvaluatorComponent {
    constructor(route, service, toastr) {
        this.route = route;
        this.service = service;
        this.toastr = toastr;
        this.cancel = false;
    }
    ngOnInit() {
        this.token = this.route.snapshot.params.token;
        this.service.cancelEvaluator('?token=' + this.token).subscribe((res) => this.cancel = true, (err) => { this.toastr.error('No se pudo cancelar su rol como evaluador.'); });
    }
}
CancelEvaluatorComponent.ɵfac = function CancelEvaluatorComponent_Factory(t) { return new (t || CancelEvaluatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CancelEvaluatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancelEvaluatorComponent, selectors: [["app-cancel-evaluator"]], decls: 1, vars: 1, consts: [["class", "container-md card", 4, "ngIf"], [1, "container-md", "card"], [1, "card-body"], [1, "contenidos"], [1, "card-title", "text-center"], [1, "card-text"]], template: function CancelEvaluatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CancelEvaluatorComponent_div_0_Template, 8, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cancel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 3rem;\n  padding-bottom: 2rem;\n  margin-top: 5rem;\n  margin-bottom: 5rem;\n  background-color: #F4F4F4;\n}\n\n\n@media (min-width: 768px) {\n  .card[_ngcontent-%COMP%]{\n    max-width: 50%;\n  }\n\n  .card-body[_ngcontent-%COMP%]{\n    padding: auto;\n  }\n }\n\n\n.card-title[_ngcontent-%COMP%]{\n  border-top: 1px solid #00609C;\n  border-bottom:  1px solid #00609C;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  font-weight:300;\n  padding-left: 3rem;\n  padding-right: 3rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n\nhr[_ngcontent-%COMP%]{\n  border: 1px #00609C solid;\n}\n\n\n.spaced[_ngcontent-%COMP%]{\n  padding-bottom: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmNlbC1ldmFsdWF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7Q0FDRDs7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJjYW5jZWwtZXZhbHVhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC5jYXJkLWJvZHl7XG4gICAgcGFkZGluZzogYXV0bztcbiAgfVxuIH1cblxuLmNhcmQtdGl0bGV7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA2MDlDO1xuICBib3JkZXItYm90dG9tOiAgMXB4IHNvbGlkICMwMDYwOUM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDozMDA7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgcGFkZGluZy1yaWdodDogM3JlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuaHJ7XG4gIGJvcmRlcjogMXB4ICMwMDYwOUMgc29saWQ7XG59XG5cblxuLnNwYWNlZHtcbiAgcGFkZGluZy1ib3R0b206IDhyZW07XG59XG5cblxuXG5cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-cancel-evaluator-cancel-evaluator-module.js.map