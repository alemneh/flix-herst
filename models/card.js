'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const cardSchema = new mongoose.Schema({
    _owner: [{type: Schema.Types.ObjectId, ref: 'User'}],
    tagLine: String,
    imgURL: String,
    twitterIMG: String,
    likes: []

  });

  const Card = mongoose.model('Card', cardSchema);
  models.Card = Card;
};
