'use strict';

angular.module('angularPassportApp')
  .factory('User', ['$resource', function ($resource) {
    return $resource('/auth/users/:id/', {},
      {
        'update': {
          method:'PUT'
        }
      });
  }]);
