
var api = require('express').Router();
//var api_router = require('router');

var feeder_api = require('./feeder');
var user_api = require('./users');
var intruption_api = require('./intruption/api');

api.use('/feeder', feeder_api);
api.use('/user', user_api);
api.use('/intruption', intruption_api);

module.exports = api;