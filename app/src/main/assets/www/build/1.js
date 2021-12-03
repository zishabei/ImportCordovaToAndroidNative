webpackJsonp([1],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMapPageModule", function() { return SimpleMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_map__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SimpleMapPageModule = /** @class */ (function () {
    function SimpleMapPageModule() {
    }
    SimpleMapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__simple_map__["a" /* SimpleMapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__simple_map__["a" /* SimpleMapPage */]),
            ],
        })
    ], SimpleMapPageModule);
    return SimpleMapPageModule;
}());

//# sourceMappingURL=simple-map.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Colors
var COLORS = {
    gold: '#fedd1e',
    white: "#fff",
    blue: "#2677FF",
    light_blue: "#3366cc",
    polyline_color: "#00B3FD",
    green: "#16BE42",
    dark_purple: "#2A0A73",
    grey: "#404040",
    red: "#FE381E",
    dark_red: "#A71300",
    black: "#000"
};
/* harmony default export */ __webpack_exports__["a"] = (COLORS);
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ENV__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_dialogs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_colors__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_sound_map__ = __webpack_require__(295);
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


// Cordova plugins Device & Dialogs

// Handy color & sound constants.


var SimpleMapPage = /** @class */ (function () {
    function SimpleMapPage(navCtrl, navParams, toastCtrl, alertCtrl, loadingCtrl, zone, platform, dialogs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.platform = platform;
        this.dialogs = dialogs;
        this.platform.ready().then(this.onDeviceReady.bind(this));
        this.state = {};
        // BackgroundGeolocation initial config.
        this.isMoving = false;
        this.enabled = false;
        this.autoSync = true;
        this.distanceFilter = 10;
        this.stopTimeout = 1;
        this.stopOnTerminate = false;
        this.startOnBoot = true;
        this.debug = true;
        // UI members.
        this.motionActivity = 'Activity';
        this.menuActive = false;
    }
    SimpleMapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.configureMap();
    };
    SimpleMapPage.prototype.onDeviceReady = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getDeviceInfo().then(function (deviceInfo) {
            _this.deviceInfo = deviceInfo;
        });
        // We prompt you for a unique identifier in order to post locations tracker.transistorsoft.com
        this.configureBackgroundGeolocation();
    };
    SimpleMapPage.prototype.configureBackgroundGeolocation = function () {
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
                        ////
                        // Step 1:  listen to events
                        //
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onLocation(this.onLocation.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onMotionChange(this.onMotionChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onActivityChange(this.onActivityChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onHttp(this.onHttpSuccess.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onProviderChange(this.onProviderChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onHeartbeat(this.onHeartbeat.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onPowerSaveChange(this.onPowerSaveChange.bind(this));
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].onConnectivityChange(this.onConnectivityChange.bind(this));
                        ////
                        // Step 2:  Initialize the plugin
                        //
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].ready({
                            // Logging / Debug config
                            debug: this.debug,
                            logLevel: __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].LOG_LEVEL_VERBOSE,
                            // Geolocation config
                            desiredAccuracy: __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].DESIRED_ACCURACY_HIGH,
                            distanceFilter: this.distanceFilter,
                            // ActivityRecognition config
                            stopTimeout: this.stopTimeout,
                            // Application config
                            stopOnTerminate: this.stopOnTerminate,
                            startOnBoot: this.startOnBoot,
                            heartbeatInterval: 60,
                            // [Android] backgroundPermissionRationale for Always permission.
                            backgroundPermissionRationale: {
                                title: "Allow {applicationName} to access this device's location even when closed or not in use.",
                                message: "This app collects location data to enable recording your trips to work and calculate distance-travelled.",
                                positiveAction: 'Change to "{backgroundPermissionOptionLabel}"',
                                negativeAction: 'Cancel'
                            },
                            // HTTP / Persistence config
                            url: __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST + '/api/locations',
                            authorization: {
                                strategy: 'JWT',
                                accessToken: token.accessToken,
                                refreshToken: token.refreshToken,
                                refreshUrl: __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST + '/api/refresh_token',
                                refreshPayload: {
                                    refresh_token: '{refreshToken}'
                                },
                                expires: token.expires
                            },
                            autoSync: this.autoSync,
                            autoSyncThreshold: 0
                        }, function (state) {
                            console.log('- BackgroundGeolocation ready: ', state);
                            // Set current plugin state upon our view.
                            _this.zone.run(function () {
                                _this.enabled = state.enabled;
                                _this.isMoving = state.isMoving;
                                _this.autoSync = state.autoSync;
                                _this.distanceFilter = state.distanceFilter;
                                _this.stopTimeout = state.stopTimeout;
                                _this.stopOnTerminate = state.stopOnTerminate;
                                _this.startOnBoot = state.startOnBoot;
                                _this.debug = state.debug;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * @event location
    */
    SimpleMapPage.prototype.onLocation = function (location) {
        var _this = this;
        console.log('[event] location ', location);
        this.zone.run(function () {
            _this.odometer = (location.odometer / 1000).toFixed(1) + 'km';
        });
        this.updateCurrentLocationMarker(location);
    };
    /**
    * @event motionchange
    */
    SimpleMapPage.prototype.onMotionChange = function (event) {
        var _this = this;
        console.log('[event] motionchange, isMoving: ', event.isMoving, event.location);
        this.zone.run(function () {
            _this.isMoving = event.isMoving;
        });
        // Show / hide the big, red stationary radius circle
        if (!event.isMoving) {
            var coords = event.location.coords;
            var radius = 200;
            var center = new google.maps.LatLng(coords.latitude, coords.longitude);
            this.stationaryRadiusCircle.setRadius(radius);
            this.stationaryRadiusCircle.setCenter(center);
            this.stationaryRadiusCircle.setMap(this.map);
            this.map.setCenter(center);
        }
        else if (this.stationaryRadiusCircle) {
            this.stationaryRadiusCircle.setMap(null);
        }
    };
    /**
    * @event activitychange
    */
    SimpleMapPage.prototype.onActivityChange = function (event) {
        var _this = this;
        console.log('[event] activitychange: ', event);
        this.zone.run(function () {
            _this.motionActivity = event.activity + ":" + event.confidence + "%";
        });
    };
    /**
    * @event http
    */
    SimpleMapPage.prototype.onHttpSuccess = function (response) {
        console.log('[event] http: ', response);
    };
    SimpleMapPage.prototype.onHttpFailure = function (response) {
        console.warn('[event] http failure: ', response);
    };
    /**
    * @event heartbeat
    */
    SimpleMapPage.prototype.onHeartbeat = function (event) {
        var location = event.location;
        // NOTE:  this is merely the last *known* location.  It is not the *current* location.  If you want the current location,
        // fetch it yourself with #getCurrentPosition here.
        console.log('- heartbeat: ', location);
    };
    /**
    * @event powersavechange
    */
    SimpleMapPage.prototype.onPowerSaveChange = function (isPowerSaveEnabled) {
        this.dialogs.alert('[event] powersavechnage, Power-save mode enabled? ' + isPowerSaveEnabled);
        console.log('[event] powersavechange, isPowerSaveEnabled: ', isPowerSaveEnabled);
    };
    SimpleMapPage.prototype.onConnectivityChange = function (event) {
        console.log('[event] connectivitychange, connected? ', event.connected);
        this.toast('[event] connectivitychange: Network connected? ', event.connected);
    };
    /**
    * @event providerchange
    */
    SimpleMapPage.prototype.onProviderChange = function (provider) {
        this.provider = provider;
        console.log('[event] providerchange: ', provider);
    };
    SimpleMapPage.prototype.onClickMainMenu = function (item) {
        this.menuActive = !this.menuActive;
        this.playSound((this.menuActive) ? 'OPEN' : 'CLOSE');
    };
    SimpleMapPage.prototype.onClickSync = function () {
        var _this = this;
        this.hasRecords().then(function (count) {
            _this.confirm("Sync " + count + " records to server?").then(_this.doSync.bind(_this));
        });
    };
    SimpleMapPage.prototype.doSync = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].sync(function (records) {
            _this.toast("Synced " + records.length + " records to server.");
            console.log('- #sync success: ', records.length);
        }, function (error) {
            console.warn('- #sync failure: ', error);
        });
    };
    SimpleMapPage.prototype.onClickDestroy = function () {
        var _this = this;
        this.hasRecords().then(function (count) {
            _this.confirm("Destroy " + count + " records?").then(_this.doDestroyLocations.bind(_this));
        }).catch(function () {
            _this.toast('Database is empty');
        });
    };
    SimpleMapPage.prototype.doDestroyLocations = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].destroyLocations(function () {
            _this.toast('Destroyed all records');
            console.log('- #destroyLocations success');
        }, function (error) {
            console.warn('- #destroyLocations error: ', error);
        });
    };
    SimpleMapPage.prototype.hasRecords = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getCount(function (count) {
                if (count > 0) {
                    resolve(count);
                }
                else {
                    _this.toast('Database is empty');
                }
            });
        });
    };
    SimpleMapPage.prototype.onClickEmailLog = function () {
        var _this = this;
        this.getEmail().then(function (email) {
            _this.confirm("Email logs to " + email + "?").then(function () {
                _this.doEmailLog(email);
            }).catch(function () {
                // Clear email from localStorage and redo this action.
                var localStorage = window.localStorage;
                localStorage.removeItem('email');
                _this.onClickEmailLog();
            });
        });
    };
    SimpleMapPage.prototype.doEmailLog = function (email) {
        // Show spinner
        var loader = this.loadingCtrl.create({ content: "Creating log file..." });
        loader.present();
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].emailLog(email, function () {
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
            console.warn('#emailLog error: ', error);
        });
    };
    SimpleMapPage.prototype.onClickDestroyLog = function () {
        this.confirm("Destroy logs?").then(this.doDestroyLog.bind(this));
    };
    SimpleMapPage.prototype.doDestroyLog = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: "Destroying logs..." });
        loader.present();
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].destroyLog(function () {
            loader.dismiss();
            _this.toast('Destroyed logs');
        }, function (error) {
            loader.dismiss();
            _this.toast('Destroy logs failed: ' + error);
        });
    };
    SimpleMapPage.prototype.onSetConfig = function (name) {
        var _this = this;
        if (this.state[name] === this[name]) {
            // No change.  do nothing.
            return;
        }
        // Careful to convert string -> number from <ion-input> fields.
        switch (name) {
            case 'distanceFilter':
            case 'stopTimeout':
                this[name] = parseInt(this[name], 10);
                break;
        }
        // Update state
        this.state[name] = this[name];
        var config = {};
        config[name] = this[name];
        // #setConfig
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].setConfig(config, function (state) {
            _this.toast("#setConfig " + name + ": " + _this[name]);
        });
    };
    /**
    * [Home] button clicked.  Goo back to home page
    */
    SimpleMapPage.prototype.onClickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    /**
    * #start / #stop tracking
    */
    SimpleMapPage.prototype.onToggleEnabled = function () {
        console.log('- enabled: ', this.enabled);
        if (this.enabled) {
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].start(function (state) {
                console.log('- Start success: ', state);
            });
        }
        else {
            this.isMoving = false;
            this.stationaryRadiusCircle.setMap(null);
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].stop(function (state) {
                console.log('- Stop success: ', state);
            });
        }
    };
    /**
    * Toggle moving / stationary state
    */
    SimpleMapPage.prototype.onClickChangePace = function () {
        if (!this.enabled) {
            this.toast('You cannot changePace while plugin is stopped');
            return;
        }
        this.isMoving = !this.isMoving;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].changePace(this.isMoving, function () {
            console.log('- changePace success');
        });
    };
    /**
    * Get the current position
    */
    SimpleMapPage.prototype.onClickGetCurrentPosition = function () {
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getCurrentPosition({}, function (location) {
            console.log('- getCurrentPosition success: ', location);
        });
    };
    /**
    * Configure the google map
    */
    SimpleMapPage.prototype.configureMap = function () {
        /**
        * Configure Google Maps
        */
        this.locationMarkers = [];
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: false,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // Blue current location marker
        this.currentLocationMarker = new google.maps.Marker({
            zIndex: 10,
            map: this.map,
            title: 'Current Location',
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].blue,
                fillOpacity: 1,
                strokeColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].white,
                strokeOpacity: 1,
                strokeWeight: 6
            }
        });
        // Red Stationary Geofence
        this.stationaryRadiusCircle = new google.maps.Circle({
            zIndex: 0,
            fillColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].red,
            strokeColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].red,
            strokeWeight: 1,
            fillOpacity: 0.3,
            strokeOpacity: 0.7,
            map: this.map
        });
        // Route polyline
        this.polyline = new google.maps.Polyline({
            map: this.map,
            zIndex: 1,
            geodesic: true,
            strokeColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].polyline_color,
            strokeOpacity: 0.7,
            strokeWeight: 7,
            icons: [{
                    repeat: '30px',
                    icon: {
                        path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                        scale: 1,
                        fillOpacity: 0,
                        strokeColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].white,
                        strokeWeight: 1,
                        strokeOpacity: 1
                    }
                }]
        });
    };
    /**
    * Update the lat/lng of blue current location marker
    */
    SimpleMapPage.prototype.updateCurrentLocationMarker = function (location) {
        var _this = this;
        var latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        this.currentLocationMarker.setPosition(latlng);
        setTimeout(function () {
            _this.map.setCenter(new google.maps.LatLng(location.coords.latitude, location.coords.longitude));
        });
        if (location.sample === true) {
            return;
        }
        if (this.lastLocation) {
            this.locationMarkers.push(this.buildLocationMarker(location));
        }
        // Add breadcrumb to current Polyline path.
        this.polyline.getPath().push(latlng);
        this.lastLocation = location;
    };
    /**
    * Build a new Google Map location marker with direction icon
    */
    SimpleMapPage.prototype.buildLocationMarker = function (location, options) {
        options = options || {};
        return new google.maps.Marker({
            zIndex: 1,
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                rotation: location.coords.heading,
                scale: 2,
                anchor: new google.maps.Point(0, 2.6),
                fillColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].polyline_color,
                fillOpacity: 1,
                strokeColor: __WEBPACK_IMPORTED_MODULE_5__lib_colors__["a" /* default */].black,
                strokeWeight: 1,
                strokeOpacity: 1
            },
            map: this.map,
            position: new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
        });
    };
    /**
    * Fetch email address from localStorage.  We use this for #emailLog method
    * @return Promise
    */
    SimpleMapPage.prototype.getEmail = function () {
        var _this = this;
        var localStorage = window.localStorage;
        var email = localStorage.getItem('email');
        return new Promise(function (resolve, reject) {
            if (email) {
                return resolve(email);
            }
            _this.dialogs.prompt('Email address', 'Email Logs').then(function (response) {
                if (response.buttonIndex === 1 && response.input1.length > 0) {
                    var email_1 = response.input1;
                    localStorage.setItem('email', email_1);
                    resolve(email_1);
                }
            });
        });
    };
    /**
    * Send a Toast message
    */
    SimpleMapPage.prototype.toast = function (message, duration) {
        this.toastCtrl.create({
            message: message,
            cssClass: 'toast',
            duration: duration || 3000
        }).present();
    };
    /**
    * Confirm stuff
    */
    SimpleMapPage.prototype.confirm = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Confirm',
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel'
                    }, {
                        text: 'Confirm',
                        handler: resolve
                    }]
            });
            alert.present();
        });
    };
    /**
    * Play a UI sound via BackgroundGeolocation#playSound
    */
    SimpleMapPage.prototype.playSound = function (name) {
        var soundId = __WEBPACK_IMPORTED_MODULE_6__lib_sound_map__["a" /* default */][this.deviceInfo.platform.toUpperCase()][name.toUpperCase()];
        if (!soundId) {
            console.warn('playSound: Unknown sound: ', name);
        }
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].playSound(soundId);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SimpleMapPage.prototype, "mapElement", void 0);
    SimpleMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simple-map',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\simple-map\simple-map.html"*/'<ion-header>\n  <ion-navbar mode="ios" color="gold">\n    <ion-title mode="ios">\n      BG Geolocation Demo\n    </ion-title>\n    <ion-buttons end>\n    	<ion-toggle [(ngModel)]="enabled" (ionChange)="onToggleEnabled()" style="display:block;"></ion-toggle>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-fab top left edge>\n   		<button ion-fab color="gold" (click)="onClickMainMenu()">\n          <ion-icon color="dark" name="arrow-dropdown-circle"></ion-icon>\n      </button>\n   		<ion-fab-list side="bottom" style="width:250px">\n        <ion-item>\n          <button ion-button full round color="primary" (click)="onClickHome()"><ion-icon name="home"></ion-icon>&nbsp;Home</button>\n        </ion-item>\n     	  <ion-item>\n     			<button ion-button color="primary" (click)="onClickSync()"><ion-icon name="ios-cloud-upload"></ion-icon>&nbsp;Sync</button>\n     			<button ion-button color="danger" (click)="onClickDestroy()">Destroy</button>\n     		</ion-item>\n     		<ion-item>\n  				<ion-label>autoSync</ion-label>\n  				<ion-toggle [(ngModel)]="autoSync" (ionChange)="onSetConfig(\'autoSync\')"></ion-toggle>\n        </ion-item>\n        <ion-item>\n  				<ion-label>distanceFilter</ion-label>\n  				<ion-input [(ngModel)]="distanceFilter" (blur)="onSetConfig(\'distanceFilter\')" type="number"></ion-input>\n  		  </ion-item>\n  			<ion-item>\n    		  <ion-label>stopTimeout</ion-label>\n    			<ion-input [(ngModel)]="stopTimeout" (blur)="onSetConfig(\'stopTimeout\')" type="number"></ion-input>\n  			</ion-item>\n  			<ion-item>\n    			<ion-label>stopOnTerminate</ion-label>\n    			<ion-toggle [(ngModel)]="stopOnTerminate" (ionChange)="onSetConfig(\'stopOnTerminate\')"></ion-toggle>\n  			</ion-item>\n  			<ion-item>\n    			<ion-label>startOnBoot</ion-label>\n    			<ion-toggle [(ngModel)]="startOnBoot" (ionChange)="onSetConfig(\'startOnBoot\')"></ion-toggle>\n  			</ion-item>\n  			<ion-item>\n    			<ion-label>debug</ion-label>\n    			<ion-toggle [(ngModel)]="debug" (ionChange)="onSetConfig(\'debug\')"></ion-toggle>\n  			</ion-item>\n  			<ion-item>\n       		<button ion-button color="primary" (click)="onClickEmailLog()">Email Log</button>\n       		<button ion-button color="danger" (click)="onClickDestroyLog()">Destroy</button>\n       	</ion-item>\n     	</ion-fab-list>\n    </ion-fab>\n\n	<!-- Google Map Element -->\n  <div #map id="map"></div>\n\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar mode="ios" color="gold">\n		<ion-buttons start>\n			<button ion-button solid (click)="onClickGetCurrentPosition()" color="primary" style="width:50px">\n				<ion-icon name="md-navigate" color=""></ion-icon>\n			</button>\n		</ion-buttons>\n		<ion-title>\n			<span [innerHTML]="motionActivity">Activity</span>&nbsp;&middot;&nbsp;<span [innerHTML]="odometer"></span>\n		</ion-title>\n		<ion-buttons end>\n			<button ion-button solid (click)="onClickChangePace()" style="width:50px" color="{{isMoving ? \'danger\' : \'secondary\'}}">\n				<ion-icon name="{{isMoving ? \'pause\' : \'play\'}}"></ion-icon>\n			</button>\n		</ion-buttons>\n\n	</ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\simple-map\simple-map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_dialogs__["a" /* Dialogs */]])
    ], SimpleMapPage);
    return SimpleMapPage;
}());

//# sourceMappingURL=simple-map.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
* A collection of soundId for use with BackgroundGeolocation#playSound
*/
var SOUND_MAP = {
    "IOS": {
        "LONG_PRESS_ACTIVATE": 1113,
        "LONG_PRESS_CANCEL": 1075,
        "ADD_GEOFENCE": 1114,
        "BUTTON_CLICK": 1104,
        "MESSAGE_SENT": 1303,
        "ERROR": 1006,
        "OPEN": 1502,
        "CLOSE": 1503,
        "FLOURISH": 1509
    },
    "ANDROID": {
        "LONG_PRESS_ACTIVATE": 27,
        "LONG_PRESS_CANCEL": 94,
        "ADD_GEOFENCE": 28,
        "BUTTON_CLICK": 19,
        "MESSAGE_SENT": 90,
        "ERROR": 89,
        "OPEN": 37,
        "CLOSE": 94,
        "FLOURISH": 37
    }
};
/* harmony default export */ __webpack_exports__["a"] = (SOUND_MAP);
//# sourceMappingURL=sound-map.js.map

/***/ })

});
//# sourceMappingURL=1.js.map