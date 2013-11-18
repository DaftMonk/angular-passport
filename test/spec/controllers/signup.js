'use strict';

describe('Controller: SignupCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPassportApp'));

  var SignupCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/awesomeThings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);    
    scope = $rootScope.$new();
    SignupCtrl = $controller('SignupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {

  });
});
