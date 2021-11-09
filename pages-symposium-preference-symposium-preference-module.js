(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-symposium-preference-symposium-preference-module"],{

/***/ "Oc+9":
/*!***************************************************************************!*\
  !*** ./src/app/pages/symposium-preference/symposium-preference.module.ts ***!
  \***************************************************************************/
/*! exports provided: SymposiumPreferenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymposiumPreferenceModule", function() { return SymposiumPreferenceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _symposium_preference_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symposium-preference-routing.module */ "yaxY");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _symposium_preference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symposium-preference.component */ "iZBt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SymposiumPreferenceModule {
}
SymposiumPreferenceModule.ɵfac = function SymposiumPreferenceModule_Factory(t) { return new (t || SymposiumPreferenceModule)(); };
SymposiumPreferenceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SymposiumPreferenceModule });
SymposiumPreferenceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _symposium_preference_routing_module__WEBPACK_IMPORTED_MODULE_1__["SymposiumPreferenceRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SymposiumPreferenceModule, { declarations: [_symposium_preference_component__WEBPACK_IMPORTED_MODULE_3__["SymposiumPreferenceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _symposium_preference_routing_module__WEBPACK_IMPORTED_MODULE_1__["SymposiumPreferenceRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] }); })();


/***/ }),

/***/ "iZBt":
/*!******************************************************************************!*\
  !*** ./src/app/pages/symposium-preference/symposium-preference.component.ts ***!
  \******************************************************************************/
