'use strict';

angular.module('angularPassportApp')
  .factory('Session', ['$resource', function ($resource) {
    return $resource('/auth/session/');
  }]);
