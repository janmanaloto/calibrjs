var express = require('express');
var router = express.Router();
var LoginServices = require('../../services/LoginServices.js');

/* GET home page. */
router.get('/', function(req, res) {
	var user = new LoginServices.LoginService();
	if(LoginServices.isLogged(req)) {
		res.render("Home/dashboard.mustache", { "variable": json });
	} else {
		// NOT LOGGED IN
		res.render("Home/index.mustache");
	}

	// // });
	// user.login(req, "test", "test",
	// 	function(msg) {

	// 		var json = {
	// 			status: "success",
	// 			code: "200",
	// 			response: msg
	// 		}
	// 		res.render("Home/index.mustache", { "variable": json });
	// 	});
});

module.exports = router;