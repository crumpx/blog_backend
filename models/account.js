var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var Account = mongoose.Schema({
  email: String,
  password: String,
})

Account.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(0), null)
}

Account.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('Account', Account);
