'use strict';

// Module dependencies.
var express = require('express'),
    http = require('http'),
    passport = require('passport'),
    path = require('path'),
    fs = require('fs'),
    mongoStore = require('connect-mongo')(express);

var app = express();

// Connect to database
var db = require('./lib/db/mongo').db;

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  require(modelsPath + '/' + file);
});

var pass = require('./lib/config/pass');

app.configure('development', function(){
  app.use(express.static(path.join(__dirname, '.tmp')));
  app.use(express.static(path.join(__dirname, 'app')));
  app.use(express.errorHandler());
});

app.configure('production', function(){
  app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
  app.use(express.static(path.join(__dirname, 'public')));
});

// App Configuration
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.logger('dev'));

// cookieParser should be above session
app.use(express.cookieParser());

// bodyParser should be above methodOverride
app.use(express.bodyParser());
app.use(express.methodOverride());

// express/mongo session storage
app.use(express.session({
  secret: 'MEAN',
  store: new mongoStore({
    db: db.connection.db,
    collection: 'sessions'
  })
}));

// use passport session
app.use(passport.initialize());
app.use(passport.session());

//routes should be at the last
app.use(app.router);

//Bootstrap routes
require('./lib/config/routes')(app);

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});