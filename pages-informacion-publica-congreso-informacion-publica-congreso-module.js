(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-informacion-publica-congreso-informacion-publica-congreso-module"],{

/***/ "0E/T":
/*!*************************************************!*\
  !*** ./src/app/core/services/public.service.ts ***!
  \*************************************************/
/*! exports provided: PublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicService", function() { return PublicService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PublicService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
    }
    getEvaluators(id) {
        return this.httpClient.get(this.apiURL + 'articulos/lista-evaluadoresCongreso/?idCongreso=' + id);
    }
    getChairsSimposiosPublic(id) {
        return this.httpClient.get(this.apiURL + 'congresos/lista-chairs/?idCongreso=' + id);
    }
    getEventosXDia(id) {
        return this.httpClient.get(this.apiURL + 'eventos/lista-eventos/?idCongreso=' + id);
    }
}
PublicService.ɵfac = function PublicService_Factory(t) { return new (t || PublicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PublicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PublicService, factory: PublicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Tz/0":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/informacion-publica-congreso/informacion-publica-congreso.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: InformacionPublicaCongresoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPublicaCongresoComponent", function() { return InformacionPublicaCongresoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_public_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/public.service */ "0E/T");
/* harmony import */ var src_app_core_services_define_agenda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/define-agenda.service */ "/UmO");
/* harmony import */ var _core_components_comision_permanente_organizacion_comision_permanente_organizacion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/comision-permanente-organizacion/comision-permanente-organizacion.component */ "as28");
/* harmony import */ var _core_components_comision_ejecutiva_organizacion_comision_ejecutiva_organizacion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/comision-ejecutiva-organizacion/comision-ejecutiva-organizacion.component */ "kvIV");
/* harmony import */ var _core_components_comite_organizador_local_comite_organizador_local_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/comite-organizador-local/comite-organizador-local.component */ "zRr5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_comite_academico_list_comite_academico_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/comite-academico-list/comite-academico-list.component */ "nFdx");








