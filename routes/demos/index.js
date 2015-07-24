var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
	var url = "http://sandbox.api.simsimi.com/request.p?key=91e7537d-57c3-4065-887e-2b9a2b44b671&lc=en&ft=1.0&text=hi";
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.send(body);
	    }
	});
});

module.exports = router;