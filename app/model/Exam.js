var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./Question');

var examSchema = Schema({
	name: String,
	code: Number,
	questionList: [{
		type: Schema.Types.ObjectId, 
		ref: 'Question'
	}],
	registeredStudent: [String]
});

module.exports = mongoose.model('Exam', examSchema);