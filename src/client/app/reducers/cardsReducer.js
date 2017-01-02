export default function reducer(state={
  cards: [],
  fetching: false,
  fetched: false,
  error: null
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
  }

  return state
}
