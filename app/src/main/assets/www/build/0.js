webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPageModule", function() { return AdvancedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advanced__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_BGService__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_SettingsService__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_TestService__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdvancedPageModule = /** @class */ (function () {
    function AdvancedPageModule() {
    }
    AdvancedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advanced__["a" /* AdvancedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advanced__["a" /* AdvancedPage */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__lib_BGService__["a" /* BGService */], __WEBPACK_IMPORTED_MODULE_4__lib_SettingsService__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_5__lib_TestService__["a" /* TestService */]
            ]
        })
    ], AdvancedPageModule);
    return AdvancedPageModule;
}());

//# sourceMappingURL=advanced.module.js.map

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

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BGService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__ = __webpack_require__(193);
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



//import { defaultLocationUrl, companyToken } from '../consoleConfig';
/**
* The collection of available BackgroundGeolocation settings
*/
var SETTINGS = {
    common: [
        // Geolocation
        { name: 'desiredAccuracy', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [-2, -1, 0, 10, 100, 1000, 3000], defaultValue: 0 },
        { name: 'distanceFilter', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 10, 50, 100, 1000], defaultValue: 20 },
        { name: 'disableElasticity', group: 'geolocation', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'elasticityMultiplier', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 1, 2, 3, 5, 10], defaultValue: 1 },
        { name: 'geofenceProximityRadius', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [1000, 2500, 5000, 10000, 100000], defaultValue: 1000 },
        { name: 'locationTimeout', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 5, 10, 30, 60], defaultValue: 60 },
        { name: 'useSignificantChangesOnly', group: 'geolocation', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'disableLocationAuthorizationAlert', group: 'geolocation', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'showsBackgroundLocationIndicator', group: 'geolocation', dataType: 'boolean', inputType: 'toggle', values: [true, false], defaultValue: false },
        // Activity Recognition
        { name: 'disableMotionActivityUpdates', group: 'activity_recognition', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'disableStopDetection', group: 'activity_recognition', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: false },
        // HTTP
        { name: 'url', group: 'http', ignore: true, inputType: 'text', dataType: 'string', defaultValue: 'http://tracker.transistorsoft.com/locations/null' },
        { name: 'method', group: 'http', inputType: 'select', dataType: 'string', values: ['POST', 'PUT'], defaultValue: 'POST' },
        { name: 'autoSync', group: 'http', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'true' },
        { name: 'disableAutoSyncOnCellular', group: 'http', dataType: 'boolean', inputType: 'toggle', values: [true, false], defaultValue: false },
        { name: 'autoSyncThreshold', group: 'http', dataType: 'integer', inputType: 'select', values: [0, 5, 10, 25, 50, 100], defaultValue: 0 },
        { name: 'batchSync', group: 'http', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'maxBatchSize', group: 'http', dataType: 'integer', inputType: 'select', values: [-1, 5, 10, 50, 100] },
        { name: 'maxRecordsToPersist', group: 'http', dataType: 'integer', inputType: 'select', values: [-1, 0, 1, 5, 10] },
        { name: 'maxDaysToPersist', group: 'http', dataType: 'integer', inputType: 'select', values: [1, 2, 3, 5, 7, 14], defaultValue: 2 },
        { name: 'persistMode', group: 'http', dataType: 'integer', inputType: 'select', values: [2, 1, -1, 0], defaultValue: 2 },
        // Application
        { name: 'stopOnTerminate', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'true' },
        { name: 'startOnBoot', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'stopTimeout', group: 'activity_recognition', dataType: 'integer', inputType: 'select', values: [0, 1, 3, 5, 10, 15], defaultValue: 1 },
        { name: 'heartbeatInterval', group: 'application', dataType: 'integer', inputType: 'select', values: [-1, 60, (2 * 60), (5 * 60), (15 * 60)], defaultValue: 60 },
        // Logging & Debug
        { name: 'debug', group: 'debug', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'true' },
        { name: 'logLevel', group: 'debug', dataType: 'integer', inputType: 'select', values: [0, 1, 2, 3, 4, 5], defaultValue: 5 },
        { name: 'logMaxDays', group: 'debug', dataType: 'integer', inputType: 'select', values: [0, 1, 2, 3, 4, 5, 6, 7], defaultValue: 5 }
    ],
    iOS: [
        // Geolocation
        { name: 'stationaryRadius', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [25, 50, 100, 500, 1000], defaultValue: 25 },
        { name: 'activityType', group: 'geolocation', dataType: 'string', inputType: 'select', values: ['Other', 'AutomotiveNavigation', 'Fitness', 'OtherNavigation'], defaultValue: 'OtherNavigation' },
        // Activity Recognition
        { name: 'stopDetectionDelay', group: 'activity_recognition', dataType: 'integer', inputType: 'select', values: [0, 1, 2, 5], defaultValue: 0 },
        { name: 'preventSuspend', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' }
    ],
    Android: [
        // Geolocation
        { name: 'locationUpdateInterval', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 1000, 5000, 10000, 30000, 60000], defaultValue: 5000 },
        { name: 'fastestLocationUpdateInterval', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [-1, 0, 1000, 5000, 10000, 30000, 60000], defaultValue: -1 },
        { name: 'deferTime', group: 'geolocation', dataType: 'integer', inputType: 'select', values: [0, 10 * 1000, 30 * 1000, 60 * 1000, 10 * 60 * 1000], defaultValue: 0 },
        { name: 'geofenceModeHighAccuracy', group: 'geolocation', dataType: 'boolean', inputType: 'toggle', value: [true, false], defaultValue: false },
        // Activity Recognition
        { name: 'motionTriggerDelay', group: 'activity_recognition', dataType: 'integer', inputType: 'select', values: [0, 10000, 30000, 60000], defaultValue: 0 },
        { name: 'triggerActivities', group: 'activity_recognition', dataType: 'string', inputType: 'select', multiple: true, values: ['in_vehicle', 'on_bicycle', 'on_foot', 'running', 'walking'], defaultValue: 'in_vehicle, on_bicycle, running, walking, on_foot' },
        // Application
        { name: 'enableHeadless', group: 'application', dataType: 'boolean', inputType: 'toggle', values: ['true', 'false'], defaultValue: 'false' },
        { name: 'notificationPriority', ignore: true, group: 'application', dataType: 'integer', inputType: 'select', values: [0, 1, -1, 2, -2], defaultValue: 0 }
    ]
};
/**
* A collection of soundId for use with BackgroundGeolocation#playSound
*/
var SOUND_MAP = {
    "iOS": {
        "LONG_PRESS_ACTIVATE": 1113,
        "LONG_PRESS_CANCEL": 1075,
        "ADD_GEOFENCE": 1114,
        "BUTTON_CLICK": 1104,
        "MESSAGE_SENT": 1303,
        "ERROR": 1006,
        "OPEN": 1502,
        "CLOSE": 1503,
        "FLOURISH": 1509,
        "TEST_MODE_CLICK": 1130,
        "TEST_MODE_SUCCESS": 1114
    },
    "Android": {
        "LONG_PRESS_ACTIVATE": "DOT_START",
        "LONG_PRESS_CANCEL": "DOT_STOP",
        "ADD_GEOFENCE": "DOT_SUCCESS",
        "BUTTON_CLICK": "BUTTON_CLICK",
        "MESSAGE_SENT": "WHOO_SEND_SHARE",
        "ERROR": "ERROR",
        "OPEN": "OPEN",
        "CLOSE": "CLOSE",
        "FLOURISH": "POP_OPEN",
        "TEST_MODE_CLICK": "POP",
        "TEST_MODE_SUCCESS": "BEEP_ON"
    },
    "browser": {
        "LONG_PRESS_ACTIVATE": 1,
        "LONG_PRESS_CANCEL": 1,
        "ADD_GEOFENCE": 1,
        "BUTTON_CLICK": 1,
        "MESSAGE_SENT": 1,
        "ERROR": 1,
        "OPEN": 1,
        "CLOSE": 1,
        "FLOURISH": 1
    }
};
var BGService = /** @class */ (function () {
    function BGService(platform, events) {
        this.platform = platform;
        this.events = events;
        this.platform.ready().then(this.init.bind(this));
    }
    BGService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, platform, settings, n, len, setting;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getDeviceInfo()];
                    case 1:
                        _a.deviceInfo = _b.sent();
                        platform = this.deviceInfo.platform || 'iOS';
                        if (platform === 'browser') {
                            platform = 'Android';
                        }
                        settings = [].concat(SETTINGS.common).concat(SETTINGS[platform]);
                        this.settings = {
                            list: settings,
                            map: {}
                        };
                        for (n = 0, len = settings.length; n < len; n++) {
                            setting = settings[n];
                            this.settings.map[setting.name] = setting;
                        }
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Return Array of all settings by platform
    */
    BGService.prototype.getSettings = function () {
        return this.settings.list;
    };
    BGService.prototype.getPlatformSettings = function (group) {
        var settings = [];
        this.settings.list.forEach(function (setting) {
            if ((setting.group === group) && !setting.ignore) {
                settings.push(setting);
            }
        });
        return settings;
    };
    /**
    * Set a BackgroundGeolocation config option
    * @param {String} name
    * @param {Mixed} value
    */
    BGService.prototype.set = function (name, value, callback) {
        var _this = this;
        console.log('BGService#set ', name, value);
        var setting = this.settings.map[name];
        if (!setting) {
            // No change:  Ignore
            console.info('ignored');
            return;
        }
        // Type-casting String from form-field value
        switch (setting.dataType) {
            case 'integer':
                value = parseInt(value, 10);
                break;
            case 'boolean':
                value = (typeof (value) === 'string') ? (value === 'true') : value;
                break;
        }
        this.playSound('BUTTON_CLICK');
        // Create config {} for BackgroundGeolocation
        var config = {};
        config[name] = value;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].setConfig(config, function (state) {
            _this.events.publish('change', name, value);
            if (typeof (callback) == 'function') {
                callback(state);
            }
        });
    };
    /**
    * Subscribe to BGService events
    */
    BGService.prototype.on = function (event, callback) {
        this.events.subscribe(event, callback);
    };
    BGService.prototype.getOptionsForSetting = function (name) {
        var setting = this.settings.map[name];
        if (!setting) {
            console.warn('Unknown option: ', name);
            return [];
        }
        else {
            return setting.values;
        }
    };
    BGService.prototype.playSound = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var soundId, deviceInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        soundId = 0;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getDeviceInfo()];
                    case 1:
                        deviceInfo = _a.sent();
                        if (typeof (name) === 'string') {
                            soundId = SOUND_MAP[deviceInfo.platform][name];
                        }
                        else if (typeof (name) === 'number') {
                            soundId = name;
                        }
                        if (!soundId) {
                            alert('Invalid sound id provided to BGService#playSound' + name);
                            return [2 /*return*/];
                        }
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].playSound(soundId);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
    * Returns an array of locations for iOS Simulator City Drive Route
    * @return {Array}
    */
    BGService.prototype.getCityDriveData = function () {
        return [{ "lat": 37.33527476, "lng": -122.03254703 }, { "lat": 37.33500926, "lng": -122.03272188 }, { "lat": 37.33467638, "lng": -122.03432425 }, { "lat": 37.33453849, "lng": -122.03695223 }, { "lat": 37.33447068, "lng": -122.04007348 }, { "lat": 37.33446146, "lng": -122.04380955 }, { "lat": 37.33426985, "lng": -122.04751058 }, { "lat": 37.33352458, "lng": -122.05100549 }, { "lat": 37.33275353, "lng": -122.05462472 }, { "lat": 37.33228724, "lng": -122.05833354 }, { "lat": 37.33307736, "lng": -122.06203541 }, { "lat": 37.33422447, "lng": -122.06562781 }, { "lat": 37.33435661, "lng": -122.06939204 }, { "lat": 37.33369775, "lng": -122.07309474 }, { "lat": 37.33368006, "lng": -122.07665613 }, { "lat": 37.33492184, "lng": -122.07997503 }, { "lat": 37.3370055, "lng": -122.0827595 }, { "lat": 37.33879885, "lng": -122.08577472 }, { "lat": 37.34046597, "lng": -122.08886286 }, { "lat": 37.34208941, "lng": -122.09195687 }, { "lat": 37.34415677, "lng": -122.09439031 }, { "lat": 37.34576798, "lng": -122.09727888 }, { "lat": 37.34719244, "lng": -122.1006624 }, { "lat": 37.34894824, "lng": -122.1036539 }, { "lat": 37.35145376, "lng": -122.10569934 }, { "lat": 37.35357644, "lng": -122.10818206 }, { "lat": 37.35478615, "lng": -122.11144128 }, { "lat": 37.35583234, "lng": -122.11484701 }, { "lat": 37.35772158, "lng": -122.11764607 }, { "lat": 37.36040727, "lng": -122.11952001 }, { "lat": 37.36303768, "lng": -122.12160442 }, { "lat": 37.36457081, "lng": -122.12476867 }, { "lat": 37.36489536, "lng": -122.12851823 }, { "lat": 37.36543834, "lng": -122.13217241 }, { "lat": 37.3664761, "lng": -122.13564763 }, { "lat": 37.36776176, "lng": -122.13898061 }, { "lat": 37.36994839, "lng": -122.1416339 }, { "lat": 37.37240005, "lng": -122.14386038 }, { "lat": 37.37481249, "lng": -122.14611939 }, { "lat": 37.37709618, "lng": -122.14869624 }, { "lat": 37.37961188, "lng": -122.15082139 }, { "lat": 37.3826398, "lng": -122.15178036 }, { "lat": 37.38560981, "lng": -122.15272559 }, { "lat": 37.38774539, "lng": -122.15510789 }, { "lat": 37.38869141, "lng": -122.15849049 }, { "lat": 37.38931302, "lng": -122.16207476 }, { "lat": 37.39081987, "lng": -122.1652427 }, { "lat": 37.39210109, "lng": -122.16863067 }, { "lat": 37.39242056, "lng": -122.17227965 }, { "lat": 37.39361482, "lng": -122.17556879 }, { "lat": 37.39578711, "lng": -122.17805511 }, { "lat": 37.39821434, "lng": -122.18044236 }, { "lat": 37.40071157, "lng": -122.18290622 }, { "lat": 37.40313012, "lng": -122.18535374 }, { "lat": 37.40549529, "lng": -122.18774837 }, { "lat": 37.40759705, "lng": -122.19035128 }, { "lat": 37.40890928, "lng": -122.19364872 }, { "lat": 37.41002813, "lng": -122.19717013 }, { "lat": 37.4111682, "lng": -122.20078524 }, { "lat": 37.41233794, "lng": -122.20442475 }, { "lat": 37.41363889, "lng": -122.20791833 }, { "lat": 37.41583072, "lng": -122.2106204 }, { "lat": 37.41782917, "lng": -122.21338064 }, { "lat": 37.41872658, "lng": -122.21683566 }, { "lat": 37.41935866, "lng": -122.22058933 }, { "lat": 37.4209964, "lng": -122.22388736 }, { "lat": 37.42303224, "lng": -122.22680837 }, { "lat": 37.42510651, "lng": -122.22979057 }, { "lat": 37.42738525, "lng": -122.23260102 }, { "lat": 37.42942843, "lng": -122.23549663 }, { "lat": 37.4313864, "lng": -122.23829728 }, { "lat": 37.43354365, "lng": -122.24095367 }, { "lat": 37.4357105, "lng": -122.24350931 }, { "lat": 37.4378918, "lng": -122.24613695 }, { "lat": 37.44000262, "lng": -122.24876996 }, { "lat": 37.44207177, "lng": -122.25146784 }, { "lat": 37.44364246, "lng": -122.25458952 }, { "lat": 37.44423451, "lng": -122.25815644 }, { "lat": 37.44401797, "lng": -122.26182293 }, { "lat": 37.44381697, "lng": -122.26544651 }, { "lat": 37.4444387, "lng": -122.26900388 }, { "lat": 37.44598499, "lng": -122.27225807 }, { "lat": 37.44805758, "lng": -122.27523289 }, { "lat": 37.45014137, "lng": -122.27827786 }, { "lat": 37.45213903, "lng": -122.28131706 }, { "lat": 37.45408782, "lng": -122.28428358 }, { "lat": 37.45607437, "lng": -122.28728422 }, { "lat": 37.45855399, "lng": -122.28964389 }, { "lat": 37.46150337, "lng": -122.29066665 }, { "lat": 37.46449927, "lng": -122.29080537 }, { "lat": 37.46741706, "lng": -122.29164222 }, { "lat": 37.47004943, "lng": -122.29347317 }, { "lat": 37.4724045, "lng": -122.29584441 }, { "lat": 37.47484795, "lng": -122.29807718 }, { "lat": 37.47775391, "lng": -122.29919189 }, { "lat": 37.48081016, "lng": -122.29901151 }, { "lat": 37.48386847, "lng": -122.29850608 }, { "lat": 37.4868127, "lng": -122.2981216 }, { "lat": 37.48974125, "lng": -122.29883038 }, { "lat": 37.49226793, "lng": -122.30073474 }, { "lat": 37.49413538, "lng": -122.3036213 }, { "lat": 37.4951695, "lng": -122.30711999 }, { "lat": 37.49605031, "lng": -122.31058583 }, { "lat": 37.49739544, "lng": -122.3138981 }, { "lat": 37.49913263, "lng": -122.31702405 }, { "lat": 37.50040366, "lng": -122.32036315 }, { "lat": 37.50083658, "lng": -122.32388539 }, { "lat": 37.50117039, "lng": -122.32749548 }, { "lat": 37.50237035, "lng": -122.33083005 }, { "lat": 37.50420426, "lng": -122.33381577 }, { "lat": 37.50606869, "lng": -122.33688933 }, { "lat": 37.50799594, "lng": -122.34003061 }, { "lat": 37.50988405, "lng": -122.34301482 }, { "lat": 37.51203087, "lng": -122.34564414 }, { "lat": 37.51425798, "lng": -122.34819157 }, { "lat": 37.51644813, "lng": -122.35068376 }, { "lat": 37.51869146, "lng": -122.35307638 }, { "lat": 37.52133683, "lng": -122.35490229 }, { "lat": 37.52404792, "lng": -122.35651279 }, { "lat": 37.52656144, "lng": -122.35869996 }, { "lat": 37.52949012, "lng": -122.36013184 }, { "lat": 37.53245962, "lng": -122.36139139 }, { "lat": 37.53535502, "lng": -122.36269562 }, { "lat": 37.53806531, "lng": -122.36427066 }, { "lat": 37.54071957, "lng": -122.36586045 }, { "lat": 37.54319399, "lng": -122.36775116 }, { "lat": 37.54551481, "lng": -122.37012089 }, { "lat": 37.54781925, "lng": -122.37250714 }, { "lat": 37.55009393, "lng": -122.37486312 }, { "lat": 37.55254949, "lng": -122.37717024 }, { "lat": 37.55541199, "lng": -122.37918458 }, { "lat": 37.55818716, "lng": -122.38106338 }, { "lat": 37.56068828, "lng": -122.38341593 }, { "lat": 37.56314841, "lng": -122.38588298 }, { "lat": 37.56541169, "lng": -122.38835698 }, { "lat": 37.56674169, "lng": -122.39169239 }, { "lat": 37.5685417, "lng": -122.39470024 }, { "lat": 37.57095669, "lng": -122.39698791 }, { "lat": 37.57337626, "lng": -122.39928572 }, { "lat": 37.57613294, "lng": -122.40094584 }, { "lat": 37.57901078, "lng": -122.4022173 }, { "lat": 37.58156135, "lng": -122.40405955 }, { "lat": 37.58410689, "lng": -122.40616551 }, { "lat": 37.58628103, "lng": -122.40888284 }, { "lat": 37.58845823, "lng": -122.41162422 }, { "lat": 37.59089234, "lng": -122.41402865 }, { "lat": 37.5933155, "lng": -122.41641054 }, { "lat": 37.59572459, "lng": -122.41875689 }, { "lat": 37.59795493, "lng": -122.42134262 }, { "lat": 37.60011457, "lng": -122.42399767 }, { "lat": 37.60240224, "lng": -122.4265399 }, { "lat": 37.60520008, "lng": -122.42789551 }, { "lat": 37.60813618, "lng": -122.42777573 }, { "lat": 37.61097345, "lng": -122.42659053 }, { "lat": 37.61359414, "lng": -122.42477627 }, { "lat": 37.61652164, "lng": -122.42409633 }, { "lat": 37.61941491, "lng": -122.42515597 }, { "lat": 37.62223282, "lng": -122.42696981 }, { "lat": 37.62499411, "lng": -122.42876044 }, { "lat": 37.62751237, "lng": -122.43105867 }, { "lat": 37.62961128, "lng": -122.43380726 }, { "lat": 37.63173002, "lng": -122.43652912 }, { "lat": 37.63434333, "lng": -122.43855737 }, { "lat": 37.63721702, "lng": -122.43994642 }, { "lat": 37.63973671, "lng": -122.44194609 }, { "lat": 37.64209642, "lng": -122.44410611 }, { "lat": 37.6439212, "lng": -122.44706014 }, { "lat": 37.64593185, "lng": -122.44975467 }, { "lat": 37.64856629, "lng": -122.45139107 }, { "lat": 37.65116761, "lng": -122.45299486 }, { "lat": 37.65334007, "lng": -122.45534515 }, { "lat": 37.65538199, "lng": -122.45796869 }, { "lat": 37.65749297, "lng": -122.4606685 }, { "lat": 37.6595944, "lng": -122.46334517 }, { "lat": 37.66213336, "lng": -122.46529514 }, { "lat": 37.66513186, "lng": -122.46553863 }, { "lat": 37.6681835, "lng": -122.46560385 }, { "lat": 37.67115958, "lng": -122.46650842 }, { "lat": 37.6737871, "lng": -122.46830709 }, { "lat": 37.67626076, "lng": -122.47032856 }, { "lat": 37.67888283, "lng": -122.47161778 }, { "lat": 37.681853, "lng": -122.47152482 }, { "lat": 37.6847816, "lng": -122.47134126 }, { "lat": 37.6876731, "lng": -122.47090381 }, { "lat": 37.69061264, "lng": -122.47027005 }, { "lat": 37.69348641, "lng": -122.47026259 }, { "lat": 37.69632218, "lng": -122.47076182 }, { "lat": 37.69914914, "lng": -122.47129566 }, { "lat": 37.70201202, "lng": -122.47133229 }, { "lat": 37.70486296, "lng": -122.47116624 }, { "lat": 37.70741441, "lng": -122.4695213 }, { "lat": 37.70957963, "lng": -122.46701645 }, { "lat": 37.71043642, "lng": -122.46355472 }, { "lat": 37.71046027, "lng": -122.45988294 }, { "lat": 37.71069928, "lng": -122.45637822 }, { "lat": 37.71224348, "lng": -122.45340591 }, { "lat": 37.71448702, "lng": -122.45078271 }, { "lat": 37.71693873, "lng": -122.44871305 }, { "lat": 37.71990228, "lng": -122.44822204 }, { "lat": 37.72291888, "lng": -122.44775048 }, { "lat": 37.72576768, "lng": -122.44632572 }, { "lat": 37.72805372, "lng": -122.44386563 }, { "lat": 37.72953195, "lng": -122.44070582 }, { "lat": 37.7307498, "lng": -122.43723772 }, { "lat": 37.73174796, "lng": -122.43356938 }, { "lat": 37.73216621, "lng": -122.42992443 }, { "lat": 37.73150681, "lng": -122.42617839 }, { "lat": 37.73152823, "lng": -122.42250586 }, { "lat": 37.73190474, "lng": -122.4188029 }, { "lat": 37.73208047, "lng": -122.4151556 }, { "lat": 37.73335846, "lng": -122.41185347 }, { "lat": 37.73467442, "lng": -122.40896246 }, { "lat": 37.7367644, "lng": -122.40753804 }, { "lat": 37.73918836, "lng": -122.40786326 }, { "lat": 37.74134411, "lng": -122.40745439 }, { "lat": 37.7433128, "lng": -122.40606023 }, { "lat": 37.7454038, "lng": -122.40480714 }, { "lat": 37.74791032, "lng": -122.40401446 }, { "lat": 37.75036492, "lng": -122.40324249 }, { "lat": 37.7530224, "lng": -122.40280453 }, { "lat": 37.75548823, "lng": -122.40305884 }, { "lat": 37.75750915, "lng": -122.40390315 }, { "lat": 37.75912761, "lng": -122.40587398 }, { "lat": 37.76147723, "lng": -122.40613148 }];
    };
    BGService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])()
        /**
        * @class BGService This is a wrapper for interacting with the BackgroundGeolocation plugin
        * througout the app.
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */]])
    ], BGService);
    return BGService;
}());

