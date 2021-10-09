(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "5zbU":
/*!*****************************************************!*\
  !*** ./src/app/core/services/evaluation.service.ts ***!
  \*****************************************************/
/*! exports provided: EvaluationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationService", function() { return EvaluationService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "7dP1");




class EvaluationService {
    constructor(httpClient, auth) {
        this.httpClient = httpClient;
        this.auth = auth;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
        this.idCongreso = this.auth.getCongressId();
    }
    postEvaluation(evaluation) {
        const postItem = {
            idCongreso: this.idCongreso,
            nombre: evaluation.pregunta
        };
        return this.httpClient.post(this.apiURL + 'articulos/altaItemEvaluacion/', postItem);
    }
    getEvaluation(activos) {
        return this.httpClient.get(this.apiURL + 'articulos/getItemsEvaluacion/?activos=' + activos);
    }
    putEvaluation(evaluation) {
        const postItem = {
            id: evaluation.id,
            idCongreso: this.idCongreso,
            nombre: evaluation.pregunta
        };
        return this.httpClient.put(this.apiURL + 'articulos/editarItemEvaluacion/', postItem);
    }
    deleteEvaluation(evaluation) {
        return this.httpClient.delete(this.apiURL + 'articulos/eliminarItemEvaluacion/?idItem=' + evaluation.id);
    }
    getItemsEvaluacion() {
        return this.httpClient.get(this.apiURL + 'articulos/getItemsEvaluacion/');
    }
}
EvaluationService.ɵfac = function EvaluationService_Factory(t) { return new (t || EvaluationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
EvaluationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EvaluationService, factory: EvaluationService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map