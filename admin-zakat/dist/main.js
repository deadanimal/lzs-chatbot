(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\t<footer class=\"footer\">\n\t\t<div class=\"row align-items-center justify-content-xl-between\">\n\t\t\t<div class=\"col-xl-6\">\n\t\t\t\t<div class=\"copyright text-center text-xl-left text-muted\">\n\t\t\t\t\t&copy; {{ test | date: \"yyyy\" }}\n\t\t\t\t\tAll rights reserved © \n\t\t\t\t\t<a\n\t\t\t\t\t\thref=\"https://www.prototype.com.my\"\n\t\t\t\t\t\tclass=\"font-weight-bold ml-1\"\n\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t>\n\t\t\t\t\t\tPrototype\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-top navbar-expand navbar-dark bg-default border-bottom\" id=\"navbar-main\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t<!-- Search form -->\n\t\t\t<!--\n\t\t\t<form class=\"navbar-search navbar-search-light form-inline mr-sm-3\" id=\"navbar-search-main\">\n\t\t\t\t<div class=\"form-group mb-0\" [ngClass]=\"{ focused: focus === true }\">\n\t\t\t\t\t<div class=\"input-group input-group-alternative input-group-merge\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\tplaceholder=\"Search\" \n\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t(focus)=\"focus = true\"\n\t\t\t\t\t\t\t(blur)=\"focus = false\" \n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"closeSearch()\" data-action=\"search-close\"\n\t\t\t\t\tdata-target=\"#navbar-search-main\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">×</span>\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t\t-->\n\t\t\t<!-- Navbar links -->\n\t\t\t<ul class=\"navbar-nav align-items-center ml-md-auto\">\n\t\t\t\t<li class=\"nav-item d-xl-none\">\n\t\t\t\t\t<!-- Sidenav toggler -->\n\t\t\t\t\t<div \n\t\t\t\t\t\tclass=\"pr-3 sidenav-toggler sidenav-toggler-dark\"\n\t\t\t\t\t\tdata-action=\"sidenav-pin\"\n\t\t\t\t\t\tdata-target=\"#sidenav-main\" \n\t\t\t\t\t\t(click)=\"openSidebar()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class=\"sidenav-toggler-inner\">\n\t\t\t\t\t\t\t<i class=\"sidenav-toggler-line\"></i>\n\t\t\t\t\t\t\t<i class=\"sidenav-toggler-line\"></i>\n\t\t\t\t\t\t\t<i class=\"sidenav-toggler-line\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item d-sm-none\">\n\t\t\t\t\t<a class=\"nav-link\" (click)=\"openSearch()\">\n\t\t\t\t\t\t<i class=\"ni ni-zoom-split-in\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item dropdown\" dropdown placement=\"bottom-right\">\n\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" role=\"button\" dropdownToggle>\n\t\t\t\t\t\t<i class=\"ni ni-bell-55\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden\" *dropdownMenu>\n\t\t\t\t\t\t<!-- Dropdown header -->\n\t\t\t\t\t\t<div class=\"px-3 py-3\">\n\t\t\t\t\t\t\t<h6 class=\"text-sm text-muted m-0\">\n\t\t\t\t\t\t\t\tYou have <strong class=\"text-primary\">2</strong> notifications.\n\t\t\t\t\t\t\t</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- List group -->\n\t\t\t\t\t\t<div class=\"list-group list-group-flush\">\n\t\t\t\t\t\t\t<a href=\"javascript:void()\" class=\"list-group-item list-group-item-action\">\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n\t\t\t\t\t\t\t\t\t\t<img \n\t\t\t\t\t\t\t\t\t\t\talt=\"Image placeholder\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"imgAvatar\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"avatar rounded-circle\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col ml--2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"mb-0 text-sm\">Khairul Naim</h4>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right text-muted\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>1 hrs ago</small>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mb-0\">\n\t\t\t\t\t\t\t\t\t\t\tAccount registered\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:void()\" class=\"list-group-item list-group-item-action\">\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t\t<!-- Avatar -->\n\t\t\t\t\t\t\t\t\t\t<img \n\t\t\t\t\t\t\t\t\t\t\talt=\"Image placeholder\"\n\t\t\t\t\t\t\t\t\t\t\t[src]=\"imgAvatar\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"avatar rounded-circle\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col ml--2\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"mb-0 text-sm\">Aina Amirah</h4>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right text-muted\">\n\t\t\t\t\t\t\t\t\t\t\t\t<small>3 hrs ago</small>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-sm mb-0\">\n\t\t\t\t\t\t\t\t\t\t\tPassword has been reset\n\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- View all -->\n\t\t\t\t\t\t<a \n\t\t\t\t\t\t\t(click)=\"navigatePage('notifications')\"\n\t\t\t\t\t\t\tclass=\"dropdown-item text-center text-primary font-weight-bold py-3\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tView all\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<!-- User -->\n\t\t\t<ul class=\"navbar-nav align-items-center ml-auto ml-md-0\">\n\t\t\t\t<li class=\"nav-item dropdown\" dropdown placement=\"bottom-right\">\n\t\t\t\t\t<a class=\"nav-link pr-0 dropdown-toggle\" role=\"button\" dropdownToggle>\n\t\t\t\t\t\t<div class=\"media align-items-center\">\n\t\t\t\t\t\t\t<span class=\"avatar avatar-sm rounded-circle\">\n\t\t\t\t\t\t\t\t<img alt=\"Image placeholder\" [src]=\"imgAvatar\" />\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<div class=\"media-body ml-2 d-none d-lg-block\">\n\t\t\t\t\t\t\t\t<span class=\"mb-0 text-sm  font-weight-bold\">Salina Ahmad</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\" *dropdownMenu>\n\t\t\t\t\t\t<div class=\" dropdown-header noti-title\">\n\t\t\t\t\t\t\t<h6 class=\"text-overflow m-0\">Welcome!</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class=\"dropdown-item\" (click)=\"navigatePage('profile')\">\n\t\t\t\t\t\t\t<i class=\"fas fa-user fa-fw\"></i> <span>My profile</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a class=\"dropdown-item\" (click)=\"navigatePage('settings')\">\n\t\t\t\t\t\t\t<i class=\"fas fa-cogs fa-fw\"></i> <span>Settings</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t\t<a (click)=\"logout()\" class=\"dropdown-item\">\n\t\t\t\t\t\t\t<i class=\"fas fa-sign-out-alt fa-fw\"></i>\n\t\t\t\t\t\t\t<span>Logout</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n<div *ngIf=\"sidenavOpen === true\" class=\"backdrop d-xl-none\" (click)=\"toggleSidenav()\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav \n\tclass=\"sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white\" \n\tid=\"sidenav-main\"\n\t(mouseover)=\"onMouseEnterSidenav()\" \n\t(mouseout)=\"onMouseLeaveSidenav()\"\n>\n\t<perfect-scrollbar>\n\t\t<div class=\"scrollbar-inner\">\n\t\t\t<div class=\"sidenav-header d-flex align-items-center\">\n\t\t\t\t<a class=\"navbar-brand\" [routerLink]=\"['/#']\">\n\t\t\t\t\t<img [src]=\"imgLogo\" class=\"navbar-brand-img\" alt=\"...\" />\n\t\t\t\t</a>\n\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t<!-- Sidenav toggler -->\n\t\t\t\t\t<div class=\"sidenav-toggler d-none d-xl-block\" data-action=\"sidenav-unpin\"\n\t\t\t\t\t\tdata-target=\"#sidenav-main\" (click)=\"minimizeSidebar()\">\n\t\t\t\t\t\t<div class=\"sidenav-toggler-inner\">\n\t\t\t\t\t\t\t<i class=\"sidenav-toggler-line\"></i>\n\t\t\t\t\t\t\t<i class=\"sidenav-toggler-line\"></i>\n\t\t\t\t\t\t\t<i class=\"sidenav-toggler-line\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"navbar-inner\">\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n\t\t\t\t\t<!-- Collapse header -->\n\t\t\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t\t\t<li *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n\t\t\t\t\t\t\t<!--If is a single link-->\n\t\t\t\t\t\t\t<a \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLink]=\"[menuitem.path]\"\n\t\t\t\t\t\t\t\t*ngIf=\"menuitem.type === 'link'\"\n\t\t\t\t\t\t\t\tclass=\"nav-link\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<i class=\"ni {{ menuitem.icontype }}\"></i>\n\t\t\t\t\t\t\t\t<span class=\"nav-link-text\">{{ menuitem.title }}</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<!--If it have a submenu-->\n\t\t\t\t\t\t\t<a \n\t\t\t\t\t\t\t\tdata-toggle=\"collapse\" \n\t\t\t\t\t\t\t\trouterLinkActive=\"active\" \n\t\t\t\t\t\t\t\t*ngIf=\"menuitem.type === 'sub'\"\n\t\t\t\t\t\t\t\t(click)=\"menuitem.isCollapsed = !menuitem.isCollapsed\"\n\t\t\t\t\t\t\t\t[attr.aria-expanded]=\"!menuitem.isCollapsed\" \n\t\t\t\t\t\t\t\t[attr.aria-controls]=\"menuitem.collapse\"\n\t\t\t\t\t\t\t\tclass=\"nav-link\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<i class=\"ni {{ menuitem.icontype }}\"></i>\n\t\t\t\t\t\t\t\t<span class=\"nav-link-text\">{{ menuitem.title }}</span>\n\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t<!--Display the submenu items-->\n\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\tid=\"{{ menuitem.collapse }}\"\n\t\t\t\t\t\t\t\tclass=\"collapse\"\n\t\t\t\t\t\t\t\t*ngIf=\"menuitem.type === 'sub'\"\n\t\t\t\t\t\t\t\t[collapse]=\"menuitem.isCollapsed\" \n\t\t\t\t\t\t\t\t[isAnimated]=\"true\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ul class=\"nav nav-sm flex-column\">\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let childitems of menuitem.children\" class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t<!--If is a single link-->\n\t\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"[menuitem.path, childitems.path]\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"nav-link\" *ngIf=\"childitems.type === 'link'\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t{{ childitems.title }}\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<!--If it have a submenu-->\n\t\t\t\t\t\t\t\t\t\t<a \n\t\t\t\t\t\t\t\t\t\t\tdata-toggle=\"collapse\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"childitems.isCollapsed = !childitems.isCollapsed\"\n\t\t\t\t\t\t\t\t\t\t\t[attr.aria-expanded]=\"!childitems.isCollapsed\"\n\t\t\t\t\t\t\t\t\t\t\t[attr.aria-controls]=\"childitems.collapse\"\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"childitems.type === 'sub'\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"nav-link\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t{{ childitems.title }}\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<!--Display the submenu items-->\n\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\tid=\"{{ childitems.collapse }}\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"collapse\"\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"childitems.type === 'sub'\"\n\t\t\t\t\t\t\t\t\t\t\t[collapse]=\"childitems.isCollapsed\"\n\t\t\t\t\t\t\t\t\t\t\t[isAnimated]=\"true\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let childitem of childitems.children\" class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"[menuitem.path, childitems.path, childitem.path]\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"nav-link\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ childitem.title }}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<!-- Divider -->\n\t\t\t\t\t<hr class=\"my-3\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</perfect-scrollbar>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dx-vector-map\n  id=\"vector-map\"\n  [bounds]=\"[0, 0, 0, 0]\"\n  (onClick)=\"click($event)\"\n>\n  <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\">\n    <dxo-font color=\"#fff\"></dxo-font>\n    <dxo-border [visible]=\"false\"></dxo-border>\n  </dxo-tooltip>\n  <dxi-layer [dataSource]=\"worldMap\" [customize]=\"customizeLayers\"> </dxi-layer>\n</dx-vector-map>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/presentation/presentation.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/presentation/presentation.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  id=\"navbar-main\"\n  class=\"navbar navbar-horizontal navbar-main navbar-expand-lg navbar-dark bg-danger\"\n>\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n      <img src=\"assets/img/brand/white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar-collapse\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse navbar-custom-collapse collapse\"\n      id=\"collapseBasic\" [collapse]=\"isCollapsed\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/dashboards/dashboard']\">\n              <img src=\"assets/img/brand/blue.png\" />\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggler\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar-collapse\"\n              aria-controls=\"navbar-collapse\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            >\n              <span></span> <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/dashboards/dashboard']\"\n          >\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/pricing']\"\n          >\n            <span class=\"nav-link-inner--text\">Pricing</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/login']\"\n          >\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/register']\"\n          >\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/lock']\"\n          >\n            <span class=\"nav-link-inner--text\">Lock</span>\n          </a>\n        </li>\n      </ul>\n      <hr class=\"d-lg-none\" />\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.instagram.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://github.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Star us on Github\"\n          >\n            <i class=\"fab fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a\n            href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n            target=\"_blank\"\n            class=\"btn btn-neutral btn-icon\"\n          >\n            <span class=\"btn-inner--icon\">\n              <i class=\"fas fa-shopping-cart mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Purchase now</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"main-content\">\n  <!-- Header -->\n  <div class=\"header bg-danger pt-5 pb-7\">\n    <div class=\"container\">\n      <div class=\"header-body\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6\">\n            <div class=\"pr-5\">\n              <h1 class=\"display-2 text-white font-weight-bold mb-0\">\n                Argon Dashboard PRO Angular\n              </h1>\n              <h2 class=\"display-4 text-white font-weight-light\">\n                A beautiful premium dashboard for Bootstrap 4 and Angular.\n              </h2>\n              <p class=\"text-white mt-4\">\n                Argon perfectly combines reusable HTML and modular CSS with a\n                modern styling and beautiful markup throughout each HTML\n                template in the pack.\n              </p>\n              <div class=\"mt-5\">\n                <a\n                  [routerLink]=\"['/dashboards/dashboard']\"\n                  class=\"btn btn-neutral my-2\"\n                  >Explore Dashboard</a\n                >\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  class=\"btn btn-default my-2\"\n                  >Purchase now</a\n                >\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6\">\n            <div class=\"row pt-5\">\n              <div class=\"col-md-6\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Components</h5>\n                    <p>Argon comes with over 70 handcrafted components.</p>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Plugins</h5>\n                    <p>\n                      Fully integrated and extendable third-party plugins that\n                      you will love.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 pt-lg-5 pt-4\">\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Pages</h5>\n                    <p>\n                      From simple to complex, you get a beautiful set of 15+\n                      page examples.\n                    </p>\n                  </div>\n                </div>\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Documentation</h5>\n                    <p>You will love how easy is to to work with Argon.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n  <section class=\"py-6 pb-9 bg-default\">\n    <div class=\"container-fluid\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-md-6\">\n          <h2 class=\"display-3 text-white\">A complete HTML solution</h2>\n          <p class=\"lead text-white\">\n            Argon is a completly new product built on our newest re-built from\n            scratch framework structure that is meant to make our products more\n            intuitive, more adaptive and, needless to say, so much easier to\n            customize. Let Argon amaze you with its cool features and build tools\n            and get your project to a whole new level.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-lg-0 mt--7\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-primary text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-check-bold\"></i>\n                  </div>\n                  <h4 class=\"h3 text-primary text-uppercase\">\n                    Based on Bootstrap 4\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon is built on top of the most popular open source\n                    toolkit for developing with HTML, CSS, and JS.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >bootstrap 4</span\n                    >\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >dashboard</span\n                    >\n                    <span class=\"badge badge-pill badge-primary\">template</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-success text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-istanbul\"></i>\n                  </div>\n                  <h4 class=\"h3 text-success text-uppercase\">\n                    Integrated build tools\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Use Argons's included npm and gulp scripts to compile source\n                    code, run tests, and more with just a few simple commands.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success mr-1\">npm</span>\n                    <span class=\"badge badge-pill badge-success mr-1\"\n                      >gulp</span\n                    >\n                    <span class=\"badge badge-pill badge-success\"\n                      >build tools</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-warning text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-planet\"></i>\n                  </div>\n                  <h4 class=\"h3 text-warning text-uppercase\">\n                    Full Sass support\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon makes customization easier than ever before. You get\n                    all the tools to make your website building process a\n                    breeze.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >sass</span\n                    >\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >design</span\n                    >\n                    <span class=\"badge badge-pill badge-warning\"\n                      >customize</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-1.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Awesome features</h1>\n            <p>\n              This dashboard comes with super cool features that are meant to\n              help in the process. Handcrafted components, page examples and\n              functional widgets are just a few things you will see and love at\n              first sight.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-settings-gear-65\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Carefully crafted components</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-html5\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Amazing page examples</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Super friendly support team</h4></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6\">\n          <img src=\"assets/img/theme/landing-2.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"pr-md-5\">\n            <h1>Example pages</h1>\n            <p>\n              If you want to get inspiration or just show something directly to\n              your clients, you can jump start your development with our\n              pre-built example pages.\n            </p>\n            <a\n              [routerLink]=\"['/examples/profile']\"\n              class=\"font-weight-bold text-warning mt-5\"\n              >Explore pages</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-3.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Lovable widgets and cards</h1>\n            <p>\n              We love cards and everybody on the web seems to. We have gone\n              above and beyond with options for you to organise your\n              information. From cards designed for content, to pricing cards or\n              user profiles, you will have many options to choose from.\n            </p>\n            <a\n              [routerLink]=\"['/widgets']\"\n              class=\"font-weight-bold text-info mt-5\"\n              >Explore widgets</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7 section-nucleo-icons bg-white overflow-hidden\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">Nucleo Icons</h2>\n          <p class=\"lead\">\n            The official package contains over 21.000 icons which are looking\n            great in combination with Argon Design System. Make sure you check\n            all of them and use those that you like the most.\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              [routerLink]=\"['/documentation/icons']\"\n              target=\"_blank\"\n              class=\"btn btn-primary\"\n              >View demo icons</a\n            >\n            <a\n              href=\"https://nucleoapp.com/?ref=1712\"\n              target=\"_blank\"\n              class=\"btn btn-default mt-3 mt-md-0\"\n              >View all icons</a\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"blur--hover\">\n        <a [routerLink]=\"['/documentation/icons']\">\n          <div class=\"icons-container blur-item mt-5\">\n            <!-- Center -->\n            <i class=\"icon ni ni-diamond\"></i>\n            <!-- Right 1 -->\n            <i class=\"icon icon-sm ni ni-album-2\"></i>\n            <i class=\"icon icon-sm ni ni-app\"></i>\n            <i class=\"icon icon-sm ni ni-atom\"></i>\n            <!-- Right 2 -->\n            <i class=\"icon ni ni-bag-17\"></i>\n            <i class=\"icon ni ni-bell-55\"></i>\n            <i class=\"icon ni ni-credit-card\"></i>\n            <!-- Left 1 -->\n            <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\n            <i class=\"icon icon-sm ni ni-building\"></i>\n            <i class=\"icon icon-sm ni ni-button-play\"></i>\n            <!-- Left 2 -->\n            <i class=\"icon ni ni-calendar-grid-58\"></i>\n            <i class=\"icon ni ni-camera-compact\"></i>\n            <i class=\"icon ni ni-chart-bar-32\"></i>\n          </div>\n          <span class=\"blur-hidden h5 text-success\"\n            >Explore all the 21.000+ Nucleo Icons</span\n          >\n        </a>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">\n            Do you love this awesome\n            <span class=\"text-success\">Dashboard for Bootstrap 4?</span>\n          </h2>\n          <p class=\"lead\">\n            Cause if you do, it can be yours now. Hit the button below to\n            navigate to get the free version or purchase a license for your next\n            project. Build a new web app or give an old Bootstrap project a new\n            look!\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-neutral mb-3 mb-sm-0\"\n              target=\"_blank\"\n            >\n              <span class=\"btn-inner--text\">Get FREE version</span>\n            </a>\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-primary btn-icon mb-3 mb-sm-0\"\n            >\n              <span class=\"btn-inner--icon\"><i class=\"ni ni-basket\"></i></span>\n              <span class=\"btn-inner--text\">Purchase now</span>\n              <span\n                class=\"badge badge-md badge-pill badge-floating badge-danger border-white\"\n                >$89</span\n              >\n            </a>\n          </div>\n          <div class=\"text-center\">\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n            <div class=\"row justify-content-center\">\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Angular - One framework. Mobile &amp; desktop\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Bootstrap 4 - Most popular front-end component library\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\"\n                    class=\"img-fluid rounded-circle shadow shadow-lg--hover\"\n                  />\n                </a>\n              </div>\n\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"React - A JavaScript library for building user interfaces\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-laravel?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Laravel - The PHP Framework For Web Artisans\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-nodejs?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Node.js - a JavaScript runtime built on Chrome's V8 JavaScript engine\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nodejs-logo.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Vue.js - The progressive javascript framework\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Sketch - Digital design toolkit\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.adobe.com/products/photoshop.html?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\"\n                    class=\"img-fluid rounded-circle opacity-3\"\n                  />\n                </a>\n              </div>\n            </div>\n            <div class=\"spinner-border\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- Footer -->\n<footer class=\"py-5\" id=\"footer-main\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<div class=\"\" (window:resize)=\"isMobile($event)\">\n  <app-sidebar\n    [ngClass]=\"{ 'sidenav fixed-left': isMobileResolution === false }\"\n  ></app-sidebar>\n  <div class=\"main-content\">\n    <!-- Top navbar -->\n    <app-navbar></app-navbar>\n    <!-- Pages -->\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<nav\n  id=\"navbar-main\"\n  class=\"navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light\"\n>\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n      <img src=\"assets/img/brand/white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar-collapse\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse navbar-custom-collapse collapse\"\n      id=\"collapseBasic\" [collapse]=\"isCollapsed\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/dashboards/dashboard']\">\n              <img src=\"assets/img/brand/blue.png\" />\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggler\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar-collapse\"\n              aria-controls=\"navbar-collapse\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            >\n              <span></span> <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/dashboards/dashboard']\"\n          >\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/pricing']\"\n          >\n            <span class=\"nav-link-inner--text\">Pricing</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/login']\"\n          >\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/register']\"\n          >\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/lock']\"\n          >\n            <span class=\"nav-link-inner--text\">Lock</span>\n          </a>\n        </li>\n      </ul>\n      <hr class=\"d-lg-none\" />\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.instagram.com/creativetimofficial\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://github.com/creativetimofficial\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Star us on Github\"\n          >\n            <i class=\"fab fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a\n            href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-auth-layout\"\n            target=\"_blank\"\n            class=\"btn btn-neutral btn-icon\"\n          >\n            <span class=\"btn-inner--icon\">\n              <i class=\"fas fa-shopping-cart mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Purchase now</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n-->\n<router-outlet></router-outlet>\n<!--\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n-->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-user-user-module",
		"auth-auth-module"
	],
	"./core/admin/admin.module": [
		"./src/app/core/admin/admin.module.ts",
		"default~core-admin-admin-module~examples-charts-charts-module~examples-dashboards-dashboards-module~~33d563e1",
		"default~core-admin-admin-module~core-global-global-module~core-user-user-module~examples-tables-tables-module",
		"default~core-admin-admin-module~core-global-global-module~examples-calendar-calendar-module~examples~f6fc33de",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-user-user-module",
		"common",
		"core-admin-admin-module"
	],
	"./core/global/global.module": [
		"./src/app/core/global/global.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-user-user-module~examples-tables-tables-module",
		"default~core-admin-admin-module~core-global-global-module~examples-calendar-calendar-module~examples~f6fc33de",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-user-user-module",
		"core-global-global-module"
	],
	"./core/user/user.module": [
		"./src/app/core/user/user.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-user-user-module~examples-tables-tables-module",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-user-user-module",
		"common",
		"core-user-user-module"
	],
	"./examples/calendar/calendar.module": [
		"./src/app/examples/calendar/calendar.module.ts",
		"default~core-admin-admin-module~core-global-global-module~examples-calendar-calendar-module~examples~f6fc33de",
		"default~examples-calendar-calendar-module~examples-widgets-widgets-module",
		"examples-calendar-calendar-module"
	],
	"./examples/charts/charts.module": [
		"./src/app/examples/charts/charts.module.ts",
		"default~core-admin-admin-module~examples-charts-charts-module~examples-dashboards-dashboards-module~~33d563e1",
		"default~examples-charts-charts-module~examples-dashboards-dashboards-module",
		"examples-charts-charts-module"
	],
	"./examples/components/components.module": [
		"./src/app/examples/components/components.module.ts",
		"default~core-admin-admin-module~core-global-global-module~examples-calendar-calendar-module~examples~f6fc33de",
		"examples-components-components-module"
	],
	"./examples/dashboards/dashboards.module": [
		"./src/app/examples/dashboards/dashboards.module.ts",
		"default~core-admin-admin-module~examples-charts-charts-module~examples-dashboards-dashboards-module~~33d563e1",
		"default~examples-charts-charts-module~examples-dashboards-dashboards-module",
		"examples-dashboards-dashboards-module"
	],
	"./examples/examples/examples.module": [
		"./src/app/examples/examples/examples.module.ts",
		"examples-examples-examples-module"
	],
	"./examples/forms/forms.module": [
		"./src/app/examples/forms/forms.module.ts",
		"examples-forms-forms-module"
	],
	"./examples/maps/maps.module": [
		"./src/app/examples/maps/maps.module.ts",
		"examples-maps-maps-module"
	],
	"./examples/tables/tables.module": [
		"./src/app/examples/tables/tables.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-user-user-module~examples-tables-tables-module",
		"examples-tables-tables-module"
	],
	"./examples/widgets/widgets.module": [
		"./src/app/examples/widgets/widgets.module.ts",
		"default~core-admin-admin-module~examples-charts-charts-module~examples-dashboards-dashboards-module~~33d563e1",
		"default~examples-calendar-calendar-module~examples-widgets-widgets-module",
		"examples-widgets-widgets-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _examples_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/presentation/presentation.component */ "./src/app/examples/presentation/presentation.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'presentation',
        component: _examples_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__["PresentationComponent"]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
        children: [
            {
                path: 'admin',
                loadChildren: './core/admin/admin.module#AdminModule'
            },
            {
                path: 'user',
                loadChildren: './core/user/user.module#UserModule'
            },
            {
                path: 'global',
                loadChildren: './core/global/global.module#GlobalModule'
            },
            // Example
            {
                path: 'dashboards',
                loadChildren: './examples/dashboards/dashboards.module#DashboardsModule'
            },
            {
                path: 'components',
                loadChildren: './examples/components/components.module#ComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './examples/forms/forms.module#FormsModules'
            },
            {
                path: 'tables',
                loadChildren: './examples/tables/tables.module#TablesModule'
            },
            {
                path: 'maps',
                loadChildren: './examples/maps/maps.module#MapsModule'
            },
            {
                path: 'widgets',
                loadChildren: './examples/widgets/widgets.module#WidgetsModule'
            },
            {
                path: 'charts',
                loadChildren: './examples/charts/charts.module#ChartsModule'
            },
            {
                path: 'calendar',
                loadChildren: './examples/calendar/calendar.module#CalendarModule'
            },
            {
                path: 'examples',
                loadChildren: './examples/examples/examples.module#ExamplesModule'
            }
        ]
    },
    {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: './auth/auth.module#AuthModule'
            },
            {
                path: 'examples',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true
                }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot(),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
                window.scrollTo(0, 0);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _examples_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/presentation/presentation.module */ "./src/app/examples/presentation/presentation.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_16__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"].forRoot(),
                ngx_chips__WEBPACK_IMPORTED_MODULE_8__["TagInputModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot({
                    closeButton: true,
                    timeOut: 3000,
                    progressBar: true,
                    positionClass: 'toast-top-right'
                }),
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_7__["LeafletModule"],
                _examples_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_13__["PresentationModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"],
            ],
            providers: [
            /* Uncomment this to use interceptor
            {
              provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
            }
            */
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/components/vector-map/vector-map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxVectorMapModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot()
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__["VectorMapComponent1"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__["VectorMapComponent1"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, userService, jwtService, notifyService, element, router) {
        var _this = this;
        this.userService = userService;
        this.jwtService = jwtService;
        this.notifyService = notifyService;
        this.element = element;
        this.router = router;
        this.sidenavOpen = true;
        // Image
        this.imgAvatar = 'assets/img/default/avatar2.png';
        this.user = this.userService.user;
        this.location = location;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Hide loading indicator
                if (window.innerWidth < 1200) {
                    document.body.classList.remove("g-sidenav-pinned");
                    document.body.classList.add("g-sidenav-hidden");
                    _this.sidenavOpen = false;
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log('as: ', this.user);
        this.listTitles = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.navigatePage = function (path) {
        if (path == 'notifications') {
            return this.router.navigate(['/global/notifications']);
        }
        else if (path == 'profile') {
            return this.router.navigate(['/global/profile']);
        }
        else if (path == 'settings') {
            return this.router.navigate(['/global/settings']);
        }
        else if (path == 'home') {
            return this.router.navigate(['/auth/login']);
        }
    };
    NavbarComponent.prototype.successMessage = function () {
        var title = 'Success';
        var message = 'Loging in right now';
        this.notifyService.openToastr(title, message);
    };
    NavbarComponent.prototype.logout = function () {
        this.jwtService.destroyToken();
        this.navigatePage('home');
    };
    NavbarComponent.prototype.openSearch = function () {
        document.body.classList.add("g-navbar-search-showing");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-showing");
            document.body.classList.add("g-navbar-search-show");
        }, 150);
        setTimeout(function () {
            document.body.classList.add("g-navbar-search-shown");
        }, 300);
    };
    NavbarComponent.prototype.closeSearch = function () {
        document.body.classList.remove("g-navbar-search-shown");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-show");
            document.body.classList.add("g-navbar-search-hiding");
        }, 150);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hiding");
            document.body.classList.add("g-navbar-search-hidden");
        }, 300);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hidden");
        }, 500);
    };
    NavbarComponent.prototype.openSidebar = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.prototype.toggleSidenav = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
        { type: src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");





var misc = {
    sidebar_mini_active: true
};
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isCollapsed = true;
        this.imgLogo = 'assets/img/logo/tnb-logo2.png';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.userRole == 1) {
            this.menu = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__["ROUTES"];
        }
        else if (this.authService.userRole == 2) {
            this.menu = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__["ROUTESUSER"];
        }
        this.menuItems = this.menu.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.prototype.onMouseEnterSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.add("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.onMouseLeaveSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.minimizeSidebar = function () {
        var sidenavToggler = document.getElementsByClassName("sidenav-toggler")[0];
        var body = document.getElementsByTagName("body")[0];
        if (body.classList.contains("g-sidenav-pinned")) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove("g-sidenav-pinned");
            body.classList.add("g-sidenav-hidden");
            sidenavToggler.classList.remove("active");
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add("g-sidenav-pinned");
            body.classList.remove("g-sidenav-hidden");
            sidenavToggler.classList.add("active");
            misc.sidebar_mini_active = true;
        }
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #vector-map {\n    min-height: 220px;\n    width: 100%;\n    display: block;\n}\n::ng-deep #vector-map > svg > rect{\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWN0b3ItbWFwL3ZlY3Rvci1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZWN0b3ItbWFwL3ZlY3Rvci1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjdmVjdG9yLW1hcCB7XG4gICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgI3ZlY3Rvci1tYXAgPiBzdmcgPiByZWN0e1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.ts ***!
  \***************************************************************/
