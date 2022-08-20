"use strict";
(self["webpackChunkoag"] = self["webpackChunkoag"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_juguete_listado_juguete_listado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/juguete-listado/juguete-listado.component */ 5505);
/* harmony import */ var _components_juguete_detalle_juguete_detalle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/juguete-detalle/juguete-detalle.component */ 7518);
/* harmony import */ var _components_juguete_catalogo_juguete_catalogo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/juguete-catalogo/juguete-catalogo.component */ 7596);
/* harmony import */ var _components_juguete_form_juguete_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/juguete-form/juguete-form.component */ 6563);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/perfil/perfil.component */ 7519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: 'listado',
        component: _components_juguete_listado_juguete_listado_component__WEBPACK_IMPORTED_MODULE_0__.JugueteListadoComponent,
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
    },
    {
        path: 'perfil',
        component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_5__.PerfilComponent,
    },
    {
        path: 'juguetes-segunda',
        component: _components_juguete_catalogo_juguete_catalogo_component__WEBPACK_IMPORTED_MODULE_2__.JugueteCatalogoComponent
    },
    {
        path: 'juguetes-amazon',
        component: _components_juguete_catalogo_juguete_catalogo_component__WEBPACK_IMPORTED_MODULE_2__.JugueteCatalogoComponent
    },
    {
        path: 'juguete/:id',
        component: _components_juguete_detalle_juguete_detalle_component__WEBPACK_IMPORTED_MODULE_1__.JugueteDetalleComponent
    },
    {
        path: 'juguete-form/:id',
        component: _components_juguete_form_juguete_form_component__WEBPACK_IMPORTED_MODULE_3__.JugueteFormComponent,
    },
    {
        path: '',
        component: _components_juguete_listado_juguete_listado_component__WEBPACK_IMPORTED_MODULE_0__.JugueteListadoComponent
    },
    {
        path: '**',
        component: _components_juguete_catalogo_juguete_catalogo_component__WEBPACK_IMPORTED_MODULE_2__.JugueteCatalogoComponent
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'JuguetesToHand';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 0, consts: [[1, "mx-auto"], [1, "nav", "nav-pills"], [1, "nav-item"], ["routerLink", "/login", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link"], [1, "nav-item", "dropdown"], ["routerLinkActive", "active", "routerLink", "/perfil", "data-bs-toggle", "dropdown", "role", "button", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLink", "/perfil", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/juguetes-amazon", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/garantias", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6)(9, "li")(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lista de deseos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Historial Pedidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Datos personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2)(21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Juguetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 2)(24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Garant\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".nav[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\nli[_ngcontent-%COMP%] {\n  padding-left: 1%;\n  padding-right: 1%;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: chartreuse;\n}\n\ndiv[_ngcontent-%COMP%] {\n  font-size: large;\n  text-align: center;\n  background-color: darkolivegreen;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  text-decoration: none;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-color: darkolivegreen;\n  border-radius: 0px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: chartreuse;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVHLHVCQUFBO0FBRkg7O0FBS0E7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBT0E7RUFFSSxxQkFBQTtFQUNBLFlBQUE7QUFMSjs7QUFRQTtFQUVJLDZCQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFXQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBVEo7O0FBYUE7RUFFSSxnQ0FBQTtFQUNBLGtCQUFBO0FBWEo7O0FBY0E7RUFFSSw2QkFBQTtFQUNBLGlCQUFBO0FBWko7O0FBa0JBO0VBRUksWUFBQTtBQWhCSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5uYXYge1xyXG5cclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmxpIHtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gICAgcGFkZGluZy1yaWdodDogMSU7XHJcblxyXG59XHJcblxyXG5hLm5hdi1saW5rIHtcclxuICAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6d2hpdGU7IFxyXG59XHJcblxyXG5hLm5hdi1saW5rLmFjdGl2ZSB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjpjaGFydHJldXNlIDtcclxuXHJcbn1cclxuXHJcblxyXG5kaXYge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrb2xpdmVncmVlbjsgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtvbGl2ZWdyZWVuIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIFxyXG59XHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7XHJcbiAgICBjb2xvcjogY2hhcnRyZXVzZTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var preboot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! preboot */ 6658);
/* harmony import */ var _components_juguete_detalle_juguete_detalle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/juguete-detalle/juguete-detalle.component */ 7518);
/* harmony import */ var _components_juguete_listado_juguete_listado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/juguete-listado/juguete-listado.component */ 5505);
/* harmony import */ var _components_juguete_catalogo_juguete_catalogo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/juguete-catalogo/juguete-catalogo.component */ 7596);
/* harmony import */ var _components_juguete_form_juguete_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/juguete-form/juguete-form.component */ 6563);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/perfil/perfil.component */ 7519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);

























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            preboot__WEBPACK_IMPORTED_MODULE_11__.PrebootModule.withConfig({ appRoot: 'app-root' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_juguete_detalle_juguete_detalle_component__WEBPACK_IMPORTED_MODULE_3__.JugueteDetalleComponent,
        _components_juguete_listado_juguete_listado_component__WEBPACK_IMPORTED_MODULE_4__.JugueteListadoComponent,
        _components_juguete_catalogo_juguete_catalogo_component__WEBPACK_IMPORTED_MODULE_5__.JugueteCatalogoComponent,
        _components_juguete_form_juguete_form_component__WEBPACK_IMPORTED_MODULE_6__.JugueteFormComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__.LoginComponent,
        _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__.PerfilComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, preboot__WEBPACK_IMPORTED_MODULE_11__.PrebootModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__.FlexLayoutModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 7596:
/*!***************************************************************************!*\
  !*** ./src/app/components/juguete-catalogo/juguete-catalogo.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JugueteCatalogoComponent": () => (/* binding */ JugueteCatalogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/juguetes.service */ 6521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 1961);







function JugueteCatalogoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/juguete/", a1]; };
function JugueteCatalogoComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "a", 8)(2, "div", 9)(3, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-title-group")(6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content")(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const juguete_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, juguete_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/", juguete_r3.path_imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", juguete_r3.nombre_juguete, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", juguete_r3.fecha_publicacion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](juguete_r3.descripcion);
} }
function JugueteCatalogoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, JugueteCatalogoComponent_div_5_div_2_Template, 15, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.juguetes);
} }
class JugueteCatalogoComponent {
    constructor(juguetesService) {
        this.juguetesService = juguetesService;
        this.loaded = false;
    }
    ngOnInit() {
        this.juguetesService.getAllJuguetes().subscribe({
            next: (juguetes) => {
                if (juguetes) {
                    this.juguetes = juguetes;
                    this.loaded = true;
                    console.log(this.juguetes);
                }
            }
        });
    }
}
JugueteCatalogoComponent.ɵfac = function JugueteCatalogoComponent_Factory(t) { return new (t || JugueteCatalogoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_0__.JuguetesService)); };
JugueteCatalogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JugueteCatalogoComponent, selectors: [["app-juguete-catalogo"]], decls: 6, vars: 2, consts: [[1, "text-center", "my-5", "fs-1"], [1, ""], [1, "content"], [4, "ngIf"], [1, "mx-auto"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%", 4, "ngFor", "ngForOf"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxFlex.sm", "33%"], [1, "text-decoration-none", 3, "routerLink"], [1, "animate__animated", "animate__pulse"], [1, "example-card"], [1, "img-fluid", "mb-4", 3, "src"]], template: function JugueteCatalogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Juguetes disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, JugueteCatalogoComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, JugueteCatalogoComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.juguetes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitleGroup, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent], styles: [".content[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1Z3VldGUtY2F0YWxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFSSxVQUFBO0VBQ0EsY0FBQTtBQUpKIiwiZmlsZSI6Imp1Z3VldGUtY2F0YWxvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbi5jb250ZW50IHtcblxuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbn0iXX0= */"] });


