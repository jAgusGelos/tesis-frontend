(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-evaluate-papers-chair-sec-evaluate-papers-chair-sec-module"],{

/***/ "/0Wj":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/evaluate-papers-chair-sec/evaluate-papers-chair-sec-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: EvaluatePapersChairSecRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatePapersChairSecRoutingModule", function() { return EvaluatePapersChairSecRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evaluate_papers_chair_sec_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate-papers-chair-sec.component */ "p1qD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _evaluate_papers_chair_sec_component__WEBPACK_IMPORTED_MODULE_1__["EvaluatePapersChairSecComponent"]
    }
];
class EvaluatePapersChairSecRoutingModule {
}
EvaluatePapersChairSecRoutingModule.ɵfac = function EvaluatePapersChairSecRoutingModule_Factory(t) { return new (t || EvaluatePapersChairSecRoutingModule)(); };
EvaluatePapersChairSecRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EvaluatePapersChairSecRoutingModule });
EvaluatePapersChairSecRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EvaluatePapersChairSecRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "7hs+":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/evaluate-papers-chair-sec/evaluate-papers-chair-sec.module.ts ***!
  \*************************************************************************************/
/*! exports provided: EvaluatePapersChairSecModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatePapersChairSecModule", function() { return EvaluatePapersChairSecModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evaluate_papers_chair_sec_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate-papers-chair-sec-routing.module */ "/0Wj");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _evaluate_papers_chair_sec_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evaluate-papers-chair-sec.component */ "p1qD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class EvaluatePapersChairSecModule {
}
EvaluatePapersChairSecModule.ɵfac = function EvaluatePapersChairSecModule_Factory(t) { return new (t || EvaluatePapersChairSecModule)(); };
EvaluatePapersChairSecModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: EvaluatePapersChairSecModule });
EvaluatePapersChairSecModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _evaluate_papers_chair_sec_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluatePapersChairSecRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EvaluatePapersChairSecModule, { declarations: [_evaluate_papers_chair_sec_component__WEBPACK_IMPORTED_MODULE_4__["EvaluatePapersChairSecComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _evaluate_papers_chair_sec_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluatePapersChairSecRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "p1qD":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/evaluate-papers-chair-sec/evaluate-papers-chair-sec.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EvaluatePapersChairSecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatePapersChairSecComponent", function() { return EvaluatePapersChairSecComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/paper.service */ "TJ9D");
/* harmony import */ var src_app_core_services_evaluation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/evaluation.service */ "5zbU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EvaluatePapersChairSecComponent_div_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u00A0", ev_r10.evaluador, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ev_r10.recomendacion);
} }
function EvaluatePapersChairSecComponent_div_6_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_6_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleEdit(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_6_div_25_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_6_div_25_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.evaluar(i_r6, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aprobar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_6_div_25_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_6_div_25_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.evaluar(i_r6, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_6_div_25_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_6_div_25_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.evaluar(i_r6, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reentrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_6_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EvaluatePapersChairSecComponent_div_6_div_25_a_1_Template, 2, 0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EvaluatePapersChairSecComponent_div_6_div_25_a_3_Template, 2, 0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EvaluatePapersChairSecComponent_div_6_div_25_a_5_Template, 2, 0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_6_div_25_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleEdit(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const art_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", art_r5.idEstado !== 6 && art_r5.idEstado !== 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", art_r5.idEstado !== 7 && art_r5.idEstado !== 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", art_r5.idEstado !== 5);
} }
function EvaluatePapersChairSecComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Evaluadores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EvaluatePapersChairSecComponent_div_6_div_15_Template, 7, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_6_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r6 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.getArchivo(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Ver art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_6_Template_a_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r6 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.verDetalle(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ver detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EvaluatePapersChairSecComponent_div_6_a_24_Template, 3, 0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EvaluatePapersChairSecComponent_div_6_div_25_Template, 9, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const art_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](art_r5.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-warning", art_r5.idEstado === 5)("text-dark", art_r5.idEstado === 5)("bg-success", art_r5.idEstado === 6 || art_r5.idEstado === 8)("bg-danger", art_r5.idEstado === 7 || art_r5.idEstado === 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](art_r5.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", art_r5.evaluaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !art_r5.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", art_r5.edit);
} }
function EvaluatePapersChairSecComponent_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aprobar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Para reentregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const det_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.criterio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.res1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.res2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.res3);
} }
class EvaluatePapersChairSecComponent {
    constructor(paperService, evaluationService) {
        this.paperService = paperService;
        this.evaluationService = evaluationService;
        this.edit = false;
        this.articulos = [];
        this.detailed = false;
        // Detalles
        this.index = 0;
        this.criterios = [];
        this.detalles = [{ criterio: '', res1: '', res2: '', res3: '' }];
        this.detNombreArticulo = '';
        this.detResponsable = '';
        this.detIdEstado = 0;
        this.detEstado = '';
        this.detEvUno = { id: 0, nombre: 'Evaluador 1' };
        this.detEvDos = { id: 0, nombre: 'Evaluador 2' };
        this.detEvTres = { id: 0, nombre: 'Evaluador 3' };
        this.messageHeader = '';
        this.messageBody = '';
    }
    ngOnInit() {
        this.getArticulos();
    }
    evaluarDetalle(index) {
        let select = document.getElementById('selectStateDetalle');
        let value = select.options[select.selectedIndex].value;
        if (value == '') {
            document.getElementById('selectStateDetalle').classList.add('is-invalid');
            return;
        }
        else {
            this.evaluar(index, value);
        }
    }
    evaluar(index, opt) {
        let estado = this.articulos[index].idEstado;
        let bandera = false;
        if (estado >= 5) {
            bandera = true;
        }
        if (opt == 1 && bandera) { // Aprobar Reentrega
            estado = 8;
        }
        else if (opt == 2 && bandera) { // Rechazar Reentrega
            estado = 9;
        }
        else if (opt == 1) { // Aprobar
            estado = 6;
        }
        else if (opt == 2) { // Rechazar
            estado = 7;
        }
        else if (opt == 3) { // Reentregar
            estado = 5;
        }
        const idArticulo = this.articulos[index].id;
        const calificacion = estado;
        this.paperService.calificarPaper(idArticulo, calificacion).subscribe((res) => {
            this.cambiarEstado(index, opt);
            this.toggleEdit(index);
        });
    }
    cambiarEstado(index, opt) {
        let bandera = false;
        if (this.articulos[index].idEstado >= 5) {
            bandera = true;
        }
        if (opt == 1 && bandera) {
            this.articulos[index].idEstado = 8; // Aprobado Reentrega
            this.articulos[index].estado = 'Aprobado Reentrega';
            this.detIdEstado = 8;
            this.detEstado = 'Aprobado Reentrega';
            return;
        }
        if (opt == 2 && bandera) {
            this.articulos[index].idEstado = 9; // Rechazado Reentrega
            this.articulos[index].estado = 'Rechazado Reentrega';
            this.detIdEstado = 9;
            this.detEstado = 'Rechazado Reentrega';
            return;
        }
        if (opt == 1) {
            this.articulos[index].idEstado = 6; // Aprobado
            this.articulos[index].estado = 'Aprobado';
            this.detIdEstado = 6;
            this.detEstado = 'Aprobado';
            return;
        }
        if (opt == 2) {
            this.articulos[index].idEstado = 7; // Rechazado
            this.articulos[index].estado = 'Rechazado';
            this.detIdEstado = 7;
            this.detEstado = 'Rechazado';
            return;
        }
        if (opt == 3) {
            this.articulos[index].idEstado = 5; // Reentrega
            this.articulos[index].estado = 'Para Reentregar';
            this.detIdEstado = 5;
            this.detEstado = 'Para Reentregar';
            return;
        }
    }
    getArticulos() {
        this.articulos = [];
        this.paperService.getPapersXChair().subscribe((res) => {
            const data = res.data[0].articulos;
            this.articulos = data;
            this.articulos = this.articulos.map((x) => {
                return {
                    estado: x.estado,
                    evaluaciones: x.evaluaciones,
                    id: x.id,
                    idCongreso: x.idCongreso,
                    idEstado: x.idEstado,
                    idSimposio: x.idSimposio,
                    nombre: x.nombre,
                    responsable: x.responsable,
                    url: x.url,
                    edit: false
                };
            });
        });
    }
    verDetalle(index) {
        this.index = index;
        this.detEvUno.nombre = 'Evaluador 1';
        this.detEvDos.nombre = 'Evaluador 2';
        this.detEvTres.nombre = 'Evaluador 3';
        const art = this.articulos[index];
        const ev = art.evaluaciones;
        this.detNombreArticulo = art.nombre;
        this.detResponsable = art.responsable;
        this.detIdEstado = art.idEstado;
        this.detEstado = art.estado;
        if (ev.length >= 1) {
            this.detEvUno.id = ev[0].idEvaluador;
            this.detEvUno.nombre = ev[0].evaluador;
        }
        if (ev.length >= 2) {
            this.detEvDos.id = ev[1].idEvaluador;
            this.detEvDos.nombre = ev[1].evaluador;
        }
        if (ev.length >= 3) {
            this.detEvTres.id = ev[2].idEvaluador;
            this.detEvTres.nombre = ev[2].evaluador;
        }
        this.evaluationService.getItemsEvaluacion().subscribe((res) => {
            const items = res.data;
            this.paperService.getEvaluationDetails(art.id).subscribe((res) => {
                const evaluaciones = res.data;
                let ev1, ev2, ev3;
                evaluaciones.forEach(e => {
                    if (e.idEvaluador == this.detEvUno.id) {
                        ev1 = e;
                    }
                    else if (e.idEvaluador == this.detEvDos.id) {
                        ev2 = e;
                    }
                    else {
                        ev3 = e;
                    }
                });
                let calif1 = null, calif2 = null, calif3 = null;
                for (let i = 0; i < items.length; i++) {
                    if (ev1.itemsEvaluados[i].calificacion !== undefined) {
                        calif1 = ev1.itemsEvaluados[i].calificacion;
                    }
                    if (ev2.itemsEvaluados[i].calificacion !== undefined) {
                        calif2 = ev2.itemsEvaluados[i].calificacion;
                    }
                    if (ev3.itemsEvaluados[i].calificacion !== undefined) {
                        calif3 = ev3.itemsEvaluados[i].calificacion;
                    }
                    this.detalles.push({ criterio: items[i].nombre,
                        res1: calif1,
                        res2: calif2,
                        res3: calif3, });
                    calif1 = null, calif2 = null, calif3 = null;
                }
                this.detalles.shift();
                this.detalles.push({ criterio: 'Recomendación',
                    res1: this.articulos[index].evaluaciones[0].recomendacion,
                    res2: this.articulos[index].evaluaciones[1].recomendacion,
                    res3: this.articulos[index].evaluaciones[2].recomendacion, });
            });
        });
        const btnDetalle = document.getElementById('activar-modal');
        btnDetalle.click();
    }
    getArchivo(index) {
        const id = this.articulos[index].id;
        const fileName = this.articulos[index].url;
        this.paperService.getPaperFile(id).subscribe((res) => {
            const archivo = res;
            const blob = new Blob([archivo], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            if (link.download !== undefined) {
                link.setAttribute('href', url);
                link.setAttribute('target', '_blank');
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    }
    modalOnClose(index) {
        this.detalles = [];
        this.articulos[index].edit = false;
    }
    toggleEdit(index) {
        this.articulos[index].edit = !this.articulos[index].edit;
    }
}
EvaluatePapersChairSecComponent.ɵfac = function EvaluatePapersChairSecComponent_Factory(t) { return new (t || EvaluatePapersChairSecComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_1__["PaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_evaluation_service__WEBPACK_IMPORTED_MODULE_2__["EvaluationService"])); };
EvaluatePapersChairSecComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluatePapersChairSecComponent, selectors: [["app-evaluate-papers-chair-sec"]], decls: 76, vars: 21, consts: [[1, "container-fluid"], [1, "evaluation-cards"], [1, "card-title", "text-center"], [4, "ngFor", "ngForOf"], ["hidden", "", "id", "activar-modal", "data-bs-toggle", "modal", "data-bs-target", "#detallesModal"], ["id", "detallesModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "detallesModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["id", "detallesModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "row", "row-detalle"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "badge", "bg-primary"], [1, "row", "row-detalle", "align-items-center"], [1, "col-auto"], ["for", "selectStateDetalle", 1, "col-form-label"], ["id", "spanEvaluacion"], ["id", "selectStateDetalle", 1, "form-select"], ["disabled", "", "selected", "", "value", ""], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], ["id", "btnGuardar", 1, "btn", "btn-outline-success", 3, "click"], [1, "fa", "fa-save", "fa-lg"], [1, "table", "table-bordered"], [1, "text-center"], [1, "modal-footer"], [1, "col-auto", "me-auto"], [1, "btn", "btn-primary", "btn-border", 3, "click"], [1, "fas", "fa-file-pdf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-border", 3, "click"], ["hidden", "", "id", "modal-mensaje", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-primary"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "card", "col-md-6", "offset-3"], [1, "card-body"], [1, "row"], [1, "card-title"], ["id", "evaluadores", 1, "card-text"], ["class", "row ev-reco", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-search-plus"], ["class", "btn btn-outline-primary", "id", "editar", 3, "click", 4, "ngIf"], ["id", "evaluation-select", 4, "ngIf"], [1, "row", "ev-reco"], ["id", "nombreEvaluador"], [1, "card-text"], ["id", "editar", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fa", "fa-pencil"], ["id", "evaluation-select"], ["class", "btn btn-outline-success", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-warning", 3, "click", 4, "ngIf"], ["title", "Cancelar", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-times", "fa-lg"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-outline-warning", 3, "click"], ["value", "1"], ["value", "2"], ["value", "3"]], template: function EvaluatePapersChairSecComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Evaluaci\u00F3n de Art\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EvaluatePapersChairSecComponent_div_6_Template, 26, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_14_listener() { return ctx.modalOnClose(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Subido por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Estado:\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Evaluaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EvaluatePapersChairSecComponent_option_35_Template, 2, 0, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, EvaluatePapersChairSecComponent_option_36_Template, 2, 0, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EvaluatePapersChairSecComponent_option_37_Template, 2, 0, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_a_click_39_listener() { return ctx.evaluarDetalle(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "thead", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Criterio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tbody", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EvaluatePapersChairSecComponent_tr_54_Template, 9, 4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_a_click_57_listener() { return ctx.getArchivo(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Ver art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_61_listener() { return ctx.modalOnClose(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articulos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detNombreArticulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detResponsable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-warning", ctx.detIdEstado === 5)("text-dark", ctx.detIdEstado === 5)("bg-success", ctx.detIdEstado === 6 || ctx.detIdEstado === 8)("bg-danger", ctx.detIdEstado === 7 || ctx.detIdEstado === 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEstado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detIdEstado !== 6 && ctx.detIdEstado !== 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detIdEstado !== 7 && ctx.detIdEstado !== 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detIdEstado !== 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEvUno.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEvDos.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEvTres.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detalles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messageHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messageBody, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n    background-color: #F4F4F4;\n  \n  }\n  \nhr[_ngcontent-%COMP%]{\n    border:#00609C solid 1px;\n}\n  \n@media (min-width: 768px) {\n    hr[_ngcontent-%COMP%]{\n        margin-left: 25%;\n        margin-right: 25%;\n\n    }\n\n    .container-fluid[_ngcontent-%COMP%]{\n        padding: 5rem;\n    }\n}\n  \n.ev-reco[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n  \n.evaluation-cards[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n}\n  \n.card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n  \n.card-footer[_ngcontent-%COMP%] {\n    background-color: white;\n}\n  \n.modal-header[_ngcontent-%COMP%] {\n    padding-left: 29px;\n    padding-right: 29px;\n}\n  \n.modal-footer[_ngcontent-%COMP%] {\n    padding-left: 29px;\n    padding-right: 29px;\n}\n  \n.row-detalle[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n  \n.table[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n  \n.btn-primary[_ngcontent-%COMP%] {\n    background-color: #00609C;\n    color: white;\n}\n  \n.btn-border[_ngcontent-%COMP%] {\n    border: none;\n}\n  \n.btn-primary[_ngcontent-%COMP%]:hover {\n    background-color: #0080cf;\n}\n  \n.btn-outline-primary[_ngcontent-%COMP%] {\n    color: #00609C;\n    background: transparent;\n    border: transparent;\n}\n  \n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n    color: #3cafe0;\n}\n  \n#selectStateDetalle[_ngcontent-%COMP%] {\n    float: left;\n}\n  \n#btnGuardar[_ngcontent-%COMP%] {\n    float: right;\n}\n  \n#evaluadores[_ngcontent-%COMP%] {\n    font-style: italic;\n    color: rgb(56, 56, 56);\n}\n  \n#nombreEvaluador[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\n  \n#responsable[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n  \n#editar[_ngcontent-%COMP%] {\n    float: right;\n}\n  \n#evaluation-select[_ngcontent-%COMP%] {\n    float:right;\n}\n  \n#evaluation-select-detalle[_ngcontent-%COMP%] {\n    white-space:nowrap;\n}\n  \n#spanEvaluacion[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRlLXBhcGVycy1jaGFpci1zZWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5Qjs7RUFFM0I7O0FBRUY7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZXZhbHVhdGUtcGFwZXJzLWNoYWlyLXNlYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICBcbiAgfVxuICBcbmhye1xuICAgIGJvcmRlcjojMDA2MDlDIHNvbGlkIDFweDtcbn1cbiAgXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBocntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG5cbiAgICB9XG5cbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgICBwYWRkaW5nOiA1cmVtO1xuICAgIH1cbn1cblxuLmV2LXJlY28ge1xuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xufVxuXG4uZXZhbHVhdGlvbi1jYXJkcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI5cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjlweDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI5cHg7XG59XG5cbi5yb3ctZGV0YWxsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYwOUM7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWJvcmRlciB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwY2Y7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICBjb2xvcjogIzAwNjA5QztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlciB7XG4gICAgY29sb3I6ICMzY2FmZTA7XG59XG5cbiNzZWxlY3RTdGF0ZURldGFsbGUge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jYnRuR3VhcmRhciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbiNldmFsdWFkb3JlcyB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XG59XG5cbiNub21icmVFdmFsdWFkb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNyZXNwb25zYWJsZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jZWRpdGFyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbiNldmFsdWF0aW9uLXNlbGVjdCB7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbiNldmFsdWF0aW9uLXNlbGVjdC1kZXRhbGxlIHtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG59XG5cbiNzcGFuRXZhbHVhY2lvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-evaluate-papers-chair-sec-evaluate-papers-chair-sec-module.js.map