//# sourceMappingURL=BGService.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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


var APP_SETTINGS = [
    { name: 'geofenceRadius', defaultValue: 200 },
    { name: 'geofenceNotifyOnEntry', defaultValue: true },
    { name: 'geofenceNotifyOnExit', defaultValue: false },
    { name: 'geofenceNotifyOnDwell', defaultValue: false },
    { name: 'geofenceLoiteringDelay', defaultValue: 30000 },
    { name: 'mapHideMarkers', defaultValue: false },
    { name: 'mapHidePolyline', defaultValue: false },
    { name: 'mapHideGeofenceHits', defaultValue: false },
    { name: 'email', defaultValue: null }
];
var GEOFENCE_RADIUS_OPTIONS = [50, 100, 150, 200, 500, 1000];
var GEOFENCE_LOITERING_DELAY_OPTIONS = [1 * 1000, 10 * 1000, 30 * 1000, 60 * 1000, 5 * 60 * 1000];
////
// Normally once wouldn't include the plugin like this.  It's done to allow me to
// easily switch between importing the npm vs paid version by editing a single file.
//


var SettingsService = /** @class */ (function () {
    function SettingsService(events, alertCtrl, toastCtrl) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = window.localStorage;
        this.geofenceRadiusOptions = GEOFENCE_RADIUS_OPTIONS;
        this.geofenceLoiteringDelayOptions = GEOFENCE_LOITERING_DELAY_OPTIONS;
        this.applicationState = {};
        if (this.storage.hasOwnProperty('settings')) {
            this.loadState();
        }
        else {
            APP_SETTINGS.forEach(function (setting) {
                _this.applicationState[setting.name] = setting.defaultValue;
            });
            this.saveState();
        }
    }
    SettingsService.prototype.getApplicationState = function () {
        return this.applicationState;
    };
    SettingsService.prototype.onChange = function (name) {
        if (this.myState[name] === this.applicationState[name]) {
            return;
        }
        this.saveState();
        this.events.publish('change', name, this.applicationState[name]);
    };
    SettingsService.prototype.set = function (name, value) {
        if (!this.applicationState.hasOwnProperty(name)) {
            console.warn("SettingsService#set: Unknown property ", name);
            return;
        }
        if (this.myState[name] === value) {
            return;
        }
        this.applicationState[name] = value;
        this.saveState();
        this.events.publish('change', name, value);
    };
    SettingsService.prototype.get = function (name) {
        if (this.applicationState.hasOwnProperty(name)) {
            return this.applicationState[name];
        }
        else {
            return null;
        }
    };
    SettingsService.prototype.toast = function (message, result, duration) {
        if (typeof (result) !== undefined) {
            message = message.replace("\{result\}", result);
        }
        this.toastCtrl.create({
            message: message,
            duration: duration || 3000
        }).present();
    };
    SettingsService.prototype.confirm = function (title, message, callback) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                }, {
                    text: 'Confirm',
                    handler: callback
                }]
        });
        alert.present();
    };
    /**
    * Subscribe to BGService events
    */
    SettingsService.prototype.on = function (event, callback) {
        this.events.subscribe(event, callback);
    };
    /**
    * My private test config.
    * DO NOT USE
    * @private
    */
    SettingsService.prototype.applyTestConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var geofences, localStorage, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        geofences = [{
                                "identifier": "[Cordova] Home",
                                "radius": 200.0,
                                "latitude": 45.51872221233045,
                                "longitude": -73.60041976465013,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.51872221233045,
                                        "longitude": -73.60041976465013,
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Parc Outremont",
                                "radius": 200.0,
                                "latitude": 45.51791915253888,
                                "longitude": -73.60480434117284,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.51791915253888,
                                        "longitude": -73.60480434117284,
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] 5 Saison",
                                "radius": 200.0,
                                "latitude": 45.52193435702239,
                                "longitude": -73.60793815706307,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 0,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.52193435702239,
                                        "longitude": -73.60793815706307,
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Laj",
                                "radius": 200.0,
                                "latitude": 45.52011166353691,
                                "longitude": -73.61188565687189,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 0,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.52011166353691,
                                        "longitude": -73.61188565687189
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Park Beaubien",
                                "radius": 200.0,
                                "latitude": 45.51536622906458,
                                "longitude": -73.60916110960558,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 0,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.51536622906458,
                                        "longitude": -73.60916110960558
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Parc & Fairmount",
                                "radius": 200.0,
                                "latitude": 45.5204308608878,
                                "longitude": -73.59730225310089,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.5204308608878,
                                        "longitude": -73.59730225310089
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Parc Couches Tard",
                                "radius": 200.0,
                                "latitude": 45.51744539760233,
                                "longitude": -73.5908963928221,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 0,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.51744539760233,
                                        "longitude": -73.5908963928221
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Laurier & Côtes Saint Catherines",
                                "radius": 200.0,
                                "latitude": 45.51602235252262,
                                "longitude": -73.59890979915006,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.51602235252262,
                                        "longitude": -73.59890979915006,
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Mountain 1",
                                "radius": 200.0,
                                "latitude": 45.51339446482965,
                                "longitude": -73.5890430151955,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.51339446482965,
                                        "longitude": -73.5890430151955
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Mountain 2",
                                "radius": 200.0,
                                "latitude": 45.511936585973096,
                                "longitude": -73.59662309075495,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.511936585973096,
                                        "longitude": -73.59662309075495
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Mountain 3",
                                "radius": 200.0,
                                "latitude": 45.50873361477508,
                                "longitude": -73.59089814860727,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.50873361477508,
                                        "longitude": -73.59089814860727
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Mountain 4",
                                "radius": 200.0,
                                "latitude": 45.50414694296492,
                                "longitude": -73.5916710539562,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.50414694296492,
                                        "longitude": -73.5916710539562
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Mountain 5",
                                "radius": 200.0,
                                "latitude": 45.50491473767328,
                                "longitude": -73.58654527405864,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.50491473767328,
                                        "longitude": -73.58654527405864
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Mountain Lake",
                                "radius": 200.0,
                                "latitude": 45.49860916086097,
                                "longitude": -73.59621565704647,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.49860916086097,
                                        "longitude": -73.59621565704647
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Park JFK",
                                "radius": 200.0,
                                "latitude": 45.52135522992923,
                                "longitude": -73.61568446341691,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": false,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.52135522992923,
                                        "longitude": -73.61568446341691
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Rope Park",
                                "radius": 200.0,
                                "latitude": 45.51335215591131,
                                "longitude": -73.58016477295465,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.51335215591131,
                                        "longitude": -73.58016477295465
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Cafe Union",
                                "radius": 200.0,
                                "latitude": 45.5332674993574,
                                "longitude": -73.61939297593483,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.5332674993574,
                                        "longitude": -73.61939297593483
                                    }
                                }
                            }, {
                                "identifier": "[Cordova] Park Laurier",
                                "radius": 200.0,
                                "latitude": 45.53237479609443,
                                "longitude": -73.58741778627864,
                                "notifyOnEntry": true,
                                "notifyOnExit": true,
                                "notifyOnDwell": true,
                                "loiteringDelay": 60000,
                                "extras": {
                                    "radius": 200,
                                    "center": {
                                        "latitude": 45.53237479609443,
                                        "longitude": -73.58741778627864,
                                    }
                                }
                            }];
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].removeGeofences()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].addGeofences(geofences)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].resetOdometer()];
                    case 3:
                        _a.sent();
                        localStorage = window.localStorage;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].findOrCreateTransistorAuthorizationToken(localStorage.getItem('orgname'), localStorage.getItem('username'), __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST)];
                    case 4:
                        token = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].reset({
                                debug: true,
                                logLevel: __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].LOG_LEVEL_VERBOSE,
                                desiredAccuracy: __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].DESIRED_ACCURACY_HIGH,
                                distanceFilter: 50,
                                disableElasticity: false,
                                locationUpdateInterval: 1000,
                                fastestLocationUpdateInterval: -1,
                                stopTimeout: 1,
                                motionTriggerDelay: 30000,
                                transistorAuthorizationToken: token,
                                backgroundPermissionRationale: {
                                    title: "Allow {applicationName} to access this device's location even when the app is closed or not in use.",
                                    message: "This app collects location data to enable recording your trips to work and calculate distance-travelled.",
                                    positiveAction: 'Change to "{backgroundPermissionOptionLabel}"',
                                    negativeAction: 'Cancel'
                                },
                                schedule: [],
                                scheduleUseAlarmManager: true,
                                maxDaysToPersist: 14,
                                geofenceModeHighAccuracy: true,
                                stopOnTerminate: false,
                                startOnBoot: true,
                                enableHeadless: true,
                                heartbeatInterval: -1
                            })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsService.prototype.loadState = function () {
        var _this = this;
        this.applicationState = JSON.parse(this.storage.getItem('settings'));
        var invalid = false;
        APP_SETTINGS.forEach(function (setting) {
            if (!_this.applicationState.hasOwnProperty(setting.name)) {
                _this.applicationState[setting.name] = setting.defaultValue;
                invalid = true;
            }
        });
        if (!invalid) {
            this.saveState();
        }
        this.myState = Object.assign({}, this.applicationState);
    };
    SettingsService.prototype.saveState = function () {
        this.storage.setItem('settings', JSON.stringify(this.applicationState, null));
        this.myState = Object.assign({}, this.applicationState);
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* ToastController */]])
    ], SettingsService);
    return SettingsService;
}());

