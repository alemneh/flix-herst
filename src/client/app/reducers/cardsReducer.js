export default function reducer(state={
  cards: [],
  fetching: false,
  fetched: false,
  error: null,
  newCardImgUrl: '',
  newCardTagLine: ''
}, action) {

  switch(action.type) {
    case 'FETCH_CARDS': {
      return {...state, fetching: true}
    }
    case 'FETCH_CARDS_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_CARDS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        cards: action.payload
      }
    }
    case 'LIKE_BTN_CLICKED': {
      return {...state, fetching: true}
    }
    case 'LIKE_BTN_CLICKED_RECEIVED': {
      const { cardId, userId} = action.payload
      console.log(userId);
      const newCards = [...state.cards]
      const CardToUpdate = newCards.findIndex(card => card._id === cardId);
      const LikeToUpdate = newCards[CardToUpdate].likes.indexOf(userId)
      console.log(LikeToUpdate);
      if(LikeToUpdate === -1) {
        newCards[CardToUpdate].likes.push(userId);
      } else {
        newCards[CardToUpdate].likes.splice(LikeToUpdate, 1);
      }

      return {
        ...state,
        cards: newCards
      }
    }
    case 'LIKE_BTN_CLICKED_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'TAGLINE_CHANGED': {
      return {...state, newCardTagLine: action.payload}
    }
    case 'IMGURL_CHANGED': {
      return {...state, newCardImgUrl: action.payload}
    }

  }

  return state
}
