(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-congress-agenda-congress-agenda-module"],{

/***/ "M2PT":
/*!*****************************************************************!*\
  !*** ./src/app/pages/congress-agenda/congress-agenda.module.ts ***!
  \*****************************************************************/
/*! exports provided: CongressAgendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongressAgendaModule", function() { return CongressAgendaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _congress_agenda_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./congress-agenda-routing.module */ "n7Sp");
/* harmony import */ var _congress_agenda_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./congress-agenda.component */ "VM76");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CongressAgendaModule {
}
CongressAgendaModule.ɵfac = function CongressAgendaModule_Factory(t) { return new (t || CongressAgendaModule)(); };
CongressAgendaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CongressAgendaModule });
CongressAgendaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _congress_agenda_routing_module__WEBPACK_IMPORTED_MODULE_1__["CongressAgendaRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CongressAgendaModule, { declarations: [_congress_agenda_component__WEBPACK_IMPORTED_MODULE_2__["CongressAgendaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _congress_agenda_routing_module__WEBPACK_IMPORTED_MODULE_1__["CongressAgendaRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();


/***/ }),

/***/ "VM76":
/*!********************************************************************!*\
  !*** ./src/app/pages/congress-agenda/congress-agenda.component.ts ***!
  \********************************************************************/
/*! exports provided: CongressAgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongressAgendaComponent", function() { return CongressAgendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_symposium_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/symposium.service */ "xFu8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_core_services_congress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/congress.service */ "VRfU");
/* harmony import */ var src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/paper.service */ "TJ9D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_congress_active_congress_active_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/congress-active/congress-active.component */ "T96i");
/* harmony import */ var _core_components_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/agenda/agenda.component */ "7v1z");
/* harmony import */ var _core_components_symposium_select_symposium_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/symposium-select/symposium-select.component */ "c++I");









