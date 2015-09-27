var connection = require('../connection.js');
var User = connection.get('users');
var validator = require('validator');
var sha1 = require('sha1');
var session = require('client-sessions');


function LoginService() {
	console.log("Login Service");
}

LoginService.prototype.login = function(req, subusername, subpassword, callback) {
	console.log("=================== Start LoginService login ===================");
	User.findOne({ "username": subusername }, function(err, user) {
		if(!user) {
			json = {
				status: "Eusername"
			}
			callback(json);
		}
		else {
			if(sha1(subpassword) === user.password) {
				req.session.user = user;
				var json = {
					status: "success",
					username: user.username,
					email: user.email,
					userId: user._id,
					roleId: user.roleId
				}
				callback(json);
			}
			else {
				json = {
					status: "Epassword"
				}
				callback(json);
			}
		}
	});
}

LoginService.prototype.sessionStart = function(req,res,next){
	  if (req.session && req.session.user) {
	    User.findOne({ username: req.session.user.username }, function(err, user) {
	      if (user) {
	        req.user = user;
	        delete req.user.password; // delete the password from the session
	        req.session.user = user;  //refresh the session value
	        // res.locals.user = user;
	      }
	      next();
	    });
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
	requireLogout: requireLogout
}