'use strict';

/**
 * Settings module, for settings controller got at '/settings' route
 */
angular.module('weatherApp.settings', [])
  .controller('settingsCtrl',['$scope', function($scope){
    $scope.selectedItem = "City Name";
    $scope.searchData = 'city-name';

    $scope.selectSearchType = function(item, slug) {
      $scope.selectedItem = item;
      $scope.searchData = slug;
    };

  }]);