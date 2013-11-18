'use strict';

angular.module('angularPassportApp')
  .controller('LogoutCtrl', function ($scope, Auth, $location) {
    Auth.logout(function(err) {
      if(!err) {
        $location.path('/');
      }
    });
  });