'use strict';

const userRoutes = require('../routes/user-routes');

module.exports = (userRouter, models) => {

  userRouter.route('/users')
    .get((req, res) => { userRoutes.getAllUsers(req, res); });

  userRouter.route('/users/:id')
    .get((req, res)    => { userRouter.getOneUser(req, res); })
    .delete((req, res) => { userRoutes.removeUser(req, res); })
    .put((req, res)    => { userRoutes.updateUser(req, res); });

  userRouter.route('/users/:id/cards')
    .get((req, res)    => { userRoutes.getAllUserCards(req, res); })
    .post((req, res)   => { userRoutes.createCard4User(req, res); });

  userRouter.route('/users/:id/cards/:cardID')
    .delete((req, res) => { userRoutes.deleteCardFromUser(req, res); });

};
