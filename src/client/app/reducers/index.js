import { combineReducers } from 'redux';

import cards from './cardsReducer';
import user from './userReducer';

export default combineReducers({
  cards,
  user
});
