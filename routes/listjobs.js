var express = require('express');
var router = express.Router();
var moment = require('moment');

var pgp = require('pg-promise')( /*options*/ )
const db = pgp(process.env.DATABASE_URL || 'postgres://jgfhvhabskheos:3ea9f2ed6a86d0f0a58773b177a2f638efc773546a3ffefe2e7aadf6abe4d921@ec2-54-247-119-167.eu-west-1.compute.amazonaws.com:5432/d9ojqd5uc7s2v0?ssl=true');
var sqlSelect = 'select jobno, name, address, tel, ownername, owneraddress, ownertel, date, actioned from custpermissions order by date desc';


/* GET users listing. */
router.get('/', function (req, res, next) {

  console.log('moment is ' + moment().format('DD/MM/YYYY'));

  // db.manyOrNone('SELECT * from custpermissions order by date desc', 123)
  db.manyOrNone(sqlSelect, 123)
    .then(function (data) {
      // console.log('DATA:', data);
      // console.dir(data);
      recs = data;

      recs.forEach(rec => {
        console.log(rec.date);
        // if (rec.date) {
        //   rec.date = moment(rec.date).format("DD/MM/YYYY");
        // }
        console.log(rec.date);
      });

      // console.log(recs);
      res.render('listjobs', {
        title: 'BOPPs'
      });
    })
    .catch(function (error) {
      console.log('ERROR:', error);
      res.render('error', {
        title: 'Express'
      });
    });

});

module.exports = router;