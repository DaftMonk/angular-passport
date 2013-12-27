Angular-Passport
================

An AngularJS application that uses Express, Passport, MongoDB. Demonstrating: 

* Authentication using Passport
* Account creation and server validation with Mongoose.
* CRUD interface for creating posts with MongoDB
* Client validations for account creation including a directive for validating if a username is available.
* Authorization middleware for checking if you are allowed to edit a post.
* Unit tests for client code

## Live Example
Try out the app: <http://angular-passport.herokuapp.com> (Heroku app may have gone to sleep, reload the page if it doesn't work.)

## How to use angular-passport

Before you continue, make sure you have MongoDB installed <http://www.mongodb.org/downloads/>. 

### Setup
Run `npm install`, followed by `bower install` to grab the dependencies.

### Running the app
Run `grunt server` to start the app in development mode with livereload, or run `grunt server:dist` to run it in a minified and optimized production build.

### Testing
Run `grunt test` to start the karma test runner.

## Directory structure
    +---server.js           -> Bootstrap Server
    |
    +---app                 -> Client
    |   +---scripts
    |   |   +---controllers
    |   |   +---directives
    |   |   \---services
    |   |
    |   +---styles
    |   \---views
    |       \---partials
    |           \---blogs
    +---lib                 -> Server
    |   +---config
    |   +---controllers
    |   +---db
    |   \---models
    |           
    +---test                -> Client unit tests
