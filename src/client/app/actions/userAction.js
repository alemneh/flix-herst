import axios from 'axios';
import * as types from '../ActionConstants';

export function fetchUserId() {
  return function(dispatch) {
    dispatch({type: types.FETCH_USER_ID});
    axios.get(process.env.URL + '/isLoggedIn')
      .then((res) => {
        return dispatch({type: types.FETCH_USER_ID_FULFILLED, payload: res.data.user });
      })
      .catch((err) => {
        dispatch({type: types.FETCH_USER_ID_REJECTED, payload: err});
      });
  };
}

export function checkLoggIn() {
  return function(dispatch) {
    dispatch({type: types.CHECK_LOGGIN});
    axios.get(process.env.URL + '/isLoggedIn')
      .then((res) => {
        dispatch({type: types.CHECK_LOGGIN_FULFILLED, payload: res.data.user});
      })
      .catch((err) => {
        dispatch({type: types.CHECK_LOGGIN_REJECTED, payload: err});
      });
  };
}

export function logOut() {
  return function(dispatch) {
    dispatch({type: types.LOGOUT});
    axios.get(process.env.URL + '/logout')
      .then((res) => {
        dispatch({type: types.LOGOUT_FULFILLED, redirect: '/'});
      })
      .catch((err) => {
        dispatch({type: types.LOGOUT_REJECTED, payload: err});
      });
  };
}
