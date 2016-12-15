'use strict';

const cardRoutes = require('../routes/card-routes');

module.exports = (cardRouter, models) {

  cardRouter.route('/cards')
    .get((req, res) => { cardRoutes.getAllCards(req, res); });

  cardRouter.route('/cards/:cardID/:userID')
    .post((req, res) => { cardRoutes.likeBtnClicked(req, res); });
};
