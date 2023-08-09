
var api = require('express').Router();
//var api_router = require('router');

var feeder_api = require('./feeder');
var user_api = require('./users');

api.use('/feeder', feeder_api);
api.use('/user', user_api);

module.exports = api;