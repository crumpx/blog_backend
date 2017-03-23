var mongoose = require('mongoose')
var user = require('./account');

var Blog = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  subtitle: {
    type: String,
    require: false
  },
  content: {
    type: String, require: true
  },
  comments: [{
    comment: String,
    user: {
      type: Schema.ObjectId,
      ref: 'Account',
    }
  }],
  tag: [],
  author: {
      type: Schema.ObjectId,
      ref: 'Account',
    },
},{
  timestamps: true
})

module.exports = mongoose.model('Blog', Blog);
