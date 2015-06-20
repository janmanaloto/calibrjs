var constants = require('./constants.js')
var mongo = require('mongodb');
var monk = require('monk');
var db = monk(constants.DATABASE_HOST+constants.DATABASE_NAME);

module.exports = db;