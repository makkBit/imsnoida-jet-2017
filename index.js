const express = require('express');
const http = require('http');
const app = express();	
// const router = require('./app/routes/main');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');

const morgan  = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');


mongoose.connect('mongodb://localhost:8000/auth');

// app setup
app.use(cookieParser()); // read cookies (needed for auth)

//app.use(bodyParser.json({ type: '*/*'}));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

app.set('views', './app/views');
app.set('view engine', 'pug'); // set up pug for templating

app.use('/controllers', express.static(process.cwd() + './app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

// required for passport
app.use(session({ secret: 'letsdance' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes/adminRoute')(app, passport);
require('./app/routes/examRoute')(app, passport);
require('./app/routes/questionRoute')(app, passport);
require('./app/services/passport')(passport); // pass passport for configuration

// console.log(process.env.KATAPPA);

// server setup
const port = process.env.PORT || 3000;
app.listen( port, function(){
	console.log('app running on port: '+port);
});