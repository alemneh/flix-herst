const intialState = {
  userId: localStorage.userId || null,
  fetching: false,
  fetched: false,
  error: null,
  newCardImgUrl: '',
  newCardTagLine: ''
}

export default function(state=intialState, action) {
  switch(action.type) {
    case 'FETCH_USER_ID': {
      return {...state, fetching: true}
    }
    case 'FETCH_USER_ID_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USER_ID_FULFILLED': {
      return {
        ...state,
        fetching:false,
        fetched: true,
        userId: action.payload
      }
    }
    case 'LOGOUT': {
      return {...state, fetching: true}
    }
    case 'LOGOUT_REJECTED': {
      return {...state, fetching: false, error: action.payload}
    }
    case 'LOGOUT_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        userId: null
      }
    }
  }

  return state;
}
