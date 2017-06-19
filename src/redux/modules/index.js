/**
 * Created by cjy on 16/11/23.
 */

import {combineReducers} from 'redux';
import auth from './auth';
import nav from './nav';

const rootReducer = combineReducers({
    auth,
    nav
});
export default rootReducer;