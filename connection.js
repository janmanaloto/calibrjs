var constants = require('./constants.js')
// var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk(constants.DATABASE_HOST+constants.DATABASE_NAME);

// module.exports = db;

var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : constants.DATABASE_HOST,
  user     : constants.DATABASE_USERNAME,
  password : constants.DATABASE_PASSWORD,
  database : constants.DATABASE_NAME
});

db.connect();
module.exports = db;