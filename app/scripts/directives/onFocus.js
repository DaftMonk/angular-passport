'use strict';

angular.module('angularPassportApp')
  .directive('onFocus', function () {
    var FOCUS_CLASS = "on-focused";
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$focused = false;
        element.bind('focus', function(evt) {
          element.addClass(FOCUS_CLASS);
          scope.$apply(function() {ngModel.$focused = true;});
        }).bind('blur', function(evt) {
            element.removeClass(FOCUS_CLASS);
            scope.$apply(function() {ngModel.$focused = false;});
          });
      }
    }
  });
