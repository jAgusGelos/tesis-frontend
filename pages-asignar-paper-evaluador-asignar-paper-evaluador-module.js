(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-asignar-paper-evaluador-asignar-paper-evaluador-module"],{

/***/ "4MWl":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/asignar-paper-evaluador/asignar-paper-evaluador.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AsignarPaperEvaluadorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarPaperEvaluadorModule", function() { return AsignarPaperEvaluadorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _asignar_paper_evaluador_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignar-paper-evaluador-routing.module */ "GTOa");
/* harmony import */ var _asignar_paper_evaluador_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asignar-paper-evaluador.component */ "CmO+");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AsignarPaperEvaluadorModule {
}
AsignarPaperEvaluadorModule.ɵfac = function AsignarPaperEvaluadorModule_Factory(t) { return new (t || AsignarPaperEvaluadorModule)(); };
AsignarPaperEvaluadorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AsignarPaperEvaluadorModule });
AsignarPaperEvaluadorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _asignar_paper_evaluador_routing_module__WEBPACK_IMPORTED_MODULE_1__["AsignarPaperEvaluadorRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AsignarPaperEvaluadorModule, { declarations: [_asignar_paper_evaluador_component__WEBPACK_IMPORTED_MODULE_2__["AsignarPaperEvaluadorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _asignar_paper_evaluador_routing_module__WEBPACK_IMPORTED_MODULE_1__["AsignarPaperEvaluadorRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "CmO+":
/*!************************************************************************************!*\
  !*** ./src/app/pages/asignar-paper-evaluador/asignar-paper-evaluador.component.ts ***!
  \************************************************************************************/
/*! exports provided: AsignarPaperEvaluadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarPaperEvaluadorComponent", function() { return AsignarPaperEvaluadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_asignar_paper_evaluador_list_asignar_paper_evaluador_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/asignar-paper-evaluador-list/asignar-paper-evaluador-list.component */ "WCHc");


class AsignarPaperEvaluadorComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsignarPaperEvaluadorComponent.ɵfac = function AsignarPaperEvaluadorComponent_Factory(t) { return new (t || AsignarPaperEvaluadorComponent)(); };
AsignarPaperEvaluadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsignarPaperEvaluadorComponent, selectors: [["app-asignar-paper-evaluador"]], decls: 1, vars: 0, template: function AsignarPaperEvaluadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-asignar-paper-evaluador-list");
    } }, directives: [_core_components_asignar_paper_evaluador_list_asignar_paper_evaluador_list_component__WEBPACK_IMPORTED_MODULE_1__["AsignarPaperEvaluadorListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmFyLXBhcGVyLWV2YWx1YWRvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "GTOa":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/asignar-paper-evaluador/asignar-paper-evaluador-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AsignarPaperEvaluadorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarPaperEvaluadorRoutingModule", function() { return AsignarPaperEvaluadorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _asignar_paper_evaluador_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asignar-paper-evaluador.component */ "CmO+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _asignar_paper_evaluador_component__WEBPACK_IMPORTED_MODULE_1__["AsignarPaperEvaluadorComponent"]
    }];
class AsignarPaperEvaluadorRoutingModule {
}
AsignarPaperEvaluadorRoutingModule.ɵfac = function AsignarPaperEvaluadorRoutingModule_Factory(t) { return new (t || AsignarPaperEvaluadorRoutingModule)(); };
AsignarPaperEvaluadorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AsignarPaperEvaluadorRoutingModule });
AsignarPaperEvaluadorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AsignarPaperEvaluadorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-asignar-paper-evaluador-asignar-paper-evaluador-module.js.map