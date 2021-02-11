(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-global-global-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/notifications/notifications.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/notifications/notifications.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notifications works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/profile/profile.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/profile/profile.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Profile</h6>\n\n                    <nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n                        <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n                            <li class=\" breadcrumb-item\">\n                                <a href=\"javascript:void(0)\"> <i class=\"fas fa-user text-dark\"> </i> </a>\n                            </li>\n                            <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                                My Profile\n                            </li>\n                        </ol>\n                    </nav>\n                </div>\n                <div class=\"col-lg-6 col-5 text-right\">\n                    <a \n                        *ngIf=\"!editEnabled\"\n                        class=\"btn btn-default btn-sm text-white btn-icon btn-3\" \n                        (click)=\"toggleEdit()\"\n                    > \n                        <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\"></i></span>\n                        <span class=\"btn-inner--text\">Edit profile</span>\n                    </a>\n                    <a\n                        *ngIf=\"editEnabled\"\n                        class=\"btn btn-warning btn-sm text-white btn-icon btn-3\" \n                        (click)=\"toggleEdit()\"\n                    > \n                        <span class=\"btn-inner--icon\"><i class=\"fas fa-arrow-left\"></i></span>\n                        <span class=\"btn-inner--text\">Back</span>\n                    </a>\n                    <a \n                        *ngIf=\"editEnabled\"\n                        class=\"btn btn-default btn-sm text-white btn-icon btn-3\" \n                        (click)=\"confirm()\"\n                    > \n                        <span class=\"btn-inner--icon\"><i class=\"fas fa-save\"></i></span>\n                        <span class=\"btn-inner--text\">Save</span>\n                    </a>\n\t\t\t\t</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n    <div class=\"row\">\n        <div class=\"col-xl-4 order-xl-2\">\n            <div class=\"card card-profile\">\n                <img alt=\"Image placeholder\" class=\"card-img-top\" src=\"assets/img/background/wallpaper-bg3.jpg\" />\n\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-lg-3 order-lg-2\">\n                        <div class=\"card-profile-image\">\n                            <a>\n                                <img class=\"rounded-circle\" src=\"assets/img/default/avatar2.png\" />\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n                    <div class=\"d-flex justify-content-between\">\n                        <a class=\"btn btn-sm btn-warning mr-4\" href=\"javascript:void(0)\">\n                            Connect\n                        </a>\n\n                        <a class=\"btn btn-sm btn-default float-right\" href=\"javascript:void(0)\">\n                            Message\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"card-body pt-0\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"card-profile-stats d-flex justify-content-center\">\n                                <div>\n                                    <span class=\"heading\"> 22 </span>\n\n                                    <span class=\"description\"> Friends </span>\n                                </div>\n\n                                <div>\n                                    <span class=\"heading\"> 10 </span>\n\n                                    <span class=\"description\"> Photos </span>\n                                </div>\n\n                                <div>\n                                    <span class=\"heading\"> 89 </span>\n\n                                    <span class=\"description\"> Comments </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"text-center\">\n                        <h5 class=\"h3\">\n                            Salina Ahmad<span class=\" font-weight-light\"> , 24 </span>\n                        </h5>\n\n                        <div class=\"h5 font-weight-300\">\n                            <i class=\"fas fa-location-arrow mr-2\"> </i> Petaling Jaya, Selangor\n                        </div>\n\n                        <div class=\"h5 mt-4\">\n                            <i class=\"fas fa-briefcase mr-2\"> </i> Illustrator\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-xl-8 order-xl-1\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-8\">\n                            <h3 *ngIf=\"!editEnabled\" class=\"mb-0\">Profile</h3>\n                            <h3 *ngIf=\"editEnabled\" class=\"mb-0\"> Edit Profile</h3>\n                        </div>\n\n                        <div class=\"col-4 text-right\">\n                            <a  *ngIf=\"!editEnabled\"  class=\"btn btn-sm btn-warning\" href=\"javascript:void(0)\">\n                                Settings\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"card-body\">\n                    <form  *ngIf=\"!editEnabled\">\n                        <h6 class=\"heading-small text-muted mb-4\">User information</h6>\n\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-username\">\n                                            Name\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-username\" \n                                            placeholder=\"Name\"\n                                            type=\"text\" \n                                            value=\"Salina Ahmad\"\n                                            disabled \n                                        />\n                                    </div>\n                                </div>\n\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">\n                                            Email address\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-email\" \n                                            placeholder=\"Email address\"\n                                            type=\"email\"\n                                            value=\"salina@prototype.com.my\"\n                                            disabled\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <hr class=\"my-4\" />\n\n                        <h6 class=\"heading-small text-muted mb-4\">Contact information</h6>\n\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-address\">\n                                            Address\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-address\"\n                                            placeholder=\"Home Address\"\n                                            type=\"text\" \n                                            value=\"No. 88, Jalan Apple 61/A\"\n                                            disabled\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-city\">\n                                            City\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-city\" \n                                            placeholder=\"City\" \n                                            type=\"text\"\n                                            value=\"Petaling Jaya\" \n                                            disabled\n                                        />\n                                    </div>\n                                </div>\n\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-country\">\n                                            Country\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-country\"\n                                            placeholder=\"Country\"\n                                            type=\"text\"\n                                            value=\"Malaysia\" \n                                            disabled\n                                        />\n                                    </div>\n                                </div>\n\n                                <div class=\" col-lg-4\">\n                                    <div class=\" form-group\">\n                                        <label class=\" form-control-label\" for=\"input-country\">\n                                            Postal code\n                                        </label>\n\n                                        <input \n                                            class=\" form-control\"\n                                            id=\"input-postal-code\"\n                                            placeholder=\"Postal code\"\n                                            type=\"number\"\n                                            value=\"47310\"\n                                            disabled\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                    <form [formGroup]=\"editForm\" *ngIf=\"editEnabled\">\n                        <h6 class=\"heading-small text-muted mb-4\">User information</h6>\n\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-username\">\n                                            Name\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-username\" \n                                            placeholder=\"Name\"\n                                            type=\"text\" \n                                            value=\"Salina Ahmad\"\n                                            formControlName=\"name\" \n                                        />\n                                    </div>\n                                </div>\n\n                                <div class=\"col-lg-6\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">\n                                            Email address\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-email\" \n                                            placeholder=\"Email address\"\n                                            type=\"email\"\n                                            value=\"salina@prototype.com.my\"\n                                            formControlName=\"email\"\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <hr class=\"my-4\" />\n\n                        <h6 class=\"heading-small text-muted mb-4\">Contact information</h6>\n\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-address\">\n                                            Address\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-address\"\n                                            placeholder=\"Home Address\"\n                                            type=\"text\" \n                                            value=\"No. 88, Jalan Apple 61/A\"\n                                            formControlName=\"address\"\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-city\">\n                                            City\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-city\" \n                                            placeholder=\"City\" \n                                            type=\"text\"\n                                            value=\"Petaling Jaya\" \n                                            formControlName=\"city\"\n                                        />\n                                    </div>\n                                </div>\n\n                                <div class=\"col-lg-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-country\">\n                                            Country\n                                        </label>\n\n                                        <input \n                                            class=\"form-control\"\n                                            id=\"input-country\"\n                                            placeholder=\"Country\"\n                                            type=\"text\"\n                                            value=\"Malaysia\" \n                                            formControlName=\"country\"\n                                        />\n                                    </div>\n                                </div>\n\n                                <div class=\" col-lg-4\">\n                                    <div class=\" form-group\">\n                                        <label class=\" form-control-label\" for=\"input-country\">\n                                            Postal code\n                                        </label>\n\n                                        <input \n                                            class=\" form-control\"\n                                            id=\"input-postal-code\"\n                                            placeholder=\"Postal code\"\n                                            type=\"number\"\n                                            value=\"47310\"\n                                            formControlName=\"postcode\"\n                                        />\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/settings/settings.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/settings/settings.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings works!</p>\n");

