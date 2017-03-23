var LocalStrategy = require('passport-local').Strategy;
var Account = require('../models/account');

module.exports = function(passport) {
  passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		Account.findById(id, function(err, user){
			done(err, user);
		});
	});

	// Local Signup

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, done) {
		process.nextTick(function(){
			Account.findOne({'email': email}, function(err, user){
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
				} else {
					var newUser = new Account();
					newUser.email = email;
					newUser.password = newUser.generateHash(password);

					newUser.save(function(err){
						if (err) throw err;
						return done(null, newUser);
					});

				}
			});
		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, done) {
		Account.findOne({ 'email' : email}, function(err, user) {
			if (err) {
				return done(err);
			}

			if (!user) {
				return done(null, false, req.flash('loginMessage', 'User Not Found!'));
			}

			if (!user.validPassword(password)) {
				return done(null, false, req.flash('loginMessage', 'Wrong Password!'));
			}

			return done(null, user);
		});
	}));
}
