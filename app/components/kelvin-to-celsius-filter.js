'use strict';

angular.module('weatherApp.temperature', [])

  .filter('tempKtoC', function(version) {
    return function(input) {
      input = parseFloat(input);
      return (input - 273).toFixed(1);
    };
  });