function InformacionPublicaCongresoComponent_app_comite_academico_list_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comite-academico-list", 23);
} if (rf & 2) {
    const symposium_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symposium", symposium_r7);
} }
function InformacionPublicaCongresoComponent_div_47_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ev_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ev_r9.nombre, " - ", ev_r9.sede, "");
} }
function InformacionPublicaCongresoComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Evaluadores");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InformacionPublicaCongresoComponent_div_47_tr_9_Template, 3, 2, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.evaluatorsList);
} }
function InformacionPublicaCongresoComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pr\u00F3ximamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InformacionPublicaCongresoComponent_div_50_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Inicio del Congreso: ", ctx_r11.agenda.fechaInCongreso, "");
} }
function InformacionPublicaCongresoComponent_div_50_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cierre de Recepci\u00F3n de Papers: ", ctx_r12.agenda.fechaLimPapers, "");
} }
function InformacionPublicaCongresoComponent_div_50_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pr\u00F3rroga de Cierre de Recepci\u00F3n: ", ctx_r13.agenda.fechaProrrogaPapers, "");
} }
function InformacionPublicaCongresoComponent_div_50_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fecha de Fin de Evaluaci\u00F3n: ", ctx_r14.agenda.fechaFinEvaluacion, "");
} }
function InformacionPublicaCongresoComponent_div_50_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cierre de Inscripci\u00F3n Temprana: ", ctx_r15.agenda.fechaFinInsTemprana, "");
} }
function InformacionPublicaCongresoComponent_div_50_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Cierre de Inscripci\u00F3n Tard\u00EDa: ", ctx_r16.agenda.fechaFinInsTardia, "");
} }
function InformacionPublicaCongresoComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fechas Importantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InformacionPublicaCongresoComponent_div_50_p_6_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InformacionPublicaCongresoComponent_div_50_p_7_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InformacionPublicaCongresoComponent_div_50_p_8_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InformacionPublicaCongresoComponent_div_50_p_9_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InformacionPublicaCongresoComponent_div_50_p_10_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InformacionPublicaCongresoComponent_div_50_p_11_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.agenda.fechaInCongreso !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.agenda.fechaLimPapers !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.agenda.fechaProrrogaPapers !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.agenda.fechaFinEvaluacion !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.agenda.fechaFinInscripTemprana !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.agenda.fechaFinInscripTardia !== null);
} }
function InformacionPublicaCongresoComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pr\u00F3ximamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InformacionPublicaCongresoComponent_div_53_div_6_div_3_span_13_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InformacionPublicaCongresoComponent_div_53_div_6_div_3_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InformacionPublicaCongresoComponent_div_53_div_6_div_3_span_13_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const p_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r24, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r25 !== p_r21.expositores.length - 1);
} }
function InformacionPublicaCongresoComponent_div_53_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Expositores:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InformacionPublicaCongresoComponent_div_53_div_6_div_3_span_13_Template, 3, 2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", p_r21.horario, " - ", p_r21.horarioFin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", p_r21.aula, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", p_r21.expositores);
} }
function InformacionPublicaCongresoComponent_div_53_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InformacionPublicaCongresoComponent_div_53_div_6_div_3_Template, 14, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("D\u00EDa ", i_r19 + 1, " - ", d_r18.fecha, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", d_r18.eventos);
} }
function InformacionPublicaCongresoComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Agenda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InformacionPublicaCongresoComponent_div_53_div_6_Template, 4, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.programa);
} }
function InformacionPublicaCongresoComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pr\u00F3ximamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InformacionPublicaCongresoComponent {
    /* programa = [{dia:{fecha:'26/10/21',
                 eventos: [{nombre:'BD', horarioInicio:'10:30', horarioFin: '11:00', aula:'Auditorio',
                            expositores: ['Ayelen Coronel', 'Juan Ledesma']},
                           {nombre:'IA', horarioInicio:'11:00', horarioFin: '11:30', aula:'Auditorio',
                           expositores: ['Coronel', 'Ledesma']},
                           {nombre:'SGO', horarioInicio:'10:30', horarioFin: '11:00', aula:'Aula Magna',
                           expositores: ['Agustín Marinangeli', 'Gabriel Rosales']}
                          ]}},
               {dia:{fecha:'27/10/21',
               eventos: [{nombre:'CI', horarioInicio:'10:30', horarioFin: '11:00', aula:'Salón de Actos',
                          expositores: ['Ayelen Coronel', 'Juan Ledesma']},
                         {nombre:'CON', horarioInicio:'11:00', horarioFin: '11:30', aula:'Aula 202',
                         expositores: ['Coronel', 'Ledesma']},
                         {nombre:'PF', horarioInicio:'10:30', horarioFin: '11:00', aula:'Zoom',
                         expositores: ['Agustín Marinangeli', 'Gabriel Rosales']}
                        ]}}
              ]; */
    /*  programa = [{fecha: '24/10', aula: 'Aula Magna', evento: 'Charla Ciberseguridad', horario: '10:30', horarioFin: '11:30',expositores: [{nombreExp:'Ayelén Coronel'}, {nombreExp: 'Juan Ignacio Ledesma'}] },
                 {fecha: '25/10', aula: 'Salón de actos', evento: 'Expo Paper Base de Datos', horario: '13:00', horarioFin: '14:00',expositores: [{nombreExp:'Juan Ignacio Ledesma'}, {nombreExp: 'Ayelén Coronel'}] },
                 {fecha: '26/10', aula: 'Auditorio', evento: 'Expo IA', horario: '10:00', horarioFin: '11:30',expositores: [{nombreExp:'Ayelén Coronel'}, {nombreExp: 'Juan Ignacio Ledesma'}] }];
   
      */
    constructor(publicService, 
    /* private evaluatorService: EvaluatorService, */
    agendaService) {
        this.publicService = publicService;
        this.agendaService = agendaService;
        this.chairPrincipal = {};
        this.chairsList = [];
        this.evaluatorsList = [];
        this.agenda = { fechaInCongreso: '',
            fechaFinCongreso: '',
            fechaLimPapers: '',
            fechaProrrogaPapers: '',
            fechaFinEvaluacion: '',
            fechaFinReEv: '',
            fechaFinInscripTemprana: '',
            fechaFinInscripTardia: '',
            fechaCoerreCongreso: '' };
        this.programa = [];
    }
    ngOnInit() {
        let url = window.location.href;
        let url_array = url.split('/');
        this.id = parseInt(url_array[url_array.length - 1]);
        this.getSimposios();
        this.getEvaluators();
        this.getFechasImportantes();
        this.getEventosxDia();
    }
    /* Corregir por los nuevos...  */
    getSimposios() {
        this.publicService.getChairsSimposiosPublic(this.id).subscribe((res) => {
            this.chairPrincipal = res.data.chairPrincipal;
            this.chairsList = res.data.chairsSecundarios;
            console.log(res.data);
        });
    }
    getEvaluators() {
        this.publicService.getEvaluators(this.id.toString()).subscribe((res) => {
            this.evaluatorsList = res.data;
            console.log(res.data);
        });
    }
    getFechasImportantes() {
        this.agendaService.getAgenda(this.id.toString()).subscribe((res) => {
            this.agenda = res.data[0];
            console.log(res.data);
        });
    }
    getEventosxDia() {
        this.publicService.getEventosXDia(this.id.toString()).subscribe((res) => {
            console.log(res.data);
            this.programa = res.data;
        });
    }
}
InformacionPublicaCongresoComponent.ɵfac = function InformacionPublicaCongresoComponent_Factory(t) { return new (t || InformacionPublicaCongresoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_public_service__WEBPACK_IMPORTED_MODULE_1__["PublicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_define_agenda_service__WEBPACK_IMPORTED_MODULE_2__["DefineAgendaService"])); };
InformacionPublicaCongresoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformacionPublicaCongresoComponent, selectors: [["app-informacion-publica-congreso"]], decls: 55, vars: 8, consts: [[1, "container-fluid"], [1, "text-center"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "comiteOrganizador-tab", "data-bs-toggle", "tab", "data-bs-target", "#comiteOrganizador", "type", "button", "role", "tab", "aria-controls", "comiteOrganizador", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "contact-tab", "data-bs-toggle", "tab", "data-bs-target", "#contact", "type", "button", "role", "tab", "aria-controls", "contact", "aria-selected", "false", 1, "nav-link"], ["id", "fechas-tab", "data-bs-toggle", "tab", "data-bs-target", "#fechas", "type", "button", "role", "tab", "aria-controls", "fechas", "aria-selected", "false", 1, "nav-link"], ["id", "agenda-tab", "data-bs-toggle", "tab", "data-bs-target", "#agenda", "type", "button", "role", "tab", "aria-controls", "agenda", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "comiteOrganizador", "role", "tabpanel", "aria-labelledby", "comiteOrganizador-tab", 1, "tab-pane", "fade", "show", "active"], [1, "=container-fluid"], [1, "row", "row-cols-1", "row-cols-md-3", "g-4", "grid"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["id", "Simposios"], ["id", "hr"], [1, "text-muted"], [3, "symposium", 4, "ngFor", "ngForOf"], ["id", "contact", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade"], [4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["id", "fechas", "role", "tabpanel", "aria-labelledby", "fechas-tab", 1, "tab-pane", "fade"], ["id", "agenda", "role", "tabpanel", "aria-labelledby", "agenda-tab", 1, "tab-pane", "fade"], [3, "symposium"], [1, "row"], [1, "table", "text-center"], ["class", "align-items-center", 4, "ngFor", "ngForOf"], [1, "align-items-center"], [4, "ngFor", "ngForOf"], [1, "expositores-label"], ["class", "expositores", 4, "ngFor", "ngForOf"], [1, "expositores"]], template: function InformacionPublicaCongresoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Informaci\u00F3n General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Comit\u00E9 Organizador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comit\u00E9 Acad\u00E9mico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Evaluadores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fechas Importantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Agenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Comit\u00E9 Organizador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-comision-permanente-organizacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-comision-ejecutiva-organizacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-comite-organizador-local");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Comit\u00E9 Acad\u00E9mico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Chair Principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, InformacionPublicaCongresoComponent_app_comite_academico_list_45_Template, 1, 1, "app-comite-academico-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InformacionPublicaCongresoComponent_div_47_Template, 10, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, InformacionPublicaCongresoComponent_div_48_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, InformacionPublicaCongresoComponent_div_50_Template, 13, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, InformacionPublicaCongresoComponent_div_51_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, InformacionPublicaCongresoComponent_div_53_Template, 7, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, InformacionPublicaCongresoComponent_div_54_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chairPrincipal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chairsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.evaluatorsList.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.evaluatorsList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.agenda.fechaInCongreso !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.agenda.fechaInCongreso == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programa.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.programa.length == 0);
    } }, directives: [_core_components_comision_permanente_organizacion_comision_permanente_organizacion_component__WEBPACK_IMPORTED_MODULE_3__["ComisionPermanenteOrganizacionComponent"], _core_components_comision_ejecutiva_organizacion_comision_ejecutiva_organizacion_component__WEBPACK_IMPORTED_MODULE_4__["ComisionEjecutivaOrganizacionComponent"], _core_components_comite_organizador_local_comite_organizador_local_component__WEBPACK_IMPORTED_MODULE_5__["ComiteOrganizadorLocalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _core_components_comite_academico_list_comite_academico_list_component__WEBPACK_IMPORTED_MODULE_7__["ComiteAcademicoListComponent"]], styles: ["s\n.contacto[_ngcontent-%COMP%]{\n    background-color: #f8f8f8;\n    border-radius: 2rem;\n}\n\n.expositores[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.expositores-label[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.contenidos[_ngcontent-%COMP%]{\n    padding-bottom: 3rem;\n  }\n\n.greyned[_ngcontent-%COMP%]{\n    color: grey;\n  }\n\ni[_ngcontent-%COMP%]{\n    padding-top: 1rem;\n    font: normal;\n  }\n\nhr[_ngcontent-%COMP%]{\n    border:#00609C solid 1px;\n  }\n\n@media (min-width: 768px) {\n    hr[_ngcontent-%COMP%]{\n        margin-left: 40%;\n        margin-right: 40%;\n    \n      }\n    .container-fluid[_ngcontent-%COMP%]{\n      padding: 2rem;\n    }\n  \n   }\n\n.col[_ngcontent-%COMP%]{\n    margin-left: .5rem;\n    margin-right: .5rem;\n}\n\n.map[_ngcontent-%COMP%]{\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n}\n\n.info[_ngcontent-%COMP%]{\n    margin-left: 0rem;\n    margin-right: 0rem;\n}\n\n.fa[_ngcontent-%COMP%]{\n  color: #126e82;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWFjaW9uLXB1YmxpY2EtY29uZ3Jlc28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0lBQ0ksb0JBQW9CO0VBQ3RCOztBQUVGO0lBQ0ksV0FBVztFQUNiOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7QUFJRjtJQUNJLHdCQUF3QjtFQUMxQjs7QUFHRjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjs7TUFFbkI7SUFDRjtNQUNFLGFBQWE7SUFDZjs7R0FFRDs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiaW5mb3JtYWNpb24tcHVibGljYS1jb25ncmVzby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic1xuLmNvbnRhY3Rve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuLmV4cG9zaXRvcmVzIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmV4cG9zaXRvcmVzLWxhYmVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jb250ZW5pZG9ze1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICB9XG5cbi5ncmV5bmVke1xuICAgIGNvbG9yOiBncmV5O1xuICB9XG4gIFxuaXtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBmb250OiBub3JtYWw7XG4gIH1cblxuICBcbiAgXG5ocntcbiAgICBib3JkZXI6IzAwNjA5QyBzb2xpZCAxcHg7XG4gIH1cbiAgXG4gIFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaHJ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDAlO1xuICAgIFxuICAgICAgfVxuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgIH1cbiAgXG4gICB9XG4gIFxuLmNvbHtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbn1cbi5tYXB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5pbmZve1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICAgIG1hcmdpbi1yaWdodDogMHJlbTtcbn1cbi5mYXtcbiAgY29sb3I6ICMxMjZlODI7XG59Il19 */"] });


/***/ }),

/***/ "j2MF":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/informacion-publica-congreso/informacion-publica-congreso-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: InformacionPublicaCongresoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPublicaCongresoRoutingModule", function() { return InformacionPublicaCongresoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _informacion_publica_congreso_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion-publica-congreso.component */ "Tz/0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _informacion_publica_congreso_component__WEBPACK_IMPORTED_MODULE_1__["InformacionPublicaCongresoComponent"]
    }];
class InformacionPublicaCongresoRoutingModule {
}
InformacionPublicaCongresoRoutingModule.ɵfac = function InformacionPublicaCongresoRoutingModule_Factory(t) { return new (t || InformacionPublicaCongresoRoutingModule)(); };
InformacionPublicaCongresoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InformacionPublicaCongresoRoutingModule });
InformacionPublicaCongresoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InformacionPublicaCongresoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "m6fq":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/informacion-publica-congreso/informacion-publica-congreso.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: InformacionPublicaCongresoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionPublicaCongresoModule", function() { return InformacionPublicaCongresoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _informacion_publica_congreso_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion-publica-congreso-routing.module */ "j2MF");
/* harmony import */ var _informacion_publica_congreso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./informacion-publica-congreso.component */ "Tz/0");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class InformacionPublicaCongresoModule {
}
InformacionPublicaCongresoModule.ɵfac = function InformacionPublicaCongresoModule_Factory(t) { return new (t || InformacionPublicaCongresoModule)(); };
InformacionPublicaCongresoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: InformacionPublicaCongresoModule });
InformacionPublicaCongresoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _informacion_publica_congreso_routing_module__WEBPACK_IMPORTED_MODULE_1__["InformacionPublicaCongresoRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](InformacionPublicaCongresoModule, { declarations: [_informacion_publica_congreso_component__WEBPACK_IMPORTED_MODULE_2__["InformacionPublicaCongresoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _informacion_publica_congreso_routing_module__WEBPACK_IMPORTED_MODULE_1__["InformacionPublicaCongresoRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-informacion-publica-congreso-informacion-publica-congreso-module.js.map