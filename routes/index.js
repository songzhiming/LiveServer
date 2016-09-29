var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/action=getLiveCode', function(req, res, next) {
  console.log(req.originalUrl);
  var timestamp=new Date().getTime();
  var dic = {"code":0,
             "liveCode":timestamp};
  res.send(dic);
});



module.exports = router;
