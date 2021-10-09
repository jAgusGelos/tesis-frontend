(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-evaluator-evaluator-module"],{

/***/ "4aEt":
/*!*****************************************************!*\
  !*** ./src/app/pages/evaluator/evaluator.module.ts ***!
  \*****************************************************/
/*! exports provided: EvaluatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorModule", function() { return EvaluatorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _evaluator_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluator-routing.module */ "yLyo");
/* harmony import */ var _evaluator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evaluator.component */ "XJKb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EvaluatorModule {
}
EvaluatorModule.ɵfac = function EvaluatorModule_Factory(t) { return new (t || EvaluatorModule)(); };
EvaluatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EvaluatorModule });
EvaluatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _evaluator_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluatorRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EvaluatorModule, { declarations: [_evaluator_component__WEBPACK_IMPORTED_MODULE_2__["EvaluatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _evaluator_routing_module__WEBPACK_IMPORTED_MODULE_1__["EvaluatorRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "XJKb":
/*!********************************************************!*\
  !*** ./src/app/pages/evaluator/evaluator.component.ts ***!
  \********************************************************/
/*! exports provided: EvaluatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorComponent", function() { return EvaluatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_evaluator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/evaluator.service */ "y6im");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function EvaluatorComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatorComponent_tr_17_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.addEvaluator(item_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r2.nombreEv, " ", item_r2.apellidoEv, "");
} }
function EvaluatorComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatorComponent_tr_29_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleRemoveHandled(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r5.nombreEv, " ", item_r5.apellidoEv, "");
} }
class EvaluatorComponent {
    constructor(evaluatorService) {
        this.evaluatorService = evaluatorService;
        this.evaluatorList = [];
        this.evaluatorSelectedList = [];
        this.adding = false;
        this.evaluatorSelectedId = [];
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getEvaluatorSelected();
        this.getEvaluators();
    }
    getEvaluators() {
        this.evaluatorService.getEvaluatorsSimposio().subscribe((res) => {
            if (res.data.length === 0) {
                alert('Lo sentimos, actualmente no disponemos de más evaluadores.');
                return;
            }
            this.evaluatorList = res.data.filter((x) => {
                if (!this.evaluatorSelectedId.includes(x.idEvaluador)) {
                    return x;
                }
            });
        });
    }
    getEvaluatorSelected() {
        this.evaluatorService.getEvaluatorsGroup().subscribe((res) => {
            this.evaluatorSelectedList = res.data;
            this.evaluatorSelectedId = res.data.map((x) => x.idEvaluador);
        });
    }
    addEvaluator(item) {
        this.evaluatorService.postEvaluatorGroup(item.idEvaluador).subscribe((res) => {
            this.evaluatorList = this.evaluatorList.filter((x) => {
                if (!(x.idEvaluador === item.idEvaluador)) {
                    return x;
                }
            });
            this.evaluatorSelectedList.push(item);
        });
    }
    loadAll() {
        if (confirm('Atención, los evaluadores que está por cagar no pertenecen a su simposio. ¿Desea hacerlo de todas formas?')) {
            this.evaluatorService.getEvaluatorsAll().subscribe((res) => {
                this.evaluatorList = res.data.filter((x) => {
                    if (!this.evaluatorSelectedId.includes(x.idEvaluador)) {
                        return x;
                    }
                });
            });
        }
    }
    toggleRemoveHandled(item) {
        if (confirm('Esta seguro desea eliminar el Evaluador: ' +
            item.nombreEv + ' ' + item.apellidoEv +
            '\nToda la configuración creada se perderá')) {
            this.evaluatorService.deleteEvaluatorGroup(item.idEvaluador).subscribe((res) => {
                this.evaluatorList.push(item);
                this.evaluatorSelectedList = this.evaluatorSelectedList.filter((x) => {
                    if (x.idEvaluador !== item.idEvaluador) {
                        return item;
                    }
                });
            });
        }
    }
}
EvaluatorComponent.ɵfac = function EvaluatorComponent_Factory(t) { return new (t || EvaluatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_evaluator_service__WEBPACK_IMPORTED_MODULE_1__["EvaluatorService"])); };
EvaluatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EvaluatorComponent, selectors: [["app-evaluator"]], decls: 31, vars: 2, consts: [[1, "container-fluid"], [1, "contenidos"], [1, "text-center"], [1, "row"], [1, "col-md-6"], [1, "table", "text-center", "table-hover", "table-bordered"], [1, "thead"], [1, "col-md-4"], [1, "col-md-2"], ["class", "align-items-center", 4, "ngFor", "ngForOf"], ["role", "button", 1, "btn", "btn-primary", "btn-block", "col-md-12", "alerta", 3, "click"], [1, "align-items-center"], [1, "btn-group", "col-md-3", "text-center"], ["title", "Agregar", 3, "click"], [1, "fas", "fa-plus"], ["title", "Eliminar", 3, "click"], [1, "fas", "fa-trash"]], template: function EvaluatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Evaluadores Activos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Evaluadores Disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EvaluatorComponent_tr_17_Template, 7, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EvaluatorComponent_Template_a_click_18_listener() { return ctx.loadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A1Necesito m\u00E1s Evaluadores!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Evaluadores Seleccionados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EvaluatorComponent_tr_29_Template, 7, 2, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.evaluatorList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.evaluatorSelectedList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n  background-color: #F4F4F4;\n\n}\n\n.contenidos[_ngcontent-%COMP%]{\n  padding-bottom: 3rem;\n}\n\n.thead[_ngcontent-%COMP%]{\n  background-color: #C8E5F1;\n}\n\n.greyned[_ngcontent-%COMP%]{\n  color: grey;\n}\n\n.btn-primary[_ngcontent-%COMP%]{\n  background-color: #3CAFE0 ;\n  border: none;\n}\n\ni[_ngcontent-%COMP%]{\n  padding-top: 0.5rem;\n  cursor: pointer;\n}\n\ni[_ngcontent-%COMP%]:hover{\n  color: blue;\n}\n\n.fas[_ngcontent-%COMP%]{\n  font-size: 1.25rem;\n  color: #00609C;\n}\n\nhr[_ngcontent-%COMP%]{\n  border:#00609C solid 1px;\n}\n\n@media (min-width: 768px) {\n  hr[_ngcontent-%COMP%]{\n    margin-left: 25%;\n    margin-right: 25%;\n\n  }\n\n  .container-fluid[_ngcontent-%COMP%]{\n    padding: 5rem;\n  }\n\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCOztFQUVuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7Q0FFRCIsImZpbGUiOiJldmFsdWF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG5cbn1cblxuLmNvbnRlbmlkb3N7XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuXG4udGhlYWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEU1RjE7XG59XG5cblxuLmdyZXluZWR7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uYnRuLXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQ0FGRTAgO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbml7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaTpob3ZlcntcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5mYXN7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6ICMwMDYwOUM7XG59XG5cbmhye1xuICBib3JkZXI6IzAwNjA5QyBzb2xpZCAxcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBocntcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIG1hcmdpbi1yaWdodDogMjUlO1xuXG4gIH1cblxuICAuY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmc6IDVyZW07XG4gIH1cblxuIH1cblxuIl19 */"] });


/***/ }),

/***/ "yLyo":
/*!*************************************************************!*\
  !*** ./src/app/pages/evaluator/evaluator-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EvaluatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatorRoutingModule", function() { return EvaluatorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _evaluator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluator.component */ "XJKb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _evaluator_component__WEBPACK_IMPORTED_MODULE_1__["EvaluatorComponent"]
    }];
class EvaluatorRoutingModule {
}
EvaluatorRoutingModule.ɵfac = function EvaluatorRoutingModule_Factory(t) { return new (t || EvaluatorRoutingModule)(); };
EvaluatorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EvaluatorRoutingModule });
EvaluatorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EvaluatorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-evaluator-evaluator-module.js.map