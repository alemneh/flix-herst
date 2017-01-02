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
