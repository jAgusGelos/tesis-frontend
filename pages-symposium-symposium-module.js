(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-symposium-symposium-module"],{

/***/ "JFss":
/*!*************************************************************!*\
  !*** ./src/app/pages/symposium/symposium-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SymposiumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymposiumRoutingModule", function() { return SymposiumRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _symposium_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symposium.component */ "Jd/R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _symposium_component__WEBPACK_IMPORTED_MODULE_1__["SymposiumComponent"]
    }
];
class SymposiumRoutingModule {
}
SymposiumRoutingModule.ɵfac = function SymposiumRoutingModule_Factory(t) { return new (t || SymposiumRoutingModule)(); };
SymposiumRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SymposiumRoutingModule });
SymposiumRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SymposiumRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Jd/R":
/*!********************************************************!*\
  !*** ./src/app/pages/symposium/symposium.component.ts ***!
  \********************************************************/
/*! exports provided: SymposiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymposiumComponent", function() { return SymposiumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_symposium_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/symposium.service */ "xFu8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_symposium_list_symposium_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/symposium-list/symposium-list.component */ "9hzb");
/* harmony import */ var _core_components_symposium_form_symposium_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/symposium-form/symposium-form.component */ "1Ivb");






function SymposiumComponent_app_symposium_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-symposium-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newSymposiumEvent", function SymposiumComponent_app_symposium_list_1_Template_app_symposium_list_newSymposiumEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newSymposium(); })("editSymposiumEvent", function SymposiumComponent_app_symposium_list_1_Template_app_symposium_list_editSymposiumEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editSymposium($event); })("deleteSymposiumEvent", function SymposiumComponent_app_symposium_list_1_Template_app_symposium_list_deleteSymposiumEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteSymposium($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symposiumList", ctx_r0.symposiumList);
} }
function SymposiumComponent_app_symposium_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-symposium-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("symposiumEmitter", function SymposiumComponent_app_symposium_form_2_Template_app_symposium_form_symposiumEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleCreateSymposium($event); })("cancelSymposium", function SymposiumComponent_app_symposium_form_2_Template_app_symposium_form_cancelSymposium_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.newSymposium(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symposium", ctx_r1.symposium);
} }
class SymposiumComponent {
    constructor(symposiumService, router) {
        this.symposiumService = symposiumService;
        this.router = router;
        this.edit = false;
        this.ok = false;
        this.symposium = {};
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getSymposium();
    }
    getSymposium() {
        this.symposiumService.getSymposium().subscribe((res) => {
            this.symposiumList = res.data;
            this.ok = true;
        });
    }
    newSymposium() {
        this.edit = !this.edit;
        this.symposium = {};
    }
    editSymposium(symposium) {
        this.edit = !this.edit;
        this.symposium = symposium;
    }
    deleteSymposium(item) {
        this.symposiumService.deleteSymposium(item).subscribe((res) => {
            alert('El Simposio ha sido eliminado correctamente');
            this.router.navigateByUrl('/simposios');
        });
    }
    /**
     * @param item
     * Recibe un simposio, chequea que tenga un id.
     * Si lo tiene hace un PUT al back. Actualiza un simposio creado.
     * Si no lo tiene crea un nuevo simposio.
     */
    toggleCreateSymposium(item) {
        console.log(item.id);
        if (item.id === undefined) {
            this.symposiumService.postSymposium(item).subscribe((res) => {
                alert('Simposio Creado Correctamente');
                this.router.navigateByUrl('/simposios');
            });
        }
        else {
            this.symposiumService.putSymposium(item).subscribe((res) => {
                alert('Simposio Modificado Correctamente');
                this.router.navigateByUrl('/simposios');
            });
        }
        this.getSymposium();
    }
}
SymposiumComponent.ɵfac = function SymposiumComponent_Factory(t) { return new (t || SymposiumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_symposium_service__WEBPACK_IMPORTED_MODULE_1__["SymposiumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SymposiumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymposiumComponent, selectors: [["app-symposium"]], decls: 3, vars: 2, consts: [[1, "container-fluid"], [3, "symposiumList", "newSymposiumEvent", "editSymposiumEvent", "deleteSymposiumEvent", 4, "ngIf"], [3, "symposium", "symposiumEmitter", "cancelSymposium", 4, "ngIf"], [3, "symposiumList", "newSymposiumEvent", "editSymposiumEvent", "deleteSymposiumEvent"], [3, "symposium", "symposiumEmitter", "cancelSymposium"]], template: function SymposiumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SymposiumComponent_app_symposium_list_1_Template, 1, 1, "app-symposium-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SymposiumComponent_app_symposium_form_2_Template, 1, 1, "app-symposium-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _core_components_symposium_list_symposium_list_component__WEBPACK_IMPORTED_MODULE_4__["SymposiumListComponent"], _core_components_symposium_form_symposium_form_component__WEBPACK_IMPORTED_MODULE_5__["SymposiumFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeW1wb3NpdW0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "iALr":
/*!*****************************************************!*\
  !*** ./src/app/pages/symposium/symposium.module.ts ***!
  \*****************************************************/
/*! exports provided: SymposiumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymposiumModule", function() { return SymposiumModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _symposium_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symposium-routing.module */ "JFss");
/* harmony import */ var _symposium_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symposium.component */ "Jd/R");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class SymposiumModule {
}
SymposiumModule.ɵfac = function SymposiumModule_Factory(t) { return new (t || SymposiumModule)(); };
SymposiumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SymposiumModule });
SymposiumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _symposium_routing_module__WEBPACK_IMPORTED_MODULE_1__["SymposiumRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SymposiumModule, { declarations: [_symposium_component__WEBPACK_IMPORTED_MODULE_2__["SymposiumComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _symposium_routing_module__WEBPACK_IMPORTED_MODULE_1__["SymposiumRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-symposium-symposium-module.js.map