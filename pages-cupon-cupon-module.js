(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cupon-cupon-module"],{

/***/ "Ndz+":
/*!*****************************************************!*\
  !*** ./src/app/pages/cupon/cupon-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CuponRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponRoutingModule", function() { return CuponRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cupon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cupon.component */ "p9K1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _cupon_component__WEBPACK_IMPORTED_MODULE_1__["CuponComponent"]
    }];
class CuponRoutingModule {
}
CuponRoutingModule.ɵfac = function CuponRoutingModule_Factory(t) { return new (t || CuponRoutingModule)(); };
CuponRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CuponRoutingModule });
CuponRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CuponRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "h87z":
/*!************************************************!*\
  !*** ./src/app/core/services/cupon.service.ts ***!
  \************************************************/
/*! exports provided: CuponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponService", function() { return CuponService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CuponService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
    }
    getCupones() {
        return this.httpClient.get(this.apiURL + 'inscripciones/lista-cuponesDescuento/');
    }
    getCuponByCodigo(codigo) {
        return this.httpClient.get(this.apiURL + 'inscripciones/devolver-cuponDescuento/?codigoCupon=' + codigo);
    }
    postCupon(cupon) {
        return this.httpClient.post(this.apiURL + 'inscripciones/crear-cuponDescuento/', cupon);
    }
    putCupon(cupon) {
        return this.httpClient.put(this.apiURL + 'inscripciones/editar-cuponDescuento/?codigoCupon=' + cupon.codigo, cupon);
    }
    deleteCupon(cupon) {
        return this.httpClient.delete(this.apiURL + 'inscripciones/eliminar-cuponDescuento/?codigoCupon=' + cupon.codigo);
    }
    verifyCupon(codigo) {
        return this.httpClient.get(this.apiURL + 'inscripciones/verificar-cuponDescuento/?cuponDescuento=' + codigo);
    }
    validateCode(codigo) {
        return this.httpClient.get(this.apiURL + 'inscripciones/verificar-codigoCupon/?cuponDescuento=' + codigo);
    }
}
CuponService.ɵfac = function CuponService_Factory(t) { return new (t || CuponService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CuponService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CuponService, factory: CuponService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "p9K1":
/*!************************************************!*\
  !*** ./src/app/pages/cupon/cupon.component.ts ***!
  \************************************************/
/*! exports provided: CuponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponComponent", function() { return CuponComponent; });
/* harmony import */ var src_app_core_components_custom_toast_custom_toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/components/custom-toast/custom-toast.component */ "KaZm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_cupon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/cupon.service */ "h87z");
/* harmony import */ var src_app_core_services_tarifas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/tarifas.service */ "WPk3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_cupon_list_cupon_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/cupon-list/cupon-list.component */ "svAf");
/* harmony import */ var _core_components_cupon_form_cupon_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/components/cupon-form/cupon-form.component */ "TpcR");








function CuponComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-cupon-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("crearCuponEvent", function CuponComponent_div_1_Template_app_cupon_list_crearCuponEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.newCupon($event); })("editarCuponEvent", function CuponComponent_div_1_Template_app_cupon_list_editarCuponEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.editCupon($event); })("eliminarCuponEvent", function CuponComponent_div_1_Template_app_cupon_list_eliminarCuponEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deleteCupon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cuponList", ctx_r0.cuponList);
} }
function CuponComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-cupon-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newCuponEvent", function CuponComponent_div_2_Template_app_cupon_form_newCuponEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.postCupon($event); })("editCuponEvent", function CuponComponent_div_2_Template_app_cupon_form_editCuponEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.putCupon($event); })("validarCodigoCuponEvent", function CuponComponent_div_2_Template_app_cupon_form_validarCodigoCuponEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.validarCodigoCupon($event); })("cancelEvent", function CuponComponent_div_2_Template_app_cupon_form_cancelEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.toggleEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("new", ctx_r1.new)("cupon", ctx_r1.cupon)("tarifaList", ctx_r1.tarifaList)("selectedTarifa", ctx_r1.selectedTarifa)("codeValidation", ctx_r1.codeValidation);
} }
class CuponComponent {
    constructor(cuponService, tarifaService, toastr) {
        this.cuponService = cuponService;
        this.tarifaService = tarifaService;
        this.toastr = toastr;
        this.edit = false;
        this.new = false;
        this.message = { header: '', body: '' };
        this.tarifaList = [];
        this.codeValidation = '';
    }
    ngOnInit() {
        this.getCupones();
    }
    getCupones() {
        this.cuponList = [];
        this.cuponService.getCupones().subscribe((res) => {
            this.cuponList = res.data;
        });
    }
    postCupon(item) {
        this.cuponService.postCupon(item).subscribe((res) => {
            this.getCupones();
            this.toggleEdit();
        });
    }
    putCupon(item) {
        this.cuponService.putCupon(item).subscribe((res) => {
            this.getCupones();
            this.toggleEdit();
        });
    }
    deleteCupon(cupon) {
        this.toastr.show('¿Seguro que deseas borrar el cupón ' + cupon.codigo + '?', 'Borrar Cupón', {
            toastComponent: src_app_core_components_custom_toast_custom_toast_component__WEBPACK_IMPORTED_MODULE_0__["CustomToastComponent"],
            disableTimeOut: true,
            tapToDismiss: false,
            enableHtml: true
        })
            .onAction.subscribe(() => {
            this.cuponService.deleteCupon(cupon).subscribe((res) => {
                this.getCupones();
            });
        });
    }
    verificarCupon(codigo) {
        this.cuponService.verifyCupon(codigo).subscribe((res) => {
        });
    }
    validarCodigoCupon(codigo) {
        this.cuponService.validateCode(codigo).subscribe(res => {
            this.toastr.success('Código válido.');
            this.codeValidation = res.status;
        }, err => {
            this.toastr.warning('El código ya existe.');
            this.codeValidation = err.status;
        });
    }
    getTarifas() {
        this.tarifaList = [];
        this.tarifaService.getTarifas().subscribe((res) => {
            this.tarifaList = res.data;
        });
    }
    newCupon() {
        this.cupon = {
            codigo: '',
            idTarifa: '',
            nombreTarifa: '',
            porcentajeDesc: 0,
            usosRestantes: 0
        };
        this.getTarifas();
        this.selectedTarifa = {
            id: '0',
            idCongreso: '0',
            nombre: '',
            precio: 0,
            fechaDesde: '',
            fechaHasta: ''
        };
        this.new = true;
        this.toggleEdit();
    }
    editCupon(item) {
        this.cupon = item;
        this.getTarifas();
        this.new = false;
        this.toggleEdit();
    }
    toggleEdit() {
        this.edit = !this.edit;
    }
}
CuponComponent.ɵfac = function CuponComponent_Factory(t) { return new (t || CuponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_cupon_service__WEBPACK_IMPORTED_MODULE_2__["CuponService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_tarifas_service__WEBPACK_IMPORTED_MODULE_3__["TarifasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
CuponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CuponComponent, selectors: [["app-cupon"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], [4, "ngIf"], [3, "cuponList", "crearCuponEvent", "editarCuponEvent", "eliminarCuponEvent"], [3, "new", "cupon", "tarifaList", "selectedTarifa", "codeValidation", "newCuponEvent", "editCuponEvent", "validarCodigoCuponEvent", "cancelEvent"]], template: function CuponComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CuponComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CuponComponent_div_2_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _core_components_cupon_list_cupon_list_component__WEBPACK_IMPORTED_MODULE_6__["CuponListComponent"], _core_components_cupon_form_cupon_form_component__WEBPACK_IMPORTED_MODULE_7__["CuponFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXBvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "uySA":
/*!*********************************************!*\
  !*** ./src/app/pages/cupon/cupon.module.ts ***!
  \*********************************************/
/*! exports provided: CuponModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuponModule", function() { return CuponModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cupon_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cupon-routing.module */ "Ndz+");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _cupon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cupon.component */ "p9K1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CuponModule {
}
CuponModule.ɵfac = function CuponModule_Factory(t) { return new (t || CuponModule)(); };
CuponModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CuponModule });
CuponModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _cupon_routing_module__WEBPACK_IMPORTED_MODULE_1__["CuponRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CuponModule, { declarations: [_cupon_component__WEBPACK_IMPORTED_MODULE_3__["CuponComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _cupon_routing_module__WEBPACK_IMPORTED_MODULE_1__["CuponRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-cupon-cupon-module.js.map