webpackJsonp([5],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
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


////
// NOTE:  normally you will simply import from "cordova-background-geolocation-lt" or "cordova-background-geolocation"
// This is done only for convenience in the SampleApp for easily switching between public / private version of the plugin
//

var TRACKING_MODE_OPTIONS = [
    'location',
    'geofence'
];
var LOG_LEVEL_OPTIONS = ['OFF', 'ERROR', 'WARNING', 'INFO', 'DEBUG', 'VERBOSE'];
var NOTIFICATION_PRIORITY_OPTIONS = ['DEFAULT', 'HIGH', 'LOW', 'MAX', 'MIN'];
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navParams, alertCtrl, viewCtrl, modalCtrl, loadingCtrl, zone) {
        var _this = this;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.bgService = this.navParams.get('bgService');
        this.settingsService = this.navParams.get('settingsService');
        this.isLoaded = false;
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        // We do a BackgroundGeolocation#getState each time Settings screen is shown.
        this.trackingModeOptions = TRACKING_MODE_OPTIONS;
        this.logLevelOptions = LOG_LEVEL_OPTIONS;
        this.notificationPriorityOptions = NOTIFICATION_PRIORITY_OPTIONS;
        this.isSyncing = false;
        this.isAddingGeofences = false;
        this.isResettingOdometer = false;
        this.isDestroyingLog = false;
        var settings = this.bgService.getSettings();
        this.state = {};
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getState(function (state) {
            settings.forEach(function (setting) {
                _this.state[setting.name] = state[setting.name];
            });
            _this.state.trackingMode = (state.trackingMode) ? 'location' : 'geofence';
            _this.state.logLevel = _this.decodeLogLevel(state.logLevel);
            _this.state.notificationPriority = _this.decodeNotficationPriority(state.notificationPriority);
            if (_this.state.triggerActivities) {
                _this.state.triggerActivities = _this.decodeTriggerActivities(_this.state.triggerActivities);
            }
            // Hide the Loading...
            _this.isLoaded = true;
            _this.loader.dismiss();
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        // Load email address for email log
        var storage = window.localStorage;
        var email = storage.getItem('settings:email');
        if (email) {
            this.email = email;
        }
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        if (!this.isLoaded) {
            this.loader.present();
        }
    };
    SettingsPage.prototype.onClickClose = function () {
        this.bgService.playSound("CLOSE");
        this.viewCtrl.dismiss();
    };
    SettingsPage.prototype.onClickAbout = function () {
        this.modalCtrl.create('AboutPage', {
            bgService: this.bgService,
        }).present();
    };
    SettingsPage.prototype.onChangeValue = function (name) {
        var value = this.state[name];
        console.info('onChangeValue: ', name, value);
        if (typeof (value) !== 'undefined') {
            switch (name) {
                case 'logLevel':
                    value = this.encodeLogLevel(value);
                    break;
                case 'notificationPriority':
                    value = this.encodeNotficationPriority(value);
                    break;
                case 'trackingMode':
                    this.setTrackingMode(value);
                    break;
                case 'geofenceProximityRadius':
                    this.bgService.playSound('ADD_GEOFENCE');
                    break;
                case 'triggerActivities':
                    value = this.encodeTriggerActivities(value);
                    break;
            }
            this.bgService.set(name, value);
        }
    };
    SettingsPage.prototype.setTrackingMode = function (mode) {
        this.state.trackingMode = mode;
        if (mode === 'location') {
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].start();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].startGeofences();
        }
    };
    SettingsPage.prototype.onClickResetOdometer = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        this.isResettingOdometer = true;
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isResettingOdometer = false; });
        }
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].resetOdometer(function (location) {
            onComplete.call(_this);
        }, function (error) {
            onComplete.call(_this);
            _this.notify('Reset odometer error', error);
        });
    };
    SettingsPage.prototype.onUpdateUrl = function () {
        this.onChangeValue('url');
    };
    SettingsPage.prototype.onClickSync = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        this.isSyncing = true;
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isSyncing = false; });
        }
        ;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].sync(function (rs) {
            _this.bgService.playSound('MESSAGE_SENT');
            onComplete.call(_this);
        }, function (error) {
            onComplete.call(_this);
            _this.bgService.playSound('ERROR');
            _this.notify('Sync error', error);
        });
    };
    SettingsPage.prototype.onUpdateEmail = function () {
        this.bgService.playSound('BUTTON_CLICK');
        var storage = window.localStorage;
        storage.setItem('settings:email', this.email);
    };
    SettingsPage.prototype.onClickEmailLog = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        if (!this.email) {
            this.notify('Email logs', 'Please enter an email address');
            return;
        }
        this.isEmailingLog = true;
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isEmailingLog = false; });
        }
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].emailLog(this.email, function () {
            onComplete.call(_this);
        }, function (error) {
            onComplete.call(_this);
            _this.notify('Email error', error);
        });
    };
    SettingsPage.prototype.onClickDestroyLog = function () {
        var _this = this;
        this.settingsService.confirm('Confirm Destroy', 'Destroy Logs?', function () {
            _this.isDestroyingLog = true;
            __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].logger.destroyLog().then(function (success) {
                _this.isDestroyingLog = false;
                _this.bgService.playSound('MESSAGE_SENT');
                _this.settingsService.toast('Destroyed logs');
            });
        });
    };
    SettingsPage.prototype.onClickRemoveGeofences = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].removeGeofences(function () {
            _this.bgService.playSound('MESSAGE_SENT');
        }, function (error) {
            _this.bgService.playSound('ERROR');
            _this.notify('Remove geofences error', error);
        });
    };
    SettingsPage.prototype.onClickLoadGeofences = function () {
        var _this = this;
        this.bgService.playSound('BUTTON_CLICK');
        this.isAddingGeofences = true;
        var data = this.bgService.getCityDriveData();
        var geofences = [];
        var applicationState = this.settingsService.getApplicationState();
        for (var n = 0, len = data.length; n < len; n++) {
            var latlng = data[n];
            geofences.push({
                identifier: 'city_drive_' + (n + 1),
                latitude: parseFloat(latlng.lat),
                longitude: parseFloat(latlng.lng),
                radius: applicationState.geofenceRadius,
                notifyOnEntry: applicationState.geofenceNotifyOnEntry,
                notifyOnExit: applicationState.geofenceNotifyOnExit,
                notifyOnDwell: applicationState.geofenceNotifyOnDwell,
                loiteringDelay: applicationState.geofenceLoiteringDelay,
                extras: { 'geofence_extra': 'foo' }
            });
        }
        var zone = this.zone;
        function onComplete() {
            var _this = this;
            zone.run(function () { _this.isAddingGeofences = false; });
        }
        ;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].addGeofences(geofences, function () {
            onComplete.call(_this);
            _this.bgService.playSound('ADD_GEOFENCE');
        }, function (error) {
            onComplete.call(_this);
            _this.bgService.playSound('ERROR');
            _this.notify('Add geofences error', error);
        });
    };
    SettingsPage.prototype.onClickIgnoreBatteryOptimizations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isIgnoring;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].deviceSettings.isIgnoringBatteryOptimizations()];
                    case 1:
                        isIgnoring = _a.sent();
                        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].deviceSettings.showIgnoreBatteryOptimizations().then(function (request) {
                            var message = [
                                "isIgnoring: " + isIgnoring,
                                "Device: " + request.manufacturer + " " + request.model + " @ " + request.version,
                                "Seen? " + request.seen + " on " + request.lastSeenAt
                            ];
                            _this.settingsService.confirm('Battery Optimizations', message.join("<br />"), function () {
                                __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].deviceSettings.show(request);
                            });
                        }).catch(function (error) {
                            console.warn('[ignoreBatteryOptimizations]', error);
                            _this.notify('Notice', error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.onClickPowerManager = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].deviceSettings.showPowerManager().then(function (request) {
            var message = [
                "Device: " + request.manufacturer + " " + request.model + " @ " + request.version,
                "Seen? " + request.seen + " on " + request.lastSeenAt
            ];
            _this.settingsService.confirm('Power Manager', message.join("<br />"), function () {
                __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].deviceSettings.show(request);
            });
        }).catch(function (error) {
            console.warn('[showPowerManager]', error);
            _this.notify('Notice', error);
        });
    };
    SettingsPage.prototype.notify = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Dismiss']
        }).present();
    };
    SettingsPage.prototype.decodeNotficationPriority = function (value) {
        switch (value) {
            case 0:
                value = 'DEFAULT';
                break;
            case 1:
                value = 'HIGH';
                break;
            case -1:
                value = 'LOW';
                break;
            case 2:
                value = 'MAX';
                break;
            case -2:
                value = 'MIN';
                break;
            default:
                value = 0;
        }
        return value;
    };
    SettingsPage.prototype.encodeNotficationPriority = function (value) {
        switch (value) {
            case 'DEFAULT':
                value = 0;
                break;
            case 'HIGH':
                value = 1;
                break;
            case 'LOW':
                value = -1;
                break;
            case 'MAX':
                value = 2;
                break;
            case 'MIN':
                value = -2;
                break;
        }
        return value;
    };
    SettingsPage.prototype.decodeLogLevel = function (value) {
        switch (value) {
            case 0:
                value = 'OFF';
                break;
            case 1:
                value = 'ERROR';
                break;
            case 2:
                value = 'WARNING';
                break;
            case 3:
                value = 'INFO';
                break;
            case 4:
                value = 'DEBUG';
                break;
            case 5:
                value = 'VERBOSE';
                break;
        }
        return value;
    };
    SettingsPage.prototype.encodeLogLevel = function (value) {
        switch (value) {
            case 'OFF':
                value = 0;
                break;
            case 'ERROR':
                value = 1;
                break;
            case 'WARNING':
                value = 2;
                break;
            case 'INFO':
                value = 3;
                break;
            case 'DEBUG':
                value = 4;
                break;
            case 'VERBOSE':
                value = 5;
            default:
                value = 5;
        }
        return value;
    };
    SettingsPage.prototype.decodeTriggerActivities = function (value) {
        return value.split(',');
    };
    SettingsPage.prototype.encodeTriggerActivities = function (value) {
        return value.join(',');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\modals\settings\settings.html"*/'\n<ion-header>\n <ion-navbar color="gold" mode="ios">\n 	<ion-buttons start>\n 		<button ion-button (click)="onClickClose()" style="font-size:2.3rem"><ion-icon name="arrow-dropdown-circle"></ion-icon></button>\n 	</ion-buttons>\n 	<ion-title>Settings</ion-title>\n	<ion-buttons end>\n    	<button outline ion-button (click)="onClickAbout()" ion-text color="dark">\n    		About\n    	</button>\n    </ion-buttons>\n </ion-navbar>\n</ion-header>\n<ion-content>\n	<ion-list>\n		<ion-list-header mode="ios"><ion-icon name="navigate" color="primary"></ion-icon>&nbsp;Geolocation</ion-list-header>\n		<ion-card mode="ios">\n			<button ion-button full round [disabled]="isResettingOdometer" (click)="onClickResetOdometer()" ion-text color="default">Reset Odometer</button>\n		</ion-card>\n	  	<ion-item>\n	    	<ion-label color="primary">trackingMode</ion-label>\n	    	<ion-select [(ngModel)]="state.trackingMode" (ionChange)="onChangeValue(\'trackingMode\')" multiple="false">\n	    		<ion-option *ngFor="let option of trackingModeOptions" value="{{option}}" selected="{{option == state.trackingMode}}">\n	    			{{option}}\n	    		</ion-option>\n	    	</ion-select>\n	  	</ion-item>\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'geolocation\')">\n	  		<ion-label color="primary">{{setting.name}}</ion-label><span>foo</span>\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="false">\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n	    			{{option}}\n	    		</ion-option>\n	    	</ion-select>\n	  	</ion-item>\n\n	  	<ion-list-header mode="ios"><ion-icon name="walk" color="primary"></ion-icon>&nbsp;Activity Recognition</ion-list-header>\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'activity_recognition\')">\n	  		<ion-label color="primary">{{setting.name}}</ion-label>\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="{{setting.multiple==true}}">\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n	    			{{option}}\n	    		</ion-option>\n	    	</ion-select>\n	  	</ion-item>\n\n	  	<ion-list-header mode="ios">\n	  		<ion-icon name="cloud-upload" color="primary"></ion-icon>&nbsp;HTTP &amp; Persistence\n	  	</ion-list-header>\n\n	  	<ion-card mode="ios">\n	  		<button ion-button full round [disabled]="isSyncing" (click)="onClickSync()" color="danger">\n	  			<ion-spinner [hidden]="!isSyncing" name="dots" color="light"></ion-spinner>\n	  			<span [hidden]="isSyncing">Sync</span>\n	  		</button>\n	  		<ion-item>\n	  			<ion-input [(ngModel)]="state.url" (ionBlur)="onUpdateUrl()" type="url" placeholder="http://your.server.com/endpoint"></ion-input>\n	  		</ion-item>\n	  	</ion-card>\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'http\')">\n	  		<ion-label color="primary">{{setting.name}}</ion-label><span>foo</span>\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="false">\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n	    			{{option}}\n	    		</ion-option>\n	    	</ion-select>\n	  	</ion-item>\n\n	  	<ion-list-header mode="ios">\n	  		<ion-icon name="cog" color="primary"></ion-icon>&nbsp;Application\n	  	</ion-list-header>\n\n	  	<ion-item *ngFor="let setting of bgService.getPlatformSettings(\'application\')">\n	  		<ion-label color="primary">{{setting.name}}</ion-label><span>foo</span>\n	  		<ion-toggle *ngIf="setting.inputType == \'toggle\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" color="secondary"></ion-toggle>\n	  		<ion-select *ngIf="setting.inputType == \'select\'" [(ngModel)]="state[setting.name]" (ionChange)="onChangeValue(setting.name)" multiple="false">\n	    		<ion-option *ngFor="let option of bgService.getOptionsForSetting(setting.name)" value="{{option}}" selected="option == state[setting.name">\n	    			{{option}}\n	    		</ion-option>\n	    	</ion-select>\n	  	</ion-item>\n\n	  	<ion-item>\n	  		<ion-label color="primary">notificationPriority</ion-label>\n	 		<ion-select [(ngModel)]="state.notificationPriority" (ionChange)="onChangeValue(\'notificationPriority\')" multiple="false">\n    			<ion-option *ngFor="let option of notificationPriorityOptions" value="{{option}}" selected="{{option == state.notificationPriority}}">\n    				{{option}}\n    			</ion-option>\n    		</ion-select>\n    	</ion-item>\n\n	  	<ion-list-header mode="ios"><ion-icon name="bug" color="primary"></ion-icon>&nbsp;Logging &amp; Debug</ion-list-header>\n	  	<ion-card mode="ios">\n	  		<ion-row>\n				<ion-col align-self-stretch style="padding-right:5px;">\n  					<button ion-button full round color="danger" (click)="onClickDestroyLog()">Destroy log</button>\n				</ion-col>\n				<ion-col align-self-stretch style="padding-left: 5px;">\n					<button ion-button full round (click)="onClickEmailLog()" color="default">Email Log</button>\n				</ion-col>\n			</ion-row>\n	  		<ion-item>\n	  			<ion-input [(ngModel)]="email" (blur)="onUpdateEmail()" placeholder="your@email.com" type="email"></ion-input>\n	  		</ion-item>\n	  	</ion-card>\n\n	  	<ion-item>\n	  		<ion-label color="primary">logLevel</ion-label>\n	 		<ion-select [(ngModel)]="state.logLevel" (ionChange)="onChangeValue(\'logLevel\')" multiple="false">\n    			<ion-option *ngFor="let option of logLevelOptions" value="{{option}}" selected="{{option == state.logLevel}}">\n    				{{option}}\n    			</ion-option>\n    		</ion-select>\n    	</ion-item>\n\n	  	<ion-item>\n	  		<ion-label color="primary">Sounds &amp; Notification</ion-label>\n	  		<ion-toggle [(ngModel)]="state.debug" (ionChange)="onChangeValue(\'debug\')" color="secondary"></ion-toggle>\n	  	</ion-item>\n\n	  	<ion-list-header mode="ios"><ion-icon name="radio-button-on" color="primary"></ion-icon>&nbsp;Geofencing (City Drive)</ion-list-header>\n	  	<ion-card mode="ios">\n			<ion-row>\n				<ion-col align-self-stretch style="padding-right:5px;">\n  					<button ion-button full round color="danger" (click)="onClickRemoveGeofences()">Clear</button>\n				</ion-col>\n				<ion-col align-self-stretch style="padding-left: 5px;">\n  					<button ion-button full round color="primary" (click)="onClickLoadGeofences()">\n  						<ion-spinner [hidden]="!isAddingGeofences" name="dots" color="light"></ion-spinner>\n  						<span [hidden]="isAddingGeofences">Load</span>\n  					</button>\n				</ion-col>\n			</ion-row>\n		</ion-card>\n		<ion-item>\n	  		<ion-label color="primary">radius</ion-label>\n	  		<ion-select [(ngModel)]="settingsService.applicationState.geofenceRadius" (ionChange)="settingsService.onChange(\'geofenceRadius\')" multiple="false">\n    			<ion-option *ngFor="let option of settingsService.geofenceRadiusOptions" value="{{option}}" selected="{{option == settingsService.applicationState.geofenceRadius}}">\n    				{{option}}\n    			</ion-option>\n    		</ion-select>\n    	</ion-item>\n	  	<ion-item>\n	  		<ion-label color="primary">notifyOnEntry</ion-label>\n	  		<ion-toggle [(ngModel)]="settingsService.applicationState.geofenceNotifyOnEntry" (ionChange)="settingsService.onChange(\'geofenceNotifyOnEntry\')" color="secondary"></ion-toggle>\n	  	</ion-item>\n	  	<ion-item>\n	  		<ion-label color="primary">notifyOnExit</ion-label>\n	  		<ion-toggle [(ngModel)]="settingsService.applicationState.geofenceNotifyOnExit" (ionChange)="settingsService.onChange(\'geofenceNotifyOnExit\')" color="secondary"></ion-toggle>\n	  	</ion-item>\n	  	<ion-item>\n	  		<ion-label color="primary">notifyOnDwell</ion-label>\n	  		<ion-toggle [(ngModel)]="settingsService.applicationState.geofenceNotifyOnDwell" (ionChange)="settingsService.onChange(\'geofenceNotifyOnDwell\')" color="secondary"></ion-toggle>\n	  	</ion-item>\n	  	<ion-item>\n	  		<ion-label color="primary">loiteringDelay</ion-label>\n	  		<ion-select [(ngModel)]="settingsService.applicationState.geofenceLoiteringDelay" (ionChange)="settingsService.onChange(\'geofenceLoiteringDelay\')" multiple="false">\n    			<ion-option *ngFor="let option of settingsService.geofenceLoiteringDelayOptions" value="{{option}}" selected="{{option == settingsService.applicationState.geofenceLoiteringDelay}}">\n    				{{option}}\n    			</ion-option>\n    		</ion-select>\n    	</ion-item>\n\n    	<ion-list-header mode="ios"><ion-icon name="radio-button-on" color="primary"></ion-icon>&nbsp;DeviceSettings API</ion-list-header>\n\n    	<ion-card mode="ios">\n	  		<button ion-button full round (click)="onClickIgnoreBatteryOptimizations()" color="">Show Ignore Battery Optimizations</button>\n	  		<button ion-button full round (click)="onClickPowerManager()" color="">Show Power Manager</button>\n	  	</ion-card>\n\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\modals\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map