/***/ }),

/***/ 7518:
/*!*************************************************************************!*\
  !*** ./src/app/components/juguete-detalle/juguete-detalle.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JugueteDetalleComponent": () => (/* binding */ JugueteDetalleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/juguetes.service */ 6521);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 2379);






function JugueteDetalleComponent_div_1_mat_tab_group_13_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", categoria_r4.nombre_categoria, " ");
} }
function JugueteDetalleComponent_div_1_mat_tab_group_13_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JugueteDetalleComponent_div_1_mat_tab_group_13_div_8_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.juguete.categorias);
} }
function JugueteDetalleComponent_div_1_mat_tab_group_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tab-group")(1, "mat-tab", 10)(2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-tab", 12)(5, "p", 11)(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Categor\u00EDa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, JugueteDetalleComponent_div_1_mat_tab_group_13_div_8_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.juguete.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.juguete.categorias);
} }
function JugueteDetalleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nombre Juguete: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JugueteDetalleComponent_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showAllDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Mostrar detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, JugueteDetalleComponent_div_1_mat_tab_group_13_Template, 9, 2, "mat-tab-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.juguete.nombre_juguete, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/", ctx_r0.juguete.path_imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showDetails);
} }
class JugueteDetalleComponent {
    constructor(activatedRoute, router, juguetesService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.juguetesService = juguetesService;
        this.showDetails = false;
    }
    ngOnInit() {
        const identifier = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id') || "");
        this.juguetesService.getJugueteById(identifier).subscribe({
            next: (juguete) => {
                //PRINT
                console.log('Juguete: ', juguete);
                this.juguete = juguete;
                console.log('Categorias: ', this.juguete.categorias);
            },
            error: () => {
                return this.router.navigateByUrl('/');
            }
        });
    }
    showAllDetails() {
        this.showDetails = !this.showDetails;
    }
}
JugueteDetalleComponent.ɵfac = function JugueteDetalleComponent_Factory(t) { return new (t || JugueteDetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_0__.JuguetesService)); };
JugueteDetalleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JugueteDetalleComponent, selectors: [["app-juguete-detail"]], decls: 2, vars: 1, consts: [[1, "container", "mt-5"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-7"], [1, "my-5", "text-end"], ["routerLink", "/catalogo", 1, "btn", "btn-secondary"], [1, "img-fluid", "mb-4", 3, "src"], [1, "text-center", "my-4"], ["mat-raised-button", "", "color", "primary", 3, "click"], [4, "ngIf"], ["label", "Descripci\u00F3n juguete"], [1, "text-left", "my-3"], ["label", "Categor\u00EDa"], [4, "ngFor", "ngForOf"]], template: function JugueteDetalleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JugueteDetalleComponent_div_1_Template, 14, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.juguete);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqdWd1ZXRlLWRldGFsbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6563:
/*!*******************************************************************!*\
  !*** ./src/app/components/juguete-form/juguete-form.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JugueteFormComponent": () => (/* binding */ JugueteFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/categorias.service */ 5772);
/* harmony import */ var src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/juguetes.service */ 6521);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);









