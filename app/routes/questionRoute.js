/*******************************
**********Question ROUTES*******
*******************************/
var QuestionController = require('../controllers/QuestionController');
var questionController = new QuestionController();

module.exports = function(app, passport){

	app.get('/admin/addquestion', function (req, res) {
		res.render('./admin/addquestion');
	});

	app.post('/admin/addQuestion', questionController.addQuestion)

}


