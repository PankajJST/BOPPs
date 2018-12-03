var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')(/*options*/)
const db = pgp(process.env.DATABASE_URL || 'postgres://jgfhvhabskheos:3ea9f2ed6a86d0f0a58773b177a2f638efc773546a3ffefe2e7aadf6abe4d921@ec2-54-247-119-167.eu-west-1.compute.amazonaws.com:5432/d9ojqd5uc7s2v0?ssl=true');



/* GET users listing. */
router.get('/', function(req, res, next) {
  db.manyOrNone('SELECT * from custpermissions order by date desc', 123)
  .then(function (data) {
    console.log('DATA:', data);
    console.dir(data);
    recs=data;
    res.render('listjobs', { title: 'Express' });
  })
  .catch(function (error) {
    console.log('ERROR:', error);
    res.render('error', { title: 'Express' });
  });
  
});

module.exports = router;
