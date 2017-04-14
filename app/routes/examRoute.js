/*******************************
**********Exam ROUTES***********
*******************************/
var ExamController = require('../controllers/ExamController');
var examController = new ExamController();

module.exports = function(app, passport){

    app.get('/addexam', function(req, res){
        res.render('./admin/addexam');
    });

    app.post('/addexam', examController.addExam);


    app.get('/viewexam', function( req, res){
        res.render('./admin/viewexam');
    });

    // api for ajax request
    app.get('/api/viewexam', examController.getExams);

}


 