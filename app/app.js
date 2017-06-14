'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.dashboard',
  'weatherApp.settings',
  'weatherApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  })
    .when('/settings', {
      templateUrl: 'views/settings.html',
      controller: 'SettingsCtrl'
    })
    .otherwise({redirectTo: '/dashboard'});
}]);
