'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.routeCheck',
  'weatherApp.dashboard',
  'weatherApp.settings',
  'weatherApp.version',
  'weatherApp.widgetManager',
  'weatherApp.temperature'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'settingsCtrl'
      })
      .otherwise({redirectTo: '/dashboard'});
  }])