var express = require('express');
var router = express.Router();
var UserServices = require('../../services/LoginServices.js');
var loginServices = require('../../services/LoginServices.js');
var fileServices = require('../../services/FileServices');
var multer  = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
  	console.log(file);
    callback(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage : storage}).array('file', 100);

router.post('/register', function(req, res) {
	var user = new userServices();
	user.addUser(req.body.username, req.body.password, req.body.email,
		function(msg) {
			res.json(msg);
		}
	);
});
router.post('/login', function(req, res) {
	var user = new loginServices.LoginService();
	user.login(req, req.body.username, req.body.password,
		function(msg) {
			res.send(msg);
		}
	);
});

router.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/');
});

//FILE UPLOAD

router.post('/upload',function(req,res){
	var fileService = new fileServices.FileService();
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        var file = res.req.files;
        var userId = req.session.user.id;
        for (var i in file) {
		  item = file[i];
		  console.log(item);
		  var originalFileName = item.originalname;
	      var fileName = item.filename;

	      fileService.upload(userId, originalFileName, fileName, function() {
	       	res.end("File is uploaded");
	      });
		}
    });
});

module.exports = router;