var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userschemas = new schema({
	fname: String,
	lname: String,
	email: String,
	pwd: String
});

module.exports = mongoose.model('userschemas', userschemas);