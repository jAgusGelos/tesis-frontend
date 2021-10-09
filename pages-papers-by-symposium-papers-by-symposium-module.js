(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-papers-by-symposium-papers-by-symposium-module"],{

/***/ "2uuG":
/*!*************************************************************************!*\
  !*** ./src/app/pages/papers-by-symposium/papers-by-symposium.module.ts ***!
  \*************************************************************************/
/*! exports provided: PapersBySymposiumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapersBySymposiumModule", function() { return PapersBySymposiumModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _papers_by_symposium_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./papers-by-symposium-routing.module */ "CX2j");
/* harmony import */ var _papers_by_symposium_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./papers-by-symposium.component */ "oV54");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PapersBySymposiumModule {
}
PapersBySymposiumModule.ɵfac = function PapersBySymposiumModule_Factory(t) { return new (t || PapersBySymposiumModule)(); };
PapersBySymposiumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PapersBySymposiumModule });
PapersBySymposiumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _papers_by_symposium_routing_module__WEBPACK_IMPORTED_MODULE_1__["PapersBySymposiumRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PapersBySymposiumModule, { declarations: [_papers_by_symposium_component__WEBPACK_IMPORTED_MODULE_2__["PapersBySymposiumComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _papers_by_symposium_routing_module__WEBPACK_IMPORTED_MODULE_1__["PapersBySymposiumRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "CX2j":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/papers-by-symposium/papers-by-symposium-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PapersBySymposiumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapersBySymposiumRoutingModule", function() { return PapersBySymposiumRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _papers_by_symposium_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./papers-by-symposium.component */ "oV54");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _papers_by_symposium_component__WEBPACK_IMPORTED_MODULE_1__["PapersBySymposiumComponent"]
    }];
class PapersBySymposiumRoutingModule {
}
PapersBySymposiumRoutingModule.ɵfac = function PapersBySymposiumRoutingModule_Factory(t) { return new (t || PapersBySymposiumRoutingModule)(); };
PapersBySymposiumRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PapersBySymposiumRoutingModule });
PapersBySymposiumRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PapersBySymposiumRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "oV54":
/*!****************************************************************************!*\
  !*** ./src/app/pages/papers-by-symposium/papers-by-symposium.component.ts ***!
  \****************************************************************************/
/*! exports provided: PapersBySymposiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapersBySymposiumComponent", function() { return PapersBySymposiumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_components_papers_by_symposium_list_papers_by_symposium_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/components/papers-by-symposium-list/papers-by-symposium-list.component */ "AvlM");


class PapersBySymposiumComponent {
    constructor() { }
    ngOnInit() {
    }
}
PapersBySymposiumComponent.ɵfac = function PapersBySymposiumComponent_Factory(t) { return new (t || PapersBySymposiumComponent)(); };
PapersBySymposiumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PapersBySymposiumComponent, selectors: [["app-papers-by-symposium"]], decls: 1, vars: 0, template: function PapersBySymposiumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-papers-by-symposium-list");
    } }, directives: [_core_components_papers_by_symposium_list_papers_by_symposium_list_component__WEBPACK_IMPORTED_MODULE_1__["PapersBySymposiumListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXBlcnMtYnktc3ltcG9zaXVtLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-papers-by-symposium-papers-by-symposium-module.js.map