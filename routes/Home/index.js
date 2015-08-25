var express = require('express');
var router = express.Router();
var LoginServices = require('../../services/LoginServices.js');

/* GET home page. */
router.get('/', function(req, res) {
	// res.render("Home/index.jade", { "sessionUsername": req.session.user.username });
	   res.redirect("/index.html");
});

module.exports = router;