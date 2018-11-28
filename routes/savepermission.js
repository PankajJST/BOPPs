var express = require('express');
var router = express.Router();

// /* POST users listing. */
router.post('/', function(req, res) {
  console.log('Post a permission: ' + JSON.stringify(req.body));
  // res.send('respond with a job list resource');
  console.dir(req.body);
  setInterval(() => {
    console.log('waiting 3 secs...');
  }, 3000);
  console.log("inserting name..." +req.body.custname1);
  res.render('endpage', { title: 'Express' });
});

/* POST users listing. */
// router.post('/savepermission', function(req, res) {
  
//   // res.send('respond with a job list resource');
//   console.log("inserting name11..." +req.body.custname);
//   res.render('endpage', { title: 'Express' });
// });

module.exports = router;
