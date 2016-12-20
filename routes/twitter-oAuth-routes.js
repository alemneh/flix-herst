'use strict';

let twitterOAuthRoutes = {

  callback: function(req, res)  {
    req.session.user = req.session.passport.user
    res.redirect('/');
  },

  logOut: function(req, res) {
    delete req.session.user;
    req.logout();
    res.redirect('/');
  }

};

module.exports = twitterOAuthRoutes;
