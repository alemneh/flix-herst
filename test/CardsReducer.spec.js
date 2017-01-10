import { expect } from 'chai';

import reducer from '../src/client/app/reducers/cardsReducer';
import * as types from '../src/client/app/ActionConstants';

let expectedState, initialState;


describe('Cards Reducer', () => {

  beforeEach(() => {
    initialState = {
      cards: [],
      fetching: false,
      fetched: false,
      error: null,
      newCardImgUrl: '',
      newCardTagLine: ''
    };
    expectedState = {
      cards: [],
      fetching: false,
      fetched: false,
      error: null,
      newCardImgUrl: '',
      newCardTagLine: ''
    };
  });

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(expectedState);
  });

  it('should handle FETCH_CARDS', () => {
    // Motify expectedState
    expectedState.fetching = true;
    expect(reducer(initialState, {
      type: types.FETCH_CARDS
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_CARDS_FULFILLED', () => {
    // Motify initialState
    initialState.fetching = true;
    
    // Motify expectedState
    expectedState.fetching = false;
    expectedState.fetched = true;
    expectedState.cards.push({id:1, name: 'Alem'});
    expect(reducer(initialState, {
      type: types.FETCH_CARDS_FULFILLED,
      payload: [{id:1, name: 'Alem'}]
    })).to.deep.equal(expectedState);
  });

  it('should handle FETCH_CARDS_REJECTED', () => {
    // Motify expectedState
    expectedState.fetching = false;
    expectedState.error = { message: 'error'};
    expect(reducer(initialState, {
      type: types.FETCH_CARDS_REJECTED,
      payload: { message: 'error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle LIKE_BTN_CLICKED', () => {
    // Motify expectedState
    expectedState.fetching = true;
    expect(reducer(initialState, {
      type: types.LIKE_BTN_CLICKED
    })).to.deep.equal(expectedState);
  });

  it('should handle LIKE_BTN_CLICKED_RECEIVED', () => {
    // If user has not liked card yet

    // Motify initialState
    initialState.cards.push({_id: 'XYZ', name: 'Alem', likes:[]});

    // Motify expectedState
    expectedState.fetching = false;
    expectedState.fetched = true;
    expectedState.cards.push({_id: 'XYZ', name: 'Alem', likes:['123abc']});
    expect(reducer(initialState, {
      type: types.LIKE_BTN_CLICKED_RECEIVED,
      payload: {cardId: 'XYZ', userId: '123abc'}
    })).to.deep.equal(expectedState);

    // If user has already liked card

    // Motify initialState
    initialState.cards[0].likes.push('123abc');

    // Motify expectedState
    expectedState.cards[0].likes.slice(0);
    expect(reducer(initialState, {
      type: types.LIKE_BTN_CLICKED_RECEIVED,
      payload: {cardId: 'XYZ', userId: '123abc'}
    })).to.deep.equal(expectedState);
  });

  it('should handle LIKE_BTN_CLICKED_REJECTED', () => {
    // Motify initialState
    initialState.fetching = true;

    // Motify expectedState
    expectedState.fetching = false;
    expectedState.error = { message: 'error'};
    expect(reducer(initialState, {
      type: types.LIKE_BTN_CLICKED_REJECTED,
      payload: {message: 'error'}
    })).to.deep.equal(expectedState);
  });

  it('should handle CREATE_CARD', () => {
    // Motify expectedState
    expectedState.fetching = true;
    expect(reducer(initialState, {
      type: types.CREATE_CARD
    })).to.deep.equal(expectedState);
  });

  it('should handle CREATE_CARD_FULFILLED', () => {
    // Motify initialState
    initialState.fetching = true;

    // Motify expectedState
    expectedState.fetching = false;
    expectedState.fetched  = true;
    expectedState.cards.push({id: 'XYZ', name:'Alem', likes: []});
    expect(reducer(initialState, {
      type: types.CREATE_CARD_FULFILLED,
      payload: {id: 'XYZ', name: 'Alem', likes:[]}
    })).to.deep.equal(expectedState);
  });

  it('should handle CREATE_CARD_REJECTED', () => {
    // Motify initialState
    initialState.fetching = true;

    // Motify expectedState
    expectedState.fetching = false;
    expectedState.error = { message: 'error'};
    expect(reducer(initialState, {
      type: types.CREATE_CARD_REJECTED,
      payload: { message: 'error' }
    }));
  });
});
