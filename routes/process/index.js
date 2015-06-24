var express = require('express');
var router = express.Router();
var UserServices = require('../../services/LoginServices.js');
var loginServices = require('../../services/LoginServices.js');

router.post('/register', function(req, res) {
	var user = new userServices();
	user.addUser(req.body.username, req.body.password, req.body.email,
		function(msg) {
			res.json(msg);
		}
	);
});
router.post('/login', function(req, res) {
	var user = new loginServices.LoginService();
	user.login(req, req.body.username, req.body.password,
		function(msg) {
			res.send(msg);
		}
	);
});

router.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/');
});

module.exports = router;