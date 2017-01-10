import React from 'react';
import { expect } from 'chai';
import reducer from '../src/client/app/reducers/userReducer';

import * as types from '../src/client/app/ActionConstants';

let initialState, expectedState;

describe('User Reducer', () => {
  beforeEach(() => {
    initialState = {
      userId: null,
      fetching: false,
      fetched: false,
      error: null,
      newCardImgUrl: '',
      newCardTagLine: ''
    };

    expectedState = {
      userId: null,
      fetching: false,
      fetched: false,
      error: null,
      newCardImgUrl: '',
      newCardTagLine: ''
    };

  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_ID', () => {
    // Motify expectedState
    expectedState.fetching = true;
    expect(reducer(initialState, {
      type: types.FETCH_USER_ID
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_ID_FULFILLED', () => {
    // Motify initialState
    initialState.fetching = true;

    // Motify expectedState
    expectedState.fetching = false;
    expectedState.fetched = true;
    expectedState.userId = '123abc';
    expect(reducer(initialState, {
      type: types.FETCH_USER_ID_FULFILLED,
      payload: '123abc'
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_USER_ID_REJECTED', () => {
    // Motify initialState
    initialState.fetching = true;

    // Motify expectedState
    expectedState.fetching = false;
    expectedState.error = { message: 'Error'};
    expect(reducer(initialState, {
      type: types.FETCH_USER_ID_REJECTED,
      payload: { message: 'Error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle LOGOUT', () => {
    // Motify expectedState
    expectedState.fetching = true;
    expect(reducer(initialState, {
      type: types.LOGOUT
    })).to.deep.equal(expectedState);
  });

  it('should handle LOGOUT_REJECTED', () => {
    // Motify initialState
    initialState.fetching = true;

    // Motify expectedState
    expectedState.error = { message: 'Error'};
    expectedState.fetching = false;
    expect(reducer(initialState, {
      type: types.LOGOUT_REJECTED,
      payload: { message: 'Error' }
    })).to.deep.equal(expectedState);
  });

  it('should handle LOGOUT_FULFILLED', () => {
    // Motify initialState
    initialState.fetching = true;
    initialState.userId  = '123abc';

    // Motify expectedState
    expectedState.fetching = false;
    expectedState.fetched = true;

    expect(reducer(initialState, {
      type: types.LOGOUT_FULFILLED
    })).to.deep.equal(expectedState);
  });

});