/***/ }),

/***/ "./src/app/core/global/global.module.ts":
/*!**********************************************!*\
  !*** ./src/app/core/global/global.module.ts ***!
  \**********************************************/
/*! exports provided: GlobalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalModule", function() { return GlobalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _global_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global.routing */ "./src/app/core/global/global.routing.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/core/global/notifications/notifications.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/global/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/core/global/settings/settings.component.ts");













var GlobalModule = /** @class */ (function () {
    function GlobalModule() {
    }
    GlobalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__["NotificationsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__["LoadingBarModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_global_routing__WEBPACK_IMPORTED_MODULE_9__["GlobalRoutes"])
            ]
        })
    ], GlobalModule);
    return GlobalModule;
}());



/***/ }),

/***/ "./src/app/core/global/global.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/core/global/global.routing.ts ***!
  \***********************************************/
/*! exports provided: GlobalRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalRoutes", function() { return GlobalRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/core/global/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/core/global/settings/settings.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/core/global/notifications/notifications.component.ts");




var GlobalRoutes = [
    {
        path: '',
        children: [
            {
                path: 'notifications',
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
            },
            {
                path: 'settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/global/notifications/notifications.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/global/notifications/notifications.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZ2xvYmFsL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/global/notifications/notifications.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/global/notifications/notifications.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/notifications/notifications.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.component.scss */ "./src/app/core/global/notifications/notifications.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/core/global/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/global/profile/profile.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZ2xvYmFsL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/global/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/global/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(formBuilder) {
        this.formBuilder = formBuilder;
        // Toggle
        this.editEnabled = false;
        this.editFormMessages = {
            'name': [
                { type: 'required', message: 'Name is required' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'A valid email is required' }
            ]
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]))
        });
    };
    ProfileComponent.prototype.toggleEdit = function () {
        this.editEnabled = !this.editEnabled;
    };
    ProfileComponent.prototype.confirm = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Confirmation",
            text: "Are you sure to save this edit?",
            type: "info",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-info",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            cancelButtonClass: "btn btn-danger",
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result.value) {
                _this.edit();
            }
        });
    };
    ProfileComponent.prototype.edit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Success",
            text: "Update has been saved",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Close"
        }).then(function (result) {
            if (result.value) {
                _this.editForm.reset();
            }
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/profile/profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/core/global/profile/profile.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/global/settings/settings.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/global/settings/settings.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZ2xvYmFsL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/global/settings/settings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/global/settings/settings.component.ts ***!
  \************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/global/settings/settings.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/core/global/settings/settings.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=core-global-global-module.js.map