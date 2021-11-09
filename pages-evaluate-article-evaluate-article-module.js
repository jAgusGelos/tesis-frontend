(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-evaluate-article-evaluate-article-module"],{

/***/ "0HZA":
/*!***************************************************************************!*\
  !*** ./src/app/pages/evaluate-article/evaluate-article-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EvaluateArticleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateArticleRoutingModule", function() { return EvaluateArticleRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evaluate_article_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate-article.component */ "7tGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _evaluate_article_component__WEBPACK_IMPORTED_MODULE_1__["EvaluateArticleComponent"]
    }
];
class EvaluateArticleRoutingModule {
}
EvaluateArticleRoutingModule.ɵfac = function EvaluateArticleRoutingModule_Factory(t) { return new (t || EvaluateArticleRoutingModule)(); };
EvaluateArticleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EvaluateArticleRoutingModule });
EvaluateArticleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EvaluateArticleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "7tGf":
/*!**********************************************************************!*\
  !*** ./src/app/pages/evaluate-article/evaluate-article.component.ts ***!
  \**********************************************************************/
/*! exports provided: EvaluateArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateArticleComponent", function() { return EvaluateArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_evaluate_paper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/evaluate-paper.service */ "gnpU");
/* harmony import */ var src_app_core_services_evaluator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/evaluator.service */ "y6im");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/paper.service */ "TJ9D");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_evaluate_paper_list_evaluate_paper_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/evaluate-paper-list/evaluate-paper-list.component */ "nIk3");
/* harmony import */ var _core_components_evaluate_paper_form_evaluate_paper_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/components/evaluate-paper-form/evaluate-paper-form.component */ "ek5Z");









