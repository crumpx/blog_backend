var mongoose = require('mongoose')
// var bcrypt = require('bcrypt-nodejs')
var passportLocalMongoose = require('passport-local-mongoose');

var Account = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  fullname: String,
})

// Account.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(0), null)
// }
//
// Account.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password)
// }
Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
