'use strict';

/**
 *  Route middleware to ensure user is authenticated.
 */
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.send(401);
}

/**
 * Blog authorizations routing middleware
 */
exports.blog = {
  hasAuthorization: function(req, res, next) {
    if (req.blog.creator._id.toString() !== req.user._id.toString()) {
      return res.send(403);
    }
    next();
  }
};