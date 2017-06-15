'use strict';

angular.module('weatherApp.settings', [])
  .controller('settingsCtrl',['$scope', function($scope ){
    $scope.selectedItem = "City Name";
    $scope.searchData = 'city-name';

    $scope.selectSearchType = function(item, slug) {
      $scope.selectedItem = item;
      $scope.searchData = slug;
    }

    $('#add-widget-info').tooltip();
  }]);