var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')( /*options*/ )
const db = pgp(process.env.DATABASE_URL || 'postgres://jgfhvhabskheos:3ea9f2ed6a86d0f0a58773b177a2f638efc773546a3ffefe2e7aadf6abe4d921@ec2-54-247-119-167.eu-west-1.compute.amazonaws.com:5432/d9ojqd5uc7s2v0?ssl=true');



var custDetails;

// /* POST users listing. */
router.post('/', function (req, res, next) {
  var custDetails = req.body;
  // var custDetails1 = JSON.stringify(req.body);

  console.log('Posted a permission for custDetails:' + custDetails);

  db.none('insert into custpermissions (jobno, name,address,tel,ownername,owneraddress,ownertel)' +
      ' values ($1, $2, $3, $4, $5, $6, $7)' , ['1', custDetails.custname1, custDetails.jobaddr1, custDetails.custphone1, custDetails.ownername1, custDetails.owneraddr1, custDetails.ownerphone1])
    .then(function () {
      console.log('Successful Insertion!!');
      res.render('endpage', {
        title: 'BOPPs'
      });
    })
    .catch(function (error) {
      console.log('ERROR:', error);
      res.render('error', {
        title: 'BOPPs'
      });
    });



  // res.send('respond with a job list resource');
  // console.dir(req.body);

  // console.log("inserting name..." +custDetails.custname1);


  // res.render('endpage', {
  //   title: 'Express'
  // });

});

/* POST users listing. */
// router.post('/savepermission', function(req, res) {

//   // res.send('respond with a job list resource');
//   console.log("inserting name11..." +req.body.custname);
//   res.render('endpage', { title: 'Express' });
// });

module.exports = router;