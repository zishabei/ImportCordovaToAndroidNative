webpackJsonp([8],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/advanced/advanced.module": [
		272,
		0
	],
	"../pages/advanced/modals/about/about.module": [
		273,
		7
	],
	"../pages/advanced/modals/geofence/geofence.module": [
		274,
		6
	],
	"../pages/advanced/modals/settings/settings.module": [
		276,
		5
	],
	"../pages/hello-world/hello-world.module": [
		275,
		4
	],
	"../pages/home/home.module": [
		278,
		3
	],
	"../pages/home/registration/registration.module": [
		277,
		2
	],
	"../pages/simple-map/simple-map.module": [
		279,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cordova_background_geolocation_lt__ = __webpack_require__(253);
/**
* This is just a helper for including the plugin from either the public npm version or the latest
* release from private version (customers only)
*/
 // <-- Use "cordova-background-geolocation" for customers-only version
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_cordova_background_geolocation_lt__["a" /* default */]);
//# sourceMappingURL=cordova-background-geolocation.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ENV = {
    TRACKER_HOST: 'http://tracker.transistorsoft.com'
};
/* harmony default export */ __webpack_exports__["a"] = (ENV);
//# sourceMappingURL=ENV.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerTransistor */
/* harmony export (immutable) */ __webpack_exports__["a"] = registerTransistorAuthorizationListener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ENV__ = __webpack_require__(194);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};


var onHttp;
function registerTransistor() {
    return __awaiter(this, void 0, void 0, function () {
        var localStorage, orgname, username, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    localStorage = window.localStorage;
                    orgname = localStorage.getItem('orgname');
                    username = localStorage.getItem('username');
                    if (orgname == null || username == null) {
                        this.navCtrl.setRoot('HomePage');
                        return [2 /*return*/, {
                                accessToken: "DUMMY_TOKEN",
                                refreshToken: "DUMMY_TOKEN",
                                expires: -1,
                                url: ''
                            }];
                    }
                    return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__["a" /* default */].findOrCreateTransistorAuthorizationToken(orgname, username, __WEBPACK_IMPORTED_MODULE_1__ENV__["a" /* default */].TRACKER_HOST)];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__["a" /* default */].setConfig({
                            transistorAuthorizationToken: token
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, token];
            }
        });
    });
}
function registerTransistorAuthorizationListener(navCtrl) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('[registerTransistorAuthorizationListener]');
                    if (!(typeof (onHttp) === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__["a" /* default */].removeListener('http', onHttp)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    onHttp = function onHttp(event) {
                        return __awaiter(this, void 0, void 0, function () {
                            var _a, token, localStorage_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = event.status;
                                        switch (_a) {
                                            case 403: return [3 /*break*/, 1];
                                            case 406: return [3 /*break*/, 1];
                                            case 410: return [3 /*break*/, 6];
                                        }
                                        return [3 /*break*/, 7];
                                    case 1: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__["a" /* default */].destroyTransistorAuthorizationToken(__WEBPACK_IMPORTED_MODULE_1__ENV__["a" /* default */].TRACKER_HOST)];
                                    case 2:
                                        _b.sent();
                                        return [4 /*yield*/, registerTransistor()];
                                    case 3:
                                        token = _b.sent();
                                        if (!(token.accessToken !== 'DUMMY_TOKEN')) return [3 /*break*/, 5];
                                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__["a" /* default */].setConfig({
                                                transistorAuthorizationToken: token
                                            })];
                                    case 4:
                                        _b.sent();
                                        __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__["a" /* default */].sync();
                                        _b.label = 5;
                                    case 5: return [3 /*break*/, 7];
                                    case 6:
                                        localStorage_1 = window.localStorage;
                                        localStorage_1.removeItem('username');
                                        navCtrl.setRoot('HomePage');
                                        return [3 /*break*/, 7];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        });
                    };
                    __WEBPACK_IMPORTED_MODULE_0__cordova_background_geolocation__["a" /* default */].onHttp(onHttp);
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=authorization.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_dialogs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/advanced/advanced.module#AdvancedPageModule', name: 'AdvancedPage', segment: 'advanced', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advanced/modals/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advanced/modals/geofence/geofence.module#GeofencePageModule', name: 'GeofencePage', segment: 'geofence', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hello-world/hello-world.module#HelloWorldPageModule', name: 'HelloWorldPage', segment: 'hello-world', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advanced/modals/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simple-map/simple-map.module#SimpleMapPageModule', name: 'SimpleMapPage', segment: 'simple-map', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_dialogs__["a" /* Dialogs */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_authorization__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Determine initial Root page (ie: which app to launch -- HelloWorld, AdvancedApp, SimpleMap or Home)
var localStorage = window.localStorage;
var orgname = localStorage.getItem('orgname');
var username = localStorage.getItem('username');
var isRegistered = (orgname && username);
var root = (isRegistered) ? localStorage.getItem('page') : 'HomePage';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = root || 'HomePage';
        this.platform = platform;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            // Dark statusbar for Android
            if (platform.is('android')) {
                statusBar.overlaysWebView(false);
                statusBar.backgroundColorByHexString('#272727');
            }
            splashScreen.hide();
        });
    }
    // Wait for the components in MyApp's template to be initialized
    // In this case, we are waiting for the Nav with reference variable of "#myNav"
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Handle authorization failures from tracker.transistorsoft.com Demo server.
            Object(__WEBPACK_IMPORTED_MODULE_4__lib_authorization__["a" /* registerTransistorAuthorizationListener */])(_this.nav);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('rootNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\app\app.html"*/'<ion-nav #rootNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map