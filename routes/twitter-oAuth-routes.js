'user strict';

let twitterOAuthRoutes = {

  twitterCallback: function(req, res)  {
    res.redirect('/');
  },

  logOut: function(req, res) {
    req.logout();
    res.redirect('/');
  }

};

module.exports = twitterOAuthRoutes;
