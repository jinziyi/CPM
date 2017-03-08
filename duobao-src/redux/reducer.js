/**
 * Created by cjy on 16/11/23.
 */

import {combineReducers} from 'redux';
import DbHomeReducer from '../views/DbHome/container/reducers';
import DuobaoReducer from '../views/WebView/container/reducers';

const rootReducer = combineReducers({
    ...DbHomeReducer,
    ...DuobaoReducer,
});
export default rootReducer;