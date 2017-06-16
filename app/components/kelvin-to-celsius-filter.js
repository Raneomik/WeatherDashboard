'use strict';

/**
 * Temperature module
 */
angular.module('weatherApp.temperature', [])

  .filter('tempKtoC', function() {
    return function(input) {
      input = parseFloat(input) - 273.15;
      return input.toFixed(1);
    };
  });
