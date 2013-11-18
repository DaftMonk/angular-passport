'use strict';

angular.module('angularPassportApp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.menu = [{
      "title": "Blogs",
      "link": "blogs"
    }];

    $scope.authMenu = [{
      "title": "Create New Blog",
      "link": "blogs/create"
    }];
  });
