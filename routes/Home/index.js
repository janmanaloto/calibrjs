var express = require('express');
var router = express.Router();
var LoginServices = require('../../services/LoginServices.js');

/* GET home page. */
router.get('/', LoginServices.requireLogin, function(req, res) {
	// res.render("Home/index.jade", { "sessionUsername": req.session.user.username });
	   res.render("Home/index.html");
});

module.exports = router;