/*! exports provided: VectorMapComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapComponent1", function() { return VectorMapComponent1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/dist/js/vectormap-data/world.js */ "./node_modules/devextreme/dist/js/vectormap-data/world.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vector_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector-map.service */ "./src/app/components/vector-map/vector-map.service.ts");




var VectorMapComponent1 = /** @class */ (function () {
    function VectorMapComponent1(service) {
        this.worldMap = devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__["world"];
        this.countries = service.getCountries();
        this.customizeTooltip = this.customizeTooltip.bind(this);
        this.customizeLayers = this.customizeLayers.bind(this);
        this.click = this.click.bind(this);
    }
    VectorMapComponent1.prototype.customizeTooltip = function (arg) {
        var name = arg.attribute("name");
        return {
            text: name,
            color: "#FFFFFF",
            fontColor: "#000"
        };
    };
    VectorMapComponent1.prototype.customizeLayers = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            var country = _this.countries[element.attribute("name")];
            if (country) {
                element.applySettings({
                    color: country.color,
                    hoveredColor: country.color,
                    selectedColor: country.color
                });
            }
            else {
                element.applySettings({
                    color: "#e4e4e4",
                    hoveredColor: "#e4e4e4",
                    selectedColor: "#e4e4e4"
                });
            }
        });
    };
    VectorMapComponent1.prototype.click = function (e) {
        var target = e.target;
        if (target && this.countries[target.attribute("name")]) {
            target.selected(!target.selected());
        }
    };
    VectorMapComponent1.ctorParameters = function () { return [
        { type: _vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"] }
    ]; };
    VectorMapComponent1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-vector-map-component",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vector-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html")).default,
            providers: [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vector-map.component.css */ "./src/app/components/vector-map/vector-map.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], VectorMapComponent1);
    return VectorMapComponent1;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.service.ts ***!
  \*************************************************************/
/*! exports provided: Country, Countries, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");



var popScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])()
    .domain([100, 3000])
    .range(["#AAAAAA", "#444444"]);
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

var Countries = /** @class */ (function () {
    function Countries() {
    }
    return Countries;
}());

var countries = {
    Russia: { color: popScale(300) },
    Canada: { color: popScale(120) },
    China: { color: popScale(1300) },
    "United States": { color: popScale(2920) },
    Brazil: { color: popScale(550) },
    Australia: { color: popScale(760) },
    India: { color: popScale(200) },
    Argentina: { color: popScale(240) },
    Romania: { color: popScale(600) },
    Algeria: { color: popScale(540) }
};
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getCountries = function () {
        return countries;
    };
    Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/examples/presentation/presentation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn .badge-floating.badge:not(.badge-circle) {\n  -webkit-transform: translate(-30%, 50%);\n          transform: translate(-30%, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL1BOL2NoYXRib3Qvd2ViL3NyYy9hcHAvZXhhbXBsZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhhbXBsZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNFLHVDQUFBO1VBQUEsK0JBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gQmFkZ2UgZmxvYXRpbmdcbi8vXG5cbi5idG4ge1xuICAuYmFkZ2UtZmxvYXRpbmcge1xuICAgICYuYmFkZ2U6bm90KC5iYWRnZS1jaXJjbGUpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsIDUwJSk7XG4gICAgfVxuICB9XG59XG4iLCIuYnRuIC5iYWRnZS1mbG9hdGluZy5iYWRnZTpub3QoLmJhZGdlLWNpcmNsZSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCA1MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/examples/presentation/presentation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.component.ts ***!
  \*****************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
        this.test = new Date();
        this.isCollapsed = true;
    }
    PresentationComponent.prototype.ngOnInit = function () { };
    PresentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-presentation",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/presentation/presentation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presentation.component.scss */ "./src/app/examples/presentation/presentation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/examples/presentation/presentation.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.module.ts ***!
  \**************************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation.component */ "./src/app/examples/presentation/presentation.component.ts");








var PresentationModule = /** @class */ (function () {
    function PresentationModule() {
    }
    PresentationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot()]
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    }
    AdminLayoutComponent.prototype.isMobile = function (event) {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "isMobile", null);
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var html = document.getElementsByTagName("html")[0];
        // html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        // var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        // navbar.classList.add("navbar-light");
        // navbar.classList.add("navbar-transparent");
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        // html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
        // var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        // navbar.classList.remove("navbar-light");
        // navbar.classList.remove("navbar-transparent");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/handler/jwt/jwt.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/handler/jwt/jwt.service.ts ***!
  \***************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function (title) {
        return window.localStorage[title];
    };
    JwtService.prototype.saveToken = function (title, token) {
        window.localStorage[title] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.clear();
    };
    JwtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/shared/handler/notify/notify.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/handler/notify/notify.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");



var NotifyService = /** @class */ (function () {
    function NotifyService(toastr) {
        this.toastr = toastr;
    }
    NotifyService.prototype.openToastrConnection = function () {
        var title = 'Error';
        var message = 'No connection';
        this.toastr.info(message, title);
    };
    NotifyService.prototype.openToastrHttp = function (title, message) {
        this.toastr.warning(message, title);
    };
    NotifyService.prototype.openToastr = function (title, message) {
        this.toastr.success(message, title);
    };
    NotifyService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/shared/menu/menu-items.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/menu/menu-items.ts ***!
  \*******************************************/
/*! exports provided: ROUTES, ROUTESUSER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTESUSER", function() { return ROUTESUSER; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Menu Items
var ROUTES = [
    {
        path: '/admin/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'fas fa-home text-black'
    },
    {
        path: '/admin/management',
        title: 'Management',
        type: 'sub',
        icontype: 'fas fa-file-invoice text-black',
        collapse: 'management',
        isCollapsed: true,
        children: [
            { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
            { path: 'user', title: 'User', type: 'link' }
        ]
    },
    {
        path: '/admin/report',
        title: 'Reporting',
        type: 'link',
        icontype: 'fas fa-chart-bar text-black'
    },
];
var ROUTESUSER = [
    {
        path: '/user/myaccount',
        title: 'My Account',
        type: 'link',
        icontype: 'fas fa-user text-black'
    },
    {
        path: '/Bills',
        title: 'Bills',
        type: 'link',
        icontype: 'fas fa-file-invoice text-black'
    },
    {
        path: '/helpdesk',
        title: 'Helpdesk',
        type: 'link',
        icontype: 'fas fa-life-ring text-black'
    },
    {
        path: '/user/faq',
        title: 'Frequently Asked Questions (FAQ)',
        type: 'link',
        icontype: 'fas fa-question-circle text-black'
    } /*,
    {
      path: '/maintenance',
      title: 'Maintenance',
      type: 'link',
      icontype: 'fas fa-cogs text-orange'
    }*/
    /*{
      path: '/settings',
      title: 'Settings',
      type: 'link',
      icontype: 'fas fa-sliders-h text-blue'
    }*/
];


/***/ }),