//# sourceMappingURL=SettingsService.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_BGService__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_SettingsService__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_LongPress__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_cordova_plugin_background_fetch__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_colors__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_icon_map__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ENV__ = __webpack_require__(194);
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




//import {TestService} from './lib/TestService';


////
// NOTE:  normally you will simply import from "cordova-background-geolocation-lt" or "cordova-background-geolocation"
// This is done only for convenience in the SampleApp for easily switching between public / private version of the plugin
//


var CONTAINER_BORDER_POWER_SAVE_OFF = 'none';
var CONTAINER_BORDER_POWER_SAVE_ON = '7px solid red';



// Messages
var MESSAGE = {
    reset_odometer_success: 'Reset odometer success',
    reset_odometer_failure: 'Failed to reset odometer: {result}',
    sync_success: 'Sync success ({result} records)',
    sync_failure: 'Sync error: {result}',
    destroy_locations_success: 'Destroy locations success ({result} records)',
    destroy_locations_failure: 'Destroy locations error: {result}',
    removing_markers: 'Removing markers...',
    rendering_markers: 'Rendering markers...'
};
/**
 * Generated class for the AdvancedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdvancedPage = /** @class */ (function () {
    function AdvancedPage(
        //private testService: TestService
        navCtrl, navParams, modalController, zone, platform, dialogs, bgService, alertCtrl, settingsService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalController = modalController;
        this.zone = zone;
        this.platform = platform;
        this.dialogs = dialogs;
        this.bgService = bgService;
        this.alertCtrl = alertCtrl;
        this.settingsService = settingsService;
        // FAB Menu state.
        this.isMainMenuOpen = false;
        this.isMapMenuOpen = false;
        this.isSyncing = false;
        this.isResettingOdometer = false;
        this.isEmailingLog = false;
        this.testModeClicks = 0;
        this.iconMap = __WEBPACK_IMPORTED_MODULE_9__lib_icon_map__["a" /* default */];
        this.geofenceHits = [];
        // Initial state
        this.state = {
            enabled: false,
            isMoving: false,
            geofenceProximityRadius: 1000,
            trackingMode: 1,
            isChangingPace: false,
            activityIcon: this.iconMap['activity_unknown'],
            odometer: 0,
            provider: {
                gps: true,
                network: true,
                enabled: true,
                status: -1
            },
            containerBorder: 'none'
        };
        this.platform.ready().then(function () {
            _this.configureMap();
            _this.configureBackgroundGeolocation();
            _this.configureBackgroundFetch();
        });
        this.platform.pause.subscribe(function () {
            console.log('************************** PAUSE');
        });
        this.platform.resume.subscribe(function () {
            console.log('************************** RESUME');
        });
    }
    AdvancedPage.prototype.ionViewDidLoad = function () {
    };
    /**
    * Configure Google Maps
    */
    AdvancedPage.prototype.configureMap = function () {
        // Handle case where app booted without network accesss (google maps lib fails to load)
        if (typeof (google) !== 'object') {
            console.warn('- map not loaded');
            return;
        }
        this.locationMarkers = [];
        this.geofenceMarkers = [];
        this.geofenceHitMarkers = [];
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
        // Create LongPress event-handler
        new __WEBPACK_IMPORTED_MODULE_5__lib_LongPress__["a" /* LongPress */](this.map, 500);
        // Tap&hold detected.  Play a sound a draw a circular cursor.
        google.maps.event.addListener(this.map, 'longpresshold', this.onLongPressStart.bind(this));
        // Longpress cancelled.  Get rid of the circle cursor.
        google.maps.event.addListener(this.map, 'longpresscancel', this.onLongPressCancel.bind(this));
        // Longpress initiated, add the geofence
        google.maps.event.addListener(this.map, 'longpress', this.onLongPress.bind(this));
        // Blue current location marker
        this.currentLocationMarker = new google.maps.Marker({
            zIndex: 10,
            map: this.map,
            title: 'Current Location',
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].blue,
                fillOpacity: 1,
                strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].white,
                strokeOpacity: 1,
                strokeWeight: 6
            }
        });
        // Light blue location accuracy circle
        this.locationAccuracyCircle = new google.maps.Circle({
            map: this.map,
            zIndex: 9,
            fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].light_blue,
            fillOpacity: 0.4,
            strokeOpacity: 0
        });
        // Stationary Geofence
        this.stationaryRadiusCircle = new google.maps.Circle({
            zIndex: 0,
            fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].red,
            strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].red,
            strokeWeight: 1,
            fillOpacity: 0.3,
            strokeOpacity: 0.7,
            map: this.map
        });
        // Route polyline
        // Route polyline
        var seq = {
            repeat: '30px',
            icon: {
                path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                scale: 1,
                fillOpacity: 0,
                strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].white,
                strokeWeight: 1,
                strokeOpacity: 1
            }
        };
        this.polyline = new google.maps.Polyline({
            map: (this.settingsService.applicationState.mapHidePolyline) ? null : this.map,
            zIndex: 1,
            geodesic: true,
            strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].polyline_color,
            strokeOpacity: 0.7,
            strokeWeight: 7,
            icons: [seq]
        });
        // Popup geofence cursor for adding geofences via LongPress
        this.geofenceCursor = new google.maps.Marker({
            clickable: false,
            zIndex: 100,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 100,
                fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].green,
                fillOpacity: 0.2,
                strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].green,
                strokeWeight: 1,
                strokeOpacity: 0.7
            }
        });
    };
    /**
    * Configure BackgroundGeolocation plugin
    */
    AdvancedPage.prototype.configureBackgroundGeolocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, localStorage, orgname, username, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // [optional] We first bind all our event-handlers to *this* so that we have the option to later remove these
                        // listeners with BackgroundGeolocation.un("eventname", this.onMyHandler), since the #bind method returns a new function instance.
                        // To remove an event-handler requires a reference to the *exact* success-callback provided to #on
                        // eg:
                        //  this.onLocation = this.onLocation.bind(this);
                        //  BackgroundGeolocation.onLocation(this.onLocation);  <-- add listener
                        //  BackgroundGeolocation.un("location", this.onLocation);  <-- remove listener
                        // If you don't plan to remove events, this is unnecessary.
                        //
                        this.onLocation = this.onLocation.bind(this);
                        this.onLocationError = this.onLocationError.bind(this);
                        this.onMotionChange = this.onMotionChange.bind(this);
                        this.onHeartbeat = this.onHeartbeat.bind(this);
                        this.onGeofence = this.onGeofence.bind(this);
                        this.onActivityChange = this.onActivityChange.bind(this);
                        this.onProviderChange = this.onProviderChange.bind(this);
                        this.onGeofencesChange = this.onGeofencesChange.bind(this);
                        this.onSchedule = this.onSchedule.bind(this);
                        this.onHttp = this.onHttp.bind(this);
                        this.onPowerSaveChange = this.onPowerSaveChange.bind(this);
                        this.onConnectivityChange = this.onConnectivityChange.bind(this);
                        this.onEnabledChange = this.onEnabledChange.bind(this);
                        // Listen to BackgroundGeolocation events
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onLocation(this.onLocation, this.onLocationError);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onMotionChange(this.onMotionChange);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onHeartbeat(this.onHeartbeat);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onGeofence(this.onGeofence);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onActivityChange(this.onActivityChange);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onProviderChange(this.onProviderChange);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onGeofencesChange(this.onGeofencesChange);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onSchedule(this.onSchedule);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onHttp(this.onHttp);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onPowerSaveChange(this.onPowerSaveChange);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onConnectivityChange(this.onConnectivityChange);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onEnabledChange(this.onEnabledChange);
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].onNotificationAction(this.onNotificationAction);
                        _a = this.state;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].isPowerSaveMode()];
                    case 1:
                        _a.containerBorder = (_b.sent()) ? CONTAINER_BORDER_POWER_SAVE_ON : CONTAINER_BORDER_POWER_SAVE_OFF;
                        localStorage = window.localStorage;
                        orgname = localStorage.getItem('orgname') || '';
                        username = localStorage.getItem('username') || '';
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].findOrCreateTransistorAuthorizationToken(orgname, username, __WEBPACK_IMPORTED_MODULE_10__ENV__["a" /* default */].TRACKER_HOST)];
                    case 2:
                        token = _b.sent();
                        // With the plugin's #ready method, the supplied config object will only be applied with the first
                        // boot of your application.  The plugin persists the configuration you apply to it.  Each boot thereafter,
                        // the plugin will automatically apply the last known configuration.
                        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].ready({
                            transistorAuthorizationToken: token,
                            reset: false,
                            debug: true,
                            locationAuthorizationRequest: 'Always',
                            logLevel: __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].LOG_LEVEL_VERBOSE,
                            backgroundPermissionRationale: {
                                title: "Allow {applicationName} to access this device's location even when closed or not in use.",
                                message: "This app collects location data to enable recording your trips to work and calculate distance-travelled.",
                                positiveAction: 'Change to "{backgroundPermissionOptionLabel}"',
                                negativeAction: 'Cancel'
                            },
                            distanceFilter: 10,
                            stopTimeout: 1,
                            stopOnTerminate: false,
                            startOnBoot: true,
                            enableHeadless: true,
                            autoSync: true,
                            maxDaysToPersist: 14,
                        }).then(function (state) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                // Store the plugin state onto ourself for convenience.
                                console.log('- BackgroundGeolocation is ready: ', state);
                                this.zone.run(function () {
                                    _this.state.enabled = state.enabled;
                                    _this.state.isMoving = state.isMoving;
                                    _this.state.geofenceProximityRadius = state.geofenceProximityRadius;
                                    _this.state.trackingMode = state.trackingMode;
                                });
                                if ((state.schedule.length > 0)) {
                                    __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].startSchedule();
                                }
                                return [2 /*return*/];
                            });
                        }); }).catch(function (error) {
                            console.warn('- BackgroundGeolocation configuration error: ', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedPage.prototype.configureBackgroundFetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_7_cordova_plugin_background_fetch__["a" /* default */].configure({
                            minimumFetchInterval: 15,
                            // Android config
                            stopOnTerminate: false,
                            startOnBoot: true,
                            enableHeadless: true,
                            requiresCharging: false,
                            requiresDeviceIdle: false,
                            requiresBatteryNotLow: false,
                            requiresStorageNotLow: false,
                            requiredNetworkType: __WEBPACK_IMPORTED_MODULE_7_cordova_plugin_background_fetch__["a" /* default */].NETWORK_TYPE_NONE
                        }, function (taskId) {
                            console.log('[BackgroundFetch] - Received event:', taskId);
                            switch (taskId) {
                                case 'com.transistorsoft.customtask':
                                    break;
                                default:
                                    // Schedule another one-shot
                                    __WEBPACK_IMPORTED_MODULE_7_cordova_plugin_background_fetch__["a" /* default */].scheduleTask({
                                        taskId: 'com.transistorsoft.customtask',
                                        delay: 5000,
                                        stopOnTerminate: false,
                                        enableHeadless: true,
                                        periodic: false,
                                        forceAlarmManager: true
                                    });
                                    break;
                            }
                            __WEBPACK_IMPORTED_MODULE_7_cordova_plugin_background_fetch__["a" /* default */].finish(taskId);
                        }, function (taskId) {
                            console.warn('[BackgroundFetch] TIMEOUT: ', taskId);
                            __WEBPACK_IMPORTED_MODULE_7_cordova_plugin_background_fetch__["a" /* default */].finish(taskId);
                        })];
                    case 1:
                        _a.sent();
                        __WEBPACK_IMPORTED_MODULE_7_cordova_plugin_background_fetch__["a" /* default */].scheduleTask({
                            taskId: 'com.transistorsoft.customtask',
                            delay: 10000,
                            periodic: false,
                            stopOnTerminate: false,
                            enableHeadless: true,
                            forceAlarmManager: true
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ////
    // UI event handlers
    //
    AdvancedPage.prototype.onClickMainMenu = function () {
        this.isMainMenuOpen = !this.isMainMenuOpen;
        if (this.isMainMenuOpen) {
            this.bgService.playSound('OPEN');
        }
        else {
            this.bgService.playSound('CLOSE');
        }
    };
    AdvancedPage.prototype.onClickSettings = function () {
        var _this = this;
        this.bgService.playSound('OPEN');
        var modal = this.modalController.create('SettingsPage', {
            bgService: this.bgService,
            settingsService: this.settingsService
        });
        modal.onDidDismiss(function () { return __awaiter(_this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].getState()];
                    case 1:
                        state = _a.sent();
                        this.state.enabled = state.enabled;
                        this.state.isMoving = state.isMoving;
                        this.state.geofenceProximityRadius = state.geofenceProximityRadius;
                        this.state.trackingMode = state.trackingMode;
                        return [2 /*return*/];
                }
            });
        }); });
        modal.present();
    };
    AdvancedPage.prototype.onClickRequestPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var providerState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].getProviderState()];
                    case 1:
                        providerState = _a.sent();
                        this.alertCtrl.create({
                            title: 'Request Permission',
                            message: "Current Authorization Status: " + providerState.status,
                            cssClass: 'alert-wide',
                            buttons: [{
                                    text: 'When in Use',
                                    handler: function () { _this.requestPermission('WhenInUse'); }
                                }, {
                                    text: 'Always',
                                    handler: function () { _this.requestPermission('Always'); }
                                }]
                        }).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedPage.prototype.requestPermission = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].setConfig({ locationAuthorizationRequest: request })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].requestPermission()];
                    case 2:
                        status = _a.sent();
                        console.log('[requestPermission] status:', status);
                        this.alertCtrl.create({
                            title: 'Permission Result',
                            message: "Authorization Status: " + status,
                            cssClass: 'alert-wide',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () { }
                                }]
                        }).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedPage.prototype.onClickSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var onComplete, count, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bgService.playSound('BUTTON_CLICK');
                        onComplete = function (message, result) {
                            _this.settingsService.toast(message, result);
                            _this.zone.run(function () { _this.isSyncing = false; });
                        };
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].getCount()];
                    case 1:
                        count = _a.sent();
                        if (!count) {
                            this.settingsService.toast('Database is empty.');
                            return [2 /*return*/];
                        }
                        message = 'Sync ' + count + ' location' + ((count > 1) ? 's' : '') + '?';
                        this.settingsService.confirm('Confirm Sync', message, function () {
                            _this.isSyncing = true;
                            __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].sync().then(function (rs) {
                                _this.bgService.playSound('MESSAGE_SENT');
                                onComplete(MESSAGE.sync_success, count);
                            }).catch(function (error) {
                                onComplete(MESSAGE.sync_failure, error);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedPage.prototype.onClickDestroyLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            function onComplete(message, result) {
                var _this = this;
                settingsService.toast(message, result);
                zone.run(function () { _this.isDestroyingLocations = false; });
            }
            var zone, settingsService, count, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bgService.playSound('BUTTON_CLICK');
                        zone = this.zone;
                        settingsService = this.settingsService;
                        ;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].getCount()];
                    case 1:
                        count = _a.sent();
                        if (!count) {
                            this.settingsService.toast('Locations database is empty');
                            return [2 /*return*/];
                        }
                        message = 'Destroy ' + count + ' location' + ((count > 1) ? 's' : '') + '?';
                        this.settingsService.confirm('Confirm Delete', message, function () {
                            // Good to go...
                            _this.isDestroyingLocations = true;
                            __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].destroyLocations().then(function (result) {
                                _this.bgService.playSound('MESSAGE_SENT');
                                onComplete.call(_this, MESSAGE.destroy_locations_success, count);
                            }).catch(function (error) {
                                onComplete.call(_this, MESSAGE.destroy_locations_failure, error);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvancedPage.prototype.onClickEmailLogs = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        var storage = window.localStorage;
        var email = storage.getItem('settings:email');
        if (!email) {
            // Prompt user to enter a unique identifier for tracker.transistorsoft.com
            this.dialogs.prompt('Please enter your email address', 'Email Address').then(function (response) {
                if (response.buttonIndex === 1 && response.input1.length > 0) {
                    storage.setItem('settings:email', response.input1);
                    _this.doEmailLog(response.input1);
                }
                else {
                    return;
                }
            });
        }
        else {
            this.doEmailLog(email);
        }
    };
    AdvancedPage.prototype.doEmailLog = function (email) {
        var _this = this;
        this.isEmailingLog = true;
        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].logger.emailLog(email).then(function (result) {
            _this.zone.run(function () { _this.isEmailingLog = false; });
            console.log('- email log success');
        }).catch(function (error) {
            _this.zone.run(function () { _this.isEmailingLog = false; });
            console.warn('- email log failed: ', error);
        });
    };
    AdvancedPage.prototype.onClickResetOdometer = function () {
        var _this = this;
        this.state.odometer = '0.0';
        this.bgService.playSound('BUTTON_CLICK');
        this.isResettingOdometer = true;
        this.resetMarkers();
        var zone = this.zone;
        var settingsService = this.settingsService;
        function onComplete(message, result) {
            var _this = this;
            settingsService.toast(message, result);
            zone.run(function () { _this.isResettingOdometer = false; });
        }
        ;
        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].resetOdometer(function (location) {
            onComplete.call(_this, MESSAGE.reset_odometer_success);
        }, function (error) {
            onComplete.call(_this, MESSAGE.reset_odometer_failure, error);
        });
    };
    AdvancedPage.prototype.onClickHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    AdvancedPage.prototype.onClickMapMenu = function () {
        this.isMapMenuOpen = !this.isMapMenuOpen;
        var soundId = (this.isMapMenuOpen) ? 'OPEN' : 'CLOSE';
        this.bgService.playSound(soundId);
    };
    AdvancedPage.prototype.onSelectMapOption = function (name) {
        this.bgService.playSound('BUTTON_CLICK');
        // Invert the value
        var enabled = !this.settingsService.applicationState[name];
        // Save it:
        this.settingsService.set(name, enabled);
        // Apply it:
        var map = (enabled) ? null : this.map;
        var message = (enabled) ? 'Hide ' : 'Show ';
        switch (name) {
            case 'mapHideMarkers':
                this.locationMarkers.forEach(function (marker) {
                    marker.setMap(map);
                });
                message += 'map markers';
                break;
            case 'mapHidePolyline':
                this.polyline.setMap(map);
                message += 'polyline';
                break;
            case 'mapHideGeofenceHits':
                this.geofenceHitMarkers.forEach(function (marker) {
                    marker.setMap(map);
                });
                message += 'geofence transitions';
                break;
        }
        this.settingsService.toast(message, undefined, 1000);
    };
    AdvancedPage.prototype.onToggleEnabled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var onSuccess, onFailure;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.bgService.playSound('BUTTON_CLICK');
                        if (!this.state.enabled) return [3 /*break*/, 1];
                        onSuccess = function (state) {
                            console.log('[js] START SUCCESS :', state);
                        };
                        onFailure = function (error) {
                            console.error('[js] START FAILURE: ', error);
                        };
                        if (this.state.trackingMode == 1) {
                            __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].start().then(onSuccess).catch(onFailure);
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].startGeofences().then(onSuccess).catch(onFailure);
                        }
                        return [3 /*break*/, 3];
                    case 1:
                        this.state.isMoving = false;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].stop()];
                    case 2:
                        _a.sent();
                        this.clearMarkers();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdvancedPage.prototype.onClickGetCurrentPosition = function () {
        this.bgService.playSound('BUTTON_CLICK');
        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].getCurrentPosition({
            maximumAge: 0,
            desiredAccuracy: 100,
            samples: 1,
            persist: true,
            timeout: 30,
            extras: {
                foo: 'bar'
            }
        }).then(function (location) {
            console.log('[js] getCurrentPosition: ', location);
        }).catch(function (error) {
            console.warn('[js] getCurrentPosition FAILURE: ', error);
        });
    };
    /**
    * My private test mode.  DO NOT USE
    * @private
    */
    AdvancedPage.prototype.onClickTestMode = function () {
        var _this = this;
        this.bgService.playSound('TEST_MODE_CLICK');
        this.testModeClicks++;
        if (this.testModeClicks == 10) {
            this.bgService.playSound('TEST_MODE_SUCCESS');
            this.settingsService.applyTestConfig();
        }
        if (this.testModeTimer > 0)
            clearTimeout(this.testModeTimer);
        this.testModeTimer = setTimeout(function () {
            _this.testModeClicks = 0;
        }, 2000);
    };
    AdvancedPage.prototype.onClickChangePace = function () {
        var _this = this;
        if (!this.state.enabled) {
            return;
        }
        var zone = this.zone;
        var onComplete = function () {
            zone.run(function () { _this.state.isChangingPace = false; });
        };
        this.bgService.playSound('BUTTON_CLICK');
        this.state.isChangingPace = true;
        this.state.isMoving = !this.state.isMoving;
        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].changePace(this.state.isMoving).then(onComplete).catch(onComplete);
    };
    ////
    // Map events
    //
    AdvancedPage.prototype.onLongPressStart = function (e) {
        this.bgService.playSound('LONG_PRESS_ACTIVATE');
        this.geofenceCursor.setPosition(e.latLng);
        this.geofenceCursor.setMap(this.map);
    };
    AdvancedPage.prototype.onLongPressCancel = function (e) {
        this.bgService.playSound('LONG_PRESS_CANCEL');
        this.geofenceCursor.setMap(null);
    };
    AdvancedPage.prototype.onLongPress = function (e) {
        var latlng = e.latLng;
        this.geofenceCursor.setMap(null);
        var modal = this.modalController.create('GeofencePage', {
            bgService: this.bgService,
            latitude: latlng.lat(),
            longitude: latlng.lng()
        });
        modal.present();
    };
    ////
    // Background Geolocation event-listeners
    //
    //
    //
    //
    /**
    * @event location
    */
    AdvancedPage.prototype.onLocation = function (location) {
        var _this = this;
        console.log('[location] -', JSON.stringify(location, null, 2));
        // Print a log message to SDK's logger to prove this executed, even in the background.
        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].logger.debug("👍 [onLocation] received location in Javascript: " + location.uuid);
        this.setCenter(location);
        if (!location.sample) {
            this.zone.run(function () {
                // Convert meters -> km -> round nearest hundredth -> fix float xxx.x
                _this.state.odometer = parseFloat((Math.round((location.odometer / 1000) * 10) / 10).toString()).toFixed(1);
            });
        }
    };
    /**
    * @event location failure
    */
    AdvancedPage.prototype.onLocationError = function (error) {
        console.warn('[location] - ERROR: ', error);
    };
    /**
    * @event motionchange
    */
    AdvancedPage.prototype.onMotionChange = function (event) {
        var _this = this;
        console.log('[motionchange] -', event.isMoving, event.location);
        var d = new Date();
        __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].insertLocation({
            uuid: '',
            coords: event.location.coords,
            timestamp: d.toISOString(),
            odometer: event.location.odometer,
            is_moving: event.location.is_moving,
            battery: event.location.battery,
            activity: event.location.activity,
            extras: {
                insertLocation: true
            }
        });
        if (event.isMoving) {
            this.hideStationaryCircle();
        }
        else {
            this.showStationaryCircle(event.location);
        }
        this.zone.run(function () {
            _this.state.enabled = true;
            _this.state.isChangingPace = false;
            _this.state.isMoving = event.isMoving;
        });
    };
    /**
    * @event heartbeat
    */
    AdvancedPage.prototype.onHeartbeat = function (event) {
        console.log('[heartbeat] -', event);
    };
    /**
    * @event activitychange
    */
    AdvancedPage.prototype.onActivityChange = function (event) {
        var _this = this;
        this.zone.run(function () {
            _this.state.activityName = event.activity;
            _this.state.activityIcon = _this.iconMap['activity_' + event.activity];
        });
        console.log('[activitychange] -', event.activity, event.confidence);
    };
    /**
    * @event providerchange
    */
    AdvancedPage.prototype.onProviderChange = function (provider) {
        var _this = this;
        console.log('[providerchange] -', provider);
        switch (provider.status) {
            case __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].AUTHORIZATION_STATUS_DENIED:
                break;
            case __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].AUTHORIZATION_STATUS_ALWAYS:
                break;
            case __WEBPACK_IMPORTED_MODULE_6__cordova_background_geolocation__["a" /* default */].AUTHORIZATION_STATUS_WHEN_IN_USE:
                break;
        }
        this.zone.run(function () { _this.state.provider = provider; });
    };
    /**
    * @event geofenceschange
    */
    AdvancedPage.prototype.onGeofencesChange = function (event) {
        var _this = this;
        console.log('[geofenceschange] -', event);
        // All geofences off
        if (!event.on.length && !event.off.length) {
            this.geofenceMarkers.forEach(function (circle) {
                circle.setMap(null);
            });
            this.geofenceMarkers = [];
            return;
        }
        // Filter out all "off" geofences.
        this.geofenceMarkers = this.geofenceMarkers.filter(function (circle) {
            if (event.off.indexOf(circle.identifier) < 0) {
                return true;
            }
            else {
                circle.setMap(null);
                return false;
            }
        });
        // Add new "on" geofences.
        event.on.forEach(function (geofence) {
            var circle = _this.geofenceMarkers.find(function (marker) { return marker.identifier === geofence.identifier; });
            // Already added?
            if (circle) {
                return;
            }
            _this.geofenceMarkers.push(_this.buildGeofenceMarker(geofence));
        });
    };
    /**
    * @event geofence
    */
    AdvancedPage.prototype.onGeofence = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var circle, map, location, geofenceMarker, color, circleLatLng, locationLatLng, distance, heading, circleEdgeLatLng, geofenceEdgeMarker, locationMarker, polyline;
            return __generator(this, function (_a) {
                console.log('[geofence] -', event);
                circle = this.geofenceMarkers.find(function (marker) {
                    return marker.identifier === event.identifier;
                });
                if (!circle) {
                    return [2 /*return*/];
                }
                map = (this.settingsService.applicationState.mapHideGeofenceHits) ? null : this.map;
                location = event.location;
                geofenceMarker = this.geofenceHits[event.identifier];
                if (!geofenceMarker) {
                    geofenceMarker = {
                        circle: new google.maps.Circle({
                            zIndex: 100,
                            fillOpacity: 0,
                            strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].black,
                            strokeWeight: 1,
                            strokeOpacity: 1,
                            radius: circle.getRadius() + 1,
                            center: circle.getCenter(),
                            map: map
                        }),
                        events: []
                    };
                    this.geofenceHits[event.identifier] = geofenceMarker;
                    this.geofenceHitMarkers.push(geofenceMarker.circle);
                }
                if (event.action === 'ENTER') {
                    color = __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].green;
                }
                else if (event.action === 'DWELL') {
                    color = __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].gold;
                }
                else {
                    color = __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].red;
                }
                circleLatLng = geofenceMarker.circle.getCenter();
                locationLatLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
                distance = google.maps.geometry.spherical.computeDistanceBetween(circleLatLng, locationLatLng);
                // Push event
                geofenceMarker.events.push({
                    action: event.action,
                    location: event.location,
                    distance: distance
                });
                heading = google.maps.geometry.spherical.computeHeading(circleLatLng, locationLatLng);
                circleEdgeLatLng = google.maps.geometry.spherical.computeOffset(circleLatLng, geofenceMarker.circle.getRadius(), heading);
                geofenceMarker.events.push({
                    location: event.location,
                    action: event.action,
                    distance: distance
                });
                geofenceEdgeMarker = new google.maps.Marker({
                    zIndex: 1000,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 5,
                        fillColor: color,
                        fillOpacity: 0.7,
                        strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].black,
                        strokeWeight: 1,
                        strokeOpacity: 1
                    },
                    map: map,
                    position: circleEdgeLatLng
                });
                this.geofenceHitMarkers.push(geofenceEdgeMarker);
                locationMarker = this.buildLocationMarker(location, {
                    showHeading: true
                });
                locationMarker.setMap(map);
                this.geofenceHitMarkers.push(locationMarker);
                polyline = new google.maps.Polyline({
                    map: map,
                    zIndex: 1000,
                    geodesic: true,
                    strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].black,
                    strokeOpacity: 1,
                    strokeWeight: 1,
                    path: [circleEdgeLatLng, locationMarker.getPosition()]
                });
                this.geofenceHitMarkers.push(polyline);
                // Change the color of activated geofence to light-grey.
                circle.activated = true;
                circle.setOptions({
                    fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].grey,
                    fillOpacity: 0.2,
                    strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].grey,
                    strokeOpacity: 0.4
                });
                return [2 /*return*/];
            });
        });
    };
    /**
    * @event http
    */
    AdvancedPage.prototype.onHttp = function (response) {
        if (response.success) {
            console.log('[http] - success: ', response);
        }
        else {
            console.warn('[http] - FAILURE: ', response);
        }
    };
    /**
    * @event schedule
    */
    AdvancedPage.prototype.onSchedule = function (state) {
        var _this = this;
        this.zone.run(function () {
            _this.state.enabled = state.enabled;
        });
        console.log('[schedule] - ', state);
    };
    /**
    * @event powersavechange
    */
    AdvancedPage.prototype.onPowerSaveChange = function (isPowerSaveMode) {
        var _this = this;
        console.log('[js powersavechange: ', isPowerSaveMode);
        this.settingsService.toast('Power-save mode: ' + ((isPowerSaveMode) ? 'ON' : 'OFF'), null, 5000);
        this.zone.run(function () {
            _this.state.containerBorder = (isPowerSaveMode) ? CONTAINER_BORDER_POWER_SAVE_ON : CONTAINER_BORDER_POWER_SAVE_OFF;
        });
    };
    /**
    * @event connectivitychange
    */
    AdvancedPage.prototype.onConnectivityChange = function (event) {
        this.settingsService.toast('connectivitychange: ' + event.connected);
        console.log('[connectivitychange] -', event);
    };
    /**
    * @event enabledchange
    */
    AdvancedPage.prototype.onEnabledChange = function (enabled) {
        this.settingsService.toast('enabledchange: ' + enabled);
        console.log('[enabledchange] -', enabled);
        this.state.enabled = enabled;
        this.state.isMoving = false;
    };
    /**
    * @event notificationaction
    */
    AdvancedPage.prototype.onNotificationAction = function (buttonId) {
        console.log('[notificationaction] -', buttonId);
        switch (buttonId) {
            case 'notificationButtonFoo':
                break;
            case 'notificaitonButtonBar':
                break;
        }
    };
    ////
    // Google map methods
    //
    //
    //
    AdvancedPage.prototype.setCenter = function (location) {
        this.updateCurrentLocationMarker(location);
        setTimeout(function () {
            this.map.setCenter(new google.maps.LatLng(location.coords.latitude, location.coords.longitude));
        }.bind(this));
    };
    AdvancedPage.prototype.updateCurrentLocationMarker = function (location) {
        var latlng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
        this.currentLocationMarker.setPosition(latlng);
        this.locationAccuracyCircle.setCenter(latlng);
        this.locationAccuracyCircle.setRadius(location.coords.accuracy);
        if (location.sample === true) {
            return;
        }
        if (this.lastLocation) {
            this.locationMarkers.push(this.buildLocationMarker(location));
        }
        // Add breadcrumb to current Polyline path.
        this.polyline.getPath().push(latlng);
        if (!this.state.mapHidePolyline) {
            this.polyline.setMap(this.map);
        }
        this.lastLocation = location;
    };
    // Build a bread-crumb location marker.
    AdvancedPage.prototype.buildLocationMarker = function (location, options) {
        options = options || {};
        var icon = google.maps.SymbolPath.CIRCLE;
        var scale = 3;
        var zIndex = 1;
        var anchor;
        var strokeWeight = 1;
        if (!this.lastDirectionChangeLocation) {
            this.lastDirectionChangeLocation = location;
        }
        // Render an arrow marker if heading changes by 10 degrees or every 5 points.
        var deltaHeading = Math.abs(location.coords.heading - this.lastDirectionChangeLocation.coords.heading);
        if ((deltaHeading >= 15) || !(this.locationMarkers.length % 5) || options.showHeading) {
            icon = google.maps.SymbolPath.FORWARD_CLOSED_ARROW;
            scale = 2;
            strokeWeight = 1;
            anchor = new google.maps.Point(0, 2.6);
            this.lastDirectionChangeLocation = location;
        }
        return new google.maps.Marker({
            zIndex: zIndex,
            icon: {
                path: icon,
                rotation: location.coords.heading,
                scale: scale,
                anchor: anchor,
                fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].polyline_color,
                fillOpacity: 1,
                strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].black,
                strokeWeight: strokeWeight,
                strokeOpacity: 1
            },
            map: (!this.settingsService.applicationState.mapHideMarkers) ? this.map : null,
            position: new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
        });
    };
    AdvancedPage.prototype.buildGeofenceMarker = function (geofence) {
        var _this = this;
        // Add longpress event for adding GeoFence of hard-coded radius 200m.
        var circle = new google.maps.Circle({
            identifier: geofence.identifier,
            zIndex: 100,
            fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].green,
            fillOpacity: 0.2,
            strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].green,
            strokeWeight: 1,
            strokeOpacity: 0.7,
            params: geofence,
            radius: geofence.radius,
            center: new google.maps.LatLng(geofence.latitude, geofence.longitude),
            map: this.map
        });
        // Add 'click' listener to geofence so we can edit it.
        google.maps.event.addListener(geofence, 'click', function () {
            _this.settingsService.toast('Click geofence ' + geofence.identifier, null, 1000);
        });
        return circle;
    };
    AdvancedPage.prototype.buildStopZoneMarker = function (latlng) {
        return new google.maps.Marker({
            zIndex: 1,
            map: this.map,
            position: latlng,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].red,
                fillOpacity: 0.3,
                strokeColor: __WEBPACK_IMPORTED_MODULE_8__lib_colors__["a" /* default */].red,
                strokeWeight: 1,
                strokeOpacity: 0.7
            }
        });
    };
    AdvancedPage.prototype.showStationaryCircle = function (location) {
        var coords = location.coords;
        var radius = (this.state.trackingMode == 1) ? 200 : (this.state.geofenceProximityRadius / 2);
        var center = new google.maps.LatLng(coords.latitude, coords.longitude);
        this.stationaryRadiusCircle.setRadius(radius);
        this.stationaryRadiusCircle.setCenter(center);
        this.stationaryRadiusCircle.setMap(this.map);
        this.map.setCenter(center);
    };
    AdvancedPage.prototype.hideStationaryCircle = function () {
        // Create a little red breadcrumb circle of our last stop-position
        var latlng = this.stationaryRadiusCircle.getCenter();
        var stopZone = this.buildStopZoneMarker(latlng);
        var lastMarker = this.locationMarkers.pop();
        if (lastMarker) {
            lastMarker.setMap(null);
        }
        this.locationMarkers.push(stopZone);
        this.stationaryRadiusCircle.setMap(null);
    };
    AdvancedPage.prototype.resetMarkers = function () {
        // Clear location-markers.
        this.locationMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.locationMarkers = [];
        // Clear geofence hit markers
        this.geofenceHitMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.polyline.setPath([]);
    };
    AdvancedPage.prototype.clearMarkers = function () {
        this.resetMarkers();
        this.geofenceMarkers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.geofenceMarkers = [];
        // Clear red stationaryRadius marker
        this.stationaryRadiusCircle.setMap(null);
        // Clear blue route PolyLine
        this.polyline.setMap(null);
        this.polyline.setPath([]);
    };
    AdvancedPage.prototype.alert = function (title, message) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AdvancedPage.prototype, "mapElement", void 0);
    AdvancedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advanced',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\advanced.html"*/'<ion-header>\n  <ion-navbar color="gold" mode="ios">\n  	<ion-buttons start>\n  		<button ion-button (click)="onClickHome()" style="font-size:2.3rem">\n          <ion-icon name="home"></ion-icon>\n        </button>\n  	</ion-buttons>\n    <ion-title mode="ios">\n      BG Geo\n    </ion-title>\n    <ion-buttons end>\n      <ion-toggle [(ngModel)]="state.enabled" (ionChange)="onToggleEnabled()" color="secondary" style="display:block;"></ion-toggle>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngStyle]="{\'border-left\':state.containerBorder, \'border-right\':state.containerBorder}">\n	<ion-fab right bottom #fab>\n   		<button ion-fab color="gold" (click)="onClickMainMenu()">\n        <ion-icon color="dark" name="add"></ion-icon>\n      </button>\n   		<ion-fab-list side="top">\n     		<button ion-fab (click)="onClickSettings()" color="gold">\n     			<ion-icon name="cog"></ion-icon>\n     		</button>\n        <button ion-fab (click)="onClickRequestPermission()" color="gold">\n          <ion-icon name="ios-unlock"></ion-icon>\n        </button>\n     		<button ion-fab (click)="onClickResetOdometer()" color="gold">\n     			<ion-spinner [hidden]="!isResettingOdometer" name="circles" color="dark"></ion-spinner>\n     			<ion-icon [hidden]="isResettingOdometer" name="speedometer"></ion-icon>\n     		</button>\n     		<button ion-fab (click)="onClickEmailLogs()" color="gold">\n          <ion-spinner [hidden]="!isEmailingLog" name="circles" color="dark"></ion-spinner>\n     			<ion-icon [hidden]="isEmailingLog" name="mail"></ion-icon>\n     		</button>\n        <button ion-fab (click)="onClickSync()" color="gold">\n          <ion-spinner [hidden]="!isSyncing" name="circles" color="dark"></ion-spinner>\n          <ion-icon [hidden]="isSyncing" name="cloud-upload"></ion-icon>\n        </button>\n        <button ion-fab (click)="onClickDestroyLocations()" color="gold">\n          <ion-spinner [hidden]="!isDestroyingLocations" name="circles" color="dark"></ion-spinner>\n          <ion-icon [hidden]="isDestroyingLocations" name="trash"></ion-icon>\n        </button>\n   		</ion-fab-list>\n 	</ion-fab>\n\n  <ion-fab top right>\n  <button ion-fab mini (click)="onClickMapMenu()" color="light"><ion-icon name="map"></ion-icon></button>\n  <ion-fab-list side="left">\n    <button ion-fab (click)="onSelectMapOption(\'mapHideMarkers\')" color="{{settingsService.applicationState.mapHideMarkers ? \'light\' : \'gold\'}}">\n      <ion-icon name="pin" color="{{settingsService.applicationState.mapHideMarkers ? \'dark-grey\' : \'black\'}}"></ion-icon>\n    </button>\n    <button ion-fab (click)="onSelectMapOption(\'mapHidePolyline\')" color="{{settingsService.applicationState.mapHidePolyline ? \'light\' : \'gold\'}}">\n      <ion-icon name="pulse" color="{{settingsService.applicationState.mapHidePolyline ? \'dark-grey\' : \'black\'}}"></ion-icon>\n    </button>\n    <button ion-fab (click)="onSelectMapOption(\'mapHideGeofenceHits\')" color="{{settingsService.applicationState.mapHideGeofenceHits ? \'light\' : \'gold\'}}">\n      <ion-icon name="radio-button-off" color="{{settingsService.applicationState.mapHideGeofenceHits ? \'dark-grey\' : \'black\'}}"></ion-icon>\n    </button>\n  </ion-fab-list>\n</ion-fab>\n	<div #map id="map"></div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar mode="ios" color="gold">\n		<ion-buttons start>\n			<button ion-button solid (click)="onClickGetCurrentPosition()" color="gold" style="font-size:2.3rem">\n				<ion-icon name="md-navigate" color=""></ion-icon>\n			</button>\n      <button (click)="onClickTestMode()" style="background-color: transparent">\n        <ion-icon [hidden]="!state.provider.gps" name="{{iconMap.provider_gps}}" color="secondary"></ion-icon>\n        <ion-icon [hidden]="!state.provider.network"name="{{iconMap.provider_network}}" color="secondary"></ion-icon>\n        <ion-icon [hidden]="state.provider.enabled" name="{{iconMap.provider_disabled}}" color="danger"></ion-icon>\n      </button>\n		</ion-buttons>\n		<ion-title>\n			 <span ion-text class="label" color="">Activity</span>&nbsp;\n			 <ion-icon color="" name="{{state.activityIcon}}"></ion-icon>\n			 <span ion-text class="odometer" color="">{{this.state.odometer}}km</span>\n\n		</ion-title>\n		<ion-buttons end>\n			<button ion-button solid [disabled]="!state.enabled" (click)="onClickChangePace()" style="width:50px" color="{{state.isMoving ? \'danger\' : \'secondary\'}}">\n				<ion-spinner [hidden]="!state.isChangingPace" name="dots" color="light"></ion-spinner>\n        <ion-icon [hidden]="state.isChangingPace" name="{{state.isMoving ? \'pause\' : \'play\'}}"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\advanced.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_dialogs__["a" /* Dialogs */],
            __WEBPACK_IMPORTED_MODULE_3__lib_BGService__["a" /* BGService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__lib_SettingsService__["a" /* SettingsService */]])
    ], AdvancedPage);
    return AdvancedPage;
}());

