var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {

 res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    var key = res.body.key;
    var msg = res.body.msg;


	var url = "http://sandbox.api.simsimi.com/request.p?key="+key+"&lc=en&ft=1.0&text="+msg;
	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        res.send(body);
	    }
	});
});

module.exports = router;