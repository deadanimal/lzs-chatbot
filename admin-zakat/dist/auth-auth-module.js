(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading-bar></ngx-loading-bar>\n<div class=\"main-content auth-content d-flex align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5 col-md-7\">\n                <div class=\"card bg-secondary border-0 mb-0\">\n                    <div class=\"card-body px-lg-5 py-lg-5\">\n                        <div class=\"logo-box\">\n                            <img class=\"logo\" [src]=\"imgLogo\">\n                            <h6 class=\"h2 text-default mt-3 mb-0\">Reset password</h6>\n                        </div>\n\n                        <form [formGroup]=\"resetForm\">\n                            <div class=\"form-group mb-3\" [ngClass]=\"{ focused: focusEmail === true }\">\n                                <div class=\"input-group input-group-alternative\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text bg-primary\">\n                                            <i class=\"fas fa-envelope text-white\"></i>\n                                        </span>\n                                    </div>\n                                    <input\n                                        class=\"form-control text-dark\"\n                                        placeholder=\"Email\"\n                                        type=\"email\"\n                                        formControlName=\"email\"\n                                        (focus)=\"focusEmail = true\"\n                                        (blur)=\"focusEmail = false\"\n                                    />\n                                </div>\n                                <ng-container *ngFor=\"let message of resetFormMessages.email\">\n                                    <div *ngIf=\"resetForm.get('email').hasError(message.type) && (resetForm.get('email').dirty || resetForm.get('email').touched)\">\n                                        <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                                    </div>\n                                </ng-container>\n                            </div>\n                            <div class=\"text-center\">\n                                <button type=\"button\" class=\"btn btn-primary btn-block my-4\" (click)=\"reset()\">\n                                    Reset Password\n                                </button>\n                                <button type=\"button\" class=\"btn btn-icon btn-outline-primary btn-block my-2\"  (click)=\"navigatePage('login')\">\n                                    <span class=\"btn-inner--icon\"><i class=\"fas fa-angle-left\"></i></span>\n                                    <span class=\"btn-inner--text\">Login</span>\n                                </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading-bar></ngx-loading-bar>\n<div class=\"main-content auth-content d-flex align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5 col-md-7\">\n                <div class=\"card bg-secondary border-0 mb-0\">\n                    <div class=\"card-body px-lg-5 py-lg-5\">\n                        <div class=\"logo-box\">\n\t\t\t\t\t\t\t<img class=\"logo\" [src]=\"imgLogo\">\n\t\t\t\t\t\t</div>\n                        <form [formGroup]=\"loginForm\">\n                            <div class=\"form-group mb-3\" [ngClass]=\"{ focused: focusUsername === true }\">\n                                <div class=\"input-group input-group-alternative\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text bg-default\">\n                                            <i class=\"fas fa-envelope text-white\"></i>\n                                        </span>\n                                    </div>\n                                    <input \n                                        class=\"form-control\" \n                                        placeholder=\"Email\" \n                                        type=\"email\"\n                                        formControlName=\"username\"\n                                        (focus)=\"focusUsername = true\" \n                                        (blur)=\"focusUsername = false\"\n                                    />\n                                </div>\n                                <ng-container *ngFor=\"let message of loginFormMessages.username\">\n                                    <div *ngIf=\"loginForm.get('username').hasError(message.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\">\n                                        <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                                    </div>\n                                </ng-container>\n                            </div>\n\n                            <div class=\"form-group\" [ngClass]=\"{ focused: focusPassword === true }\">\n                                <div class=\"input-group input-group-alternative\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text bg-default\">\n                                            <i class=\"fas fa-lock text-white\"></i>\n                                        </span>\n                                    </div>\n                                    <input \n                                        class=\"form-control\"\n                                        placeholder=\"Password\"\n                                        type=\"password\"\n                                        formControlName=\"password\"\n                                        (focus)=\"focusPassword = true\" \n                                        (blur)=\"focusPassword = false\"\n                                    />\n                                </div>\n                                <div class=\"validation-errors\">\n                                    <ng-container *ngFor=\"let message of loginFormMessages.password\">\n                                        <div *ngIf=\"loginForm.get('password').hasError(message.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                                            <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-control-alternative custom-checkbox\">\n\t\t\t\t\t\t\t\t\t\t<input class=\"custom-control-input\" id=\"customCheckLogin\" type=\"checkbox\" />\n\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customCheckLogin\">\n\t\t\t\t\t\t\t\t\t\t\t<span>Remember me?</span>\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-6 text-right\">\n\t\t\t\t\t\t\t\t\t<label class=\"forget-label\" (click)=\"navigatePage('forgot')\">\n\t\t\t\t\t\t\t\t\t\t<span>Forgot password</span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n                        </form>\n\n                        <div class=\"text-center\">\n                            <button type=\"button\" class=\"btn btn-default my-4 btn-block\" (click)=\"login()\">\n                                Sign in\n                            </button>\n                        </div>\n\n                        <div>\n                            <button type=\"button\" class=\"btn btn-outline-default btn-block my-2\" (click)=\"navigatePage('register')\">\n                                Register\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading-bar></ngx-loading-bar>\n<div class=\"main-content auth-content d-flex align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-5 col-md-7\">\n                <div class=\"card bg-secondary border-0 mb-0\">\n                    <div class=\"card-body px-lg-5 py-lg-5\">\n                        <div class=\"logo-box\">\n                            <img class=\"logo\" [src]=\"imgLogo\">\n                            <h6 class=\"h2 text-default mt-3 mb-0\">Register account</h6>\n                        </div>\n\n                        <form [formGroup]=\"registerForm\">\n                            <div class=\"form-group\" [ngClass]=\"{ focused: focusUsername === true }\">\n                                <div class=\"input-group input-group-alternative mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text bg-default\">\n                                            <i class=\"fas fa-envelope text-white\"></i>\n                                        </span>\n                                    </div>\n                                    <input \n                                        class=\"form-control\" \n                                        placeholder=\"Email\"\n                                        type=\"email\"\n                                        formControlName=\"username\"\n                                        (focus)=\"focusUsername = true\"\n                                        (blur)=\"focusUsername = false\"\n                                    />\n                                </div>\n                                <ng-container *ngFor=\"let message of registerFormMessages.username\">\n                                    <div *ngIf=\"registerForm.get('username').hasError(message.type) && (registerForm.get('username').dirty || registerForm.get('username').touched)\">\n                                        <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                                    </div>\n                                </ng-container>\n                            </div>\n\n                            <div class=\"form-group\" [ngClass]=\"{ focused: focusPassword === true }\">\n                                <div class=\"input-group input-group-alternative mb-3\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text bg-default\">\n                                            <i class=\"fas fa-lock text-white\"></i>\n                                        </span>\n                                    </div>\n                                    <input \n                                        class=\"form-control\"\n                                        placeholder=\"Password\"\n                                        type=\"password\" \n                                        formControlName=\"password1\"\n                                        (focus)=\"focusPassword = true\"\n                                        (blur)=\"focusPassword = false\"\n                                    />\n                                </div>\n                                <ng-container *ngFor=\"let message of registerFormMessages.password1\">\n                                    <div *ngIf=\"registerForm.get('password1').hasError(message.type) && (registerForm.get('password1').dirty || registerForm.get('password1').touched)\">\n                                        <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                                    </div>\n                                </ng-container>\n                            </div>\n\n                            <div class=\"form-group\" [ngClass]=\"{ focused: focusConfirmPassword === true }\">\n                                <div class=\"input-group input-group-alternative\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text bg-default\">\n                                            <i class=\"fas fa-lock text-white\"></i>\n                                        </span>\n                                    </div>\n                                    <input \n                                        class=\"form-control\"\n                                        placeholder=\"Confirm password\" \n                                        type=\"password\"\n                                        formControlName=\"password2\"\n                                        (focus)=\"focusConfirmPassword = true\"\n                                        (blur)=\"focusConfirmPassword = false\" \n                                    />\n                                </div>\n                                <ng-container *ngFor=\"let message of registerFormMessages.password2\">\n                                    <div *ngIf=\"registerForm.get('password2').hasError(message.type) && (registerForm.get('password2').dirty || registerForm.get('password2').touched)\">\n                                        <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                                    </div>\n                                </ng-container>\n                            </div>\n                            <!--\n                            <div class=\"strength\">\n                                <ul class=\"strength-bar\">\n                                    <li class=\"point\" [style.background-color]=\"bar0\"></li>\n                                    <li class=\"point\" [style.background-color]=\"bar1\"></li>\n                                    <li class=\"point\" [style.background-color]=\"bar2\"></li>\n                                    <li class=\"point\" [style.background-color]=\"bar3\"></li>\n                                </ul>\n                            </div>\n                            -->\n                            <div class=\"text-muted font-italic\">\n                                <small>password strength:\n                                    <span class=\"text-success font-weight-700\">strong</span>\n                                </small>\n                            </div>\n\n                            <div class=\"row my-4\">\n                                <div class=\"col-12\">\n                                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                                        <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\" />\n                                        <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                                            <span>I agree with the\n                                                <a href=\"javascript:void(0)\">Privacy Policy</a>\n                                            </span>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n\n                        <div class=\"text-center\">\n                            <button type=\"button\" class=\"btn btn-default mt-4 btn-block\" (click)=\"createAccount()\">\n                                Create account\n                            </button>\n                            <button type=\"button\" class=\"btn btn-icon btn-outline-default btn-block my-2\"  (click)=\"navigatePage('login')\">\n                                <span class=\"btn-inner--icon\"><i class=\"fas fa-angle-left\"></i></span>\n                                <span class=\"btn-inner--text\">Login</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_10__["ForgotComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutes"])
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.routing.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/auth/forgot/forgot.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");




var AuthRoutes = [
    {
        path: '',
        children: [
            {
                path: 'forgot',
                component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_1__["ForgotComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-box {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.logo-box .logo {\n  max-height: 9rem;\n}\n.auth-content {\n  background-color: #172b4d;\n  background-image: url('building.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  overflow: hidden;\n}\n.error-message {\n  color: #f5365c;\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL1BOL2NoYXRib3Qvd2ViL3NyYy9hcHAvYXV0aC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0FDRVI7QURFQTtFQUNJLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUlBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1ib3gge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIC5sb2dvIHtcbiAgICAgICAgbWF4LWhlaWdodDogOXJlbTtcbiAgICB9XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQvYnVpbGRpbmcuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogI2Y1MzY1YztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iLCIubG9nby1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ubG9nby1ib3ggLmxvZ28ge1xuICBtYXgtaGVpZ2h0OiA5cmVtO1xufVxuXG4uYXV0aC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kL2J1aWxkaW5nLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmNTM2NWM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/forgot/forgot.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/forgot/forgot.component.ts ***!
  \*************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(authService, notifyService, formBuilder, loadingBar, router) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.formBuilder = formBuilder;
        this.loadingBar = loadingBar;
        this.router = router;
        // Image
        this.imgLogo = 'assets/img/logo/zakat-sel-logo.png';
        this.resetFormMessages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Please enter a valid email' }
            ]
        };
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.resetForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]))
        });
    };
    ForgotComponent.prototype.reset = function () {
        this.loadingBar.start();
        this.loadingBar.complete();
        this.successMessage();
    };
    ForgotComponent.prototype.navigatePage = function (path) {
        if (path == 'login') {
            return this.router.navigate(['/auth/login']);
        }
    };
    ForgotComponent.prototype.successMessage = function () {
        var title = 'Success';
        var message = 'A reset link has been sent to your email';
        this.notifyService.openToastr(title, message);
    };
    ForgotComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ForgotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot.component.scss */ "./src/app/auth/forgot/forgot.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-box {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.logo-box .logo {\n  max-width: 90%;\n}\n.auth-content {\n  background-color: #172b4d;\n  background-image: url('wallpaper-bg10.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  overflow: hidden;\n}\n.forget-label {\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.forget-label span {\n  position: relative;\n  top: 2px;\n}\n.custom-control-label {\n  vertical-align: none !important;\n}\n.error-message {\n  color: #f5365c;\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL1BOL2NoYXRib3Qvd2ViL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FERUE7RUFDSSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFJQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDRVI7QURFQTtFQUNJLCtCQUFBO0FDQ0o7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tYm94IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAubG9nbyB7XG4gICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgIH1cbn1cblxuLmF1dGgtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC93YWxscGFwZXItYmcxMC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvcmdldC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgfVxufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgIHZlcnRpY2FsLWFsaWduOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogI2Y1MzY1YztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iLCIubG9nby1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ubG9nby1ib3ggLmxvZ28ge1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cblxuLmF1dGgtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC93YWxscGFwZXItYmcxMC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm9yZ2V0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcmdldC1sYWJlbCBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgdmVydGljYWwtYWxpZ246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2Y1MzY1YztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, notifyService, formBuilder, loadingBar, router) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.formBuilder = formBuilder;
        this.loadingBar = loadingBar;
        this.router = router;
        // Image
        this.imgLogo = 'assets/img/logo/tnb-logo2.png';
        this.loginFormMessages = {
            'username': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Please enter a valid email' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Password must have at least 8 characters' }
            ]
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ]))
        });
    };
    LoginComponent.prototype.login = function () {
        this.loadingBar.start();
        this.loadingBar.complete();
        this.successMessage();
        if (this.loginForm.value.username == 'admin') {
            this.authService.userRole = 1;
            this.navigatePage('dashboard-admin');
        }
        else if (this.loginForm.value.username == 'user') {
            this.authService.userRole = 2;
            this.navigatePage('dashboard-user');
        }
    };
    LoginComponent.prototype.navigatePage = function (path) {
        if (path == 'login') {
            return this.router.navigate(['/auth/login']);
        }
        else if (path == 'forgot') {
            return this.router.navigate(['/auth/forgot']);
        }
        else if (path == 'register') {
            return this.router.navigate(['/auth/register']);
        }
        else if (path == 'dashboard-admin') {
            return this.router.navigate(['/admin/dashboard']);
        }
        else if (path == 'dashboard-user') {
            return this.router.navigate(['/user/dashboard']);
        }
    };
    LoginComponent.prototype.successMessage = function () {
        var title = 'Success';
        var message = 'Loging in right now';
        this.notifyService.openToastr(title, message);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-box {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.logo-box .logo {\n  max-height: 9rem;\n}\n.auth-content {\n  background-color: #172b4d;\n  background-image: url('wallpaper-bg10.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  overflow: hidden;\n}\n.forget-label {\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.forget-label span {\n  position: relative;\n  top: 2px;\n}\n.custom-control-label {\n  vertical-align: none !important;\n}\n.error-message {\n  color: #f5365c;\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.strength-bar {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  vertical-align: 2px;\n}\n.point:last-of-type {\n  margin: 0 !important;\n}\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL1BOL2NoYXRib3Qvd2ViL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREVBO0VBQ0kseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBSUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0VSO0FERUE7RUFDSSwrQkFBQTtBQ0NKO0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLG9CQUFBO0FDQ0o7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1ib3gge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIC5sb2dvIHtcbiAgICAgICAgbWF4LWhlaWdodDogOXJlbTtcbiAgICB9XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzJiNGQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQvd2FsbHBhcGVyLWJnMTAuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JnZXQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMnB4O1xuICAgIH1cbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6ICNmNTM2NWM7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zdHJlbmd0aC1iYXIge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiAycHg7XG59XG4gIFxuLnBvaW50Omxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4gIFxuLnBvaW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjREREO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDYycHg7XG59XG4gIFxuLy8gcCB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gfVxuICAiLCIubG9nby1ib3gge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ubG9nby1ib3ggLmxvZ28ge1xuICBtYXgtaGVpZ2h0OiA5cmVtO1xufVxuXG4uYXV0aC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kL3dhbGxwYXBlci1iZzEwLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb3JnZXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9yZ2V0LWxhYmVsIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZjUzNjVjO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zdHJlbmd0aC1iYXIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdmVydGljYWwtYWxpZ246IDJweDtcbn1cblxuLnBvaW50Omxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ucG9pbnQge1xuICBiYWNrZ3JvdW5kOiAjREREO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICB3aWR0aDogNjJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, notifyService, formBuilder, loadingBar, router) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.formBuilder = formBuilder;
        this.loadingBar = loadingBar;
        this.router = router;
        // Image
        this.imgLogo = 'assets/img/logo/tnb-logo2.png';
        this.registerFormMessages = {
            'username': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Please enter a valid email' }
            ],
            'password1': [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Password must have at least 8 characters' }
            ],
            'password2': [
                { type: 'required', message: 'Password is required' },
                { type: 'minLength', message: 'Password must have at least 8 characters' }
            ]
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ])),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ]))
        });
    };
    RegisterComponent.prototype.createAccount = function () {
        this.loadingBar.start();
        this.loadingBar.complete();
        this.successMessage();
    };
    RegisterComponent.prototype.navigatePage = function (path) {
        if (path == 'login') {
            return this.router.navigate(['/auth/login']);
        }
    };
    RegisterComponent.prototype.successMessage = function () {
        var title = 'Success';
        var message = 'Account created';
        this.notifyService.openToastr(title, message);
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map