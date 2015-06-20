var express = require('express');
var router = express.Router();
var userServices = require('../services/UserServices.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
