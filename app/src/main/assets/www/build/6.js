webpackJsonp([6],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeofencePageModule", function() { return GeofencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__geofence__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeofencePageModule = /** @class */ (function () {
    function GeofencePageModule() {
    }
    GeofencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__geofence__["a" /* GeofencePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__geofence__["a" /* GeofencePage */]),
            ],
        })
    ], GeofencePageModule);
    return GeofencePageModule;
}());

//# sourceMappingURL=geofence.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeofencePage; });
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


////
// NOTE:  normally you will simply import from "cordova-background-geolocation-lt" or "cordova-background-geolocation"
// This is done only for convenience in the SampleApp for easily switching between public / private version of the plugin
//

/*
  Generated class for the Geofence page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GeofencePage = /** @class */ (function () {
    function GeofencePage(alertCtrl, navParams, viewCtrl) {
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bgService = this.navParams.get('bgService');
        this.identifier = '';
        this.radius = '200';
        this.latitude = this.navParams.get('latitude');
        this.longitude = this.navParams.get('longitude');
        this.notifyOnEntry = true;
        this.notifyOnExit = true;
        this.notifyOnDwell = false;
        this.radiusOptions = [100, 150, 200, 500, 1000, 5000, 10000];
    }
    GeofencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GeofencePage');
    };
    GeofencePage.prototype.onClickCancel = function () {
        this.viewCtrl.dismiss();
    };
    GeofencePage.prototype.onClickSubmit = function () {
        var _this = this;
        var radius = parseInt(this.radius, 10);
        __WEBPACK_IMPORTED_MODULE_2__cordova_background_geolocation__["a" /* default */].addGeofence({
            identifier: this.identifier,
            radius: radius,
            latitude: this.latitude,
            longitude: this.longitude,
            notifyOnEntry: this.notifyOnEntry,
            notifyOnExit: this.notifyOnExit,
            notifyOnDwell: this.notifyOnDwell,
            loiteringDelay: this.loiteringDelay,
            extras: {
                radius: radius,
                center: { latitude: this.latitude, longitude: this.longitude }
            }
        }, function (identifier) {
            _this.bgService.playSound('ADD_GEOFENCE');
            _this.viewCtrl.dismiss();
        }, function (error) {
            _this.alert('Error', error);
        });
    };
    GeofencePage.prototype.alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Dismiss']
        }).present();
    };
    GeofencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-geofence',template:/*ion-inline-start:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\modals\geofence\geofence.html"*/'<!--\n  Generated template for the Geofence page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="gold" mode="ios">\n\n  	<ion-buttons start>\n 		<button ion-button (click)="onClickCancel()">Cancel</button>\n 	</ion-buttons>\n 	<ion-title mode="ios">Geofence</ion-title>\n	<ion-buttons end>\n    	<button outline ion-button (click)="onClickSubmit()" ion-text color="dark">\n    		Save\n    	</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<ion-label color="primary">Identifier</ion-label>\n	  		<ion-input [(ngModel)]="identifier" placeholder=""></ion-input>\n	  	</ion-item>\n	  	<ion-item>\n	    	<ion-label color="primary">radius</ion-label>\n	    	<ion-select [(ngModel)]="radius" multiple="false">\n	    		<ion-option *ngFor="let option of radiusOptions" value="{{option}}" selected="200">\n	    			{{option}} meters\n	    		</ion-option>\n	    	</ion-select>\n	  	</ion-item>\n\n	  	<ion-item>\n		    <ion-label color="primary">notifyOnEntry</ion-label>\n		    <ion-checkbox [(ngModel)]="notifyOnEntry"></ion-checkbox>\n		</ion-item>\n\n		<ion-item>\n		    <ion-label color="primary">notifyOnExit</ion-label>\n		    <ion-checkbox [(ngModel)]="notifyOnExit"></ion-checkbox>\n		</ion-item>\n\n		<ion-item>\n		    <ion-label color="primary">notifyOnDwell</ion-label>\n		    <ion-checkbox [(ngModel)]="notifyOnDwell"></ion-checkbox>\n		</ion-item>\n\n		<ion-item>\n			<ion-label color="primary">loiteringDelay(ms)</ion-label>\n	  		<ion-input [(ngModel)]="loiteringDelay" type="number" placeholder="Delay before DWELL"></ion-input>\n	  	</ion-item>\n	</ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"D:\githubDemo\cordova-background-geolocation-SampleApp-master\cordova-background-geolocation-SampleApp-master\src\pages\advanced\modals\geofence\geofence.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], GeofencePage);
    return GeofencePage;
}());

//# sourceMappingURL=geofence.js.map

/***/ })

});
//# sourceMappingURL=6.js.map