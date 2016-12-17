'use strict';

let twitterOAuthRoutes = {

  callback: function(req, res)  {
    console.log(req.session.user);
    req.session.user = req.session.passport.user
    res.redirect('/profile');
  },

  logOut: function(req, res) {
    delete req.session.user;
    req.logout();
    res.redirect('/');
  }

};

module.exports = twitterOAuthRoutes;