function EvaluateArticleComponent_app_evaluate_paper_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-evaluate-paper-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("EvaluationEvent", function EvaluateArticleComponent_app_evaluate_paper_list_1_Template_app_evaluate_paper_list_EvaluationEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.evaluate($event); })("EvaluationAcceptEvent", function EvaluateArticleComponent_app_evaluate_paper_list_1_Template_app_evaluate_paper_list_EvaluationAcceptEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.evaluate($event); })("EvaluationCancelEvent", function EvaluateArticleComponent_app_evaluate_paper_list_1_Template_app_evaluate_paper_list_EvaluationCancelEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.evaluate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paperList", ctx_r0.paperList);
} }
function EvaluateArticleComponent_app_evaluate_paper_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-evaluate-paper-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("GetItemsEvent", function EvaluateArticleComponent_app_evaluate_paper_form_2_Template_app_evaluate_paper_form_GetItemsEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getItems($event); })("GetFileEvent", function EvaluateArticleComponent_app_evaluate_paper_form_2_Template_app_evaluate_paper_form_GetFileEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getFile($event); })("SaveEvent", function EvaluateArticleComponent_app_evaluate_paper_form_2_Template_app_evaluate_paper_form_SaveEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.saveEvaluation($event); })("CancelEvent", function EvaluateArticleComponent_app_evaluate_paper_form_2_Template_app_evaluate_paper_form_CancelEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleFlagEvaluate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("paper", ctx_r1.paper)("items", ctx_r1.items);
} }
class EvaluateArticleComponent {
    constructor(paperEvalService, evaluationService, toastr, paperService, router) {
        this.paperEvalService = paperEvalService;
        this.evaluationService = evaluationService;
        this.toastr = toastr;
        this.paperService = paperService;
        this.router = router;
        this.paperList = [];
        this.paper = [];
        this.items = [];
        this.flagEvaluate = false;
        this.ok = false;
    }
    ngOnInit() {
        this.getPapers();
    }
    getPapers() {
        this.paperEvalService.getPaperEval().subscribe((res) => {
            this.paperList = res.data;
            this.ok = true;
        });
    }
    getItems(idArticulo) {
        this.paperEvalService.getTest(idArticulo).subscribe((res) => {
            this.items = res.data;
        });
    }
    evaluate(paper) {
        this.paper = paper;
        this.flagEvaluate = !this.flagEvaluate;
    }
    getFile(id) {
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
    toggleFlagEvaluate() {
        this.flagEvaluate = !this.flagEvaluate;
    }
    saveEvaluation(ev) {
        this.paperEvalService.editarEvaluacion(ev).subscribe((res) => {
            if (ev.submit) {
                this.submitEvaluation(ev);
                return;
            }
            else {
                this.getPapers();
                this.toastr.success('La evaluación ha sido guardada!');
                setTimeout(() => { window.location.reload(); }, 200);
            }
        });
    }
    submitEvaluation(ev) {
        this.paperEvalService.enviarEvaluacion(ev).subscribe((res) => {
            this.toastr.success('La evaluación ha sido enviada!');
            this.toggleFlagEvaluate();
            this.getPapers();
            setTimeout(() => { window.location.reload(); }, 200);
        });
    }
    acceptEvaluate(paper) {
        this.paper = paper;
        this.evaluationService.acceptEvaluationPaper(this.paper).subscribe((res) => { this.toastr.success('La evaluación ha sido aceptada.'); });
    }
    cancelEvaluate(paper) {
        this.paper = paper;
        this.evaluationService.cancelarEvaluationPaper(this.paper).subscribe((res) => { this.toastr.success('La evaluación ha sido rechazada.'); });
    }
}
EvaluateArticleComponent.ɵfac = function EvaluateArticleComponent_Factory(t) { return new (t || EvaluateArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_evaluate_paper_service__WEBPACK_IMPORTED_MODULE_1__["EvaluatePaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_evaluator_service__WEBPACK_IMPORTED_MODULE_2__["EvaluatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_paper_service__WEBPACK_IMPORTED_MODULE_4__["PaperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EvaluateArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluateArticleComponent, selectors: [["app-evaluate-article"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], [3, "paperList", "EvaluationEvent", "EvaluationAcceptEvent", "EvaluationCancelEvent", 4, "ngIf"], [3, "paper", "items", "GetItemsEvent", "GetFileEvent", "SaveEvent", "CancelEvent", 4, "ngIf"], [3, "paperList", "EvaluationEvent", "EvaluationAcceptEvent", "EvaluationCancelEvent"], [3, "paper", "items", "GetItemsEvent", "GetFileEvent", "SaveEvent", "CancelEvent"]], template: function EvaluateArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EvaluateArticleComponent_app_evaluate_paper_list_1_Template, 1, 1, "app-evaluate-paper-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EvaluateArticleComponent_app_evaluate_paper_form_2_Template, 1, 2, "app-evaluate-paper-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flagEvaluate && ctx.ok);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagEvaluate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _core_components_evaluate_paper_list_evaluate_paper_list_component__WEBPACK_IMPORTED_MODULE_7__["EvaluatePaperListComponent"], _core_components_evaluate_paper_form_evaluate_paper_form_component__WEBPACK_IMPORTED_MODULE_8__["EvaluatePaperFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmFsdWF0ZS1hcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ZNzd":
/*!*******************************************************************!*\
  !*** ./src/app/pages/evaluate-article/evaluate-article.module.ts ***!
  \*******************************************************************/
/*! exports provided: EvaluateArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateArticleModule", function() { return EvaluateArticleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evaluate_article_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluate-article-routing.module */ "0HZA");
/* harmony import */ var _evaluate_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluate-article.component */ "7tGf");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EvaluateArticleModule {
}
EvaluateArticleModule.ɵfac = function EvaluateArticleModule_Factory(t) { return new (t || EvaluateArticleModule)(); };
EvaluateArticleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EvaluateArticleModule });
EvaluateArticleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _evaluate_article_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluateArticleRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EvaluateArticleModule, { declarations: [_evaluate_article_component__WEBPACK_IMPORTED_MODULE_2__["EvaluateArticleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _evaluate_article_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluateArticleRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ }),

/***/ "gnpU":
/*!*********************************************************!*\
  !*** ./src/app/core/services/evaluate-paper.service.ts ***!
  \*********************************************************/
/*! exports provided: EvaluatePaperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatePaperService", function() { return EvaluatePaperService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EvaluatePaperService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
    }
    enviarEvaluacion(ev) {
        return this.httpClient.put(this.apiURL + 'articulos/enviar-evaluacion/', ev);
    }
    getPaperEval() {
        return this.httpClient.get(this.apiURL + 'articulos/consulta-evaluaciones/');
    }
    editarEvaluacion(ev) {
        return this.httpClient.put(this.apiURL + 'articulos/editar-evaluacion/?idArticulo=' + ev.idArticulo, ev.evaluacion);
    }
    getEvaluaciones(idArticulo) {
        return this.httpClient.get(this.apiURL + 'articulos/consultaDetalleEvaluacion/?idArticulo=' + idArticulo);
    }
    getTest(idArticulo) {
        return this.httpClient.get(this.apiURL + 'articulos/consulta-evaluacion/?idArticulo=' + idArticulo);
    }
}
EvaluatePaperService.ɵfac = function EvaluatePaperService_Factory(t) { return new (t || EvaluatePaperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EvaluatePaperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvaluatePaperService, factory: EvaluatePaperService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=pages-evaluate-article-evaluate-article-module.js.map