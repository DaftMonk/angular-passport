'use strict';

describe('Controller: NavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPassportApp'));

  var NavbarCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));
});
