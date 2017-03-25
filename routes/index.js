var express = require('express');
var router = express.Router();
var Blog = require('../models/blog');
var Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
  Blog.find({})
  .limit(10)
  .sort('-createdAt')
  .populate('author', 'fullname')
  .exec( function(err, docs){
    res.send(JSON.stringify(docs))
  })
})

router.post('/', function(req, res, next) {
  Blog.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    content: req.body.content,
    tag: req.body.tag,
    author: req.body.author
  },function(err, doc) {
    if (err) console.log(err)
    res.send('Thank you?')
  })
})

module.exports = router;
