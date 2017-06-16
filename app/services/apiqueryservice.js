
angular.module('weatherApp.service', [])

  .factory('apiQueryService', ['$http', function ($http) {
    var appid = '5d61d8cdd94e863ffd486496b4b0075a';
    return {
      byId: function(query) {
        return $http.get(`http://api.openweathermap.org/data/2.5/weather?id=${query}&appid=${appid}`);
      },
      byName: function(query) {
        return $http.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${appid}`);
      }
    }
  }]);