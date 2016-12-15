'use strict';

const passportTwitter    = require('../lib/passport-twitterStrategy');
const twitterOAuthRoutes = require('../routes/twitter-oAuth-routes');
const isLoggedIn         = require('../lib/isLoggedIn');

module.exports = (twitterRouter, models) => {

  twitterRouter.get('/auth/twitter', passportTwitter.authenticate('twitter'));

  twitterRouter.get('/auth/twitter/callback', isLoggedIn,
    (req, res) => {
      twitterOAuthRoutes.callback(req, res);
    });

  twitterRouter.get('/logout', isLoggedIn, (req, res) => {
    twitterOAuthRoutes.logOut(req, res);
  });

};
