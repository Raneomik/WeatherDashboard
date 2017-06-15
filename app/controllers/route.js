'use strict';

angular.module('weatherApp.routeCheck', [])
  .controller('routeCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    }
  });
