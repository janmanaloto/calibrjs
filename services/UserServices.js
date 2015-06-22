var connection = require('../connection.js');
var collection = connection.get('users');
var validator = require('validator');
var sha1 = require('sha1');

function userService() {
	console.log("service 2");
}

userService.prototype.getUsers = function(callback) {
	var users = collection.find({});
	users.success(function(d) {
		callback(d);
	});
}

userService.prototype.addUser = function(subusername, subpassword, subemail, callback) {
	var users;
	email = validator.normalizeEmail(subemail);
	valEmail = validator.isEmail(email);
	valUsername = validator.isAlphanumeric(subusername)&&validator.isLength(subusername, 5, 15);
	valPassword = validator.isLength(subpassword, 6, 30);

	if(valEmail&&valUsername&&valPassword) {
		users = collection.insert({"username": subusername, "password": sha1(subpassword), "email": email});
		users.success(function(d) {
			callback(d);
		}).error(function(e) {
			callback(e);
		});
	}
	else {
		callback("error");
	}
}

module.exports = userService;