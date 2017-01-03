import axios from 'axios';

export function fetchCards() {
  return function(dispatch) {
    dispatch({type: 'FETCH_CARDS'});
    axios.get(process.env.URL + '/cards')
      .then((res) => {
        dispatch({type: 'FETCH_CARDS_FULFILLED', payload: res.data.cards});
      })
      .catch((err) => {
        dispatch({type: 'FETCH_CARDS_REJECTED', payload: err});
      });
  };
}

export function clickLikeBtn(cardId, userId) {
  return function(dispatch) {
    dispatch({type: 'LIKE_BTN_CLICKED'});
    axios.put(process.env.URL + '/cards/' + cardId + '/' +userId)
      .then((res) => {
        dispatch({type: 'LIKE_BTN_CLICKED_RECEIVED', payload: { cardId, userId }});
      })
      .catch((err) => {
        dispatch({type: 'LIKE_BTN_CLICKED_REJECTED', payload: err});
      });
  };
}

export function removeCard(card) {
  const URL = process.env.URL + '/users/' + card._owner + '/cards/' + card._id;
  return function(dispatch) {
    dispatch({type: 'REMOVE_CARD'});
    axios.delete(URL).then((res) => {
      dispatch({type: 'REMOVE_CARD_FULFILLED', payload: card});
    })
    .catch((err) => {
      dispatch({type: 'REMOVE_CARD_REJECTED', payload: err});
    });
  };
}

export function creatCard(newCard) {
  const userId = localStorage.userID;
  const URL = process.env.URL + '/users/' + userId + '/cards';
  return function(dispatch) {
    dispatch({type: 'CREATE_CARD'});
    axios.post(URL, newCard).then((res) => {
      dispatch({type: 'CREATE_CARD_FULFILLED', payload: res.data.newCard });
    })
    .catch((err) => {
      dispatch({type: 'CREATE_CARD_REJECTED', payload: err });
    });
  };
}

export function copyTagLineInput(val) {
  return {
    type: 'TAGLINE_CHANGED',
    payload: val
  }
}

export function copyImgURLInput(val) {
  return {
    type: 'IMGURL_CHANGED',
    payload: val
  }
}
