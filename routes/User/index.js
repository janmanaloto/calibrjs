var express = require('express');
var router = express.Router();
var userServices = require('../../services/UserServices.js');

router.get('/', function(req, res, next) {
	var user = new userServices();
	promise = user.getUsers();
	promise.success(function(docs) { 
	  	res.json(docs); 
	});
});

router.post('/', function(req, res){
	console.log(req.body.name);
});

module.exports = router;
