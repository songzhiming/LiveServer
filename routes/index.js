var express = require('express');
var router = express.Router();


//数组
var arr = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/action=getLiveCode', function(req, res, next) {
  console.log(req.originalUrl);
  var timestamp=new Date().getTime();
  console.log(arr);
  arr.push(timestamp);
  console.log(arr);
  var dic = {"code":0,
             "liveCode":timestamp};
  res.send(dic);
});

router.get('/action=deleteLiveCode', function(req, res, next) {
  var dic = req.query;
  arr.remove(dic.code)
  var dic = {"code":0};
  res.send(dic);
});

router.get('/action=getAllCode', function(req, res, next) {
  var dic = {"code":0,
             "arr":arr};
  res.send(dic);
});

module.exports = router;
/*
 * 删除数组中指定值
 */
Array.prototype.remove=function(value){
  var len = this.length;
  for(var i=0,n=0;i<len;i++){//把出了要删除的元素赋值给新数组
    if(this[i]!=value){
      this[n++]=this[i];
    }else{
      console.log(i);//测试所用
    }
  }
  this.length = n;
};