//# sourceMappingURL=advanced.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongPress; });
/**
 * Custom google-maps @event LongClick hack.
 */
var LongPress = /** @class */ (function () {
    function LongPress(map, maxTime) {
        var _this = this;
        this.maxTime = maxTime;
        this.map = map;
        this.longPressTimer = undefined;
        this.isLongPress = false;
        google.maps.event.addListener(map, 'mousedown', function (e) {
            _this.onMouseDown(e);
        });
        google.maps.event.addListener(map, 'click', function (e) {
            _this.onMouseClick(e);
        });
        google.maps.event.addListener(map, 'mouseup', function (e) {
            _this.onMouseUp(e);
        });
        google.maps.event.addListener(map, 'drag', function (e) {
            _this.onMapDrag(e);
        });
    }
    LongPress.prototype.onMouseClick = function (e) {
        this.clearTimer();
        this.isLongPress = false;
    };
    LongPress.prototype.onMouseUp = function (e) {
        if (this.isLongPress && this.isDragging === false) {
            google.maps.event.trigger(this.map, 'longpress', e);
        }
        this.clearTimer();
    };
    LongPress.prototype.onMouseDown = function (e) {
        var _this = this;
        this.clearTimer();
        this.longPressTimer = setTimeout(function () {
            _this.isLongPress = true;
            google.maps.event.trigger(_this.map, 'longpresshold', e);
        }, this.maxTime);
        this.isDragging = false;
    };
    LongPress.prototype.onMapDrag = function (e) {
        if (this.isLongPress) {
            google.maps.event.trigger(this.map, 'longpresscancel');
        }
        this.clearTimer();
        this.isDragging = true;
    };
    LongPress.prototype.clearTimer = function () {
        this.isLongPress = false;
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = undefined;
        }
    };
    return LongPress;
}());

