(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dashboard works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/faq/faq.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/faq/faq.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Frequently Asked Question (FAQ)</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\"fas fa-question-circle text-dark\"> </i> </a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header bg-secondary\">\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Choose by Categories</label>\n            <select class=\"form-control custom-select\" #mySelect>\n              <option hidden selected value=\"0\">Please pick</option>\n              <option value=\"general\">General</option>\n              <option value=\"account\">Account and Billing</option>\n              <option value=\"owner\">Owner/Tenant issues</option>\n              <option value=\"power\">Power Quality</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"card-body\" *ngIf=\"mySelect.value==='general'\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">Where is the TNB's Headquarters?</h4>\n              <p>TNB’s Headquarters is located in Bangsar, Kuala Lumpur. For full address, refer to our Contact Us page.\n              </p>\n            </div>\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">Where can I find a list of TNB's subsidiaries?</h4>\n              <p>A complete list can be found at our Subsidiaries page.</p>\n            </div>\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">What is TNB's fiscal year?</h4>\n              <p>TNB's fiscal year is from 1 January to 31 December.</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-body\" *ngIf=\"mySelect.value==='account'\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">How many days after receiving the bill, should payment be made?</h4>\n              <p>Payment should be made within 30 days from the date the bill is issued.</p>\n            </div>\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">Can customers make partial payments of their bill?</h4>\n              <p>No. All bills must be paid in full.</p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-body\" *ngIf=\"mySelect.value==='owner'\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">Some owners are left with hefty bills after their tenants have moved out. How can\n                owners protect their rights?</h4>\n              <ul>Property owners have two choices as below:\n                <li>In the situation before a new tenant moves in, property owners could do a Change of Tenancy making\n                  the tenant fully responsible for any delinquent account.\n                  However, owners will lose the right to instruct a disconnection to TNB in the event the tenant\n                  defaults in his monthly electricity bills</li>\n                <li>Owners could register with myTNB and would then be able to monitor their tenant’s monthly usage and\n                  payment pattern</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-body\" *ngIf=\"mySelect.value==='power'\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">How is Power Quality measured?</h4>\n              <p>Power quality is generally measured by the shape of the voltage waveforms supplied at the customer's\n                meter.\n                The voltage waveforms may reduce, increase, fluctuate or distort due to controllable or uncontrollable\n                circumstances.</p>\n            </div>\n            <div class=\"col-md-12\">\n              <h4 class=\"text-default\">What kind of equipments can be affected by Power Quality problems?</h4>\n              <p>Any types of electrical equipments can be affected. Standard building systems such as lighting, HVAC\n                and communications equipments are frequently affected.\n                The most costly power quality problems often involve more sensitive high-tech equipments such as\n                computer controlled equipment and data systems.</p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/myaccount/myaccount.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/myaccount/myaccount.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body page-content\">\n  <div class=\"header pb-6\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <h3 class=\"h2 text-secondary d-inline-block mb-0\">Upload your files here</h3>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<div id=\"card-decks-component  \" class=\"tab-pane tab-example-result fade show active card-body\" role=\"tabpanel\"\n  aria-labelledby=\"card-decks-component-tab\">\n  <div class=\"card-deck\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">NRIC photo</h5>\n        <div class=\"dropzone dropzone-single\" data-toggle=\"dropzone\" data-dropzone-url=\"http://\">\n          <div class=\"fallback\">\n            <div class=\"custom-file\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"dropzoneBasicUpload\" />\n              <label class=\"custom-file-label\" for=\"dropzoneBasicUpload\">Choose file</label>\n            </div>\n          </div>\n          <div class=\"dz-preview dz-preview-single\">\n            <div class=\"dz-preview-cover\">\n              <img class=\"dz-preview-img\" src=\"...\" alt=\"...\" data-dz-thumbnail=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Selfie photo</h5>\n        <div class=\"dropzone dropzone-single\" data-toggle=\"dropzone\" data-dropzone-url=\"http://\">\n          <div class=\"fallback\">\n            <div class=\"custom-file\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"dropzoneBasicUpload\" />\n              <label class=\"custom-file-label\" for=\"dropzoneBasicUpload\">Choose file</label>\n            </div>\n          </div>\n          <div class=\"dz-preview dz-preview-single\">\n            <div class=\"dz-preview-cover\">\n              <img class=\"dz-preview-img\" src=\"...\" alt=\"...\" data-dz-thumbnail=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Passport photo</h5>\n        <div class=\"dropzone dropzone-single\" data-toggle=\"dropzone\" data-dropzone-url=\"http://\">\n          <div class=\"fallback\">\n            <div class=\"custom-file\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"dropzoneBasicUpload\" />\n              <label class=\"custom-file-label\" for=\"dropzoneBasicUpload\">Choose file</label>\n            </div>\n          </div>\n          <div class=\"dz-preview dz-preview-single\">\n            <div class=\"dz-preview-cover\">\n              <img class=\"dz-preview-img\" src=\"...\" alt=\"...\" data-dz-thumbnail=\"\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/core/user/dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/user/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_freshchat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-freshchat */ "./node_modules/ngx-freshchat/__ivy_ngcc__/fesm5/ngx-freshchat.js");



var FC_TOKEN = "66be7290-cfe1-4a79-93b5-f76fb00c8b37";
var FC_URL = "https://wchat.freshchat.com";
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(chat) {
        this.chat = chat;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.chat.init({
            token: FC_TOKEN,
            host: FC_URL
        })
            .subscribe(function () { return console.log('FreshChat is ready!'); });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: ngx_freshchat__WEBPACK_IMPORTED_MODULE_2__["NgxFreshChatService"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/core/user/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_freshchat__WEBPACK_IMPORTED_MODULE_2__["NgxFreshChatService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/core/user/faq/faq.component.scss":
/*!**************************************************!*\
  !*** ./src/app/core/user/faq/faq.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL1BOL2NoYXRib3Qvd2ViL3NyYy9hcHAvY29yZS91c2VyL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvdXNlci9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3VzZXIvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAuY29sbGFwc2luZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjM1cyBlYXNlO1xuICB9XG5cbiAgIiwiLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY29sbGFwc2luZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zNXMgZWFzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/user/faq/faq.component.ts":
/*!************************************************!*\
  !*** ./src/app/core/user/faq/faq.component.ts ***!
  \************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
        this.selectedDay = '';
    }
    FaqComponent.prototype.selectChangeHandler = function (event) {
        //update the ui
        this.selectedDay = event.target.value;
    };
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/faq/faq.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faq.component.scss */ "./src/app/core/user/faq/faq.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/core/user/myaccount/myaccount.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/user/myaccount/myaccount.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-content {\n  background-color: #172b4d;\n  background-image: url(\"/../../../assets/img/favicon/theme.svg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 70vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL1BOL2NoYXRib3Qvd2ViL3NyYy9hcHAvY29yZS91c2VyL215YWNjb3VudC9teWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvdXNlci9teWFjY291bnQvbXlhY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwrREFBQTtFQUNBLDRCQUFBO0VBSUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9teWFjY291bnQvbXlhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8uLi8uLi8uLi9hc3NldHMvaW1nL2Zhdmljb24vdGhlbWUuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iLCIucGFnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MmI0ZDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZmF2aWNvbi90aGVtZS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDcwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/core/user/myaccount/myaccount.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/user/myaccount/myaccount.component.ts ***!
  \************************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_freshchat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-freshchat */ "./node_modules/ngx-freshchat/__ivy_ngcc__/fesm5/ngx-freshchat.js");



var FC_TOKEN = "66be7290-cfe1-4a79-93b5-f76fb00c8b37";
var FC_URL = "https://wchat.freshchat.com";
var MyaccountComponent = /** @class */ (function () {
    function MyaccountComponent(chat) {
        this.chat = chat;
    }
    MyaccountComponent.prototype.ngOnInit = function () {
        this.chat.init({
            token: FC_TOKEN,
            host: FC_URL
        })
            .subscribe(function () { return console.log('FreshChat is ready!'); });
    };
    MyaccountComponent.ctorParameters = function () { return [
        { type: ngx_freshchat__WEBPACK_IMPORTED_MODULE_2__["NgxFreshChatService"] }
    ]; };
    MyaccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myaccount',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myaccount.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/myaccount/myaccount.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myaccount.component.scss */ "./src/app/core/user/myaccount/myaccount.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_freshchat__WEBPACK_IMPORTED_MODULE_2__["NgxFreshChatService"]])
    ], MyaccountComponent);
    return MyaccountComponent;
}());



/***/ }),

/***/ "./src/app/core/user/user.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/user/user.module.ts ***!
  \******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.routing */ "./src/app/core/user/user.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/user/dashboard/dashboard.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/core/user/faq/faq.component.ts");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/core/user/myaccount/myaccount.component.ts");














var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"],
                _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_13__["MyaccountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_8__["LoadingBarModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_10__["UserRoutes"]),
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/core/user/user.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.routing.ts ***!
  \*******************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/core/user/myaccount/myaccount.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/core/user/faq/faq.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/user/dashboard/dashboard.component.ts");




var UserRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"]
            },
            {
                path: 'myaccount',
                component: _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_1__["MyaccountComponent"]
            },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=core-user-user-module.js.map