function CongressAgendaComponent_app_congress_active_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-congress-active", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("editDatesEvent", function CongressAgendaComponent_app_congress_active_1_Template_app_congress_active_editDatesEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.editDates($event); })("editSympoEvent", function CongressAgendaComponent_app_congress_active_1_Template_app_congress_active_editSympoEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editSympo($event); })("editRoomsEvent", function CongressAgendaComponent_app_congress_active_1_Template_app_congress_active_editRoomsEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editRooms($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("congressList", ctx_r0.congressList);
} }
function CongressAgendaComponent_app_agenda_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-agenda", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancelAgenda", function CongressAgendaComponent_app_agenda_2_Template_app_agenda_cancelAgenda_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.editDates($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schedule", ctx_r1.schedule);
} }
function CongressAgendaComponent_app_symposium_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-symposium-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancelSymposium", function CongressAgendaComponent_app_symposium_select_3_Template_app_symposium_select_cancelSymposium_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.editSympo($event); })("symposiumEmitter", function CongressAgendaComponent_app_symposium_select_3_Template_app_symposium_select_symposiumEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addSymposium($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("simposios", ctx_r2.simposios)("simposiosList", ctx_r2.simposiosList);
} }
class CongressAgendaComponent {
    constructor(sympoService, router, congressService, paperService) {
        this.sympoService = sympoService;
        this.router = router;
        this.congressService = congressService;
        this.paperService = paperService;
        this.congressList = [];
        this.simposios = [];
        this.simposiosList = [];
        this.base = [];
        this.list = true;
        this.sympo = false;
        this.dates = false;
        this.schedule = {
            Id: 0,
            fechaInCongreso: new Date(),
            fechaFinCongreso: new Date(),
            fechaInInscrip: new Date(),
            fechaFinInscripTemprana: new Date(),
            fechaFinInscripTardia: new Date(),
            fechaLimPapers: new Date(),
            fechaProrrogaPapers: new Date(),
            fechaFinEvaluacion: new Date(),
            fechaFinReEv: new Date(),
            simposios: [],
            aulas: [],
            modalidad: ''
        };
    }
    ;
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getSimposios();
        this.getCongresos();
    }
    getCongresos() {
        this.congressService.getCongressById().subscribe((res) => {
            this.congressList = res.data.map((x) => {
                return {
                    id: x.id,
                    sede: x.sede,
                    ano: x.año,
                    nombre: x.nombre,
                    nombre_sede: x.nombre_sede,
                    chairPrincipal: x.chairPrincipal,
                    coordLocal: x.coordLocal,
                    fechaInCongreso: x.fechaInCongreso,
                    fechaFinCongreso: x.fechaFinCongreso,
                    fechaLimPapers: x.fechaLimPapers,
                    fechaProrrogaPapers: x.fechaProrrogaPapers,
                    fechaFinEvaluacion: x.fechaFinEvaluacion,
                    fechaFinReEv: x.fechaFinReEv,
                    fechaFinInscripTemprana: x.fechaFinInsTemprana,
                    fechaFinInscripTardia: x.fechaFinInsTardia,
                    modalidad: x.modalidad
                };
            });
        });
    }
    getSimposios() {
        this.sympoService.getSymposium().subscribe((res) => {
            this.simposios = res.data;
        });
        this.paperService.getSimposiosActivos().subscribe((res) => {
            this.simposiosList = res.data;
            this.base = res.data;
        });
    }
    cancelEditDates() {
        this.dates = !this.dates;
        this.list = !this.list;
    }
    editDates(item) {
        this.dates = !this.dates;
        this.list = !this.list;
        this.schedule = item;
    }
    cancelEditSympo() {
        this.sympo = !this.sympo;
        this.list = !this.list;
    }
    editSympo(item) {
        this.sympo = !this.sympo;
        this.list = !this.list;
    }
    editRooms(item) {
        this.router.navigate(['/room']);
    }
}
CongressAgendaComponent.ɵfac = function CongressAgendaComponent_Factory(t) { return new (t || CongressAgendaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_symposium_service__WEBPACK_IMPORTED_MODULE_1__["SymposiumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_congress_service__WEBPACK_IMPORTED_MODULE_3__["CongressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_4__["PaperService"])); };
CongressAgendaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CongressAgendaComponent, selectors: [["app-congress-agenda"]], decls: 4, vars: 3, consts: [[1, "container-fluid"], [3, "congressList", "editDatesEvent", "editSympoEvent", "editRoomsEvent", 4, "ngIf"], [3, "schedule", "cancelAgenda", 4, "ngIf"], [3, "simposios", "simposiosList", "cancelSymposium", "symposiumEmitter", 4, "ngIf"], [3, "congressList", "editDatesEvent", "editSympoEvent", "editRoomsEvent"], [3, "schedule", "cancelAgenda"], [3, "simposios", "simposiosList", "cancelSymposium", "symposiumEmitter"]], template: function CongressAgendaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CongressAgendaComponent_app_congress_active_1_Template, 1, 1, "app-congress-active", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CongressAgendaComponent_app_agenda_2_Template, 1, 1, "app-agenda", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CongressAgendaComponent_app_symposium_select_3_Template, 1, 2, "app-symposium-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sympo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _core_components_congress_active_congress_active_component__WEBPACK_IMPORTED_MODULE_6__["CongressActiveComponent"], _core_components_agenda_agenda_component__WEBPACK_IMPORTED_MODULE_7__["AgendaComponent"], _core_components_symposium_select_symposium_select_component__WEBPACK_IMPORTED_MODULE_8__["SymposiumSelectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25ncmVzcy1hZ2VuZGEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "n7Sp":
/*!*************************************************************************!*\
  !*** ./src/app/pages/congress-agenda/congress-agenda-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CongressAgendaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongressAgendaRoutingModule", function() { return CongressAgendaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _congress_agenda_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./congress-agenda.component */ "VM76");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _congress_agenda_component__WEBPACK_IMPORTED_MODULE_1__["CongressAgendaComponent"]
    }
];
class CongressAgendaRoutingModule {
}
CongressAgendaRoutingModule.ɵfac = function CongressAgendaRoutingModule_Factory(t) { return new (t || CongressAgendaRoutingModule)(); };
CongressAgendaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CongressAgendaRoutingModule });
CongressAgendaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CongressAgendaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-congress-agenda-congress-agenda-module.js.map