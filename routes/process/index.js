var express = require('express');
var router = express.Router();
var userService = require('../../services/UserServices.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // userService user = new userService();
  // user.getUsers();
  res.render('index', { title: 'Express' });
});

module.exports = router;
