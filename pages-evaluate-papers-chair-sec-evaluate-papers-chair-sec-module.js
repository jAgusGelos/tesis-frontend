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




function EvaluatePapersChairSecComponent_div_25_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 56);
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
function EvaluatePapersChairSecComponent_div_25_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_25_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleEdit(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Evaluar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_25_div_24_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_25_div_24_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.evaluar(i_r6, 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aprobar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_25_div_24_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_25_div_24_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.evaluar(i_r6, 2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_25_div_24_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_25_div_24_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.evaluar(i_r6, 3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reentrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_div_25_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EvaluatePapersChairSecComponent_div_25_div_24_a_1_Template, 2, 0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EvaluatePapersChairSecComponent_div_25_div_24_a_3_Template, 2, 0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EvaluatePapersChairSecComponent_div_25_div_24_a_5_Template, 2, 0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_25_div_24_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleEdit(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 64);
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
function EvaluatePapersChairSecComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Evaluadores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EvaluatePapersChairSecComponent_div_25_div_14_Template, 7, 2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_25_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r6 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.getArchivo(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Ver art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_div_25_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r6 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.verDetalle(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Ver detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EvaluatePapersChairSecComponent_div_25_a_23_Template, 3, 0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EvaluatePapersChairSecComponent_div_25_div_24_Template, 9, 3, "div", 52);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", art_r5.evaluaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !art_r5.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", art_r5.edit);
} }
function EvaluatePapersChairSecComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.aspecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.res1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.res2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](det_r33.res3);
} }
function EvaluatePapersChairSecComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aprobar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rechazar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EvaluatePapersChairSecComponent_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Necesita Reentrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EvaluatePapersChairSecComponent {
    constructor(paperService, evaluationService) {
        this.paperService = paperService;
        this.evaluationService = evaluationService;
        this.edit = false;
        this.articulos = [];
        this.vectorArticulos = [];
        this.detailed = false;
        // Detalles
        this.index = 0;
        this.observacionAutor = '';
        this.detalles = [];
        this.detNombreArticulo = '';
        this.detEstado = {
            id: 0,
            nombre: ''
        };
        this.detEvUno = { id: 0, nombre: 'Evaluador 1' };
        this.detEvDos = { id: 0, nombre: 'Evaluador 2' };
        this.detEvTres = { id: 0, nombre: 'Evaluador 3' };
        this.puntuaciones = [{ value: 0, nombre: '' },
            { value: 1, nombre: 'Muy Débil' },
            { value: 2, nombre: 'Débil' },
            { value: 3, nombre: 'Aceptable' },
            { value: 4, nombre: 'Bueno' },
            { value: 5, nombre: 'Muy bueno' }];
    }
    ngOnInit() {
        this.getArticulos();
    }
    evaluarDetalle(index) {
        const select = document.getElementById('selectStateDetalle');
        const opt = select.options[select.selectedIndex].value;
        if (opt === '') {
            document.getElementById('selectStateDetalle').classList.add('is-invalid');
            return;
        }
        else {
            const optNumber = parseInt(opt, 10);
            this.evaluar(index, optNumber);
        }
    }
    evaluar(index, opt) {
        let estado = this.vectorArticulos[index].idEstado;
        let bandera = false;
        if (estado >= 5) {
            bandera = true;
        }
        if (opt === 1 && bandera) { // Aprobar Reentrega
            estado = 8;
        }
        else if (opt === 2 && bandera) { // Rechazar Reentrega
            estado = 9;
        }
        else if (opt === 1) { // Aprobar
            estado = 6;
        }
        else if (opt === 2) { // Rechazar
            estado = 7;
        }
        else if (opt === 3) { // Reentregar
            estado = 5;
        }
        const idArticulo = this.vectorArticulos[index].id;
        const calificacion = estado;
        const obs = document.getElementById('observacion-autor');
        this.observacionAutor = obs.value;
        this.articulos[index].observacion = obs.value;
        this.vectorArticulos[index].observacion = obs.value;
        this.paperService.calificarPaper(idArticulo, calificacion, this.observacionAutor).subscribe((res) => {
            const sel = document.getElementById('selectStateDetalle');
            sel.value = '';
            this.setBadges(index, calificacion);
            this.toggleEdit(index);
        });
    }
    setBadges(index, estado) {
        if (estado === 6) {
            this.vectorArticulos[index].idEstado = estado;
            this.vectorArticulos[index].estado = 'Aprobado';
            this.detEstado.id = 6;
            this.detEstado.nombre = 'Aprobado';
            return;
        }
        if (estado === 7) {
            this.vectorArticulos[index].idEstado = estado;
            this.vectorArticulos[index].estado = 'Rechazado';
            this.detEstado.id = 7;
            this.detEstado.nombre = 'Rechazado';
            return;
        }
        if (estado === 5) {
            this.vectorArticulos[index].idEstado = estado;
            this.vectorArticulos[index].estado = 'Para Reentregar';
            this.detEstado.id = 5;
            this.detEstado.nombre = 'Para Reentregar';
            return;
        }
        if (estado === 8) {
            this.vectorArticulos[index].idEstado = estado;
            this.vectorArticulos[index].estado = 'Aprobado Reentrega';
            this.detEstado.id = 8;
            this.detEstado.nombre = 'Aprobado Reentrega';
            return;
        }
        if (estado === 9) {
            this.vectorArticulos[index].idEstado = 9;
            this.vectorArticulos[index].estado = 'Rechazado Reentrega';
            this.detEstado.id = 9;
            this.detEstado.nombre = 'Rechazado Reentrega';
            return;
        }
    }
    verDetalle(index) {
        this.index = index;
        this.detEvUno.nombre = 'Evaluador 1';
        this.detEvDos.nombre = 'Evaluador 2';
        this.detEvTres.nombre = 'Evaluador 3';
        const art = this.vectorArticulos[index];
        const ev = art.evaluaciones;
        this.detNombreArticulo = art.nombre;
        const obs = document.getElementById('observacion-autor');
        obs.value = art.observacion;
        this.observacionAutor = art.observacion;
        this.detEstado.id = art.idEstado;
        this.detEstado.nombre = art.estado;
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
        this.evaluationService.getItemsEvaluacion(1).subscribe((res) => {
            const items = res.data;
            this.paperService.getEvaluationDetails(art.id).subscribe((ans) => {
                const evaluaciones = ans.data;
                let ev1;
                let ev2;
                let ev3;
                evaluaciones.forEach(e => {
                    if (e.idEvaluador === this.detEvUno.id) {
                        ev1 = e;
                    }
                    else if (e.idEvaluador === this.detEvDos.id) {
                        ev2 = e;
                    }
                    else {
                        ev3 = e;
                    }
                });
                let calif1 = null;
                let calif2 = null;
                let calif3 = null;
                let rec1 = null;
                let rec2 = null;
                let rec3 = null;
                let obs1 = null;
                let obs2 = null;
                let obs3 = null;
                let obsInterna1 = null;
                let obsInterna2 = null;
                let obsInterna3 = null;
                for (let i = 0; i < items.length; i++) {
                    if (ev1 !== undefined) {
                        if (ev1.itemsEvaluados[i] !== undefined) {
                            calif1 = ev1.itemsEvaluados[i].calificacion;
                        }
                        else {
                            calif1 = 0;
                        }
                    }
                    else {
                        calif1 = 0;
                    }
                    if (ev2 !== undefined) {
                        if (ev2.itemsEvaluados[i] !== undefined) {
                            calif2 = ev2.itemsEvaluados[i].calificacion;
                        }
                        else {
                            calif2 = 0;
                        }
                    }
                    else {
                        calif2 = 0;
                    }
                    if (ev3 !== undefined) {
                        if (ev3.itemsEvaluados[i] !== undefined) {
                            calif3 = ev3.itemsEvaluados[i].calificacion;
                        }
                        else {
                            calif3 = 0;
                        }
                    }
                    else {
                        calif3 = 0;
                    }
                    this.detalles.push({ aspecto: items[i].nombre,
                        res1: this.puntuaciones[calif1].nombre,
                        res2: this.puntuaciones[calif2].nombre,
                        res3: this.puntuaciones[calif3].nombre });
                    calif1 = null, calif2 = null, calif3 = null;
                }
                if (this.vectorArticulos[index].evaluaciones[0] !== undefined) {
                    rec1 = this.vectorArticulos[index].evaluaciones[0].recomendacion;
                    obs1 = this.vectorArticulos[index].evaluaciones[0].observacion;
                    obsInterna1 = this.vectorArticulos[index].evaluaciones[0].observacionInterna;
                }
                else {
                    rec1 = null;
                    obs1 = null;
                    obsInterna1 = null;
                }
                if (this.vectorArticulos[index].evaluaciones[1] !== undefined) {
                    rec2 = this.vectorArticulos[index].evaluaciones[1].recomendacion;
                    obs2 = this.vectorArticulos[index].evaluaciones[1].observacion;
                    obsInterna2 = this.vectorArticulos[index].evaluaciones[1].observacionInterna;
                }
                else {
                    rec2 = null;
                    obs2 = null;
                    obsInterna2 = null;
                }
                if (this.vectorArticulos[index].evaluaciones[2] !== undefined) {
                    rec3 = this.vectorArticulos[index].evaluaciones[2].recomendacion;
                    obs3 = this.vectorArticulos[index].evaluaciones[2].observacion;
                    obsInterna3 = this.vectorArticulos[index].evaluaciones[2].observacionInterna;
                }
                else {
                    rec3 = null;
                    obs3 = null;
                    obsInterna3 = null;
                }
                this.detalles.push({ aspecto: 'Recomendación',
                    res1: rec1,
                    res2: rec2,
                    res3: rec3 });
                this.detalles.push({ aspecto: 'Observación para el Autor',
                    res1: obs1,
                    res2: obs2,
                    res3: obs3 });
                this.detalles.push({ aspecto: 'Observación Interna',
                    res1: obsInterna1,
                    res2: obsInterna2,
                    res3: obsInterna3 });
            });
        });
        const btnDetalle = document.getElementById('activar-modal');
        btnDetalle.click();
    }
    getArchivo(index) {
        const id = this.vectorArticulos[index].id;
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
    getArticulos() {
        this.articulos = [];
        this.paperService.getPapersXChair().subscribe((res) => {
            const data = res.data[0].articulos;
            this.articulos = data;
            this.sortByState();
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
                    observacion: x.observacion,
                    observacionInterna: x.observacionInterna,
                    url: x.url,
                    edit: false
                };
            });
            this.vectorArticulos = this.articulos;
        });
    }
    filter(estado) {
        this.vectorArticulos = [];
        if (estado === 0) {
            this.vectorArticulos = this.articulos;
            return;
        }
        for (const art of this.articulos) {
            if (art.idEstado === estado) {
                this.vectorArticulos.push(art);
            }
        }
    }
    sortByState() {
        this.articulos.sort((a, b) => {
            if (a.idEstado > b.idEstado) {
                return 1;
            }
            else if (a.idEstado < b.idEstado) {
                return -1;
            }
            else {
                return 0;
            }
        });
    }
    modalOnClose(index) {
        const sel = document.getElementById('selectStateDetalle');
        sel.value = '';
        const obs = document.getElementById('observacion-autor');
        obs.value = '';
        this.detalles = [];
        document.getElementById('selectStateDetalle').classList.remove('is-invalid');
        this.vectorArticulos[index].edit = false;
    }
    toggleEdit(index) {
        this.vectorArticulos[index].edit = !this.vectorArticulos[index].edit;
    }
}
EvaluatePapersChairSecComponent.ɵfac = function EvaluatePapersChairSecComponent_Factory(t) { return new (t || EvaluatePapersChairSecComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_1__["PaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_evaluation_service__WEBPACK_IMPORTED_MODULE_2__["EvaluationService"])); };
EvaluatePapersChairSecComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluatePapersChairSecComponent, selectors: [["app-evaluate-papers-chair-sec"]], decls: 84, vars: 19, consts: [[1, "container-fluid"], [1, "evaluation-cards"], [1, "card-title", "text-center"], [1, "row"], [1, "col-auto", "col-form-label"], ["for", "btn-group-filtros"], ["id", "btn-group-filtros", "role", "group", 1, "btn-group", "col-auto"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [4, "ngFor", "ngForOf"], ["hidden", "", "id", "activar-modal", "data-bs-toggle", "modal", "data-bs-target", "#detallesModal"], ["id", "detallesModal", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "detallesModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["id", "detallesModalLabel", 1, "modal-title"], [1, "badge", "bg-primary"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "container"], [1, "table", "table-hover", "table-bordered"], [1, "text-center"], [1, "row", "row-detalle", "align-items-center"], [1, "col-md-3"], ["for", "selectStateDetalle", 1, "col-form-label"], ["id", "spanEvaluacion"], [1, "col-md-4"], ["id", "selectStateDetalle", 1, "form-select"], ["disabled", "", "selected", "", "value", ""], ["value", "1", 4, "ngIf"], ["value", "2", 4, "ngIf"], ["value", "3", 4, "ngIf"], [1, "row", "row-detalle"], ["for", "observacion-autor", 1, "col-form-label"], [1, "col-md-8"], ["id", "observacion-autor", 1, "form-control"], [1, "col-auto"], ["id", "btnGuardar", 1, "btn", "btn-outline-success", 3, "click"], [1, "fa", "fa-save", "fa-lg"], [1, "modal-footer"], [1, "col-auto", "me-auto"], [1, "btn", "btn-primary", "btn-border", 3, "click"], [1, "fas", "fa-file-pdf"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-border", 3, "click"], [1, "card", "col-md-6", "offset-3"], [1, "card-body"], [1, "card-title"], ["id", "evaluadores", 1, "card-subtitle", "mb-2", "text-muted"], ["class", "row ev-reco", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "btn", "card-footer-btn", 3, "click"], [1, "fa", "fa-search-plus"], ["class", "btn card-footer-btn", "id", "editar", 3, "click", 4, "ngIf"], ["id", "evaluation-select", 4, "ngIf"], [1, "row", "ev-reco"], [1, "col", "col-md-3"], ["id", "nombreEvaluador"], [1, "card-text"], ["id", "editar", 1, "btn", "card-footer-btn", 3, "click"], [1, "fa", "fa-pencil"], ["id", "evaluation-select"], ["class", "btn btn-outline-success", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-warning", 3, "click", 4, "ngIf"], ["title", "Cancelar", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-times", "fa-lg"], [1, "btn", "btn-outline-success", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "btn", "btn-outline-warning", 3, "click"], ["value", "1"], ["value", "2"], ["value", "3"]], template: function EvaluatePapersChairSecComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Evaluaci\u00F3n de Art\u00EDculos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_11_listener() { return ctx.filter(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_13_listener() { return ctx.filter(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pendiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_15_listener() { return ctx.filter(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Aprobados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_17_listener() { return ctx.filter(7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Rechazados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_19_listener() { return ctx.filter(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reentrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_21_listener() { return ctx.filter(8); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Aprobado Reentrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_23_listener() { return ctx.filter(9); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Rechazado Reentrega");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EvaluatePapersChairSecComponent_div_25_Template, 25, 13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_35_listener() { return ctx.modalOnClose(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Aspecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tbody", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EvaluatePapersChairSecComponent_tr_50_Template, 9, 4, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Evaluaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, EvaluatePapersChairSecComponent_option_59_Template, 2, 0, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, EvaluatePapersChairSecComponent_option_60_Template, 2, 0, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, EvaluatePapersChairSecComponent_option_61_Template, 2, 0, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Observaci\u00F3n para el Autor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_a_click_73_listener() { return ctx.evaluarDetalle(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Guardar Evaluaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_a_click_78_listener() { return ctx.getArchivo(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Ver art\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatePapersChairSecComponent_Template_button_click_82_listener() { return ctx.modalOnClose(ctx.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vectorArticulos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.detNombreArticulo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-warning", ctx.detEstado.id === 5)("text-dark", ctx.detEstado.id === 5)("bg-success", ctx.detEstado.id === 6 || ctx.detEstado.id === 8)("bg-danger", ctx.detEstado.id === 7 || ctx.detEstado.id === 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEstado.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEvUno.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEvDos.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detEvTres.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detalles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detEstado.id !== 6 && ctx.detEstado.id !== 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detEstado.id !== 7 && ctx.detEstado.id !== 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detEstado.id !== 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.observacionAutor);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n    background-color: #F4F4F4;\n  \n  }\n  \nhr[_ngcontent-%COMP%]{\n    border:#00609C solid 1px;\n}\n  \n@media (min-width: 768px) {\n    hr[_ngcontent-%COMP%]{\n        margin-left: 25%;\n        margin-right: 25%;\n\n    }\n\n    .container-fluid[_ngcontent-%COMP%]{\n        padding: 5rem;\n    }\n}\n  \n.ev-reco[_ngcontent-%COMP%] {\n    margin-bottom: -15px;\n}\n  \n.evaluation-cards[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n}\n  \n.card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n  \n.card-footer[_ngcontent-%COMP%] {\n    background-color: white;\n}\n  \n.modal-header[_ngcontent-%COMP%] {\n    padding-left: 29px;\n    padding-right: 29px;\n}\n  \n.modal-footer[_ngcontent-%COMP%] {\n    padding-left: 29px;\n    padding-right: 29px;\n}\n  \n.row-detalle[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n  \n.table[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n  \n.btn-primary[_ngcontent-%COMP%] {\n    background-color: #00609C;\n    color: white;\n    border-color: transparent;\n}\n  \n.btn-primary[_ngcontent-%COMP%]:hover {\n    background-color: #0080cf;\n}\n  \n.btn-border[_ngcontent-%COMP%] {\n    border: none;\n}\n  \n.btn-outline-primary[_ngcontent-%COMP%] {\n    border-color: #00609C;\n    color: #00609C;\n}\n  \n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n    background-color: #00609C;\n    border-color: #00609C;\n    color: white;\n}\n  \n.card-footer-btn[_ngcontent-%COMP%] {\n    color: #00609C;\n    background: transparent;\n    border: transparent;\n}\n  \n.card-footer-btn[_ngcontent-%COMP%]:hover {\n    color: #3cafe0;\n}\n  \n#selectStateDetalle[_ngcontent-%COMP%] {\n    float: left;\n}\n  \n#btnGuardar[_ngcontent-%COMP%] {\n    float: right;\n}\n  \n#evaluadores[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n  \n#nombreEvaluador[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\n  \n#responsable[_ngcontent-%COMP%] {\n    font-style: italic;\n}\n  \n#editar[_ngcontent-%COMP%] {\n    float: right;\n}\n  \n#evaluation-select[_ngcontent-%COMP%] {\n    float:right;\n}\n  \n#evaluation-select-detalle[_ngcontent-%COMP%] {\n    white-space:nowrap;\n}\n  \n#spanEvaluacion[_ngcontent-%COMP%] {\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRlLXBhcGVycy1jaGFpci1zZWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5Qjs7RUFFM0I7O0FBRUY7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7O0lBRXJCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImV2YWx1YXRlLXBhcGVycy1jaGFpci1zZWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcbiAgXG4gIH1cbiAgXG5ocntcbiAgICBib3JkZXI6IzAwNjA5QyBzb2xpZCAxcHg7XG59XG4gIFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaHJ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuXG4gICAgfVxuXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgICAgcGFkZGluZzogNXJlbTtcbiAgICB9XG59XG5cbi5ldi1yZWNvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cblxuLmV2YWx1YXRpb24tY2FyZHMge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyOXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI5cHg7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjlweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOXB4O1xufVxuXG4ucm93LWRldGFsbGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MDlDO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgwY2Y7XG59XG5cbi5idG4tYm9yZGVyIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICBib3JkZXItY29sb3I6ICMwMDYwOUM7XG4gICAgY29sb3I6ICMwMDYwOUM7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MDlDO1xuICAgIGJvcmRlci1jb2xvcjogIzAwNjA5QztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLWZvb3Rlci1idG4ge1xuICAgIGNvbG9yOiAjMDA2MDlDO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkLWZvb3Rlci1idG46aG92ZXIge1xuICAgIGNvbG9yOiAjM2NhZmUwO1xufVxuXG4jc2VsZWN0U3RhdGVEZXRhbGxlIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuI2J0bkd1YXJkYXIge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuI2V2YWx1YWRvcmVzIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiNub21icmVFdmFsdWFkb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNyZXNwb25zYWJsZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jZWRpdGFyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbiNldmFsdWF0aW9uLXNlbGVjdCB7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbiNldmFsdWF0aW9uLXNlbGVjdC1kZXRhbGxlIHtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG59XG5cbiNzcGFuRXZhbHVhY2lvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=pages-evaluate-papers-chair-sec-evaluate-papers-chair-sec-module.js.map