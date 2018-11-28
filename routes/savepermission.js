var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a job list resource');
  console.log("inserting name..." +req.body.custname);
  res.render('listjobs', { title: 'Express' });
});

/* POST users listing. */
router.post('/', function(req, res) {
  // res.send('respond with a job list resource');
  console.log("inserting name..." +req.body.custname);
  res.render('listjobs', { title: 'Express' });
});

/* POST users listing. */
router.post('/savepermission', function(req, res) {
  // res.send('respond with a job list resource');
  console.log("inserting name..." +req.body.custname);
  res.render('listjobs', { title: 'Express' });
});



module.exports = router;
