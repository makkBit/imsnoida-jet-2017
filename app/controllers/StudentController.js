'use strict';
var Student = require('../model/Student.js');
var Question = require('../model/Question.js');

var StudentController = function(){

	

	this.giveExam = function(req, res){
		const examcode = req.user.examcode;
		Question.find({'ofExam': req.user.examcode}, function (err, docs) {
			if (err) { return next(err); }
			res.render('exam/giveexam',{
				'questions': docs
			});
		});
	};

	this.addAnswer = function(req, res){

		var myQuestionId = req.body.questionId;
		var myAnswer = req.body.answer;
		
		Student.findOne({ _id: req.user._id }, function (err, student){
		  
		  Question.find({'_id': myQuestionId}, function (err, question) {

		  	if(err) { return next(err); }

		  	// var a = false; 
		  	// if(question.options[1].correct === 'true'){
		  	// 	a = true;
		  	// }
		  	// console.log("question submitted is ",question);
		  	// console.log(a);
		  	// res.json({"msg": question.msg[0].options})
		  	res.json({"msg": question[0]})
		  	// student.answer.push({ questionId: myQuestionId, answeredCorrect: a});
		  	// student.save();
		  	// console.log(student);
		  });

		});

	};

};

module.exports = StudentController;