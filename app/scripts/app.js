'use strict';

angular.module('angularPassportApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'http-auth-interceptor',
  'ui.bootstrap'
])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/blogs', {
        templateUrl: 'partials/blogs/list.html',
        controller: 'BlogsCtrl'
      })
      .when('/blogs/create', {
        templateUrl: 'partials/blogs/create.html',
        controller: 'BlogsCtrl'
      })
      .when('/blogs/:blogId/edit', {
        templateUrl: 'partials/blogs/edit.html',
        controller: 'BlogsCtrl'
      })
      .when('/blogs/:blogId', {
        templateUrl: 'partials/blogs/view.html',
        controller: 'BlogsCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }])

  .run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

    //watching the value of the currentUser variable.
    $rootScope.$watch('currentUser', function(currentUser) {
      // if no currentUser and on a page that requires authorization then try to update it
      // will trigger 401s if user does not have a valid session
      var isValidPath = false, validPaths = [/^\/$/, /^\/blogs$/, /^\/blogs\/[0-9a-zA-Z]*$/, /^\/login$/, /^\/logout$/, /^\/signup$/];
      var path = $location.path();
      // because /blogs/create matches one of the regular expressions, leave isValidPath=false
      if (path != '/blogs/create') {
        for (var i = 0; i < validPaths.length; i++) {
          if (path.search(validPaths[i]) >= 0) {
            isValidPath = true;
            break;
          }
        }
      }
      if (!currentUser && !isValidPath) {
        Auth.currentUser();
      }
    });

    // On catching 401 errors, redirect to the login page.
    $rootScope.$on('event:auth-loginRequired', function() {
      $location.path('/login');
      return false;
    });
  }]);