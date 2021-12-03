cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "ionic-plugin-keyboard.keyboard",
      "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
      "pluginId": "ionic-plugin-keyboard",
      "clobbers": [
        "cordova.plugins.Keyboard"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-background-fetch.BackgroundFetch",
      "file": "plugins/cordova-plugin-background-fetch/www/BackgroundFetch.js",
      "pluginId": "cordova-plugin-background-fetch",
      "clobbers": [
        "window.BackgroundFetch"
      ]
    },
    {
      "id": "cordova-background-geolocation-lt.BackgroundGeolocation",
      "file": "plugins/cordova-background-geolocation-lt/www/BackgroundGeolocation.js",
      "pluginId": "cordova-background-geolocation-lt",
      "clobbers": [
        "window.BackgroundGeolocation"
      ]
    },
    {
      "id": "cordova-background-geolocation-lt.API",
      "file": "plugins/cordova-background-geolocation-lt/www/API.js",
      "pluginId": "cordova-background-geolocation-lt"
    },
    {
      "id": "cordova-background-geolocation-lt.DeviceSettings",
      "file": "plugins/cordova-background-geolocation-lt/www/DeviceSettings.js",
      "pluginId": "cordova-background-geolocation-lt"
    },
    {
      "id": "cordova-background-geolocation-lt.Logger",
      "file": "plugins/cordova-background-geolocation-lt/www/Logger.js",
      "pluginId": "cordova-background-geolocation-lt"
    },
    {
      "id": "cordova-background-geolocation-lt.TransistorAuthorizationToken",
      "file": "plugins/cordova-background-geolocation-lt/www/TransistorAuthorizationToken.js",
      "pluginId": "cordova-background-geolocation-lt"
    }
  ];
  module.exports.metadata = {
    "ionic-plugin-keyboard": "2.2.1",
    "cordova-plugin-whitelist": "1.3.5",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-background-fetch": "7.0.3",
    "cordova-background-geolocation-lt": "4.3.0"
  };
});