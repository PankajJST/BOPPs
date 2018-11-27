var express = require('express');
var favicon = require('serve-favicon')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


recs = [];

//pg
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'jgfhvhabskheos',
  host: 'ec2-54-247-119-167.eu-west-1.compute.amazonaws.com',
  database: 'd9ojqd5uc7s2v0',
  password: '3ea9f2ed6a86d0f0a58773b177a2f638efc773546a3ffefe2e7aadf6abe4d921',
  port: 5432,
  ssl: true,
})

pool.query('SELECT * from custpermissions1', (err, res) => {
//   console.log(err, res);
  recs = res.rows;
  console.dir(recs);
  pool.end();
});


//pg



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.get('/', function(req, res) {
    console.log("routing to index.html...");
    console.dir(this.recs)
    res.sendFile(path.join(__dirname + '/index.html'),this.recs);
});

app.post('/permission/save', function(req, res) {
    console.log("POST routing to save...");
});

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