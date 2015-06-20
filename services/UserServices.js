var connection = require('../connection.js');
var collection = connection.get('usercollection');

function userService() {
	console.log("service 2");
}

userService.prototype.getUsers = function() {
	var users = collection.find({});
    return users;
}

module.exports = userService;