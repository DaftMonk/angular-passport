'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPassportApp'));

  var LoginCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });

    // mock angular form
    scope.optionsForm = {model:{}};
    scope.optionsForm.model.$setValidity = function() {};

    // mock user
    scope.user = { email: '', password: '', username: '' };
  }));

  it('should set scope.errors[field] on mongoose errors', function () {
    $httpBackend.expectPOST('/auth/session').respond(400, {errors:{'model': {type:'Test Error'}}});

    scope.login(scope.optionsForm);
    $httpBackend.flush();
    expect(scope.errors.model).toBe('Test Error')
  });
});
