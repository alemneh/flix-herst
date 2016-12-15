'user strict';

const User = require('../models/user');
const Card = require('../models/card');

let userRoutes = {
  getOneUser: function(req, res) {
    User.findById(req.id, (err, user) => {
      if(err) throw err;

      res.json({ user });
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

  createCard4User: function(req, res) {
    let newCard = new Card(req.body);
    newCard._owner.push(req.params.id);

    User.findOneAndUpdate(req.params.id, {$push: {cards: newCard}},
      function(err, user) {
        if(err) throw err;
        newCard.save((err, card) => {
          if(err) throw err;

          res.json({ message: 'New Card Created!'});
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