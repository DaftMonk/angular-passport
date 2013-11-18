'use strict';

describe('Service: Blogs', function () {

  // load the service's module
  beforeEach(module('angularPassportApp'));

  // instantiate service
  var Blogs;
  beforeEach(inject(function (_Blogs_) {
    Blogs = _Blogs_;
  }));

  it('should do something', function () {
    //expect(!!Blogs).toBe(true);
  });

});
