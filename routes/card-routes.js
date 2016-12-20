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
    console.log(req.params);
    Card.findById(req.params.cardID).exec()
      .then((card) => {
        console.log(card);
        if(card.likes.indexOf(req.params.userID) == -1) {
          console.log('liked');
          card.likes.push(req.params.userID)
          message = 'Liked!';
          return card.save();
        } else {
          console.log('unliked');
          card.likes.pull(req.params.userID);
          message = 'Unliked!'
          return card.save();
        }
      })
      .then((card) => {
        res.json({ card, message });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

module.exports = cardRoutes;
