'use strict';

angular.module('angularPassportApp')
  .factory('Session', function ($resource) {
    return $resource('/auth/session/');
  });
