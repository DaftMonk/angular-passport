'use strict';

angular.module('angularPassportApp')
  .constant('focusConfig', {
    focusClass: 'focused'
  })

  .directive('onFocus', function (focusConfig) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$focused = false;
        element
          .bind('focus', function(evt) {
            element.addClass(focusConfig.focusClass);
            scope.$apply(function() {ngModel.$focused = true;});
          })
          .bind('blur', function(evt) {
            element.removeClass(focusConfig.focusClass);
            scope.$apply(function() {ngModel.$focused = false;});
          });
      }
    }
  });
