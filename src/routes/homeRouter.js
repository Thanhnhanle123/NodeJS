var express = require('express');
var route = express.Router();
var HomeController = require('../app/controller/HomeController');

route.use('/', HomeController.index);

module.exports = route;