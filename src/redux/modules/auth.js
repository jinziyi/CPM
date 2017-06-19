import {createReducer} from '../utils';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const actions = {
    login: data => dispatch => data => dispatch({
        type: LOGIN,
        data
    }),
    logout:data => dispatch => data => dispatch({
        type: LOGOUT,
        data
    })
};


const initialState = {isLoggedIn: false};

const reducers = {
    [LOGIN]: state => ({...state, isLoggedIn: true}),
    [LOGOUT]: state => ({...state, isLoggedIn: false}),
};

export default createReducer(initialState, reducers);
