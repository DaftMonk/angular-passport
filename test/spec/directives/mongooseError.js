'use strict';

describe('Directive: mongooseError', function () {

  // load the directive's module
  beforeEach(module('angularPassportApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
//    element = angular.element('<div mongoose-error></div mongoose-error>');
//    element = $compile(element)(scope);
//    expect(element.text()).toBe('this is the mongoose directive');
  }));
});
