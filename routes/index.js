var express = require('express');
var router = express.Router();
var userServices = require('../services/UserServices.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	var user = new userServices();
	promise = user.getUsers();
	promise.success(function(docs) { 
	  	res.send(docs); 
	});
});

module.exports = router;
