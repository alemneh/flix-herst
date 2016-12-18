'use strict';

let twitterOAuthRoutes = {

  callback: function(req, res)  {
    console.log(req.session.user);
    req.session.user = req.session.passport.user
    res.redirect('/');
  },

  logOut: function(req, res) {
    delete req.session.user;
    console.log('logOut');
    req.logout();
    res.redirect('/');
  }

};

module.exports = twitterOAuthRoutes;
