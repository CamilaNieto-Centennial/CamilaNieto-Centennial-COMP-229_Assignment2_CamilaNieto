//COMP 229-005 Assignment 1
//Author: Camila Nieto
//ID: 301175110

//installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose= require('mongoose');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

//instantiate mongo
mongoose.connect('mongodb://localhost:27017/shoes')

let db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function ()
{
  console.log('connected to MongoDB at: mongodb://localhost:27017/shoes');
}
)

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //express -e


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));//Add node_modules as static 

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
