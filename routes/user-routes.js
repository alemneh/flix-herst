'use strict';
const models = require('../models');
const User   = models.User;
const Card   = models.Card;

let userRoutes = {
  getOneUser: function(req, res) {
    User.findById(req.id, (err, user) => {
      if(err) throw err;

      res.json({ user });
    });
  },

  getAllUsers: function(req, res) {
    User.find({}, (err, users) => {
      if(err) throw err;

      res.json({ users });
    });
  },

  getAllUserCards: function(req, res) {
    User.findById(req.params.id)
      .populate('cards')
      .exec((err, user) => {
        if(err) throw err;

        res.json({ cards: user.cards});
      });
  },

  updateUser: function(req, res) {

    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if(err) throw err;

      res.json({ message: 'User Updated!'});
    });
  },

  removeUser: function(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if(err) throw err;

      res.json({ message: 'User Removed!'});
    });
  },

  createCard4User: function(req, res) {
    let newCard = new Card(req.body);
    newCard._owner.push(req.params.id);

    User.findOneAndUpdate(req.params.id, {$push: {cards: newCard}},
      function(err, user) {
        if(err) throw err;
        newCard.save((err, card) => {
          if(err) throw err;

          res.json({ newCard, message: 'New Card Created!'});
        });
      });
  },

  deleteCardFromUser: function(req, res) {

    Card.findByIdAndRemove(req.params.cardID).exec()
      .then((card) => {
        return User.findOneAndUpdate(req.params.id,
                {$pull: {cards: card._owner }}).exec();
      })
      .then((user) => {
        res.json({ message: 'Card Deleted!' });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

module.exports = userRoutes;
