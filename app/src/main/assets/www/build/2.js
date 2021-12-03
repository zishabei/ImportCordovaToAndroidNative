webpackJsonp([2],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
            ],
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
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




// Only allow alpha-numeric usernames with '-' and '_'
var USERNAME_VALIDATOR = /^[a-zA-Z0-9_-]*$/;
/**
 * Generated class for theRegistrationPage page.
 */
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, viewController, platform, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.platform = platform;
        this.toastController = toastController;
        this.orgname = this.navParams.get('orgname');
        this.username = this.navParams.get('username');
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
        this.platform.ready().then(this.onReady.bind(this));
    };
    RegistrationPage.prototype.onReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deviceInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].getDeviceInfo()];
                    case 1:
                        deviceInfo = _a.sent();
                        this.devicename = deviceInfo.manufacturer + ' ' + deviceInfo.model;
                        this.url = __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST;
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.onClickCancel = function () {
        this.viewController.dismiss(null);
    };
    RegistrationPage.prototype.onClickRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errors, msg, token, localStorage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errors = [];
                        if (!this.isValid(this.orgname))
                            errors.push('Organization name');
                        if (!this.isValid(this.username))
                            errors.push('Username');
                        if (errors.length > 0) {
                            msg = "Invalid " + errors.join(', ');
                            this.toastController.create({
                                message: msg,
                                duration: 3000,
                                cssClass: 'toast-error',
                                position: 'top'
                            }).present();
                            return [2 /*return*/, false];
                        }
                        // Destroy existing cached token.
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].destroyTransistorAuthorizationToken(__WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST)];
                    case 1:
                        // Destroy existing cached token.
                        _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].findOrCreateTransistorAuthorizationToken(this.orgname, this.username, __WEBPACK_IMPORTED_MODULE_3__ENV__["a" /* default */].TRACKER_HOST)];
                    case 2:
                        token = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].setConfig({
                                transistorAuthorizationToken: token
                            })];
                    case 3:
                        _a.sent();
                        localStorage = window.localStorage;
                        localStorage.setItem('orgname', this.orgname);
                        localStorage.setItem('username', this.username);
                        this.viewController.dismiss({
                            orgname: this.orgname,
                            username: this.username
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationPage.prototype.isValid = function (name) {
        if (!name || (name.length == 0))
            return false;
        name = name.replace(/s+/, '');
        return USERNAME_VALIDATOR.test(name);
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\home\registration\registration.html"*/'<ion-header>\n <ion-navbar color="gold">\n 	<ion-buttons start>\n 		<button ion-button (click)="onClickCancel()" style="font-size:2.3rem"><ion-icon name="close"></ion-icon></button>\n 	</ion-buttons>\n 	<ion-title>Device Registration</ion-title>\n\n </ion-navbar>\n</ion-header>\n\n<ion-content padding scrollY>\n	<ion-label class="devicename">\n		<span [innerHTML]="devicename"></span>\n	</ion-label>\n	<ion-item>\n		<ion-label color="primary" stacked>Organization name</ion-label>\n		<ion-input [(ngModel)]="orgname" type="url" placeholder="eg: Company name"></ion-input>\n	</ion-item>\n\n	<ion-item>\n		<ion-label color="primary" stacked>Username</ion-label>\n		<ion-input [(ngModel)]="username"type="url" placeholder="eg: Github username or initials"></ion-input>\n	</ion-item>\n\n	<ion-card>\n		<ion-item text-wrap>\n			<ion-label>\n				Please provide an Organization identifier and Username to register your device with the Demo Server.\n			</ion-label>\n		</ion-item>\n\n		<ion-item text-wrap>\n			<ion-label>\n				You will access your results at the url:\n			</ion-label>\n		</ion-item>\n\n		<ion-item text-wrap>\n			<ion-label class="url">\n				<span [innerHTML]="url"></span>/<span [innerHTML]="orgname"></span>\n			</ion-label>\n		</ion-item>\n	</ion-card>\n</ion-content>\n\n<ion-footer color="transparent">\n\n 	<button ion-button full large color="danger" style="margin:0;" (click)="onClickRegister()">Register</button>\n\n\n</ion-footer>'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\home\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ })

});
//# sourceMappingURL=2.js.map