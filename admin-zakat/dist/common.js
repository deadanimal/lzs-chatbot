(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ngx-freshchat/__ivy_ngcc__/fesm5/ngx-freshchat.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-freshchat/__ivy_ngcc__/fesm5/ngx-freshchat.js ***!
  \************************************************************************/
/*! exports provided: NgxFreshChatModule, NgxFreshChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFreshChatModule", function() { return NgxFreshChatModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFreshChatService", function() { return NgxFreshChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var NgxFreshChatService = /** @class */ (function () {
    function NgxFreshChatService() {
    }
    /**
     * Initializes the Freshchat Widget.
     * @param data The Freshchat init object.
     * @returns An Observable which emits when the widget has loaded.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.init = function (data) {
        var _this = this;
        return this.loadScript('https://wchat.freshchat.com/js/widget.js')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (res) { return _this.initWidget(data); }));
    };
    NgxFreshChatService.prototype.initWidget = function (data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getWidget().on('widget:loaded', function (res) { return observer.next(res); });
            _this.getWidget().init(data);
        });
    };
    /**
     * Used to capture the user creation event. This can be used to save the restoreID.
     * @returns An Observable which emits when a user is created.
     * @author Will Poulson
     */
    NgxFreshChatService.prototype.onUserCreate = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getWidget().on('user:created', function (res) {
                if (res.status !== 200) {
                    observer.error(res.status);
                }
                else {
                    observer.next(res.data || null);
                }
            });
        });
    };
    /**
     * Gets the current Freshchat user.
     * @returns An Observable which emits the current user.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.getUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getWidget().user.get(function (res) {
                if (res.status !== 200) {
                    observer.error(res.status);
                }
                else {
                    observer.next(res.data);
                }
            });
        });
    };
    /**
     * Sets the current Freshchat users properties
     * @param user The new properties for the user.
     * @returns An Observable which emits after the user has been updated.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.setUserProperties = function (user) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getWidget().user.setProperties(user, function (res) {
                if (res.status !== 200) {
                    observer.error(res.status);
                }
                else {
                    observer.next(res.data || null);
                }
            });
        });
    };
    /**
     * Updates the current Freshchat user.
     * @param user The new properties to update the user with.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.updateUser = function (user) {
        this.getWidget().user.update(user);
    };
    /**
     * Clears the current Freshchat user.
     * @returns An Observable which emits when the user has been cleared.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.clearUser = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.getWidget().user.clear(function (res) {
                if (res.status !== 200) {
                    observer.error(res.status);
                }
                else {
                    observer.next(res.data || null);
                }
            });
        });
    };
    /**
     * Checks whether the Freshchat Widget is open.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.isOpen = function () {
        return this.getWidget().isOpen();
    };
    /**
     * Opens the Freshchat Widget.
     *
     * @param payload Optional - parameters including channel id or name.
     * The replyText parameter can be used to set up custom text in the text area of the widget.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.open = function (payload) {
        this.getWidget().open(payload);
    };
    /**
     * Closes the Freshchat Widget.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.close = function () {
        this.getWidget().close();
    };
    /**
     * Tracks an event against the current user.
     * @param eventName The event name to track.
     * @param payload Optional - The payload to pass to the event.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.track = function (eventName, payload) {
        this.getWidget().track(eventName, payload);
    };
    /**
     * Sets the tags against the current user
     * @param tags An array of tags to set.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.setTags = function (tags) {
        this.getWidget().setTags(tags);
    };
    /**
     * Sets the locale for the current user
     * @param locale The locale.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.setLocale = function (locale) {
        this.getWidget().setLocale(locale);
    };
    /**
     * Destroys the current Freshchat widget.
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.destroy = function () {
        this.getWidget().destroy();
    };
    /**
     * Checks if the widget has been initialized
     * @returns A boolean of if the widget has been initialized
     * @author beyondsanity
     */
    NgxFreshChatService.prototype.isInitialized = function () {
        return this.getWidget().isInitialized();
    };
    NgxFreshChatService.prototype.getWidget = function () {
        return window.fcWidget;
    };
    NgxFreshChatService.prototype.loadScript = function (src) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript';
            scriptElement.src = src;
            scriptElement.onload = function () {
                observer.next(src);
                observer.complete();
            };
            scriptElement.onerror = function () { return observer.error('Couldn\'t load ' + src); };
            document.getElementsByTagName('body')[0].appendChild(scriptElement);
        });
    };
    NgxFreshChatService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxFreshChatService_Factory() { return new NgxFreshChatService(); }, token: NgxFreshChatService, providedIn: "root" });
    NgxFreshChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NgxFreshChatService);
NgxFreshChatService.ɵfac = function NgxFreshChatService_Factory(t) { return new (t || NgxFreshChatService)(); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxFreshChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
    return NgxFreshChatService;
}());

var NgxFreshChatModule = /** @class */ (function () {
    function NgxFreshChatModule() {
    }
NgxFreshChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxFreshChatModule });
NgxFreshChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxFreshChatModule_Factory(t) { return new (t || NgxFreshChatModule)(); }, providers: [NgxFreshChatService], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxFreshChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [],
                providers: [NgxFreshChatService],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
    return NgxFreshChatModule;
}());

/*
 * Public API Surface of ngx-freshchat-lib
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-freshchat.js.map

/***/ })

}]);
//# sourceMappingURL=common.js.map