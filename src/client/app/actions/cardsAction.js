import axios from 'axios';
import * as types from '../ActionConstants';

export function fetchCards() {
  return function(dispatch) {
    dispatch({type: types.FETCH_CARDS});
    axios.get(process.env.URL + '/cards')
      .then((res) => {
        dispatch({type: types.FETCH_CARDS_FULFILLED, payload: res.data.cards});
      })
      .catch((err) => {
        dispatch({type: types.FETCH_CARDS_REJECTED, payload: err});
      });
  };
}

export function clickLikeBtn(cardId, userId) {
  return function(dispatch) {
    dispatch({type: types.LIKE_BTN_CLICKED});
    axios.put(process.env.URL + '/cards/' + cardId + '/' +userId)
      .then((res) => {
        dispatch({type: types.LIKE_BTN_CLICKED_RECEIVED, payload: { cardId, userId }});
      })
      .catch((err) => {
        dispatch({type: types.LIKE_BTN_CLICKED_REJECTED, payload: err});
      });
  };
}


export function removeCard(card) {
  const URL = process.env.URL + '/users/' + card._owner + '/cards/' + card._id;
  return function(dispatch) {
    dispatch({type: types.REMOVE_CARD});
    axios.delete(URL).then((res) => {
      dispatch({type: types.REMOVE_CARD_FULFILLED, payload: card});
    })
    .catch((err) => {
      dispatch({type: types.REMOVE_CARD_REJECTED, payload: err});
    });
  };
}

export function creatCard(newCard) {
  const { userId } = newCard;
  const URL = process.env.URL + '/users/' + userId + '/cards';
  return function(dispatch) {
    dispatch({type: types.CREATE_CARD});
    axios.post(URL, newCard).then((res) => {
      dispatch({type: types.CREATE_CARD_FULFILLED, payload: res.data.newCard });
    })
    .catch((err) => {
      dispatch({type: types.CREATE_CARD_REJECTED, payload: err });
    });
  };
}

export function copyTagLineInput(val) {
  return {
    type: types.TAGLINE_CHANGED,
    payload: val
  }
}

export function copyImgURLInput(val) {
  return {
    type: types.IMGURL_CHANGED,
    payload: val
  }
}
