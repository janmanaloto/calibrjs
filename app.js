var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var constants = require('./constants.js');
var session = require('client-sessions');
var mustacheExpress = require('mustache-express');

var LoginServices = require('./services/LoginServices');

var routes = require('./routes/Home/index');
var process = require('./routes/process/index');
var users = require('./routes/User/index');
var login = require('./routes/Login/index');


var app = express();
//RECOM
// view engine setup
// app.set('view engine', 'jade');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// SESSION SETUP
app.use(session({
  cookieName: 'session',
  secret: constants.SESSION_SECRET,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.use('/', routes);
app.use('/process', process);
app.use('/Users', users);
app.use('/login', login);

app.use(function(req, res, next) {
  var login = new LoginServices();
  login.sessionStart(req,res,next);
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
