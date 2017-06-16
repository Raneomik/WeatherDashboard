'use strict';

describe('weatherApp.temperature filter', function() {

  var filter;

  beforeEach(module('weatherApp.temperature'));
  beforeEach(inject(function($filter) {
    filter = $filter;
  }));

  it('should convert kelvin to celsius', function() {
    expect(filter('tempKtoC')('273.15')).toEqual('0.0');
    expect(filter('tempKtoC')('0')).toEqual('-273.1');
    expect(filter('tempKtoC')('300')).toEqual('26.9');
  });

});