function JugueteFormComponent_form_8_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nombre juguete es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JugueteFormComponent_form_8_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " El nombre del juguete solamente puede ser de 255 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JugueteFormComponent_form_8_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JugueteFormComponent_form_8_div_5_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, JugueteFormComponent_form_8_div_5_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nombreJuguete.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nombreJuguete.errors.maxlength);
} }
function JugueteFormComponent_form_8_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Descripci\u00F3n es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JugueteFormComponent_form_8_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Descripci\u00F3n como mucho 1000 caracteres. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JugueteFormComponent_form_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JugueteFormComponent_form_8_div_10_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, JugueteFormComponent_form_8_div_10_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.descripcion.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.descripcion.errors.maxlength);
} }
function JugueteFormComponent_form_8_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Fecha publicaci\u00F3n es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JugueteFormComponent_form_8_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JugueteFormComponent_form_8_div_15_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.fechaPublicacion.errors.required);
} }
function JugueteFormComponent_form_8_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", categoria_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", categoria_r11.nombre_categoria, " ");
} }
function JugueteFormComponent_form_8_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Selecciona una imagen. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JugueteFormComponent_form_8_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JugueteFormComponent_form_8_div_25_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.imagenFile.errors.required);
} }
function JugueteFormComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function JugueteFormComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.saveJuguete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7)(2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nombre juguete:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, JugueteFormComponent_form_8_div_5_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7)(7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Descripci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, JugueteFormComponent_form_8_div_10_Template, 3, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Fecha publicaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, JugueteFormComponent_form_8_div_15_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Escoge las categorias:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, JugueteFormComponent_form_8_option_20_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Im\u00E1genes juguetes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, JugueteFormComponent_form_8_div_25_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.jugueteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.nombreJuguete);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.nombreJuguete.errors && ctx_r0.nombreJuguete.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.descripcion.errors && ctx_r0.descripcion.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.fechaPublicacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.fechaPublicacion.errors && ctx_r0.fechaPublicacion.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.categorias);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.categoriasLista);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.imagenFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.imagenFile.errors && ctx_r0.imagenFile.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.jugueteForm.invalid);
} }
class JugueteFormComponent {
    constructor(activatedRoute, formBuilder, categoriasService, juguetesService) {
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.categoriasService = categoriasService;
        this.juguetesService = juguetesService;
        this.jugueteId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id') || "");
        (this.jugueteId) ? this.isUpdateMode = true : this.isUpdateMode = false;
        this.nombreJuguete = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(255)]);
        this.descripcion = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(1000)]);
        this.fechaPublicacion = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.categorias = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([]);
        this.imagenFile = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(255)]);
        this.loadCategories();
        this.jugueteForm = this.formBuilder.group({
            nombreJuguete: this.nombreJuguete,
            descripcion: this.descripcion,
            fechaPublicacion: this.fechaPublicacion,
            categorias: this.categoriasLista,
            imagenFile: this.imagenFile
        });
    }
    ngOnInit() {
        if (this.isUpdateMode) {
            this.juguetesService.getJugueteById(this.jugueteId).subscribe({
                next: (juguete) => {
                    this.nombreJuguete.setValue(juguete.nombre_juguete);
                    this.descripcion.setValue(juguete.descripcion);
                    this.fechaPublicacion.setValue((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(juguete.fecha_publicacion, 'yyyy-MM-dd', 'en'));
                    let categoriasAux = [];
                    juguete.categorias.forEach((aux) => { categoriasAux.push(aux.id); });
                    this.categorias.setValue(categoriasAux);
                    //PRINT
                    console.log("categorias juguete: ", categoriasAux);
                    //this.imagenFile.setValue(juguete.path_imagen);
                    this.jugueteForm = this.formBuilder.group({
                        nombreJuguete: this.nombreJuguete,
                        descripcion: this.descripcion,
                        fechaPublicacion: this.fechaPublicacion,
                        categorias: this.categorias,
                        imagenFile: this.imagenFile
                    });
                }
            });
        }
    }
    loadCategories() {
        this.categoriasService.getAllCategorias().subscribe({
            next: (response) => {
                if (response) {
                    this.categoriasLista = response;
                    //PRINT
                    console.log('Todas categorias: ', this.categoriasLista);
                }
            }
        });
    }
    updateJuguete() {
        console.log("acualiza juguete");
    }
    creaJuguete() {
        console.log("crea juguete");
    }
    saveJuguete() {
        this.juguete = this.jugueteForm.value;
        //PRINT
        console.log("Juguete desde formulario: ", this.juguete);
        if (this.isUpdateMode) {
            this.updateJuguete();
        }
        else {
            this.creaJuguete();
        }
    }
}
JugueteFormComponent.ɵfac = function JugueteFormComponent_Factory(t) { return new (t || JugueteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_0__.CategoriasService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_1__.JuguetesService)); };
JugueteFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JugueteFormComponent, selectors: [["app-juguete-form"]], decls: 9, vars: 1, consts: [[2, "margin-left", "auto", "margin-right", "auto"], ["id", "postFeedback"], [1, "col-md-7", "text-center"], [1, "my-5", "text-end"], ["routerLink", "/perfil", 1, "btn", "btn-secondary"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "my-4"], ["for", "Nombre"], ["type", "text", 3, "formControl"], [3, "ngClass", 4, "ngIf"], ["for", "description"], ["for", "fechaPublicacion"], ["type", "date", 3, "formControl"], ["for", "categorias"], ["multiple", "", 3, "formControl"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "imagen"], ["type", "file", 3, "formControl"], ["type", "submit", 1, "btn", "btn-primary", "m-4", 3, "disabled"], [3, "ngClass"], [4, "ngIf"], [3, "ngValue"]], template: function JugueteFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Formulario Juguete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, JugueteFormComponent_form_8_Template, 28, 12, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jugueteForm);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectMultipleControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: [".error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#postFeedback[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-width: 250px;\n  color: #fff;\n  text-align: center;\n  border-radius: 10px;\n  padding: 16px;\n  z-index: 1;\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#postFeedback.requestOk[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n#postFeedback.requestKo[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n#postFeedback.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1Z3VldGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFVBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNFLHVCQUFBO0FBREo7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQUlFO0VBQ0UsbUJBQUE7RUFFQSx5Q0FBQTtBQURKOztBQWVFO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQUZKO0VBSUU7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUZKO0FBQ0Y7O0FBZ0JFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQUpKO0VBTUU7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQUpKO0FBQ0YiLCJmaWxlIjoianVndWV0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgI3Bvc3RGZWVkYmFjayB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgI3Bvc3RGZWVkYmFjay5yZXF1ZXN0T2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gICNwb3N0RmVlZGJhY2sucmVxdWVzdEtvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgI3Bvc3RGZWVkYmFjay5zaG93IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVpbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlb3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 5505:
/*!*************************************************************************!*\
  !*** ./src/app/components/juguete-listado/juguete-listado.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JugueteListadoComponent": () => (/* binding */ JugueteListadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/juguetes.service */ 6521);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 1961);





