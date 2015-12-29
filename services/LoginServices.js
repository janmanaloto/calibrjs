var connection = require('../connection.js');
// var User = connection.get('users');
var User = connection;
var validator = require('validator');
var sha1 = require('sha1');
var session = require('client-sessions');


function LoginService() {
	console.log("Login Service");
}

LoginService.prototype.login = function(req, subusername, subpassword, callback) {
	console.log("=================== Start LoginService login ===================");
	params = [subusername];
	User.query("SELECT * FROM user WHERE username = ?", params, function(err, user, fields) {
		if(!user) {
			json = {
				status: "Eusername",
				message: "There is an error with your login credentials"
			}
			callback(json);
		}
		else {
			user = user[0];
			console.log(user.password);
			if(sha1(subpassword) === user.password) {
				req.session.user = user;
				var json = {
					status: "success",
					username: user.username,
					userId: user.id
				}
				callback(json);
			}
			else {
				json = {
					status: "Epassword",
					message: "Wrong Username/Password combination"
				}
				callback(json);
			}
		}
	});
}

LoginService.prototype.sessionStart = function(req,res,next){
	  if (req.session && req.session.user) {
	  	var params = [req.session.user.username]
	  	User.query("SELECT * FROM user WHERE username = ?", params, function(err, user, fields) {
	  		if (user) {
	        req.user = user;
	        delete req.user.password; // delete the password from the session
	        req.session.user = user;  //refresh the session value
	        // res.locals.user = user;
	      }
	      next();
	  	})
	    
	  } else {
	    next();
	  }
}

function requireLogin (req, res, next) {
  if (!req.session.user) {
    res.redirect("/login.html");
  } else {
    next();
  }
};

function isLogged(req) {
	var logged = req.session.user ? true : false;
	return logged;
}

function requireLogout (req, res, next) {
  if (req.session.user) {
    res.send("You cannot visit this without being logged out");
  } else {
    next();
  }
};

module.exports = { 
	LoginService: LoginService,
	requireLogin: requireLogin,
	isLogged: isLogged,
	requireLogout: requireLogout
}