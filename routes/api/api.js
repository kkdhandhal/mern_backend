
var api = require('express').Router();
//var api_router = require('router');

var feeder_api = require('./feeder');
var office_api = require('./office');

api.use('/feeder', feeder_api);
api.use('/office', office_api);

module.exports = api;