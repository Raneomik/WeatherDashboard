'use strict';

/**
 * Widget management module
 */
angular.module('weatherApp.widgetList', [])
  .controller('widgetCtrl', ['$scope', '$rootScope', '$http', 'widgets', 'appid',
    function($scope, $rootScope, $http, widgets, appid) {

    $rootScope.error = false;
    /**
     * Add a Widget
     * @param searchType
     */
    $scope.addWeatherWidget = function(searchType) {

      if(!$scope.weatherSearch){
        $rootScope.error = {
          triggered: true,
          message: 'no data provided'
        };
        console.log($scope.error);
        return;
      }

      var apiRequest = '';

      if('city-id' === searchType){
        apiRequest = `http://api.openweathermap.org/data/2.5/weather?id=${$scope.weatherSearch}&appid=${appid}`;
      } else if('city-name' === searchType){
        apiRequest = `http://api.openweathermap.org/data/2.5/weather?q=${$scope.weatherSearch}&appid=${appid}`;
      }
      $http.get(apiRequest)
        .success(function(response) {
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
          $rootScope.error.triggered = true;
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
      $http.get(`http://api.openweathermap.org/data/2.5/weather?id=${widget.cityId}&appid=${appid}`)
        .success(function(response) {
          widget.iconId = response.weather[0].id;
          widget.temp = response.main.temp;
          $rootScope.error = false;
        })
        .error(function(error) {
          $rootScope.error = error;
          $rootScope.error.triggered = true;
          console.log($scope.error);
        });

    };

    /**
     * keep previous widgets
     * @type {*}
     */
    $scope.widgets = widgets;
  }]);