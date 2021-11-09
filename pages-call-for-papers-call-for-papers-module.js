(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-call-for-papers-call-for-papers-module"],{

/***/ "C6MM":
/*!*************************************************************************!*\
  !*** ./src/app/pages/call-for-papers/call-for-papers-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CallForPapersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForPapersRoutingModule", function() { return CallForPapersRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _call_for_papers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-for-papers.component */ "lg6N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _call_for_papers_component__WEBPACK_IMPORTED_MODULE_1__["CallForPapersComponent"]
    }
];
class CallForPapersRoutingModule {
}
CallForPapersRoutingModule.ɵfac = function CallForPapersRoutingModule_Factory(t) { return new (t || CallForPapersRoutingModule)(); };
CallForPapersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CallForPapersRoutingModule });
CallForPapersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CallForPapersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lg6N":
/*!********************************************************************!*\
  !*** ./src/app/pages/call-for-papers/call-for-papers.component.ts ***!
  \********************************************************************/
/*! exports provided: CallForPapersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForPapersComponent", function() { return CallForPapersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/paper.service */ "TJ9D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_paper_list_paper_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/paper-list/paper-list.component */ "vGkx");
/* harmony import */ var _core_components_paper_form_paper_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/paper-form/paper-form.component */ "K61V");
/* harmony import */ var _core_components_paper_ready_paper_ready_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/paper-ready/paper-ready.component */ "ogMr");
/* harmony import */ var _core_components_revision_autor_revision_autor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/revision-autor/revision-autor.component */ "+wYO");