const _c0 = function (a1) { return ["/juguete-form/", a1]; };
function JugueteListadoComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 3)(2, "mat-card", 4)(3, "div", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JugueteListadoComponent_div_1_div_1_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const juguete_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.editar(juguete_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JugueteListadoComponent_div_1_div_1_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const juguete_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.eliminar(juguete_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const juguete_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, juguete_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../../../assets/images/", juguete_r2.path_imagen, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](juguete_r2.nombre_juguete);
} }
function JugueteListadoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JugueteListadoComponent_div_1_div_1_Template, 13, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.juguetes);
} }
class JugueteListadoComponent {
    constructor(juguetesService, router) {
        this.juguetesService = juguetesService;
        this.router = router;
        this.loaded = false;
    }
    ngOnInit() {
        this.getListaJuguetes();
    }
    getListaJuguetes() {
        this.juguetesService.getAllJuguetes().subscribe({
            next: (juguetes) => {
                if (juguetes) {
                    this.juguetes = juguetes;
                    this.loaded = true;
                    console.log(this.juguetes);
                }
            }
        });
    }
    crear() {
        this.router.navigateByUrl('/juguete-form/');
    }
    editar(idJuguete) {
        this.router.navigateByUrl('/juguete-form/' + idJuguete);
    }
    eliminar(idJuguete) {
        this.juguetesService.delete(idJuguete).subscribe({
            next: (response) => {
                if (response) {
                    this.getListaJuguetes();
                }
            }
        });
    }
}
JugueteListadoComponent.ɵfac = function JugueteListadoComponent_Factory(t) { return new (t || JugueteListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_juguetes_service__WEBPACK_IMPORTED_MODULE_0__.JuguetesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
JugueteListadoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JugueteListadoComponent, selectors: [["app-juguete-listado"]], decls: 2, vars: 1, consts: [[1, "content", "mx-5"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-decoration-none", 3, "routerLink"], [1, "example-card"], [1, "row"], ["mat-card-sm-image", "", 1, "col-6"], [1, "img-fluid", "mb-2", 3, "src"], [1, "col-6"], ["type", "button", 1, "btn", "btn-info", "mb-5", "mt-2", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "mb-5", "mt-2", "mx-2", 3, "click"]], template: function JugueteListadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, JugueteListadoComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.juguetes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSmImage], styles: [".content[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImp1Z3VldGUtbGlzdGFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLGNBQUE7QUFKSiIsImZpbGUiOiJqdWd1ZXRlLWxpc3RhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbi5jb250ZW50IHtcblxuICAgIG1hcmdpbjogMCBhdXRvO1xuXG59XG4iXX0= */"] });


/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);






function LoginComponent_form_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El email de usuario es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_0_div_5_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.email.errors.required);
} }
function LoginComponent_form_0_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " El email de usuario es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_0_div_10_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.password.errors.required);
} }
function LoginComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email de usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_0_div_5_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contrase\u00F1a de usuario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_form_0_div_10_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.email.errors && ctx_r0.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.password.errors && ctx_r0.password.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loginForm.invalid);
} }
class LoginComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]);
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    }
    ngOnInit() {
    }
    login() {
        this.router.navigateByUrl('perfil');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "text-center", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-center", 3, "formGroup", "ngSubmit"], [1, "my-4"], ["for", "Nombre"], ["type", "email", 3, "formControl"], [3, "ngClass", 4, "ngIf"], ["for", "password"], ["type", "password", 3, "formControl"], ["type", "submit", 1, "btn", "btn-primary", "m-4", 3, "disabled"], [3, "ngClass"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_form_0_Template, 13, 6, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective], styles: [".error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#postFeedback[_ngcontent-%COMP%] {\n  visibility: hidden;\n  min-width: 250px;\n  color: #fff;\n  text-align: center;\n  border-radius: 10px;\n  padding: 16px;\n  z-index: 1;\n  font-size: 14px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#postFeedback.requestOk[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n#postFeedback.requestKo[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n#postFeedback.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsdUJBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUVBLHlDQUFBO0FBREo7O0FBZUU7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBRko7RUFJRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBRko7QUFDRjs7QUFnQkU7RUFDRTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBSko7RUFNRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBSko7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3N0RmVlZGJhY2sge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICNwb3N0RmVlZGJhY2sucmVxdWVzdE9rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAjcG9zdEZlZWRiYWNrLnJlcXVlc3RLbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gICNwb3N0RmVlZGJhY2suc2hvdyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 7519:
/*!*******************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilComponent": () => (/* binding */ PerfilComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _juguete_listado_juguete_listado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../juguete-listado/juguete-listado.component */ 5505);


