'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const cardSchema = new mongoose.Schema({
    _owner: [{type: Schema.Types.ObjectId, ref: 'User'}],
    title: String,
    imgUrl: String,
    passage: String,
    likes: Number

  });

  const Card = mongoose.model('Card', cardSchema);
  models.Card = Card;
};