function CallForPapersComponent_app_paper_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-paper-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPaperEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_newPaperEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.newPaper(); })("finalPaperEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_finalPaperEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.finalPaper($event); })("revisionEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_revisionEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.verRevision($event); })("editPaperEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_editPaperEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.editPaper($event); })("deletePaperEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_deletePaperEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deletePaper($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paperList", ctx_r0.paperList);
} }
function CallForPapersComponent_app_paper_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-paper-form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendEmitter", function CallForPapersComponent_app_paper_form_2_Template_app_paper_form_sendEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sendPaper($event); })("paperEmitter", function CallForPapersComponent_app_paper_form_2_Template_app_paper_form_paperEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toggleCreatePaper($event); })("cancelPaper", function CallForPapersComponent_app_paper_form_2_Template_app_paper_form_cancelPaper_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.newPaper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("simposios", ctx_r1.simposios)("paper", ctx_r1.paper);
} }
function CallForPapersComponent_app_paper_ready_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-paper-ready", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paperEmitter", function CallForPapersComponent_app_paper_ready_3_Template_app_paper_ready_paperEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.entregaFinal($event); })("cancelPaper", function CallForPapersComponent_app_paper_ready_3_Template_app_paper_ready_cancelPaper_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.volverFinalPaper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paper", ctx_r2.paper);
} }
function CallForPapersComponent_app_revision_autor_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-revision-autor", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancelRevision", function CallForPapersComponent_app_revision_autor_4_Template_app_revision_autor_cancelRevision_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.volverRevision(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paper", ctx_r3.paper);
} }
class CallForPapersComponent {
    constructor(paperService, router, toastr) {
        this.paperService = paperService;
        this.router = router;
        this.toastr = toastr;
        this.paperList = [];
        this.edit = false;
        this.paper = {};
        this.simposios = [];
        this.okey = false;
        this.ready = false;
        this.revision = false;
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getSimposios();
        this.getPaper();
    }
    getSimposios() {
        this.paperService.getSimposiosActivos().subscribe((res) => {
            this.simposios = res.data;
        });
    }
    getPaper() {
        this.paperService.getPaper().subscribe((res) => {
            this.paperList = res.data;
            this.okey = true;
        });
    }
    newPaper() {
        this.edit = !this.edit;
        this.paper = {
            id: '',
            autores: [],
            responsable: '',
            nombre: '',
            estado: 'sin subir',
            simposio: '',
            archivo: null,
        };
    }
    editPaper(paper) {
        this.edit = !this.edit;
        this.paper = paper;
    }
    deletePaper(item) {
        this.paperService.deletePaper(item).subscribe((res) => {
            this.toastr.success('El paper ha sido eliminado correctamente');
            this.router.navigateByUrl('/callForPapers');
        });
    }
    /**
     *
     * @param x Objeto compuesto de IntPaper
     * Recibe un paper, chequea que tenga un id.
     * Si lo tiene hace un PUT al back. Actualiza un paper creado.
     * Si no lo tiene crea un nuevo paper.
     */
    toggleCreatePaper(item) {
        console.log(item);
        if (item.id === '') {
            this.paperService.postPaper(item).subscribe((res) => {
                this.toastr.success('Paper Creado Correctamente');
                this.router.navigateByUrl('/callForPapers');
            });
        }
        else {
            this.paperService.putPaper(item).subscribe((res) => {
                this.toastr.success('Paper Modificado Correctamente');
                this.router.navigateByUrl('/callForPapers');
            });
        }
    }
    sendPaper(item) {
        this.paperService.sendPaper(item).subscribe((res) => {
            this.toastr.success('Paper Enviado');
            this.router.navigateByUrl('/callForPapers');
        });
    }
    finalPaper(item) {
        // ir a la página para el camera ready
        this.ready = true;
        this.paper = item;
    }
    volverFinalPaper() {
        this.ready = false;
    }
    verRevision(item) {
        // Abrir la revisión
        this.paper = item;
        this.revision = true;
    }
    entregaFinal(item) {
        // Se envia el paper ya camera ready listo
        this.paperService.finalPaper(item).subscribe((res) => {
            this.toastr.success('El camera ready ha sido entregado');
            this.router.navigateByUrl('/callForPapers');
        });
    }
    volverRevision() {
        this.revision = false;
    }
}
CallForPapersComponent.ɵfac = function CallForPapersComponent_Factory(t) { return new (t || CallForPapersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_1__["PaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CallForPapersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallForPapersComponent, selectors: [["app-call-for-papers"]], decls: 5, vars: 4, consts: [[1, "container-fluid"], [3, "paperList", "newPaperEvent", "finalPaperEvent", "revisionEvent", "editPaperEvent", "deletePaperEvent", 4, "ngIf"], [3, "simposios", "paper", "sendEmitter", "paperEmitter", "cancelPaper", 4, "ngIf"], [3, "paper", "paperEmitter", "cancelPaper", 4, "ngIf"], [3, "paper", "cancelRevision", 4, "ngIf"], [3, "paperList", "newPaperEvent", "finalPaperEvent", "revisionEvent", "editPaperEvent", "deletePaperEvent"], [3, "simposios", "paper", "sendEmitter", "paperEmitter", "cancelPaper"], [3, "paper", "paperEmitter", "cancelPaper"], [3, "paper", "cancelRevision"]], template: function CallForPapersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CallForPapersComponent_app_paper_list_1_Template, 1, 1, "app-paper-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CallForPapersComponent_app_paper_form_2_Template, 1, 2, "app-paper-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CallForPapersComponent_app_paper_ready_3_Template, 1, 1, "app-paper-ready", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CallForPapersComponent_app_revision_autor_4_Template, 1, 1, "app-revision-autor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit && ctx.okey && !ctx.ready && !ctx.revision);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revision);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _core_components_paper_list_paper_list_component__WEBPACK_IMPORTED_MODULE_5__["PaperListComponent"], _core_components_paper_form_paper_form_component__WEBPACK_IMPORTED_MODULE_6__["PaperFormComponent"], _core_components_paper_ready_paper_ready_component__WEBPACK_IMPORTED_MODULE_7__["PaperReadyComponent"], _core_components_revision_autor_revision_autor_component__WEBPACK_IMPORTED_MODULE_8__["RevisionAutorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsLWZvci1wYXBlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "u3CC":
/*!*****************************************************************!*\
  !*** ./src/app/pages/call-for-papers/call-for-papers.module.ts ***!
  \*****************************************************************/
/*! exports provided: CallForPapersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallForPapersModule", function() { return CallForPapersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _call_for_papers_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-for-papers-routing.module */ "C6MM");
/* harmony import */ var _call_for_papers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./call-for-papers.component */ "lg6N");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CallForPapersModule {
}
CallForPapersModule.ɵfac = function CallForPapersModule_Factory(t) { return new (t || CallForPapersModule)(); };
CallForPapersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CallForPapersModule });
CallForPapersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _call_for_papers_routing_module__WEBPACK_IMPORTED_MODULE_1__["CallForPapersRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CallForPapersModule, { declarations: [_call_for_papers_component__WEBPACK_IMPORTED_MODULE_2__["CallForPapersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _call_for_papers_routing_module__WEBPACK_IMPORTED_MODULE_1__["CallForPapersRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-call-for-papers-call-for-papers-module.js.map