'use strict';

const models = require('../models');
const Card   = models.Card;

let cardRoutes = {

  getAllCards: function(req, res) {
    Card.find({}, (err, cards) => {
      if(err) throw err;

      res.json({ cards });
    });
  },

  likeBtnClicked: function(req, res) {
    let message;

    Card.findById(req.params.id).exec()
      .then((card) => {
        if(card.likes.indexOf(req.params.userID) != -1) {

          card.likes.push(req.params.userID)
          message = 'Liked!';
          return card.save();
        }

        card.likes.pull(req.params.userID);
        message = 'Unliked!'
        return card.save();
      })
      .then((card) => {
        res.json({ message });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

module.exports = cardRoutes;
