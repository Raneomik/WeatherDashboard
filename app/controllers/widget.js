'use strict';

/**
 * Widget management module
 */
angular.module('weatherApp.widgetList', [])
  .controller('widgetCtrl', ['$scope', '$http', 'widgets', 'appid', function($scope, $http, widgets, appid) {
    $scope.fail = [];
    /**
     * Add a Widget
     * @param searchType
     */
    $scope.addWeatherWidget = function(searchType) {

      if(!$scope.weatherSearch){
        $scope.fail.push({
          cod: -1,
          message: 'No data provided'
        });
        return;
      }

      var apiRequest = '';

      if('city-id' === searchType){
        apiRequest = `http://api.openweathermap.org/data/2.5/weather?id=${$scope.weatherSearch}&appid=${appid}`;
      } else if('city-name' === searchType){
        apiRequest = `http://api.openweathermap.org/data/2.5/weather?q=${$scope.weatherSearch}&appid=${appid}`;
      }

      /**
       * API Get Request
       */
      $http.get(apiRequest)
        .success(function(response) {
          widgets.push({
            name: response.name,
            cityId: response.id,
            country: response.sys.country,
            iconId: response.weather[0].id,
            temp: response.main.temp
          });
        })
        .error(function(error) {
          $scope.fail = error;
          console.log($scope.fail);
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
      $http.get(`http://api.openweathermap.org/data/2.5/weather?id=${widget.cityId}&appid=${appid}`)
        .success(function(response) {
          widget.iconId = response.weather[0].id;
          widget.temp = response.main.temp
        })
        .error(function(error) {
          $scope.fail = error;
        });

    };

    /**
     * keep previous widgets
     * @type {*}
     */
    $scope.widgets = widgets;
  }]);