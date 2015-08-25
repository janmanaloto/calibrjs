var express = require('express');
var router = express.Router();
var userServices = require('../../services/UserServices.js');

router.get('/', function(req, res, next) {
	console.log(req.body);
	var user = new userServices();
	user.getUsers(function(data) {
		res.json(data);
	});
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	var user = new userServices();
	user.getUsers(function(data) {
		res.json(data);
	});
});

router.post('/add', function(req, res, next) {
	var user = new userServices();
	user.addUser(req.body.username, req.body.password, req.body.email,
		function(msg) {
			res.redirect("/login.html");
		}
	);
});

router.post('/get', function(req, res, next) {
	var user = new userServices();
	user.getUsers(
		function(msg) {
			res.json(msg);
		}
	);
});

module.exports = router;