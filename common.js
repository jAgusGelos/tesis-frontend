(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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

/***/ "WPk3":
/*!**************************************************!*\
  !*** ./src/app/core/services/tarifas.service.ts ***!
  \**************************************************/
/*! exports provided: TarifasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarifasService", function() { return TarifasService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _congress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./congress.service */ "VRfU");




class TarifasService {
    constructor(httpClient, congressService) {
        this.httpClient = httpClient;
        this.congressService = congressService;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
        this.idCongreso = this.congressService.idCongreso;
    }
    getTarifas() {
        return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifas/?idCongreso= ' + this.idCongreso.toString());
    }
    getTarifaById(idTarifa) {
        return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifa/?idCongreso= ' + this.idCongreso.toString() + '&idTarifa=' + idTarifa);
    }
    getTarifasActivas() {
        return this.httpClient.get(this.apiURL + 'inscripciones/devolver-tarifas-activas/?idCongreso= ' + this.idCongreso.toString());
    }
    postTarifa(tarifa) {
        return this.httpClient.post(this.apiURL + 'inscripciones/crear-tarifa/', tarifa);
    }
    putTarifa(tarifa) {
        return this.httpClient.put(this.apiURL + 'inscripciones/editar-tarifa/?id=' + tarifa.id, tarifa);
    }
    deleteTarifa(id) {
        return this.httpClient.delete(this.apiURL + 'inscripciones/eliminar-tarifa/?id=' + id);
    }
}
TarifasService.ɵfac = function TarifasService_Factory(t) { return new (t || TarifasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_congress_service__WEBPACK_IMPORTED_MODULE_3__["CongressService"])); };
TarifasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TarifasService, factory: TarifasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "by3J":
/*!*******************************************************!*\
  !*** ./src/app/core/services/inscriptions.service.ts ***!
  \*******************************************************/
/*! exports provided: InscriptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionsService", function() { return InscriptionsService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class InscriptionsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
    }
    generatePreference(item) {
        const postItem = {
            idInscripcion: +item
        };
        return this.httpClient.post(this.apiURL + 'inscripciones/create-preference/', postItem);
    }
    paymentSuccess(token) {
        return this.httpClient.get(this.apiURL + 'inscripciones/pago-inscripcion-success/?token=' + token);
    }
    inscribirme(item) {
        const postItem = {
            cuponDescuento: item
        };
        return this.httpClient.post(this.apiURL + 'inscripciones/crear-inscripcion/', postItem);
    }
}
InscriptionsService.ɵfac = function InscriptionsService_Factory(t) { return new (t || InscriptionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InscriptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InscriptionsService, factory: InscriptionsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map