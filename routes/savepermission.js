var express = require('express');
var router = express.Router();

var custDetails;

// /* POST users listing. */
router.post('/', function(req, res) {
  custDetails = JSON.stringify(req.body);
  console.log('Posted a permission for custDetails:' + custDetails);
  
  // res.send('respond with a job list resource');
  console.dir(req.body);

  // console.log("inserting name..." +custDetails.custname1);

 
     res.render('endpage', { title: 'Express' });
 
});

/* POST users listing. */
// router.post('/savepermission', function(req, res) {
  
//   // res.send('respond with a job list resource');
//   console.log("inserting name11..." +req.body.custname);
//   res.render('endpage', { title: 'Express' });
// });

module.exports = router;
