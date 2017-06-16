/**
 * Created by cjy on 16/11/23.
 */

import {createStore} from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer, {});

export default store;