'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const cardSchema = new mongoose.Schema({
    _owner: [{type: Schema.Types.ObjectId, ref: 'User'}],
    title: String,
    imgURL: String,
    likes: {type: Number, default: 0}

  });

  const Card = mongoose.model('Card', cardSchema);
  models.Card = Card;
};
