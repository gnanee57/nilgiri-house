let createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const wallContentRouter = require('./routes/wallContentRouter');
const birthdayRouter = require('./routes/birthdayRouter');
const studentDetailsRouter = require('./routes/studentDetailsRouter');
const registerEventRouter = require('./routes/registerEventRouter');
const houseCouncilRouter = require('./routes/houseCouncilRouter');
const grievanceRouter = require('./routes/grievanceRouter');
const eventsRouter = require('./routes/eventsRouter');
const certificateRouter = require('./routes/certificateRouter');
const clubsRouter = require('./routes/clubsRouter');
const courseMenuRouter = require('./routes/courseMenuRouter');
const reviewsRouter = require('./routes/reviewsRouter');

const server = express();

const cors = require("cors");

server.use(cors());


// view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

server.use(express.urlencoded({ extended: true }));

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/api/v1/', indexRouter);
server.use('/api/v1/wallContent',wallContentRouter);
server.use('/api/v1/birthday',birthdayRouter);
server.use('/api/v1/studentDetails',studentDetailsRouter);
server.use('/api/v1/registerEvent',registerEventRouter);
server.use('/api/v1/houseCouncil',houseCouncilRouter);
server.use('/api/v1/grievance',grievanceRouter);
server.use('/api/v1/events', eventsRouter);
server.use('/api/v1/certificate', certificateRouter);
server.use('/api/v1/clubs', clubsRouter);
server.use('/api/v1/courses', courseMenuRouter);
server.use('/api/v1/reviews', reviewsRouter);


// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = server;
