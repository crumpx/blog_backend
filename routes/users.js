var express = require('express');
var Blog = require('../models/blog');
var Account = require('../models/account');
var passport = require('passport');

var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {

  Account.find({}, function (err, docs) {
    res.send(JSON.stringify(docs))
  })

  // res.send("You're no where.");
});

router.post('/register', function(req, res, next){
  Account.register(new Account({
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email
  }), req.body.password, function(err, account) {
    if (err) {
      return res.send({err: err})
    }
    passport.authenticate('local')(req, res, function(){
      res.send(JSON.stringify(res.body))
    })
  })
})



module.exports = router;
