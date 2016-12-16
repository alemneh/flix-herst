'use strict';

let twitterOAuthRoutes = {

  callback: function(req, res)  {
    res.redirect('/cards');
  },

  logOut: function(req, res) {
    req.logout();
    res.redirect('/game');
  }

};

module.exports = twitterOAuthRoutes;
