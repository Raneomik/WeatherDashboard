'use strict';

describe('weatherApp.dashboard module', function() {

  beforeEach(module('weatherApp.dashboard'));


  describe('dashboard controller', function(){

    var dashboardCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      dashboardCtrl = $controller('dashboardCtrl', {
        $scope: scope
      });
    }));

    it('should define dashboardCtrl', function() {
      expect(dashboardCtrl).toBeDefined();
    });

  });
});