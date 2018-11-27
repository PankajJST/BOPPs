var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a job list resource');
  res.render('listJobs', { title: 'Express' });
});

module.exports = router;
