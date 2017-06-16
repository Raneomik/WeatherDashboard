'use strict';

describe('weatherApp.settings module', function() {

  var settingsCtrl,
    scope;

  beforeEach(module('weatherApp.settings'));

  describe('settings controller', function(){

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      settingsCtrl = $controller('settingsCtrl', {
        $scope: scope
      });
    }));

    it('should define settingsCtrl and check its variables', function() {
      expect(settingsCtrl).toBeDefined();
      expect(scope.selectedItem).toEqual("City Name");
      expect(scope.searchData).toEqual("city-name");
    });
  });
});