//# sourceMappingURL=LongPress.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var plugin = function () {
    return window.BackgroundFetch;
};
var BackgroundFetch = /** @class */ (function () {
    function BackgroundFetch() {
    }
    Object.defineProperty(BackgroundFetch, "STATUS_RESTRICTED", {
        get: function () { return plugin().STATUS_RESTRICTED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "STATUS_DENIED", {
        get: function () { return plugin().STATUS_DENIED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "STATUS_AVAILABLE", {
        get: function () { return plugin().STATUS_AVAILABLE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "FETCH_RESULT_NEW_DATA", {
        get: function () { return plugin().FETCH_RESULT_NEW_DATA; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "FETCH_RESULT_NO_DATA", {
        get: function () { return plugin().FETCH_RESULT_NO_DATA; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "FETCH_RESULT_FAILED", {
        get: function () { return plugin().FETCH_RESULT_FAILED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "NETWORK_TYPE_NONE", {
        get: function () { return plugin().NETWORK_TYPE_NONE; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "NETWORK_TYPE_ANY", {
        get: function () { return plugin().NETWORK_TYPE_ANY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "NETWORK_TYPE_UNMETERED", {
        get: function () { return plugin().NETWORK_TYPE_UNMETERED; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "NETWORK_TYPE_NOT_ROAMING", {
        get: function () { return plugin().NETWORK_TYPE_NOT_ROAMING; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundFetch, "NETWORK_TYPE_CELLULAR", {
        get: function () { return plugin().NETWORK_TYPE_CELLULAR; },
        enumerable: false,
        configurable: true
    });
    BackgroundFetch.configure = function () {
        var fetch = plugin();
        return fetch.configure.apply(fetch, arguments);
    };
    BackgroundFetch.finish = function (taskId) {
        var fetch = plugin();
        return fetch.finish.apply(fetch, arguments);
    };
    BackgroundFetch.start = function () {
        var fetch = plugin();
        return fetch.start.apply(fetch, arguments);
    };
    BackgroundFetch.scheduleTask = function (config, success, failure) {
        var fetch = plugin();
        return fetch.scheduleTask.apply(fetch, arguments);
    };
    BackgroundFetch.stopTask = function (taskId, success, failure) {
        var fetch = plugin();
        return fetch.stopTask.apply(fetch, arguments);
    };
    BackgroundFetch.stop = function () {
        var fetch = plugin();
        return fetch.stop.apply(fetch, arguments);
    };
    BackgroundFetch.status = function () {
        var fetch = plugin();
        return fetch.status.apply(fetch, arguments);
    };
    return BackgroundFetch;
}());
/* harmony default export */ __webpack_exports__["a"] = (BackgroundFetch);


/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ICON_MAP = {
    activity_unknown: "help-circle",
    activity_still: "body",
    activity_shaking: "walk",
    activity_on_foot: "walk",
    activity_walking: "walk",
    activity_running: "walk",
    activity_on_bicycle: "bicycle",
    activity_in_vehicle: "car",
    pace_true: "pause",
    pace_false: "play",
    provider_network: "wifi",
    provider_gps: "locate",
    provider_disabled: "warning"
};
/* harmony default export */ __webpack_exports__["a"] = (ICON_MAP);
//# sourceMappingURL=icon-map.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
//import {Platform} from 'ionic-angular';
/**
* @class BGService This is a wrapper for interacting with the BackgroundGeolocation plugin
* througout the app.
*/
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.prototype.getPlugin = function () {
        return window.BackgroundGeolocation;
    };
    TestService.prototype.startSqliteTest = function (delay) {
        var _this = this;
        this.getLocationsTask = setInterval(function () {
            _this.getPlugin().getLocations(function (rs, tid) {
                console.log('- getLocations: ', rs.length);
                this.getPlugin().finish(tid);
            });
        }, delay);
        this.getCurrentPositionTask = setInterval(function () {
            _this.getPlugin().getCurrentPosition(function (location, tid) {
                console.log('- getCurrentPosition');
                this.getPlugin().finish(tid);
            });
        }, delay);
    };
    TestService.prototype.stopSqliteTest = function () {
        clearInterval(this.getLocationsTask);
        clearInterval(this.getCurrentPositionTask);
    };
    TestService.prototype.addGeofenceTest = function (length, prefix, success, failure) {
        var _this = this;
        prefix = prefix || 'default';
        this.getPlugin().getCurrentPosition(function (location, taskId) {
            for (var n = 0; n < length; n++) {
                _this.getPlugin().addGeofence({
                    notifyOnExit: true,
                    notifyOnEntry: true,
                    identifier: 'geofence_' + prefix + '_' + n,
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    radius: 200
                }, success, failure);
            }
            _this.getPlugin().finish(taskId);
        });
    };
    TestService.prototype.addGeofencesTest = function (length, prefix, success, failure) {
        var _this = this;
        prefix = prefix || 'default';
        var rs = [];
        this.getPlugin().getCurrentPosition(function (location, taskId) {
            for (var n = 0; n < length; n++) {
                rs.push({
                    notifyOnExit: true,
                    notifyOnEntry: true,
                    identifier: 'geofence_' + prefix + '_' + n,
                    latitude: 1,
                    longitude: 1,
                    radius: 200
                });
            }
            _this.getPlugin().addGeofences(rs, success, failure);
            _this.getPlugin().finish(taskId);
        });
    };
    TestService.prototype.removeGeofencesTest = function (success, failure) {
        var _this = this;
        this.addGeofencesTest(1, 'remove_test', function () {
            _this.getPlugin().getGeofences(function (rs) {
                console.info('- getGeofences: ', rs.length);
                _this.getPlugin().removeGeofences(function (response) {
                    console.log('- Success: ', response);
                    _this.getPlugin().getGeofences(function (rs) {
                        console.log('- removeGeofences: ', rs.length);
                    });
                }, function (error) {
                    console.warn('- Error: ', error);
                });
            });
        }, function (error) {
            console.warn('Add geofence error');
        });
    };
    TestService.prototype.insertLocations = function (length, success, failure) {
        var _this = this;
        this.getPlugin().getCurrentPosition(function (l, t) {
            for (var i = 0; i < length; i++) {
                _this.getPlugin().insertLocation({
                    coords: {
                        latitude: l.coords.latitude,
                        longitude: l.coords.longitude
                    },
                    timestamp: l.timestamp,
                    uuid: 'uuid-' + i
                }, success, failure);
            }
        });
    };
    TestService.prototype.startGeofenceTest = function () {
        var _this = this;
        var geofences = [{
                identifier: "Geofence 1",
                notifyOnEntry: true,
                notifyOnExit: true,
                radius: 200,
                latitude: 45.5248868,
                longitude: -73.6424362
            }, {
                identifier: "Geofence 2",
                notifyOnEntry: true,
                notifyOnExit: true,
                radius: 200,
                latitude: 45.5225079,
                longitude: -73.6341922
            }, {
                identifier: "Geofence 3",
                notifyOnEntry: true,
                notifyOnExit: true,
                radius: 200,
                latitude: 45.5207131,
                longitude: -73.6279527
            }];
        var result = {
            total: 0,
            ENTER: 0,
            EXIT: 0
        };
        this.getPlugin().removeGeofences();
        this.getPlugin().addGeofences(geofences);
        this.getPlugin().on('geofence', function (event, tid) {
            if (!result[event.action]) {
                result[event.action] = 0;
            }
            result[event.action]++;
            result.total++;
            console.log('- Geofence test: ', result);
            if (result.total === (2 * geofences.length)) {
                if (result.ENTER === 3 && result.EXIT == 3) {
                    _this.getPlugin().changePace(false);
                    alert('Geofence test SUCCESS');
                    console.info('Geofence test success: ', result);
                }
            }
        });
        this.getPlugin().stop();
        this.getPlugin().start(function () {
            _this.getPlugin().changePace(true);
        });
    };
    /**
    * Auto-build a scheule based upon current time.
    *                ______________..._______________                      ___...
    * ______________|                                |____________________|
    * |<-- delay -->|<---------- duration ---------->|<---- interval ---->|<-- duration -->
    *
    * @param {Integer} count How many schedules to generate?
    * @param {Integer} delay How many minutes in future to start generating schedules
    * @param {Integer} duration How long is each trigger event
    * @param {Integer} interval How long between trigger events
    */
    TestService.prototype.generateSchedule = function (count, delay, duration, interval) {
        // Start 2min from now
        var now = new Date();
        var start = new Date(now.getTime() + delay * 60000);
        var rs = [];
        for (var n = 0, len = count; n < len; n++) {
            var end = new Date(start.getTime() + duration * 60000);
            var schedule = '1-7 ' + start.getHours() + ':' + start.getMinutes() + '-' + end.getHours() + ':' + end.getMinutes();
            start = new Date(end.getTime() + interval * 60000);
            rs.push(schedule);
        }
        return rs;
    };
    TestService.prototype.createGeofences = function (data, interval, params, callback) {
        //bgGeo.removeGeofences();
        interval = interval || 1;
        params = params || { notifyOnEntry: true };
        params.notifyOnEntry = params.notifyOnEntry || false;
        params.notifyOnExit = params.notifyOnExit || false;
        params.notifyOnDwell = params.notifyOnDwell || false;
        var geofences = [];
        var index = 1;
        for (var n = 0, len = data.length; n < len; n++) {
            if (n % interval) {
                continue;
            }
            geofences.push({
                identifier: 'geofences_test_' + index++,
                latitude: data[n].lat,
                longitude: data[n].lng,
                radius: 200,
                extras: { geofence_extra_foo: "bar" },
                notifyOnExit: params.notifyOnExit,
                notifyOnEntry: params.notifyOnEntry,
                notifyOnDwell: params.notifyOnDwell
            });
        }
        ;
        this.getPlugin().addGeofences(geofences, function (result) {
            console.log('Geofences loaded');
            callback();
        }, function (error) {
            console.warn('Geofence load failure: ', error);
            callback();
        });
    };
    TestService.prototype.crudTest = function () {
        var _this = this;
        console.log("******************************");
        console.log("* Crud test");
        console.log("******************************");
        this.getPlugin().setConfig({ autoSync: false });
        this.getPlugin().getCurrentPosition(function (location, taskId) {
            _this.getPlugin().getLocations(function (rs, tid) {
                if (!rs.length) {
                    console.warn("- getLocations FAIL: ", rs.length);
                    return;
                }
                var uuid = rs[0].uuid;
                console.log("- uuid: ", uuid);
                _this.getPlugin().getCount(function (count) {
                    console.log('- Count BEFORE: ', count);
                });
                var params = {
                    coords: location.coords,
                    extras: { foo: 'insertLocation without timestamp' }
                };
                _this.getPlugin().insertLocation(params, function () {
                    console.log('- INSERT location without timetamp');
                }, function (error) {
                    console.log('- INSERT FAILED: ', error);
                });
                _this.getPlugin().getLocation(uuid, function (location) {
                    console.log('- getLocation SUCCESS: ', JSON.stringify(location, null, 2));
                    location.extras = { "CRUD_TEST": "------------ CrudTest updateLocation ---------------" };
                    _this.getPlugin().updateLocation(location, function () {
                        console.log('- Update location SUCCESS');
                        _this.getPlugin().getLocation(uuid, function (l) {
                            console.log('- Get Location after UPDATE: ', JSON.stringify(l, null, 2));
                            _this.getPlugin().destroyLocation(uuid, function () {
                                console.log('- Destroy Location SUCCESS', uuid);
                                _this.getPlugin().getCount(function (count) {
                                    console.log('- Count: ', count);
                                });
                                _this.getPlugin().getLocation(uuid, function () {
                                    console.warn('- Get Location should not SUCCEED!');
                                }, function () {
                                    console.log('- GOOD: getLocation failed after destroy');
                                });
                            }, function (error) {
                                console.warn('- Destroy Location FAILURE: ', uuid);
                            });
                        }, function (error) {
                            console.warn('- Get Location FAILED: ', error);
                        });
                    }, function (error) {
                        console.log('- Update location FAILURE: ', error);
                    });
                }, function (error) {
                    console.log('- Failed to find location; ', uuid);
                });
            });
        }, {
            persist: true
        });
    };
    return TestService;
}());

//# sourceMappingURL=TestService.js.map

/***/ })

});
//# sourceMappingURL=0.js.map