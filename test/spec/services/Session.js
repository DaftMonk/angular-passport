'use strict';

describe('Service: Session', function () {

  // load the service's module
  beforeEach(module('angularPassportApp'));

  // instantiate service
  var Session;
  beforeEach(inject(function (_Session_) {
    Session = _Session_;
  }));

  it('should do something', function () {
    //expect(!!Session).toBe(true);
  });

});
