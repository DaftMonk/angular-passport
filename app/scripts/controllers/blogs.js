'use strict';

angular.module('angularPassportApp')
  .controller('BlogsCtrl', function ($scope, Blogs, $location, $routeParams, $rootScope) {

    $scope.create = function() {
      var blog = new Blogs({
        title: this.title,
        content: this.content
      });
      blog.$save(function(response) {
        $location.path("blogs/" + response._id);
      });

      this.title = "";
      this.content = "";
    };

    $scope.remove = function(blog) {
      blog.$remove();

      for (var i in $scope.blogs) {
        if ($scope.blogs[i] == blog) {
          $scope.blogs.splice(i, 1);
        }
      }
    };

    $scope.update = function() {
      var blog = $scope.blog;
      blog.$update(function() {
        $location.path('blogs/' + blog._id);
      });
    };

    $scope.find = function() {
      Blogs.query(function(blogs) {
        $scope.blogs = blogs;
      });
    };

    $scope.findOne = function() {
      Blogs.get({
        blogId: $routeParams.blogId
      }, function(blog) {
        $scope.blog = blog;
      });
    };
  });
