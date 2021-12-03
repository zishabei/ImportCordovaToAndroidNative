webpackJsonp([3],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ENV__ = __webpack_require__(194);
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



// Only allow alpha-numeric usernames with '-' and '_'
var USERNAME_VALIDATOR = /^[a-zA-Z0-9_-]*$/;
/**
 * The HomePage will prompt you for a username so the plugin can post locations to tracker.transistorsoft.com/locations/{username}
 *
 * You can view your tracking in our web app in your browser at http://tracking.transistorsoft.com/{username}
 */
var HomePage = /** @class */ (function () {
    function HomePage(zone, navCtrl, navParams, platform, modalController, alertCtrl) {
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.platform.ready().then(this.onDeviceReady.bind(this));
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        var localStorage = window.localStorage;
        localStorage.removeItem('page');
    };
    HomePage.prototype.onDeviceReady = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].stop();
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].removeListeners().then(function () {
            Object(__WEBPACK_IMPORTED_MODULE_4__lib_authorization__["a" /* registerTransistorAuthorizationListener */])(_this.navCtrl);
        });
        var localStorage = window.localStorage;
        this.orgname = localStorage.getItem('orgname');
        this.username = localStorage.getItem('username');
        // Handle install of previous version, where orgname didn't exist and reverse the values, placing username into orgname.
        if (this.isValid(this.username) && this.orgname == null) {
            localStorage.setItem('orgname', this.username);
            localStorage.removeItem('username');
            this.orgname = this.username;
            this.username = null;
        }
        this.url = __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST;
        if (this.isValid(this.orgname)) {
            this.url += '/' + this.orgname;
        }
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getDeviceInfo().then(function (deviceInfo) {
            _this.deviceInfo = deviceInfo;
            var identifier = deviceInfo.model;
            if (_this.username) {
                identifier += '-' + _this.username;
            }
            _this.deviceIdentifier = identifier;
        });
        if (!this.isValid(this.orgname) || !this.isValid(this.username)) {
            // NOTE:  showing modal immediately on boot causes problem with focussing fields on
            // registration modal.
            //this.onClickRegister();
        }
    };
    HomePage.prototype.onClickNavigate = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var localStorage, orgname, username;
            return __generator(this, function (_a) {
                localStorage = window.localStorage;
                orgname = localStorage.getItem('orgname');
                username = localStorage.getItem('username');
                // Sanity check.
                if (!this.isValid(orgname) || !this.isValid(username)) {
                    return [2 /*return*/, this.onClickRegister()];
                }
                if (this.willDiscloseBackgroundPermission(value)) {
                    return [2 /*return*/];
                }
                // Persist the selected page.
                localStorage.setItem('page', value);
                this.navCtrl.setRoot(value);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.onClickRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var modal;
            return __generator(this, function (_a) {
                modal = this.modalController.create('RegistrationPage', {
                    orgname: this.orgname,
                    username: this.username
                });
                modal.onDidDismiss(function (result) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // Update our view-state -- BackgroundGeolocation state may have changed in Settings screen.
                        if (result != null) {
                            this.orgname = result.orgname;
                            this.username = result.username;
                            this.deviceIdentifier = this.deviceInfo.model + '-' + this.username;
                        }
                        return [2 /*return*/];
                    });
                }); });
                modal.present();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.isValid = function (name) {
        if (!name || (name.length == 0))
            return false;
        name = name.replace(/s+/, '');
        return USERNAME_VALIDATOR.test(name);
    };
    HomePage.prototype.willDiscloseBackgroundPermission = function (routeName) {
        var _this = this;
        var localStorage = window.localStorage;
        var hasDisclosedBackgroundPermission = (localStorage.getItem('hasDisclosedBackgroundPermission') !== null);
        if (!hasDisclosedBackgroundPermission) {
            var alert_1 = this.alertCtrl.create({
                title: 'Background Location Access',
                message: 'BG Geo collects location data to enable tracking your trips to work and calculate distance travelled even when the app is closed or not in use.\n\nThis data will be uploaded to tracker.transistorsoft.com where you may view and/or delete your location history.',
                buttons: [{
                        text: 'Close'
                    }]
            });
            alert_1.onDidDismiss(function () {
                localStorage.setItem('hasDisclosedBackgroundPermission', true);
                _this.onClickNavigate(routeName);
            });
            alert_1.present();
        }
        return !hasDisclosedBackgroundPermission;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="gold">\n    <ion-title mode="ios">BG Geolocation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <h1>Example Applications</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button full round (click)="onClickNavigate(\'HelloWorldPage\')" color="gold">Hello World</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button full round (click)="onClickNavigate(\'SimpleMapPage\')" color="gold">Simple Map</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button full round (click)="onClickNavigate(\'AdvancedPage\')" color="gold">Advanced</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-navbar color="light">\n    <p style="padding:5px">\n      These apps will post locations to Transistor Software\'s demo server.  You can view your tracking in the browser by visiting:</p>\n    <p style="text-align:center"><i [innerHTML]="url">/<strong [innerHTML]="orgname"></strong></i></p>\n\n    <ion-item>\n      <ion-label color="primary">Organization:</ion-label>\n      <ion-input [(ngModel)]="orgname" readonly="true"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">Device ID:</ion-label>\n      <ion-input [(ngModel)]="deviceIdentifier" readonly="true"></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col align-self-start style="padding-right:5px;">\n        <button ion-button full color="danger" (click)="onClickRegister()">Register</button>\n      </ion-col>\n      <ion-col align-self-end style="padding-right:5px;">\n        <a [href]="url" style="text-decoration:none">\n          <button ion-button full color="primary">View Server</button></a>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-footer>'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map