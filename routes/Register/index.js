var express = require('express');
var router = express.Router();
var LoginServices = require('../../services/LoginServices.js');

/* GET home page. */
router.get('/', LoginServices.requireLogout, function(req, res, next) {
	res.send("REGISTRATION PAGE");
});

module.exports = router;
