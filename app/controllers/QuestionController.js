'use strict';
var Exam = require('../model/Exam.js');
var Question = require('../model/Question.js');

var QuestionController = function(){


	this.addQuestion = function(req, res){
		var examcode = req.body.examcode;
		var title = req.body.title;
		var image = req.body.image;
		var option1 = req.body.option1;
		var option2 = req.body.option2;
		var option3 = req.body.option3;
		var option4 = req.body.option4;
		var options = [ option1, option2, option3, option4];
		var correct = req.body.correct;

		console.log(examcode, title, image, options, correct);

		var question = new Question();

		question.title = title;
		question.image = image;


		question.options = options.map( function(element, index){
			if( correct == index+1){
				return {
					name: element,
					correct: true
				}
			}
			else{
				return {
					name: element,
					correct: false
				}
			}
		});

		Exam.findOne({ 'code': examcode}, function(err, exam){
			if(err) throw err;
			console.log('exam', exam);

			question._creator = exam._id;

			question.save( function(err, data){
				if(err) throw err;
				console.log('question'+data);
				res.end();
			});

		});

	};


};

module.exports = QuestionController;