




var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Hi' });
});

router.get('/about',function(req,res,next){
   res.render('about',{title:'Bye'});
});

router.get('/members',function(req,res,next){
   res.render('members',{title:'Bye'});
});

router.get('/media',function(req,res,next){
   res.render('media',{title:'Bye'});
});

router.get('/contact',function(req,res,next){
   res.render('contact',{title:'Bye'});
});
module.exports = router;
