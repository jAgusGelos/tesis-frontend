(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-room-room-module"],{

/***/ "2rvv":
/*!**********************************************!*\
  !*** ./src/app/pages/room/room.component.ts ***!
  \**********************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/room.service */ "PHhj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_components_room_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/room/room.component */ "Spu+");
/* harmony import */ var _core_components_room_form_room_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/room-form/room-form.component */ "srPL");






function RoomComponent_app_room_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-room", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newRoomEvent", function RoomComponent_app_room_0_Template_app_room_newRoomEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.newRoom(); })("editRoomEvent", function RoomComponent_app_room_0_Template_app_room_editRoomEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editRoom($event); })("deleteRoomEvent", function RoomComponent_app_room_0_Template_app_room_deleteRoomEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteRoom($event); })("goBackEvent", function RoomComponent_app_room_0_Template_app_room_goBackEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("roomList", ctx_r0.roomList);
} }
function RoomComponent_app_room_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-room-form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("roomEmitter", function RoomComponent_app_room_form_1_Template_app_room_form_roomEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleCreateRoom($event); })("cancelRoom", function RoomComponent_app_room_form_1_Template_app_room_form_cancelRoom_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.newRoom($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("room", ctx_r1.room);
} }
class RoomComponent {
    constructor(roomService, router) {
        this.roomService = roomService;
        this.router = router;
        this.roomList = [];
        this.edit = false;
        this.room = {};
        this.id = '';
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.getRooms();
    }
    getRooms() {
        this.roomService.getRooms().subscribe((res) => {
            this.roomList = res.data[0];
        });
    }
    newRoom() {
        this.edit = !this.edit;
        this.room = {};
    }
    deleteRoom(item) {
        this.roomService.deteleRoom(item).subscribe((res) => {
            alert('El aula ha sido eliminada');
            this.router.navigateByUrl('/room');
        });
    }
    editRoom(room) {
        this.edit = !this.edit;
        this.room = room;
    }
    toggleCreateRoom(item) {
        if (item.id === null) {
            this.roomService.postRoom(item).subscribe((res) => {
                alert('Aula Creada');
                this.router.navigateByUrl('/room');
            });
        }
        else {
            this.roomService.putRoom(item).subscribe((res) => {
                alert('Aula Modificada');
                this.router.navigateByUrl('/room');
            });
        }
        this.getRooms();
    }
    goBack() {
        this.router.navigate(['/misCongresos']);
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["app-room-page"]], decls: 2, vars: 2, consts: [[3, "roomList", "newRoomEvent", "editRoomEvent", "deleteRoomEvent", "goBackEvent", 4, "ngIf"], [3, "room", "roomEmitter", "cancelRoom", 4, "ngIf"], [3, "roomList", "newRoomEvent", "editRoomEvent", "deleteRoomEvent", "goBackEvent"], [3, "room", "roomEmitter", "cancelRoom"]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RoomComponent_app_room_0_Template, 1, 1, "app-room", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoomComponent_app_room_form_1_Template, 1, 1, "app-room-form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _core_components_room_room_component__WEBPACK_IMPORTED_MODULE_4__["RoomComponent"], _core_components_room_form_room_form_component__WEBPACK_IMPORTED_MODULE_5__["RoomFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "8+wY":
/*!***************************************************!*\
  !*** ./src/app/pages/room/room-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomRoutingModule", function() { return RoomRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _room_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room.component */ "2rvv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{
        path: '',
        component: _room_component__WEBPACK_IMPORTED_MODULE_1__["RoomComponent"]
    }];
class RoomRoutingModule {
}
RoomRoutingModule.ɵfac = function RoomRoutingModule_Factory(t) { return new (t || RoomRoutingModule)(); };
RoomRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RoomRoutingModule });
RoomRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RoomRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "PHhj":
/*!***********************************************!*\
  !*** ./src/app/core/services/room.service.ts ***!
  \***********************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "7dP1");




class RoomService {
    constructor(httpClient, auth) {
        this.httpClient = httpClient;
        this.auth = auth;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
        this.sede = this.auth.getSedeId();
    }
    postRoom(room) {
        const postRoom = {
            nombre: room.nombre,
            descripcion: room.descripcion,
            capacidad: room.capacidad,
            sede: this.sede
        };
        return this.httpClient.post(this.apiURL + 'congresos/crear-aula/', postRoom);
    }
    putRoom(room) {
        console.log(room);
        const postRoom = {
            id: room.id,
            nombre: room.nombre,
            descripcion: room.descripcion,
            capacidad: room.capacidad,
            sede: this.sede
        };
        return this.httpClient.put(this.apiURL + 'congresos/editar-aula/', postRoom);
    }
    getRooms() {
        return this.httpClient.get(this.apiURL + 'congresos/lista-aulas/?idSede=' + this.sede);
    }
    deteleRoom(room) {
        // return this.httpClient.delete<IRoom>(this.apiURL);
        return this.httpClient.request('delete', this.apiURL + 'congresos/eliminar-aula/', { body: { id: room.id, sede: this.sede } });
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bZre":
/*!*******************************************!*\
  !*** ./src/app/pages/room/room.module.ts ***!
  \*******************************************/
/*! exports provided: RoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomModule", function() { return RoomModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _room_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-routing.module */ "8+wY");
/* harmony import */ var _room_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room.component */ "2rvv");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class RoomModule {
}
RoomModule.ɵfac = function RoomModule_Factory(t) { return new (t || RoomModule)(); };
RoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RoomModule });
RoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _room_routing_module__WEBPACK_IMPORTED_MODULE_1__["RoomRoutingModule"],
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RoomModule, { declarations: [_room_component__WEBPACK_IMPORTED_MODULE_2__["RoomComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _room_routing_module__WEBPACK_IMPORTED_MODULE_1__["RoomRoutingModule"],
        src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-room-room-module.js.map