/***/ "./src/app/shared/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm5/auth0-angular-jwt.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(jwtService, http) {
        this.jwtService = jwtService;
        this.http = http;
        // URL
        this.urlRegister = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/registration/';
        this.urlPasswordChange = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/password/change/';
        this.urlPasswordReset = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/password/reset';
        this.urlTokenObtain = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/obtain/';
        this.urlTokenRefresh = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/refresh/';
        this.urlTokenVerify = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/verify/';
        this.urlUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/users/';
        this.userRole = 2;
        this.retrievedUsers = [];
    }
    AuthService.prototype.register = function (body) {
        return this.http.post(this.urlRegister, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log('Registration: ', res);
        }));
    };
    AuthService.prototype.changePassword = function (body) {
        return this.http.post(this.urlPasswordChange, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log('Change password: ', res);
        }));
    };
    AuthService.prototype.resetPassword = function (body) {
        return this.http.post(this.urlPasswordReset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log('Reset password: ', res);
        }));
    };
    AuthService.prototype.obtainToken = function (body) {
        var _this = this;
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        return this.http.post(this.urlTokenObtain, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.token = res;
            _this.tokenRefresh = res.refresh;
            _this.tokenAccess = res.access;
            var decodedToken = jwtHelper.decodeToken(_this.tokenAccess);
            _this.email = decodedToken.email;
            _this.username = decodedToken.username;
            _this.userID = decodedToken.user_id;
            _this.userType = decodedToken.user_type;
            // console.log('Decoded token: ', decodedToken)
            // console.log('Post response: ', res)
            // console.log('Refresh token', this.tokenRefresh)
            // console.log('Access token', this.tokenAccess)
            // console.log('Token: ', this.token)
            // console.log('Email: ', this.email)
            // console.log('Username: ', this.username)
            // console.log('User ID: ', this.userID)
            // console.log('User type: ', this.userType)
            _this.jwtService.saveToken('accessToken', _this.tokenAccess);
            _this.jwtService.saveToken('refreshToken', _this.tokenRefresh);
        }));
    };
    AuthService.prototype.refreshToken = function () {
        var refreshToken = this.jwtService.getToken('refreshToken');
        var body = {
            refresh: refreshToken
        };
        return this.http.post(this.urlTokenRefresh, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log('Token refresh: ', res);
        }));
    };
    AuthService.prototype.verifyToken = function (body) {
        return this.http.post(this.urlTokenVerify, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log('Token verify: ', res);
        }));
    };
    AuthService.prototype.getUserDetail = function () {
        var _this = this;
        console.log('getuserdetail');
        var selfInformationUrl = this.urlUser + this.userID + '/';
        return this.http.get(selfInformationUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.userDetail = res;
            // console.log('User detail', this.userDetail)
        }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/users/users.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/users/users.service.ts ***!
  \********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        // URL
        this.urlUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/users/';
        this.users = [];
        this.usersFiltered = [];
    }
    UsersService.prototype.create = function (body) {
        return this.http.post(this.urlUser, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('User: ', res);
        }));
    };
    UsersService.prototype.getAll = function () {
        return this.http.get(this.urlUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Users: ', res);
        }));
    };
    UsersService.prototype.getOne = function (id) {
        var urlUserOne = this.urlUser + id + '/';
        return this.http.get(urlUserOne).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('User: ', res);
        }));
    };
    UsersService.prototype.update = function (id, body) {
        var urlUserOne = this.urlUser + id + '/';
        return this.http.put(urlUserOne, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('User', res);
        }));
    };
    UsersService.prototype.filter = function (field) {
        var urlFilter = this.urlUser + '?' + field + '/';
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Users', res);
        }));
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UsersService);
    return UsersService;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    baseUrl: 'https://www.api.prototype.com.my/',
    mapbox: {
        accessToken: 'pk.eyJ1IjoiYWZlZXpheml6IiwiYSI6ImNqNjJ6anlhYzA0bTczM3FvYnppbDh4eTEifQ.AdDRr42bNfNJvQENLrE6eg' // Your access token goes here
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Argon Dashboard PRO Angular - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/farrahzelyna/Documents/PN/chatbot/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map