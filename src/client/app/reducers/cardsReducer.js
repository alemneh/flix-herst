import * as types from '../ActionConstants';

const intialState = {
  cards: [],
  fetching: false,
  fetched: false,
  error: null,
  newCardImgUrl: '',
  newCardTagLine: ''

}

export default function reducer(state=intialState, action) {

  switch(action.type) {
    case types.FETCH_CARDS: {
      return {...state, fetching: true}
    }
    case types.FETCH_CARDS_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.FETCH_CARDS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        cards: action.payload
      }
    }
    case types.LIKE_BTN_CLICKED: {
      return {...state, fetching: true}
    }
    case types.LIKE_BTN_CLICKED_RECEIVED: {
      const { cardId, userId} = action.payload
      const newCards = [...state.cards]
      const CardToUpdate = newCards.findIndex(card => card._id === cardId);
      const LikeToUpdate = newCards[CardToUpdate].likes.indexOf(userId)

      if(LikeToUpdate === -1) {
        newCards[CardToUpdate].likes.push(userId);
      } else {
        newCards[CardToUpdate].likes.splice(LikeToUpdate, 1);
      }

      return {
        ...state,
        fetching: false,
        fetched: true,
        cards: newCards
      }
    }
    case types.LIKE_BTN_CLICKED_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.TAGLINE_CHANGED: {
      return {...state, newCardTagLine: action.payload}
    }
    case types.IMGURL_CHANGED: {
      return {...state, newCardImgUrl: action.payload}
    }
    case types.REMOVE_CARD: {
      return {...state, fetching: true}
    }
    case types.REMOVE_CARD_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.REMOVE_CARD_FULFILLED: {
      const { _id } = action.payload;
      const newCards = state.cards.filter(card => card._id != _id);
      return {
        ...state,
        fetching: false,
        fetched: true,
        cards: newCards
      }
    }
    case types.CREATE_CARD: {
      return {...state, fetching: true}
    }
    case types.CREATE_CARD_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.CREATE_CARD_FULFILLED: {
      const newCard = action.payload;
      let newCards = [...state.cards].concat(newCard);
      return {
        ...state,
        fetching: false,
        fetched: true,
        cards: newCards
      }
    }

  }

  return state
}
