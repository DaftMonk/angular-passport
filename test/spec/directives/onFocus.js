'use strict';

describe('Directive: onFocus', function () {

  // load the directive's module
  beforeEach(module('angularPassportApp'));

  var element, container,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    container = angular.element('<form name="form"></form>');
    element = angular.element('<input ng-model="model" name="model" on-focus>');
    container.append(element);

    container = $compile(container)(scope);
    scope.$digest();
  }));

  it('should add focus class on focus', inject(function ($compile) {
    expect(element.hasClass('focused')).toBe(false);
    browserTrigger(element, 'focus')
    expect(element.hasClass('focused')).toBe(true);
  }));

  it('should remove focus class on blur', inject(function ($compile) {
    browserTrigger(element, 'focus')
    expect(element.hasClass('focused')).toBe(true);

    browserTrigger(element, 'blur')
    expect(element.hasClass('focused')).toBe(false);
  }));

  it('should update $focused on form model when focused', inject(function ($compile) {
    browserTrigger(element, 'focus')
    scope.$digest();
    expect(scope.form.model.$focused).toBe(true);
  }));

  it('should update $focused on model when blurred', inject(function ($compile) {
    browserTrigger(element, 'focus')
    scope.$digest();
    expect(scope.form.model.$focused).toBe(true);

    browserTrigger(element, 'blur')
    scope.$digest();
    expect(scope.form.model.$focused).toBe(false);
  }));
});
