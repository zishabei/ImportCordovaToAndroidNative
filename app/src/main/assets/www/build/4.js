webpackJsonp([4],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldPageModule", function() { return HelloWorldPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hello_world__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelloWorldPageModule = /** @class */ (function () {
    function HelloWorldPageModule() {
    }
    HelloWorldPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hello_world__["a" /* HelloWorldPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hello_world__["a" /* HelloWorldPage */]),
            ],
        })
    ], HelloWorldPageModule);
    return HelloWorldPageModule;
}());

//# sourceMappingURL=hello-world.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloWorldPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ENV__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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


////
// NOTE:  normally you will simply import from "cordova-background-geolocation-lt" or "cordova-background-geolocation"
// from "../../cordova-background-geolocation" is only fro convenience in the SampleApp for easily switching
// between public / private version of the plugin
//


var HelloWorldPage = /** @class */ (function () {
    function HelloWorldPage(navCtrl, navParams, platform, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.zone = zone;
        this.isMoving = false;
        this.enabled = false;
        this.events = [];
        // Listen for deviceready to configure BackgroundGeolocation
        this.platform.ready().then(this.onDeviceReady.bind(this));
    }
    HelloWorldPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelloWorldPage');
    };
    HelloWorldPage.prototype.onDeviceReady = function () {
        this.configureBackgroundGeolocation();
    };
    HelloWorldPage.prototype.configureBackgroundGeolocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var localStorage, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage = window.localStorage;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].findOrCreateTransistorAuthorizationToken(localStorage.getItem('orgname'), localStorage.getItem('username'), __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST)];
                    case 1:
                        token = _a.sent();
                        // Step 1:  Listen to events
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onLocation(this.onLocation.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onMotionChange(this.onMotionChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onActivityChange(this.onActivityChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onHttp(this.onHttpSuccess.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onProviderChange(this.onProviderChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onPowerSaveChange(this.onPowerSaveChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onConnectivityChange(this.onConnectivityChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onAuthorization(this.onAuthorization.bind(this));
                        // Step 2:  Configure the plugin
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].ready({
                            reset: true,
                            debug: true,
                            logLevel: __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].LOG_LEVEL_VERBOSE,
                            distanceFilter: 10,
                            stopTimeout: 1,
                            stopOnTerminate: false,
                            startOnBoot: true,
                            url: __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST + '/api/locations',
                            // [Android] backgroundPermissionRationale for Always permission.
                            backgroundPermissionRationale: {
                                title: "Allow {applicationName} to access this device's location even when closed or not in use.",
                                message: "This app collects location data to enable recording your trips to work and calculate distance-travelled.",
                                positiveAction: 'Change to "{backgroundPermissionOptionLabel}"',
                                negativeAction: 'Cancel'
                            },
                            authorization: {
                                strategy: 'jwt',
                                accessToken: token.accessToken,
                                refreshToken: token.refreshToken,
                                refreshUrl: __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST + '/api/refresh_token',
                                refreshPayload: {
                                    refresh_token: '{refreshToken}'
                                },
                                expires: token.expires
                            },
                            autoSync: true
                        }, function (state) {
                            console.log('- Configure success: ', state);
                            // Update UI state (toggle switch, changePace button)
                            _this.zone.run(function () {
                                _this.isMoving = state.isMoving;
                                _this.enabled = state.enabled;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Return to Home screen (app switcher)
    HelloWorldPage.prototype.onClickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    // #start / #stop tracking
    HelloWorldPage.prototype.onToggleEnabled = function () {
        if (this.enabled) {
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].start();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].stop();
        }
    };
    // Fetch the current position
    HelloWorldPage.prototype.onClickGetCurrentPosition = function () {
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getCurrentPosition({ persist: true }, function (location) {
            console.log('- getCurrentPosition: ', location);
        }, function (error) {
            console.warn('- Location error: ', error);
        });
    };
    // Change plugin state between stationary / tracking
    HelloWorldPage.prototype.onClickChangePace = function () {
        this.isMoving = !this.isMoving;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].changePace(this.isMoving);
    };
    // Clear the list of events from ion-list
    HelloWorldPage.prototype.onClickClear = function () {
        this.events = [];
    };
    /**
    * @event location
    */
    HelloWorldPage.prototype.onLocation = function (location) {
        var _this = this;
        console.log('[event] location: ', location);
        var event = location.event || 'location';
        this.zone.run(function () {
            _this.addEvent(event, new Date(location.timestamp), location);
        });
    };
    /**
    * @event motionchange
    */
    HelloWorldPage.prototype.onMotionChange = function (event) {
        var _this = this;
        console.log('[event] motionchange, isMoving: ', event.isMoving, ', location: ', event.location);
        this.zone.run(function () {
            _this.isMoving = event.isMoving;
        });
    };
    /**
    * @event activitychange
    */
    HelloWorldPage.prototype.onActivityChange = function (event) {
        var _this = this;
        console.log('[event] activitychange: ', event);
        this.zone.run(function () {
            _this.addEvent('activitychange', new Date(), event);
        });
    };
    /**
    * @event http
    */
    HelloWorldPage.prototype.onHttpSuccess = function (response) {
        var _this = this;
        console.log('[event] http: ', response);
        this.zone.run(function () {
            _this.addEvent('http', new Date(), response);
        });
    };
    HelloWorldPage.prototype.onHttpFailure = function (response) {
        var _this = this;
        console.warn('[event] http failure: ', response);
        this.zone.run(function () {
            _this.addEvent('http failure', new Date(), response);
        });
    };
    /**
    * @event providerchange
    */
    HelloWorldPage.prototype.onProviderChange = function (provider) {
        var _this = this;
        console.log('[event] providerchange', provider);
        this.zone.run(function () {
            _this.addEvent('providerchange', new Date(), provider);
        });
    };
    /**
    * @event powersavechange
    */
    HelloWorldPage.prototype.onPowerSaveChange = function (isPowerSaveEnabled) {
        var _this = this;
        console.log('[event] powersavechange', isPowerSaveEnabled);
        this.zone.run(function () {
            _this.addEvent('powersavechange', new Date(), { isPowerSaveEnabled: isPowerSaveEnabled });
        });
    };
    /**
    * @event connectivitychange
    */
    HelloWorldPage.prototype.onConnectivityChange = function (event) {
        console.log('[event] connectivitychange connected? ', event.connected);
    };
    /**
    * @event authorization
    */
    HelloWorldPage.prototype.onAuthorization = function (event) {
        console.log('[event] authorization: ', event);
    };
    /**
    * Add a record to ion-list
    * @param {String} event name
    * @param {Date} date
    * @param {Object} event object, eg: {location}, {provider}, {activity}
    */
    HelloWorldPage.prototype.addEvent = function (name, date, event) {
        var timestamp = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        this.events.unshift({
            name: name,
            timestamp: timestamp,
            object: event,
            content: JSON.stringify(event, null, 2)
        });
    };
    HelloWorldPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-world',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\hello-world\hello-world.html"*/'<!--\n  Generated template for the HelloWorldPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar mode="ios" color="gold">\n  	<ion-buttons start>\n  		<button ion-button (click)="onClickHome()" color="primary">Home</button>\n  	</ion-buttons>\n    <ion-title mode="ios">\n      BG Geolocation Demo\n    </ion-title>\n    <ion-buttons end>\n    	<ion-toggle [(ngModel)]="enabled" (ionChange)="onToggleEnabled()" style="display:block;"></ion-toggle>\n    </ion-buttons>\n  </ion-navbar>  \n\n</ion-header>\n\n\n<ion-content>\n	<ion-list>\n  		<ion-item *ngFor="let event of events">\n  			<ion-row>\n  				<ion-col align-self-stretch><p class="title"><strong>[event]&nbsp;{{ event.name }}</strong></p></ion-col>\n    			<ion-col align-self-end><p class="timestamp">{{event.timestamp}}</p></ion-col>\n			</ion-row>\n    		<pre><code>{{ event.content}}</code></pre>\n  		</ion-item>\n	</ion-list>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar mode="ios" color="gold">\n		<ion-buttons start>\n			<button ion-button solid (click)="onClickGetCurrentPosition()" color="primary" style="width:50px">\n				<ion-icon name="md-navigate" color=""></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title mode="ios">\n			<ion-buttons>\n				<button ion-button outline (click)="onClickClear()" color="danger" style="width:75px">Clear</button>\n			</ion-buttons>\n		</ion-title>\n		<ion-buttons end>\n			<button ion-button solid (click)="onClickChangePace()" style="width:50px" color="{{isMoving ? \'danger\' : \'secondary\'}}">\n				<ion-icon name="{{isMoving ? \'pause\' : \'play\'}}"></ion-icon>\n			</button>\n		</ion-buttons>\n\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\hello-world\hello-world.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HelloWorldPage);
    return HelloWorldPage;
}());

//# sourceMappingURL=hello-world.js.map

/***/ })

});
//# sourceMappingURL=4.js.map