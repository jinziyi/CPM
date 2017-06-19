/**
 * Created by cjy on 16/11/23.
 */

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {callAPIMiddleware} from './middlewares';
import rootReducer from './modules';

const middleware = applyMiddleware(thunk, callAPIMiddleware);

const store = createStore(rootReducer, {}, middleware);

export default store;