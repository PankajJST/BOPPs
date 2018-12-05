var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var listjobs = require('./routes/listjobs');
var savepermission = require('./routes/savepermission');

var appvar1 = '1234';
var pgp = require('pg-promise')(/*options*/);
const db = pgp(process.env.DATABASE_URL || 'postgres://jgfhvhabskheos:3ea9f2ed6a86d0f0a58773b177a2f638efc773546a3ffefe2e7aadf6abe4d921@ec2-54-247-119-167.eu-west-1.compute.amazonaws.com:5432/d9ojqd5uc7s2v0?ssl=true');

var app = express();
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

recs = [];

app.use(function (req,res,next) {
    console.log("received incoming.../" + req.method);
    next();
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/listjobs', listjobs);
app.use('/savepermission', savepermission);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('index');
    res.render('index');
});




module.exports = app;