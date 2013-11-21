Angular-Passport
================

## Overview

An AngularJS application that uses Express, Passport, MongoDB, and Mongoose. Demonstrating: 

* Authentication using Passport
* Account creation and server validation with Mongoose.
* CRUD interface for creating posts with mongoDB
* Client validations for account creation including a directive for validating if a username is available.
* Authorization middleware for checking if you are allowed to edit a post.

## Live Example
Try out the app: <http://angular-passport.herokuapp.com>

## How to use angular-passport

Before you continue, make sure you have MongoDB installed <http://www.mongodb.org/downloads/>. 

### Setup
Run `npm install`, followed by `bower install` to grab the dependencies.

### Running the app
Run `grunt server` to test the app in development mode with livereload, or run `grunt server:dist` to run it in a minified and optimized production mode.

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
