'use strict';

/**
 * Widget management module
 */
angular.module('weatherApp.widgetManager', ['weatherApp.service'])

  .value('widgets', [])

  .controller('widgetCtrl', function($scope, $rootScope, apiQueryService, widgets) {

    /**
     * Add a Widget
     * @param searchType
     */
    $scope.addWeatherWidget = function(searchType) {

      if(!$scope.weatherSearch){
        $rootScope.error = {
          message: 'no data provided'
        };
        console.log($scope.error);
        return;
      }

      var apiRequest;

      if('city-id' === searchType){
        apiRequest = apiQueryService.byId($scope.weatherSearch);
      } else if('city-name' === searchType){
        apiRequest = apiQueryService.byName($scope.weatherSearch);
      } else{
        $rootScope.error = {
          message: 'unknown search type'
        };
        return;
      }

      apiRequest.success(function(response) {
        widgets.push({
          name: response.name,
          cityId: response.id,
          country: response.sys.country,
          iconId: response.weather[0].id,
          temp: response.main.temp
        });
        $rootScope.error = false;
      })
        .error(function(error) {
          $rootScope.error = error;
          console.log($scope.error);
        });

      $scope.weatherSearch = '';
    };

    /**
     * Remove a Widget
     * @param widget
     */
    $scope.removeWeatherWidget = function(widget) {
      widgets.splice(widgets.indexOf(widget), 1);
    };

    /**
     * Update Widget's main info
     * @param widget
     */
    $scope.updateWidget = function(widget) {
      apiQueryService.byId(widget.cityId)
        .success(function(response) {
          widget.iconId = response.weather[0].id;
          widget.temp = response.main.temp;
          $rootScope.error = false;
        })
        .error(function(error) {
          $rootScope.error = error;
          console.log($scope.error);
        });

    };

    /**
     * keep previous widgets
     * @type {*}
     */
    $scope.widgets = widgets;
  });