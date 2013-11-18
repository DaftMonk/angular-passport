'use strict';

angular.module('angularPassportApp')
  .factory('Blogs', function ($resource) {
    return $resource('api/blogs/:blogId', {
      blogId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  });
