'use strict';

module.exports = (mongoose, models) => {
  let Schema = mongoose.Schema;
  const userSchema = new mongoose.Schema({
    cards: [{type: Schema.Types.ObjectId, ref: 'Card'}],
    name: String,
    twitterIMG: String,
    twitterID: String

  });

  const User = mongoose.model('User', userSchema);
  models.User = User;
};