class PerfilComponent {
    constructor() { }
    ngOnInit() {
    }
}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) { return new (t || PerfilComponent)(); };
PerfilComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerfilComponent, selectors: [["app-perfil"]], decls: 5, vars: 0, consts: [[1, "row", "mx-2"], [1, "col-12"], [1, "my-5"]], template: function PerfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Lista de deseos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-juguete-listado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [_juguete_listado_juguete_listado_component__WEBPACK_IMPORTED_MODULE_0__.JugueteListadoComponent], styles: ["h1[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUVJLFVBQUE7RUFDQSxrQkFBQTtBQUxKIiwiZmlsZSI6InBlcmZpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcblxyXG5cclxuaDF7XHJcblxyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ 5772:
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriasService": () => (/* binding */ CategoriasService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class CategoriasService {
    constructor(http) {
        this.http = http;
    }
    getAllCategorias() {
        return this.http.get('/categorias/').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((data) => { return data.data; }));
    }
    getAllCategoriasByJugueteId(identifier) {
        return this.http.get('/categoria/' + identifier).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((data) => { return data.data; }));
    }
}
CategoriasService.ɵfac = function CategoriasService_Factory(t) { return new (t || CategoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CategoriasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriasService, factory: CategoriasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6521:
/*!**********************************************!*\
  !*** ./src/app/services/juguetes.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JuguetesService": () => (/* binding */ JuguetesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class JuguetesService {
    constructor(http) {
        this.http = http;
        this.server = "http://localhost:8000";
    }
    getAllJuguetes() {
        return this.http.get('/juguetes').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((data) => { return data.data; }));
    }
    getJugueteById(identifier) {
        return this.http.get('/juguete/' + identifier).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((data) => { return data.data; }));
    }
    add(juguete) {
        return this.http.post('/juguete/', juguete);
    }
    update(juguete) {
        return this.http.put(`/juguete/${juguete.id}`, juguete);
    }
    delete(idJuguete) {
        return this.http.delete(`/juguete/${idJuguete}`);
    }
}
JuguetesService.ɵfac = function JuguetesService_Factory(t) { return new (t || JuguetesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
JuguetesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JuguetesService, factory: JuguetesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map