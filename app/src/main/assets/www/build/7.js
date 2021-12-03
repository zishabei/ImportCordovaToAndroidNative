webpackJsonp([7],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
* About page.
*
*/
var AboutPage = /** @class */ (function () {
    function AboutPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.bgService = this.navParams.get('bgService');
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.bgService.playSound("FLOURISH");
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.onClickClose = function () {
        this.bgService.playSound("CLOSE");
        this.viewCtrl.dismiss();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\modals\about\about.html"*/'<!--\n  Generated template for the About page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-toolbar mode="ios" color="dark">\n		<img class="logo" src="assets/imgs/transistor-logo.svg" />\n		<ion-buttons end>\n			<a href="http://www.transistorsoft.com/shop/products/cordova-background-geolocation"><button round outline ion-button color="gold">Buy Now</button></a>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n<ion-content padding style="background-color: #fedd1e">\n	<h5>Cordova Background Geolocation</h5>\n	<p>The most sophisticated, battery-efficient background-geolocation and geofencing plugin for Cordova</p>\n	<ul>\n		<li>The plugin <em>knowns</em> when the device is <strong>moving</strong> &amp; <strong>stationary</strong>.  When the device is detected to be moving, the plugin will automatically start tracking.  It doesn\'t matter whether the app is in foreground or background.</li>\n		<li><strong>iOS</strong> typically requires movement of 200 meters beyond the last known location before tracking will engage.  <strong>Android</strong> is much more sensitive to triggering:  it will typically trigger tracking simply by walking a few meters.</li>\n		<li>Enter an url in the settings screen to upload data to your server.</li>\n		<li>Add geofences with long-press on map.</li>\n		<li>Test geofences in iOS simulator with City Drive then click "Load Geofences" in the Settings Screen.</li>\n	</ul>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar color="gold">\n		<button block round ion-button (click)="onClickClose()" color="dark">Close</button>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\modals\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=7.js.map