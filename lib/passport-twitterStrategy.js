

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var twitterCreds    = require('../env/twitter-env');
var models          = require('../models');
var User = models.User;
var init = require('../init/init');

passport.use(new TwitterStrategy({
  consumerKey: twitterCreds.consumerKey,
  consumerSecret: twitterCreds.consumerSecret,
  callbackURL: twitterCreds.callbackURL
},
  function(accessToken, refreshToken, profile, done) {
    var searchQuery = {
      name: profile.displayName
    };


    var updates = {
      name: profile.displayName,
      twitterID: profile.id,
      twitterIMG: profile.photos[0].value
    };

    var options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }

));

// serialize user into the session
init();


module.exports = passport;
