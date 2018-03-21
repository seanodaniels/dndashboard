var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var index = require('./routes/index');
var users = require('./routes/users');
var users2 = require('./routes/users2');
var spell = require('./routes/spell');

var app = express();

mongoose.connect('mongodb://localhost:27017/spells');

var Schema = mongoose.Schema;

var SpellsSchema = new Schema({
  title: String,
  description: String
});

var Spell = mongoose.model('Spell', SpellsSchema);


app.listen(3001, () => {
  console.log('Connected to MongoDB. Listening on 3001.');
});

//
// app.listen(3001, () => {
//   console.log('listening on port 3001')
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/users2', users2);
app.use('/spells', spell);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
