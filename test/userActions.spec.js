import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/client/app/actions/userAction';
import * as types from '../src/client/app/ActionConstants';
import moxios from 'moxios';
import { expect } from 'chai';
import axios from 'axios';

console.log(thunk+'hello');

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates FETCH_USER_ID_FULFILLED when fetching userId is done', () => {
    moxios.stubRequest('http://localhost:3000/isLoggedIn', {
      status: 200,
      response: { user: '123abc' }
    });


    const expectedActions = [
      { type: types.FETCH_USER_ID },
      { type: types.FETCH_USER_ID_FULFILLED, payload: '123abc'}
    ]

    const store = mockStore({ user:{ userId: null } })
    console.log(store.getState());

    console.log(store.dispatch(actions.fetchUserId()));
    // axios.get('http://localhost:3000/isLoggedIn').then((res) => {
    //   console.log(res.data);
    // })
    // .catch((err) => {console.log(err);})

    return store.dispatch(actions.fetchUserId())

  });
});
