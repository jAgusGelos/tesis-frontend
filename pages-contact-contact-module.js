(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "14/Y":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-routing.module */ "qpdT");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "XEn3");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ContactModule {
}
ContactModule.ɵfac = function ContactModule_Factory(t) { return new (t || ContactModule)(); };
ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ContactModule });
ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContactModule, { declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _contact_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactRoutingModule"]] }); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 28, vars: 0, consts: [[1, "container-fluid", "justify-content-center", "back"], [1, "contacto"], [1, "contenidos"], [1, "text-center"], [1, "row", "g-0", "justify-content-center"], [1, "col-auto", "map"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4814.032026291128!2d-64.19445278692635!3d-31.44071189672358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2f63bd47aa7%3A0xd84b77324dd71bc8!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20%E2%80%93%20Facultad%20Regional%20C%C3%B3rdoba%20(U.T.N.%20%E2%80%93%20F.R.C.)%20%5BCiudad%20Universitaria%5D!5e0!3m2!1ses!2sar!4v1631318413494!5m2!1ses!2sar", "width", "400", "height", "300", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "col-auto", "info"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "fa", "fa-map-marker", "fa-lg"], [1, "fa", "fa-envelope", "fa-lg"], [1, "fa", "fa-phone", "fa-lg"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Universidad Tecnol\u00F3gica Nacional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Facultad Regional C\u00F3rdoba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0\u00A0Maestro Marcelo L\u00F3pez esq, Cruz Roja - C\u00F3rdoba, C\u00F3rdoba, Argentina ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0\u00A0UTN.FRC.Congressity@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u00A0\u00A0Tel\u00E9fono: +54 351 5986000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%]{\n    background-color: #F4F4F4;\n  \n  }\n.contacto[_ngcontent-%COMP%]{\n    background-color: #f8f8f8;\n    border-radius: 2rem;\n}\n.contenidos[_ngcontent-%COMP%]{\n    padding-bottom: 3rem;\n  }\n.greyned[_ngcontent-%COMP%]{\n    color: grey;\n  }\ni[_ngcontent-%COMP%]{\n    padding-top: 1rem;\n    font: normal;\n  }\nhr[_ngcontent-%COMP%]{\n    border:#00609C solid 1px;\n  }\n@media (min-width: 768px) {\n    hr[_ngcontent-%COMP%]{\n        margin-left: 40%;\n        margin-right: 40%;\n    \n      }\n    .container-fluid[_ngcontent-%COMP%]{\n      padding: 2rem;\n    }\n  \n   }\n.col[_ngcontent-%COMP%]{\n    margin-left: .5rem;\n    margin-right: .5rem;\n}\n.map[_ngcontent-%COMP%]{\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n}\n.info[_ngcontent-%COMP%]{\n    margin-left: 0rem;\n    margin-right: 0rem;\n}\n.fa[_ngcontent-%COMP%]{\n  color: #126e82;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5Qjs7RUFFM0I7QUFDRjtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtFQUN0QjtBQUVGO0lBQ0ksV0FBVztFQUNiO0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkO0FBSUY7SUFDSSx3QkFBd0I7RUFDMUI7QUFHRjtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjs7TUFFbkI7SUFDRjtNQUNFLGFBQWE7SUFDZjs7R0FFRDtBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XG4gIFxuICB9XG4uY29udGFjdG97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuLmNvbnRlbmlkb3N7XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIH1cblxuLmdyZXluZWR7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgXG5pe1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIGZvbnQ6IG5vcm1hbDtcbiAgfVxuXG4gIFxuICBcbmhye1xuICAgIGJvcmRlcjojMDA2MDlDIHNvbGlkIDFweDtcbiAgfVxuICBcbiAgXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBocntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MCU7XG4gICAgXG4gICAgICB9XG4gICAgLmNvbnRhaW5lci1mbHVpZHtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgfVxuICBcbiAgIH1cbiAgXG4uY29se1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xufVxuLm1hcHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmluZm97XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xufVxuLmZhe1xuICBjb2xvcjogIzEyNmU4Mjtcbn0iXX0= */"] });


/***/ }),

/***/ "qpdT":
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ "XEn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]
    }
];
class ContactRoutingModule {
}
ContactRoutingModule.ɵfac = function ContactRoutingModule_Factory(t) { return new (t || ContactRoutingModule)(); };
ContactRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactRoutingModule });
ContactRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module.js.map