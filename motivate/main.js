(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noticias/noticias.component */ "./src/app/noticias/noticias.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");







var routes = [
    { path: 'noticias', component: _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_4__["NoticiasComponent"] },
    { path: 'inicio', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] },
    { path: 'registro', component: _registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"] },
    { path: 'contacto', component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ContactoComponent"] },
    { path: '', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] },
    { path: '**', component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1{\r\n    background-color: #D8E6E8;\r\n    height: 150px;\r\n    }\r\n   \r\n    .container1 img{\r\n        display:block;\r\n        margin:auto;\r\n        padding: 15px 0px;\r\n        }\r\n   \r\n    .container1 button{\r\n            float: right;\r\n            margin-top: 50px;\r\n            margin-right: 50px;\r\n            padding: 10px 20px;\r\n            }\r\n   \r\n    .navbar{\r\n        background-color: #34A1B8;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxpQkFBaUI7UUFDakI7O0lBRUE7WUFDSSxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEI7O0lBRVI7UUFDSSx5QkFBeUI7SUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RTZFODtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLmNvbnRhaW5lcjEgaW1ne1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmNvbnRhaW5lcjEgYnV0dG9ue1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgLm5hdmJhcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRBMUI4O1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container1\">\n    <div class=\"row\">\n        <div class=\"col-sm\"> </div>\n        <div class=\"col-sm\">\n            <img src=\"../assets/img/logotipo.png\" alt=\"\">\n        </div>\n        <div class=\"col-sm\">\n            <button type=\"button\" class=\"btn btn-info\"  routerLink='/registro'>Registrarse</button>\n        </div>\n      </div>\n  \n  \n</div>\n\n<div class=\"container.fluid\" class=\"menu\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark \">\n    \n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" routerLink='/inicio'>INICIO <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink='/noticias'>NOTICIAS</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            INFORMACION\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLink='/contacto'>CONTACTO</a>\n        </li>\n        \n      </ul>\n      \n    </div>\n  </nav>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'motivate';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noticias/noticias.component */ "./src/app/noticias/noticias.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");
/* harmony import */ var _registro_registro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./registro/registro.component */ "./src/app/registro/registro.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_5__["InicioComponent"],
                _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_6__["NoticiasComponent"],
                _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"],
                _registro_registro_component__WEBPACK_IMPORTED_MODULE_8__["RegistroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacto/contacto.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacto/contacto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-enviar {\r\n\tcolor: white;\r\n\tbackground-color: #8c8c8e;\r\n  }\r\n  \r\n  .mensaje{\r\n\t  display:block;\r\n\t  margin:auto;\r\n\t  \r\n\t  padding-top: 20px;\r\n\t  padding-bottom: 20px;\r\n\t  background-color: #D8E6E8;\r\n\t  width: 100%;\r\n  }\r\n  \r\n  .mensaje .form-control{\r\n\t  border-radius: 0px;\r\n\t  margin-top: 10px;\r\n  }\r\n  \r\n  .MensajeIcon{\r\n\tdisplay:block;\r\n\tmargin:auto;\r\n  }\r\n  \r\n  #team img{\r\n\t  border: solid;\r\n\t  border-width: 2px;\r\n\t  border-color: black;\r\n\t  width: 225px;\r\n\t  height: 225px;\r\n\t  left: 0;\r\n\t  right: 0;\t\r\n  }\r\n  \r\n  #team p{\r\n\t  text-align: center;\r\n  }\r\n  \r\n  .overlay {\r\n\t  position:absolute;\r\n\t  width: 225px;\r\n\t  height: 225px;\r\n\t  top: 0;\r\n\t  bottom: 0;\r\n\t  left: 0;\r\n\t  right: 0;\r\n\t  opacity: 0;\r\n\t  margin-left: 15px;\r\n\t  transition: .5s ease;\r\n\t  background-color: #008CBA;\r\n  }\r\n  \r\n  .avatar:hover .overlay {\r\n\t  opacity: 1;\r\n\t  background-color: rgba(50,161,184,0.6);\r\n  }\r\n  \r\n  .text h3{\r\n\t  font:bold;\r\n\t  font-size: 25px;\r\n\t  color: white;\r\n  }\r\n  \r\n  .text p{\r\n\t  font-style: oblique;\r\n\t  font-size: 15px;\r\n\t  color: black;\r\n  }\r\n  \r\n  .text {\r\n\t  position: absolute;\r\n\t  width: 80%;\r\n\t  top: 50%;\r\n\t  left: 50%;\r\n\t  -webkit-transform: translate(-50%, -50%);\r\n\t  transform: translate(-50%, -50%);\r\n\t  text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7RUFDeEI7O0VBRUE7R0FDQyxhQUFhO0dBQ2IsV0FBVzs7R0FFWCxpQkFBaUI7R0FDakIsb0JBQW9CO0dBQ3BCLHlCQUF5QjtHQUN6QixXQUFXO0VBQ1o7O0VBQ0E7R0FDQyxrQkFBa0I7R0FDbEIsZ0JBQWdCO0VBQ2pCOztFQUVBO0NBQ0QsYUFBYTtDQUNiLFdBQVc7RUFDVjs7RUFHQTtHQUNDLGFBQWE7R0FDYixpQkFBaUI7R0FDakIsbUJBQW1CO0dBQ25CLFlBQVk7R0FDWixhQUFhO0dBQ2IsT0FBTztHQUNQLFFBQVE7RUFDVDs7RUFFQTtHQUNDLGtCQUFrQjtFQUNuQjs7RUFFQTtHQUNDLGlCQUFpQjtHQUNqQixZQUFZO0dBQ1osYUFBYTtHQUNiLE1BQU07R0FDTixTQUFTO0dBQ1QsT0FBTztHQUNQLFFBQVE7R0FDUixVQUFVO0dBQ1YsaUJBQWlCO0dBQ2pCLG9CQUFvQjtHQUNwQix5QkFBeUI7RUFDMUI7O0VBRUE7R0FDQyxVQUFVO0dBQ1Ysc0NBQXNDO0VBQ3ZDOztFQUNBO0dBQ0MsU0FBUztHQUNULGVBQWU7R0FDZixZQUFZO0VBQ2I7O0VBQ0E7R0FDQyxtQkFBbUI7R0FDbkIsZUFBZTtHQUNmLFlBQVk7RUFDYjs7RUFFQTtHQUNDLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsUUFBUTtHQUNSLFNBQVM7R0FDVCx3Q0FBd0M7R0FFeEMsZ0NBQWdDO0dBQ2hDLGtCQUFrQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWVudmlhciB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM4YzhjOGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW5zYWple1xyXG5cdCAgZGlzcGxheTpibG9jaztcclxuXHQgIG1hcmdpbjphdXRvO1xyXG5cdCAgXHJcblx0ICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHQgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogI0Q4RTZFODtcclxuXHQgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWVuc2FqZSAuZm9ybS1jb250cm9se1xyXG5cdCAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cdCAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5NZW5zYWplSWNvbntcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdG1hcmdpbjphdXRvO1xyXG4gIH1cclxuICBcclxuICBcclxuICAjdGVhbSBpbWd7XHJcblx0ICBib3JkZXI6IHNvbGlkO1xyXG5cdCAgYm9yZGVyLXdpZHRoOiAycHg7XHJcblx0ICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG5cdCAgd2lkdGg6IDIyNXB4O1xyXG5cdCAgaGVpZ2h0OiAyMjVweDtcclxuXHQgIGxlZnQ6IDA7XHJcblx0ICByaWdodDogMDtcdFxyXG4gIH1cclxuICBcclxuICAjdGVhbSBwe1xyXG5cdCAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcblx0ICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHQgIHdpZHRoOiAyMjVweDtcclxuXHQgIGhlaWdodDogMjI1cHg7XHJcblx0ICB0b3A6IDA7XHJcblx0ICBib3R0b206IDA7XHJcblx0ICBsZWZ0OiAwO1xyXG5cdCAgcmlnaHQ6IDA7XHJcblx0ICBvcGFjaXR5OiAwO1xyXG5cdCAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblx0ICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICMwMDhDQkE7XHJcbiAgfVxyXG4gIFxyXG4gIC5hdmF0YXI6aG92ZXIgLm92ZXJsYXkge1xyXG5cdCAgb3BhY2l0eTogMTtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsMTYxLDE4NCwwLjYpO1xyXG4gIH1cclxuICAudGV4dCBoM3tcclxuXHQgIGZvbnQ6Ym9sZDtcclxuXHQgIGZvbnQtc2l6ZTogMjVweDtcclxuXHQgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnRleHQgcHtcclxuXHQgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcblx0ICBmb250LXNpemU6IDE1cHg7XHJcblx0ICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0IHtcclxuXHQgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgIHdpZHRoOiA4MCU7XHJcblx0ICB0b3A6IDUwJTtcclxuXHQgIGxlZnQ6IDUwJTtcclxuXHQgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0ICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHQgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/contacto/contacto.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacto/contacto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"container\">\n\t<h2>EQUIPO DE TRABAJO</h2>\n\t<div class=\"row\">\n\t\t\n\t  <div class=\"col-sm-12 col-md-4\">\t\t\t\t\n\t\t\t<div class=\"avatar\">\n\t\t\t\t<img src=\"../../assets/img/ejemploFoto.jpg\" alt=\"PHvalery\" class=\"image\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t<h3>Valery Alejandra Cabrera Rojas</h3>\t\t\t\t\t\t\t\n\t\t\t\t\t\t<p>Dictora de Proyecto</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"col-sm-12 col-md-4\">\t\t\t\t\n\t\t\t<div class=\"avatar\">\n\t\t\t\t<img src=\"../../assets/img/ejemploFoto.jpg\"  class=\"image\" alt=\"PHkelly\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t<h3>Kelly Tatiana Ruiz Riaño</h3>\n\t\t\t\t\t\t<p>Desarrolladora</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t  <div class=\"col-sm-12 col-md-4\">\t\t\t\t\n\t\t<div class=\"avatar\">\n\t\t\t\t<img src=\"../../assets/img/ejemploFoto.jpg\"  class=\"image\" alt=\"PHzol\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t<h3>Zolangie Moreno</h3>\n\t\t\t\t\t\t<p>Desarrolladora</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<br><br>\n</section>\n\n<section class=\"mensaje\"><br>\n<div class=\"container\">\n\t<div class=\" row\">\n\t\t<div class=\"col-sm-12 col-md-2 col-lg-3\"></div>\n\t<div class=\"col-sm-12 col-md-8 col-lg-6\">\n\t\t\n\t\t<img class=\"MensajeIcon\" src=\"../../assets/img/MensajeIcon.png\" alt=\"mensaje_icon\">\n\t\t\n\t\t<input class=\"form-control\" id=\"nombre\" type=\"text\" placeholder=\"Nombre:\">\n\t\t\n\t\t<input class=\"form-control\" id=\"correo\" type=\"email\" placeholder=\"Correo:\">\n\t\t\n\t\t<input class=\"form-control\" id=\"telefono\" type=\"tel\" placeholder=\"Telefono:\">\n\t\t\n\t\t<input class=\"form-control\" id=\"asunto\" type=\"text\" placeholder=\"Asunto:\">\n\t\t\n\t\t<textarea class=\"form-control\" id=\"mensaje\" type=\"text\" placeholder=\"Mensaje:\"></textarea>\n\t\t\n\t\t<button class=\"btn btn-enviar btn-block\">Enviar</button>\n\t</div>\n\t\t</div>\n\t</div>\n</section>"

/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/contacto/contacto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"utf-8\";\r\n/* CSS Document */\r\n#BannerPrincipal{\r\n\tbackground-color: grey;\r\n}\r\n#BannerPrincipal img {\r\n\theight: 400px;\r\n\t-webkit-filter:brightness(0.4);\r\n\t        filter:brightness(0.4);\r\n\twidth: auto;\r\n\r\n}\r\n.carousel-caption .btn-color{\r\n\twidth: 300px;\r\n\tbackground-color: #8C8C8C;\r\n\tcolor: white;\r\n\tborder-radius: 15px;\r\n\tborder: none;\r\n}\r\ndiv .texto{\r\n\tfont-size: 15px;\r\n\tfont-weight: 0.5px;\r\n\tcolor: #FFFFFF;\r\n}\r\n.infografia{\r\n\tbackground-image:url('Fondo.png');\t\r\n\tbackground-size:100% 100%;\r\n}\r\n.iconos{\r\n\tdisplay: block;\r\n\tmargin: auto;\r\n\tpadding: 10px 10px 10px 10px;\r\n\theight: 100px;\r\n\twidth: 100px;\r\n\tborder-style: inherit;\r\n\tborder: solid;\r\n\tborder-radius: 50px;\r\n\tborder-color: #1A837D;\t\r\n\tborder-width: 10px;\r\n}\r\n.iconos img{\r\n\twidth: auto;\r\n\theight: 55px;\r\n}\r\nspan .salto{\r\n\tpadding-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7Q0FDQyxzQkFBc0I7QUFDdkI7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBc0I7U0FBdEIsc0JBQXNCO0NBQ3RCLFdBQVc7O0FBRVo7QUFFQTtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixZQUFZO0FBQ2I7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmO0FBRUE7Q0FDQyxpQ0FBa0Q7Q0FDbEQseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLDRCQUE0QjtDQUM1QixhQUFhO0NBQ2IsWUFBWTtDQUNaLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwidXRmLThcIjtcclxuLyogQ1NTIERvY3VtZW50ICovXHJcbiNCYW5uZXJQcmluY2lwYWx7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuI0Jhbm5lclByaW5jaXBhbCBpbWcge1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0ZmlsdGVyOmJyaWdodG5lc3MoMC40KTtcclxuXHR3aWR0aDogYXV0bztcclxuXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIC5idG4tY29sb3J7XHJcblx0d2lkdGg6IDMwMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM4QzhDOEM7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG5kaXYgLnRleHRve1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LXdlaWdodDogMC41cHg7XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5pbmZvZ3JhZmlhe1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9Gb25kby5wbmdcIik7XHRcclxuXHRiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlO1xyXG59XHJcbi5pY29ub3N7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHR3aWR0aDogMTAwcHg7XHJcblx0Ym9yZGVyLXN0eWxlOiBpbmhlcml0O1xyXG5cdGJvcmRlcjogc29saWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRib3JkZXItY29sb3I6ICMxQTgzN0Q7XHRcclxuXHRib3JkZXItd2lkdGg6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29ub3MgaW1ne1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGhlaWdodDogNTVweDtcclxufVxyXG5cclxuc3BhbiAuc2FsdG97XHJcblx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t  <div id=\"BannerPrincipal\" class=\"carousel slide\" data-ride=\"carousel\" >\n\t\t<ol class=\"carousel-indicators\">\n\t\t\t<li data-target=\"#BannerPrincipal\" data-slide-to=\"0\" class=\"active\"></li>\n\t\t\t<li data-target=\"#BannerPrincipal\" data-slide-to=\"1\"></li>\n\t\t\t<li data-target=\"#BannerPrincipal\" data-slide-to=\"2\"></li>\n\t\t\t<li data-target=\"#BannerPrincipal\" data-slide-to=\"3\"></li>\n\t\t\t<li data-target=\"#BannerPrincipal\" data-slide-to=\"4\"></li>\n      </ol>\n\t    <div class=\"carousel-inner\" role=\"listbox\">\n\t      \n\t\t\t<div class=\"carousel-item active\">\n\t\t\t  <img class=\"d-block mx-auto\" src=\"../../assets/img/Banner1.jpg\" alt=\"First slide\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"carousel-item\"> \n\t\t\t  <img class=\"d-block mx-auto\" src=\"../../assets/img/Banner2.jpg\" alt=\"Second slide\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"carousel-item\">\n\t\t\t  <img class=\"d-block mx-auto\" src=\"../../assets/img/Banner3.jpg\" alt=\"Third slide\">\n            </div>\n\t\t\n\t\t\t<div class=\"carousel-item\">\n\t\t\t  <img class=\"d-block mx-auto\" src=\"../../assets/img/Banner4.jpg\" alt=\"Third slide\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"carousel-item\">\n\t\t\t  <img class=\"d-block mx-auto\" src=\"../../assets/img/Banner5.jpg\" alt=\"Third slide\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"carousel-caption \">\n\t\t\t\t<div class=\"texto\">\n\t\t\t\t\tSi deseas conocer cuánto puedes ahorrar en tiempo y dinero regístrate aqui.<br>También podrás conocer cómo funciona el alquiler de bicicletas y monopatines en Bogotá, rutas de las ciclovías, reglamento vial y mucho mas.\n\t\t\t\t</div>\n\t          <input type=\"button\" class=\"btn btn-color\" onClick=\" \" value=\"Mas Informacion\"> \n            </div>\n      </div>\n\t    <a class=\"carousel-control-prev\" href=\"#BannerPrincipal\" role=\"button\" data-slide=\"prev\"> <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Previous</span> </a> <a class=\"carousel-control-next\" href=\"#BannerPrincipal\" role=\"button\" data-slide=\"next\"> <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div>\n\t  \n\t  <section class=\"infografia\">\n\t\t  <br><br>\n\t\t  <div class=\"container\">\t\n\t\t  <div class=\"row\">\n        \n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-1\">\n\t\t\t  <a href=\" \" class=\"iconos\">\n\t\t\t\t  <img src=\"../../assets/img/Lapiz.png\" alt=\"lapiz\"> </a>\n        </div>\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-1\">\n\t\t\t  <a href=\" \" class=\"iconos\">\n\t\t\t\t  <img src=\"../../assets/img/Documento.png\" alt=\"documento\"> </a>\n        </div>\n        <div class=\"col-md-3\"></div>\n\n\t\t  </div>\n\t\t  \n\t\t  <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-1\">\n          <a href=\" \" class=\"iconos\">\n          <img src=\"../../assets/img/Ubicacion.png\" alt=\"lapiz\"> </a>\n          </div>\n          <div class=\"col-md-6\">\n\t\t\t  <a href=\" \" class=\"\">\n          <img src=\"../../assets/img/Bicicleta.png\" alt=\"bicicleta\"> </a>\n          </div>\n          <div class=\"col-md-1\">\n\t\t\t  <a href=\" \" class=\"iconos\">\n          <img src=\"../../assets/img/Lupa.png\" alt=\"lapiz\"> </a>\n          </div>\n          <div class=\"col-md-2\"></div>\n\t\t  </div>\n\t\t</div>\n\t  </section>\n\t  \n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/noticias/noticias.component.css":
/*!*************************************************!*\
  !*** ./src/app/noticias/noticias.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGljaWFzL25vdGljaWFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/noticias/noticias.component.html":
/*!**************************************************!*\
  !*** ./src/app/noticias/noticias.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  noticias works!\n</p>\n"

/***/ }),

/***/ "./src/app/noticias/noticias.component.ts":
/*!************************************************!*\
  !*** ./src/app/noticias/noticias.component.ts ***!
  \************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent() {
    }
    NoticiasComponent.prototype.ngOnInit = function () {
    };
    NoticiasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.css */ "./src/app/noticias/noticias.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/registro/registro.component.css":
/*!*************************************************!*\
  !*** ./src/app/registro/registro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"utf-8\";\r\n/* CSS Document */\r\n.btn-registrar {\r\n  color: white;\r\n\tmargin-top: 50px;\r\n\tmargin-bottom: 50px;\r\n  background-color:#34A1B8;\r\n}\r\n.datosRegistro .form-control{\r\n\tborder-radius: 20px;\r\n\tmargin-top: 20px;\r\n\tbox-shadow: 14px 11px 30px -23px ;\r\n}\r\n.caja{\r\n\tbackground-color: #D8E6E8;\r\n\tpadding-top: 50px;\r\n\tborder-radius: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBRWpCO0VBQ0UsWUFBWTtDQUNiLGdCQUFnQjtDQUNoQixtQkFBbUI7RUFDbEIsd0JBQXdCO0FBQzFCO0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLGlDQUFpQztBQUNsQztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG4vKiBDU1MgRG9jdW1lbnQgKi9cclxuXHJcbi5idG4tcmVnaXN0cmFyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM0QTFCODtcclxufVxyXG5cclxuLmRhdG9zUmVnaXN0cm8gLmZvcm0tY29udHJvbHtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0Ym94LXNoYWRvdzogMTRweCAxMXB4IDMwcHggLTIzcHggO1xyXG59XHJcblxyXG4uY2FqYXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDhFNkU4O1xyXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/registro/registro.component.html":
/*!**************************************************!*\
  !*** ./src/app/registro/registro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>REGISTRO</h2>\n\t\n<section class=\"datosRegistro container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 col-md-2 col-lg-3\"></div>\n\t\t<div class=\"caja col-sm-12 col-md-8 col-lg-6\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t<input class=\"form-control\" id=\"nombre\" type=\"text\" placeholder=\"Nombre:\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t<input class=\"form-control\" id=\"apellido\" type=\"text\" placeholder=\"Apellido:\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input class=\"form-control\" id=\"correo\" type=\"email\" placeholder=\"Correo:\">\n\t\t\t\n\t\t\t<input class=\"form-control\" id=\"contraseña1\" type=\"password\" placeholder=\"contraseña:\">\n\t\t\t<input class=\"form-control\" id=\"contraseña2\" type=\"password\" placeholder=\"Confirmar contraseña:\">\n\t\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-2\"> </div>\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<button class=\"btn btn-registrar btn-block\">Registrar</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</section>\t"

/***/ }),

/***/ "./src/app/registro/registro.component.ts":
/*!************************************************!*\
  !*** ./src/app/registro/registro.component.ts ***!
  \************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistroComponent = /** @class */ (function () {
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/registro/registro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Users\desktop\umng\tecnologias\motivate\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map