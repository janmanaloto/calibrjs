var connection = require('../connection.js');
// var User = connection.get('users');
var db = connection;
var validator = require('validator');
var sha1 = require('sha1');
var session = require('client-sessions');


function FileService() {
	console.log("File Service");
}

FileService.prototype.upload = function(userId, filename, file_path, callback) {
	console.log("=================== Start FileService Upload ===================");
	// console.log(req);
	params = [userId, filename, file_path];
	db.query("INSERT INTO file (user_id, filename, file_path) VALUES (?,?,?)", params, function(err, file, fields) {
		if(err) {
			throw err
		}
		console.log("upload");
	});
	callback();
}

FileService.prototype.delete = function(fileId, callback) {
	console.log("================= START FileService Delete ====================");
	params = [fileId];
	db.query("DELETE FROM file WHERE file_id = ?", params, function(err, file, fields) {
			if(err) throw err;
			console.log(file);
	});
	callback();
}

function getFiles(callback) {
	console.log("================ START get Files =======================");
	params = [];
	db.query("SELECT * FROM file WHERE is_deleted = 0", params, function(err, file, fields) {
		console.log(file);
		if(err) {
			throw err;
		} else {
			callback(file);
		}
	});
}


module.exports = { 
	FileService: FileService,
	getFiles: getFiles
}