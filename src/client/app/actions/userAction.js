import axios from 'axios';

export function fecthUserId() {
  return function(dispatch) {
    dispatch({type: 'FETCH_USER_ID'});
    axios.get(process.env.URL + '/isLoggedIn')
      .then((res) => {
        dispatch({type: 'FETCH_USER_ID_FULFILLED', payload: res.data.user });
      })
      .catch((err) => {
        dispatch({type: 'FETCH_USER_ID_REJECTED', payload: err});
      });
  };
}

export function logOut() {
  return function(dispatch) {
    dispatch({type: 'LOGOUT'});
    axios.get(process.env.URL + '/logout')
      .then((res) => {
        dispatch({type: 'LOGOUT_FULFILLED', redirect: '/'});
      })
      .catch((err) => {
        dispatch({type: 'LOGOUT_REJECTED', payload: err});
      });
  };
}
