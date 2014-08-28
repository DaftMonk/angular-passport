'use strict';

var mongoose = require('mongoose'),
    config = require('../config/config')

var mongoOptions = { db: { safe: true } };

exports.mongoose = mongoose;

// Connect to Database
exports.db = mongoose.connect(config.db, mongoOptions, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + config.db + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + config.db);
  }
});