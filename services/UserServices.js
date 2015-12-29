var connection = require('../connection.js');
// var collection = connection.get('users');
var validator = require('validator');
var sha1 = require('sha1');

function userService() {
}

// userService.prototype.getUsers = function(callback) {
// 	var users = collection.find({});
// 	users.success(function(d) {
// 		console.log(d);
// 		var json = {
// 			users: d,
// 			response: "success"
// 		}

// 		callback(json);
// 	});
// }

userService.prototype.addUser = function(subusername, subpassword, subemail, callback) {

	console.log("================= START userService addUser ==================")

	var users;
	email = validator.normalizeEmail(subemail);
	valEmail = validator.isEmail(email);
	valUsername = validator.isAlphanumeric(subusername)&&validator.isLength(subusername, 5, 15);
	valPassword = validator.isLength(subpassword, 6, 30);

	if(valEmail&&valUsername&&valPassword) {
		var params = [subusername, sha1(subpassword)];
		connection.query("INSERT INTO user (username, password) VALUES (?,?)", params, function(err, results) {
			if (err) {
				console.log(err);
				callback(false);
			} else {
				console.log(subusername + " Added to database");
				callback(true);
			}
		});	
	}
}

module.exports = userService;