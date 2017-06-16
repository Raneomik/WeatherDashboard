'use strict';

/**
 * Module "helper" for current route check
 */
angular.module('weatherApp.routeCheck', [])
  .controller('routeCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    }
  });
