var mongoose = require('mongoose');
var schema = mongoose.Schema;

var saveschemas = new schema({
	author: String,
	title: String,
	description: String,
	url: String,
	urlToImage: String,
	publishedAt: String,
	comment: String
});

module.exports = mongoose.model('saveschemas', saveschemas);