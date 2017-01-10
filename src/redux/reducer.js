/**
 * Created by cjy on 16/11/23.
 */

import {combineReducers} from 'redux';
import listReducer from '../views/List/container/reducers';

const rootReducer = combineReducers({
    ...listReducer,
});
export default rootReducer;