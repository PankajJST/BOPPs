var express = require('express');
var router = express.Router();

// /* POST users listing. */
router.post('/', function(req, res) {
  console.log('Post a permission: ' + JSON.stringify(req.body));
  // res.send('respond with a job list resource');
  console.dir(req.body);

  console.log("inserting name..." +req.body.custname1);

  setTimeout(() => {
     res.render('endpage', { title: 'Express' });
  }, 3000);
});

/* POST users listing. */
// router.post('/savepermission', function(req, res) {
  
//   // res.send('respond with a job list resource');
//   console.log("inserting name11..." +req.body.custname);
//   res.render('endpage', { title: 'Express' });
// });

module.exports = router;
