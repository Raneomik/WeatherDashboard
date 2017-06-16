'use strict';

describe('weatherApp.dashboard module', function() {

  beforeEach(module('weatherApp.dashboard'));

  var dashboardCtrl;

  beforeEach(inject(function($controller) {
    dashboardCtrl = $controller('dashboardCtrl');
  }));

  it('should define dashboardCtrl', function() {
    expect(dashboardCtrl).toBeDefined();
  });
});