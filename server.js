'use strict';

// Module dependencies.
var express = require('express'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    errorHandler = require('errorhandler'),
    cookieParser = require('cookie-parser'),
    http = require('http'),
    passport = require('passport'),
    path = require('path'),
    fs = require('fs'),
    MongoStore = require('connect-mongo')(session),
    config = require('./lib/config/config');

var app = express();

// Connect to database
var db = require('./lib/db/mongo').db;

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file);
});

var pass = require('./lib/config/pass');

// App Configuration
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
if ('development' == app.get('env')) {
  app.set('views', __dirname + '/app/views');
} else if ('production' == app.get('env')) {
  app.set('views', __dirname + '/views');
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
}

app.use(logger('dev'));
app.use(methodOverride());

// cookieParser should be above session
app.use(cookieParser());

// express/mongo session storage
app.use(session({
  resave: true,
  secret: 'MEAN',
  store: new MongoStore({
    url: config.db,
    collection: 'sessions'
  })
}));

// bodyParser should be above methodOverride
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

// use passport session
app.use(passport.initialize());
app.use(passport.session());

if ('development' == app.get('env')) {
  app.use(express.static(path.join(__dirname, '.tmp')));
  app.use(express.static(path.join(__dirname, 'app')));
  app.use(errorHandler());
} else if ('production' == app.get('env')) {
  app.use(express.static(path.join(__dirname, 'public')));
}

//Bootstrap routes
require('./lib/config/routes')(app);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});