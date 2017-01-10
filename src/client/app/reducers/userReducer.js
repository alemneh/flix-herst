import React from 'react';
import * as types from '../ActionConstants';

const intialState = {
  userId: null,
  fetching: false,
  fetched: false,
  error: null,
  newCardImgUrl: '',
  newCardTagLine: ''
}

export default function(state=intialState, action) {
  switch(action.type) {
    case types.FETCH_USER_ID: {
      return {...state, fetching: true}
    }
    case types.FETCH_USER_ID_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.FETCH_USER_ID_FULFILLED: {
      return {
        ...state,
        fetching:false,
        fetched: true,
        userId: action.payload
      }
    }
    case types.LOGOUT: {
      return {...state, fetching: true}
    }
    case types.LOGOUT_REJECTED: {
      return {...state, fetching: false, error: action.payload}
    }
    case types.LOGOUT_FULFILLED: {
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
