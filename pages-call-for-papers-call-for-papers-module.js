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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_paper_list_paper_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/paper-list/paper-list.component */ "vGkx");
/* harmony import */ var _core_components_paper_form_paper_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/paper-form/paper-form.component */ "K61V");






function CallForPapersComponent_app_paper_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-paper-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newPaperEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_newPaperEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newPaper(); })("editPaperEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_editPaperEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editPaper($event); })("deletePaperEvent", function CallForPapersComponent_app_paper_list_1_Template_app_paper_list_deletePaperEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deletePaper($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paperList", ctx_r0.paperList);
} }
function CallForPapersComponent_app_paper_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-paper-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paperEmitter", function CallForPapersComponent_app_paper_form_2_Template_app_paper_form_paperEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleCreatePaper($event); })("cancelPaper", function CallForPapersComponent_app_paper_form_2_Template_app_paper_form_cancelPaper_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newPaper(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("simposios", ctx_r1.simposios)("paper", ctx_r1.paper);
} }
class CallForPapersComponent {
    constructor(paperService, router) {
        this.paperService = paperService;
        this.router = router;
        this.paperList = [];
        this.edit = false;
        this.paper = {};
        this.simposios = [];
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
            console.log(this.paperList);
        });
    }
    newPaper() {
        this.edit = !this.edit;
        this.paper = {
            id: '',
            autores: [],
            responsable: '',
            nombre: '',
            estado: 'Sin subir',
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
            alert('El paper ha sido eliminado correctamente');
            this.getPaper();
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
                alert('Paper Creado Correctamente');
                this.router.navigateByUrl('/callForPapers');
            });
        }
        else {
            this.paperService.putPaper(item).subscribe((res) => {
                alert('Paper Modificado Correctamente');
                this.router.navigateByUrl('/callForPapers');
            });
        }
    }
}
CallForPapersComponent.ɵfac = function CallForPapersComponent_Factory(t) { return new (t || CallForPapersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_1__["PaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CallForPapersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallForPapersComponent, selectors: [["app-call-for-papers"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], [3, "paperList", "newPaperEvent", "editPaperEvent", "deletePaperEvent", 4, "ngIf"], [3, "simposios", "paper", "paperEmitter", "cancelPaper", 4, "ngIf"], [3, "paperList", "newPaperEvent", "editPaperEvent", "deletePaperEvent"], [3, "simposios", "paper", "paperEmitter", "cancelPaper"]], template: function CallForPapersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CallForPapersComponent_app_paper_list_1_Template, 1, 1, "app-paper-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CallForPapersComponent_app_paper_form_2_Template, 1, 2, "app-paper-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _core_components_paper_list_paper_list_component__WEBPACK_IMPORTED_MODULE_4__["PaperListComponent"], _core_components_paper_form_paper_form_component__WEBPACK_IMPORTED_MODULE_5__["PaperFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsLWZvci1wYXBlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


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
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]], exports: [_call_for_papers_component__WEBPACK_IMPORTED_MODULE_2__["CallForPapersComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-call-for-papers-call-for-papers-module.js.map