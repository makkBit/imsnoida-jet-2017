/*******************************
********** ADMIN ROUTES*********
*******************************/
const passportService = require('../services/passport');
const passport = require('passport');


module.exports = function(app, passport){

    app.route('/studentsignin')
    	.get(function(req, res) {
            res.render('student/studentsignin');
        })
        .post();


    

    // route middleware to make sure a user is logged in
    function isSignedIn(req, res, next) {
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();
        // if they aren't, redirect them to the login
        res.redirect('/studentsignin');
    }

};