'use strict';

describe('Controller: BlogsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPassportApp'));

  var BlogsCtrl,
    scope,
    $httpBackend,
    blog, blogs,
    routeParams,
    $controller;

  beforeEach(inject(function (_$httpBackend_, _$controller_, $rootScope) {
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
    scope = $rootScope.$new();

    // mock blog
    blog = {name:'test', id: 1};
    // mock blogs
    blogs = [{name:'eeny', id: 2},{name:'meany', id: 3}];
    routeParams = {};
  }));

  it('should get a blog from route params id and bind to scope', function () {
    routeParams.blogId = blog.id;
    BlogsCtrl = $controller('BlogsCtrl', {
      $scope: scope,
      $routeParams: routeParams
    });

    $httpBackend.expectGET('api/blogs/' + blog.id).respond(blog);
    scope.findOne();
    $httpBackend.flush();
    expect(scope.blog.name).toBe(blog.name)
  });

  it('should get an array of blogs from route params id and bind to scope', function () {
    BlogsCtrl = $controller('BlogsCtrl', {
      $scope: scope,
      $routeParams: routeParams
    });

    $httpBackend.expectGET('api/blogs').respond(blogs);
    scope.find();
    $httpBackend.flush();
    expect(scope.blogs[0].name).toBe(blogs[0].name)
    expect(scope.blogs[1].name).toBe(blogs[1].name)
  });
});
