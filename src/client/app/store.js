import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import redirect from './redirectMiddleWare';

import reducer from './reducers';


const middleware = applyMiddleware(redirect, thunk, logger());

export default createStore(reducer, middleware);
