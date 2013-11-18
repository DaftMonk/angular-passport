'use strict';

describe('Controller: BlogscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPassportApp'));

  var BlogscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogscontrollerCtrl = $controller('BlogscontrollerCtrl', {
      $scope: scope
    });
  }));

});
