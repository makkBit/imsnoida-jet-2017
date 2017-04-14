var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Exam = require('./Exam');

var questionSchema = Schema({
	_creator: { type: String, ref: 'Exam'},
	title: String,
	image: String,
	options: [{ 
		name:String,
		correct: Boolean
	}]
});

module.exports = mongoose.model('Question', questionSchema);