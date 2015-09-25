var express = require('express');
var router = express.Router();
var LoginServices = require('../../services/LoginServices.js');

/* GET home page. */
router.post('/', function(req, res, next) {
	var user = new LoginServices.LoginService();
	console.log(req.body.username);
	user.login(req, req.body.username, req.body.password,
		function(msg) {

			var json = {
				status: "success",
				code: "200",
				response: msg
			}
			res.json(json);
		}
	);
});

module.exports = router;
