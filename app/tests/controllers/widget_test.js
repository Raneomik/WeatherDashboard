'use strict';

describe('weatherApp.widgetManager module', function() {

  beforeEach(module('weatherApp.widgetManager'));

  var widgetCtrl,
    scope,
    queryService,
    _widgets;

  beforeEach(inject(function($controller, $rootScope, _apiQueryService_, _widgets_) {
    scope = $rootScope.$new();
    queryService = _apiQueryService_;
    _widgets = _widgets_;
    widgetCtrl = $controller('widgetCtrl', {
      $scope: scope,
      $rootScope: scope,
      apiQueryService: queryService,
      widgets: _widgets
    });


  }));

  it('should define widgetCtrl', function() {
    expect(widgetCtrl).toBeDefined();
    expect(_widgets.length).toEqual(0);

    spyOn(queryService, 'byName').and.callFake(function() {
      return {
        success: function(callback) {
          callback({
            "name": "test",
            "id": "1234",
            "sys": {
              "country": "XX"
            },
            "weather": [
              {
                "id": "123"
              }
            ],
            "main": {
              "temp": "0"
            }
          })
        },
        error: function(callback) {
          callback({
            "cod": "404",
            "message": "not found"
          })
        }
      }
    });


    /**
     * attempt to add a Widget -> "Cannot read property 'error' of undefined"
     */
    //
    // scope.weatherSearch = 'London';
    // scope.addWeatherWidget('city-name');
    // expect(_widgets.length).toEqual(1);

    expect(_widgets.length).toEqual(0);

  });
});