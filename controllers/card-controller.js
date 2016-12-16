'use strict';
const isLoggedIn = require('../lib/isLoggedIn');
const cardRoutes = require('../routes/card-routes');

module.exports = (cardRouter, models) => {

  cardRouter.route('/cards')
    .get(isLoggedIn, (req, res) => { cardRoutes.getAllCards(req, res); });

  cardRouter.route('/cards/:cardID/:userID')
    .post((req, res) => { cardRoutes.likeBtnClicked(req, res); });
};