/*! exports provided: SymposiumPreferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymposiumPreferenceComponent", function() { return SymposiumPreferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_symposium_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/symposium.service */ "xFu8");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SymposiumPreferenceComponent_table_13_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymposiumPreferenceComponent_table_13_tr_10_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const s_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.asignarSimposioEvaluador(s_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3.descripcion);
} }
function SymposiumPreferenceComponent_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SymposiumPreferenceComponent_table_13_tr_10_Template, 8, 2, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.symposiumList);
} }
function SymposiumPreferenceComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SymposiumPreferenceComponent_tr_27_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const s_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.eliminarSimposioEvaluador(s_r7, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r7.descripcion);
} }
class SymposiumPreferenceComponent {
    constructor(symposiumService, toastr) {
        this.symposiumService = symposiumService;
        this.toastr = toastr;
        this.description = 'Aquí puede elegir los simposios de su preferencia. Estos serán tenidos en cuenta al momento de que se le asigne artículos para evaluar.';
        this.symposiumList = [];
        this.mySymposiums = [];
        this.ready = false;
    }
    ngOnInit() {
        this.getSimposios();
    }
    getSimposios() {
        this.symposiumService.getSymposium().subscribe((res) => {
            this.symposiumList = res.data;
            this.getSimposiosEvaluador();
        });
    }
    getSimposiosEvaluador() {
        let data = [];
        this.symposiumService.getEvaluatorSymposium().subscribe((res) => {
            data = res.data;
            this.mySymposiums = data.map((x) => {
                return {
                    id: x.idSimposio,
                    nombre: x.nombreSimposio,
                    descripcion: x.descripcionSimposio
                };
            });
            this.excluirPreferencias();
        });
    }
    asignarSimposioEvaluador(simposio, index) {
        const data = { simposios: simposio.id.toString() };
        this.symposiumService.postEvaluatorSymposium(data).subscribe((res) => {
            this.mySymposiums.push(simposio);
            this.symposiumList.splice(index, 1);
            this.toastr.success('Simposio agregado!');
        });
    }
    eliminarSimposioEvaluador(simposio, index) {
        this.symposiumService.deleteEvaluatorSymposium(simposio).subscribe((res) => {
            this.mySymposiums.splice(index, 1);
            this.symposiumList.push(simposio);
            this.toastr.success('Simposio Eliminado!');
        });
    }
    excluirPreferencias() {
        const aux = [];
        console.log(this.symposiumList);
        console.log(this.mySymposiums);
        const ids = this.mySymposiums.map((x) => x.id);
        this.symposiumList = this.symposiumList.filter((x) => {
            if (!ids.includes(x.id)) {
                return x;
            }
        });
        console.log(this.symposiumList);
        this.ready = true;
    }
}
SymposiumPreferenceComponent.ɵfac = function SymposiumPreferenceComponent_Factory(t) { return new (t || SymposiumPreferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_symposium_service__WEBPACK_IMPORTED_MODULE_1__["SymposiumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
SymposiumPreferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymposiumPreferenceComponent, selectors: [["app-symposium-preference"]], decls: 29, vars: 3, consts: [[1, "container-fluid"], [1, "contenidos"], [1, "text-center"], [1, "container"], [1, "row"], [1, "row", "justify-content-md-center"], [1, "col", "col-md-6"], ["class", "table text-center table-hover table-bordered", 4, "ngIf"], [1, "table", "text-center", "table-hover", "table-bordered"], [1, "thead"], [1, "col-md-2"], [1, "col-md-3"], [1, "col-md-1"], ["class", "align-items-center", 4, "ngFor", "ngForOf"], [1, "align-items-center"], ["title", "Agregar", "role", "button", 3, "click"], [1, "fas", "fa-plus", "fa-lg"], ["title", "Eliminar", "role", "button", 3, "click"], [1, "fas", "fa-trash", "fa-lg"]], template: function SymposiumPreferenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preferencia de Simposios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Todos los Simposios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SymposiumPreferenceComponent_table_13_Template, 11, 1, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mis Simposios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SymposiumPreferenceComponent_tr_27_Template, 8, 2, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ready);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mySymposiums);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n    background-color: #F4F4F4;\n}\n  \n.contenidos[_ngcontent-%COMP%]{\npadding-bottom: 3rem;\n}\n  \n.thead[_ngcontent-%COMP%]{\nbackground-color: #C8E5F1;\n}\n  \n.row[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n}\n  \n.fas[_ngcontent-%COMP%]{\ncolor: #3CAFE0;\n}\n  \n.fas[_ngcontent-%COMP%]:hover{\ncolor: #3994bb;\ncursor: pointer;\n}\n  \nhr[_ngcontent-%COMP%]{\nborder:#00609C solid 1px;\n}\n  \n@media (min-width: 768px) {\nhr[_ngcontent-%COMP%]{\n    margin-left: 25%;\n    margin-right: 25%;\n\n}\n\n.container-fluid[_ngcontent-%COMP%]{\n    padding: 5rem;\n}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bXBvc2l1bS1wcmVmZXJlbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsZUFBZTtBQUNmOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQSIsImZpbGUiOiJzeW1wb3NpdW0tcHJlZmVyZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xufVxuICBcbi5jb250ZW5pZG9ze1xucGFkZGluZy1ib3R0b206IDNyZW07XG59XG5cbi50aGVhZHtcbmJhY2tncm91bmQtY29sb3I6ICNDOEU1RjE7XG59XG4ucm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZmFze1xuY29sb3I6ICMzQ0FGRTA7XG59XG5cbi5mYXM6aG92ZXJ7XG5jb2xvcjogIzM5OTRiYjtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuaHJ7XG5ib3JkZXI6IzAwNjA5QyBzb2xpZCAxcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuaHJ7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcblxufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmc6IDVyZW07XG59XG59XG4gIFxuICAiXX0= */"] });


/***/ }),

/***/ "yaxY":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/symposium-preference/symposium-preference-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SymposiumPreferenceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymposiumPreferenceRoutingModule", function() { return SymposiumPreferenceRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _symposium_preference_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symposium-preference.component */ "iZBt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _symposium_preference_component__WEBPACK_IMPORTED_MODULE_1__["SymposiumPreferenceComponent"]
    }];
class SymposiumPreferenceRoutingModule {
}
SymposiumPreferenceRoutingModule.ɵfac = function SymposiumPreferenceRoutingModule_Factory(t) { return new (t || SymposiumPreferenceRoutingModule)(); };
SymposiumPreferenceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SymposiumPreferenceRoutingModule });
SymposiumPreferenceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SymposiumPreferenceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-symposium-preference-symposium-preference-module.js.map