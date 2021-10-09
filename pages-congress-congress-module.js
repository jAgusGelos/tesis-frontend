(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-congress-congress-module"],{

/***/ "2FaX":
/*!***********************************************************!*\
  !*** ./src/app/pages/congress/congress-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CongressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongressRoutingModule", function() { return CongressRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _congress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./congress.component */ "t7h5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _congress_component__WEBPACK_IMPORTED_MODULE_1__["CongressComponent"]
    }
];
class CongressRoutingModule {
}
CongressRoutingModule.ɵfac = function CongressRoutingModule_Factory(t) { return new (t || CongressRoutingModule)(); };
CongressRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CongressRoutingModule });
CongressRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CongressRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "9HYq":
/*!***************************************************!*\
  !*** ./src/app/pages/congress/congress.module.ts ***!
  \***************************************************/
/*! exports provided: CongressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongressModule", function() { return CongressModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _congress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./congress.component */ "t7h5");
/* harmony import */ var _congress_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./congress-routing.module */ "2FaX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class CongressModule {
}
CongressModule.ɵfac = function CongressModule_Factory(t) { return new (t || CongressModule)(); };
CongressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CongressModule });
CongressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _congress_routing_module__WEBPACK_IMPORTED_MODULE_4__["CongressRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CongressModule, { declarations: [_congress_component__WEBPACK_IMPORTED_MODULE_3__["CongressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _congress_routing_module__WEBPACK_IMPORTED_MODULE_4__["CongressRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "t7h5":
/*!******************************************************!*\
  !*** ./src/app/pages/congress/congress.component.ts ***!
  \******************************************************/
/*! exports provided: CongressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongressComponent", function() { return CongressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_congress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/congress.service */ "VRfU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_congress_list_congress_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/congress-list/congress-list.component */ "8nnJ");
/* harmony import */ var _core_components_congress_form_congress_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/congress-form/congress-form.component */ "RCgH");






function CongressComponent_app_congress_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-congress-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newCongressEvent", function CongressComponent_app_congress_list_1_Template_app_congress_list_newCongressEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newCongress(); })("editCongressEvent", function CongressComponent_app_congress_list_1_Template_app_congress_list_editCongressEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editCongress($event); })("deleteCongressEvent", function CongressComponent_app_congress_list_1_Template_app_congress_list_deleteCongressEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteCongress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("congressList", ctx_r0.congressList);
} }
function CongressComponent_app_congress_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-congress-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("congressEmitter", function CongressComponent_app_congress_form_2_Template_app_congress_form_congressEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleCreateCongress($event); })("cancelCongress", function CongressComponent_app_congress_form_2_Template_app_congress_form_cancelCongress_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newCongress(); })("editCongress", function CongressComponent_app_congress_form_2_Template_app_congress_form_editCongress_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggleEditCongress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("congress", ctx_r1.congress)("sedes", ctx_r1.sedes);
} }
class CongressComponent {
    constructor(congressService, router) {
        this.congressService = congressService;
        this.router = router;
        this.congressList = [];
        this.edit = false;
        this.congress = {};
        this.sedes = [];
        this.showComponent = 'list';
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getCongress();
        this.getSedes();
    }
    getSedes() {
        this.congressService.getSedes().subscribe((res) => {
            this.sedes = res;
        });
    }
    getCongress() {
        this.congressService.getCongress().subscribe((res) => {
            this.congressList = res.data;
            this.congressList = this.congressList.map((x) => {
                return {
                    id: x.id,
                    sede: x.sede,
                    nombre_sede: x.nombre_sede,
                    ano: x.año,
                    nombre: x.nombre,
                    chairPrincipal: x.chairPrincipal,
                    coordLocal: x.coordLocal
                };
            });
        });
    }
    newCongress() {
        this.edit = !this.edit;
        this.congress = {};
    }
    editCongress(congress) {
        this.edit = !this.edit;
        this.congress = congress;
    }
    deleteCongress(item) {
        this.congressService.deleteCongress(item).subscribe((res) => {
            alert('El congreso ha sido eliminado correctamente');
            this.router.navigateByUrl('/congreso');
        });
    }
    /**
     *
     * @param item
     * Recibe un congreso, chequea que tenga un id.
     * Si lo tiene hace un PUT al back. Actualiza un congreso creado.
     * Si no lo tiene crea un nuevo congreso.
     */
    toggleCreateCongress(item) {
        this.congressService.postCongress(item).subscribe((res) => {
            alert('Congreso Creado Correctamente');
            this.router.navigateByUrl('/congreso');
        });
    }
    toggleEditCongress(item) {
        this.congressService.putCongress(item).subscribe((res) => {
            alert('Congreso Modificado Correctamente');
            this.router.navigateByUrl('/congreso');
        });
    }
}
CongressComponent.ɵfac = function CongressComponent_Factory(t) { return new (t || CongressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_congress_service__WEBPACK_IMPORTED_MODULE_1__["CongressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CongressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CongressComponent, selectors: [["app-congress"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], [3, "congressList", "newCongressEvent", "editCongressEvent", "deleteCongressEvent", 4, "ngIf"], [3, "congress", "sedes", "congressEmitter", "cancelCongress", "editCongress", 4, "ngIf"], [3, "congressList", "newCongressEvent", "editCongressEvent", "deleteCongressEvent"], [3, "congress", "sedes", "congressEmitter", "cancelCongress", "editCongress"]], template: function CongressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CongressComponent_app_congress_list_1_Template, 1, 1, "app-congress-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CongressComponent_app_congress_form_2_Template, 1, 2, "app-congress-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _core_components_congress_list_congress_list_component__WEBPACK_IMPORTED_MODULE_4__["CongressListComponent"], _core_components_congress_form_congress_form_component__WEBPACK_IMPORTED_MODULE_5__["CongressFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25ncmVzcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-congress-congress-module.js.map