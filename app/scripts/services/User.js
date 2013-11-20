'use strict';

angular.module('angularPassportApp')
  .factory('User', function ($resource) {
    return $resource('/auth/users/:id/', {},
      {
        'update': {
          method:'PUT'
        }
      });
  });
