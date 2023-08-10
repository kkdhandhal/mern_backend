
var intruption = require('express').Router();
//var api_router = require('router');

var esd_api = require('./esd');
//var user_api = require('./users');

api.use('/esd', esd_api);
//api.use('/user', user_api);

module.exports = intruption;