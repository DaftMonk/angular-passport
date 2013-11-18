'use strict';

describe('Controller: LogoutCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPassportApp'));

  var LogoutCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/awesomeThings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);    
    scope = $rootScope.$new();
    LogoutCtrl = $controller('LogoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {

  });
});
